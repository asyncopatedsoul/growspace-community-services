-- Activity tracking tables
-- Creates: activity_types, activities

-- Activity types table
CREATE TABLE IF NOT EXISTS activity_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL CHECK (length(name) >= 3),
  description TEXT,
  schema_version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Activities table
CREATE TABLE IF NOT EXISTS activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  activity_type_id UUID NOT NULL REFERENCES activity_types(id),
  occurred_at TIMESTAMPTZ NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  activity_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  verification_status TEXT NOT NULL DEFAULT 'pending' CHECK (
    verification_status IN ('pending', 'verified', 'failed', 'appealed')
  ),
  verification_method TEXT,
  verifier_id UUID REFERENCES profiles(id),
  verified_at TIMESTAMPTZ,
  verification_metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexes for performance
CREATE INDEX idx_activities_user_id ON activities(user_id);
CREATE INDEX idx_activities_activity_type_id ON activities(activity_type_id);
CREATE INDEX idx_activities_occurred_at ON activities(occurred_at DESC);
CREATE INDEX idx_activities_verification_status ON activities(verification_status);
CREATE INDEX idx_activities_user_type ON activities(user_id, activity_type_id);

-- GIN index for JSONB queries
CREATE INDEX idx_activities_activity_data ON activities USING GIN (activity_data);

-- Row Level Security
ALTER TABLE activity_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Activity types: Public read
CREATE POLICY "Activity types are viewable by everyone"
  ON activity_types FOR SELECT
  USING (true);

-- Activities: Users can read own activities, instructors/admins can read all
CREATE POLICY "Users can view own activities"
  ON activities FOR SELECT
  USING (
    auth.uid() = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('instructor', 'admin')
    )
  );

CREATE POLICY "Users can insert own activities"
  ON activities FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own pending activities"
  ON activities FOR UPDATE
  USING (auth.uid() = user_id AND verification_status = 'pending');

-- Insert default activity types
INSERT INTO activity_types (name, description) VALUES
  ('code_commit', 'Git commit to a repository'),
  ('location_checkin', 'Physical location check-in'),
  ('iot_sensor_reading', 'IoT device sensor data'),
  ('workshop_attendance', 'Workshop or event attendance'),
  ('habit_checkin', 'Daily habit tracking'),
  ('peer_review', 'Peer review or feedback')
ON CONFLICT (name) DO NOTHING;
