# Unified Chat Interface Guide

## Overview

GrowthHub's unified chat interface consolidates all AI interactions into a single, streamlined workspace. This replaces the previous autopilot and sandbox modes with one intuitive surface for all your work.

---

## Interface Layout

### Main Components

```
┌─────────────────────────────────────────────────────┐
│  [☰] GrowthHub                    [User] [Settings] │ Header
├──────────┬──────────────────────────────────────────┤
│          │                                          │
│ Projects │  How Can I Help?                         │
│  Inbox   │                                          │
│ Content  │  [Type your message...]                  │
│  Copy    │                                          │
│ Recent   │  [+] [🧠] [Model ▼] [📎] [Send]         │ Toolbar
│          │                                          │
│  Chats   │  Recent ─────────────────────────────    │
│  ────    │  ○ Marketing campaign                    │
│ Recent   │  ○ Blog post ideas                       │
│ Chat 1   │  ○ Code review                           │
│ Chat 2   │                                          │
│          │  View All →                              │
└──────────┴──────────────────────────────────────────┘
 Sidebar     Main Chat Area
```

---

## Welcome Screen

### "How Can I Help?"

When you start a new chat or have no active conversation, you'll see:

**Welcome Title**
- Large, friendly "How Can I Help?" header
- Clean, inviting design
- Centered on the screen

**Recent Activity**
- Recent Projects section (if you have projects)
- My Chats section (showing recent conversations)
- Quick access to continue work
- View All link for full history

**Input Area**
- Large text input: "Type your message..."
- Always visible at the bottom
- Toolbar with AI capabilities
- Ready to start immediately

---

## Chat Toolbar

### Toolbar Buttons

Located at the bottom of the chat input:

#### [+] Add Button
**Purpose**: Attach files or add context  
**Features**:
- Upload documents
- Attach images
- Add code files
- Include references

**Supported File Types** (varies by model):
- Documents: PDF, TXT, DOCX
- Images: PNG, JPG, GIF
- Code: All major programming languages
- Data: CSV, JSON, XML

---

#### [🧠] Agent Selector
**Purpose**: Activate custom agents  
**Action**: Click to open agent dropdown menu  
**Features**:
- Search agents by name
- Filter available agents
- Preview agent capabilities
- One-click activation

**Alternative**: Type `@` in the chat input to trigger agent mentions

---

#### [Model ▼] Model Selector
**Purpose**: Choose AI model  
**Visibility**: 
- Visible in base chat mode
- Hidden when custom agent is active (agent selects optimal model)

**Features**:
- Browse free and paid models
- Search models by name
- View model capabilities (Web Search, Reasoning, Coding, Documents)
- See provider information (OpenAI, Google, Anthropic)
- Filter by capability badges

**Available Models**:
- GPT-5 Mini (OpenAI) - Web Search, Reasoning
- Gemini 3.0 Flash (Google) - Reasoning, Coding
- Claude Haiku 4.5 (Anthropic) - Reasoning, Coding, Documents
- Additional models based on your account tier

---

#### [📎] Attachment Button
**Purpose**: Quick file attachment  
**Features**:
- Drag and drop support
- Multi-file upload
- File preview
- Automatic processing by compatible models

---

#### [Send] Send Button
**Purpose**: Submit your message  
**Keyboard Shortcut**: Enter (or Shift+Enter for new line)  
**Features**:
- Disabled when input is empty
- Visual loading state while processing
- Streaming response starts immediately

---

## Conversation Features

### Message Threading

**Your Messages**
- Displayed on the right side
- Light background color
- Timestamp and edit options
- Delete or regenerate options

**AI Responses**
- Displayed on the left side
- Includes model/agent identifier
- Code blocks with syntax highlighting
- Copy buttons on code snippets
- Streaming as text is generated

---

### Streaming Responses

GrowthHub uses real-time streaming for AI responses:

**Benefits**:
- See responses as they're generated
- No waiting for complete answer
- Can read and process while AI continues
- Stop generation if answer is complete

**Indicators**:
- Animated cursor shows generation in progress
- Stop button appears during streaming
- Complete checkmark when finished

---

### Context Management

**Thread Context**
- AI sees all messages in the current thread
- Maintains continuity across conversation
- References earlier messages automatically
- Context window limits vary by model

**Best Practices**:
- Start new threads for unrelated topics
- Keep conversations focused on one project or task
- Use thread titles to identify context later
- Archive completed conversations to reduce clutter

---

## Chat Actions

### In-Message Actions

**For Your Messages**:
- Edit: Modify and resend your message
- Delete: Remove your message (may affect thread context)
- Copy: Copy message text to clipboard

**For AI Messages**:
- Copy: Copy entire response
- Copy Code: Copy individual code blocks
- Regenerate: Get a new response to the same prompt
- Thumbs Up/Down: Provide feedback on quality

---

### Thread-Level Actions

Access via the thread menu (three dots):

- **Rename Thread**: Give the conversation a descriptive title
- **Archive Thread**: Remove from active view but keep accessible
- **Download Thread**: Export conversation as text or JSON
- **Delete Thread**: Permanently remove (cannot be undone)

See [Thread Management](./THREAD_MANAGEMENT.md) for details.

---

## Keyboard Shortcuts

### Chat Input
| Shortcut | Action |
|----------|--------|
| Enter | Send message (or Cmd/Ctrl+Enter depending on settings) |
| Shift+Enter | New line in message |
| @ | Open agent selector |
| Esc | Clear input or close dropdown |

### Navigation
| Shortcut | Action |
|----------|--------|
| Cmd/Ctrl+K | Quick search (coming soon) |
| Cmd/Ctrl+N | New chat |
| Cmd/Ctrl+B | Toggle sidebar |
| ↑/↓ | Navigate message history |

---

## Modes and States

### Base Chat Mode

**Characteristics**:
- Model selector is visible
- You choose the AI model
- No specialized instructions
- General-purpose conversation
- Full flexibility

**Use When**:
- Exploring different model capabilities
- General questions or tasks
- Don't need specialized agent
- Want to control model selection

---

### Agent Mode

**Characteristics**:
- Triggered by mentioning an agent (@agent name)
- Model selector is hidden
- Agent's optimal model is used
- Specialized instructions active
- Agent icon visible in chat

**Use When**:
- Need specialized expertise (copywriting, coding, etc.)
- Consistent output format required
- Following established workflow
- Task aligns with agent's purpose

---

### Project Chat Mode

**Characteristics**:
- Conversation is within a specific project folder
- Project context may be applied
- Inherits project-level settings (when available)
- Organized with related work

**Use When**:
- Working on a specific project
- Need conversations grouped together
- Want project-specific defaults
- Collaborating on shared project (future)

---

## Mobile Experience

### Responsive Design

**Mobile Layout**:
- Sidebar becomes a slide-out drawer
- Hamburger menu (☰) to access
- Full-screen chat area
- Optimized toolbar for touch
- Swipe gestures for navigation

**Tablet Layout**:
- Optional persistent sidebar
- Larger touch targets
- Adaptive toolbar
- Picture-in-picture mode for reference (future)

**Mobile-Specific Features**:
- Voice input (coming soon)
- Image capture for attachments
- Share conversations to other apps
- Offline message composition (queues until online)

---

## Differences from Legacy Interfaces

### Autopilot Mode (Deprecated)

**What Changed**:
- Autopilot features are now built into base chat
- Use custom agents for specialized workflows
- No separate mode switch required
- More intuitive and integrated

**Migration**:
- Old autopilot conversations are preserved
- Access them from Recent or project folders
- Continue in new unified interface
- All autopilot capabilities are still available

---

### Sandbox Mode (Deprecated)

**What Changed**:
- Sandbox is now the default chat experience
- No separate "sandbox" vs "production" mode
- All conversations have full capabilities
- Cleaner, less confusing interface

**Migration**:
- Sandbox conversations moved to appropriate projects
- All features remain accessible
- No functionality lost
- Simplified user experience

---

## Customization

### Chat Settings (Roadmap)

Future personalization options:
- Theme: Light, dark, or auto
- Message density: Compact or comfortable
- Font size: Small, medium, large
- Code theme: Various syntax highlighting options
- Enter key behavior: Send or new line
- Streaming: Enable/disable real-time streaming
- Timestamps: Show/hide message times

---

## Troubleshooting

### Chat Not Loading
**Issue**: Blank screen or loading indicator stuck  
**Solution**:
- Refresh the page
- Check internet connection
- Clear browser cache
- Try incognito/private browsing
- Contact support if persists

### Messages Not Sending
**Issue**: Send button doesn't work or messages fail  
**Solution**:
- Verify input is not empty
- Check for error messages
- Ensure model is selected (in base mode)
- Try selecting a different model
- Refresh the page

### Streaming Stopped Mid-Response
**Issue**: AI response cuts off unexpectedly  
**Solution**:
- Click "Continue" or "Regenerate" if available
- Check if you hit model's token limit
- Try a model with larger context window
- Split complex requests into smaller parts

### Can't See Toolbar Buttons
**Issue**: Missing [+], [🧠], or [📎] buttons  
**Solution**:
- Expand screen width (buttons may be hidden on narrow screens)
- Check if you're in read-only mode (archived threads)
- Ensure you're logged in
- Update your browser if using old version

---

## FAQ

**Q: Can I have multiple chats open at once?**  
A: Currently, one active chat at a time. Multi-window support is planned for future updates.

**Q: Do conversations sync across devices?**  
A: Yes, all conversations sync in real-time across all your devices.

**Q: Is there a character limit for messages?**  
A: Input messages have a generous limit (typically 8,000+ characters). Exact limit varies by account tier.

**Q: Can I schedule messages for later?**  
A: Scheduled messages are not currently available but are on the roadmap.

**Q: What happens if I lose internet connection mid-conversation?**  
A: Your typed message is saved locally. Send it when connection is restored. Streaming responses will pause and resume when possible.

**Q: Can I export entire conversations?**  
A: Yes, use the "Download Thread" option in thread actions. Exports are available as text, markdown, or JSON.

---

## Next Steps

- Learn about [Model Selection](./MODEL_SELECTION.md) to choose the right AI for your task
- Explore [Custom Agents](./CUSTOM_AGENTS.md) for specialized assistance
- Review [Thread Management](./THREAD_MANAGEMENT.md) to organize conversations
- Set up [Project Organization](./PROJECT_ORGANIZATION.md) to structure your work
