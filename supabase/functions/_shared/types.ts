/**
 * Shared TypeScript type definitions for the achievement system
 */

export interface Activity {
  id?: string;
  user_id: string;
  activity_type: ActivityType;
  occurred_at: string;
  recorded_at?: string;
  activity_data: Record<string, unknown>;
  verification_status?: VerificationStatus;
  verification_method?: string;
  verified_at?: string;
  verification_metadata?: Record<string, unknown>;
}

export type ActivityType =
  | "code_commit"
  | "location_checkin"
  | "iot_sensor_reading"
  | "workshop_attendance"
  | "habit_checkin"
  | "peer_review";

export type VerificationStatus = "pending" | "verified" | "failed" | "appealed";

export interface Achievement {
  id?: string;
  name: string;
  description: string;
  category_id: string;
  creator_id?: string;
  version?: number;
  requirements: AchievementRequirement[];
  verification_logic_ref?: string;
  reward_data?: RewardData;
  visibility?: "public" | "community" | "private";
  expires_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AchievementRequirement {
  activity_type: string;
  count?: number;
  consecutive_days?: number;
  conditions?: Record<string, unknown>;
  aggregate?: "sum" | "average" | "max" | "min";
  field?: string;
  target?: number;
}

export interface RewardData {
  badge_url?: string;
  points?: number;
  certificate?: boolean;
  access_grant?: string;
  [key: string]: unknown;
}

export interface VerificationRule {
  id?: string;
  name: string;
  activity_type_id: string;
  logic_function: string;
  required_evidence: string[];
  success_criteria: Record<string, unknown>;
  failure_conditions?: FailureCondition[];
  authority?: "automated" | "peer_review" | "instructor_review" | "admin_review";
}

export interface FailureCondition {
  field: string;
  condition: string;
  reason: string;
}

export interface UserProfile {
  id: string;
  username: string;
  display_name?: string;
  avatar_url?: string;
  bio?: string;
  role?: "user" | "instructor" | "admin";
  notification_preferences?: NotificationPreferences;
  integrations?: UserIntegrations;
  created_at?: string;
  updated_at?: string;
}

export interface NotificationPreferences {
  email_enabled?: boolean;
  sms_enabled?: boolean;
  achievement_notifications?: boolean;
  milestone_reminders?: boolean;
}

export interface UserIntegrations {
  github_username?: string;
  device_ids?: string[];
}

export interface BlockchainAttestation {
  achievement_id: string;
  user_pseudonym: string;
  granted_at: string;
  evidence_hash: string;
  ipfs_cid?: string;
  schema_version?: string;
  metadata?: AttestationMetadata;
}

export interface AttestationMetadata {
  achievement_name?: string;
  category?: string;
  issuer?: string;
  [key: string]: unknown;
}

export interface AchievementGrant {
  id?: string;
  achievement_id: string;
  user_id: string;
  granted_at?: string;
  granted_by?: string;
  evidence_summary?: Record<string, unknown>;
  revoked_at?: string;
  revocation_reason?: string;
  blockchain_tx_hash?: string;
  blockchain_synced_at?: string;
  ipfs_hash?: string;
}

export interface VerificationResult {
  success: boolean;
  verified: boolean;
  evidence_collected?: Record<string, unknown>;
  error_message?: string;
  verification_method: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}
