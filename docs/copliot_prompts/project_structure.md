Community Achievement System Repository Structure
Repository Organization
Based on the festival principles of "Open Source Everything" and "Immediate Applicability" (participants should be able to replicate and adapt), this repository structure prioritizes clarity, modularity, and ease of deployment.

desert-tech-achievement-system/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── .gitignore
├── .env.example
│
├── docs/
│   ├── getting-started.md
│   ├── architecture.md
│   ├── deployment-guide.md
│   ├── api-reference.md
│   ├── achievement-creation-guide.md
│   ├── security-best-practices.md
│   ├── examples/
│   │   ├── robotics-course-achievement.md
│   │   ├── wellness-checkin-achievement.md
│   │   └── community-event-attendance.md
│   └── troubleshooting.md
│
├── supabase/
│   ├── config.toml
│   ├── seed.sql
│   │
│   ├── migrations/
│   │   ├── 20240101000000_initial_schema.sql
│   │   ├── 20240102000000_activity_tables.sql
│   │   ├── 20240103000000_achievement_tables.sql
│   │   ├── 20240104000000_verification_tables.sql
│   │   ├── 20240105000000_ledger_tables.sql
│   │   ├── 20240106000000_rls_policies.sql
│   │   └── 20240107000000_functions_and_triggers.sql
│   │
│   └── functions/
│       ├── _shared/
│       │   ├── cors.ts
│       │   ├── auth.ts
│       │   ├── validation.ts
│       │   ├── errors.ts
│       │   ├── database.ts
│       │   ├── blockchain.ts
│       │   └── types.ts
│       │
│       ├── activity-verification/
│       │   ├── index.ts
│       │   ├── verify-code-commit.ts
│       │   ├── verify-geolocation.ts
│       │   ├── verify-iot-sensor.ts
│       │   ├── verify-workshop-attendance.ts
│       │   └── verify-custom.ts
│       │
│       ├── achievement-verification/
│       │   ├── index.ts
│       │   ├── check-eligibility.ts
│       │   ├── grant-achievement.ts
│       │   ├── revoke-achievement.ts
│       │   └── batch-check.ts
│       │
│       ├── achievement-management/
│       │   ├── create-achievement.ts
│       │   ├── update-achievement.ts
│       │   ├── list-achievements.ts
│       │   └── get-achievement-details.ts
│       │
│       ├── user-activities/
│       │   ├── log-activity.ts
│       │   ├── get-user-history.ts
│       │   └── export-user-data.ts
│       │
│       ├── blockchain-sync/
│       │   ├── write-attestation.ts
│       │   ├── verify-attestation.ts
│       │   └── ipfs-upload.ts
│       │
│       ├── notifications/
│       │   ├── send-achievement-granted.ts
│       │   ├── send-verification-failed.ts
│       │   └── send-milestone-reminder.ts
│       │
│       └── webhooks/
│           ├── github-webhook.ts
│           ├── iot-device-webhook.ts
│           └── external-service-webhook.ts
│
├── schemas/
│   ├── activity.schema.json
│   ├── achievement.schema.json
│   ├── verification-rule.schema.json
│   ├── user-profile.schema.json
│   └── blockchain-attestation.schema.json
│
├── lib/
│   ├── verification-engines/
│   │   ├── code-verification.ts
│   │   ├── geolocation-verification.ts
│   │   ├── time-verification.ts
│   │   ├── device-verification.ts
│   │   └── peer-verification.ts
│   │
│   ├── achievement-logic/
│   │   ├── requirement-checker.ts
│   │   ├── prerequisite-validator.ts
│   │   ├── progress-calculator.ts
│   │   └── reward-issuer.ts
│   │
│   ├── blockchain/
│   │   ├── ethereum-client.ts
│   │   ├── ipfs-client.ts
│   │   ├── attestation-builder.ts
│   │   └── signature-verifier.ts
│   │
│   └── integrations/
│       ├── github.ts
│       ├── google-maps.ts
│       ├── twilio.ts
│       └── sendgrid.ts
│
├── tests/
│   ├── unit/
│   │   ├── activity-verification.test.ts
│   │   ├── achievement-verification.test.ts
│   │   ├── blockchain-sync.test.ts
│   │   └── validation.test.ts
│   │
│   ├── integration/
│   │   ├── end-to-end-robotics.test.ts
│   │   ├── end-to-end-checkin.test.ts
│   │   └── webhook-handlers.test.ts
│   │
│   └── fixtures/
│       ├── sample-activities.json
│       ├── sample-achievements.json
│       └── sample-users.json
│
├── scripts/
│   ├── setup-local-dev.sh
│   ├── deploy-to-staging.sh
│   ├── deploy-to-production.sh
│   ├── backup-database.sh
│   ├── restore-database.sh
│   ├── seed-test-data.ts
│   ├── migrate-achievement-definitions.ts
│   └── generate-api-docs.ts
│
├── templates/
│   ├── achievement-definitions/
│   │   ├── code-based-achievement.json
│   │   ├── attendance-achievement.json
│   │   ├── milestone-achievement.json
│   │   ├── wellness-habit-achievement.json
│   │   └── community-contribution-achievement.json
│   │
│   └── verification-rules/
│       ├── github-commit-verification.json
│       ├── geolocation-verification.json
│       ├── iot-sensor-verification.json
│       └── peer-review-verification.json
│
├── examples/
│   ├── robotics-course/
│   │   ├── README.md
│   │   ├── achievement-definitions.json
│   │   ├── .github/
│   │   │   └── workflows/
│   │   │       └── verify-micropython-commit.yml
│   │   └── test-suite/
│   │       └── embedded-sim-tests.py
│   │
│   ├── wellness-checkin/
│   │   ├── README.md
│   │   ├── achievement-definitions.json
│   │   ├── microapp/
│   │   │   ├── package.json
│   │   │   ├── src/
│   │   │   │   ├── CheckInScreen.tsx
│   │   │   │   └── api.ts
│   │   │   └── README.md
│   │   └── verification-config.json
│   │
│   └── iot-smart-garden/
│       ├── README.md
│       ├── achievement-definitions.json
│       ├── arduino-sketch/
│       │   └── sensor-logger.ino
│       └── verification-webhook.ts
│
├── infrastructure/
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── modules/
│   │       ├── supabase/
│   │       ├── blockchain/
│   │       └── monitoring/
│   │
│   └── docker/
│       ├── Dockerfile.dev
│       └── docker-compose.yml
│
├── monitoring/
│   ├── dashboards/
│   │   ├── achievement-system-overview.json
│   │   └── verification-performance.json
│   │
│   └── alerts/
│       ├── high-error-rate.yaml
│       └── blockchain-sync-failure.yaml
│
├── package.json
├── tsconfig.json
├── deno.json
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   ├── deploy-staging.yml
    │   ├── deploy-production.yml
    │   └── security-scan.yml
    │
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   ├── feature_request.md
    │   └── achievement_proposal.md
    │
    └── PULL_REQUEST_TEMPLATE.md

Directory Descriptions
Root Level

README.md: Project overview, quick start, community links
LICENSE: Open source license (MIT recommended per festival values)
CONTRIBUTING.md: How community members can contribute (supports "Continuous Community" principle)
CODE_OF_CONDUCT.md: Community agreements (aligned with festival "Community Agreements")
CHANGELOG.md: Version history, breaking changes
.env.example: Template for environment variables


docs/
Complete documentation for replication and adaptation (supports "Immediate Applicability")

getting-started.md: 15-minute quick start guide
architecture.md: System design explanation with diagrams
deployment-guide.md: Step-by-step Supabase deployment
api-reference.md: Complete API documentation
achievement-creation-guide.md: How instructors/developers create achievements
security-best-practices.md: Privacy, anti-gaming, data protection
examples/: Real-world use cases with full walkthroughs
troubleshooting.md: Common issues and solutions


supabase/
Supabase-specific configuration and database migrations
config.toml
Supabase project configuration (API URLs, function settings, etc.)
migrations/
Database schema versioned migrations (chronological order)

20240101000000_initial_schema.sql: Core tables (users, profiles)
20240102000000_activity_tables.sql: Activity history, activity types
20240103000000_achievement_tables.sql: Achievement definitions, categories
20240104000000_verification_tables.sql: Verification rules, logs
20240105000000_ledger_tables.sql: Achievement grants, blockchain refs
20240106000000_rls_policies.sql: Row-level security (privacy controls)
20240107000000_functions_and_triggers.sql: Database functions, triggers

functions/
Supabase Edge Functions (Deno runtime, TypeScript)
_shared/: Common utilities used across functions

cors.ts: CORS headers for API responses
auth.ts: JWT validation, user authentication
validation.ts: Input validation helpers
errors.ts: Standardized error responses
database.ts: Database connection helpers
blockchain.ts: Web3 utilities
types.ts: TypeScript type definitions

activity-verification/: Activity verification services

index.ts: Router for verification types
verify-code-commit.ts: GitHub commit verification (robotics example)
verify-geolocation.ts: GPS-based verification (GA meeting example)
verify-iot-sensor.ts: IoT device data verification (smart garden)
verify-workshop-attendance.ts: Event check-in verification
verify-custom.ts: Extensible custom verification handler

achievement-verification/: Achievement grant/check services

index.ts: Achievement verification router
check-eligibility.ts: Check if user meets requirements
grant-achievement.ts: Issue achievement + blockchain sync
revoke-achievement.ts: Handle achievement revocation (if needed)
batch-check.ts: Check multiple users/achievements efficiently

achievement-management/: CRUD for achievement definitions

create-achievement.ts: Instructors create new achievements
update-achievement.ts: Modify achievement definitions (versioned)
list-achievements.ts: Browse available achievements
get-achievement-details.ts: Full achievement info + progress

user-activities/: User activity data endpoints

log-activity.ts: Manual activity logging endpoint
get-user-history.ts: Retrieve user's activity timeline
export-user-data.ts: GDPR-compliant data export

blockchain-sync/: Blockchain attestation services

write-attestation.ts: Write achievement grant to Ethereum
verify-attestation.ts: Verify blockchain-recorded achievement
ipfs-upload.ts: Upload verification hashes to IPFS

notifications/: User notification services

send-achievement-granted.ts: Notify on achievement unlock
send-verification-failed.ts: Alert on failed verification attempts
send-milestone-reminder.ts: Progress nudges

webhooks/: External service integrations

github-webhook.ts: Handle GitHub events (commits, PRs)
iot-device-webhook.ts: Receive IoT sensor data
external-service-webhook.ts: Generic webhook handler


schemas/
JSON Schema definitions for data validation

activity.schema.json: Activity data structure
achievement.schema.json: Achievement definition format
verification-rule.schema.json: Verification logic specification
user-profile.schema.json: User data model
blockchain-attestation.schema.json: Blockchain attestation format

Enables "Immediate Applicability": developers can validate their data structures before deployment

lib/
Reusable business logic (shared between Edge Functions)
verification-engines/
Modular verification implementations

code-verification.ts: GitHub/GitLab code review logic
geolocation-verification.ts: GPS/venue proximity checks
time-verification.ts: Timestamp validation, time window checks
device-verification.ts: Device fingerprinting, anti-spoofing
peer-verification.ts: Human review workflow logic

achievement-logic/
Achievement evaluation engines

requirement-checker.ts: Check if activities satisfy requirements
prerequisite-validator.ts: Validate achievement dependencies
progress-calculator.ts: Calculate completion percentage
reward-issuer.ts: Trigger rewards (badges, credentials, access)

blockchain/
Blockchain interaction utilities

ethereum-client.ts: Web3 provider, contract interactions
ipfs-client.ts: IPFS pinning service integration
attestation-builder.ts: Format EAS (Ethereum Attestation Service) data
signature-verifier.ts: Cryptographic signature validation

integrations/
External API clients

github.ts: GitHub API wrapper (webhooks, commits, PRs)
google-maps.ts: Geolocation/geocoding API
twilio.ts: SMS notifications
sendgrid.ts: Email notifications


tests/
Comprehensive test coverage (ensures system reliability)
unit/
Function-level tests

activity-verification.test.ts: Test verification logic
achievement-verification.test.ts: Test eligibility checks
blockchain-sync.test.ts: Test attestation formatting
validation.test.ts: Test input validation

integration/
End-to-end workflows

end-to-end-robotics.test.ts: Full robotics achievement flow
end-to-end-checkin.test.ts: Full check-in achievement flow
webhook-handlers.test.ts: Test external webhook handling

fixtures/
Test data

sample-activities.json: Mock activity records
sample-achievements.json: Example achievement definitions
sample-users.json: Test user profiles


scripts/
Operational automation

setup-local-dev.sh: One-command local environment setup
deploy-to-staging.sh: Deploy to staging Supabase project
deploy-to-production.sh: Deploy to production Supabase project
backup-database.sh: Automated database backups
restore-database.sh: Database restoration
seed-test-data.ts: Populate database with test achievements
migrate-achievement-definitions.ts: Bulk import/update achievements
generate-api-docs.ts: Auto-generate API documentation from code

Supports "Immediate Applicability": participants can run these scripts to deploy their own instance

templates/
Starter templates for common achievement patterns
achievement-definitions/
Pre-built achievement templates

code-based-achievement.json: For programming challenges
attendance-achievement.json: For event participation
milestone-achievement.json: For cumulative progress
wellness-habit-achievement.json: For daily habit tracking
community-contribution-achievement.json: For peer recognition

verification-rules/
Pre-built verification patterns

github-commit-verification.json: Code commit checks
geolocation-verification.json: Location-based checks
iot-sensor-verification.json: Sensor data validation
peer-review-verification.json: Human review workflow

Supports "Hands-On Learning": participants can copy/modify templates rather than starting from scratch

examples/
Complete working examples (aligned with festival use cases)
robotics-course/
Full IoT robotics achievement implementation

Achievement definitions for 3 challenges
GitHub Actions workflow for test suite
MicroPython test harness
Embedded system simulator integration

wellness-checkin/
GA meeting check-in microapp

React Native microapp source
Geolocation verification configuration
Achievement definitions for 1st, 10th, 50th meetings
Accountability partner notification logic

iot-smart-garden/
Smart garden sensor achievement

Arduino sensor logging code
Webhook endpoint for sensor data
Achievement for 30 days of continuous monitoring
Time-lapse photography integration

These examples are immediately applicable and demonstrate the system's versatility

infrastructure/
Infrastructure-as-Code for deployment
terraform/
Cloud infrastructure definitions

main.tf: Supabase project provisioning
variables.tf: Configurable parameters
outputs.tf: Connection strings, URLs
modules/: Reusable infrastructure components

docker/
Local development containers

Dockerfile.dev: Development environment
docker-compose.yml: Multi-service local stack

Supports "Regenerative Practice": infrastructure is documented and reproducible

monitoring/
Observability and alerting
dashboards/
Grafana/DataDog dashboards

achievement-system-overview.json: Key metrics
verification-performance.json: Service health

alerts/
Alert configurations

high-error-rate.yaml: Threshold-based alerts
blockchain-sync-failure.yaml: Critical system alerts

Ensures system reliability for "Continuous Community" engagement

.github/
GitHub-specific automation
workflows/
CI/CD pipelines

ci.yml: Run tests on every commit
deploy-staging.yml: Auto-deploy to staging
deploy-production.yml: Manual production deployment
security-scan.yml: Dependency vulnerability scanning

ISSUE_TEMPLATE/
Standardized issue templates

bug_report.md: Bug reporting template
feature_request.md: Feature proposal template
achievement_proposal.md: New achievement type proposal

PULL_REQUEST_TEMPLATE.md
PR checklist (tests, docs, breaking changes)
Supports "Open Source Everything": standardized contribution workflows

Key Design Decisions
1. Supabase Edge Functions (Deno Runtime)

Why Deno? Built-in TypeScript, modern APIs, secure by default
Why Edge Functions? Global distribution, low latency, serverless (scales automatically)
Trade-off: Deno ecosystem smaller than Node.js, but growing rapidly

2. Modular Function Structure
Each Edge Function is single-purpose (aligned with "Technology as Tool, Not Master"):

Easier to test
Easier to understand
Can be deployed/updated independently
Reduces blast radius of bugs

3. Shared Library Pattern (_shared/ + lib/)

_shared/: Edge Function utilities (Deno-specific)
lib/: Pure business logic (can be reused in other contexts)
Supports code reuse without tight coupling

4. Schema-First Design
JSON Schemas define contracts before implementation:

Enables parallel development (frontend + backend)
Automatic validation
Self-documenting APIs
Supports "Immediate Applicability": developers understand data structures immediately

5. Examples as First-Class Citizens
Examples aren't just documentation—they're working code that participants can fork:

Demonstrates patterns
Provides starting point for customization
Validates that system actually works

6. Infrastructure as Code
All infrastructure defined in version control:

Reproducible deployments
Easy to fork for regional chapters
Supports "Local-First Economics": communities can self-host


Deployment Workflow
Local Development
bash# Clone repository
git clone https://github.com/desert-tech-festival/achievement-system.git
cd achievement-system

# Setup environment
./scripts/setup-local-dev.sh

# Start local Supabase
supabase start

# Run migrations
supabase db reset

# Seed test data
deno run --allow-all scripts/seed-test-data.ts

# Deploy Edge Functions locally
supabase functions serve

# Run tests
deno test --allow-all
Staging Deployment
bash# Deploy to staging Supabase project
./scripts/deploy-to-staging.sh

# Run integration tests against staging
deno test --allow-all tests/integration/
Production Deployment
bash# Manual approval required
./scripts/deploy-to-production.sh

# Monitor deployment
# Check monitoring/dashboards/ for real-time metrics

Extension Points
Adding New Verification Types

Create new file in lib/verification-engines/
Implement verification logic
Register in supabase/functions/activity-verification/index.ts
Add JSON Schema to schemas/
Write tests in tests/unit/
Submit PR

Adding New Achievement Templates

Create JSON file in templates/achievement-definitions/
Document usage in docs/examples/
Add test fixture in tests/fixtures/
Submit PR

Adding New Integrations

Create client in lib/integrations/
Add webhook handler in supabase/functions/webhooks/ (if needed)
Document API keys in .env.example
Add integration test
Submit PR


Community Contribution Workflow
Aligned with "Continuous Community" principle:

Propose: Open issue using templates
Discuss: Community reviews and provides feedback
Implement: Fork, code, test locally
Submit: Pull request with tests and docs
Review: Maintainers and community review
Merge: Automated deployment to staging
Release: Manual promotion to production
Celebrate: Contributor recognized in CHANGELOG


This repository structure embodies the festival's values:

Radical Inclusion: Clear docs lower barriers to contribution
Open Source Everything: All code, schemas, examples shared
Bioregional Wisdom: Modular design allows local adaptation
Immediate Applicability: Working examples can be forked and deployed
Continuous Community: GitHub enables year-round collaboration

The structure scales from individual instructors (using templates) to the full festival implementation (deploying entire system).RetryMcreate an LLM prompt to implement the community services with this directory structure. do not create any sample code. just describe the technical requirements and integration details of each file or module.2 / 2LLM 

Implementation Prompt: Desert Tech & Life Festival Achievement System

# Project Context
You are implementing a modular achievement system for a community-focused technology and sustainability festival. This system tracks user activities, verifies achievements, and records accomplishments on both centralized (Supabase) and decentralized (Ethereum/IPFS) ledgers.

# Core Values to Embody:

- Open Source Everything: All code is shared, documented, and replicable
- Immediate Applicability: Systems must be deployable by community members
- Hands-On Learning: Architecture teaches by example
- Regenerative Practice: Code quality and documentation enable long-term evolution

# Technical Stack:

- Runtime: Deno (TypeScript) for Supabase Edge Functions
- Database: PostgreSQL via Supabase
- Blockchain: Ethereum (via Infura/Alchemy) + IPFS
- Authentication: Supabase Auth (JWT)
- APIs: RESTful endpoints via Edge Functions


# Implementation Instructions by File
Root Level Files
README.md
Purpose: Project landing page and quick start guide
Requirements:

Project title and tagline explaining the achievement system purpose
Badge section: build status, test coverage, license, community Discord/chat link
Quick start section: 5-step process to deploy locally (prerequisites, clone, setup, deploy, test)
Architecture overview: high-level diagram showing user apps → Edge Functions → Database → Blockchain
Use cases section: reference the three examples (robotics, wellness check-in, smart garden)
Links to detailed documentation in /docs
Contribution guidelines link
Community section: how to get help, report bugs, propose features
License information (MIT recommended)
Acknowledgments: festival organizers, contributors, related projects

Technical Details:

Use Mermaid.js for architecture diagrams
Include actual CLI commands (not just descriptions)
Add troubleshooting section for common setup issues


LICENSE
Purpose: Legal framework for open source usage
Requirements:

MIT License text (aligns with "Open Source Everything")
Copyright holder: Desert Tech & Life Festival Community
Current year in copyright notice


CONTRIBUTING.md
Purpose: Lower barriers to community contribution
Requirements:

Code of Conduct reference (see CODE_OF_CONDUCT.md)
How to set up development environment (reference setup script)
Coding standards: TypeScript strict mode, Deno style guide, 80% test coverage minimum
Commit message conventions: Conventional Commits format
Branch naming: feature/, bugfix/, docs/, refactor/ prefixes
Pull request process: draft PR for early feedback, required checks (tests, linter, security scan)
Review process: minimum 1 maintainer approval, community can provide feedback
Issue templates usage guidance
Recognition: contributors listed in CHANGELOG, achievement badge for first merged PR
Development workflow: local testing → staging deployment → integration tests → production promotion

Technical Details:

Reference specific GitHub Actions that run on PRs
Explain how to run tests locally before pushing
Document environment variable requirements


CODE_OF_CONDUCT.md
Purpose: Establish community norms aligned with festival values
Requirements:

Based on Contributor Covenant 2.1
Customizations reflecting festival principles:

Radical Inclusion language
Respect for diverse knowledge levels
Emphasis on collaborative learning
Anti-harassment policies


Enforcement: community moderators contact info
Reporting process: email, anonymous form option
Consequences: warning, temporary ban, permanent ban


CHANGELOG.md
Purpose: Track system evolution over time
Requirements:

Format: Keep a Changelog standard
Sections: Added, Changed, Deprecated, Removed, Fixed, Security
Semantic versioning: MAJOR.MINOR.PATCH
Unreleased section at top for ongoing work
Each entry includes: date, version, contributor GitHub handles
Link to GitHub release tags
Breaking changes highlighted in bold

Technical Details:

Automated generation via script (reference in /scripts)
Integration with GitHub Releases


.gitignore
Purpose: Exclude sensitive and generated files from version control
Requirements:

Node/Deno patterns: node_modules/, .deno_cache/, deno.lock
Environment files: .env, .env.local, .env.*.local
IDE files: .vscode/, .idea/, *.swp
Build outputs: dist/, build/, .build/
Test outputs: coverage/, .nyc_output/
OS files: .DS_Store, Thumbs.db
Supabase local files: supabase/.temp/, supabase/docker/
Log files: *.log, logs/
Secret keys: *.pem, *.key (except example files)


.env.example
Purpose: Template for required environment variables
Requirements:

Supabase configuration:

SUPABASE_URL: Project URL
SUPABASE_ANON_KEY: Public anonymous key
SUPABASE_SERVICE_ROLE_KEY: Admin key (comment warning: DO NOT COMMIT)


Blockchain configuration:

ETHEREUM_RPC_URL: Infura/Alchemy endpoint
ETHEREUM_PRIVATE_KEY: Signing key for attestations (comment: generate securely)
ETHEREUM_CHAIN_ID: Network ID (1 for mainnet, 5 for Goerli testnet)
IPFS_API_URL: IPFS pinning service URL
IPFS_API_KEY: Pinning service key


Integration APIs:

GITHUB_WEBHOOK_SECRET: For validating GitHub webhooks
GOOGLE_MAPS_API_KEY: For geolocation verification
TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN: For SMS notifications
SENDGRID_API_KEY: For email notifications


Feature flags:

ENABLE_BLOCKCHAIN_SYNC: Boolean, defaults to false for local dev
ENABLE_NOTIFICATIONS: Boolean, defaults to true
LOG_LEVEL: debug/info/warn/error


Rate limiting:

RATE_LIMIT_REQUESTS_PER_MINUTE: Default 60
RATE_LIMIT_BURST: Default 10



Technical Details:

Each variable has inline comment explaining purpose and example value
Secrets have STRONG warnings about secure generation
Links to documentation for obtaining API keys


/docs Directory
docs/getting-started.md
Purpose: 15-minute onboarding for new developers
Requirements:

Prerequisites section: Deno installation, Supabase CLI, Git, code editor
Installation steps:

Clone repository
Copy .env.example to .env and fill in values
Run ./scripts/setup-local-dev.sh
Verify setup with deno test


First deployment: Deploy to local Supabase, test with curl commands
Example workflow: Create test user, log activity, verify activity, check achievement
Next steps: Links to architecture docs, API reference, example implementations
Troubleshooting: Common errors with solutions (port conflicts, permission issues, missing env vars)

Technical Details:

Include actual curl commands with expected responses
Screenshots of successful deployment
Video walkthrough link (if available)


docs/architecture.md
Purpose: Explain system design decisions and data flow
Requirements:

High-level architecture diagram: User devices → Edge Functions → PostgreSQL + Ethereum/IPFS
Component breakdown:

Edge Functions layer: stateless, horizontally scalable, Deno runtime
Database layer: PostgreSQL with Row Level Security, real-time subscriptions
Blockchain layer: Ethereum for attestations, IPFS for data hashes


Data flow diagrams:

Activity logging → Verification → Storage
Achievement check → Eligibility evaluation → Grant → Blockchain sync


Security model:

Authentication: JWT tokens, user-scoped queries
Authorization: RLS policies, role-based access
Privacy: PII in centralized DB only, hashes on blockchain


Scalability considerations:

Edge Functions auto-scale
Database connection pooling
Blockchain writes are async (don't block user experience)


Trade-offs documented:

Centralized DB for UX vs. blockchain for permanence
Deno ecosystem maturity vs. modern features



Technical Details:

Mermaid sequence diagrams for data flows
Capacity estimates: requests/second, concurrent users
Latency targets: <200ms API response, <1s achievement grant


docs/deployment-guide.md
Purpose: Step-by-step production deployment
Requirements:

Supabase project setup:

Create new project via Supabase dashboard
Note project URL and keys
Configure authentication providers


Database migrations:

Run migrations in order via supabase db push
Verify schema with supabase db diff


Edge Functions deployment:

Deploy all functions: supabase functions deploy --no-verify-jwt (explain JWT verification)
Set environment variables: supabase secrets set KEY=value
Test deployed functions with curl


Blockchain setup:

Create Ethereum wallet (MetaMask recommended)
Fund wallet with ETH (testnet for staging, mainnet for production)
Deploy smart contracts (if custom contracts used)
Verify IPFS connectivity


Monitoring setup:

Configure Supabase dashboard alerts
Optional: Integrate with Grafana/DataDog


DNS/domain configuration (if custom domain)
Rollback procedure: How to revert to previous version
Blue-green deployment strategy (for zero-downtime updates)

Technical Details:

Separate sections for staging vs. production
Security checklist: rotate keys, enable RLS, test auth flows
Cost estimates: Supabase pricing, Ethereum gas costs, IPFS pinning costs


docs/api-reference.md
Purpose: Complete API documentation for client developers
Requirements:

OpenAPI 3.0 specification format
For each endpoint:

HTTP method and path
Description and use case
Authentication requirements (JWT, API key, etc.)
Request parameters: path params, query params, body schema
Response schema: success (200/201) and error (400/401/403/500) formats
Example requests (curl) and responses (JSON)
Rate limiting details
Idempotency guarantees (for write operations)


Organized by function group:

Activity Verification endpoints
Achievement Verification endpoints
Achievement Management endpoints
User Activities endpoints
Blockchain Sync endpoints
Webhooks


Authentication section: How to obtain and use JWT tokens
Error handling: Standard error format, error codes, troubleshooting tips
Webhooks: Event types, payload schemas, retry logic, signature verification

Technical Details:

Auto-generated from JSDoc comments in code (via script)
Interactive API explorer (Swagger UI)
Client SDK generation hints (OpenAPI Generator compatible)


docs/achievement-creation-guide.md
Purpose: Tutorial for instructors/developers creating achievements
Requirements:

Concepts overview: Activities vs. Achievements, Verification vs. Grant
Achievement anatomy: Required fields, optional fields, best practices
Step-by-step creation:

Define achievement goal and requirements
Choose verification method (automated, peer review, hybrid)
Write achievement definition JSON (reference template)
Implement verification logic (if custom)
Test with sample data
Deploy and announce to community


Verification methods deep dive:

Code-based: GitHub webhooks, test suite integration
Location-based: Geofencing, time windows, check-in/check-out
Sensor-based: IoT device signatures, data validation
Peer-review: Workflow for human verification


Achievement progression patterns:

Linear (Level 1 → 2 → 3)
Branching (choose your path)
Cumulative (collect all sub-achievements)


Gamification best practices:

Clear goals, immediate feedback, celebration
Balance difficulty (not too easy, not impossible)
Social proof (show who else earned it)


Examples walkthrough: Robotics course achievements in detail

Technical Details:

JSON Schema validation examples
Common pitfalls: overly complex requirements, unclear success criteria
Testing strategies: Use fixtures, test edge cases


docs/security-best-practices.md
Purpose: Ensure secure deployment and operation
Requirements:

Authentication security:

JWT token expiration policies (15-minute access, 7-day refresh recommended)
Secure token storage (httpOnly cookies for web, Keychain for mobile)
Multi-factor authentication support


Authorization security:

Row Level Security (RLS) policies: User can only read own data, admins can read all
Role-based access control: User, instructor, admin roles
API key rotation schedule (every 90 days)


Input validation:

All inputs validated against JSON Schema
SQL injection prevention: Use parameterized queries only
XSS prevention: Sanitize user-provided HTML
Rate limiting: Per-user and per-IP limits


Data privacy:

PII handling: Encrypt at rest, TLS in transit
GDPR compliance: Data export, right to erasure
Blockchain considerations: Never put PII on-chain, use pseudonymous IDs


Anti-gaming measures:

Device fingerprinting to prevent Sybil attacks
Location spoofing detection (require multiple sensors)
Rate limiting on verification requests
Captcha for suspicious activity patterns


Blockchain security:

Private key management: Use HSM or encrypted key storage
Transaction signing: Verify gas limits, use multicall for batch operations
Smart contract auditing (if custom contracts)


Incident response:

Security contact: security@desert-tech-festival.org
Disclosure policy: Responsible disclosure, 90-day embargo
Bug bounty program (optional)



Technical Details:

OWASP Top 10 checklist
Security audit recommendations (annual third-party review)
Penetration testing guidelines


docs/examples/ (subdirectory)
docs/examples/robotics-course-achievement.md
Purpose: Complete walkthrough of code-based achievement
Requirements:

Use case: IoT robotics course with 3 coding challenges
Achievement definitions:

Challenge 1: "Hello Blinky" - Basic LED control via MicroPython
Challenge 2: "Sensor Symphony" - Read 3 sensor types, log to serial
Challenge 3: "Smart Thermostat" - Control heating/cooling based on temp sensor


Technical setup:

Student creates GitHub repo
Instructor provides starter code and test suite
GitHub Actions workflow configured for automated testing


Verification flow:

Student commits code
GitHub Actions runs embedded system simulator
Test results posted to commit status
Webhook notifies achievement system
System verifies: valid student, passing tests, required functionality
Activity logged as verified


Achievement grant flow:

After 3 verified commits (one per challenge), achievement unlocked
Blockchain attestation created
Student receives notification and digital badge


Code snippets: GitHub Actions YAML, test suite structure, webhook handler
Troubleshooting: Common test failures, debugging techniques

Technical Details:

Reference actual files in /examples/robotics-course/
Include simulator setup instructions
Link to MicroPython documentation


docs/examples/wellness-checkin-achievement.md
Purpose: Complete walkthrough of location-based achievement
Requirements:

Use case: Gambler's Anonymous meeting attendance tracking
Achievement definitions:

First Meeting: Attend 1 in-person meeting
Regular Attendee: Attend 10 meetings
Committed Member: Attend 50 meetings


Technical setup:

Microapp (React Native) with geolocation permission
Meeting locations registered in system (lat/long + radius)
Check-in button triggers verification


Verification flow:

User taps "Check In" at meeting
Microapp collects: GPS coords, timestamp, device ID, optional photo
Verification request sent to Edge Function
System validates: Device ID matches user, GPS within 100m of venue, timestamp within meeting time window (±30 minutes), user hasn't already checked in to this meeting
Activity logged as verified


Achievement grant flow:

After first verified check-in, "First Meeting" achievement granted
Progress shown: "9 more to Regular Attendee"
Accountability partner notified of milestone


Privacy considerations: Location data not stored on blockchain, only activity hash
Anti-gaming: Device fingerprinting prevents fake check-ins from emulators

Technical Details:

Reference actual files in /examples/wellness-checkin/
Geolocation accuracy requirements (GPS + WiFi + cellular triangulation)
Handling edge cases: GPS drift, user arrives early/late


docs/examples/iot-smart-garden-achievement.md
Purpose: Complete walkthrough of sensor-based achievement
Requirements:

Use case: Smart garden with 30 days continuous monitoring
Achievement definition:

Green Thumb: Maintain garden sensors online for 30 consecutive days
Optimization Expert: Achieve optimal microclimate (temp, humidity, soil moisture) for 7 consecutive days


Technical setup:

Arduino/ESP32 with sensors (temp, humidity, soil moisture, light)
Device posts readings every 15 minutes to webhook
Time-lapse camera captures daily photo


Verification flow:

IoT device sends sensor reading payload (JSON) to webhook
Webhook validates: Device ID matches registered device, sensor values are realistic (not physically impossible), timestamp is recent (within 30 minutes)
Activity logged with sensor data
System tracks consecutive days without gaps (>2 hour gap resets counter)


Achievement grant flow:

After 30 days of verified readings, achievement granted
Time-lapse video of 30 days compiled and linked in achievement
User can export sensor data CSV for analysis


Hardware security: Device uses HTTPS, unique device certificate, signed payloads

Technical Details:

Reference actual files in /examples/iot-smart-garden/
Arduino sketch structure (sensor reading, WiFi, HTTPS POST)
Webhook handler implementation details
Data visualization: Chart.js graphs of sensor readings over time


docs/troubleshooting.md
Purpose: Common issues and solutions
Requirements:

Organized by symptom:

"Can't connect to Supabase" → Check API URL, verify network, check firewall
"JWT token invalid" → Check expiration, verify signing key, refresh token
"Verification fails for valid activity" → Check verification logic, review logs, test locally
"Blockchain transaction fails" → Check gas limit, verify wallet balance, retry with higher gas
"Edge Function timeout" → Optimize query, add caching, increase timeout limit


Each issue includes:

Symptom description
Root cause
Step-by-step fix
Prevention strategy


Debugging techniques:

Enable debug logging: Set LOG_LEVEL=debug in environment
Use Supabase dashboard logs
Test functions locally before deploying
Use browser DevTools for client-side issues


Getting help: Discord/forum link, how to write good bug reports

Technical Details:

Log examples showing typical errors
Links to relevant documentation sections
Community-contributed solutions (crowdsourced troubleshooting)


/supabase Directory
supabase/config.toml
Purpose: Supabase CLI configuration
Requirements:

Project ID and project name
Database configuration: Port, schema version
Auth configuration: JWT expiration, providers enabled
API configuration: Max rows per request, enable/disable features
Edge Functions configuration: Verify JWT setting, import maps for Deno
Storage configuration: File size limits, allowed MIME types (if using storage)

Technical Details:

This file is generated by supabase init but customized for project needs
Don't commit actual project ID (use placeholder, populate from environment)


supabase/seed.sql
Purpose: Populate database with initial data for testing
Requirements:

Insert sample users (3-5 test users with different roles: regular user, instructor, admin)
Insert sample achievement definitions (5-10 achievements covering different types):

Code-based achievement (robotics challenge)
Location-based achievement (event attendance)
Milestone achievement (habit streak)


Insert sample activities (10-20 activities across users):

Mix of verified and unverified
Different activity types


Insert sample achievement grants (2-3 users have earned 1-2 achievements)
DO NOT include in production deployment (dev/test only)

Technical Details:

Use realistic data (names, locations, timestamps)
Ensure data satisfies foreign key constraints
Include comments explaining each section


supabase/migrations/ (subdirectory)
20240101000000_initial_schema.sql
Purpose: Create core database tables
Requirements:

profiles table:

id UUID primary key (links to auth.users)
username TEXT unique
display_name TEXT
avatar_url TEXT
bio TEXT
role ENUM (user, instructor, admin)
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ


organizations table (optional, for multi-tenancy):

id UUID primary key
name TEXT
description TEXT
website_url TEXT


RLS policies: Users can read all profiles, can only update own profile

Technical Details:

Use UUID for all IDs (better for distributed systems)
Add indexes: username, created_at
Add triggers for updated_at auto-update


20240102000000_activity_tables.sql
Purpose: Tables for tracking user activities
Requirements:

activity_types table:

id UUID primary key
name TEXT unique (e.g., "code_commit", "location_checkin")
description TEXT
schema_version INTEGER (for evolution)
created_at TIMESTAMPTZ


activities table:

id UUID primary key
user_id UUID foreign key to profiles
activity_type_id UUID foreign key to activity_types
occurred_at TIMESTAMPTZ (when activity happened, user-provided)
recorded_at TIMESTAMPTZ (when logged in system)
activity_data JSONB (flexible storage for activity-specific data)
verification_status ENUM (pending, verified, failed, appealed)
verification_method TEXT (e.g., "github_webhook", "geolocation")
verifier_id UUID (system user or human reviewer)
verified_at TIMESTAMPTZ
verification_metadata JSONB (verification details)


RLS policies: Users can read own activities, instructors/admins can read all

Technical Details:

Index on user_id, activity_type_id, occurred_at (for queries)
GIN index on activity_data JSONB (for JSON queries)
Partition table by occurred_at (monthly partitions) for scalability


20240103000000_achievement_tables.sql
Purpose: Achievement definitions and categories
Requirements:

achievement_categories table:

id UUID primary key
name TEXT unique (e.g., "Coding", "Wellness", "Community")
icon_url TEXT
display_order INTEGER


achievements table:

id UUID primary key
name TEXT not null
description TEXT
category_id UUID foreign key to achievement_categories
creator_id UUID foreign key to profiles
version INTEGER (starts at 1, incremented on changes)
requirements JSONB (structured requirements definition)
verification_logic_ref TEXT (reference to verification function)
reward_data JSONB (badge image, credentials, access grants)
visibility ENUM (public, community, private)
expires_at TIMESTAMPTZ (null for permanent achievements)
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ


achievement_prerequisites table (for dependency chains):

achievement_id UUID (the achievement)
prerequisite_id UUID (must be earned first)
required BOOLEAN (true = must have, false = optional but helpful)


RLS policies: Public achievements readable by all, private only by creator/grantees

Technical Details:

Index on category_id, creator_id, created_at
JSON Schema validation constraint on requirements JSONB
Trigger to prevent circular prerequisites


20240104000000_verification_tables.sql
Purpose: Verification rules and audit logs
Requirements:

verification_rules table:

id UUID primary key
name TEXT unique
activity_type_id UUID foreign key (which activities this verifies)
logic_function TEXT (name of Edge Function to call)
required_evidence JSONB (what fields must be in activity_data)
success_criteria JSONB (conditions for passing)
failure_conditions JSONB (explicit rejection criteria)
authority ENUM (automated, peer_review, instructor_review, admin_review)
created_at TIMESTAMPTZ


verification_attempts table (audit log):

id UUID primary key
activity_id UUID foreign key
verification_rule_id UUID foreign key
result ENUM (success, failure, pending, error)
evidence_collected JSONB
error_message TEXT (if result = error)
attempted_at TIMESTAMPTZ
attempted_by UUID (system or user ID)


RLS policies: Users can view own verification attempts, admins can view all

Technical Details:

Index on activity_id, attempted_at
Prevent multiple successful verifications for same activity (unique constraint)


20240105000000_ledger_tables.sql
Purpose: Achievement grants and blockchain references
Requirements:

achievement_grants table:

id UUID primary key
achievement_id UUID foreign key
user_id UUID foreign key
granted_at TIMESTAMPTZ
granted_by TEXT (system, instructor username, or "automated")
evidence_summary JSONB (which activities satisfied requirements)
revoked_at TIMESTAMPTZ (null unless revoked)
revocation_reason TEXT
blockchain_tx_hash TEXT (Ethereum transaction hash)
blockchain_synced_at TIMESTAMPTZ
ipfs_hash TEXT (hash of attestation data on IPFS)


blockchain_sync_queue table (for async blockchain writes):

id UUID primary key
grant_id UUID foreign key to achievement_grants
status ENUM (pending, in_progress, completed, failed)
attempts INTEGER
last_attempt_at TIMESTAMPTZ
error_message TEXT
created_at TIMESTAMPTZ


RLS policies: Users can read own grants, all users can verify grants via blockchain

Technical Details:

Unique constraint on (achievement_id, user_id) to prevent duplicates
Index on user_id, granted_at (for user achievement history)
Index on blockchain_tx_hash (for blockchain verification queries)


20240106000000_rls_policies.sql
Purpose: Comprehensive Row Level Security policies
Requirements:

Policies for each table:

SELECT policies: Who can read rows
INSERT policies: Who can create rows
UPDATE policies: Who can modify rows
DELETE policies: Who can remove rows (often restricted to admins only)


Common patterns:

Users can CRUD their own data (e.g., activities)
Instructors can read data for their students/courses
Admins can read all data
Public data (e.g., public achievements) readable by anonymous users


Security considerations:

Use auth.uid() to get current user ID
Use auth.jwt() ->> 'role' to check user role
Never allow data leakage via JOIN conditions


Testing: Include RLS test cases (verify policies work as expected)

Technical Details:

Policies must be efficient (use indexes)
Document policy logic with comments
Consider performance: complex policies can slow queries


20240107000000_functions_and_triggers.sql
Purpose: Database-level automation and helpers
Requirements:

update_updated_at() trigger function:

Automatically sets updated_at = NOW() on UPDATE
Apply to: profiles, achievements, all tables with updated_at


notify_achievement_progress() trigger function:

After INSERT on activities (if verified), check if user is close to earning achievements
Emit PostgreSQL notification (e.g., "user:123:progress" channel)
Client apps can subscribe to real-time progress updates


check_achievement_eligibility(user_id UUID, achievement_id UUID) function:

SQL function to evaluate achievement requirements
Returns BOOLEAN (true if eligible)
Used by achievement verification service


get_user_achievement_progress(user_id UUID) function:

Returns JSON array of achievements with progress (e.g., "3/5 activities completed")
Efficient query for dashboard views


validate_activity_data(activity_type TEXT, activity_data JSONB) function:

Validates activity_data against schema for activity type
Returns validation errors if any
Called before INSERT into activities



Technical Details:

Use PL/pgSQL for complex logic
Optimize for query performance (avoid N+1 queries)
Add error handling (EXCEPTION blocks)
Document function parameters and return types


supabase/functions/ (subdirectory)
supabase/functions/_shared/cors.ts
Purpose: CORS header utilities for all Edge Functions
Requirements:

Export corsHeaders object with common CORS headers:

Access-Control-Allow-Origin: Configurable (default: * for dev, specific domains for prod)
Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT


Export handleCors(req: Request) function:

If request method is OPTIONS, return 200 with CORS headers (preflight)
Otherwise, return null (proceed with actual handler)


Configuration:

Read allowed origins from environment variable CORS_ALLOWED_ORIGINS
Support wildcard or comma-separated domain list



Technical Details:

Deno standard: Use new Response() for OPTIONS response
Security: Never use * in production for authenticated endpoints


supabase/functions/_shared/auth.ts
Purpose: JWT validation and user extraction
Requirements:

Export getUserFromRequest(req: Request) async function:

Extract JWT from Authorization header (Bearer <token>)
Verify JWT using Supabase JWT secret (from environment)
Return user object: { id: string, email: string, role: string }
Throw error if token invalid or expired


Export requireAuth(req: Request) async function:

Calls getUserFromRequest, throws 401 error if fails


Export requireRole(req: Request, requiredRole: string) async function:

Calls getUserFromRequest, checks role, throws 403 if insufficient


JWT verification:

Use jose library (Deno-compatible JWT library)
Validate signature, expiration, issuer



Technical Details:

Handle edge cases: Missing header, malformed token, expired token
Cache user object in request context (avoid re-verifying in same request)


supabase/functions/_shared/validation.ts
Purpose: Input validation using JSON Schemas
Requirements:

Export validateInput(data: unknown, schemaPath: string) function:

Load JSON Schema from /schemas/{schemaPath}
Validate data against schema using AJV (Ajv JSON Schema validator)
Return validated data (typed) or throw ValidationError with details



Export ValidationError class:

RetryMContinuesupabase/functions/_shared/validation.ts (continued)
Requirements (continued):

Export ValidationError class:

Extends Error
Properties: errors array (AJV error objects), statusCode (400)
toJSON() method returns structured error response


Export sanitizeInput(data: any) function:

Remove dangerous characters (script tags, SQL injection patterns)
Trim whitespace from strings
Return sanitized data


Schema loading:

Cache loaded schemas in memory (avoid re-reading files)
Support schema $ref resolution (references to other schemas)



Technical Details:

Use AJV with strict mode enabled
Add custom formats: UUID, email, URL, ISO datetime
Handle nested object validation
Provide clear error messages: "Field 'email' must be valid email format"


supabase/functions/_shared/errors.ts
Purpose: Standardized error handling and responses
Requirements:

Export error classes:

AppError (base class): statusCode, message, details (optional)
AuthenticationError (401): Invalid/missing credentials
AuthorizationError (403): Insufficient permissions
NotFoundError (404): Resource not found
ValidationError (400): Invalid input (imported from validation.ts)
ConflictError (409): Duplicate resource (e.g., achievement already granted)
RateLimitError (429): Too many requests
ExternalServiceError (502): Third-party API failure


Export handleError(error: Error) function:

Converts any error to standardized Response object
Logs error details (structured logging)
Returns appropriate HTTP status and JSON body
Hides internal errors from users (return generic "Internal server error")


Error response format:

typescript  {
    error: {
      code: "VALIDATION_ERROR",
      message: "Invalid input",
      details: { field: "email", reason: "invalid format" }
    }
  }
Technical Details:

Log errors to Supabase logs with context (user ID, function name, timestamp)
Never expose stack traces or sensitive data in production
Support error tracking service integration (Sentry, optional)


supabase/functions/_shared/database.ts
Purpose: Database connection and query helpers
Requirements:

Export getClient() function:

Returns Supabase client instance configured with service role key
Use connection pooling
Set appropriate timeout (30 seconds default)


Export withTransaction(callback) async function:

Executes callback within database transaction
Commits on success, rolls back on error
Returns callback result or throws error


Export query helpers:

queryOne<T>(query, params): Expects single row, throws if 0 or >1
queryMany<T>(query, params): Returns array of rows
execute(query, params): Execute without return (INSERT/UPDATE/DELETE)


Export buildSupabaseClient(jwt?: string) function:

Returns client with user JWT (for RLS enforcement)
If no JWT provided, uses service role (bypasses RLS)



Technical Details:

Use Supabase JS client library
Handle connection errors gracefully (retry logic)
Add query logging for debugging (LOG_LEVEL=debug)
Use parameterized queries to prevent SQL injection


supabase/functions/_shared/blockchain.ts
Purpose: Blockchain and IPFS integration utilities
Requirements:

Export writeAttestation(data) async function:

Format achievement grant as attestation
Write to Ethereum via smart contract or EAS (Ethereum Attestation Service)
Return transaction hash
Handle gas estimation and transaction failures


Export uploadToIPFS(data) async function:

Upload JSON data to IPFS via pinning service (Pinata, NFT.Storage, etc.)
Return IPFS hash (CID)
Handle upload failures with retry


Export verifyAttestation(txHash) async function:

Query Ethereum blockchain for transaction
Verify transaction is confirmed
Extract attestation data
Return verification result


Export createAttestationData(grant) function:

Convert achievement grant to EAS schema format
Include: achievement ID, user ID (pseudonymous), timestamp, evidence hash
Never include PII


Configuration:

Read Ethereum RPC URL, private key, IPFS API credentials from environment
Support multiple networks (mainnet, testnet) via CHAIN_ID



Technical Details:

Use ethers.js (Deno-compatible) for Ethereum interaction
Implement exponential backoff for retries
Handle nonce management for concurrent transactions
Calculate gas prices dynamically (use gas oracle)
Async operation: Don't block user experience waiting for blockchain confirmation


supabase/functions/_shared/types.ts
Purpose: Shared TypeScript type definitions
Requirements:

Database types:

Profile: User profile structure
Activity: Activity record structure
Achievement: Achievement definition structure
AchievementGrant: Achievement grant record
VerificationRule: Verification rule structure


Request/Response types:

ActivityVerificationRequest: Input for activity verification
ActivityVerificationResponse: Verification result
AchievementCheckRequest: Input for achievement eligibility check
AchievementCheckResponse: Eligibility result with progress
AchievementGrantRequest: Input for granting achievement
AchievementGrantResponse: Grant result with blockchain refs


Enum types:

ActivityType: Union of valid activity type strings
VerificationStatus: pending | verified | failed | appealed
UserRole: user | instructor | admin
AchievementVisibility: public | community | private


Utility types:

WithTimestamps<T>: Adds created_at, updated_at to type
Paginated<T>: Wraps array with pagination metadata



Technical Details:

Export all types for use in other modules
Use strict TypeScript types (no any)
Document complex types with JSDoc comments
Keep in sync with database schema and JSON Schemas


supabase/functions/activity-verification/ (subdirectory)
supabase/functions/activity-verification/index.ts
Purpose: Route activity verification requests to appropriate handlers
Requirements:

Main handler function signature: serve(async (req: Request) => Response)
CORS handling: Check for OPTIONS request, return CORS headers
Authentication: Extract and verify user from JWT
Request validation:

Parse JSON body
Validate against activity verification schema
Extract activity type


Routing logic:

Map activity type to verification handler:

code_commit → verify-code-commit.ts
location_checkin → verify-geolocation.ts
iot_sensor_reading → verify-iot-sensor.ts
workshop_attendance → verify-workshop-attendance.ts
Custom types → verify-custom.ts


Call appropriate handler with validated request data
Return handler response


Error handling: Catch all errors, return standardized error response
Logging: Log verification attempts with user ID, activity type, result

Technical Details:

Use Deno.serve() for Edge Function entry point
Import all handler modules
Use switch statement or object map for routing
Set timeout: 30 seconds (configurable)


supabase/functions/activity-verification/verify-code-commit.ts
Purpose: Verify GitHub code commits for robotics challenges
Requirements:

Export verifyCodeCommit(request) async function
Input validation:

Required fields: user_id, repo_url, commit_sha, activity_data.test_results
Optional: branch_name


Verification steps:

Validate repo URL belongs to user (query GitHub API)
Fetch commit details from GitHub API (verify commit exists)
Check commit author matches user's GitHub username (link via profile)
Verify test results: Parse activity_data.test_results for pass/fail status
Optional: Run additional code quality checks (linting, complexity)


Success criteria:

Commit exists and is authored by user
All required tests passed
Commit is within allowed time window (if achievement has deadline)


Database operations:

Insert activity record with verification_status = verified
Log verification attempt


Return response:

Success: { verified: true, activity_id, message }
Failure: { verified: false, reason, suggestion }



Technical Details:

Use GitHub REST API v3
Authenticate with GitHub token (from environment or user OAuth)
Handle rate limiting (GitHub API limits)
Cache repo metadata to reduce API calls
Support both GitHub.com and GitHub Enterprise


supabase/functions/activity-verification/verify-geolocation.ts
Purpose: Verify location-based check-ins (GA meeting example)
Requirements:

Export verifyGeolocation(request) async function
Input validation:

Required fields: user_id, latitude, longitude, timestamp, device_id
Optional: accuracy (GPS accuracy in meters), location_id (pre-registered venue)


Verification steps:

Validate device ID belongs to user (query devices table)
Check device type: Real device vs. emulator (device fingerprint analysis)
Geofencing check:

If location_id provided: Calculate distance to registered venue, must be within radius (100m default)
If no location_id: Store raw coordinates for manual review


Time window check: Timestamp must be within meeting time window (±30 minutes)
Duplicate check: User hasn't already checked in to this specific meeting/event
Optional: Verify IP address geolocation matches GPS (anti-spoofing)


Success criteria:

Valid device, within geofence, within time window, no duplicate


Database operations:

Insert activity with location data (encrypted if sensitive)
Log verification attempt


Privacy: Store only location hash on blockchain, not raw coordinates

Technical Details:

Use Haversine formula for distance calculation
Handle GPS accuracy: Require <50m accuracy for strict verification
Support WiFi/cellular fallback if GPS unavailable
Rate limit: Max 1 check-in per user per 15 minutes (prevent spam)


supabase/functions/activity-verification/verify-iot-sensor.ts
Purpose: Verify IoT device sensor readings (smart garden example)
Requirements:

Export verifyIoTSensor(request) async function
Input validation:

Required fields: device_id, sensor_type, reading_value, timestamp, signature
Optional: additional_sensors (array of readings)


Verification steps:

Validate device ID is registered and belongs to user
Verify device signature: Use device certificate to verify payload signature (prevents tampering)
Timestamp validation: Reading must be recent (within 30 minutes)
Sensor data validation:

Check value is within physically possible range (e.g., temp -40°C to 80°C)
Check for sensor drift (compare to recent readings)
Detect sensor failure patterns (e.g., flat line)


Sequence check: Readings should be sequential (no large gaps in device's reading history)


Success criteria:

Valid device signature, realistic sensor values, recent timestamp, sequential


Database operations:

Insert activity with full sensor payload
Update device last_seen timestamp


Continuous monitoring: Track consecutive days of readings for streak achievements

Technical Details:

Support multiple sensor types: temperature, humidity, soil moisture, light, etc.
Use device certificates (X.509) for signature verification
Store time-series data efficiently (consider TimescaleDB extension)
Handle offline devices: Allow delayed uploads if timestamp explains gap


supabase/functions/activity-verification/verify-workshop-attendance.ts
Purpose: Verify in-person workshop/event attendance
Requirements:

Export verifyWorkshopAttendance(request) async function
Input validation:

Required fields: user_id, event_id, check_in_method, timestamp
Optional: check_in_code (QR code), photo, signature


Verification methods (support multiple):

QR Code: User scans event QR code, verify code matches event and hasn't been reused
Geolocation: Verify user is at event venue (similar to verify-geolocation)
Staff Verification: Event staff manually confirms attendance via admin app
NFC Badge: User taps NFC badge at event entrance


Verification steps:

Validate event exists and is currently happening
Apply chosen verification method
Check user isn't already checked in to this event
Verify user is registered for event (if pre-registration required)


Success criteria: Valid check-in method, event is active, no duplicate
Database operations:

Insert activity with event details
Increment event attendance count


Edge cases: Handle early arrival (within 1 hour before start), late departure checks

Technical Details:

Generate unique QR codes per event (short-lived, expires after event)
Support hybrid verification: Geo + QR for high-security events
Real-time attendance tracking: Update event capacity


supabase/functions/activity-verification/verify-custom.ts
Purpose: Extensible handler for custom verification logic
Requirements:

Export verifyCustom(request) async function
Input validation:

Required fields: user_id, verification_rule_id, activity_data


Verification flow:

Fetch verification_rule from database by verification_rule_id
Parse verification_rule.logic_function (e.g., custom function name or inline code)
Execute custom verification logic:

If logic_function is a function name: Import and call that function
If inline: Evaluate safely (use Deno eval with sandbox)


Custom logic receives: user_id, activity_data, verification_rule.required_evidence
Custom logic returns: { verified: boolean, details: any }


Safety considerations:

Sandbox custom code execution (restrict file system, network access)
Timeout custom logic (5 seconds max)
Rate limit custom verifications (prevent abuse)


Database operations: Insert activity with verification result
Use case: Community members can define new verification types without deploying new code

Technical Details:

Use Deno permissions model for sandboxing
Consider using WebAssembly for safe code execution
Document custom function signature requirements
Provide examples of custom verification functions


supabase/functions/achievement-verification/ (subdirectory)
supabase/functions/achievement-verification/index.ts
Purpose: Route achievement verification requests
Requirements:

Main handler function: Route based on operation type
Supported operations:

check_eligibility: Check if user can earn achievement
grant_achievement: Issue achievement to user
revoke_achievement: Remove achievement (admin only)
batch_check: Check multiple users/achievements efficiently


Request validation: Validate against achievement verification schema
Authentication: Required for all operations
Authorization: Only admins can revoke, users can check own eligibility
Routing: Call appropriate handler module
Logging: Log all verification checks and grants

Technical Details:

Use POST requests with operation in body (or path parameter)
Return standardized response format
Handle concurrent requests safely (use database transactions)


supabase/functions/achievement-verification/check-eligibility.ts
Purpose: Determine if user meets achievement requirements
Requirements:

Export checkEligibility(request) async function
Input validation:

Required fields: user_id, achievement_id
Optional: include_progress (boolean, return progress details)


Eligibility check steps:

Fetch achievement definition from database
Check prerequisites: If achievement has prerequisite_ids, verify user has earned those
Fetch user's verified activities relevant to achievement
Evaluate requirements:

Parse achievement.requirements JSONB
For each requirement, check if user's activities satisfy it
Requirements format examples:

{ activity_type: "code_commit", count: 3, passed_tests: true }
{ activity_type: "location_checkin", count: 10, distinct_locations: true }
{ activity_type: "iot_sensor_reading", consecutive_days: 30 }




Calculate progress: If not eligible, how much progress has user made?


Return response:

If eligible: { eligible: true, ready_to_grant: true }
If not eligible: { eligible: false, progress: { completed: 3, required: 5 }, missing: [...] }


Caching: Cache eligibility checks for 5 minutes (reduce DB load)

Technical Details:

Use SQL queries with JOINs for efficiency (avoid N+1 queries)
Support complex requirements: AND/OR logic, date ranges, value thresholds
Call database function check_achievement_eligibility() for SQL-based evaluation


supabase/functions/achievement-verification/grant-achievement.ts
Purpose: Issue achievement to user after verification
Requirements:

Export grantAchievement(request) async function
Input validation:

Required fields: user_id, achievement_id
Optional: granted_by (defaults to "automated"), skip_blockchain (for testing)


Grant process:

Re-check eligibility: Ensure user still qualifies (prevent race conditions)
Check for duplicate: User doesn't already have this achievement
Database transaction:

Insert into achievement_grants table
Collect evidence_summary: Which activities satisfied which requirements
Set granted_at timestamp


Blockchain sync (async, non-blocking):

Queue for blockchain writing (insert into blockchain_sync_queue)
Background worker will process queue and write attestation


Trigger notifications:

Send achievement notification to user
Notify accountability partners (if configured)
Update community leaderboards




Return response:

Success: { granted: true, grant_id, achievement_details, blockchain_pending: true }
Failure: { granted: false, reason }


Side effects:

Unlock dependent achievements (check if granting this enables others)
Issue rewards: Digital badge, credentials, access grants



Technical Details:

Use database transaction to ensure atomicity
Handle concurrent grant attempts (unique constraint on user_id + achievement_id)
Decouple blockchain write from user response (async)
Log grant event with full context


supabase/functions/achievement-verification/revoke-achievement.ts
Purpose: Remove achievement from user (admin function)
Requirements:

Export revokeAchievement(request) async function
Input validation:

Required fields: grant_id, reason
Authentication: Must be admin role


Revocation process:

Verify grant exists and isn't already revoked
Database transaction:

Update achievement_grants: Set revoked_at, revocation_reason
Do NOT delete grant record (maintain audit trail)


Blockchain implications:

Original blockchain attestation cannot be removed (immutable)
Option: Write revocation attestation to blockchain (additional transaction)


Notifications:

Notify user of revocation with reason
Log admin action




Return response: { revoked: true, grant_id }
Use cases: Fraud detection, policy violations, technical errors

Technical Details:

Require admin authorization (check JWT role claim)
Log revocation with admin user ID for accountability
Consider soft delete vs. hard delete (soft delete recommended)
Handle cascade effects: If revoked achievement was prerequisite for others, handle gracefully


supabase/functions/achievement-verification/batch-check.ts
Purpose: Check eligibility for multiple users/achievements efficiently
Requirements:

Export batchCheck(request) async function
Input validation:

Required fields: user_ids (array) OR achievement_ids (array)
Optional: Both arrays for cross-product check


Batch operations:

If user_ids only: Check all achievements for specified users
If achievement_ids only: Check specified achievements for all users
If both: Check specified achievements for specified users


Optimization:

Single database query to fetch all relevant activities
Bulk eligibility evaluation (avoid per-user queries)
Parallel processing where possible


Return response:

Array of eligibility results: [{ user_id, achievement_id, eligible, progress }, ...]
Paginate if results exceed 100 items


Use cases: Instructor checking entire class progress, leaderboard generation

Technical Details:

Use database views or CTEs for efficient bulk queries
Set reasonable limits: Max 50 users × 20 achievements = 1000 checks per request
Consider caching for frequently checked achievements
Return partial results if some checks fail (don't fail entire batch)


supabase/functions/achievement-management/ (subdirectory)
supabase/functions/achievement-management/create-achievement.ts
Purpose: Allow instructors/admins to create new achievements
Requirements:

Export createAchievement(request) async function
Input validation:

Required fields: name, description, category_id, requirements, verification_logic_ref
Optional: prerequisites, reward_data, visibility, expires_at
Validate against achievement schema (JSON Schema)


Authorization: User must be instructor or admin role
Creation process:

Validate requirements structure (ensure parseable by verification system)
Verify verification_logic_ref points to valid verification function
Check prerequisites exist (if specified)
Database transaction:

Insert into achievements table
Insert into achievement_prerequisites (if any)
Set version = 1, creator_id = current user


Optionally: Write achievement definition to IPFS (for permanence/portability)


Return response:

Success: { created: true, achievement_id, achievement_details }
Validation errors: { created: false, errors: [...] }


Post-creation: Achievement immediately available for earning

Technical Details:

Validate JSON Schema of requirements against known patterns
Support template-based creation (reference achievement templates)
Version control: Future updates create new versions, old version remains for historical grants


supabase/functions/achievement-management/update-achievement.ts
Purpose: Modify existing achievement definitions
Requirements:

Export updateAchievement(request) async function
Input validation:

Required fields: achievement_id, updated_fields (partial achievement object)
Authorization: Must be creator or admin


Update process:

Fetch existing achievement
Check if update is breaking change (e.g., harder requirements):

If breaking: Increment version, create new achievement record
If non-breaking: Update in place, increment updated_at


Validate updated requirements still parseable
Database transaction:

Update achievement record
Log change in audit table (what changed, who changed it)


Notify: Users actively working toward this achievement of changes


Versioning strategy:

Users who earned old version keep their achievement
New users earn current version
UI shows which version was earned


Return response: { updated: true, new_version (if applicable) }

Technical Details:

Define breaking vs. non-breaking changes clearly
Prevent updates that would retroactively invalidate existing grants
Consider feature flag: Allow admins to disable achievement temporarily


supabase/functions/achievement-management/list-achievements.ts
Purpose: Browse available achievements with filtering
Requirements:

Export listAchievements(request) async function
Input validation (all optional):

category_id: Filter by category
creator_id: Filter by creator
visibility: public | community | private
search: Text search in name/description
user_id: If provided, include user's progress on each achievement
sort: created_at, popularity, difficulty
pagination: limit (default 20), offset


Query optimization:

Join with achievement_categories for category names
If user_id provided, LEFT JOIN with user's activities and grants
Use database indexes for efficient filtering


Return response:

Array of achievements with metadata:

Basic info: id, name, description, category
Requirements summary (not full details)
Earned count (how many users earned this)
If user_id provided: User's progress (completed/required)


Pagination metadata: total_count, has_more


Caching: Cache public achievement list for 5 minutes

Technical Details:

Support full-text search on name/description (PostgreSQL tsquery)
Include popularity metric (earned count, trending)
Return lightweight objects (don't include full requirements in list)


supabase/functions/achievement-management/get-achievement-details.ts
Purpose: Fetch complete achievement information
Requirements:

Export getAchievementDetails(request) async function
Input validation:

Required fields: achievement_id
Optional: user_id (include user-specific progress)


Data fetching:

Fetch achievement record
Fetch category details
Fetch prerequisites (if any)
Fetch creator profile
If user_id provided:

Calculate user's progress
Check if user has earned it
Fetch user's relevant verified activities




Return response:

Complete achievement object:

All fields from database
Category object (not just ID)
Prerequisites array (full details)
Creator object (name, profile)
Statistics: Total earned count, recent grants
If user_id: Progress object, eligible status, next steps




Privacy: Respect visibility settings (only return private achievements to authorized users)

Technical Details:

Single database query with JOINs for efficiency
Cache popular achievements (public, frequently viewed)
Include related achievements (similar category, same creator)


supabase/functions/user-activities/ (subdirectory)
supabase/functions/user-activities/log-activity.ts
Purpose: Manual activity logging endpoint
Requirements:

Export logActivity(request) async function
Input validation:

Required fields: activity_type, occurred_at, activity_data
User ID extracted from JWT (user can only log own activities)


Activity logging process:

Validate activity_type exists in system
Validate activity_data against schema for that activity type
Insert into activities table with verification_status = pending
Trigger verification: Queue activity for appropriate verification handler
Return activity_id immediately (don't wait for verification)


Use cases:

User manually logs offline activity (e.g., completed workout)
Microapp logs activity on behalf of user
Batch import of historical activities


Return response:

Success: { logged: true, activity_id, verification_pending: true }
Validation error: { logged: false, errors: [...] }



Technical Details:

Rate limiting: Max 100 activities per user per hour
Deduplication: Check for similar recent activities (prevent accidental duplicates)
Async verification: Don't block response waiting for verification
Support bulk logging: Accept array of activities (single transaction)


supabase/functions/user-activities/get-user-history.ts
Purpose: Retrieve user's activity timeline
Requirements:

Export getUserHistory(request) async function
Input validation:

Required: user_id (must match JWT user or requester is admin/instructor)
Optional filters: activity_type, date_range (start_date, end_date), verification_status
Pagination: limit (default 50), offset
Sort: occurred_at DESC (most recent first) or ASC


Query optimization:

Use indexes on user_id, occurred_at
Join with activity_types for type names
Join with verification_rules (if applicable)


Return response:

Array of activities with:

Activity details: type, occurred_at, activity_data
Verification status: verified/pending/failed
If verified: Verification method, verified_at
Related achievements: Which achievements this contributes to


Pagination metadata


Privacy: Only return activities user is authorized to see

Technical Details:

Support filtering by multiple activity types (array)
Include activity count summary: total, verified, pending, failed
Option to include related achievement progress (show impact of activities)


supabase/functions/user-activities/export-user-data.ts
Purpose: GDPR-compliant data export
Requirements:

Export exportUserData(request) async function
Input validation:

Required: user_id (must match JWT user)
Optional: format (json | csv)


Data collection:

Fetch user profile
Fetch all activities (including unverified)
Fetch all achievement grants
Fetch blockchain references (tx hashes, IPFS hashes)
Fetch verification logs


Return response:

JSON format: Complete nested structure
CSV format: Flattened, multiple files (activities.csv, achievements.csv)
Include blockchain verification instructions (how to independently verify)


Delivery: Generate download link (signed URL, expires in 24 hours)
Security: Rate limit to 1 export per user per day

Technical Details:

Large exports: Stream data (don't load all into memory)
Compress export: ZIP file with JSON/CSV files
Include human-readable documentation explaining data structure
Blockchain portability: Include all data needed to verify achievements independently


supabase/functions/blockchain-sync/ (subdirectory)
supabase/functions/blockchain-sync/write-attestation.ts
Purpose: Write achievement grants to Ethereum blockchain
Requirements:

Export writeAttestation(grant_id) async function (called by background worker)
Process:

Fetch achievement grant from database
Create attestation data:

Schema: EAS (Ethereum Attestation Service) format
Fields: achievement_id, user_pseudonym (hashed user_id), granted_at, evidence_hash
Exclude PII: Never write user email, name, or identifiable data


Upload evidence summary to IPFS:

Upload detailed evidence JSON to IPFS
Get IPFS CID (content identifier)


Write attestation to Ethereum:

Connect to Ethereum via provider (Infura/Alchemy)
Call EAS contract or custom contract
Sign transaction with system private key
Submit transaction with appropriate gas settings
Wait for confirmation (at least 1 block)


Update database:

Set blockchain_tx_hash, blockchain_synced_at, ipfs_hash on achievement_grants
Remove from blockchain_sync_queue (mark completed)




Error handling:

Gas price too high: Wait and retry with lower priority
Transaction failed: Log error, retry with adjusted parameters
Max retries (3): Mark as failed, alert admins


Return: Transaction hash or error

Technical Details:

Use ethers.js for Ethereum interaction
Batch multiple attestations into single transaction (save gas)
Handle nonce management for concurrent transactions
Monitor gas prices, pause if exceeds threshold
Support multiple networks (testnet for dev, mainnet for prod)


supabase/functions/blockchain-sync/verify-attestation.ts
Purpose: Verify an achievement grant via blockchain
Requirements:

Export verifyAttestation(tx_hash or grant_id) async function
Input validation:

Accept either blockchain transaction hash OR grant_id (look up tx_hash)


Verification process:

Query Ethereum blockchain for transaction
Verify transaction is confirmed (at least 6 blocks deep recommended)
Parse transaction data:

Extract attestation UID (if using EAS)
Decode attestation data


Verify attestation contents match expected format
Fetch IPFS evidence (using ipfs_hash from attestation)
Cross-check with database: Does database record match blockchain record?


Return response:

Verified: { verified: true, tx_hash, block_number, confirmations, attestation_data }
Not found: { verified: false, reason: "Transaction not found" }
Mismatch: { verified: false, reason: "Data mismatch", details: {...} }


Use cases:

Third-party verification (external validators)
User proving achievement to employers/schools
Auditing system integrity



Technical Details:

Public endpoint (no authentication required for verification)
Cache verified attestations (reduce blockchain queries)
RetryMContinuesupabase/functions/blockchain-sync/verify-attestation.ts (continued)
Technical Details (continued):

Handle network delays gracefully (blockchain query may be slow)
Support multiple block explorers for redundancy
Return human-readable explanation of verification result


supabase/functions/blockchain-sync/ipfs-upload.ts
Purpose: Upload achievement evidence to IPFS
Requirements:

Export uploadToIPFS(data, metadata) async function
Input validation:

data: JSON object to upload (achievement evidence)
metadata: Optional name, description for IPFS metadata


Upload process:

Serialize data to JSON
Connect to IPFS pinning service (Pinata, NFT.Storage, Web3.Storage)
Upload data via pinning service API
Pin content (ensure persistence)
Verify upload successful (retrieve by CID)
Return IPFS CID (Content Identifier)


Error handling:

Upload failed: Retry with exponential backoff (3 attempts)
Pinning service down: Try fallback service
Data too large: Compress or split into multiple uploads


Return response:

Success: { ipfs_hash: "Qm...", gateway_url: "https://ipfs.io/ipfs/Qm..." }
Failure: { error: "Upload failed", details: {...} }



Technical Details:

Use official pinning service SDKs (more reliable than raw API)
Add metadata: Upload timestamp, content type, version
Optimize for size: Compress JSON before upload (gzip)
Cost management: Monitor pinning service usage, set limits
Support multiple IPFS gateways for redundancy


supabase/functions/notifications/ (subdirectory)
supabase/functions/notifications/send-achievement-granted.ts
Purpose: Notify user when achievement earned
Requirements:

Export sendAchievementGranted(grant_id) async function
Notification channels (support multiple, user preferences):

In-app notification (write to notifications table)
Email (via SendGrid)
SMS (via Twilio) - optional, for high-value achievements
Push notification (via Firebase Cloud Messaging) - if mobile app integrated
Discord/Slack webhook - if user connected integrations


Notification content:

Fetch achievement details (name, description, badge image)
Fetch user preferences (which channels enabled)
Compose message:

Subject: "🎉 Achievement Unlocked: [Achievement Name]"
Body: Congratulations message, achievement details, next steps
Include badge image, blockchain verification link
Call-to-action: Share on social media, view in app


Send via enabled channels
Log notification sent (for delivery tracking)


Personalization:

Address user by name
Include progress stats (e.g., "You're #47 to earn this!")
Suggest related achievements


Return response: { sent: true, channels: ["email", "in_app"] }

Technical Details:

Use async/await for all notification sends (don't block)
Handle delivery failures gracefully (some channels may fail)
Respect user notification preferences (stored in profile)
Rate limiting: Don't spam if user earns multiple achievements quickly (batch)
Template system: Use email/SMS templates for consistent branding


supabase/functions/notifications/send-verification-failed.ts
Purpose: Alert user when activity verification fails
Requirements:

Export sendVerificationFailed(activity_id) async function
Notification content:

Fetch activity details and verification failure reason
Compose message:

Subject: "Activity Verification Failed"
Body: Explain what failed, why, how to fix
Provide actionable suggestions (e.g., "Ensure GPS enabled")
Link to troubleshooting docs


Send via in-app notification (always) + email (if enabled)


Failure reasons categories:

Technical: Invalid data format, missing required fields
Security: Spoofed location, invalid device
Policy: Activity doesn't meet requirements
External: GitHub API error, network timeout


Tone: Helpful, not punitive (goal is to help user succeed)
Return response: { sent: true }

Technical Details:

Include verification attempt ID for support debugging
Provide "Appeal" button if user believes verification was incorrect
Limit to 1 notification per activity (don't re-notify on retry)


supabase/functions/notifications/send-milestone-reminder.ts
Purpose: Nudge users toward achievement completion
Requirements:

Export sendMilestoneReminder(user_id, achievement_id) async function
Triggering logic (called by scheduled job):

User is 80%+ complete on achievement
User hasn't been active in 7+ days
Achievement has no expiration or expires soon


Notification content:

Fetch achievement progress (e.g., "4 out of 5 completed")
Compose message:

Subject: "You're almost there! Complete [Achievement Name]"
Body: Progress summary, motivation, specific next step
Show what's remaining (e.g., "1 more workshop attendance needed")


Send via in-app + email


Personalization:

Reference user's accountability partner (if set)
Highlight community members who recently earned this
Suggest upcoming events/workshops that satisfy requirement


Frequency limits: Max 1 reminder per achievement per 14 days

Technical Details:

Scheduled job runs daily, queries users with high progress
Respect "Do Not Disturb" preferences (no notifications late night/early morning)
Track notification effectiveness (does it increase completion rate?)


supabase/functions/webhooks/ (subdirectory)
supabase/functions/webhooks/github-webhook.ts
Purpose: Receive and process GitHub webhook events
Requirements:

Export main handler for POST requests to webhook endpoint
Webhook setup:

Register webhook URL in GitHub repo settings
Configure events: push, pull_request, workflow_run
Validate webhook signature using GITHUB_WEBHOOK_SECRET


Event processing:

Verify webhook signature (X-Hub-Signature-256 header)
Parse event type (X-GitHub-Event header)
Route by event type:

push: New commits → trigger code commit verification
workflow_run: CI test results → update activity with test status
pull_request: PR opened/merged → potential achievement unlock


Extract relevant data (repo, branch, commit SHA, author, test results)
Call activity verification service
Return 200 OK immediately (GitHub expects fast response)


Background processing:

Queue actual verification work (don't process in webhook handler)
Webhook handler just validates and enqueues


Return response: Always 200 OK (even if validation fails internally, to avoid retry storms)

Technical Details:

Use crypto.subtle.verify() for signature validation (Deno built-in)
Handle replay attacks (check timestamp, reject old events)
Log all webhook events for debugging
Support multiple repos (map repo to user/course)
Idempotent: Handle duplicate webhook deliveries gracefully


supabase/functions/webhooks/iot-device-webhook.ts
Purpose: Receive sensor data from IoT devices
Requirements:

Export main handler for POST requests
Device authentication:

Verify device signature (using device certificate)
OR validate device API key (shared secret per device)
Ensure device is registered in system


Data processing:

Parse sensor payload (JSON)
Validate payload structure (required fields)
Extract: device_id, sensor_readings array, timestamp
Call verify-iot-sensor.ts for verification
Store readings in time-series database
Check for achievement milestones (e.g., 30 consecutive days)


Rate limiting:

Per device: Max 4 readings per hour (one every 15 minutes)
Total: Max 1000 readings per hour across all devices


Return response:

Success: { received: true, activity_id }
Failure: { received: false, error: "Invalid signature" }



Technical Details:

Support multiple payload formats (JSON, Protocol Buffers, CBOR)
Handle large payloads (multi-sensor arrays)
Offline support: Accept batched readings with historical timestamps
Downsampling: Store full resolution for recent data, aggregate older data


supabase/functions/webhooks/external-service-webhook.ts
Purpose: Generic webhook handler for third-party integrations
Requirements:

Export main handler for POST requests
Configurable integration:

Integration type specified in URL path or header
Each integration has its own verification method


Supported integrations (examples):

Zapier: Receive events from Zapier workflows
Strava: Receive workout completion events
Google Calendar: Receive event attendance confirmations
Custom: Support webhook forwarding from community tools


Processing flow:

Identify integration type
Validate request (signature, API key, IP whitelist)
Parse payload according to integration schema
Map external event to activity type
Log activity on behalf of user
Return standardized response


Extensibility: Configuration-driven (add new integrations via config, no code deploy)

Technical Details:

Use plugin architecture for integration handlers
Store integration configs in database (enable/disable integrations)
Handle webhook registration flows (OAuth, API keys)
Provide integration templates in /templates directory


/schemas Directory
schemas/activity.schema.json
Purpose: JSON Schema for activity data structure
Requirements:

Schema defines activity object structure:

id: UUID (generated by system)
user_id: UUID (required)
activity_type: String, enum of valid types
occurred_at: ISO 8601 datetime string (required)
activity_data: Object (structure varies by activity_type)
verification_status: String enum (pending | verified | failed | appealed)
Additional metadata fields


Activity type-specific schemas (oneOf pattern):

code_commit: Requires repo_url, commit_sha, test_results
location_checkin: Requires latitude, longitude, timestamp
iot_sensor_reading: Requires device_id, sensor_type, reading_value
workshop_attendance: Requires event_id, check_in_method


Validation rules:

Timestamps must be ISO 8601 format
UUIDs must match standard format
Enums must match allowed values
Required fields cannot be null


JSON Schema version: Draft 2020-12

Technical Details:

Use $ref for reusable sub-schemas
Include examples for each activity type
Add descriptions for documentation generation
Validate at API boundary (before database insert)


schemas/achievement.schema.json
Purpose: JSON Schema for achievement definition
Requirements:

Schema defines achievement object:

id: UUID
name: String (1-100 chars, required)
description: String (1-1000 chars, required)
category_id: UUID (required)
requirements: Object (structured requirements, see below)
verification_logic_ref: String (function name or custom logic ref)
reward_data: Object (badge URL, credentials, etc.)
visibility: Enum (public | community | private)
expires_at: ISO datetime or null
Metadata: version, creator_id, created_at, updated_at


Requirements structure (flexible but structured):

Array of requirement objects, each with:

activity_type: String
count: Integer (how many activities required)
conditions: Object (additional conditions)
logic: String (and | or for multiple requirements)


Example:



json    {
      "requirements": [
        { "activity_type": "code_commit", "count": 3, "conditions": { "passed_tests": true } },
        { "activity_type": "workshop_attendance", "count": 1 }
      ],
      "logic": "and"
    }

Validation rules:

Name must be unique per creator
Category must exist
Requirements must be parseable by system
Visibility must be valid enum



Technical Details:

Use JSON Schema $ref for nested requirements
Support complex requirement logic (nested AND/OR)
Validate against known activity types
Version field enables schema evolution


schemas/verification-rule.schema.json
Purpose: JSON Schema for verification rule definition
Requirements:

Schema defines verification rule:

id: UUID
name: String (unique)
activity_type_id: UUID (which activity this verifies)
logic_function: String (Edge Function name)
required_evidence: Object (what must be in activity_data)
success_criteria: Object (conditions for verification success)
failure_conditions: Array of objects (explicit rejection rules)
authority: Enum (automated | peer_review | instructor_review | admin_review)


Required evidence structure:

Array of field names that must exist in activity_data
Example: ["repo_url", "commit_sha", "test_results"]


Success criteria examples:

{ "test_results.passed": true, "commit_sha.length": 40 }
Supports dot notation for nested fields
Supports comparison operators (eq, gt, lt, contains)


Failure conditions examples:

{ "field": "location", "condition": "outside_geofence" }
Each condition has field, operator, value



Technical Details:

JSON Schema supports custom keywords for domain logic
Validation rules can reference other schemas
Include regex patterns for format validation (e.g., commit SHA must be hex)


schemas/user-profile.schema.json
Purpose: JSON Schema for user profile data
Requirements:

Schema defines user profile:

id: UUID (matches auth.users.id)
username: String (3-30 chars, alphanumeric + underscore)
display_name: String (1-100 chars)
avatar_url: URL string or null
bio: String (0-500 chars)
role: Enum (user | instructor | admin)
preferences: Object (notification settings, privacy settings)
integrations: Object (connected services: GitHub, Strava, etc.)
created_at, updated_at: ISO datetime


Preferences structure:

notifications: Object with channel preferences (email, sms, push)
privacy: Object with visibility settings (profile, activities, achievements)
language: String (ISO language code)


Integrations structure:

Each integration: { "connected": boolean, "username": string, "last_sync": datetime }



Technical Details:

Username must be unique (enforced at database level)
Avatar URL must be valid HTTPS URL
Role defaults to "user" on account creation
Privacy settings default to most private


schemas/blockchain-attestation.schema.json
Purpose: JSON Schema for blockchain attestation format
Requirements:

Schema for EAS (Ethereum Attestation Service) compatible attestation:

schema: String (EAS schema UID)
recipient: Ethereum address (user's pseudonymous address)
attestation_data: Object with:

achievement_id: UUID
user_pseudonym: Hashed user ID (not reversible to actual ID)
granted_at: Unix timestamp
evidence_ipfs_hash: IPFS CID of detailed evidence
issuer: System's Ethereum address


ref_uid: Optional reference to prerequisite attestations
revocable: Boolean (can this attestation be revoked?)
expiration_time: Unix timestamp or 0 (no expiration)


Evidence structure (uploaded to IPFS separately):

achievement_name: String
achievement_description: String
requirements_met: Array of requirement objects with proofs
verification_method: String
verified_at: ISO datetime
NO PII: No emails, real names, or identifiable data



Technical Details:

Compatible with EAS standard (interoperable with other EAS systems)
User pseudonym derived from user_id using one-way hash (SHA-256 + salt)
Evidence IPFS hash allows third-party verification without exposing PII
Schema version included for future evolution


/lib Directory
lib/verification-engines/code-verification.ts
Purpose: Reusable code verification logic
Requirements:

Export functions for code quality checks:

verifyGitHubCommit(repo, commit_sha, expected_author): Verify commit exists and authored correctly
parseTestResults(test_output): Parse various test framework outputs (Jest, PyTest, etc.)
checkCodeQuality(code_content): Basic linting/complexity checks
verifyBranchProtection(repo, branch): Ensure commits went through proper review


GitHub API interactions:

Authenticate with token
Fetch commit details
Check commit signature (GPG)
Retrieve CI/CD status


Support multiple platforms:

GitHub
GitLab (similar API)
Bitbucket (different API patterns)


Return standardized verification result:

{ verified: boolean, details: object, evidence: object }



Technical Details:

Use Octokit (GitHub API client) with Deno compatibility
Cache API responses to reduce rate limit consumption
Handle API errors gracefully (rate limits, network failures)
Support both REST API and GraphQL (for complex queries)


lib/verification-engines/geolocation-verification.ts
Purpose: Location-based verification utilities
Requirements:

Export geolocation functions:

calculateDistance(lat1, lon1, lat2, lon2): Haversine distance in meters
isWithinGeofence(userLat, userLon, venueLat, venueLon, radius): Boolean check
verifyIPLocation(ip_address, expected_lat, expected_lon): IP geolocation consistency check
detectLocationSpoofing(location_data): Heuristics for fake GPS
validateGPSAccuracy(accuracy_meters): Check if GPS signal is reliable


Anti-spoofing techniques:

Check GPS accuracy (require <50m for strict verification)
Verify timestamp progression (can't teleport)
Cross-check WiFi/cellular location with GPS
Detect mock location apps (device fingerprinting)


Return verification result with confidence score:

{ verified: boolean, confidence: 0-100, method: "gps" | "wifi" | "cell" }



Technical Details:

Use Haversine formula for accurate distance on sphere
Support multiple coordinate systems (WGS84 standard)
Handle edge cases: Poles, antimeridian
Integrate with IP geolocation APIs (ipapi, MaxMind)
Privacy: Never store raw coordinates long-term, only verification result


lib/verification-engines/time-verification.ts
Purpose: Timestamp validation utilities
Requirements:

Export time validation functions:

isWithinTimeWindow(timestamp, window_start, window_end): Check if time is within range
isRecent(timestamp, max_age_minutes): Verify timestamp is not stale
validateTimeSequence(timestamps_array): Ensure chronological order
detectTimeManipulation(device_time, server_time): Check for clock tampering
parseTimezone(timestamp, timezone): Handle timezone conversions


Time window patterns:

Fixed windows: "2024-01-15 10:00 to 12:00"
Recurring windows: "Every Tuesday 6-7pm"
Relative windows: "Within 30 minutes of now"


Clock skew handling:

Allow ±5 minutes for device clock drift
Reject timestamps >30 minutes in future (likely manipulation)
Accept old timestamps if explicitly flagged as "offline sync"



Technical Details:

Use ISO 8601 for all timestamps
Handle daylight saving time transitions
Support multiple calendar systems (Gregorian, lunar for cultural events)
Use Temporal API (JavaScript proposed feature) or Luxon library


lib/verification-engines/device-verification.ts
Purpose: Device authentication and fingerprinting
Requirements:

Export device verification functions:

registerDevice(user_id, device_info): Register new device
verifyDevice(device_id, device_fingerprint): Verify device matches registration
detectEmulator(device_info): Identify fake devices/emulators
checkDeviceReputation(device_id): Flag suspicious devices
generateDeviceFingerprint(device_info): Create unique device ID


Device fingerprint components:

User agent
Screen resolution
Timezone
Browser/app version
Hardware specs (if available)
Network characteristics


Anti-emulator detection:

Check for known emulator signatures
Verify sensor availability (real devices have accelerometer, etc.)
Network characteristics (emulators often use specific IPs)



Technical Details:

Use FingerprintJS or custom fingerprinting
Store fingerprint hash (not raw data)
Handle device changes gracefully (OS updates change fingerprint)
Privacy: Don't collect more data than necessary
Allow users to register multiple devices (phone, tablet, desktop)


lib/verification-engines/peer-verification.ts
Purpose: Human review workflow logic
Requirements:

Export peer review functions:

createReviewRequest(activity_id, reviewers): Assign activity for human review
submitReview(review_id, reviewer_id, decision, notes): Record review decision
aggregateReviews(activity_id): Combine multiple reviewer decisions
selectReviewers(activity_id, criteria): Choose appropriate reviewers
notifyReviewers(review_id): Send review requests


Review workflow:

Activity requiring review is queued
System selects 2-3 reviewers (peers or instructors)
Reviewers see activity details and evidence
Each reviewer approves/rejects with comments
If majority approve, activity verified
If rejected, user can appeal or resubmit


Reviewer selection criteria:

Has earned similar achievement (peer review)
Instructor role (for course-specific)
Random selection (reduce bias)
Exclude reviewers with conflict of interest



Technical Details:

Use database queue for review assignments
Track reviewer response time (SLA: 48 hours)
Handle reviewer unavailability (reassign)
Prevent gaming: Reviewers can't review their friends' activities
Store review history for quality auditing


lib/achievement-logic/requirement-checker.ts
Purpose: Evaluate if activities satisfy achievement requirements
Requirements:

Export checkRequirements(user_activities, achievement_requirements) function
Support requirement types:

Count-based: "3 code commits with passing tests"
Time-based: "30 consecutive days of sensor readings"
Variety-based: "Attend 5 different workshop topics"
Cumulative-based: "Run total of 100km across all workouts"
Conditional: "IF earned Achievement A, THEN need only 2 commits instead of 3"


Requirement operators:

count: Minimum number of activities
distinct: Count only unique activities (by field)
consecutive: No gaps larger than threshold
within_timeframe: All activities within date range
aggregate: Sum/average of numeric fields


Logic combinators:

AND: All requirements must be met
OR: Any one requirement met
Nested: Complex boolean logic


Return result:

{ satisfied: boolean, progress: { completed: N, required: M }, missing: [...] }



Technical Details:

Optimize for common patterns (simple count queries)
Use SQL for complex aggregations (don't fetch all data to application)
Cache requirement check results (invalidate on new activity)
Support partial credit (e.g., 4/5 completed shows as 80%)


lib/achievement-logic/prerequisite-validator.ts
Purpose: Check achievement dependency chains
Requirements:

Export validatePrerequisites(user_id, achievement_id) function
Prerequisite types:

Required: Must have earned prerequisite achievement
Recommended: Helpful but not mandatory
Alternative: One of several prerequisites (OR logic)


Dependency resolution:

Fetch all prerequisites for achievement (recursive if nested)
Check if user has earned each required prerequisite
Return which prerequisites are missing


Circular dependency detection:

Prevent Achievement A requiring B requiring A
Run at achievement creation time
Use graph traversal algorithm (DFS)


Return result:

{ valid: boolean, missing_prerequisites: [...], has_recommended: [...] }



Technical Details:

Cache prerequisite chains (they rarely change)
Use database recursive CTEs for efficient prerequisite queries
Support complex patterns: "Earn any 3 achievements from category X"


lib/achievement-logic/progress-calculator.ts
Purpose: Calculate user's progress toward achievements
Requirements:

Export calculateProgress(user_id, achievement_id) function
Progress metrics:

Percentage complete (0-100%)
Specific requirements met vs. total
Estimated time to completion (based on user's activity rate)
Comparison to community average


Progress visualization data:

Return data suitable for progress bars, charts
Include milestones (e.g., "50% complete")


Return structure:

typescript  {
    percent_complete: 75,
    requirements_status: [
      { requirement: "3 commits", completed: 3, required: 3, status: "complete" },
      { requirement: "1 workshop", completed: 0, required: 1, status: "incomplete" }
    ],
    estimated_completion: "2024-02-15" (based on activity rate),
    rank_vs_community: "Top 25%"
  }
Technical Details:

Efficient queries (don't recalculate on every request)
Cache progress calculations (update on new verified activity)
Support bulk progress calculation (for leaderboards)


lib/achievement-logic/reward-issuer.ts
Purpose: Issue rewards when achievement granted
Requirements:

Export issueRewards(grant_id) async function
Reward types:

Digital badge: Generate badge image with achievement name, date
Verifiable credential: W3C Verifiable Credential format
Access grants: Unlock features, content, or events
Physical rewards: Trigger fulfillment workflow (print certificate, mail item)
Community recognition: Post to leaderboard, community feed


Badge generation:

Template-based: Use achievement category template
Personalized: Include user name, date earned
Multiple formats: PNG, SVG, PDF


Credential generation:

W3C VC standard format
Cryptographically signed by system
Includes achievement details, blockchain proof
Portable (can be shared outside system)


Return result:

{ rewards_issued: [...], badge_url, credential_json }



Technical Details:

Use image generation library (Canvas API in Deno)
Store badges in Supabase Storage or CDN
Implement credential signing (Ed25519 or RSA signatures)
Support multiple credential formats (JSON-LD, JWT)


lib/blockchain/ethereum-client.ts
Purpose: Ethereum blockchain interaction wrapper
Requirements:

Export Ethereum utilities:

getProvider(): Return configured ethers.js provider
getWallet(): Return wallet instance (from private key)
estimateGas(transaction): Estimate gas for transaction
sendTransaction(transaction): Sign and send transaction
waitForConfirmation(tx_hash, confirmations): Wait for blocks
getCurrentGasPrice(): Query network gas prices


Network management:

Support multiple networks (mainnet, Goerli, Polygon, etc.)
Auto-retry on network errors
Fallback to backup RPC providers


Transaction batching:

Combine multiple attestations into single transaction (save gas)
Use multicall pattern


Nonce management:

Track pending transactions
Handle concurrent transactions
Recover from stuck transactions



Technical Details:

Use ethers.js v6 (Deno-compatible)
Implement connection pooling for RPC providers
Monitor gas prices, pause if too high (>100 gwei threshold)
Log all transactions to database (audit trail)


lib/blockchain/ipfs-client.ts
Purpose: IPFS pinning service interaction
Requirements:

Export IPFS utilities:

uploadJSON(data): Upload JSON object, return CID
uploadFile(file): Upload binary file, return CID
pin(cid): Ensure content remains available
retrieve(cid): Fetch content by CID
unpin(cid): Remove pin (free storage)


Pinning service integration:

Support multiple services: Pinata, NFT.Storage, Web3.Storage
API key management
Handle rate limits


Content addressing:

Use CIDv1 (modern format)
Add metadata (name, description, timestamp)


Retrieval optimization:

Try multiple IPFS gateways
Cache retrieved content locally
Handle gateway timeouts



Technical Details:

Use official SDKs for pinning services
Implement retry logic (exponential backoff)
Monitor pinning service status (switch if down)
Compress JSON before upload (save bandwidth)


lib/blockchain/attestation-builder.ts
Purpose: Format achievement grants as blockchain attestations
Requirements:

Export buildAttestation(grant) function
Attestation format (EAS compatible):

typescript  {
    schema: "0x...",  // EAS schema UID
    recipient: "0x...",  // User's pseudonymous address
    data: {
      achievement_id: "uuid",
      user_pseudonym: "hash",
      granted_at: 1704067200,  // Unix timestamp
      evidence_ipfs: "Qm...",  // IPFS CID
      issuer_signature: "0x..."
    },
    refUID: "0x...",  // Reference to prerequisite (if any)
    revocable: false,
    expirationTime: 0  // No expiration
  }

Pseudonym generation:

Hash user ID with system salt
Use SHA-256 or better
Irreversible (protects privacy)
Consistent (same user always same pseudonym)


Evidence packaging (for IPFS):

Include achievement definition
Include requirement satisfaction proof
Exclude all PII
Sign with system key



Technical Details:

Support multiple attestation schemas (different achievement types)
Validate schema before building attestation
Include schema version for future compatibility
Test with EAS Sepolia testnet before mainnet


lib/blockchain/signature-verifier.ts
Purpose: Verify cryptographic signatures
Requirements:

Export signature verification functions:

verifyEthereumSignature(message, signature, address): Verify Ethereum ECDSA signature
verifyJWTSignature(jwt, public_key): Verify JWT token signature
verifyDeviceSignature(payload, signature, device_cert): Verify IoT device signature
verifyWebhookSignature(payload, signature, secret): Verify webhook HMAC


Signature types supported:

ECDSA (Ethereum, secp256k1 curve)
Ed25519 (modern, fast)
RSA (legacy, W3C VCs)
HMAC-SHA256 (webhooks)


Return verification result:

{ valid: boolean, signer: string, algorithm: string }



Technical Details:

Use Web Crypto API (Deno built-in)
Handle multiple signature formats (DER, compact, etc.)
RetryMContinuelib/blockchain/signature-verifier.ts (continued)
Technical Details (continued):

Cache public keys to avoid repeated lookups
Timing-safe comparison to prevent timing attacks
Support signature recovery (extract public key from signature)
Handle edge cases: Expired signatures, wrong algorithm


lib/integrations/github.ts
Purpose: GitHub API client wrapper
Requirements:

Export GitHub integration functions:

authenticateUser(oauth_code): Exchange OAuth code for token
getCommit(repo, sha): Fetch commit details
getRepository(owner, repo): Fetch repo metadata
listCommits(repo, author, since): List commits by author
getWorkflowRun(repo, run_id): Get CI/CD workflow results
verifyWebhookSignature(payload, signature): Validate webhook
createWebhook(repo, url, events): Register webhook


Authentication methods:

Personal Access Token (for system operations)
OAuth2 (for user-connected accounts)
GitHub App (for org-wide integrations)


Rate limiting:

Respect GitHub rate limits (5000/hour authenticated)
Implement backoff on 429 responses
Use conditional requests (ETag) to save quota


Error handling:

404: Repository or commit not found
403: Permission denied
422: Invalid request



Technical Details:

Use Octokit REST client (Deno-compatible version)
Cache repository metadata (reduce API calls)
Support GitHub Enterprise (custom API URLs)
Log API usage for debugging


lib/integrations/google-maps.ts
Purpose: Google Maps/Geolocation API wrapper
Requirements:

Export geolocation functions:

geocode(address): Convert address to lat/lng
reverseGeocode(lat, lng): Convert coordinates to address
getPlaceDetails(place_id): Get venue details
validateCoordinates(lat, lng): Check if coordinates valid
getTimezone(lat, lng): Get timezone for location


API integration:

Use Google Maps Geocoding API
Use Google Places API for venue lookups
Use Google Timezone API for time calculations


Rate limiting:

Free tier: Limited requests/day
Paid tier: Higher limits
Cache common locations (reduce API calls)


Privacy considerations:

Don't log user locations
Use aggregated/hashed data only



Technical Details:

Require GOOGLE_MAPS_API_KEY in environment
Handle API quotas gracefully (degrade to IP geolocation if quota exceeded)
Support alternative providers (Mapbox, OpenStreetMap) as fallbacks
Return standardized location object (lat, lng, accuracy, formatted_address)


lib/integrations/twilio.ts
Purpose: SMS notification service integration
Requirements:

Export SMS functions:

sendSMS(to_phone, message): Send single SMS
sendBulkSMS(recipients, message): Send to multiple recipients
checkDeliveryStatus(message_sid): Query delivery status
validatePhoneNumber(phone): Verify phone format


Message formatting:

Max 160 characters (single SMS)
Support long messages (concatenated SMS)
Include opt-out instructions per regulations
Personalization: Insert user name, achievement name


Rate limiting:

Respect Twilio limits
Batch messages to reduce costs
Queue messages for delayed delivery


Compliance:

Verify user opted in to SMS
Include unsubscribe instructions
Respect do-not-disturb hours
Regional compliance (GDPR, TCPA, etc.)



Technical Details:

Use Twilio REST API
Store phone numbers in E.164 format
Handle international numbers
Track SMS costs (monitor budget)
Support two-way SMS (receive replies for verification)


lib/integrations/sendgrid.ts
Purpose: Email notification service integration
Requirements:

Export email functions:

sendEmail(to, subject, html_body, text_body): Send single email
sendBulkEmail(recipients, subject, template_id, data): Bulk sending
sendTemplatedEmail(to, template_id, dynamic_data): Use templates
trackEmailOpen(email_id): Track engagement
handleUnsubscribe(email): Process unsubscribe requests


Email templates:

Achievement granted template
Verification failed template
Milestone reminder template
Weekly digest template


Personalization:

Merge fields: {{user_name}}, {{achievement_name}}, etc.
Dynamic content sections (show/hide based on data)


Deliverability:

SPF/DKIM/DMARC configured
Warm up sending IP
Monitor bounce rates
Handle unsubscribes



Technical Details:

Use SendGrid v3 API
Store email templates in SendGrid (not in code)
Track email events: delivered, opened, clicked, bounced
Implement retry logic for transient failures
Support A/B testing (send variations)


/tests Directory
tests/unit/activity-verification.test.ts
Purpose: Unit tests for activity verification logic
Requirements:

Test coverage for all verification types:

Code commit verification
Geolocation verification
IoT sensor verification
Workshop attendance verification
Custom verification


Test scenarios:

Valid activity: Should verify successfully
Invalid data format: Should reject with clear error
Spoofed data: Should detect and reject
Edge cases: Boundary conditions, null values
Error conditions: External API failures


Test structure:

Arrange: Set up test data and mocks
Act: Call verification function
Assert: Check result matches expectation


Mocking:

Mock external APIs (GitHub, Google Maps)
Mock database queries
Mock blockchain operations



Technical Details:

Use Deno.test() for test definitions
Use assertions from @std/assert
Mock external dependencies (don't hit real APIs in tests)
Aim for 90%+ code coverage
Run tests in CI/CD pipeline


tests/unit/achievement-verification.test.ts
Purpose: Unit tests for achievement eligibility and grant logic
Requirements:

Test achievement eligibility checking:

Simple count requirements: "3 commits" → Pass if user has 3+ verified commits
Complex requirements: "3 commits AND 1 workshop" → Pass only if both satisfied
Time-based requirements: "30 consecutive days" → Pass only if no gaps
Prerequisite requirements: Must have earned prerequisite first


Test achievement granting:

Successful grant: Creates grant record, queues blockchain sync
Duplicate prevention: Can't grant same achievement twice
Concurrency: Handle simultaneous grant attempts


Test progress calculation:

Partial progress: "2 of 3 commits" → 66% complete
Multiple requirements: Aggregate progress across all requirements


Test edge cases:

User has no activities → 0% progress
Achievement has no requirements → Auto-grant (edge case handling)



Technical Details:

Use test fixtures for sample activities and achievements
Test database transactions (rollback after tests)
Mock blockchain sync (don't wait for real transactions in tests)


tests/unit/blockchain-sync.test.ts
Purpose: Unit tests for blockchain operations
Requirements:

Test attestation building:

Valid grant data → Properly formatted attestation
Missing fields → Error with clear message
Pseudonym generation: Same user ID → Same pseudonym consistently


Test IPFS upload:

JSON data → Returns valid CID
Large data → Handles compression
Network failure → Retries then fails gracefully


Test Ethereum transaction:

Valid attestation → Transaction signed correctly
Gas estimation: Returns reasonable gas limit
Nonce management: Concurrent transactions use correct nonces


Mock blockchain:

Don't send real transactions in tests
Use local blockchain (Ganache, Hardhat)
Or mock ethers.js provider



Technical Details:

Test on testnet occasionally (integration test)
Verify transaction format before sending
Test gas price calculations
Test transaction retry logic


tests/unit/validation.test.ts
Purpose: Unit tests for input validation
Requirements:

Test JSON Schema validation:

Valid input → Passes validation
Invalid input → Returns structured errors
Missing required field → Clear error message
Wrong data type → Type error message


Test sanitization:

Script tags → Removed or escaped
SQL injection patterns → Cleaned
Excessively long strings → Truncated


Test each schema:

Activity schema validation
Achievement schema validation
Verification rule schema validation
User profile schema validation


Test edge cases:

Empty input → Validation error
Null vs undefined → Handled consistently
Unicode characters → Preserved correctly



Technical Details:

Test with valid and invalid samples for each schema
Ensure error messages are user-friendly
Test schema $ref resolution (cross-schema references)


tests/integration/end-to-end-robotics.test.ts
Purpose: Full workflow test for robotics achievement
Requirements:

Simulate complete robotics achievement flow:

Setup: Create test user, course, and achievement definition
Student action: Push code commit to GitHub (test repo)
GitHub webhook: Send webhook to system
Verification: System verifies commit and tests
Activity logged: Check activity in database
Progress check: Query achievement progress (should show 1/3 complete)
Repeat: Push 2 more commits
Achievement grant: Check that achievement granted automatically
Blockchain sync: Verify attestation written (on testnet)
Cleanup: Delete test data


Test variations:

Failed tests → Verification fails, activity not counted
Wrong author → Verification fails
Concurrent commits → All processed correctly


Environment:

Use test GitHub repository
Use test Supabase project
Use Ethereum testnet (Goerli/Sepolia)



Technical Details:

Run against staging environment (not production)
Use GitHub API to create/delete test repos
May take several minutes (includes blockchain confirmations)
Teardown: Clean up all test data after test


tests/integration/end-to-end-checkin.test.ts
Purpose: Full workflow test for location-based check-in achievement
Requirements:

Simulate complete check-in achievement flow:

Setup: Create test user, event, and achievement definition
User action: Submit check-in via API (mock GPS coordinates)
Verification: System verifies location and time
Activity logged: Check activity in database
Progress check: Query achievement progress
Repeat: Submit 9 more check-ins (different dates)
Achievement grant: Verify "10 meetings" achievement granted
Notification: Check that notification sent
Cleanup: Delete test data


Test variations:

Check-in outside geofence → Verification fails
Check-in outside time window → Verification fails
Duplicate check-in (same event) → Rejected
Device spoofing detected → Rejected


Mock external services:

Mock Google Maps API (geolocation)
Mock notification services



Technical Details:

Use test event with known coordinates
Simulate time progression (10 different dates)
Test concurrent check-ins (race conditions)
Verify database state at each step


tests/integration/webhook-handlers.test.ts
Purpose: Test webhook endpoint integrations
Requirements:

Test GitHub webhook:

Send mock push event → System processes commit
Send mock workflow_run event → System updates test status
Invalid signature → Rejected
Replay attack (old timestamp) → Rejected


Test IoT device webhook:

Send mock sensor reading → Activity logged
Invalid device signature → Rejected
Rate limit exceeded → Returns 429


Test external service webhook:

Send mock Zapier event → Processed correctly
Unknown integration type → Returns 400


Test webhook reliability:

Duplicate deliveries → Idempotent (handled gracefully)
Out-of-order deliveries → Correct final state
Malformed payloads → Returns 400 with error details



Technical Details:

Use mock webhook payloads (from fixtures)
Test signature verification with test secrets
Verify database state after webhook processing
Test error responses (status codes, body format)


tests/fixtures/sample-activities.json
Purpose: Test data for activities
Requirements:

Variety of activity types:

Code commits (verified and unverified)
Location check-ins (valid and invalid)
IoT sensor readings (realistic values)
Workshop attendances


Realistic data:

Valid timestamps (recent dates)
Realistic GPS coordinates (actual locations)
Valid GitHub commit SHAs (format)


Different verification statuses:

Some verified
Some pending
Some failed


Multiple users:

At least 3 different user IDs
Various activity patterns (frequent vs sparse)



Technical Details:

JSON array of activity objects
Follow activity schema exactly
Include comments explaining each fixture
Update periodically to reflect schema changes


tests/fixtures/sample-achievements.json
Purpose: Test data for achievement definitions
Requirements:

Cover all achievement patterns:

Simple count: "3 commits"
Time-based: "30 consecutive days"
Variety: "5 different workshop topics"
Cumulative: "100km total distance"
Prerequisite: "Must have earned Achievement A first"
Expiring: "Complete before end of month"


Different categories:

Coding achievements
Wellness achievements
Community achievements


Different visibility levels:

Public achievements
Community-only achievements
Private achievements



Technical Details:

JSON array of achievement objects
Follow achievement schema exactly
Include realistic reward data (badge URLs, credentials)
Reference valid category IDs


tests/fixtures/sample-users.json
Purpose: Test data for user profiles
Requirements:

Variety of user types:

Regular users
Instructors
Admins


Realistic profiles:

Valid usernames (no special characters)
Real-looking email addresses
Various notification preferences


Different states:

New user (no activities)
Active user (many activities)
Inactive user (no recent activities)



Technical Details:

JSON array of user profile objects
Follow user-profile schema exactly
Include integration settings (GitHub connected, etc.)
Use fake but realistic data (no real PII)


/scripts Directory
scripts/setup-local-dev.sh
Purpose: One-command local development environment setup
Requirements:

Prerequisites check:

Verify Deno installed (minimum version 1.40)
Verify Supabase CLI installed
Verify Docker installed (for local Supabase)
Verify Git installed


Setup steps:

Install project dependencies (if any)
Copy .env.example to .env
Prompt user for required environment variables (or generate defaults)
Initialize Supabase local project: supabase init
Start Supabase services: supabase start
Run database migrations: supabase db reset
Seed test data: deno run scripts/seed-test-data.ts
Deploy Edge Functions locally: supabase functions serve
Run tests to verify setup: deno test
Print success message with next steps


Error handling:

If prerequisite missing, print installation instructions
If step fails, print clear error and troubleshooting tips
Support --skip-tests flag to skip test run


Output:

Print Supabase local URLs (API, Studio)
Print test credentials (if any)



Technical Details:

Bash script (works on macOS, Linux, WSL)
Idempotent: Safe to run multiple times
Colored output: Success (green), errors (red), info (blue)
Log all actions to setup.log for debugging


scripts/deploy-to-staging.sh
Purpose: Deploy to staging Supabase project
Requirements:

Prerequisites check:

Verify Supabase CLI installed
Verify logged in: supabase login
Verify staging project linked: supabase link --project-ref <staging-ref>


Deployment steps:

Run tests locally: deno test (fail if tests fail)
Build Edge Functions (if build step needed)
Push database migrations: supabase db push
Deploy Edge Functions: supabase functions deploy
Set environment secrets: supabase secrets set (read from .env.staging)
Run smoke tests against staging
Print deployment summary (functions deployed, migration status)


Safety checks:

Confirm before deploying (unless --yes flag)
Backup database before migrations (automatic via Supabase)
Rollback on failure (revert migrations if function deploy fails)


Notifications:

Post to Slack/Discord: "Staging deployment completed"
Tag deployment with Git commit SHA



Technical Details:

Bash script
Use Supabase CLI commands
Store staging project ref in config file
Support --function flag to deploy specific function only
Log deployment to deployment.log


scripts/deploy-to-production.sh
Purpose: Deploy to production Supabase project
Requirements:

Prerequisites check:

Verify on main/master branch (prevent accidental deploy from feature branch)
Verify no uncommitted changes
Verify staging deployment successful (check last deployment)
Verify all tests passed in CI


Safety prompts:

Display changes to be deployed (git diff since last deploy)
Require explicit confirmation: "Type 'DEPLOY' to proceed"
Optional: Require two-factor authentication


Deployment steps:

Tag release in Git: git tag v1.2.3
Run tests one more time
Push database migrations (with backup)
Deploy Edge Functions
Set environment secrets
Run smoke tests against production
Monitor for errors (5 minutes)
Print deployment summary


Rollback plan:

If smoke tests fail, automatically rollback
Rollback procedure: Revert migrations, deploy previous function versions
Notify team immediately


Post-deployment:

Create GitHub release
Update CHANGELOG
Notify team on Slack/Discord
Monitor error rates for 1 hour



Technical Details:

Bash script with extra safety checks
Require production deployment key (not stored in repo)
Log detailed deployment steps
Support --dry-run to preview without deploying
Integration with CI/CD (GitHub Actions can call this)


scripts/backup-database.sh
Purpose: Create database backup
Requirements:

Backup methods:

Supabase automatic backups (daily, retention per plan)
Manual backup: Export database to SQL file


Backup process:

Check available disk space (need space for backup file)
Export database: pg_dump or Supabase API
Compress backup: gzip backup.sql
Upload to backup storage (S3, Google Cloud Storage)
Verify backup integrity (test restore to temp database)
Clean up old backups (retain last 30 days)


Backup includes:

All tables (schema + data)
Indexes and constraints
Row Level Security policies
Database functions and triggers


Backup excludes:

Temporary tables
Audit logs (too large, separate retention)


Metadata:

Tag backup with timestamp, Git commit SHA
Store backup manifest (tables, row counts)



Technical Details:

Bash script
Use pg_dump (PostgreSQL standard tool)
Encrypt backups (GPG or cloud provider encryption)
Schedule via cron (daily at 2 AM)
Alert on backup failure


scripts/restore-database.sh
Purpose: Restore database from backup
Requirements:

Safety checks:

Confirm target environment (prevent restoring to production accidentally)
Display backup metadata (timestamp, size, commit SHA)
Require explicit confirmation
Create pre-restore backup of current database


Restore process:

Download backup file from storage
Verify backup integrity (checksum)
Decompress: gunzip backup.sql.gz
Drop target database (or create new one)
Restore: psql < backup.sql
Verify restoration (check table counts, sample data)
Update database version metadata


Post-restore:

Run migrations if backup is old version
Reindex if needed
Analyze tables for query planner


Error handling:

If restore fails, keep original database intact
Log all steps for debugging



Technical Details:

Bash script
Use psql (PostgreSQL client)
Support point-in-time recovery (if using WAL backups)
Test restores regularly (quarterly disaster recovery drills)


scripts/seed-test-data.ts
Purpose: Populate database with test data
Requirements:

Seed data includes:

Test users (3-5 with different roles)
Test achievement categories (5-10 categories)
Test achievement definitions (20+ achievements)
Test activities (50+ activities across users)
Test achievement grants (5-10 grants)
Test verification rules


Data characteristics:

Realistic (looks like real user data)
Varied (different patterns, edge cases)
Consistent (relationships valid, foreign keys satisfied)


Idempotent:

Check if data already exists (don't duplicate)
Use upsert (INSERT ON CONFLICT UPDATE)


Environment-specific:

Dev/staging only (never run in production)
Configurable seed size (small/medium/large)


Output:

Print what was seeded (counts)
Print test credentials
Print example API calls to try



Technical Details:

TypeScript/Deno script
Use Supabase client
Read seed data from fixtures or generate programmatically
Support --reset flag to delete all data first
Fast execution (use batch inserts)


scripts/migrate-achievement-definitions.ts
Purpose: Bulk import/update achievement definitions
Requirements:

Import sources:

JSON file (array of achievement definitions)
CSV file (spreadsheet-friendly format)
API endpoint (fetch from external system)


Import process:

Load achievement definitions
Validate each definition (JSON Schema)
Check for duplicates (by name or external ID)
For each achievement:

If exists: Update (increment version if breaking change)
If new: Create


Print summary (created, updated, errors)


Validation:

Verify all referenced categories exist
Verify verification functions exist
Validate requirements structure


Dry-run mode:

Validate without writing to database
Print what would be changed


Error handling:

Continue on error (process all, report failures at end)
Log failed imports to file
Provide line numbers for CSV errors



Technical Details:

TypeScript/Deno script
Support --source flag (file path or URL)
Support --format flag (json, csv)
Use transactions for atomicity (rollback if critical error)
Backup affected achievements before updating


scripts/generate-api-docs.ts
Purpose: Auto-generate API documentation from code
Requirements:

Documentation source:

JSDoc comments in Edge Function code
TypeScript type definitions
JSON Schemas


Generate OpenAPI 3.0 specification:

Parse Edge Functions for routes and handlers
Extract JSDoc comments for descriptions
Infer request/response schemas from types
Include authentication requirements
Add example requests and responses


Output formats:

openapi.json: OpenAPI spec
api-reference.html: Swagger UI standalone HTML
api-reference.md: Markdown documentation


Include:

All endpoints (grouped by function)
Authentication methods
Error codes and meanings
Rate limits


Keep in sync:

Run automatically on deploy
Fail build if docs out of sync with code



Technical Details:

TypeScript/Deno script
Use JSDoc parser library
Use TypeScript compiler API for type extraction
Template Swagger UI HTML
Output to /docs/api-reference.*


/templates Directory
templates/achievement-definitions/code-based-achievement.json
Purpose: Template for programming challenge achievements
Requirements:

Template structure:

json  {
    "name": "CODE_CHALLENGE_NAME",
    "description": "Complete CHALLENGE_DESCRIPTION",
    "category_id": "CODING_CATEGORY_UUID",
    "requirements": [
      {
        "activity_type": "code_commit",
        "count": 3,
        "conditions": {
          "repo_contains": "REPO_PATTERN",
          "test_results.passed": true,
          "test_results.coverage": { ">=": 80 }
        }
      }
    ],
    "verification_logic_ref": "verify-code-commit",
    "reward_data": {
      "badge_template": "code-badge",
      "certificate": true
    },
    "visibility": "public"
  }

Placeholder variables (uppercase):

CODE_CHALLENGE_NAME: Achievement name
CHALLENGE_DESCRIPTION: What user must do
CODING_CATEGORY_UUID: Category ID (replace with actual)
REPO_PATTERN: Repository name pattern


Usage instructions:

Copy template
Replace placeholders with actual values
Validate against schema
Import via API or migration script


Variations included:

Single commit challenge
Multi-commit challenge
Pull request challenge
Code review challenge



Technical Details:

Valid JSON (no comments, strict format)
Follows achievement.schema.json exactly
Include realistic examples in comments (separate file)


templates/achievement-definitions/attendance-achievement.json
Purpose: Template for event/workshop attendance achievements
Requirements:

Template structure:

json  {
    "name": "ATTENDANCE_NAME",
    "description": "Attend NUMBER EVENTS",
    "category_id": "COMMUNITY_CATEGORY_UUID",
    "requirements": [
      {
        "activity_type": "location_checkin",
        "count": 5,
        "conditions": {
          "event_type": "EVENT_TYPE",
          "verified_geolocation": true
        },
        "distinct_by": "event_id"
      }
    ],
    "verification_logic_ref": "verify-geolocation",
    "reward_data": {
      "badge_template": "attendance-badge",
      "access_grant": "NEXT_LEVEL_EVENTS"
    },
    "visibility": "community"
  }

Variations:

First attendance (count: 1)
Regular attendee (count: 10)
Diverse attendance (distinct locations)
Perfect attendance (all events in series)



Technical Details:

Support different event types (workshop, meetup, conference)
Include geofence verification
Support time window validation


templates/achievement-definitions/milestone-achievement.json
Purpose: Template for cumulative/milestone achievements
Requirements:

Template structure:

json  {
    "name": "MILESTONE_NAME",
    "description": "Reach MILESTONE_GOAL",
    "category_id": "CATEGORY_UUID",
    "requirements": [
      {
        "activity_type": "ACTIVITY_TYPE",
        "aggregate": "sum",
        "field": "NUMERIC_FIELD",
        "target": 1000,
        "unit": "UNIT"
      }
    ],
    "verification_logic_ref": "verify-milestone",
    "reward_data": {
      "badge_template": "milestone-badge",
      "milestone_tier": "BRONZE|SILVER|GOLD"
    }
  }

Aggregate functions supported:

Sum: Total distance, total time, total points
Average: Average score, average rating
Max: Personal best


Progressive tiers:

Bronze (10% of goal)
Silver (50% of goal)
Gold (100% of goal)
Platinum (200% of goal)



Technical Details:

Support units (km, hours, points, etc.)
Track progress incrementally
Support milestone celebrations (25%, 50%, 75%, 100%)


templates/achievement-definitions/wellness-habit-achievement.json
Purpose: Template for daily habit tracking achievements
Requirements:

Template structure:

json  {
    "name": "HABIT_NAME",
    "description": "Maintain HABIT_DESCRIPTION for DAYS days",
    "category_id": "WELLNESS_CATEGORY_UUID",
    "requirements": [
      {
        "activity_type": "habit_checkin",
        "consecutive_days": 30,
        "max_gap_hours": 36,
        "conditions": {
          "habit_type": "HABIT_TYPE"
        }
      }
    ],
    "verification_logic_ref": "verify-habit-streak",
    "reward_data": {
      "badge_template": "streak-badge",
      "streak_days": 30
    }
  }

Habit types:

Meditation (daily breathwork)
Exercise (workout logged)
Sleep (8+ hours tracked)
Nutrition (meal logged)
Journaling (entry written)


Streak logic:

Consecutive days counting
Allow small gaps (36 hours = 1 day grace period)
Reset on miss (or freeze with power-ups)



Technical Details:

Timezone-aware (day boundaries respect user timezone)
Support streak freezes (maintain streak despite miss)
Celebrate milestones (7, 30, 100, 365 days)


templates/achievement-definitions/community-contribution-achievement.json
Purpose: Template for peer recognition achievements
Requirements:

Template structure:

json  {
    "name": "CONTRIBUTION_NAME",
    "description": "Make CONTRIBUTION_TYPE contributions",
    "category_id": "COMMUNITY_CATEGORY_UUID",
    "requirements": [
      {
        "activity_type": "peer_review",
        "count": 5,
        "conditions": {
          "review_type": "HELPFUL_VOTE",
          "from_distinct_users": 3
        }
      }
    ],
    "verification_logic_ref": "verify-peer-review",
    "reward_data": {
      "badge_template": "contributor-badge",
      "community_role": "HELPER"
    }
  }

Contribution types:

Helpful reviews (peer voted)
Code contributions (merged PRs)
Mentorship (coached N users)
Content creation (tutorials written)


Peer verification:

Require votes from multiple community members
Prevent self-voting or gaming



Technical Details:

Support reputation systems
Track contribution quality (not just quantity)
Progressive roles (Helper → Mentor → Leader)


templates/verification-rules/github-commit-verification.json
Purpose: Template for GitHub commit verification rules
Requirements:

Template structure:

json  {
    "name": "RULE_NAME",
    "activity_type_id": "code_commit",
    "logic_function": "verify-code-commit",
    "required_evidence": [
      "repo_url",
      "commit_sha",
      "test_results"
    ],
    "success_criteria": {
      "commit_exists": true,
      "author_matches_user": true,
      "test_results.passed": true,
      "test_results.coverage": { ">=": MIN_COVERAGE }
    },
    "failure_conditions": [
      { "field": "test_resultsRetryMContinuetemplates/verification-rules/github-commit-verification.json (continued)
Requirements (continued):
json    "failure_conditions": [
      { "field": "test_results.passed", "equals": false, "reason": "Tests did not pass" },
      { "field": "author_email", "not_matches": "user_email", "reason": "Commit author does not match user" },
      { "field": "commit_sha", "format": "invalid", "reason": "Invalid commit SHA format" }
    ],
    "authority": "automated"
  }

Customization points:

MIN_COVERAGE: Minimum test coverage percentage
RULE_NAME: Descriptive name for the rule
Test framework integration (Jest, PyTest, JUnit, etc.)


Advanced criteria (optional):

Code complexity checks
Linting passing
Security scan passing
Commit message format



Technical Details:

Support multiple test result formats
Configurable strictness levels (strict/moderate/lenient)
Include retry logic for transient GitHub API failures


templates/verification-rules/geolocation-verification.json
Purpose: Template for location-based verification rules
Requirements:

Template structure:

json  {
    "name": "LOCATION_RULE_NAME",
    "activity_type_id": "location_checkin",
    "logic_function": "verify-geolocation",
    "required_evidence": [
      "latitude",
      "longitude",
      "timestamp",
      "device_id",
      "accuracy"
    ],
    "success_criteria": {
      "within_geofence": {
        "center_lat": VENUE_LAT,
        "center_lon": VENUE_LON,
        "radius_meters": 100
      },
      "within_time_window": {
        "start": "EVENT_START_TIME",
        "end": "EVENT_END_TIME",
        "grace_period_minutes": 30
      },
      "accuracy": { "<=": 50 },
      "device_verified": true
    },
    "failure_conditions": [
      { "field": "distance_to_venue", "operator": ">", "value": 100, "reason": "Too far from venue" },
      { "field": "accuracy", "operator": ">", "value": 100, "reason": "GPS accuracy insufficient" },
      { "field": "timestamp", "condition": "outside_window", "reason": "Check-in outside event time" }
    ],
    "authority": "automated"
  }

Customization:

Geofence radius (100m for specific venues, 1km for general areas)
Time window flexibility
GPS accuracy requirements


Anti-spoofing:

Device verification required
IP geolocation cross-check
Movement pattern analysis



Technical Details:

Use Haversine distance calculation
Support multiple geofence types (circle, polygon)
Handle timezone conversions properly


templates/verification-rules/iot-sensor-verification.json
Purpose: Template for IoT device sensor verification
Requirements:

Template structure:

json  {
    "name": "SENSOR_RULE_NAME",
    "activity_type_id": "iot_sensor_reading",
    "logic_function": "verify-iot-sensor",
    "required_evidence": [
      "device_id",
      "sensor_type",
      "reading_value",
      "timestamp",
      "signature"
    ],
    "success_criteria": {
      "device_registered": true,
      "signature_valid": true,
      "timestamp_recent": { "max_age_minutes": 30 },
      "reading_value": {
        "sensor_type": "SENSOR_TYPE",
        "min": MIN_VALUE,
        "max": MAX_VALUE
      },
      "sequence_valid": true
    },
    "failure_conditions": [
      { "field": "signature", "condition": "invalid", "reason": "Device signature verification failed" },
      { "field": "reading_value", "condition": "out_of_range", "reason": "Sensor reading physically impossible" },
      { "field": "timestamp", "condition": "too_old", "reason": "Reading timestamp too old" }
    ],
    "authority": "automated"
  }

Sensor types supported:

Temperature (°C or °F)
Humidity (%)
Soil moisture (%)
Light (lux)
Pressure (hPa)
Custom sensors


Value ranges per sensor:

Temperature: -40°C to 80°C
Humidity: 0% to 100%
Custom ranges definable


Sequence validation:

Check for reasonable progression
Detect sensor failures (flat lines)
Identify drift patterns



Technical Details:

Support multiple sensors per device (multi-reading payloads)
Cryptographic signature verification (Ed25519 or RSA)
Time-series anomaly detection (optional)


templates/verification-rules/peer-review-verification.json
Purpose: Template for human peer review verification
Requirements:

Template structure:

json  {
    "name": "PEER_REVIEW_RULE",
    "activity_type_id": "ACTIVITY_TYPE_REQUIRING_REVIEW",
    "logic_function": "verify-custom",
    "required_evidence": [
      "submission_content",
      "submission_type"
    ],
    "success_criteria": {
      "review_required": true,
      "min_reviewers": 2,
      "min_approval_percentage": 67,
      "reviewer_qualifications": {
        "has_earned_achievement": "RELATED_ACHIEVEMENT_ID"
      }
    },
    "failure_conditions": [
      { "field": "review_count", "operator": "<", "value": 2, "reason": "Insufficient reviews" },
      { "field": "approval_rate", "operator": "<", "value": 67, "reason": "Approval threshold not met" }
    ],
    "authority": "peer_review"
  }

Review workflow:

Activity submitted, queued for review
System selects qualified reviewers
Reviewers notified (email, in-app)
Each reviewer approves/rejects with comments
Aggregate results (majority rule or consensus)
Notify submitter of result


Reviewer selection:

Earned related achievements (domain expertise)
Good reviewer reputation (past reviews were helpful)
No conflict of interest (not friends with submitter)
Random selection for fairness


Reviewer guidelines:

Rubric provided (clear criteria)
Time limit (48-72 hours to review)
Explanation required for rejection



Technical Details:

Prevent gaming (reviewers can't review friends)
Track reviewer quality (inter-rater reliability)
Support appeals (submitter can dispute rejection)
Anonymize reviews (optional, to reduce bias)


/examples Directory
examples/robotics-course/README.md
Purpose: Complete documentation for robotics course achievement implementation
Requirements:

Overview section:

Course description (IoT Robotics with MicroPython)
Achievement goals (3 coding challenges)
Learning outcomes
Technical prerequisites


Architecture diagram:

Student workflow: Code → Commit → GitHub Actions → Webhook → Verification → Achievement
Visual representation (Mermaid or image)


Setup instructions:

Prerequisites: GitHub account, MicroPython environment, embedded simulator
Repository setup: Fork starter repo, configure secrets
GitHub Actions setup: Copy workflow file, configure permissions
Webhook registration: Register webhook URL in repo settings
Achievement definition: Import achievement JSON
Test setup: Run sample commit, verify webhook triggered


Challenge descriptions:

Challenge 1: "Hello Blinky" - Control LED via GPIO
Challenge 2: "Sensor Symphony" - Read multiple sensors
Challenge 3: "Smart Thermostat" - Control heating/cooling
For each: Requirements, test criteria, hints


Troubleshooting:

GitHub Actions not running → Check workflow file, permissions
Tests failing → Check code, review error logs
Webhook not received → Check webhook URL, firewall


Assessment rubric:

Code quality expectations
Test coverage requirements
Documentation requirements



Technical Details:

Include screenshots of GitHub setup
Provide starter code repository link
Include video walkthrough (optional)
Reference actual files in /examples/robotics-course/ directory


examples/robotics-course/achievement-definitions.json
Purpose: Achievement definitions for robotics course
Requirements:

Three achievement definitions:

"Hello Blinky" Achievement:



json     {
       "name": "Hello Blinky",
       "description": "Control an LED using MicroPython GPIO",
       "category_id": "robotics_category_uuid",
       "requirements": [
         {
           "activity_type": "code_commit",
           "count": 1,
           "conditions": {
             "repo_contains": "challenge-1",
             "test_results.passed": true,
             "test_results.tests": ["test_led_on", "test_led_off", "test_blink"]
           }
         }
       ],
       "verification_logic_ref": "verify-code-commit",
       "reward_data": {
         "badge_url": "/badges/hello-blinky.png",
         "points": 10
       }
     }

"Sensor Symphony" Achievement:

Requires reading temperature, humidity, light sensors
Tests verify all three sensors read correctly


"Smart Thermostat" Achievement:

Requires conditional logic (if temp > threshold, activate cooling)
Tests verify state machine works correctly




Progression structure:

Each achievement unlocks next challenge
Prerequisites: Challenge 2 requires Challenge 1 completion


Import instructions:

How to load these definitions into system
API endpoint or migration script



Technical Details:

Valid JSON that can be imported directly
UUIDs are placeholders (need actual category IDs)
Include prerequisite_ids for progressive challenges


examples/robotics-course/.github/workflows/verify-micropython-commit.yml
Purpose: GitHub Actions workflow for automated testing
Requirements:

Workflow triggers:

On push to main branch
On pull request to main
Manual trigger (workflow_dispatch)


Workflow steps:

Checkout code
Setup Python environment (Python 3.9+)
Install MicroPython dependencies
Install embedded system simulator (custom or QEMU)
Run test suite:

Unit tests (pytest)
Integration tests (simulator)
Code coverage report


Parse test results (JUnit XML format)
Send webhook to achievement system:

POST to webhook endpoint
Include: repo, commit SHA, test results, coverage
Sign payload with webhook secret


Post commit status (success/failure)


Test suite configuration:

Run tests in simulator (not real hardware)
Generate coverage report
Fail workflow if coverage < 80%


Webhook payload format:

json  {
    "event": "workflow_run",
    "repository": "user/repo",
    "commit_sha": "abc123...",
    "branch": "main",
    "test_results": {
      "passed": true,
      "total_tests": 10,
      "passed_tests": 10,
      "failed_tests": 0,
      "coverage": 92.5
    },
    "timestamp": "2024-01-15T10:30:00Z"
  }
Technical Details:

Use GitHub-hosted runners (ubuntu-latest)
Cache dependencies (speed up workflow)
Secrets: WEBHOOK_URL, WEBHOOK_SECRET stored in repo secrets
Timeout: 10 minutes max


examples/robotics-course/test-suite/embedded-sim-tests.py
Purpose: Test suite for MicroPython code challenges
Requirements:

Test framework: pytest
Test structure:

test_challenge1.py: Hello Blinky tests
test_challenge2.py: Sensor Symphony tests
test_challenge3.py: Smart Thermostat tests


Challenge 1 tests (Hello Blinky):

python  def test_led_on():
      # Test LED turns on when commanded
      device = SimulatedDevice()
      device.execute_code(student_code)
      device.send_command("LED_ON")
      assert device.get_pin_state(LED_PIN) == HIGH
  
  def test_led_off():
      # Test LED turns off when commanded
      device = SimulatedDevice()
      device.execute_code(student_code)
      device.send_command("LED_OFF")
      assert device.get_pin_state(LED_PIN) == LOW
  
  def test_blink():
      # Test LED blinks at correct frequency
      device = SimulatedDevice()
      device.execute_code(student_code)
      states = device.record_pin_states(LED_PIN, duration=2.0)
      assert count_transitions(states) >= 4  # At least 2 blinks in 2 seconds

Challenge 2 tests (Sensor Symphony):

Test temperature sensor reading
Test humidity sensor reading
Test light sensor reading
Test all sensors read simultaneously


Challenge 3 tests (Smart Thermostat):

Test heating activates when temp below threshold
Test cooling activates when temp above threshold
Test hysteresis (prevent rapid switching)


Coverage reporting:

Use pytest-cov
Generate XML report (for CI)
Require 80%+ line coverage



Technical Details:

Use embedded system simulator (not real hardware)
Simulator provides mock GPIO, sensors, time control
Tests are deterministic (repeatable results)
Fast execution (< 1 minute total)


examples/wellness-checkin/README.md
Purpose: Documentation for wellness check-in microapp
Requirements:

Overview:

Use case: Track attendance at support group meetings
Privacy-focused (location verified but not stored long-term)
Achievement progression: 1st, 10th, 50th, 100th meeting


User experience:

Open app at meeting location
Tap "Check In" button
App requests GPS permission
Verification happens automatically
Success message with progress display


Architecture:

React Native mobile app
Communicates with achievement system API
Geolocation verification via Edge Function


Setup instructions:

Register meeting locations (lat/lng, radius)
Create achievement definitions (import JSON)
Deploy microapp (Expo or App Store)
Test check-in flow


Privacy considerations:

Raw GPS coordinates sent to API but not stored
Only verification result stored (boolean: within geofence or not)
Device ID hashed (pseudonymous)
User can delete check-in history


Accountability partner integration:

User can assign accountability partner
Partner notified of milestones (with user permission)
Partner can view progress summary (not individual check-ins)



Technical Details:

Include app screenshots
Provide TestFlight or APK download link
Reference source code in /examples/wellness-checkin/microapp/


examples/wellness-checkin/achievement-definitions.json
Purpose: Achievement definitions for meeting attendance
Requirements:

Four progressive achievements:

"First Step" Achievement: Attend 1st meeting
"Regular Attendee" Achievement: Attend 10 meetings
"Committed Member" Achievement: Attend 50 meetings
"Cornerstone" Achievement: Attend 100 meetings


Each achievement structure:

json  {
    "name": "First Step",
    "description": "Attend your first in-person meeting",
    "category_id": "wellness_category_uuid",
    "requirements": [
      {
        "activity_type": "location_checkin",
        "count": 1,
        "conditions": {
          "event_type": "support_group_meeting",
          "verified_geolocation": true
        }
      }
    ],
    "verification_logic_ref": "verify-geolocation",
    "reward_data": {
      "badge_url": "/badges/first-step.png",
      "message": "Congratulations on taking the first step!",
      "encouragement": "Your accountability partner has been notified."
    },
    "visibility": "private"
  }

Privacy settings:

All achievements private by default
User can choose to share (opt-in)
Accountability partner has read access (if configured)


Notification preferences:

User chooses notification channels
Accountability partner notified of major milestones only



Technical Details:

Achievements are prerequisite chain (must earn 1st before 10th, etc.)
Distinct meetings counted (can't check in twice to same meeting)
Support multiple meeting types (GA, AA, NA, etc.)


examples/wellness-checkin/microapp/package.json
Purpose: React Native microapp dependencies
Requirements:

Package metadata:

Name: wellness-checkin
Version: 1.0.0
Description: Check in to support group meetings


Dependencies:

react-native: ^0.72.0
expo: ^49.0.0 (if using Expo)
react-navigation: ^6.0.0 (navigation)
@react-native-community/geolocation: ^3.0.0 (GPS)
axios: ^1.4.0 (API calls)
react-native-config: ^1.5.0 (environment variables)


Dev dependencies:

typescript: ^5.0.0
@types/react: ^18.0.0
@types/react-native: ^0.72.0
jest: ^29.0.0 (testing)
@testing-library/react-native: ^12.0.0


Scripts:

start: Start Metro bundler
android: Run on Android
ios: Run on iOS
test: Run Jest tests
lint: Run ESLint
build:android: Build APK
build:ios: Build IPA



Technical Details:

Use TypeScript for type safety
Configure Expo for easier deployment (optional)
Include testing setup


examples/wellness-checkin/microapp/src/CheckInScreen.tsx
Purpose: Main check-in UI component
Requirements:

Component structure:

Screen displays current location (if permission granted)
"Check In" button (prominent, accessible)
Progress display (meetings attended / next milestone)
Recent check-ins list (last 5)


Check-in flow:

User taps "Check In" button
Request GPS permission (if not granted)
Get current location
Show loading indicator
Call API to verify check-in
Handle response:

Success: Show success message, update progress
Failure: Show error, explain why (outside geofence, etc.)
Achievement unlocked: Show celebration animation




UI considerations:

Large, easy-to-tap button
Clear error messages
Loading states
Accessibility: Screen reader support, sufficient contrast


Offline handling:

If offline, queue check-in for later
Retry when connection restored
Show offline indicator



Technical Details:

Use React Native Geolocation API
Handle permission requests gracefully
Use async/await for API calls
Error boundaries for crash prevention
Implement proper TypeScript types


examples/wellness-checkin/microapp/src/api.ts
Purpose: API client for achievement system
Requirements:

API functions:

typescript  async function checkIn(location: Location): Promise<CheckInResult> {
    // Send check-in request to API
    const response = await axios.post(
      `${API_URL}/activity-verification/location-checkin`,
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: new Date().toISOString(),
        device_id: await getDeviceId(),
        accuracy: location.coords.accuracy
      },
      {
        headers: {
          'Authorization': `Bearer ${await getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  }
  
  async function getProgress(userId: string): Promise<Progress> {
    // Fetch user's achievement progress
  }
  
  async function getRecentCheckIns(userId: string): Promise<CheckIn[]> {
    // Fetch recent check-ins
  }

Authentication:

Store JWT token securely (Keychain/Keystore)
Refresh token automatically
Handle 401 (redirect to login)


Error handling:

Network errors: Retry with exponential backoff
400 errors: Show user-friendly message
500 errors: Log to error tracking, show generic error


Request/response types:

TypeScript interfaces for all API data
Validate responses against expected structure



Technical Details:

Use axios for HTTP requests
Configure timeout (30 seconds)
Add request/response interceptors (logging, auth)
Support offline queue (store failed requests, retry later)


examples/wellness-checkin/verification-config.json
Purpose: Configuration for geolocation verification
Requirements:

Meeting locations configuration:

json  {
    "meeting_locations": [
      {
        "id": "location_1",
        "name": "Downtown Community Center",
        "address": "123 Main St, City, State",
        "latitude": 34.0522,
        "longitude": -118.2437,
        "radius_meters": 100,
        "meeting_times": [
          {
            "day": "tuesday",
            "start_time": "18:00",
            "end_time": "19:30",
            "timezone": "America/Los_Angeles"
          },
          {
            "day": "saturday",
            "start_time": "10:00",
            "end_time": "11:30",
            "timezone": "America/Los_Angeles"
          }
        ]
      },
      {
        "id": "location_2",
        "name": "Eastside Church",
        "address": "456 Oak Ave, City, State",
        "latitude": 34.0622,
        "longitude": -118.2537,
        "radius_meters": 150,
        "meeting_times": [
          {
            "day": "wednesday",
            "start_time": "19:00",
            "end_time": "20:00",
            "timezone": "America/Los_Angeles"
          }
        ]
      }
    ],
    "verification_settings": {
      "max_gps_accuracy_meters": 50,
      "time_window_grace_minutes": 30,
      "require_device_verification": true,
      "allow_duplicate_checkin_hours": 24
    }
  }

Configuration loading:

Import into database on setup
Update via admin API
Changes take effect immediately



Technical Details:

Store in database, not just config file
Support CRUD operations on meeting locations
Validate coordinates (valid lat/lng ranges)
Support recurring schedules (every Tuesday, etc.)


examples/iot-smart-garden/README.md
Purpose: Documentation for smart garden IoT achievement
Requirements:

Overview:

Use case: Monitor garden with sensors for 30 days
Hardware: Arduino/ESP32 with sensors
Achievements: 30-day streak, optimal conditions


Hardware setup:

Bill of materials (BOM): Microcontroller, sensors, power supply
Wiring diagram: How to connect sensors
Assembly instructions: Physical setup


Software setup:

Install Arduino IDE
Install required libraries (WiFi, HTTPS, sensors)
Configure WiFi credentials
Configure API endpoint and device credentials
Upload sketch to board
Test sensor readings (Serial monitor)


Achievement definitions:

"Green Thumb": 30 consecutive days of readings
"Optimization Expert": 7 days of optimal conditions


Data visualization:

Dashboard shows real-time sensor readings
Charts display trends over time
Alerts for out-of-range conditions


Troubleshooting:

Sensor not reading → Check wiring, power
WiFi not connecting → Check credentials, signal strength
Readings not verified → Check API endpoint, device cert



Technical Details:

Include photos of assembled hardware
Provide pre-configured sketch (just add WiFi creds)
Link to dashboard for viewing data


examples/iot-smart-garden/achievement-definitions.json
Purpose: Smart garden achievement definitions
Requirements:

Two main achievements:

"Green Thumb" Achievement:



json     {
       "name": "Green Thumb",
       "description": "Maintain garden sensors online for 30 consecutive days",
       "category_id": "iot_category_uuid",
       "requirements": [
         {
           "activity_type": "iot_sensor_reading",
           "consecutive_days": 30,
           "max_gap_hours": 2,
           "conditions": {
             "sensor_types": ["temperature", "humidity", "soil_moisture"],
             "all_sensors_required": true
           }
         }
       ],
       "verification_logic_ref": "verify-iot-sensor",
       "reward_data": {
         "badge_url": "/badges/green-thumb.png",
         "time_lapse_video": true
       }
     }

"Optimization Expert" Achievement:

Requires 7 consecutive days where all sensors in optimal range
Temperature: 18-24°C
Humidity: 40-60%
Soil moisture: 30-50%




Supporting achievements (milestones):

7 days, 14 days, 21 days (leading up to 30)


Time-lapse integration:

Camera captures daily photo
System generates time-lapse video at 30 days
Video attached to achievement



Technical Details:

Consecutive days counting respects occasional gaps (2 hours grace period)
Optimal conditions defined per plant type (configurable)
Time-lapse requires camera integration (Raspberry Pi Camera, etc.)


examples/iot-smart-garden/arduino-sketch/sensor-logger.ino
Purpose: Arduino sketch for logging sensor data
Requirements:

Sketch structure:

Include libraries (WiFi, HTTPSClient, sensors)
Define constants (WiFi creds, API endpoint, device cert)
Setup function: Initialize sensors, WiFi, time sync
Loop function: Read sensors every 15 minutes, send to API


Sensor reading:

cpp  void readSensors() {
    float temp = dht.readTemperature();  // DHT22 sensor
    float humidity = dht.readHumidity();
    int soilMoisture = analogRead(SOIL_PIN);
    int light = analogRead(LIGHT_PIN);
    
    // Create JSON payload
    String payload = "{\"device_id\":\"" + DEVICE_ID + "\",";
    payload += "\"timestamp\":\"" + getISO8601Time() + "\",";
    payload += "\"readings\":[";
    payload += "{\"sensor\":\"temperature\",\"value\":" + String(temp) + "},";
    payload += "{\"sensor\":\"humidity\",\"value\":" + String(humidity) + "},";
    payload += "{\"sensor\":\"soil_moisture\",\"value\":" + String(soilMoisture) + "},";
    payload += "{\"sensor\":\"light\",\"value\":" + String(light) + "}";
    payload += "]}";
    
    // Sign payload with device certificate
    String signature = signPayload(payload);
    
    // Send to API
    sendToAPI(payload, signature);
  }

WiFi management:

Auto-reconnect if connection lost
Fallback to AP mode if can't connect (for debugging)


Power management:

Deep sleep between readings (save battery if solar powered)
Wake up every 15 minutes


Error handling:

Retry API calls on failure (3 attempts)
Store readings locally if can't send (SD card optional)
LED indicators for status (connected, error, etc.)



Technical Details:

Compatible with ESP8266 or ESP32
Use HTTPS for security
NTP time sync for accurate timestamps
Device certificate for signature (unique per device)


examples/iot-smart-garden/verification-webhook.ts
Purpose: Webhook handler for IoT sensor data
Requirements:

Webhook endpoint: /webhooks/iot-device
Request handling:

Receive POST request with sensor payload
Verify device signature
Validate payload structure
Check sensor values are realistic
Store reading in time-series database
Call activity verification
Check achievement progress
Return success response


Verification logic (detailed in file):

Device signature verification using device certificate
Timestamp validation (not too old, not in future)
Sensor value range checks
Sequence validation (no huge gaps, no duplicates)


Database storage:

Store full sensor payload
Index by device_id and timestamp
Aggregate older data (hourly averages after 30 days)


Achievement checking:

On each reading, check consecutive days count
If reaches 30 days, grant "Green Thumb" achievement
Check if conditions optimal, track streak



Technical Details:

TypeScript Edge Function
Use Supabase database for storage
Use TimescaleDB extension for time-series optimization
Handle high volume (1000+ devices, 4 readings/hour each)

---

This completes the comprehensive technical specification for implementing the Desert Tech & Life Festival Achievement System. Each file and module has clear requirements, integration points, and technical details to guide implementation without providing actual code samples.

Now implement the system using the above directory structure and technical details. Run tests for typescript, deno, and python per the test plan and update the README.md with the results.