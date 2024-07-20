---
title: Investigating Integrals with Geogebra
subtitle: Solving a problem from the Classical Mathematics Group
author: John Peach
lede:
hero:
  url: /assets/img/2024-04-17-investigating-integrals-with-geogebra/integrations.webp
  alt:
tags: [math]
keywords: [geometry, calculus, integration, computer algebra system]
socialImg: /assets/img/2024-04-17-investigating-integrals-with-geogebra/integrations.webp
software: ['geogebra']
---

[Home](https://wildpeaches.github.io/)

In the previous article, [*CAS with Geogebra*](https://wildpeaches.xyz/blog/cas-with-geogebra/) we looked at derivatives. Here we'll go in the opposite direction and investigate integrals. If you have a function $f(x)$ then the derivative is written as $f'(x)$ and gives the slope of the function at any point $x$. Integration reverses this process and gives you $f(x)$ from the derivative function $f'(x)$. 

The usual interpretation of the integral is that it's the area between the curve described by the function and the $x-$axis. 

## The Integral

The way the integral is calculated is to find the area of small rectangles under the curve of $f(x)$. Suppose $f(x) = x-x^3$ and we want to find the area of a small rectangle centered at $x = 0.32$ that has a width of $\Delta x = 0.4$. 

![example-integral](/assets/img/2024-04-17-investigating-integrals-with-geogebra/example-integral.webp)

<p align = "center"><b>The area under the curve</b></p>

Calculating the value of $f$ at $0.32$ gives $f(0.32) = 0.287$, and since the width of the rectangle is $0.4$ the area is $A = f(x) \Delta x = 0.287 \cdot 0.4 = 0.115.$ Now imagine repeating this from $0$ to $1$ along the $x-$​axis. Add up all of the areas of the rectangles and you'll get an approximation for the total area under the curve, called the [Riemann sum](https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-2/a/riemann-sums-review). 

![riemann-sum](/assets/img/2024-04-17-investigating-integrals-with-geogebra/riemann-sums.webp)

<p align = "center"><b>Riemann Sums - Function Integration</b></p>

 

Alexander Bogomolny built an [interactive demonstration](https://www.cut-the-knot.org/Curriculum/Calculus/RiemannSums.shtml) of Riemann sums on his website [*Cut the Knot*](https://cut-the-knot.org/) where you can choose several different functions, select left, midpoint, or right ends for the height of the rectangles, and set the width of the rectangles to see how your choices affect the estimated area.

Using the summation symbol we can write
$$
F(x) = \sum_{i=1}^n f(x_i) \Delta x
$$
where $x_i$ is the location of the center of the $i^{th}$ rectangle, and $F(x)$ represents the total area.

But, the area under the curve is just a number and the integral is a function. Is this like the [wave-particle duality](http://hyperphysics.phy-astr.gsu.edu/hbase/mod1.html) of photons? No, the answer is much simpler. The integral becomes an area if you measure between two points along the $x-$axis. In the first example, we might start at $x=0$ and end at $x=1$.  If the curve is above the $x-$axis the area is a positive number and if it's below then the area is negative. 

If the beginning and endpoints aren't given, then the integral is a function. It's the function $F(x)$ that has a derivative $f(x)$, so we'd like a procedure that finds $F$ from $f$. 

## Techniques of Integration

Finding the [integral of a function](https://www.whitman.edu/mathematics/calculus_online/chapter08.html) is often tricky and may involve substituting a variable for a term in the function, using rules from trigonometry, or applying something called *[integration by parts](https://tutorial.math.lamar.edu/classes/calcii/integrationbyparts.aspx)*. Sometimes you can find the solution in a [table of integrals](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.physics.umd.edu/hep/drew/IntegralTable.pdf) or you may resort to a computer algebra system like [WolframAlpha](https://www.wolframalpha.com/) or the [Geogebra CAS](https://www.geogebra.org/cas). For the cubic polynomial above, Geogebra finds the integral,

![geogebra-cas-integration](/assets/img/2024-04-17-investigating-integrals-with-geogebra/geogebra-cas-integration.webp) 

<p align = "center"><b>Geogebra CAS Integral</b></p>

The function that is the integral of $f(x) = x - x^3$ is
$$
F(x) = -\frac{x^4}{4} + \frac{x^2}{2} + c
$$
where $c$ is called the constant of integration (Geogebra uses $c_1$). The integral function looks like

![geogebra-integral-function](/assets/img/2024-04-17-investigating-integrals-with-geogebra/geogebra-integral-function.webp)

<p align = "center"><b>Integral of the cubic function</b></p>

which has slope $f(x)$ at every point $x$. Since the constant $c$ shifts the function up or down the $y-$axis it won't change the shape of the curve, so the derivative remains the same. 

## A more difficult integral problem

A problem that requires a bit more thought is this:

![integral-problem](/assets/img/2024-04-17-investigating-integrals-with-geogebra/integral-problem.webp)

<p align = "center"><b>An integral problem</b></p>

What is the area in the colored region? An assumption made by people in the [Classical Mathematics](https://www.facebook.com/groups/ClassicalMathematics) group is that the white rectangle is a square, but you know what they say about assumptions - they make an ass out of u and mptions. 

Let's split the area into two pieces. Let $A_T$ be the total area above the curve $y=\alpha x^2$ and below the line $y=1$, and $A_R$ be the area of the white rectangle. Since the figure is symmetric about the $y-$axis, we can start everything at $x=0$ and just double the areas. 

To get the area in the colored region $A_T$, we can calculate the area below $y=1$ and subtract the area below $y= \alpha x^2$, so $f(x) = 1 - \alpha x^2$. Using the Geogebra CAS, the integral is 
$$
F(x) = x - \frac{\alpha}{3}x^3 + c.
$$
From the [Fundamental Theorem of Calculus](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus), the area enclosed by $f(x)$ over an interval $[a,b]$ is $F(b) - F(a)$, or the difference of the integral function at the endpoints of the interval. In this case, $a = 0$ and (ignoring the integration constant $c$) $F(0) = 0$. 

What's the value of $b$? That is, where does $y=  \alpha x^2$ intersect $y=1$? It has to be where $\alpha x^2 = 1$ so at $x = \frac{1}{\sqrt{\alpha}}$. In mathematical notation,
$$
A_T(\alpha) = 2\int_{x=0}^{\frac{1}{\sqrt{\alpha}}} f(x) dx = 2\int_{x=0}^{\frac{1}{\sqrt{\alpha}}} 1 - \alpha x^2 dx = \left. 2 \left( x - \frac{\alpha}{3} x^3 \right|_{0}^{\frac{1}{\sqrt{\alpha}}} \right).
$$
 The integral symbol $\int$ is used to denote the Riemann sum when the width of the rectangles $dx$ approaches zero. The line at the end with $0$ at the bottom and $\frac{1}{\sqrt{\alpha}}$ at the top is the notation to tell us to evaluate the integral at the endpoints. Doing the evaluation gives,
$$
\begin{aligned}
A_T(\alpha) &= 2\left( \frac{1}{\sqrt{\alpha}}  - \frac{\alpha}{3} \frac{1}{\alpha^{3/2}} \right) - 0 \\
&= 2 \left( \frac{1}{\sqrt{\alpha}} - \frac{1}{3}\frac{1}{\sqrt{\alpha}} \right) \\
&= \frac{4}{3} \frac{1}{\sqrt{\alpha}}.
\end{aligned}
$$
The area in the white rectangle depends on the location of the point $p$, and the area of the rectangle is
$$
A_R(p) = 2p(1-\alpha p^2).
$$
The area in the colored region is the difference
$$
A(p,\alpha) = A_T(\alpha) - A_R(p) = \frac{4}{3} \frac{1}{\sqrt{\alpha}} - 2p(1-\alpha p^2).
$$
If we set $\alpha = 1$, then the area becomes $A(p) = \frac{4}{3} - 2p(1-p^2)$.

![geogebra-F(p)](/assets/img/2024-04-17-investigating-integrals-with-geogebra/geogebra-F(p).webp)



<p align = "center"><b>The area of the colored region as a function of <em> p </em></b></p>

Notice that at $p=0$ and $p=1$ the area of the white rectangle is zero and the colored region has area $A = \frac{4}{3}$ shown by the green line.

One last question is, what is the value of $p$ that makes the white rectangle a square, and what is the value of $A$ at that point? For the rectangle to be a square the length of the side from $f(p)$ to the line $y=1$ must be equal to two times $p$ since $p$ is only half the length of one side of the square. This means,
$$
2p = 1-f(p) = 1 - \alpha p^2.
$$
Rearranging this equation gives a quadratic,
$$
\alpha p^2 + 2p -1 = 0
$$
with solutions
$$
p = \frac{1}{2 \alpha} \left(-2 \pm \sqrt{4 - 4 \alpha (-1)} \right) = \frac{1}{\alpha} \left(-1 \pm \sqrt{\alpha + 1} \right).
$$
Substituting this into the equation for the area $A(p,\alpha)$​,

![geogebra-solution](/assets/img/2024-04-17-investigating-integrals-with-geogebra/geogebra-solution.webp)

<p align = "center"><b>Geogebra solution</b></p>

using the positive root for $p$.

![calvin-and-hobbes-calculus](/assets/img/2024-04-17-investigating-integrals-with-geogebra/calvin-and-hobbes-calculus.webp)

<p align = "center"><b>Calvin and Hobbes do calculus</b></p>

### Image credits

Hero: Integrations - [Jacks McNamara](https://jacksmcnamara.net/integrations-paintings-2002-2007/)

The area under the curve: Geogebra

Riemann sums: Alexander Bogomolny, [Cut the Knot](https://cut-the-knot.org/), [Riemann Sums - Function Integration](https://www.cut-the-knot.org/Curriculum/Calculus/RiemannSums.shtml)

Geogebra CAS Integral, Integral of the cubic function: Geogebra

An integral problem: [Classical Mathematics Group](https://www.facebook.com/groups/ClassicalMathematics)

The area of the colored region: Geogebra

Geogebra solution: Geogebra CAS

Calvin and Hobbes - Bill Waterson

