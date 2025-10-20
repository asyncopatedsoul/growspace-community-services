#!/bin/bash

# Desert Tech & Life Festival Achievement System
# Local Development Setup Script

set -e  # Exit on error

echo "🚀 Setting up Desert Tech & Life Festival Achievement System..."
echo ""

# Colors for output
GREEN='\033[0.32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check prerequisites
echo "📋 Checking prerequisites..."

# Check Deno
if ! command -v deno &> /dev/null; then
    echo -e "${RED}❌ Deno is not installed${NC}"
    echo "Install from: https://deno.land/"
    exit 1
fi
echo -e "${GREEN}✓ Deno installed: $(deno --version | head -n 1)${NC}"

# Check Supabase CLI
if ! command -v supabase &> /dev/null; then
    echo -e "${YELLOW}⚠️  Supabase CLI not installed${NC}"
    echo "Install from: https://supabase.com/docs/guides/cli"
    echo "Continuing without Supabase CLI..."
else
    echo -e "${GREEN}✓ Supabase CLI installed${NC}"
fi

# Check Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Git installed${NC}"

echo ""
echo "📦 Setting up environment..."

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env from .env.example..."
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit .env with your configuration${NC}"
else
    echo -e "${GREEN}✓ .env already exists${NC}"
fi

echo ""
echo "🧪 Running tests..."

# Run tests
if deno test --allow-all; then
    echo -e "${GREEN}✓ All tests passed!${NC}"
else
    echo -e "${RED}❌ Some tests failed${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Edit .env with your configuration"
echo "2. Start Supabase (if installed): supabase start"
echo "3. Run migrations: supabase db reset"
echo "4. Deploy functions: supabase functions serve"
echo ""
echo "Run tests: deno test --allow-all"
echo "Format code: deno fmt"
echo "Lint code: deno lint"
echo ""
echo "📚 Documentation: ./docs/getting-started.md"
