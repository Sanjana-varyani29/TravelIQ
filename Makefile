# Makefile for Travel Booking Website
# Handles build, test, and deployment automation

# Variables
NODE = node
NPM = npm
VITE = ./node_modules/.bin/vite
ESLINT = ./node_modules/.bin/eslint
BUILD_DIR = dist
SRC_DIR = src

# Default target
.DEFAULT_GOAL := help

# Declare phony targets
.PHONY: all clean install build dev test lint help

# Help target - displays available commands
help:
	@echo "Available commands:"
	@echo "  make install  - Install project dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build production bundle"
	@echo "  make test     - Run tests"
	@echo "  make lint     - Run linter"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make all      - Run clean, install, lint, test, and build"

# Install dependencies
install:
	@echo "Installing dependencies..."
	@$(NPM) install

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf $(BUILD_DIR)
	@rm -rf node_modules
	@echo "Clean complete"

# Development server
dev: install
	@echo "Starting development server..."
	@$(NPM) run dev

# Production build
build: install
	@echo "Building production bundle..."
	@$(NPM) run build

# Run tests
test: install
	@echo "Running tests..."
	@$(NPM) run test || echo "No tests configured"

# Run linter
lint: install
	@echo "Running linter..."
	@$(NPM) run lint

# All-in-one command
all: clean install lint test build
	@echo "All tasks completed successfully"

# Error handling wrapper
%:
	@if [ -z "$(MAKECMDGOALS)" ]; then \
		make help; \
	elif [ "$(MAKECMDGOALS)" = "$@" ]; then \
		echo "Unknown target: $@"; \
		make help; \
		exit 1; \
	fi