# Checklist for consistency

- All Repos should have the following sections in their documentation in the /docs folder:
    - Getting Started - getting_started.md
    - Architecture - architecture.md (mermaid diagrams)
    - Configuration - configuration.md
    - Testing - testing.md
    - Deployment - deployment.md
    - Badges and Graphs - badges_and_graphs.md (code coverage, build status, etc.)

Suggested prompt:

```
You are a senior technical documentation reviewer.

Goal:
Audit this repository for documentation consistency and completeness, and create any missing required documentation.

Scope:
- Review the full repository docs and README content.
- Focus especially on whether these sections exist and are useful:
  1. Getting Started - getting_started.md
  2. Architecture - architecture.md
    - Check for Mermaid diagrams illustrating system architecture and workflows.
  3. Configuration - configuration.md
  4. Testing - testing.md
  5. Deployment - deployment.md
  6. Badges and Graphs - badges_and_graphs.md
    - code coverage, build status, etc.

Instructions:
1. Find where each required section currently exists (or confirm it is missing).
2. Evaluate each section for quality:
   - Is it clear?
   - Is it actionable?
   - Is it up to date?
   - Is it complete enough for a new contributor?
3. Identify gaps, inconsistencies, or duplication across files.
4. Provide prioritized findings:
   - High: blocks onboarding/usage
   - Medium: causes confusion or missing context
   - Low: polish improvements
5. For each missing required document, create the file under /docs with practical starter content.
  - Required files to create when missing:
    - /docs/getting_started.md
    - /docs/architecture.md
    - /docs/configuration.md
    - /docs/testing.md
    - /docs/deployment.md
    - /docs/badges_and_graphs.md
6. If /docs/architecture.md is missing or lacks diagrams, include at least one Mermaid diagram for architecture and one for workflow.
7. If /docs/badges_and_graphs.md is missing or incomplete, include badge markdown placeholders for build status and code coverage.
8. For existing but weak sections, provide improved replacement content blocks.
9. Keep content implementation-ready: include commands, examples, and clear next actions.

Output format:
- Summary (3 to 6 bullets)
- Compliance Table:
  - Requirement
  - Status (Present, Partial, Missing)
  - File location(s)
  - Notes
- Prioritized Findings
- File Actions:
  - Create: list files that must be created
  - Update: list files that should be improved
  - No Change: list files already sufficient
- Proposed Content By File (ready-to-apply markdown per file)
- Suggested Next Steps (numbered, max 5)

Constraints:
- Only create files from the required list above, and only under /docs.
- Do not create unrelated files.
- Be explicit about assumptions.
- Prefer practical, minimal changes that improve consistency quickly.
```