---
layout: default
lang: en
title: "Hong Kong Day Trip · AI Team Workshop"
---
{% raw %}
# Draft a Hong Kong day trip with a small AI team

Draft for testing • 12 September 2026 • Travel template v0.1 • Not yet tested live

Open a prepared team, change your preferences and one instruction, then learn to use it again. No programming is needed. You need a laptop, internet and access to your email. Use existing accounts if you have them.

<h2 id="step-1">1. See what the team will do</h2>

| Job | Name on screen | Result |
| --- | --- | --- |
| Recommend activities | Activity Selector | Activities matched to your interests |
| Arrange the day | Day Planner | A suggested visit order with a meal or rest break |
| Check and revise | Plan Reviewer | A draft checked against your request |

The three AI helpers pass answers in a fixed order. A **template** is a prepared team you can copy and change.

This is a small exercise, not a live travel service. It uses supplied activity cards. It does not search, book, verify routes or confirm opening hours, prices or accessibility. Check those details before actually traveling.

<h2 id="step-2">2. Understand the two websites</h2>

| Website | Why you need it |
| --- | --- |
| Sim | The page where you can see the team, change its instructions and run it |
| OpenRouter | The service through which the team gets AI answers |

You will create an account on each website. Keep this guide open in one browser tab and use other tabs for the websites.

To connect them, OpenRouter gives you a private code called an **API key**. Think of it as permission for Sim to request AI answers using your account. It is not your login password. Keep it private and put it only in the settings described below.

The prepared example uses a free AI option. Services may limit use. If payment or an upgrade is required to continue, pause and tell the facilitator; you do not need to purchase anything to test this guide.

<h2 id="step-3">3. Get your connection code from OpenRouter</h2>

1. Open [OpenRouter](https://openrouter.ai/). Choose the signup option, or sign in if you already have an account.
2. Follow the onscreen steps. If email verification is requested, open your inbox, complete the verification and return to OpenRouter. Check spam/junk if the email is missing.
3. Once signed in, open [the API Keys page](https://openrouter.ai/settings/keys).
4. Choose the option to create a new key. Give it the name `polyu-pilot` so you can recognize it.
5. Create the key and use its copy button. The key is the long code, not the name `polyu-pilot`.
6. Keep this page open while you connect Sim in the next section. If you need to keep the key for later, store it privately, such as in a password manager.

**Check before continuing:** You have copied your own long key. Do not paste it into a message to the facilitator, the team instructions, or a screenshot.

<h2 id="step-4">4. Open Sim and connect the two websites</h2>

Sim calls your working area a **workspace**. This is where your team will be saved.

1. Open [Sim](https://www.sim.ai/) in another tab.
2. Sign up or sign in, completing email verification if requested.
3. Open your workspace settings, labeled **Settings**, then **Secrets**. Secrets is the place for private connection codes.
4. In the Workspace section, enter these two values in an empty row:

| Field | What to enter |
| --- | --- |
| Key / Name | `OPENROUTER_API_KEY` — copy this exact name |
| Value | Paste the long key you copied from OpenRouter |

5. Click **Save**. The value may be hidden after saving; that is expected.
6. Return to the main Sim screen.

The name must match because the prepared team will look for it. The brackets `{{OPENROUTER_API_KEY}}` in the example mean “use the saved key”; they are not the actual key. [Sim's settings reference](https://docs.sim.ai/platform/credentials)

**Check before continuing:** The saved key name is visible. If you cannot find Settings or Secrets, record that point and ask for help instead of creating a key under “Sim API keys”; that is a different feature.

<h2 id="step-5">5. Open your copy of the prepared team</h2>

A **workflow** is Sim's name for a saved sequence of tasks. We will load a file that already contains the sequence, connections and AI instructions.

1. Save [the prepared team file](assets/templates/hong-kong-day-trip-team-starter-v0.1.json) to your laptop, or download the JSON attachment sent with this guide. **JSON** is the file type; you do not need to read or edit its contents.
2. If the link opens a page of text, use the download option to save the original file ending in `.json`. Do not copy the text into a new Sim block.
3. In Sim's left sidebar, find the **Workflows** heading.
4. Open the `···` menu beside that heading and choose **Import**, meaning “load a saved file”.
5. Select `hong-kong-day-trip-team-starter-v0.1.json` from your downloads.
6. Open the newly added **Hong Kong Day Trip Team - Starter v0.1**.

**Check before continuing:** Four connected boxes are visible. Sim calls these boxes **blocks**.

| Box | Meaning |
| --- | --- |
| Start | Holds your travel request and activity cards |
| Activity Selector | Selects activities for your interests |
| Day Planner | Arranges a suggested visit order |
| Plan Reviewer | Checks your preferences and revises the draft |

The file already has the AI selection and connections set up. A **model** is the AI that generates an answer. You do not need to choose one for this exercise.

<h2 id="step-6">6. Read the request and run the team</h2>

1. Click **Start** and open **Editor**.
2. Find **trip → Value**, the travel request. It starts with harbour views, photography and parks at a relaxed pace.
3. Find **places → Value**, the supplied activity cards. Leave both fields unchanged for the first run.
4. Click **Run** at the top right. It uses these saved values; do not wait for another input window.
5. Wait for completion without repeatedly clicking Run.
6. Open **Logs** at the bottom, select the newest run and read **Plan Reviewer → content**. Content is the AI's answer.

Check: you can read a draft using the supplied activities. Note any invented factual details. An AI review does not guarantee accuracy.

<h2 id="step-7">7. See how answers are passed along</h2>

Read Activity Selector → Day Planner → Plan Reviewer in the same run. Follow one activity from the recommendation to the final draft.

Open **Day Planner → Editor → Messages**.

| Field | Meaning |
| --- | --- |
| System | This AI's role, behavior and output rules |
| User | The current request and material to work with |

These written instructions are called **prompts**. They can be ordinary sentences.

The marker `<activityselector.content>` is where the earlier AI's answer will appear when Sim runs the team.

| Marker | What it brings in |
| --- | --- |
| `<start.trip>` | Your travel request |
| `<start.places>` | Supplied activity cards |
| `<activityselector.content>` | Recommended activities |
| `<dayplanner.content>` | Draft itinerary |

Do not change these markers or the block names in the basic exercise. Arrows set the run order; references in messages specify which results are used.

<h2 id="step-8">8. Make the team fit you</h2>

### A. Change your interests

Replace **Start → trip → Value** with the example below, or write your own interests. Leave **places** unchanged.

```text
Plan a relaxed one-day visit to Hong Kong using only the supplied activity cards.
Interests: art and harbour views.
Pace: relaxed.
Return a draft, not a confirmed travel schedule.
```

### B. Add one checking instruction

Open **Plan Reviewer → Editor → Messages → System** and **append** the following to the existing text. Do not replace the whole message or change User.

```text
Keep at most two sightseeing activities and include at least one rest break. Remove extra sightseeing activities from the draft if needed. Explain briefly what you changed, or say that the draft already met this rule.
```

This is a rule you choose, not a newly discovered travel fact.

Check: you can distinguish changing the current travel request from changing the reviewer's behavior.

<h2 id="step-9">9. Run again and check your choices</h2>

1. Click outside the edited field and complete any visible save action.
2. Click **Run** again.
3. Under **Logs**, select the new run by its time and read **Plan Reviewer → content**.

Check that the draft:

- matches your interests;
- has at most two sightseeing activities and at least one rest break;
- uses only supplied activities and does not invent times or prices;
- explains the change or says the draft already met the rule.

If the first draft already met your rule, a large change is not required. A full rerun can also change earlier answers, so this is not a controlled experiment. Mark remaining problems and ask for help.

Early finishers can change another preference or rule. For a different destination, replace and verify the activity cards as well. The basic task is to run a team that reflects your own choice.

<h2 id="step-10">10. Keep the team for later</h2>

1. Return to another workflow in the left sidebar, then reopen your changed team. Check that your edits remain.
2. After completing any visible save action, sign out and back in. Open the same team and check that you can run it again.
3. To keep a file copy, right-click the team's name in the left sidebar and choose **Export**, meaning “save this team's setup to a file”. [Sim's import/export reference](https://docs.sim.ai/quick-reference)

Next time, open your saved team, change Start's trip text and click Run. The file stores the team's setup, not free AI usage or your actual API key. Check an exported file before sharing it if you have manually entered a key anywhere.

<h2 id="help">If you get stuck</h2>

| What you see | What to do next |
| --- | --- |
| No verification email | Check spam/junk and confirm the email address |
| Cannot find a menu or result | Note the section number and ask the facilitator to locate it with you |
| Missing key / authentication error | Check that the key was saved as `OPENROUTER_API_KEY` in the workspace containing this team |
| `429 Provider returned error` | Stop repeated runs and show the error to the facilitator; it may be a usage or availability limit |
| A payment or upgrade screen | Pause and report it; do not purchase access for this test |
| AI says the material is missing | Check the saved trip and places Values in Start; ask for help with the references |
| The answer looks unchanged | Select the newest run under Logs and check its time |
| The result changes very little | Check the newest run and whether your interests and added rule are satisfied |

Show the step and error, not your private key.

<h2 id="timing">For the professor: help us measure the draft</h2>

The workshop is planned for **13:00–14:30**, with signup included. Please try the guide on the PolyU network and record approximate minutes below. There is no target time to meet. If you stop, tell us where and why.

Include loading, email and AI waiting time. Mark an existing-account signup as “skipped”, not “0 minutes”. Unrelated breaks can be excluded. The live workshop also needs time for explanations and helping a whole class.

| Stage | Minutes | Waiting / help needed / where you stopped |
| --- | --- | --- |
| Read about the team and websites | | |
| OpenRouter signup and key creation | | |
| Sim signup and key registration | | |
| Download and open the prepared team | | |
| First run and following the three answers | | |
| Change interests and the checking instruction | | |
| Run again and check your choices | | |
| Reopen; optionally export a file copy | | |
| Total | | |

Please also tell us which steps or words were unclear, whether pages worked at PolyU, and whether the changed team was something you could use again.
{% endraw %}
