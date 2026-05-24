# VTIT Backend Agent Harness

AI-agent harness and documentation package for building the VTIT Spring Boot backend safely.

This package is not application code. It provides project specifications, phase harnesses, progress trackers, plugin metadata, prompts, playbooks, and review gates for AI coding agents.

## Install

```bash
npm install @duongchau/vtit-backend-agent-harness
```

Or initialize the harness directly in a project:

```bash
npx @duongchau/vtit-backend-agent-harness init
```

## What Gets Installed

The `init` command copies:

- `AGENTS.md`
- `docs/`
- `agent-store/`
- `plugins/vtit-backend-agent/`

It intentionally excludes:

- `docs/discussion_about_the_project.md`
- `docs_other_projects_for _reference_only/`
- local IDE/build files.

## Agent Entry Point

After installation, tell the agent:

```text
Read AGENTS.md, docs/project/00-agent-start-here.md, docs/README.md, the current docs/phases/phase-*.md, and the matching docs/progress/phase-*-progress.json. Implement one C-A-R task only.
```

## Publish Maintainer Commands

```bash
pnpm pack --dry-run
npm login
pnpm publish --access public
```

## Repository

https://github.com/tduo1404pty1802/vtit-backend-agent-harness.git
