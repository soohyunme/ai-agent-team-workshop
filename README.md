# AI Agent Hands-On Workshop

Beginner-friendly workshop: divide a shared goal into roles, build and connect three agents, review their results, and adapt the approach to your own work. Sim and System/User messages are implementation tools, not the learning goal.

- [English guide](https://soohyunme.github.io/ai-agent-team-workshop/)
- [한국어 가이드](https://soohyunme.github.io/ai-agent-team-workshop/ko.html)
- [Full English guide](https://soohyunme.github.io/ai-agent-team-workshop/all.html)
- [한국어 전체 보기](https://soohyunme.github.io/ai-agent-team-workshop/ko/all.html)
- [Download the Sim template](https://soohyunme.github.io/ai-agent-team-workshop/assets/templates/hotel-review-response-team-example-v1.0.json)

**Validation status: pre-release.** The new build-from-scratch path, live execution of the hotel example v1.0 example, beginner signup timing, PolyU access and class-scale usage remain to be tested. Publishing the guide does not verify the workflow.

## What participants do

1. Watch the facilitator demonstrate the completed hotel review response system.
2. Sign in to OpenRouter and Sim, connect a personal key, and create a new workflow.
3. Add a short review input; create and connect the three agents.
4. Define each role's job and required information, implement them through System/User messages, then run the team.
5. Give the guest communicator a new reply requirement and check how it uses the specialists' results. Optionally improve the output format.
6. Reopen the saved team and sketch a team for a personal task.

The hotel example v1.0 template is now the demonstration, reference and recovery asset, not the main participant path. Its prompts and inputs match the construction guide. See [the facilitator plan](facilitator-plan.md) for timing and rehearsal checks.

No GitHub account, Git or local development setup is needed to read the website. The website contains instructions and a downloadable template; AI requests run through Sim and OpenRouter. This is not a live search or booking service.

## Maintaining the guide

The default guide is eight separate pages with previous/next navigation. Language switching keeps the same step. The full-guide pages reuse the same content for review and printing. Participant-facing instructions use direct actions and question-based checks; facilitation and validation notes should remain separate from those instructions.

The participant pages display the material's last-updated date, set in `docs/_config.yml` as `last_updated`. Update it when revising the published guide. Validation status is tracked above and is not implied by the update date.

Edit the English and Korean step text in `docs/_includes/steps/en/` and `docs/_includes/steps/ko/`. Titles, tasks, completion checks and URLs are in `docs/_data/steps.json`. The files `docs/index.md`, `docs/ko.md` and `docs/en/step-*.md` / `docs/ko/step-*.md` select each page; they do not duplicate the lesson content.

The template lives in `docs/assets/templates/`. Keep actual API keys out of all files; the template uses only `{{OPENROUTER_API_KEY}}`. The literal key placeholder is protected with Liquid raw tags in the step content so that it remains visible after the Pages build.

GitHub Pages publishes `main` → `/docs` using its built-in Jekyll build. No external fonts, analytics or local build dependencies are required. The small layout and stylesheet are in `docs/_layouts/` and `docs/assets/`. A small script supports the optional copy button in step 4; manual selection and copying work without JavaScript.

Step 4 embeds a download fallback in `docs/_includes/template-copy.json`, wrapped in Liquid raw tags. Keep its JSON identical to `docs/assets/templates/hotel-review-response-team-example-v1.0.json` when updating the template. This embeds the contents in the guide rather than fetching the download URL again.

Only participant-facing guides and the selected template are included. Private preparation notes, conversation screenshots and the event proposal are not part of this repository.

## Current example

Hotel Review Response Team v1.0 uses one short Start input (`review`) and three roles: Review Analyst and Operations Advisor working independently from the same review, then Guest Reply Writer combining both results. No shared cards variable is required. All reviews are fictional; actions are internal proposals, and replies are unsent drafts for human review. Manual build prompts match this example. Actual Sim import and execution still require validation.

The earlier [travel team v0.4](docs/assets/templates/hong-kong-day-trip-team-starter-v0.4.json) remains an optional reference. Older travel versions are retained for existing links, not part of the main exercise.
