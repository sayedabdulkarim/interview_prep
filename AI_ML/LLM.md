## QUESTIONS

- How transformer works
- Word Embedding
- ENCODER n DECODER

**TRANSFORMER**
A transformer is a type of artificial intelligence model designed to process and understand language. It’s like a smart machine that can read, understand, and generate text based on what it’s been trained on.

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

**ENCODER n DECODER**

E.G: https://github.com/sayedabdulkarim/rag_pract_one/blob/master/main.py

- Encoding: As per the above example, The encoding process is done by OllamaEmbeddings. It is responsible for transforming the raw text (documents or chunks of text) into numerical embeddings. These embeddings capture the semantic meaning of the text and are stored in a vector database (Chroma). This is the embedding or encoding step, where text is converted into a format that can be processed and searched by the model.

- Decoding: As per the above example, The decoding process is actually done by the ChatOllama model, not by MultiQueryRetriever. The MultiQueryRetriever is used to generate multiple variations of the user's question and then retrieve the most relevant documents from the vector store (Chroma) based on those variations. The retriever itself is not responsible for decoding; it is responsible for retrieving the most relevant information based on the question.

**ASCII Diagram of Encoder and Decoder in Transformer Models**

                Input Text
                     |
                     v

+------------------------------------+
| Encoder |
| (Converts text to embeddings) |
+------------------------------------+
|
v
Embeddings (Numerical Representations)
|
v
+------------------------------------+
| Decoder |
| (Generates output text) |
+------------------------------------+
|
v
Output Text

##Explanation:

**Encoder**:

- The input text (e.g., "What is the weather today?") is passed into the Encoder.
- The encoder processes the text and converts it into embeddings (numerical representations) that capture the semantic meaning of the input.
- The encoder captures context and relationships between words, creating a format that is understandable by the Decoder.

**Decoder:**

- The Decoder receives the embeddings produced by the encoder.
- Based on the input embeddings, the decoder generates an output (e.g., an answer, a translation, etc.). The decoder can generate text word-by-word (or token-by-token) until it produces the final output (e.g., "The weather today is sunny").

**Output Text:**

- The decoder generates a human-readable response based on the context (the input embeddings) and the learned knowledge.

**In simpler terms:**

- Encoder converts input text into a machine-understandable format (numerical embeddings).
- Decoder uses that machine-understandable format to generate the output text.
