# Project Organization Guide

## Overview

GrowthHub's project organization system helps you structure your work with folders, manage multiple conversations, and keep your workspace organized. The unified sidebar provides quick access to all your projects and chats.

---

## Understanding the Sidebar

### Navigation Sections

The sidebar includes three main areas:

1. **New Chat Button**
   - Creates a fresh conversation
   - Located at the top of the sidebar
   - Quick access to start working immediately

2. **Projects Section**
   - View all your project folders
   - Organized hierarchy of workspaces
   - Expandable/collapsible folders

3. **Chats Section**
   - Recent conversation list
   - Quick access to ongoing threads
   - Shows conversation previews

---

## Project Folders

### Default Folders

#### Inbox
**Purpose**: Default location for new chats and unorganized work  
**Use Case**:
- Quick conversations that don't belong to a specific project
- Temporary work or experimentation
- Triage area before organizing into projects

**Best Practice**: Regularly move conversations from Inbox to appropriate project folders

---

#### Content Gen
**Purpose**: Content generation and creative work  
**Use Case**:
- Blog posts and articles
- Social media content
- Marketing copy
- Creative writing
- Content ideation

**Common Agents Used**: Content agent, copywriting agent

---

#### Copywriting
**Purpose**: Marketing and sales copy  
**Use Case**:
- Ad campaigns
- Landing pages
- Email sequences
- Product descriptions
- Sales materials

**Common Agents Used**: copywriting agent

---

#### Recent
**Purpose**: Quick access to your most recent activity  
**Use Case**:
- Return to recent work quickly
- See cross-project recent conversations
- Access frequently used threads

**Note**: This is an automatic smart folder that populates based on activity

---

### Creating Custom Folders (Coming Soon)

Future updates will enable:
- Custom project folder creation
- Nested folder structures
- Color coding and icons
- Team-shared folders
- Folder templates

---

## Managing Conversations

### Starting a New Chat

**Method 1: New Chat Button**
1. Click "New Chat" at the top of the sidebar
2. Choose your starting model or agent
3. Begin typing your first message
4. The chat is automatically saved to your default project (usually Inbox)

**Method 2: Within a Project**
1. Navigate to a project folder
2. Click the project name
3. Start a new conversation in that project context
4. Chat is automatically organized under that project

---

### Moving Chats Between Projects

**Drag and Drop** (Coming Soon)
- Drag a chat from one folder to another
- Visual feedback shows valid drop zones
- Automatically updates project organization

**Right-Click Menu** (Coming Soon)
- Right-click on any chat
- Select "Move to Project"
- Choose destination folder from list

**Current Workaround**
- Use thread management to organize conversations
- Archive chats no longer needed
- Rename threads with project prefixes (e.g., "[ContentGen] Blog Post Draft")

---

## Workspace Views

### Projects View

Toggle to "Projects" mode to see:
- Folder-based organization
- Hierarchical structure
- Project-based grouping
- Nested conversations within projects

**When to Use**:
- Working on a specific project
- Need focused context
- Managing related conversations
- Long-term project organization

---

### Chats View

Toggle to "Chats" mode to see:
- Chronological conversation list
- All chats across projects
- Recent activity first
- Quick access to any thread

**When to Use**:
- Looking for a specific conversation
- Reviewing recent work
- Quick task switching
- Don't remember which project contains the chat

---

## Search and Filtering

### Sidebar Search (Coming Soon)

Search capabilities will include:
- Full-text search across all conversations
- Filter by project folder
- Filter by agent used
- Filter by date range
- Filter by model used
- Search within conversation content

---

## Project Settings

### Per-Project Defaults (Roadmap)

Future project-level settings:
- Default AI model for the project
- Preferred agents for project type
- Custom instructions that apply to all chats in project
- Project-level integrations and tools
- Team access and permissions

---

## Best Practices

### Organizing Your Workspace

**By Work Type**
```
📁 Inbox (temporary/unorganized)
📁 Marketing
  ├─ Ad Campaigns
  ├─ Social Media
  └─ Email Marketing
📁 Content
  ├─ Blog Posts
  ├─ Documentation
  └─ Case Studies
📁 Development
  ├─ Code Review
  ├─ Bug Fixes
  └─ Features
```

**By Client/Project**
```
📁 Inbox
📁 Client A
  ├─ Discovery
  ├─ Design
  └─ Launch
📁 Client B
📁 Internal Projects
```

**By Stage**
```
📁 Inbox
📁 Research
📁 In Progress
📁 Review
📁 Complete
📁 Archive
```

---

### Naming Conventions

**Threads**
- Use descriptive names: "Q4 Marketing Campaign" not "Chat 1"
- Include dates for time-sensitive work: "2024-01 Product Launch"
- Use prefixes for categories: "[Blog] AI Productivity Tips"

**Projects**
- Keep names concise but clear
- Use consistent capitalization
- Avoid special characters that might cause issues
- Consider emojis for visual distinction (when supported)

---

### Maintenance Routines

**Daily**
- Archive completed conversations
- Move Inbox chats to appropriate projects
- Rename threads with unclear titles

**Weekly**
- Review Recent folder for patterns
- Clean up duplicate or test conversations
- Organize new project folders as needed

**Monthly**
- Archive old projects you're no longer actively using
- Delete conversations that are no longer relevant
- Review project structure and reorganize if needed

---

## Collaboration (Coming Soon)

### Team Workspaces

Future team features:
- Shared project folders
- Real-time collaboration on threads
- Comment and annotation system
- Permission levels (view, edit, admin)
- Activity feeds and notifications

### Project Sharing

Planned sharing capabilities:
- Share individual conversations via link
- Export project as template
- Duplicate projects across workspaces
- Public project galleries
- Community templates

---

## Troubleshooting

### Sidebar Not Visible
**Issue**: Can't see the sidebar with projects  
**Solution**:
- Look for the menu icon (☰) on mobile or small screens
- Click the icon to expand the sidebar
- On desktop, sidebar should be visible by default
- Try refreshing the page if sidebar is stuck

### Project Folder Missing
**Issue**: Can't find a project folder you expect to see  
**Solution**:
- Switch between "Projects" and "Chats" views
- Use search to locate conversations (when available)
- Check if you're in the correct workspace
- Verify you have access permissions (for shared projects)

### Chat Appears in Wrong Project
**Issue**: Conversation is in the wrong folder  
**Solution**:
- Use thread management to reorganize (see [Thread Management](./THREAD_MANAGEMENT.md))
- Archive the chat from the current location
- Start a new chat in the correct project
- Copy relevant content to the new thread

### Can't Create New Folders
**Issue**: Want to create custom project folders  
**Solution**:
- Custom folder creation is coming in a future update
- Use existing folders with clear naming conventions
- Organize with thread naming prefixes as a workaround
- Consider using the Recent folder for cross-project work

---

## FAQ

**Q: How many project folders can I create?**  
A: Currently, you have access to the default folders. Custom folder limits will be announced with the custom folder feature.

**Q: Can I delete default folders like Inbox?**  
A: No, default folders are permanent. However, you can keep them empty if you prefer not to use them.

**Q: Are conversations in folders private?**  
A: Yes, all your conversations are private to your account unless you explicitly share them (when sharing features are released).

**Q: What happens to Inbox chats if I don't organize them?**  
A: They remain in the Inbox indefinitely. There's no automatic cleanup, so you can organize them whenever you're ready.

**Q: Can I have a conversation in multiple folders?**  
A: No, each conversation belongs to one project folder. However, you can reference or link to conversations from other threads.

**Q: Is there a limit to conversations per project?**  
A: No hard limit is currently enforced. Performance may vary with very large numbers of conversations (1000+).

**Q: Do projects sync across devices?**  
A: Yes, your project organization syncs automatically across all devices where you're logged in.

---

## Next Steps

- Learn about [Thread Management](./THREAD_MANAGEMENT.md) to organize individual conversations
- Explore [Unified Chat Interface](./UNIFIED_CHAT_INTERFACE.md) to understand the main workspace
- Review [Custom Agents](./CUSTOM_AGENTS.md) to use specialized agents within projects
