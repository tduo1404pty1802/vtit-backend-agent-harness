#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const packageRoot = path.resolve(__dirname, "..");
const args = process.argv.slice(2);

function usage() {
  console.log(`VTIT Backend Agent Harness

Usage:
  vtit-harness init [target-dir] [--force]
  vtit-harness help

Examples:
  npx @duongchau/vtit-backend-agent-harness init
  npx @duongchau/vtit-backend-agent-harness init ./my-project
  npx @duongchau/vtit-backend-agent-harness init . --force
`);
}

function copyEntry(sourceRelativePath, targetRoot, options) {
  const source = path.join(packageRoot, sourceRelativePath);
  const target = path.join(targetRoot, sourceRelativePath);

  if (!fs.existsSync(source)) {
    throw new Error(`Missing package asset: ${sourceRelativePath}`);
  }

  if (fs.existsSync(target) && !options.force) {
    throw new Error(`Refusing to overwrite existing path: ${target}. Re-run with --force if intentional.`);
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, {
    recursive: true,
    filter: (src) => {
      const relative = path.relative(packageRoot, src).replaceAll(path.sep, "/");
      if (relative === "docs/discussion_about_the_project.md") return false;
      if (relative.startsWith("docs_other_projects_for _reference_only/")) return false;
      if (relative === "node_modules") return false;
      return true;
    }
  });
}

function init() {
  const force = args.includes("--force");
  const positional = args.filter((arg) => arg !== "init" && arg !== "--force");
  const targetRoot = path.resolve(process.cwd(), positional[0] || ".");

  fs.mkdirSync(targetRoot, { recursive: true });

  const entries = [
    "AGENTS.md",
    "docs",
    "agent-store",
    "plugins"
  ];

  for (const entry of entries) {
    copyEntry(entry, targetRoot, { force });
  }

  console.log(`VTIT backend agent harness installed into ${targetRoot}`);
  console.log("Start with docs/project/00-agent-start-here.md");
}

try {
  const command = args[0] || "help";
  if (command === "help" || command === "--help" || command === "-h") {
    usage();
  } else if (command === "init") {
    init();
  } else {
    console.error(`Unknown command: ${command}`);
    usage();
    process.exitCode = 1;
  }
} catch (error) {
  console.error(`vtit-harness: ${error.message}`);
  process.exitCode = 1;
}
