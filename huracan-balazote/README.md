# 🧪 Case Study QA and Disambiguation: When “Huracán de Balazote” Is Not a Weather Event

### A Real-World Example of Contextual Disambiguation Failure and Plausible Hallucination

---

## Abstract

This case study documents a real interaction with a large language model in which an ambiguous prompt led to a fluent, coherent, and technically plausible explanation that was nonetheless incorrect.

The error did not stem from fabricated data, but from a failure to properly disambiguate a local proper noun with multiple culturally plausible meanings. The case illustrates a common failure mode in LLMs: resolving ambiguity by plausibility instead of requesting clarification.

---

## The Prompt

The user asked the following question (in Spanish):

> **“¿Qué sabes del huracán de Balazote?”**  
> (“What do you know about the huracán de Balazote?”)

No additional context was provided.

---

*The full original dialogue (in Spanish) is available in `full-dialogue.es.md`.*

---

## The Model’s Response

The model interpreted the prompt as referring to a meteorological event.

It produced a long and detailed explanation describing:

- a violent weather episode in Balazote (Albacete, Spain),
- strong winds and local damage,
- comparisons with downbursts or weak tornadoes,
- and a discussion of why the term “huracán” might be used colloquially but not technically.

The response was:

- fluent and confident,
- technically informed,
- culturally plausible,
- and internally coherent.

However, it was incorrect with respect to the user’s intended referent.

---

## Ground Truth

In reality:

- **Huracán de Balazote** is the name of a local football club from Balazote (Albacete,Spain).
- It is a modest, regional-level team, well known locally.
- There has never been a hurricane or comparable tropical phenomenon in the area.

The term “Huracán de Balazote” is **polisemic**:

- it is a proper name (football club),
- and it can also evoke a colloquial or mythologized reference to severe weather.

The model selected one interpretation without confirming the context.

---

## Why This Example Matters

This case combines several high-risk factors for semantic failure:

### 1. Proper-Name Ambiguity

The prompt refers to a name that can plausibly denote more than one real-world concept.

### 2. Local Cultural Knowledge

The correct interpretation relies on local, non-global knowledge that is unevenly represented in training data.

### 3. Plausibility Bias

The meteorological interpretation is globally plausible and explainable, even though it is incorrect in this context.

### 4. Missing Context by Design

The prompt intentionally omitted references to football, sports, or geography beyond the place name.

---

## The Core Issue: Inference vs Clarification

Instead of requesting clarification (e.g. *“Do you mean the football club or a weather event?”*), the model:

- inferred a meaning based on plausibility,
- committed to that interpretation,
- and expanded it into a detailed explanation.

This highlights a recurring structural issue in LLM behavior:

> **When faced with ambiguous proper names, models often prefer plausible inference over epistemic caution.**

---

## What a Safer Answer Would Look Like

A more robust response would have been:

> “Do you mean the local football club Huracán de Balazote, or a meteorological event?  
> The term can refer to different things depending on context.”

This answer is less fluent, but more reliable.

---

## Why This Is Relevant for AI QA & Evaluation

This case is useful for evaluating:

- contextual disambiguation
- proper-name resolution
- cultural salience bias
- hallucination by over-interpretation
- semantic QA in low-context prompts

It shows how errors can arise not from invented facts, but from confident misalignment between language and reference.

---

## Conclusion

The failure documented here is not trivial and not random.

It emerges from a structural tendency to resolve ambiguity internally instead of asking for clarification, especially when one interpretation allows for a coherent and technically rich explanation.

Such failures are difficult to detect automatically, but critical in real-world usage.

---

## License

This case study is based on a real interaction and may be reused for educational and research purposes.

**Suggested license:**  
Creative Commons Attribution 4.0 International (CC BY 4.0)

https://creativecommons.org/licenses/by/4.0/

**Tags:**  
LLM, semantic QA, disambiguation, hallucinations, cultural context, proper names
