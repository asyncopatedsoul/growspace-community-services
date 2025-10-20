/**
 * Unit tests for validation utilities
 */

import { assertEquals, assertThrows } from "@std/assert";
import {
  isValidEmail,
  isValidISO8601,
  isValidUUID,
  sanitizeString,
  validateActivityData,
} from "../../supabase/functions/_shared/validation.ts";
import { ValidationError } from "../../supabase/functions/_shared/errors.ts";

Deno.test("isValidUUID - valid UUID", () => {
  const validUUID = "550e8400-e29b-41d4-a716-446655440000";
  assertEquals(isValidUUID(validUUID), true);
});

Deno.test("isValidUUID - invalid UUID", () => {
  const invalidUUID = "not-a-uuid";
  assertEquals(isValidUUID(invalidUUID), false);
});

Deno.test("isValidEmail - valid email", () => {
  const validEmail = "user@example.com";
  assertEquals(isValidEmail(validEmail), true);
});

Deno.test("isValidEmail - invalid email", () => {
  const invalidEmail = "not-an-email";
  assertEquals(isValidEmail(invalidEmail), false);
});

Deno.test("isValidISO8601 - valid ISO date", () => {
  const validDate = "2024-01-15T10:30:00Z";
  assertEquals(isValidISO8601(validDate), true);
});

Deno.test("isValidISO8601 - invalid ISO date", () => {
  const invalidDate = "2024-13-45";
  assertEquals(isValidISO8601(invalidDate), false);
});

Deno.test("sanitizeString - removes HTML tags", () => {
  const input = "<script>alert('xss')</script>";
  const expected = "&lt;script&gt;alert(&#x27;xss&#x27;)&lt;&#x2F;script&gt;";
  assertEquals(sanitizeString(input), expected);
});

Deno.test("validateActivityData - code_commit valid", () => {
  const data = {
    repo_url: "https://github.com/user/repo",
    commit_sha: "abc123",
  };
  // Should not throw
  validateActivityData("code_commit", data);
});

Deno.test("validateActivityData - code_commit missing fields", () => {
  const data = {
    repo_url: "https://github.com/user/repo",
    // missing commit_sha
  };
  assertThrows(
    () => validateActivityData("code_commit", data),
    ValidationError,
    "code_commit requires repo_url and commit_sha",
  );
});

Deno.test("validateActivityData - location_checkin valid", () => {
  const data = {
    latitude: 34.0522,
    longitude: -118.2437,
  };
  // Should not throw
  validateActivityData("location_checkin", data);
});

Deno.test("validateActivityData - location_checkin invalid coordinates", () => {
  const data = {
    latitude: "not a number",
    longitude: -118.2437,
  };
  assertThrows(
    () => validateActivityData("location_checkin", data),
    ValidationError,
    "location_checkin requires latitude and longitude",
  );
});

Deno.test("validateActivityData - iot_sensor_reading valid", () => {
  const data = {
    device_id: "sensor-001",
    sensor_type: "temperature",
    reading_value: 22.5,
  };
  // Should not throw
  validateActivityData("iot_sensor_reading", data);
});

Deno.test("validateActivityData - iot_sensor_reading missing fields", () => {
  const data = {
    device_id: "sensor-001",
    // missing sensor_type and reading_value
  };
  assertThrows(
    () => validateActivityData("iot_sensor_reading", data),
    ValidationError,
  );
});
