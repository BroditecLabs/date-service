# date-service

A flexible date management service based on the Strategy pattern. It allows configuring different implementations.

## Development

### Initial Setup

After cloning the repository, it's necessary to run the following command to install and configure dependencies and Git Hooks:

```bash
bun install
bun prepare
```

This command installs dependencies, initializes Husky and configures the necessary hooks for commit validation and linting.

### Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to maintain a clean and semantic commit history.

### Linting

The project uses ESLint to maintain code consistency. Before each commit, linting validation is automatically executed.

#### Available Scripts

- `bun lint`: Runs linting on all TypeScript files
- `bun lint:fix`: Automatically fixes linting issues that can be resolved

### Git Hooks

Git Hooks (through Husky) are used to ensure code quality:

- `pre-commit`: Runs linting before each commit
- `commit-msg`: Validates that commit messages follow the conventional format
