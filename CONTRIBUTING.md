# Contributing to Desert Tech & Life Festival Achievement System

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Development Environment Setup

### Prerequisites

- Deno 1.40+
- Supabase CLI 1.123+
- Git
- Code editor with TypeScript support

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/achievement-system.git
cd achievement-system

# Run setup script
./scripts/setup-local-dev.sh

# Verify setup
deno test --allow-all
```

## Coding Standards

### TypeScript

- **Strict Mode**: All TypeScript must compile with `strict: true`
- **Style Guide**: Follow [Deno Style Guide](https://deno.land/manual/references/contributing/style_guide)
- **Test Coverage**: Minimum 80% code coverage for new code
- **No `any` types**: Use proper typing or `unknown` with type guards

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add geolocation verification engine
fix: correct JWT token expiration handling
docs: update API reference for webhooks
test: add unit tests for blockchain sync
refactor: simplify achievement eligibility logic
```

### Branch Naming

- `feature/` - New features
- `bugfix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/improvements

## Pull Request Process

### 1. Draft PR for Early Feedback

Open a draft PR early to get feedback on your approach:

```bash
git checkout -b feature/my-feature
git push origin feature/my-feature
# Open draft PR on GitHub
```

### 2. Required Checks

Before marking PR as ready for review:

- ✅ All tests pass: `deno test --allow-all`
- ✅ Linter passes: `deno lint`
- ✅ Formatter applied: `deno fmt`
- ✅ Security scan clean (runs automatically)
- ✅ Documentation updated
- ✅ CHANGELOG.md updated

### 3. Review Process

- Minimum 1 maintainer approval required
- Community members can provide feedback
- Address all review comments
- Keep PR focused (one feature/fix per PR)

### 4. Merge

- Maintainers will merge approved PRs
- Squash merge for clean history
- Automatic deployment to staging

## Testing

### Run All Tests

```bash
deno test --allow-all
```

### Run Specific Test File

```bash
deno test --allow-all tests/unit/validation.test.ts
```

### Run with Coverage

```bash
deno test --allow-all --coverage=coverage
deno coverage coverage
```

### Test Requirements

- Unit tests for all new functions
- Integration tests for new workflows
- Fixtures for test data (no hardcoded values)
- Mock external APIs (don't hit real services)

## Environment Variables

Required environment variables are documented in `.env.example`. Never commit actual secrets.

### Local Development

```bash
cp .env.example .env
# Edit .env with your local values
```

### Testing

Use test-specific values:

```bash
SUPABASE_URL=http://localhost:54321
ENABLE_BLOCKCHAIN_SYNC=false
LOG_LEVEL=debug
```

## Development Workflow

### Local Testing → Staging → Production

1. **Local**: Test on local Supabase instance
2. **Staging**: Deploy to staging for integration tests
3. **Production**: Manual promotion after verification

```bash
# Deploy to staging
./scripts/deploy-to-staging.sh

# Run integration tests
deno test --allow-all tests/integration/

# Deploy to production (requires approval)
./scripts/deploy-to-production.sh
```

## Issue Templates

Use appropriate issue templates:

- **Bug Report**: For reporting bugs
- **Feature Request**: For proposing new features
- **Achievement Proposal**: For new achievement types

## Recognition

Contributors are recognized in:

- CHANGELOG.md for each release
- Achievement badge for first merged PR
- Community Discord announcements

## Getting Help

- **Discord**: [Join our community](https://discord.gg/desert-tech)
- **Discussions**: [GitHub Discussions](https://github.com/desert-tech-festival/achievement-system/discussions)
- **Documentation**: Check [docs/](./docs/) folder

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to the Desert Tech & Life Festival Achievement System!**
