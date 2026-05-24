# NPM Package Distribution Plan

This document records the pnpm/npm packaging setup. Do not publish until the owner logs in to npm and approves the package name, license, and registry.

## Goal

Package this VTIT AI-agent documentation/harness so another project can install it with npm/pnpm and copy or reference the docs/plugin store.

## Recommended Package Shape

```text
package.json
README.md
LICENSE
AGENTS.md
docs/
agent-store/
plugins/vtit-backend-agent/
bin/
  vtit-harness.js
```

## Package Name Options

For public npm registry:

```text
@duongchau/vtit-backend-agent-harness
@duongchau/vtit-agent-docs
```

For GitHub Packages, the package must be scoped to the GitHub owner/organization:

```text
@duongchau/vtit-backend-agent-harness
```

## `package.json` Fields To Include

```json
{
  "name": "@duongchau/vtit-backend-agent-harness",
  "version": "0.1.0",
  "description": "AI-agent harness and documentation for the VTIT Spring Boot backend project.",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tduo1404pty1802/vtit-backend-agent-harness.git"
  },
  "files": [
    "AGENTS.md",
    "docs/README.md",
    "docs/[0-9][0-9]-*.md",
    "docs/adr/**",
    "docs/harness/**",
    "docs/project/**",
    "docs/phases/**",
    "docs/progress/**",
    "docs/publishing/**",
    "agent-store/**",
    "plugins/**",
    "bin/**",
    "README.md",
    "LICENSE"
  ],
  "bin": {
    "vtit-harness": "bin/vtit-harness.js"
  }
}
```

## Why `files` Matters

Use `files` to publish only the harness and avoid accidentally packaging reference docs, local IDE files, secrets, or generated build outputs.

## Install Experience Options

### Option A - Install As Dependency

```bash
npm install @duongchau/vtit-backend-agent-harness
```

Then users copy docs from `node_modules`.

pnpm equivalent:

```bash
pnpm add @duongchau/vtit-backend-agent-harness
```

### Option B - CLI Copy Command

```bash
npx @duongchau/vtit-backend-agent-harness init
```

pnpm equivalent:

```bash
pnpm dlx @duongchau/vtit-backend-agent-harness init
```

The CLI copies `AGENTS.md`, `docs/`, `agent-store/`, and `plugins/` into the target project.

Option B is more professional, but it requires a small Node CLI and careful overwrite rules.

## Publish Checklist

- [x] Decide initial package name: `@duongchau/vtit-backend-agent-harness`.
- [x] Add `LICENSE`.
- [x] Add root `README.md` for npm users.
- [x] Add `package.json`.
- [x] Add `bin/vtit-harness.js` CLI.
- [x] Exclude `docs/discussion_about_the_project.md` from package contents.
- [x] Exclude `docs_other_projects_for _reference_only/` from package contents.
- [x] Run `pnpm pack --dry-run`.
- [x] Test local install from packed tarball.
- [ ] Decide public npm registry vs GitHub Packages.
- [ ] Confirm npm account owns or can publish under scope `@duongchau`.
- [ ] Login with `npm login` or `pnpm login`.
- [ ] Publish scoped public package with `pnpm publish --access public` if using npmjs.com.

## Sources

- npm docs, creating and publishing scoped public packages: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/
- npm docs, package.json `files`, `bin`, `repository`: https://docs.npmjs.com/cli/v10/configuring-npm/package-json/
- GitHub Docs, working with npm registry: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
