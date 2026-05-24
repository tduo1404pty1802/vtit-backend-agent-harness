# VTIT Backend Agent Plugin

This repo-local plugin is the AI-agent store for the VTIT backend project. It packages the project knowledge, implementation playbooks, issue packs, prompts, and review gates that an AI agent must follow.

## Layout

```text
plugins/vtit-backend-agent/
  .codex-plugin/plugin.json
  skills/vtit-backend/SKILL.md
  knowledge/
  playbooks/
  issue-packs/
  review-gates/
  prompts/
```

## Source Of Truth

- `AGENTS.md` is the root rule file.
- `docs/project/` contains the product specification.
- `docs/phases/` contains agent-executable phase harnesses.
- `docs/progress/` contains progress trackers.
- `docs/` also contains architecture, domain, security, and review documentation.
- This plugin converts those docs into an agent-facing execution harness.

If plugin content and `docs/` conflict, stop and ask the project owner to reconcile.
