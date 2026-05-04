# UI/UX Improvement Todos

A shared backlog for UI/UX issues in Superset. Items are added by humans and worked on by agents/subagents. Use this doc to **claim work, report progress, and avoid duplicate effort**.

## How to use this doc

### For humans adding items
- Add new items to the **Backlog** section using the template below.
- Each item gets a stable `ID` (e.g. `UX-001`) — never reuse IDs, never renumber.
- Keep the description focused on the *user-visible problem*. Implementation notes go in the agent updates section.

### For agents picking up work
1. **Before starting**, read the item's full entry and the **Agent updates** sub-section to see if anyone is already on it.
2. Move the item from `Backlog` → `In Progress`. Add an entry under **Agent updates** with:
   - Date (ISO), agent identifier (model + short purpose), branch name if applicable
   - What you're attempting and your plan in 1–3 lines
3. As you work, append progress notes (don't overwrite). Keep them terse.
4. When done, move the item to `Done` with a final note linking the PR/commit.
5. If you abandon the work, leave a note saying so and move it back to `Backlog` so the next agent has full context.

### Item template

```
### UX-XXX: <short title>
**Status:** Backlog | In Progress | Blocked | Done
**Reported:** YYYY-MM-DD
**Area:** <e.g. chat / plan-approval / tool-rendering>

**Problem**
<user-visible description>

**Acceptance**
- <observable outcome 1>
- <observable outcome 2>

**Agent updates**
- _none yet_
```

---

## Backlog

### UX-001: Hidden messages create excess vertical gaps in chat
**Status:** Backlog
**Reported:** 2026-05-04
**Area:** chat / message-rendering

**Problem**
Hidden messages still get rendered into the Superset chat wrapped in divs that participate in the gap-spacing layout. The empty wrappers force flex/grid gaps and produce large visible gaps between tool calls and other messages.

**Acceptance**
- Hidden messages do not contribute to vertical spacing in the chat stream.
- Spacing between consecutive visible tool calls/messages looks tight and consistent regardless of how many hidden messages sit between them.
- Fix is at the layout level (don't render the wrapper, or render it with `display: contents` / no gap participation) — not just `visibility: hidden`.

**Agent updates**
- _none yet_

---

### UX-002: Style the `recall` tool call to feel like memory
**Status:** Backlog
**Reported:** 2026-05-04
**Area:** chat / tool-rendering

**Problem**
The `recall` tool call currently uses generic tool-call styling. It's a memory/recall operation and deserves a distinct, elevated presentation.

**Acceptance**
- Custom icon evoking memory (brain, neurons, or similar) — not the default tool icon.
- Tool header surfaces useful context at a glance (e.g. mode: messages/threads/search, query if present, result count).
- The body content is formatted for readability — not a raw JSON dump. Threads/messages/search results each get a sensible compact layout.
- Visually feels like a first-class capability rather than a generic tool invocation.

**Agent updates**
- _none yet_

---

### UX-003: Approved plans disappear from chat history
**Status:** Backlog
**Reported:** 2026-05-04
**Area:** chat / plan-approval

**Problem**
When a plan is presented to the user it shows as a large card. On approval the whole plan card disappears and the user can no longer scroll back to see what was approved. Plans should be preserved in the chat transcript like any other message.

**Acceptance**
- After approval (or decline), the plan remains visible in the chat history.
- The post-decision rendering can be more compact than the pre-decision card, but the full plan content must remain accessible (expandable if collapsed).
- Approval state is visible on the preserved card (e.g. "Approved" badge with timestamp).

**Agent updates**
- _none yet_

---

### UX-004: Use Superset question UI for plan approval instead of in-card buttons
**Status:** Backlog
**Reported:** 2026-05-04
**Area:** chat / plan-approval

**Problem**
The plan card currently embeds its own feedback textbox + Approve/Decline buttons. We already have a dedicated Superset question UI (the `ask_user`-style overlay) for prompting decisions, and it should be used here too for consistency.

**Acceptance**
- When a plan is presented, the plan content renders as a normal message in the chat (see UX-003).
- The approve/decline prompt is delivered via the standard Superset question UI, not a textbox embedded in the card.
- Options shown: **Approve**, **Decline**, **Other** (free-text feedback on the plan).
- The question can be skipped via the X button, same as other Superset questions.
- The in-card feedback textbox + Approve/Decline buttons are removed.

**Agent updates**
- _none yet_

---

## In Progress

_none_

## Blocked

_none_

## Done

_none_
