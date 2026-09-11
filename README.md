# AI Agent Team Workshop

Beginner-friendly workshop: use a small AI team to draft a Hong Kong day trip, change your interests and instructions, and reuse the team.

- [English guide](https://soohyunme.github.io/ai-agent-team-workshop/)
- [한국어 가이드](https://soohyunme.github.io/ai-agent-team-workshop/ko.html)
- [Download the Sim template](https://soohyunme.github.io/ai-agent-team-workshop/assets/templates/hong-kong-day-trip-team-starter-v0.1.json)

**Status: pilot draft.** Live execution of the new travel template, beginner signup timing, PolyU access and class-scale usage remain to be tested. Publishing the guide does not verify the workflow.

## What participants do

1. Sign in to Sim and OpenRouter, and connect their own API key.
2. Import and run the prepared team: select activities → arrange a draft → check preferences.
3. Change interests and one checking instruction.
4. Run again, inspect the result and reopen the saved team.

No GitHub account, Git or local development setup is needed to read the website. The website contains instructions and a downloadable template; AI requests run through Sim and OpenRouter. This is not a live search or booking service.

## Maintaining the guide

The published English and Korean sources are `docs/index.md` and `docs/ko.md`. Update both when changing the exercise. These are the source of truth for the public guide.

The template lives in `docs/assets/templates/`. Keep actual API keys out of all files; the template uses only `{{OPENROUTER_API_KEY}}`. The Markdown guides are wrapped in Liquid raw tags so that this literal placeholder remains visible after the Pages build.

GitHub Pages publishes `main` → `/docs` using its built-in Jekyll build. No custom JavaScript, external fonts, analytics or local build dependencies are required. The small layout and stylesheet are in `docs/_layouts/` and `docs/assets/`.

Only participant-facing guides and the selected template are included. Private preparation notes, conversation screenshots and the event proposal are not part of this repository.
