# UI/UX Cleanup Tracker

> **Purpose**: Track UI/UX improvements for the Superset chat experience. Agents should check this file before starting work to avoid duplication, and update the **Status** and **Agent Log** when claiming or completing items.

---

## How to Use

### For humans
- Add new items to the TODO list below.
- Review agent progress in the log entries.

### For agents
1. **Before starting work**, read this file and check if someone else is already working on the item.
2. **Claim an item** by changing its status to `🔵 In Progress` and adding a log entry with your session ID / timestamp.
3. **When done**, change status to `✅ Done` and add a final log entry with PR link or commit hash.
4. **If blocked**, change status to `🟡 Blocked` and explain why in the log.

---

## TODO List

### UXC-001: Eliminate extra spacing from hidden/empty messages in chat
- **Status**: 🔴 Open
- **Priority**: High
- **Area**: `packages/chat`, `apps/web` (chat UI)
- **Description**: Hidden messages (e.g. empty assistant turns, tool-call-only messages) are rendered into the chat wrapped in `<div>` elements that still participate in flex/gap layout. This creates large visible gaps between tool calls and other content. The fix should either suppress rendering of truly empty messages or collapse their container so they contribute zero height/gap.
- **Agent Log**:
  <!-- Agents: append entries here -->

---

### UXC-002: Redesign the "Recall" tool call presentation
- **Status**: 🔴 Open
- **Priority**: Medium
- **Area**: `packages/chat` (tool call rendering)
- **Description**: The `recall` tool call (memory/conversation-history lookup) deserves a differentiated visual treatment:
  - Use a **brain icon** (or similar memory-evoking icon) instead of the generic tool icon.
  - Improve the **tool header** to include richer context (e.g. what mode was used, what query was searched).
  - Format the **tool call body** content better — the raw params and results are hard to scan today.
  - Goal: make it immediately clear at a glance that the agent is "remembering" something.
- **Agent Log**:
  <!-- Agents: append entries here -->

---

### UXC-003: Preserve approved/declined plans in chat history
- **Status**: 🔴 Open
- **Priority**: High
- **Area**: `packages/chat` (plan card component)
- **Description**: When a plan is presented to the user via `submit_plan`, it renders as a large card in the chat. Once the user approves (or declines), the entire plan card disappears from the chat and cannot be reviewed later. The plan content should be **preserved in the chat history** after the user acts on it — collapsed or summarized is fine, but it must remain accessible/expandable.
- **Agent Log**:
  <!-- Agents: append entries here -->

---

### UXC-004: Replace inline plan card controls with Superset question UI
- **Status**: 🔴 Open
- **Priority**: High
- **Area**: `packages/chat` (plan card component, question UI)
- **Description**: Currently the plan card contains its own embedded feedback prompt box and approve/decline buttons. Instead:
  1. **Render the plan content** directly in the chat UI (not as a self-contained card with its own controls).
  2. **Use the Superset question UI** (`ask_user`-style overlay) to present the user with three options:
     - ✅ **Approve** the plan
     - ❌ **Decline** the plan
     - 💬 **Other** — opens a text input for the user to provide feedback on the plan
  3. The user can also dismiss via the `×` button (skip/ignore).
  - This aligns plan approval with the existing question interaction pattern used elsewhere in the app.
- **Agent Log**:
  <!-- Agents: append entries here -->

---

## Completed

_None yet._
