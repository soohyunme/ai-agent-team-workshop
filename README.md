# AI Agent Hands-On Workshop

Beginner-friendly workshop: watch a completed team, build three agents in a new workflow, write System/User prompts, connect their outputs, and reuse the team.

- [English guide](https://soohyunme.github.io/ai-agent-team-workshop/)
- [한국어 가이드](https://soohyunme.github.io/ai-agent-team-workshop/ko.html)
- [Full English guide](https://soohyunme.github.io/ai-agent-team-workshop/all.html)
- [한국어 전체 보기](https://soohyunme.github.io/ai-agent-team-workshop/ko/all.html)
- [Download the Sim template](https://soohyunme.github.io/ai-agent-team-workshop/assets/templates/hong-kong-day-trip-team-starter-v0.4.json)

**Validation status: pre-release.** The new build-from-scratch path, live execution of the v0.4 example, beginner signup timing, PolyU access and class-scale usage remain to be tested. Publishing the guide does not verify the workflow.

## What participants do

1. Watch the facilitator demonstrate the completed travel team.
2. Sign in to OpenRouter and Sim, connect a personal key, and create a new workflow.
3. Add short Start inputs and the shared cards; create and connect the three agents.
4. Enter each role's System/User prompts, predict the handoffs, then run the team.
5. Change one User request, check the result, and optionally change one System output rule.
6. Reopen the saved team and sketch a team for a personal task.

The v0.4 template is now the demonstration, reference and recovery asset, not the main participant path. Its prompts and shared cards match the construction guide. See [the facilitator plan](facilitator-plan.md) for timing and rehearsal checks.

No GitHub account, Git or local development setup is needed to read the website. The website contains instructions and a downloadable template; AI requests run through Sim and OpenRouter. This is not a live search or booking service.

## Maintaining the guide

The default guide is eight separate pages with previous/next navigation. Language switching keeps the same step. The full-guide pages reuse the same content for review and printing. Participant-facing instructions use direct actions and question-based checks; facilitation and validation notes should remain separate from those instructions.

The participant pages display the material's last-updated date, set in `docs/_config.yml` as `last_updated`. Update it when revising the published guide. Validation status is tracked above and is not implied by the update date.

Edit the English and Korean step text in `docs/_includes/steps/en/` and `docs/_includes/steps/ko/`. Titles, tasks, completion checks and URLs are in `docs/_data/steps.json`. The files `docs/index.md`, `docs/ko.md` and `docs/en/step-*.md` / `docs/ko/step-*.md` select each page; they do not duplicate the lesson content.

The template lives in `docs/assets/templates/`. Keep actual API keys out of all files; the template uses only `{{OPENROUTER_API_KEY}}`. The literal key placeholder is protected with Liquid raw tags in the step content so that it remains visible after the Pages build.

GitHub Pages publishes `main` → `/docs` using its built-in Jekyll build. No external fonts, analytics or local build dependencies are required. The small layout and stylesheet are in `docs/_layouts/` and `docs/assets/`. A small script supports the optional copy button in step 4; manual selection and copying work without JavaScript.

Step 4 embeds a download fallback in `docs/_includes/template-copy.json`, wrapped in Liquid raw tags. Keep its JSON identical to `docs/assets/templates/hong-kong-day-trip-team-starter-v0.4.json` when updating the template. This embeds the contents in the guide rather than fetching the download URL again.

Only participant-facing guides and the selected template are included. Private preparation notes, conversation screenshots and the event proposal are not part of this repository.

## Current template

Starter v0.4 uses short `interests`, `food` and `pace` inputs instead of a multiline travel request. Shared cards are stored once in the `cards` object variable and referenced as `<variable.cards>` by each specialist; Start has no long `places` field. It separates Sightseeing Planner, Food Planner and Trip Planner. Food Planner must use the sightseeing areas, and Trip Planner combines both outputs. Food cards are explicitly fictional teaching examples. v0.1, v0.2 and v0.3 are retained for existing links but are not the current exercise. Import v0.4 as a new workflow; it has not yet been verified by a live model run.
