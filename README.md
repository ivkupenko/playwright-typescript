# Playwright + TypeScript E2E Testing Boilerplate

This project is a boilerplate for end-to-end (E2E) testing using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/). It demonstrates best practices for structuring tests, using fixtures, and organizing test data.  
Use this as a starting point for robust, maintainable E2E test automation.

## Features

- **Playwright** for fast, reliable browser automation
- **TypeScript** for type safety and modern JavaScript features
- Modular structure: tests, fixtures, test data, and utilities
- Example authentication flow (login)
- Easy configuration and reporting

## Project Structure

```
playwright-typescript/
├── e2e/                # End-to-end test files
├── fixtures/           # Custom Playwright fixtures
├── test-data/          # Test data files (JSON, TS, etc.)
├── utils/              # Utility functions and helpers
├── support/            # Shared setup, custom commands, or global hooks
├── envs/               # Environment-specific configuration (optional)
├── playwright.config.ts# Playwright configuration
├── package.json        # Project dependencies and scripts
├── playwright-report/  # Playwright HTML reports
├── test-results/       # Playwright test result artifacts
├── .github/            # CI/CD workflows
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/your-username/playwright-typescript.git
cd playwright-typescript
npm install
```

### Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test e2e/login.spec.ts
```

### Generating Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Customization

- Add new test files in `e2e/`
- Add or update fixtures in `fixtures/`
- Store test data in `test-data/`
- Add utility functions in `utils/`
- Use `support/` for pages or custom commands
- Update Playwright settings in `playwright.config.ts`

## Why This Project?

- Clean, scalable structure for real-world projects
- Demonstrates TypeScript + Playwright best practices
- Ready for CI/CD integration

## Contributing

Feel free to fork and submit pull requests!

## Contact

Created by Ihor Kupenko — [i.kupenko@gmail.com] 