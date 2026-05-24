# Agent Plugin Store

The project now includes a repo-local AI-agent plugin/store:

```text
agent-store/marketplace.json
plugins/vtit-backend-agent/
```

## Purpose

`docs/` is the canonical project documentation. `plugins/vtit-backend-agent/` is the agent-facing package that tells an AI agent how to work on the backend safely.

## Structure

```text
plugins/vtit-backend-agent/
  .codex-plugin/plugin.json      plugin manifest
  skills/vtit-backend/SKILL.md   skill entrypoint
  knowledge/                     condensed project contracts
  playbooks/                     task execution guides
  issue-packs/                   phase-based backend issue packs
  review-gates/                  PR review gates
  prompts/                       reusable agent prompts
```

## Rule

For implementation work, the agent reads:

1. `AGENTS.md`
2. `docs/README.md`
3. `plugins/vtit-backend-agent/skills/vtit-backend/SKILL.md`
4. relevant files in `knowledge/`, `playbooks/`, and `issue-packs/`

If the plugin and `docs/` conflict, stop and ask for human review.

