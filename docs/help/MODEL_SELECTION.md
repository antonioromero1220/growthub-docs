# Model Selection Guide

## Overview

GrowthHub now supports multiple AI models to power your conversations. Choose the best model for your specific task, whether you need fast responses, advanced reasoning, coding assistance, or document processing.

---

## Available Models

### Free Models

#### GPT-5 Mini (OpenAI)
- **Provider**: OpenAI
- **Cost**: Free
- **Capabilities**:
  - Web Search - Access real-time information from the internet
  - Reasoning - Advanced logical thinking and problem-solving
- **Best For**: 
  - General-purpose conversations
  - Research tasks requiring web access
  - Complex problem-solving
  - Quick responses with high quality

#### Gemini 3.0 Flash (Google)
- **Provider**: Google
- **Cost**: Free
- **Capabilities**:
  - Reasoning - Logical analysis and decision-making
  - Coding - Programming assistance and code generation
- **Best For**:
  - Software development tasks
  - Code reviews and debugging
  - Technical documentation
  - Fast responses for coding tasks

#### Claude Haiku 4.5 (Anthropic)
- **Provider**: Anthropic
- **Cost**: Free
- **Capabilities**:
  - Reasoning - Thoughtful analysis and insights
  - Coding - Programming support
  - Documents - Advanced document processing and analysis
- **Best For**:
  - Document analysis and summarization
  - Complex coding projects
  - Content creation
  - Detailed explanations

---

## How to Select a Model

### In Workflow Chat

1. Open a new chat or navigate to an existing conversation
2. Look for the **model selector dropdown** in the chat toolbar (located between the input field and send button)
3. Click on the current model name (e.g., "GPT-5 Mini")
4. Browse available models by scrolling through the list
5. Use the **search bar** at the top to quickly find a specific model
6. Click on your desired model to select it
7. The model selector will update to show your new selection
8. Your next message will use the selected model

### Model Selection Visibility

- **Base Chat Mode**: Model selector is visible and you can switch between any available models
- **Custom Agent Mode**: Model selector is hidden when you mention a custom agent (e.g., @copywriting agent), as agents use their pre-configured optimal model

---

## Understanding Model Capabilities

### Web Search
Models with Web Search can:
- Access current information from the internet
- Provide up-to-date facts and data
- Research recent events and trends
- Verify information from multiple sources

**Use When**: You need current information, real-time data, or want to verify facts

### Reasoning
Models with Reasoning can:
- Solve complex logical problems
- Break down multi-step tasks
- Provide detailed explanations
- Analyze scenarios from multiple angles

**Use When**: You need help with decision-making, problem-solving, or understanding complex topics

### Coding
Models with Coding can:
- Generate code in multiple programming languages
- Debug and optimize existing code
- Explain code functionality
- Suggest best practices and improvements

**Use When**: You're developing software, need code examples, or want technical guidance

### Documents
Models with Documents can:
- Process and analyze uploaded documents
- Extract key information from files
- Summarize long documents
- Compare multiple documents

**Use When**: You need to work with PDFs, text files, or other document formats

---

## Model Selection Best Practices

### Choose Based on Task Type

| Task Type | Recommended Model | Why |
|-----------|------------------|-----|
| Web research | GPT-5 Mini | Web Search capability |
| Code development | Gemini 3.0 Flash or Claude Haiku 4.5 | Coding + fast responses |
| Document analysis | Claude Haiku 4.5 | Documents capability |
| General conversation | GPT-5 Mini | Balanced performance |
| Complex reasoning | Claude Haiku 4.5 | Advanced reasoning |
| Quick coding tasks | Gemini 3.0 Flash | Fast + Coding |

### Switch Models Within a Conversation

You can change models at any point in a conversation:
- Previous messages remain unchanged
- New model takes over from your next message
- Context from previous messages is maintained
- Each model may interpret history differently

### Paid Models (Coming Soon)

Additional premium models will be available for advanced use cases:
- Higher token limits
- Specialized capabilities
- Priority access during high-traffic periods
- Enhanced performance

---

## Troubleshooting

### Model Not Available
**Issue**: Selected model shows as unavailable or grayed out
**Solution**: 
- Check your account status
- Verify you have an active internet connection
- Try refreshing the page
- Contact support if issue persists

### Model Selector Not Visible
**Issue**: Can't find the model selector dropdown
**Solution**:
- Make sure you're not in custom agent mode (when an agent is mentioned, model selector is hidden)
- Check that you're in a workflow chat, not a legacy view
- Look for the dropdown between the chat input field and send button

### Unexpected Model Behavior
**Issue**: Model responses don't match expected capabilities
**Solution**:
- Verify the correct model is selected in the dropdown
- Check the model's capability badges (Web Search, Reasoning, Coding, Documents)
- Try rephrasing your prompt to align with the model's strengths
- Consider switching to a different model better suited for your task

---

## FAQ

**Q: Can I use multiple models in the same conversation?**  
A: Yes! You can switch models at any time. Each message will be processed by the model that was selected when you sent it.

**Q: Do different models cost different amounts?**  
A: Currently, all listed models are free. Paid tiers with premium models will be introduced in the future.

**Q: Which model is fastest?**  
A: Gemini 3.0 Flash is optimized for speed, particularly for coding tasks. GPT-5 Mini also provides quick responses.

**Q: Can I set a default model?**  
A: Model preferences will be saved per project in a future update. Currently, you select a model each time you start a new chat.

**Q: What happens to my conversation if a model becomes unavailable?**  
A: Your conversation history is preserved. Simply select a different model to continue.

**Q: Do custom agents override my model selection?**  
A: Yes, when you mention a custom agent (e.g., @copywriting agent), the agent uses its pre-configured optimal model for best results.

---

## Next Steps

- Learn about [Custom Agents](./CUSTOM_AGENTS.md) to leverage specialized AI assistants
- Explore [Project Organization](./PROJECT_ORGANIZATION.md) to manage your workflows
- Read about [Chat Interface](./UNIFIED_CHAT_INTERFACE.md) features and capabilities
