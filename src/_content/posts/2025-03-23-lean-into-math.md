---
title: Lean into Math
subtitle: A Concise Guide to Vibe Mathing
author: John Peach
lede:
hero: 
  url: /assets/img/2025-03-23-lean-into-math/michael-jackson-fake-dance-move.webp
  alt:
tags: [AI, math tools, LLMs, theorem proving, educational tech]
keywords: [vibe mathing, Lean theorem prover, Wolfram Alpha, ChatGPT, factorial problems]
software: ['wolfram-language','lean-theorem-prover','pari-gp','jupyterlab']
---

[Home](https://wildpeaches.github.io/)

[Andrej Karpathy](https://en.wikipedia.org/wiki/Andrej_Karpathy) who co-founded [OpenAI](https://en.wikipedia.org/wiki/OpenAI) coined the phrase *vibe coding* in February 2025 by which he meant that software engineers can use Large Language Models (LLMs) such as OpenAI's ChatGPT to generate code from input prompts. "Vibe coding is claimed by its advocates to allow even [amateur programmers](https://en.wikipedia.org/wiki/End-user_computing) to produce software without the extensive training and skills previously required for [software engineering](https://en.wikipedia.org/wiki/Software_engineering)." (Wikipedia - [Vibe Coding](https://en.wikipedia.org/wiki/Vibe_coding))

The response from the community was not overwhelmingly positive. In the [r/programming](r/programming) subreddit, Kush_238 asks, "*Why 'Vibe Coding' Makes Me Want to Throw Up?*" and some of the answers were:

- *It's the new "10x engineer", so your initial reaction tracks. It's mostly LinkedIn lunatics parroting this...*
- *This is the next buzzword used by the same crop of clueless paste eaters that have been trying to build software without actually building software for 50 years.*
- *Vibe coding is just programming on accident.*

Could this vibe idea be applied to mathematics? Can AI prove theorems? Yes, but even though these Large Language Models (LLMs) are constantly improving, they're still prone to errors. After all, they were trained to understand and respond to language, not mathematics. What if we could improve the accuracy of LLMs by asking them to apply math tools rather than solving the problem directly? Why ask a language model to solve a math problem when you can use a calculator to provide the exact answer? [Wolfram Alpha](https://products.wolframalpha.com/mobile) is available as an app for your phone and will accurately answer any questions you might ask. 

Sometimes, to solve a problem you need to know the right substitution to make the solution possible, but even a good Computer Algebra System (CAS) like [Mathematica](https://www.wolfram.com/mathematica/) (Wolfram Alpha is based on Mathematica) won't be able to solve it. On the other hand, an LLM might provide an answer but you shouldn't trust it without carefully checking the steps. 

Let's take a look at a tricky problem, and see if we can get an LLM to generate the steps needed to solve it with the help of a CAS or a theorem prover such as [Lean](https://lean-lang.org/). Combining actual thinking about the problem with an AI system and real math tools could be the path to vibe mathing.

## A Tricky Problem

We want to solve for an integer $n > 0$ such that 

$$
(n^3)! - (n^3-1)! = 720(n^3-1)^2.
$$
Wolfram Alpha couldn't find a solution to this, but if you make a simple substitution the problem becomes much easier. Let $p = n^3-1$ so the equation simplifies to

$$
(p+1)! - p! = 720 p^2
$$
and since $(p+1)! = (p+1)p!$ the left side may be rewritten as 

$$
\begin{aligned}
(p+1)p! - p! &= 720p^2 \\
(p+1-1)p! &= 720p^2 \\
pp! &= 720p^2
\end{aligned}
$$
One solution is to let $p=0$ so both sides become zero. If $p \neq 0$, then $p! = 720p$, or $(p-1)! = 720$. The next step is to realize that $720 = 6!$ which means $p-1 = 6$ or $p = 7$. So, now we have two solutions. Either $p=0$ or $p=7$ and solving for $n$ gives $n=1$ or $n=2$. 

Use your favorite CAS or other programming language (I used [Pari/GP](https://pari.math.u-bordeaux.fr/)) to define two functions:

```mathematica
fL(n) = (n^3)! - (n^3-1)! 
fR(n) = 720(n^3-1)^2
```
For $n=1$ both sides are zero since $1! = 0! = 1$ and $(1^3 - 1) = 0$. When $n=2$ both sides equal $35280$, so the solutions check.

Now let's see if an LLM can solve the problem.

## DeepSeek 

[DeepSeek](https://www.deepseek.com/) is the latest LLM. It's completely free to use and the code is fully open-source and is actively being [blocked](https://www.reuters.com/technology/artificial-intelligence/south-korea-spy-agency-says-deepseek-excessively-collects-personal-data-2025-02-10/) by governments around the world due to fears of excessive user data collection. Fine. I'll bore them to tears with math problems. Here's the prompt I used for the problem ($\Z^+$ is shorthand for positive integers):

> I want to use the Lean4 Theorem Prover to solve $(n^3)! - (n^3-1)! = 720(n^3-1)^2$ for $n \in \Z^+$. How should I set this up in Lean?

DeepSeek responded with a six-step outline that included required Lean libraries, but Deepseek thought the problem was to show that the equation holds for all $n$. It tried $n=1$ and showed it was a solution, and then it tried $n=2$ and again found a solution. Step 5 was:

> #### Step 5: General Proof (if possible)

> If you want to prove the equation for all n∈Z+, you would need to find a general proof. However, this might not be straightforward, and you might need to use more advanced techniques or even prove that no other solutions exist beyond a certain point.

Finally, it wrote a Lean function to test other integers. 

## ChatGPT
ChatGPT by OpenAI has many specialized AI tools, one of them being Wolfram. The Wolfram GPT gave this solution:

------

We are given the equation:
$$
(n^3)! - (n^3-1)! = 720(n^3-1)^2
$$

### Step 1: Factorial Factorization

Rewriting the factorial terms:
$$
(n^3)! = (n^3) \cdot (n^3-1)!
$$
Thus, substituting in the equation:
$$
(n^3) \cdot (n^3-1)! - (n^3-1)! = 720(n^3-1)^2
$$
Factoring out $(n^3-1)!$:
$$
(n^3-1)! \cdot (n^3 - 1) = 720(n^3-1)^2
$$

### Step 2: Canceling $(n^3 - 1)$ When Possible

If $n^3 - 1 \neq 0$, we divide by $(n^3-1)$:
$$
(n^3-1)! = 720(n^3-1)
$$

### Step 3: Solving for $n$

We now need to find integer values of $n$ such that:
$$
(n^3-1)! = 720(n^3-1)
$$
Checking small values of $n$:

1. **$n = 1$**: $n^3 - 1 = 0$, division is not possible.
2. **$n = 2$**: $n^3 - 1 = 7$ $7! = 5040, \quad 720 \times 7 = 5040$ This is a valid solution.
3. **$n = 3$**: $n^3 - 1 = 26$ $26! \neq 720 \times 26$ (26! is vastly larger than $18720$, so this does not work.)

Since factorials grow extremely fast, checking larger values of $n$ will only increase the left-hand side much more than the right-hand side.

### Conclusion

The only integer solution is:
$$
\boxed{n = 2}
$$

------

This is almost correct, but it decided that $n=1$ couldn't be a solution because that might imply a division by zero. Let's try a hybrid approach.

## The Lean Theorem Prover

[Lean](https://lean-lang.org/) is both a mathematical proof assistant and a computer language designed to help formalize mathematics. This means that every step of a proof can be checked rigorously. Mathematical concepts and proofs are translated into a language that a computer can understand and verify. Imagine writing a problem out on a whiteboard. Sooner or later, you'll miss a minus sign, or make some other minor algebraic error and the proof will be incorrect. Lean takes the tedium out of the proof. 

The advantage of both Lean and Mathematica is that they don't hallucinate the way AI systems do, but a good AI can provide the syntax used in the mathematical software. For help setting up Lean and Mathematica, see our previous article, [*JupyterLab Desktop*](https://wildpeaches.xyz/blog/jupyterlab-desktop/).

My initial prompt to ChatGPT was

> How should the problem statement be entered into Lean4? Don't try to solve the problem, just set it up.

It showed how to set the problem up, but it also asked if I wanted to restrict $n \in \N$ instead of all integers because the factorial function is not defined for negative numbers. In fact, [Ashwani Thukral](https://doi.org/10.1186/2193-1801-3-658) described a method for applying the factorial to both negative and imaginary numbers, but we'll keep the original restriction of non-negative integers. ChatGPT also suggested that I set the problem up as a theorem to be proved, rather than a definition.

> Here’s how you can write the problem as a **theorem** in Lean 4, phrased as the existence of a natural number $n$ satisfying the given equation:

```mathematica
import Mathlib.Data.Nat.Factorial.Basic
import Mathlib.Data.Nat.Basic

open Nat

theorem exists_solution_to_factorial_equation :
  ∃ n : ℕ, let k := n ^ 3
           k.factorial - (k - 1).factorial = 720 * (k - 1) ^ 2 :=
  sorry

```

### Explanation:

- `∃ n : ℕ, ...` asserts that there exists a natural number $n$ satisfying the condition.
- The `let k := n ^ 3` binding makes the expression cleaner.
- The `sorry` is a placeholder in Lean for a proof that hasn’t been filled in yet.

You could also add an explicit condition like `n ≥ 1` if you want to avoid dealing with edge cases like $k - 1 = 0$.

Notice that ChatGPT made the substitution $k = n^3$, which is in the general direction of how I want to solve the problem, but I'd rather use the original substitution $p+1 = n^3$. Another prompt to ChatGPT gave this:

There are **two adjustments** needed for correctness in Lean 4 syntax:

1. **Lean does not allow arbitrary expressions like `(n^3).factorial` unless `n^3` is explicitly defined as a natural number**. So `factorial` must be applied to variables of type `ℕ`, and the whole expression must live in a `Prop` (like an equality or a `∃`).
2. **You must quantify `n : ℕ`**, since your theorem refers to an unspecified variable `n`.

Here is the corrected and idiomatic way to state it in Lean 4 **without any substitutions**:

```mathematica
import Mathlib.Data.Nat.Factorial.Basic
import Mathlib.Data.Nat.Basic

open Nat

theorem exists_solution_to_factorial_equation :
  ∃ n : ℕ, (n ^ 3) ! - (n ^ 3 - 1) ! = 720 * (n ^ 3 - 1) ^ 2 :=
  sorry

```

### Notes:

- In Lean, `n!` is written as `n !` (with a space), or you can use `factorial n`.
- `^` is exponentiation, and `!` is factorial (with proper spacing).
- The `∃ n : ℕ, ...` makes this a statement about the **existence** of such an `n`.
- `sorry` is a placeholder so Lean can still compile the file while the proof is missing.

Then, ChatGPT seemed to get stuck on the idea that all it needed to do was to show that $n=1$ and $n=2$ were solutions to the problem:

```mathematica
import Mathlib.Data.Nat.Factorial.Basic
import Mathlib.Data.Nat.Basic

open Nat

theorem all_solutions_to_factorial_equation :
  ∃ n : ℕ, (n ^ 3)! - (n ^ 3 - 1)! = 720 * (n ^ 3 - 1) ^ 2 :=
by
  -- Try n = 1
  use 1
  norm_num  -- (1^3)! - (0)! = 1 - 1 = 0, RHS = 720 * 0 = 0

  -- Try n = 2
  use 2
  norm_num  -- (8)! - (7)! = 40320 - 5040 = 35280, RHS = 720 * 49 = 35280

```

If I were more familiar with the syntax of Lean, I might be able to work around this. [*The Mechanics of Proof*](https://hrmacbeth.github.io/math2001/) by [Heather Macbeth](https://faculty.fordham.edu/hmacbeth1/) and [*Mathematics in Lean*](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html) by Jeremy Avigad and Patrick Massot are recommended on the Lean [documentation](https://lean-lang.org/documentation/) site.

## The Mathematica Solution

The syntax in Mathematica is a bit more similar to how you might write equations on a whiteboard. The first step is to define the equation,

```mathematica
eq = Factorial[n^3] - Factorial[n^3 - 1] == 720*(n^3 - 1)^2
```

which Mathematica rewrites as
$$
n^3! - (-1+n^3)! == 720(-1+n^3)^2.
$$
Next, we substitute $p = n^3 -1$ with



```mathematica
eq1 = eq /. n^3 -> p + 1
```

Mathematica correctly generated $-p! + (1-p)! == 720p^2$. At this point, Mathematica began to break down. It couldn't simplify this with the `Reduce` command, so I moved on to the last step, $(p-1)! = 720,$ and asked it to find the numerical answer, 



```mathematica
NSolve[Factorial[p - 1] == 720, p]
```

which generated this result:



```mathematica
NSolve::ifun: Inverse functions are being used by NSolve, so some solutions may not be found; use Reduce for complete solution information.
```

$p \rightarrow 7.37811 + 3.20076 \mathcal{i}.$

Curiously, [WolframAlpha](https://www.wolframalpha.com/input?i2d=true&i=Solve%5C%2891%29x%21+%3D+720%5C%2844%29x%5C%2893%29) finds the correct solution, which we can use to solve for $n$:

```mathematica
Solve[n^3 == 0 + 1 && n ∈ Integers && n ≥ 0, n]   
Solve[n^3 == 7 + 1 && n ∈ Integers && n ≥ 0, n]
```

returning $n = {1,2}$. You can check that these answers are correct by substituting them into the original equation,

```mathematica
eq /. n -> 1
eq /. n -> 2
```

which will return `True`. 

## Prove-It

Several other [theorem-proving systems](https://en.wikipedia.org/wiki/Proof_assistant#Comparison) have been developed, and one that might be worth a second look is [Prove-It](https://github.com/sandialabs/Prove-It/) developed at [Sandia National Laboratories](https://www.sandia.gov/). Prove-It is a Python-based interactive theorem-proving assistant designed to mirror informal mathematical reasoning in a JupyterLab Notebook. Prove-It focuses  on human intuition in proof construction while supporting automation. 

The system is organized into a hierarchical theory package system containing axioms, conjectures, and theorems with associated proofs, and it includes mechanisms to manage theorem dependencies and avoid logical paradoxes such as [Russell's](https://en.wikipedia.org/wiki/Russell%27s_paradox#:~:text=Most%20sets%20commonly%20encountered%20are,normal%20nor%20abnormal:%20Russell's%20paradox.) or [Curry's](https://en.wikipedia.org/wiki/Curry%27s_paradox#:~:text=Curry's%20paradox%20is%20a%20paradox,its%20relationship%20to%20L%C3%B6b's%20theorem.). In their [paper](https://www.osti.gov/servlets/purl/1843318), the developers of Prove-It present a formalization of the classic proof that the square root of 2 is irrational and show its potential applications, including quantum computing verification.

The value of Prove-It may be that it generates output using [*LaTeX*](https://en.wikibooks.org/wiki/LaTeX/Mathematics) symbols bringing the system closer to a whiteboard experience.

![sqrt2-irrational](/assets/img/2025-03-23-lean-into-math/sqrt2-irrational.webp)

## Getting started with AI in mathematics

The value in vibe mathing is in checking your answers. Of course, most of the value comes from using a solid prover or Computer Algebra System (CAS), and not AI. A procedure for solving problems with these tools is:

- Try to solve as much of the problem without aids as possible.
- Learn the basics of Lean and Mathematica (or other similar systems), and apply them to check your work.
- Use AI to recommend keywords. For example, ask it the difference between `Solve` and `Reduce` in Mathematica.
- Avoid telling the AI too much about the problem. AI tends to want to solve the entire problem and can get trapped in an unproductive direction. Give it snippets or similar problems to illustrate what you're looking for.

You might try Andrej Karpathy's method of asking AI to solve the problem and then iterating on the solution it provides. I asked Claude (Sonnet 3.5) on [Poe](https://poe.com) and it somehow decided that the solution was $n = 7 \sqrt{3}$. When I asked if $n=1$ was a solution, it checked and found that it was, and then I repeated the question for $n=2$.  Again, it decided that this was a solution, but in the end, thought that all three answers: $n = \{1,2, 7 \sqrt{3}\}$ satisfied the equality. 

Wolfram Alpha wasn't able to find any solution. Still, this may have been a tricky problem, and you may have more luck with another one. If you want to learn how to prove theorems, I recommend *[The Nuts and Bolts of Proofs](https://www.sciencedirect.com/book/9780123822178/the-nuts-and-bolts-of-proofs)* by Antonella Cupillari ([free online](https://books.google.com/books?id=JIANFjSUH_kC&printsec=copyright#v=onepage&q&f=false)). You don't need to write out theorems and their proofs formally the way mathematicians do, either. In fact, doing the algebra for a problem step-by-step is a form of proof.

With these thoughts in mind, happy vibe mathing!

## Image credits

* Hero: [How Michael Jackson pulled off Smooth Criminal tilt revealed by scientists](https://news.sky.com/story/scientists-reveal-how-michael-jackson-pulled-off-smooth-criminal-tilt-11382540). Sky News, 23 May 2018.
* Michael Jackson - [Smooth Criminal](https://www.youtube.com/watch?v=h_D3VFfhvs4) (Official Video). Tilt starts at 7:05.
* Proof of the irrationality of $\sqrt{2}$ - [Prove-It](https://github.com/sandialabs/Prove-It/)


## Code 


The [JupyterLab](https://github.com/jupyterlab/jupyterlab-desktop) notebook for this article is on [GitHub](https://gist.github.com/XerxesZorgon/14816d1f9458ab9fa6621e0f70f1dd2b). This should give you a good starting point for any theorems you'd like to prove.

## References and further reading

- Thukral, A.K. [Factorials of real negative and imaginary numbers - A new perspective](https://doi.org/10.1186/2193-1801-3-658). *SpringerPlus* **3**, 658 (2014). 
- J. Avigad and P. Massot, *[Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html)*, Lean Community, 2023.
- H. Macbeth, *[The Mechanics of Proo](https://hrmacbeth.github.io/math2001/)f*, Fordham University, 2024.
- Jasmin Christian Blanchette, Cezary Kaliszyk, Lawrence C. Paulson, Josef Urban. *[Hammering towards QED](https://inria.hal.science/hal-01386988/document)*. Journal of Formalized Reasoning, 2016, 9 (1), pp.101-148. 
- Peiyang Song, Kaiyu Yang, Anima Anandkumar. *[Lean Copilot: Large Language Models as Copilots for Theorem Proving in Lean](https://arxiv.org/abs/2404.12534)*, *arXiv preprint arXiv:2404.12534*, 2025.
- [Vibe Coding](https://en.wikipedia.org/wiki/Vibe_coding), Wikipedia.
- W. Weisstein, *[Factorial](https://mathworld.wolfram.com/Factorial.html)*, *MathWorld–A Wolfram Web Resource*, 2024.
- M. L. Bottoni, A. S. Cattaneo, and E. Sacikara, *Teaching 'Foundations of Mathematics' with the Lean Theorem Prover*, *arXiv preprint arXiv:2501.03352*, 2025.
- C. Purcell, *[Mathematicians’ Newest Assistants Are Artificially Intelligent](https://www.scientificamerican.com/article/mathematicians-newest-assistants-are-artificially-intelligent/)*, *Scientific American*, 2024.
- M. Rieffel, *[The Use of Lean in Undergraduate Education](https://arxiv.org/abs/2501.03352)*, *IEEE Comp. in Education*, vol. 67, no. 4, pp. 23–30, 2023.
- A. Gusakov, B. Mehta, and K. A. Miller, *[Formalizing Hall's Marriage Theorem in Lean](https://arxiv.org/abs/2101.00127)*, *arXiv preprint arXiv:2101.00127*, 2021.
- M. Luciano Bottoni, A. S. Cattaneo, and E. Sacikara, *[Teaching 'Foundations of Mathematics' with the Lean Theorem Prover](https://arxiv.org/abs/2501.03352)*, *arXiv preprint arXiv:2501.03352*, 2025.
- K. Yang, *[Computer Algebra Systems and Lean](https://leanprover-community.github.io/archive/stream/113488-general/topic/Computer.20Algebra.20Systems.20and.20Lean.html)*, Zulip Chat Archive, 2023.
- A. Lubrino, *[Five free resources to get you started with the Lean Theorem Prover](https://medium.com/@andrewlubrino_74588/five-free-resources-to-get-you-started-with-the-lean-theorem-prover-823af16f58d6)*, *Medium*, 2022.
- A. Karpathy, *[A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/)*, Andrej Karpathy blog, 2019. 
- J. Samuel, *[Human Languages as New Hot Programming Languages](https://johnsamuel.info/en/programming/human-languages-programming-languages.html)*, personal blog.
- B. Edwards, *[Will the Future of Software Development Run on Vibes?](https://arstechnica.com/ai/2025/03/is-vibe-coding-with-ai-gnarly-or-reckless-maybe-some-of-both/)*, *Ars Technica*, 2025.
- W. Witzel, R. Carr, W. Craft, J. E. Madrid Larrañaga, *[Prove-It: A Proof Assistant for Organizing and Verifying General Mathematical Knowledge](https://arxiv.org/pdf/2012.10987)*, *arXiv*, 2020.
- A. Cupillari, *[The Nuts and Bolts of Proofs 4th ed.](https://www.sciencedirect.com/book/9780123822178/the-nuts-and-bolts-of-proofs)*, Elsevier, 2013.
