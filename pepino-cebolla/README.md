# 🧪 Case Study QA and Factuality: When “Pepino” Is Not a Cucumber

### A Real-World Example of Semantic Ambiguity and AI Hallucination

---

## Abstract

This short “case study” documents a real interaction with a large language model that resulted in a coherent but factually incorrect answer due to semantic ambiguity and missing context.

The example illustrates how LLMs may hallucinate plausible explanations instead of requesting clarification, and why this behavior matters for factuality, semantic QA, and AI evaluation.

---

## The Prompt

The user asked the following question (in Spanish):

> **“¿El Torpedo-66 es de pepino o de cebolla?”**  
> (“Is Torpedo-66 from pepino or from cebolla?”)

No additional context was provided.

---
*Full transcript of the original interaction (in Spanish) is available in `/cases/pepino-cebolla-full-dialogue.md`.*





## The Model’s Response

The model interpreted the question as referring to a sandwich or food item, assuming:

- **pepino** = cucumber  
- **cebolla** = onion  
- **Torpedo-66** = a plausible product or local dish  

It confidently answered that *Torpedo-66 was made with pepino*, inventing a coherent but non-existent culinary reference.

The response was:

- fluent  
- confident  
- locally flavored  
- and entirely false  

---

## Ground Truth

In reality:

- **Torpedo 66** is the name of a football club.
- The club is from **Pepino**, a real town in the province of Toledo (Spain).
- **Cebolla** is another nearby town in the same province.
- Both **Pepino** and **Cebolla** are *toponyms*, not ingredients.

The question was intentionally ambiguous but factually resolvable with the correct semantic interpretation.

The question was asked verbally, without additional contextual cues. The model resolved the ambiguity by interpreting “pepino” and “cebolla” as ingredients rather than place names, despite both interpretations being plausible.

---

## Why This Example Matters

This case is interesting because it combines several common risk factors for hallucination:

### 1. Lexical Ambiguity

Words like *pepino* and *cebolla* are both:

- common nouns, and  
- valid geographical names.

### 2. Low-Frequency Real-World Entity

*Torpedo 66* is not a globally known entity, but it is real and verifiable.

### 3. Missing Context by Design

The prompt did not specify:

- football,  
- sports,  
- geography, or  
- Spain.

This forced the model to choose an interpretation rather than ask for clarification.

---

## The Core Issue: Hallucination vs Clarification

Instead of asking for clarification (e.g. *“Do you mean the football club?”*), the model:

- resolved ambiguity internally,  
- optimized for plausibility, and  
- hallucinated a culturally believable answer.

This highlights a structural issue in LLM behavior:

> **Language models optimize for coherence, not for epistemic caution.**

---

## What a Safer Answer Would Look Like

A factuality-aware response would have been:

> “If you are referring to the football club Torpedo 66, it is from Pepino (Toledo).  
> If you mean something else, please provide more context.”

This answer is less “smooth”, but factually robust.

---

## Why This Is Relevant for AI QA & Evaluation

This example is useful for:

- hallucination detection  
- entity disambiguation  
- semantic ambiguity testing  
- factuality benchmarking  
- human-in-the-loop QA design  

It demonstrates how small, everyday prompts can expose deep model limitations without adversarial intent.

---

## Conclusion

This was not a trick question, but a natural ambiguity that humans resolve using world knowledge and context.

The model’s failure was not malicious or random, but systemic.

Understanding and auditing these failures is essential for building safer, more reliable language systems.

---

## License

This case study is based on a real interaction and may be reused for educational and research purposes.

**Suggested license:**  
Creative Commons Attribution 4.0 International (CC BY 4.0)

https://creativecommons.org/licenses/by/4.0/

**Tags:**  
LLM, factuality, hallucinations, AI QA, semantic ambiguity, 
