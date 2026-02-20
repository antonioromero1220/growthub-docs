# Custom Agents Guide

## Overview

Custom Agents are specialized AI assistants designed for specific tasks and workflows. Each agent is pre-configured with optimal settings, instructions, and capabilities to excel at particular types of work.

---

## Available Agents

### Onboarding Agent
**Purpose**: Help new users get started with GrowthHub  
**Best For**:
- Platform orientation and setup
- Understanding features and capabilities
- Guided walkthroughs
- Getting started tutorials

**Example Usage**: `@Onboarding Agent How do I create my first project?`

---

### Copywriting Agent
**Purpose**: Create compelling marketing and sales copy  
**Best For**:
- Ad copy and social media posts
- Email marketing campaigns
- Landing page content
- Product descriptions
- Call-to-action optimization
- Headline and tagline generation

**Example Usage**: `@copywriting agent Write a compelling product description for a new AI productivity tool`

---

### Slides Generation Agent
**Purpose**: Create presentation content and slide decks  
**Best For**:
- Business presentations
- Pitch decks
- Training materials
- Meeting slides
- Conference presentations
- Educational content

**Example Usage**: `@Slides generation agent Create an outline for a 10-slide investor pitch`

---

### Content Agent
**Purpose**: Generate long-form content and articles  
**Best For**:
- Blog posts and articles
- White papers
- Case studies
- Documentation
- SEO content
- Thought leadership pieces

**Example Usage**: `@Content agent Write a 1000-word blog post about AI in marketing`

---

### YouTube Thumbnail Agent
**Purpose**: Design and plan YouTube thumbnail concepts  
**Best For**:
- Thumbnail design concepts
- Visual composition ideas
- Text overlay suggestions
- Color scheme recommendations
- Click-through optimization
- Brand consistency

**Example Usage**: `@YouTube thumbnail agent Design a thumbnail concept for a tech review video`

---

## How to Use Custom Agents

### Mentioning an Agent

1. **Type @ Symbol**: In the chat input field, type `@`
2. **Search Agents**: A dropdown menu appears showing all available agents
3. **Filter by Name**: Use the search bar to quickly find a specific agent
4. **Select Agent**: Click on the agent you want to use
5. **Write Your Prompt**: After selecting, continue typing your request
6. **Send Message**: The agent will process your request with specialized expertise

### Agent Mention Syntax

```
@[Agent Name] [Your request]
```

**Examples**:
- `@copywriting agent Create ad copy for a fitness app`
- `@Content agent Outline a guide about remote work productivity`
- `@Slides generation agent Help me structure a quarterly review presentation`

---

## Agent vs. Base Model

### When Agent is Active

✓ Agent's specialized instructions are applied  
✓ Optimal model is automatically selected  
✓ Agent icon appears in the chat  
✓ Model selector is hidden (agent controls the model)  
✓ Responses are tailored to the agent's expertise  

### When No Agent is Mentioned

✓ Model selector is visible  
✓ You manually choose the AI model  
✓ General-purpose conversation mode  
✓ No specialized instructions applied  
✓ Flexible for any type of request  

---

## Agent Features

### Pre-Configured Settings
Each agent includes:
- **Optimal Model Selection**: Automatically uses the best model for its specialty
- **Custom Instructions**: Specialized prompts for consistent, high-quality output
- **Temperature Settings**: Tuned for creativity vs. precision based on task type
- **Response Format**: Structured outputs optimized for the agent's purpose

### Context Awareness
Agents maintain context throughout the conversation:
- Remember previous messages in the thread
- Build on earlier iterations
- Maintain consistent tone and style
- Reference earlier decisions or preferences

### Seamless Switching
You can switch between agents mid-conversation:
- Mention a different agent to change specialization
- Remove agent mention to return to base model
- Mix agent responses with regular chat
- Each message can use a different agent

---

## Best Practices

### Choosing the Right Agent

| Goal | Best Agent | Alternative |
|------|-----------|-------------|
| Marketing copy | copywriting agent | Content agent (for longer form) |
| Blog article | Content agent | copywriting agent (for shorter pieces) |
| Presentation | Slides generation agent | Content agent (for script) |
| Platform help | Onboarding Agent | Base model with clear questions |
| Visual concepts | YouTube thumbnail agent | Base model + image generation |

### Writing Effective Prompts for Agents

**Be Specific**
- ✓ `@copywriting agent Write 3 Facebook ad variations for a productivity app targeting remote workers`
- ✗ `@copywriting agent Write an ad`

**Provide Context**
- ✓ `@Content agent Write a blog post about AI ethics for a B2B tech audience, 800 words, professional tone`
- ✗ `@Content agent Write about AI`

**Set Clear Expectations**
- ✓ `@Slides generation agent Create a 12-slide deck structure for a product launch with intro, problem, solution, features, pricing, CTA`
- ✗ `@Slides generation agent Make slides`

**Iterate and Refine**
- First message: Broad request
- Follow-up: Specific adjustments
- Final: Polish and formatting

### Combining Agents in a Workflow

You can use multiple agents for complex projects:

**Example: Product Launch**
1. `@Content agent` → Create launch blog post
2. `@copywriting agent` → Generate social media posts
3. `@Slides generation agent` → Build presentation deck
4. `@YouTube thumbnail agent` → Design video thumbnail

---

## Creating Custom Agents (Coming Soon)

### Agent Builder (Roadmap)

Future updates will allow you to:
- Create your own custom agents
- Define specialized instructions
- Choose default models
- Set temperature and parameters
- Share agents with your team
- Manage agent libraries

### Agent Templates

Pre-built templates will be available:
- Industry-specific agents (finance, healthcare, education)
- Role-specific agents (manager, designer, developer)
- Workflow agents (research, analysis, reporting)
- Creative agents (storytelling, branding, naming)

---

## Troubleshooting

### Agent Not Appearing in Dropdown
**Issue**: Can't find the agent you're looking for  
**Solution**:
- Type `@` to trigger the agent dropdown
- Use the search bar to filter by name
- Check spelling (e.g., "copywriting" not "copy writing")
- Scroll through the full list
- Refresh the page if dropdown doesn't appear

### Agent Not Following Instructions
**Issue**: Agent responses don't match expected expertise  
**Solution**:
- Verify the correct agent is mentioned (check for agent icon in chat)
- Provide more specific context in your prompt
- Try rephrasing your request with clearer goals
- Use follow-up messages to refine the output
- Mention the agent again if you've switched away

### Model Selector Still Visible
**Issue**: Model selector appears when agent is mentioned  
**Solution**:
- Ensure the agent mention is properly formatted (with @ symbol)
- Check that the agent name is spelled correctly
- Look for the agent icon confirming activation
- Try re-selecting the agent from the dropdown

### Switching Back to Base Model
**Issue**: Want to exit agent mode  
**Solution**:
- Simply send a message without mentioning an agent
- The model selector will reappear
- Select your preferred base model from the dropdown
- Continue conversation in standard mode

---

## FAQ

**Q: Can I use multiple agents in one message?**  
A: No, only one agent can be active per message. However, you can switch agents between messages.

**Q: Do agents cost extra?**  
A: Currently, all agents are included with your GrowthHub account at no additional cost.

**Q: Can I see an agent's underlying instructions?**  
A: Agent instructions are optimized by our team and not currently visible. Custom agent creation (with visible instructions) is coming soon.

**Q: Do agents have access to my previous conversations?**  
A: Agents can see the current conversation thread but not your entire chat history. Each thread is isolated.

**Q: Can I suggest new agents?**  
A: Yes! We welcome feedback. Contact support or use the feedback feature to suggest new agent types.

**Q: What happens if an agent is retired or updated?**  
A: We'll notify users before making changes to agents. Your existing conversations will remain accessible.

**Q: Can agents use uploaded files?**  
A: Yes, if you upload a document, agents can reference and analyze it within the conversation.

---

## Next Steps

- Explore [Model Selection](./MODEL_SELECTION.md) to understand AI model capabilities
- Learn about [Project Organization](./PROJECT_ORGANIZATION.md) to manage agent workflows
- Review [Thread Management](./THREAD_MANAGEMENT.md) to save and organize agent conversations
