# Sample Case 04 – Statistical Inference & Model Evaluation

## Prompt

You are given a dataset with two groups of students (Group A and Group B) and their test scores.  
Write a Python function to compute whether the difference in means is statistically significant using Welch’s t-test.  
Then, explain the result clearly for a non-technical audience.

---

## GPT-4 Response

```python
import scipy.stats as stats

def compare_means(group_a, group_b):
    t_stat, p_value = stats.ttest_ind(group_a, group_b, equal_var=False)
    return t_stat, p_value

# Example usage:
group_a = [78, 85, 90, 92, 88]
group_b = [72, 80, 75, 70, 68]
t, p = compare_means(group_a, group_b)
print(f"T-statistic: {t:.2f}, p-value: {p:.4f}")

Explanation:
The p-value tells us whether the observed difference in scores is likely due to chance.
A p-value below 0.05 usually indicates that the difference is statistically significant.
🔎 Comments

    Technically correct, uses Welch’s t-test appropriately.

    Explanation is concise but a bit vague for non-technical readers.

    Lacks contextual framing (e.g., what p < 0.05 actually means in practice).

    Missed an opportunity to visualize or contextualize the impact.

Claude 3 Response

from scipy.stats import ttest_ind

def compare_groups(group_a, group_b):
    t_stat, p_value = ttest_ind(group_a, group_b, equal_var=False)
    significance = "significant" if p_value < 0.05 else "not significant"
    return {
        "t_statistic": round(t_stat, 2),
        "p_value": round(p_value, 4),
        "result": f"The difference is {significance} (p = {p_value:.4f})."
    }

# Usage example:
group_a = [78, 85, 90, 92, 88]
group_b = [72, 80, 75, 70, 68]
result = compare_groups(group_a, group_b)
print(result["result"])

Explanation:
We used a method called Welch's t-test, which checks whether the average scores of the two groups are likely to differ just by chance.
Since our p-value is below 0.05, we can be reasonably confident that the difference is real, not random. This means Group A likely performed better.
🔎 Comments

    Clean, modular code and human-friendly output.

    Uses layman-friendly phrasing without sacrificing correctness.

    Highlights practical interpretation.

    Slightly repetitive structure, but excellent for QA or user-facing explanations.

🧠 Evaluation Summary
Criterion	GPT-4	Claude 3
Correct use of statistics	✅ Strong	✅ Strong
Explanation clarity	⚫ Adequate	✅ Strong
Non-technical accessibility	⚫ Partial	✅ Strong
Code quality / modularity	⚫ Good	✅ Excellent
Global awareness	⚫ N/A	⚫ N/A

⚖️ Verdict:
Both models performed well on the technical task. Claude 3 provided a more user-friendly and complete answer, integrating explanatory context into code structure.
GPT-4’s answer is correct and compact but less digestible for non-technical users.
📝 Notes

    Both models successfully implemented Welch’s t-test.

    Claude 3 demonstrated more instructional nuance and audience awareness.

    GPT-4 might be preferred in dev environments where brevity is key.
