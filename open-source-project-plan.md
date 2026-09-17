# Open-Source Project Plan

Last updated: 2026-09-17

## Purpose

Turn this repository from a one-time event handout into a reusable, beginner-friendly open-source workshop for learning how AI agents divide roles, pass information, and combine results.

The workshop should remain focused on the transferable ideas behind multi-agent systems. Sim and OpenRouter are tools used for the exercise, not the subject of the project.

## Working principles

- Make the project's value understandable within the first few seconds of opening the repository.
- Write for participants with no development or API experience.
- Let participants build the basic workflow before asking them to improve it.
- Keep the main learning transferable to other tools and domains.
- Do not expose API keys, account details, personal information, or private hotel data.
- Clearly separate tested instructions from ideas that still require validation.
- Prefer a small, maintainable set of materials over extra features.

## Status

- [x] Participant guide in English and Korean
- [x] Hotel review response workflow template
- [x] Facilitator scripts in English and Korean
- [x] Presentation outline
- [x] Basic GitHub Pages site
- [ ] Open-source landing-page README
- [ ] README workflow visuals
- [ ] Open-source contribution and license files
- [ ] GitHub repository metadata and social preview
- [ ] Final rehearsal and release

## Milestones

| Phase | Status | Main output |
| --- | --- | --- |
| 1. Workshop content | In progress | Tested participant guide, template, slides, and script |
| 2. README and visuals | Not started | Clear public landing page and workflow images |
| 3. Open-source basics | Not started | License and contribution guide |
| 4. Repository setup | Not started | Description, topics, website, and social preview |
| 5. Validation and release | Not started | Rehearsed and tagged workshop release |
| 6. Post-event update | Not started | Lessons learned, approved photos, and follow-up improvements |

## 1. Workshop content

### Participant experience

- [x] Explain agents through role division, information transfer, and result integration.
- [x] Use a hotel-review example that fits the event audience.
- [x] Separate building the basic workflow from improving its result.
- [x] Include a short prompt-editing exercise.
- [x] Explain that human know-how can be organized into role-specific instructions, examples, checklists, and references.
- [ ] Run the complete workshop once from a new or clean participant account.
- [ ] Record the actual time required for each step.
- [ ] Confirm where beginners are most likely to become blocked.
- [ ] Adjust the 90-minute schedule after the rehearsal.

### External validation

- [x] Confirm that GitHub Pages, Sim, and OpenRouter are reachable in Hong Kong.
- [ ] Confirm access on the PolyU campus Wi-Fi.
- [ ] Ask a nondeveloper reviewer to follow the full guide without verbal help.
- [ ] Incorporate reviewer feedback into the guide and facilitator script.

## 2. README and visuals

### Target README structure

1. Project title and one-sentence description
2. Primary links: Start Workshop, 한국어, Download Template, Facilitator Kit
3. Workflow overview image
4. What participants will build and learn
5. Build first, then improve
6. From human know-how to role-specific agents
7. Workshop and facilitator materials
8. Apply the method to another task
9. Contributing and license

### README tasks

- [ ] Replace the maintenance-oriented opening with a concise project introduction.
- [ ] Add a short “What you will build” section.
- [ ] Add direct links to the English guide, Korean guide, template, scripts, and presentation outline.
- [ ] Explain that Sim is one implementation tool, not the only way to build agent teams.
- [ ] Move detailed maintenance instructions to `docs/MAINTAINING.md` if they interrupt the landing-page flow.
- [ ] Add a brief, optional request to star the repository after showing the project's value.
- [ ] Check the README on both desktop and mobile.

### Visual assets

- [ ] Create `docs/assets/readme/workflow-overview.svg`.
  - Show: Start review → Review Analyst Agent and Operations Advisor Agent → Guest Reply Writer Agent → draft reply.
  - Use labels that make the agent roles and information flow obvious without additional explanation.
- [ ] Capture `docs/assets/readme/sim-workflow.png` from the final Sim workflow.
  - Crop unnecessary interface areas.
  - Remove API keys, account details, and personal information.
- [ ] Create `docs/assets/readme/social-preview.png` at 1280 × 640.
- [ ] Add useful alt text for every image.
- [ ] Confirm that text remains readable at the width used in the README.

Static images are the initial target. An animated demonstration can be considered after the core materials are complete, but it is not required for the first release.

## 3. Open-source basics

- [ ] Choose and add a license.
  - Candidate: MIT for code and templates.
  - Confirm whether workshop text and slides need a separate content license before deciding.
- [ ] Add `CONTRIBUTING.md` with a short process for reporting errors and proposing improvements.
- [ ] Add a simple issue template only if public issue reporting will be actively maintained.
- [ ] Review every tracked file for secrets, personal information, and event-only notes.
- [ ] Ensure example hotel data is fictional or safe to publish.

## 4. GitHub repository setup

These settings are completed in the GitHub repository interface.

- [ ] Set the repository description:
  - `Beginner-friendly workshop for building and improving a multi-agent AI team without coding.`
- [ ] Set the website to the GitHub Pages workshop URL.
- [ ] Add relevant topics:
  - `ai-agents`
  - `multi-agent-systems`
  - `workshop`
  - `no-code`
  - `hospitality-ai`
  - `openrouter`
  - `sim-ai`
  - `education`
- [ ] Upload the social preview image.
- [ ] Confirm that GitHub Pages is built from the intended branch and directory.
- [ ] Decide whether Issues or Discussions will be used after the event.

## 5. Workshop connection and repository discovery

- [ ] Add the repository URL and QR code to the final presentation slide.
- [ ] Add a repository link near the end of the participant guide.
- [ ] Invite participants to star the repository only after they have completed or benefited from the exercise.
- [ ] Use this optional closing line:

> If this workshop was useful, star the repository so you can find the materials again and follow future updates.

- [ ] Avoid presenting the star request as a requirement for participation.

## 6. Validation and release

### Final checks

- [ ] Complete the workflow using the published guide from start to finish.
- [ ] Test all links and downloads.
- [ ] Test the fallback copy-and-paste template method.
- [ ] Confirm that no screenshot exposes a secret or personal account detail.
- [ ] Check English and Korean pages for matching instructions.
- [ ] Confirm Pages deployment after the final content change.
- [ ] Verify the README and guide on a phone-sized screen.
- [ ] Run a rehearsal with the presentation, script, and live exercise together.

### Release

- [ ] Create a release only after the rehearsal is complete.
- [ ] Suggested release name: `v1.0 — PolyU Workshop Edition`.
- [ ] Include the guide links, template, known limitations, and workshop requirements in the release notes.

## 7. After the event

- [ ] Collect recurring participant questions and failure points.
- [ ] Convert useful corrections into issues or checklist items.
- [ ] Add event photos only when publication permission is clear.
- [ ] Add a short event outcome section without making unverified impact claims.
- [ ] Update the workshop for reuse in another domain or event.
- [ ] Publish a follow-up release when the changes are meaningful.

## Immediate next actions

Complete these in order:

1. Capture a clean screenshot of the final Sim workflow.
2. Create the simplified workflow overview graphic.
3. Redesign the top half of `README.md` around the workshop outcome and primary links.
4. Move maintenance details out of the README if needed.
5. Decide the license and add the contribution guide.
6. Complete the GitHub metadata and social preview.
7. Rehearse, validate, and publish the first release.

## Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-17 | Keep the main README in English with clear Korean entry links. | The event is conducted in English while the Korean materials support reuse and preparation. |
| 2026-09-17 | Use the hotel review response team as the primary workshop example. | The roles are distinct and the scenario is intuitive for hospitality students and practitioners. |
| 2026-09-17 | Teach the method rather than the Sim product. | Role design, information transfer, and result review apply across tools. |
| 2026-09-17 | Use a static workflow overview and a real Sim screenshot first. | Together they explain the concept clearly while keeping maintenance effort low. |
| 2026-09-17 | Treat starring the repository as an optional follow-up action. | The repository should demonstrate value before asking for engagement. |

## Definition of done for the first public release

The first release is ready when a beginner can open the repository, understand what they will build, reach the workshop guide, complete the basic workflow, and find the facilitator materials without private assistance. All public links must work, no secrets may be exposed, and the full exercise must have been rehearsed within the available session time.
