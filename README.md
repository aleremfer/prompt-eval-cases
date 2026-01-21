# Prompt Evaluation Cases

This repository collects small, real-world prompt cases used to examine how large language models interpret language when context is ambiguous, underspecified, or culturally local.

Instead of benchmarking models or measuring performance, the focus here is on interpretation problems: cases where a prompt can be read in more than one way, and where the model must decide whether to infer, clarify, or risk being wrong.

Many of the examples deal with:
- Lexical and semantic ambiguity
- Toponymy and local references (place names, teams, expressions)
- Plausible but incorrect interpretations
- Cases where internal coherence masks an external error

Each folder represents an independent case study based on real prompts and real interactions, with a short analysis of the observed behavior and why it matters.

The goal is not to rank models, but to document recurring failure modes in prompt interpretation that are easy to miss and hard to catch with standard tests.

Most original prompts in this repository are written in Spanish, where many language-level issues, such as ambiguity, disambiguation, cultural context, and reasoning, tend to emerge more clearly in everyday usage.


