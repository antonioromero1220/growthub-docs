# Thread Management Guide

## Overview

Thread management in GrowthHub allows you to organize, rename, archive, download, and delete your conversations. Keep your workspace clean and your important chats easily accessible.

---

## Understanding Threads

### What is a Thread?

A **thread** is a single conversation with the AI, including:
- All messages exchanged (yours and AI responses)
- The model(s) or agent(s) used
- Any files or attachments shared
- Conversation metadata (creation date, last updated, etc.)

### Thread Properties

Each thread has:
- **Title**: Default or custom name for identification
- **Project**: Which folder contains the thread
- **Created Date**: When the conversation started
- **Last Activity**: Most recent message timestamp
- **Status**: Active, archived, or deleted

---

## Thread Actions

### Accessing Thread Actions

**Method 1: Recent Chat Row**
1. Locate the conversation in your Recent chats or project sidebar
2. Look for the **three dots (⋯)** or **More** icon
3. Click to open the actions dropdown menu
4. Select your desired action

**Method 2: Within the Chat**
1. Open the conversation
2. Click the **three dots (⋯)** in the top-right corner
3. Choose from available actions

---

## Rename Thread

### Why Rename?

- Make conversations easier to find later
- Organize threads by topic or project
- Replace default names like "New Chat" with descriptive titles
- Add context for future reference

### How to Rename

**From Sidebar**:
1. Click three dots (⋯) next to the thread
2. Select "Rename" from dropdown
3. Type new title in the inline input field
4. Press **Enter** to save or **Escape** to cancel

**From Chat**:
1. Click three dots (⋯) in chat header
2. Select "Rename Thread"
3. Enter new title in the modal
4. Click "Save" or press Enter

### Naming Best Practices

**Be Descriptive**
- ✓ "Q1 2024 Marketing Campaign Planning"
- ✗ "Chat 1"

**Include Key Context**
- ✓ "Product Launch - Landing Page Copy v2"
- ✗ "Copywriting"

**Use Dates for Time-Sensitive Work**
- ✓ "2024-03-15 Client Presentation Draft"
- ✗ "Presentation"

**Add Project Prefixes**
- ✓ "[ClientA] Discovery Phase Notes"
- ✓ "[Blog] AI Productivity Tips - Draft"

---

## Archive Thread

### What is Archiving?

Archiving removes a thread from your active view without deleting it:
- Thread is hidden from Recent and default project views
- All data is preserved and accessible
- Can be unarchived at any time
- Reduces clutter in your workspace

### When to Archive

- ✓ Completed projects you don't need to reference often
- ✓ Old conversations that are no longer active
- ✓ Threads you want to keep but not see daily
- ✓ Seasonal or periodic work between cycles

### How to Archive

1. Click three dots (⋯) next to the thread
2. Select "Archive" from dropdown
3. Thread immediately moves to archived view
4. Confirmation appears briefly

### Accessing Archived Threads

**View Archives**:
1. Navigate to project folder
2. Toggle "Show Archived" filter (when available)
3. Or search for the thread by name
4. Archives section at bottom of project (coming soon)

**Unarchive**:
1. Find the archived thread
2. Click three dots (⋯)
3. Select "Unarchive"
4. Thread returns to active view

---

## Download Thread

### Export Formats

**Text Format (.txt)**
- Plain text version
- Easy to read in any text editor
- Good for backup or simple reference
- No formatting or structure

**Markdown Format (.md)**
- Preserves formatting (bold, links, code blocks)
- Works with markdown editors
- Maintains structure and hierarchy
- Readable as plain text

**JSON Format (.json)**
- Complete data export
- Includes metadata and timestamps
- Machine-readable for processing
- For developers or data analysis

### How to Download

1. Click three dots (⋯) next to the thread
2. Select "Download" from dropdown
3. Choose your preferred format (if prompted)
4. File downloads to your default downloads folder
5. Filename includes thread title and date

### Use Cases for Export

**Backup Important Work**
- Keep local copies of critical conversations
- Archive completed projects externally
- Protect against accidental deletion

**Share with Others**
- Export and send to team members
- Include in project documentation
- Attach to reports or presentations

**Analysis and Review**
- Process conversation data
- Track AI suggestions over time
- Compare different approaches

**Documentation**
- Include in technical documentation
- Create tutorials from troubleshooting threads
- Build knowledge base articles

---

## Delete Thread

### What Happens When You Delete?

**Permanent Action**:
- Thread is permanently removed from the database
- All messages in the conversation are deleted
- Any attachments or files are removed
- Action **cannot be undone**

**Additional Effects**:
- Thread is removed from project and KV storage
- No longer counts toward any quotas
- Other threads are unaffected
- Deleted thread no longer appears in search

### How to Delete

1. Click three dots (⋯) next to the thread
2. Select "Delete" from dropdown
3. Confirmation dialog appears: "Are you sure you want to permanently delete this thread?"
4. Click "Delete" to confirm or "Cancel" to abort
5. Thread is immediately and permanently removed

### Before You Delete

**Consider Archiving Instead**
- Archiving keeps the data but hides it from view
- You can always unarchive if needed later
- No risk of losing important information

**Download First**
- Export the thread before deletion
- Keep a backup just in case
- Review content one more time

**Check for References**
- Ensure other work doesn't depend on this thread
- Look for any valuable insights to save
- Copy important information to notes

---

## Bulk Thread Management (Coming Soon)

### Multi-Select Actions

Future updates will enable:
- Select multiple threads at once
- Bulk archive conversations
- Bulk delete old threads
- Bulk move to different projects
- Bulk export for backup

### Filters and Views

Planned filtering capabilities:
- Filter by date range
- Filter by model used
- Filter by agent used
- Filter by project
- Filter by status (active/archived)
- Custom saved filters

---

## Thread Synchronization

### Real-Time Sync

Thread changes sync instantly across:
- All your devices
- Different browser tabs
- Mobile and desktop apps
- Team members (for shared threads in the future)

### Sync Indicators

**Visual Feedback**:
- Thread list updates immediately when actions are taken
- Loading states during sync
- Success confirmation after sync completes
- Error alerts if sync fails

**Conflict Resolution**:
- Most recent action takes precedence
- Conflicts are rare with sequential actions
- Manual refresh if sync seems stuck

---

## Thread Organization Strategies

### By Project Stage

```
Active Threads:
├─ Research & Discovery
├─ In Progress
├─ Review & Iteration
└─ Ready for Launch

Archived:
└─ Completed Projects
```

### By Client or Campaign

```
Client A:
├─ Active: Q1 Campaign
├─ Active: Website Redesign
└─ Archived: 2023 Projects

Client B:
├─ Active: Content Calendar
└─ Archived: Brand Guidelines
```

### By Content Type

```
Copywriting:
├─ Ads (Active)
├─ Landing Pages (Active)
└─ Email Sequences (Archived)

Content:
├─ Blog Drafts (Active)
├─ Case Studies (In Progress)
└─ Published Posts (Archived)
```

---

## Troubleshooting

### Can't Find Thread Actions Menu
**Issue**: Three dots (⋯) icon not visible  
**Solution**:
- Hover over the thread row to reveal actions
- On mobile, swipe left on the thread
- Ensure thread is not in read-only mode
- Check if you have permission to edit

### Rename Not Saving
**Issue**: Thread name reverts to old title  
**Solution**:
- Ensure you pressed Enter to save
- Check for special characters that may be invalid
- Verify you have internet connection
- Try refreshing the page
- Name may have length limit (usually 255 characters)

### Archive Not Working
**Issue**: Thread still appears in active view  
**Solution**:
- Refresh the page to sync changes
- Check if "Show Archived" is enabled
- Clear browser cache
- Try archiving from within the chat instead

### Delete Confirmation Not Appearing
**Issue**: Clicking delete doesn't show confirmation  
**Solution**:
- Check if popup blockers are active
- Try from the chat view instead of sidebar
- Ensure JavaScript is enabled
- Update browser to latest version

### Download Not Starting
**Issue**: File doesn't download when selecting download  
**Solution**:
- Check browser download settings
- Disable download blockers
- Ensure you have disk space
- Try a different export format
- Check if antivirus is blocking downloads

---

## FAQ

**Q: Can I recover a deleted thread?**  
A: No, deletion is permanent and cannot be undone. Always download important threads before deleting.

**Q: Is there a limit to how many threads I can archive?**  
A: No, you can archive unlimited threads. Archived threads don't count against any active quotas.

**Q: Do archived threads take up storage space?**  
A: Yes, archived threads are still stored in your account. They just don't appear in active views.

**Q: Can I rename multiple threads at once?**  
A: Bulk rename is not currently available but is planned for a future update.

**Q: What's the maximum thread title length?**  
A: Thread titles can be up to 255 characters. Longer titles will be truncated.

**Q: Do downloads include attachments and images?**  
A: Text content is exported. Attachments are referenced but not included in the export file (coming in future updates).

**Q: Can I schedule automatic archiving?**  
A: Automatic archiving based on age or inactivity is on the roadmap but not yet available.

**Q: Will deleting a thread affect other threads?**  
A: No, each thread is independent. Deleting one has no effect on others.

---

## Best Practices Summary

### Daily Habits
- Rename new chats with descriptive titles as you create them
- Archive completed conversations at end of day
- Delete only threads you're absolutely certain you won't need

### Weekly Maintenance
- Review Recent chats and organize into projects
- Archive conversations from previous week
- Download important threads for backup

### Monthly Cleanup
- Review archived threads for candidates to delete
- Organize project folders
- Export monthly archives for long-term storage
- Check for duplicate or test threads to remove

---

## Next Steps

- Learn about [Project Organization](./PROJECT_ORGANIZATION.md) to structure threads into folders
- Explore [Unified Chat Interface](./UNIFIED_CHAT_INTERFACE.md) to understand the workspace
- Review [Model Selection](./MODEL_SELECTION.md) and [Custom Agents](./CUSTOM_AGENTS.md) to optimize threads
