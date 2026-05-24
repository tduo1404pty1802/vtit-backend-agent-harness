# Self-Contained Readiness Check

Use this before handing the documentation package to another AI agent.

## Must Pass

- [ ] `docs/discussion_about_the_project.md` can be deleted without losing product requirements.
- [ ] `docs/project/00-agent-start-here.md` explains what the project is.
- [ ] `docs/project/01-product-requirements.md` lists core features.
- [ ] `docs/project/05-requirement-traceability.md` maps original requirements to canonical docs.
- [ ] Every phase has a `docs/phases/phase-*.md` file.
- [ ] Every phase has a `docs/progress/phase-*-progress.json` file.
- [ ] Plugin skill points to repo-root docs using correct relative paths.
- [ ] Prompt templates tell the agent to read project docs and current phase docs.
- [ ] `AGENTS.md` contains hard rules that prevent architecture drift.
- [ ] JSON files validate.
- [ ] Plugin manifest validates.

## Red Flags

- Agent only sees rules but not product features.
- Agent sees phase names but no task map.
- Agent sees task map but no gates.
- Agent sees API work but no permission rules.
- Agent sees case mutation but no audit/history rule.
- Agent sees assignment/lock work but no concurrency tests.

## Handoff Sentence

Use this when starting a new agent:

```text
Read AGENTS.md, docs/project/00-agent-start-here.md, docs/README.md, the current docs/phases/phase-*.md, and the matching docs/progress/phase-*-progress.json. Implement one C-A-R task only.
```

