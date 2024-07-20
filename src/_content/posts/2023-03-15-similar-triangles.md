---
title: An easy geometry problem that looks impossible
subtitle: Applications of similar triangles and the Pythagorean Theorem
author: John Peach
lede:
hero:
  url: /assets/img/2023-03-15-similar-triangles/solution.png
  alt:
tags: [math]
keywords: [geometry, similar triangles, Pythagorean Theorem]
socialImg: /assets/img/2023-03-15-similar-triangles/solution.png
software: ['geogebra']
---

[Home](https://wildpeaches.github.io/)

The previous post [*The Prediction Machine, Part I - Protocols and OpenBB*](https://wildpeaches.xyz/blog/the-prediction-machine/) was supposed to have been followed by a post on a  machine learning method called Long Short-Term Memory (LSTM), but it's taking longer than I thought, so I'm putting this up instead and will get back to predictions later. I see a great future for having the ability to predict things!

## The problem

I saw this problem recently and was intrigued by how it seemed at first to be nearly impossible to solve, and yet was easy to understand. The problem is to calculate the area of a square where the only information given is the length of two apparently unrelated line segments. Here's the setup (all figures drawn with [GeoGebra](https://www.geogebra.org/graphing)):



![problem](/assets/img/2023-03-15-similar-triangles/problem.png)

<p align = "center"><b>The Problem</b></p>

You're supposed to calculate the area of the beige square, but all you have are some lines drawn through it, and only two lengths. The length of the long line at the bottom of the square, extending out to the left, is 6. We're also given the length $\sqrt{3}$ for the line segment in the upper left corner of the square. One more bit of information given is that the $\sqrt{3}$ segment intersects the long segment going from lower left to upper right at right angles.

It turns out the solution is pretty easy once you see the trick of using similar triangles.

## Similar triangles

First I'll add some labels to the figure. The three triangles are 1,2, and 3, and the short side and hypotenuse of triangle 1 are $a$ and $b$.

![similar-triangles](/assets/img/2023-03-15-similar-triangles/similar-triangles.png)

<p align = "center"><b>Similar Triangles</b></p>

Next, we'll show that these three triangles are similar. The definition of [similar triangles](https://www.cuemath.com/geometry/similar-triangles/) is that their angles must be the same, and the lengths of their sides must be in proportion. There are several ways to show that two triangles are similar, but one easy way is to show that two of the three angles are the same. Since the sum of the angles of any triangle is $180 \degree = \pi \text{ radian}$, showing two angles gives the third for free. 

The problem says that the angle between the two shorter sides of triangle 1 is a right angle ($90 \degree$). The adjacent angle in triangle 2 must be a right angle too since they're joined by a straight line. Triangle 3 also has a right angle in the lower right corner since it's part of the square. So each of the three triangles has a right angle, and we only need to show that one other angle matches in all three to prove similarity.

Labeling the unknown angles in each triangle helps to identify them. I'll call $\angle 1_{T1}$ the first angle in triangle 1, and similarly for the others.

![angles](/assets/img/2023-03-15-similar-triangles/angles.png)

<p align = "center"><b>Corresponding Angles</b></p>

Since the sum of the angles is $180 \degree$, then $\angle 1 + \angle 2 = 90 \degree$ for each of the three triangles. But, $\angle 2_{T1} + \angle 1_{T2} = 90 \degree$ because they form a corner of the square, which means $\angle 1_{T1} = \angle 1_{T2}$ and therefore $\angle 2_{T1} = \angle 2_{T2}$, so $T_1$ is similar to $T_2$. Using the same reasoning, $T_2$ is similar to $T_3$, so all three are similar triangles. The lengths of the sides aren't the same, but the ratios hold, and that will give the solution.

## The area of the square

The hypotenuse in $T_2$ is one side of the square, which we can call $x$. Then the ratio of the sides $a$ and $b$ in $T_1$ is the same as the ratio of $\sqrt{3}$ to $x$ in $T_2$, or
$$
\frac{x}{\sqrt{3}} = \frac{b}{a} 
$$
giving
$$
x = \sqrt{3} \frac{b}{a}.
$$
Comparing the sides of $T_1$ and $T_3$, the ratio of $\sqrt{3}$ to $a$ is the same as $6$ to $x$ , so
$$
\frac{6}{x} = \frac{\sqrt{3}}{a}
$$
meaning
$$
6 = x \frac{\sqrt{3}}{a} =  \frac{\sqrt{3} \left( \sqrt{3}\frac{b}{a} \right)}{a} = 3 \frac{b}{a^2}.
$$
Solving for $b$ from this gives $2a^2 = b$. We can substitute back into the first equation to get 
$$
x = \sqrt{3}\frac{b}{a} = \sqrt{3}\frac{2a^2}{a} = 2\sqrt{3}a.
$$
Using the Pythagorean theorem in $T_1$,
$$
a^2 + (\sqrt{3})^2 = b^2
$$
and since $2a^2 = b$ then $a^2 = \frac{1}{2}b$ so 
$$
\frac{1}{2}b + 3 = b^2.
$$
Rearranging,
$$
b^2 - \frac{1}{2}b - 3 = 0.
$$
or $2b^2 - b - 6 = 0$.

From the quadratic formula,
$$
\begin{aligned}
b &= \frac{1}{4} \left( 1 \pm \sqrt{1 - 4(2)(-6)} \right) \\
&= \frac{1}{4} \left( 1 \pm \sqrt{1 + 48} \right) \\
&= \frac{1}{4} \left( 1 \pm 7 \right). \\
\end{aligned}
$$
This means that either $b = -6/4$ or $b = 2$. Since the length of a side must be positive, then $b = 2$, and $a^2 = 1$ meaning $a=1$. Substituting for $x$ we get
$$
x = \sqrt{3} \frac{2}{1} \Rightarrow x = 2 \sqrt{3}.
$$
Then, the area of the square is $x^2 = 12$. 

So, with the insight of using similar triangles and an application of the Pythagorean Theorem, we can solve for the area of the square even though it seems at first that we don't have enough information for a solution.
