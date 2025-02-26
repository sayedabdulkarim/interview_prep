## QUESTIONS

- How transformer works
- Word Embedding

**HOW TRANSFORER WORKS**

When you type a question like **"Who is the PM of India?"**, the Transformer looks at the **whole question** at once, not just one word at a time.

So, instead of looking at each word one by one, it tries to understand how all the words **connect** together.

For example:

- It looks at the word **"Who"** to know you're asking a question.
- It sees **"PM"** and knows you’re talking about a person’s title (Prime Minister).
- It sees **"India"** and understands you're asking about a specific country.

The model doesn’t need to read the words in order. It sees all the words together, understands their meaning, and then figures out the best answer.

That's how it can give a smart response, like "The current PM of India is Narendra Modi."

**WORD EMBEDDINGS**

Word embedding is a way to convert text into a format that a machine can understand.

How word embedding works:

- Converts words into numbers: Word embedding turns each word into a vector of numbers (called a "word **vector**"). These **vectors** represent the meaning of the word in a way that the machine can understand.
- Captures relationships: The key part is that words with similar meanings get similar numbers. For example, "king" and "queen" would have similar **vectors**, because they are related concepts. The machine can now compare words based on their **vectors**, which helps it understand how words are related.
