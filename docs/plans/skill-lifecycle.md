# Reviewed skill lifecycle

Skills use the DSH registry and native tool runtime. The optional Playbooks Source owns candidate bundles, evidence, publication and feedback. Learning owns observed experience. A separate Skill refinement Strategy extension decides when to inspect experience and propose a reusable skill or a revision. The default three-tier composition remains unchanged.

## Acceptance contract

- Inspect existing skills before proposing a change. New candidates and revisions remain inactive until reviewed; publishing a revision must check the exact original version.
- Produce a standard `SKILL.md` with optional scripts, references and tests. Validate names, paths, metadata and referenced resources. Keep each published resource directory tied to its content digest.
- Review and edit candidate files, inspect the version difference, execute explicitly selected checks through DSH's tool pipeline, and retain the actual results. Editing invalidates the previous validation.
- Publish, disable, re-enable and archive skills through the native Provider. Retain history and offer a reviewed restoration of an earlier version.
- Browse the native catalog and manage explicitly configured skill directories. Show provider, scope, enabled state and resource files clearly.
- Separate actual skill loading, execution results, model-reported use and explicit human feedback. Negative feedback remains visible until addressed by a reviewed revision; results flow back to Learning as attributed observations.
- Keep Source state private and communicate through public contracts and optional events. Strategy extensions own guidance and scheduling, not files or processes.
- Use shared Core SDK UI, semantic theme colors, keyboard access and responsive layouts.

## Verification

Use meaningful unit and integration tests for stale reads, scope isolation, proposal/publication boundaries, file traversal, invalidation, native execution and feedback attribution. Verify package and plugin artifacts. In the real DSH WebUI, use Flash to turn a reusable procedure into a skill with a working script, review and validate it, publish it, load it natively, record failure feedback, generate and publish a corrected version, and inspect retained history. Capture each capability, including light/dark and narrow layouts, then update the PR with reproducible evidence.
