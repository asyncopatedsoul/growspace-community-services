/**
 * Input validation utilities using JSON Schema
 */

import { ValidationError } from "./errors.ts";

export interface ValidationSchema {
  type: string;
  required?: string[];
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * Validate data against a JSON schema
 * Basic implementation - in production, use a full JSON Schema validator
 */
export function validate(data: unknown, schema: ValidationSchema): void {
  if (schema.type === "object" && typeof data !== "object") {
    throw new ValidationError("Expected object");
  }

  if (schema.required && typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    for (const field of schema.required) {
      if (!(field in obj) || obj[field] === undefined || obj[field] === null) {
        throw new ValidationError(`Missing required field: ${field}`);
      }
    }
  }

  // Additional validation logic would go here
  // In production, use a library like Ajv for full JSON Schema support
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validate UUID format
 */
export function isValidUUID(uuid: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate ISO 8601 date format
 */
export function isValidISO8601(date: string): boolean {
  const iso8601Regex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
  return iso8601Regex.test(date) && !isNaN(Date.parse(date));
}

/**
 * Validate activity data against activity type requirements
 */
export function validateActivityData(
  activityType: string,
  data: Record<string, unknown>,
): void {
  switch (activityType) {
    case "code_commit":
      if (!data.repo_url || !data.commit_sha) {
        throw new ValidationError(
          "code_commit requires repo_url and commit_sha",
        );
      }
      break;
    case "location_checkin":
      if (
        typeof data.latitude !== "number" || typeof data.longitude !== "number"
      ) {
        throw new ValidationError(
          "location_checkin requires latitude and longitude",
        );
      }
      break;
    case "iot_sensor_reading":
      if (!data.device_id || !data.sensor_type || data.reading_value === undefined) {
        throw new ValidationError(
          "iot_sensor_reading requires device_id, sensor_type, and reading_value",
        );
      }
      break;
    default:
      // Generic validation passed
      break;
  }
}
