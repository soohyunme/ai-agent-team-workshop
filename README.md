# AI Agent Hands-On Workshop

Beginner-friendly workshop: use a small AI team to draft a Hong Kong day trip, change your interests and instructions, and reuse the team.

- [English guide](https://soohyunme.github.io/ai-agent-team-workshop/)
- [한국어 가이드](https://soohyunme.github.io/ai-agent-team-workshop/ko.html)
- [Full English guide](https://soohyunme.github.io/ai-agent-team-workshop/all.html)
- [한국어 전체 보기](https://soohyunme.github.io/ai-agent-team-workshop/ko/all.html)
- [Download the Sim template](https://soohyunme.github.io/ai-agent-team-workshop/assets/templates/hong-kong-day-trip-team-starter-v0.1.json)

**Validation status: pre-release.** Live execution of the new travel template, beginner signup timing, PolyU access and class-scale usage remain to be tested. Publishing the guide does not verify the workflow.

## What participants do

1. Sign in to Sim and OpenRouter, and connect their own API key.
2. Import and run the prepared team: select activities → arrange a draft → check preferences.
3. Change interests and one checking instruction.
4. Run again, inspect the result and reopen the saved team.

No GitHub account, Git or local development setup is needed to read the website. The website contains instructions and a downloadable template; AI requests run through Sim and OpenRouter. This is not a live search or booking service.

## Maintaining the guide

The default guide is eight separate pages with previous/next navigation. Language switching keeps the same step. The full-guide pages reuse the same content for review and printing. Participant-facing instructions use direct actions and question-based checks; facilitation and validation notes should remain separate from those instructions.

The participant pages display the material's last-updated date, set in `docs/_config.yml` as `last_updated`. Update it when revising the published guide. Validation status is tracked above and is not implied by the update date.

Edit the English and Korean step text in `docs/_includes/steps/en/` and `docs/_includes/steps/ko/`. Titles, tasks, completion checks and URLs are in `docs/_data/steps.json`. The files `docs/index.md`, `docs/ko.md` and `docs/en/step-*.md` / `docs/ko/step-*.md` select each page; they do not duplicate the lesson content.

The template lives in `docs/assets/templates/`. Keep actual API keys out of all files; the template uses only `{{OPENROUTER_API_KEY}}`. The literal key placeholder is protected with Liquid raw tags in the step content so that it remains visible after the Pages build.

GitHub Pages publishes `main` → `/docs` using its built-in Jekyll build. No custom JavaScript, external fonts, analytics or local build dependencies are required. The small layout and stylesheet are in `docs/_layouts/` and `docs/assets/`.

Only participant-facing guides and the selected template are included. Private preparation notes, conversation screenshots and the event proposal are not part of this repository.
