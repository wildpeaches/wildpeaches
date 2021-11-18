---
title: Curve fitting with Julia
subtitle: Why oil production may not follow a Gaussian function
author: John Peach
lede:
hero:
  url: /assets/img/curve-fitting-with-julia/huntington-beach.png
  alt:
tags: [math]
keywords: [curve fitting, Julia, Weierstrass approximation, Hubbert peak theory, Seneca cliff]
socialImg: /assets/img/curve-fitting-with-julia/huntington-beach.png
---



> ```
> “How did you go bankrupt?” Bill asked. 
> “Two ways,” Mike said. “Gradually, then suddenly.” 
> ```

Ernest Hemingway, *The Sun Also Rises*

## The Weierstrass Approximation Theorem

In 1885, Karl Weierstrass 

<img src="/assets/img/curve-fitting-with-julia/karl-weierstrass.jpg" alt="karl-weierstrass"  />

proved that any continuous function can be approximated as closely as you like with a polynomial. Written in mathematical terms, the theorem he proved is

**Theorem:** Suppose $f:[0,1] \Rightarrow \mathbb{R}$ is continuous. For any $\epsilon > 0$, there exists a polynomial $p$ such that 
$$
{\text{sup} \atop x \in [0,1]} |f(x)-p(x)| \leq \epsilon.
$$
What does all this mean? Let's start with $f: [0,1] \Rightarrow \mathbb{R}$. This says that the function $f$ takes any value of $x$ between $0$ and $1$ and returns a real-valued number, $y = f(x)$ and $y$ can be anything. A function is continuous if it exists at every $x$ and you can trace the curve without lifting your pencil. 

The part about "For any $\epsilon > 0$" is a trick mathematicians use a lot, and it means if you think of some very small positive number, we can always find another even smaller, but still positive number. The way we use this very, very tiny $\epsilon$ is to take the absolute value of the difference between $f(x)$ and $p(x)$ at every $x$ and make sure it's less than $\epsilon$. 

The $\text{sup} \atop x \in [0,1]$ is not "'Sup, dude?", but it's short for supremum and it means that for all possible polynomials $p$ approximating $f$, we want to choose the one where the maximum absolute value difference between $f(x)$ and $p(x)$ for any $x$ in the interval $[0,1]$ is the minimum. In other words, we want to choose the $p$ which minimizes the biggest error. 

You might be wondering why the $x-$values are constrained to be between $0$ and $1$, and the answer is, it doesn't matter. You can shrink, stretch and shift $x$ to fit any interval. Suppose your function is defined over the interval $[a,b]$. Then, for every $x$, make 
$$
x' = \frac{x-a}{b-a}
$$
so when $x=a$, $x' = 0$ and when $x=b$, $x'=1$. Then modify your function to
$$
g(x) = (b-a)f(x)+a
$$
and you get the same $y$ values as $f$, but over the interval $[0,1]$.

A theorem isn't a theorem until it's been proved. Weierstrass proved his theorem, but in 1912, Sergei Bernstein 

![Sergei-Bernstein](/assets/img/curve-fitting-with-julia/sergei-bernstein.jpg)

used Bernstein basis polynomials to construct approximation functions. In ["Yacht Design with Mathematics"](https://wildpeaches.xyz/blog/yacht-design-with-mathematics/) we used Bernstein polynomials as the basis for Bezier functions. For any $n \geq 0$, the $n+1$ Bernstein basis polynomials are defined as
$$
B_{k,n}={n \choose k} x^k (1-x)^{n-k}, \; k=0,1,2,\ldots,n
$$
with $x$ in the interval $[0,1]$. The [Binomial Theorem](https://en.wikipedia.org/wiki/Binomial_theorem) shows how to expand the polynomial in $x$ and $y$ to the $n^{th}$ power,
$$
(x+y)^n = \sum_{k=0}^n {n \choose k} x^{k-n}y^k.
$$
Substitute $y = 1-x$, add up all $k$ Bernstein polynomials and you get,
$$
\sum_{k=1}^n B_{k,n}(x) = (x + (1-x))^n = 1^n = 1
$$
for any $x$. Bernstein then defined a new function which included a continuous function $f$ on the interval $[0,1]$ to be
$$
B_n(f)(x) = \sum_{k=0}^n f\left( \frac{k}{n} \right) B_{k,n}(x) = \sum_{k=0}^n f\left( \frac{k}{n} \right) {n \choose k} x^k (1-x)^{n-k}.
$$
Michael Bertrand gives the complete version of Bernstein's proof in his article, ["Bernstein Proves the Weierstrass Approximation Theorem"](http://nonagon.org/ExLibris/bernstein-proves-weierstrass), and I'll provide another version at the end.

In 1938, Marshall Stone 

<img src="/assets/img/curve-fitting-with-julia/marshall-h-stone.png" alt="marshall-h-stone"  />

extended Weierstrass' Theorem which is now known as the Stone-Weierstrass Theorem. 

## Some Applications 

What can you do with a polynomial approximation to a function? With a good polynomial fit, you can use the polynomial to estimate the derivative or the integral of $f$, and this is what is done with software packages like [Chebfun](http://www.chebfun.org/) for Matlab, [ApproxFun](https://juliaapproximation.github.io/ApproxFun.jl/latest/) in Julia, or Python libraries such as [pychebfun](https://github.com/olivierverdier/pychebfun), [ChebPy](https://github.com/chebpy/chebpy), or [PaCAL](http://pacal.sourceforge.net/). Polynomials are easy to differentiate and integrate, which is often not true for arbitrary functions, so having a good approximation is quite useful. These software tools can approximate continuous  functions to machine precision, and computing with polynomials is fast.

With an approximate derivative or integral you can solve differential equations, and this has led to applications in neural networks as described in ["Universal Invariant and Equivariant Graph Neural Networks"](https://arxiv.org/pdf/1905.04943.pdf). For insight into how Chebfun works, see ["Chebfun: A New Kind of Numerical Computing"](http://www.chebfun.org/publications/platte_trefethen.pdf) by Platte and Trefethen. The Chebfun website has many [examples](https://www.chebfun.org/examples/),

- [Rational approximation of the Fermi-Dirac function](https://www.chebfun.org/examples/approx/FermiDirac.html) describing the distribution of energy states for systems of particles.
- [A drowning man and Snell's Law](https://www.chebfun.org/examples/calc/SnellsLaw.html) is derived from [Fermat's principle](https://en.wikipedia.org/wiki/Fermat%27s_principle) giving the refraction of light through different media.
- [Exponential, logistic, and Gompertz growth](https://www.chebfun.org/examples/applics/Gompertz.html).  ["The Boonie Conundrum"](https://wildpeaches.xyz/blog/the-boonie-conundrum/) used the Gompertz function to model the spread of a rumor.
- [Procrustes shape analysis](https://www.chebfun.org/examples/geom/Procrustes.html). We talked about the Greek myth of Procrustes in ["Designing the Model"](https://wildpeaches.xyz/blog/designing-the-model/).
- [Modeling infectious disease outbreaks](https://www.chebfun.org/examples/ode-nonlin/ModellingDiseases.html). In ["How Deep Is That Pool?"](https://wildpeaches.xyz/blog/how-deep-is-that-pool/)  we showed how to calculate the optimal pool size for COVID-19 testing.
- [Smoothies: nowhere analytic functions](https://www.chebfun.org/examples/stats/Smoothies.html). Weierstrass found [functions](https://sites.math.washington.edu/~conroy/general/weierstrass/weier.htm) that are continuous everywhere, but not differentiable anywhere.

You'll find plenty of nerdy-cool projects to try out. The only negative aspect of Chebfun is it requires the commercial software Matlab, but you may find an open-source version you prefer in [Chebfun-related projects](https://www.chebfun.org/about/projects.html). 

Polynomials aren't the only way to approximate functions. [Fourier approximation](http://www.ams.org/publicoutreach/feature-column/fcarc-199711) and [wavelets](https://nowak.ece.wisc.edu/SLT09/lecture16.pdf) are other methods, and Nick Trefethen has written the book, ["Approximation Theory and Approximation Practice"](https://my.siam.org/Store/Product/viewproduct/?ProductId=31254869) (partially available [online](https://people.maths.ox.ac.uk/trefethen/ATAP/ATAPfirst6chapters.pdf)). See the [Publications](https://www.chebfun.org/publications/) page for other references.

Something you should never do is fit a function $f$ with a high degree polynomial $p$ and then extrapolate $p$ beyond the limits of $f$. You only get a good fit over the interval $[a,b]$ where you defined $f$. 

<img src="/assets/img/curve-fitting-with-julia/function-approximation-with-polynomial.png" alt="function-approximation-with-polynomial" style="zoom:48%;" />

Here, the function
$$
f(x) = \frac{\sin(x)}{x}
$$
may be approximated by the polynomial
$$
p(x)=1 - \frac{x^2}{6} + \frac{x^4}{120}.
$$
Between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$ the fit is pretty good, but outside the interval, the fit is much worse.

## A Naive Approach to Approximations

Suppose you knew nothing about approximation theory and decided to try fitting one function (or data) with the sum of a simpler function? Marion King Hubbert

![marion-king-hubbert](/assets/img/curve-fitting-with-julia/marion-king-hubbert.jpg)

was a geologist, mathematician, and physicist who worked for Shell Oil, the USGS, and taught at Columbia, Stanford, and UC Berkeley. In 1956, he looked at oil production data and proposed a model for the amount of oil extracted from a field,
$$
Q(t) = \frac{Q_{\text{max}}}{1+ae^{-bt}}
$$
where $Q_{\text{max}}$ is the total quantity of oil to eventually be produced from the field, $Q(t)$ is the cumulative production up to time $t$, and constants $a$ and $b$ are parameters defined by local geology. This is the [logistic function](https://en.wikipedia.org/wiki/Logistic_function) first described by [Pierre Francois Verhulst](https://en.wikipedia.org/wiki/Pierre_Fran%C3%A7ois_Verhulst) to model population growth. The derivative of the logistic function produces a bell-shaped curve (or Gaussian function), which for Hubbert was the instantaneous rate of oil flow from the field.

<img src="/assets/img/curve-fitting-with-julia/logistic-and-bell-curve.png" alt="logistic-and-bell-curve" style="zoom: 50%;" />

Hubbert used the logistic function because initially with only a few wells production would be low, but as more came on line production should increase. Eventually, though, depletion would slow the rate of production. Hubbert thought his model could be extended to all U.S. oil production and predicted the peak of production would occur in 1970 for the lower 48 states.

<img src="/assets/img/curve-fitting-with-julia/hubbert-prediction-lower-48-us.png" alt="hubbert-prediction-lower-48-us" style="zoom:48%;" />

In 1976 Hubbert [predicted](https://www.youtube.com/watch?v=ImV1voi41YY) the world peak in production might happen as soon as 1995. A 2007 [study](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwim2Ya6upv0AhXgpXIEHajODgYQFnoECAIQAQ&url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F258260565_The_Rebound_Effect_An_Assessment_of_the_Evidence_for_Economy-Wide_Energy_Savings_from_Improved_Energy_Efficiency&usg=AOvVaw2k-j2HOFKDdzLd1UA-j422) by the UK Energy Resource Center found no geological reason to expect cumulative oil production should follow a logistic curve. They reported on field data suggesting peaks tended to happen at about 25% of the total production $Q_\text{max}$.

On the other hand, Ugo Bardi says [decline is faster than growth](https://thesenecaeffect.blogspot.com/2015/11/the-seneca-effect-why-decline-is-faster.html) and likes to quote Seneca,

> *"It would be some consolation for the feebleness of our selves and our works if all things should perish as slowly as they come into  being; but as it is, increases are of sluggish growth, but the way to  ruin is rapid." Lucius Anneaus Seneca, Letters to Lucilius, n. 91*

![bardi-seneca-cliff](/assets/img/curve-fitting-with-julia/bardi-seneca-cliff.png)

We can model individual fields using Gaussian functions,
$$
g(t) = \alpha e^{-\frac{(t-\mu)^2}{2 \sigma^2}}
$$
where $\alpha$ represents the peak amount produced, $\mu$ is the time of peak production and $\sigma$ determines the width of the bell curve. The [Ghawar](https://www.hydrocarbons-technology.com/projects/ghawar-oil-field/) field in Saudi Arabia produces tens of thousands of barrels per day ($\alpha$), has been in operation since $\mu = 1948$, and continues to this day so $\sigma$ is large. More recently, U.S. shale wells have increased production (the green curve departing from Hubbert's prediction), but their peaks are much lower and production drops [90% from the peak](https://www.postcarbon.org/david-hughes-shale-reality-check-2019/) after only three years. 

Is it possible to generate Bardi's Seneca Cliff with a series of Gaussians? Using [Julia](https://juliacomputing.com/), the Seneca Cliff can be modeled as

`f(x) = 0 < x <= 1 ? x : 0`

which asks the question, Is $x$ between $0$ and $1$? If it is, $f(x) = x$, otherwise it's zero.

<img src="/assets/img/curve-fitting-with-julia/cliff-function.png" alt="cliff-function" style="zoom:48%;" />

If oil production mimicked this $f(x)$, the rate would increase linearly until suddenly every oil well in the world stopped producing on the same day. This is about as likely as Zaphod Beeblebrox's [Infinite Improbability Drive](https://creative-analytics.corsairs.network/hitchhikers-guide-to-analytics-improbability-drive-b80001453e44), but we're just trying to build a simple mind-sized problem. "See, all my procedures are mind-sized bites", explains seventh-grader Robert in Seymour Papert's [Mindstorms](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxha2hsYWdoZWF8Z3g6NzgyOWYxNWNjMjE5ZjVh). 

First we need to create a vector of $x-$values,

`x = Array(-0.5:0.01:1.5));`

and then the corresponding $y-$values using a [list comprehension](https://sodocumentation.net/julia-lang/topic/5477/comprehensions)

`y = [f(x_i) for x_i in x];`

Next, for each value of the parameters $\alpha, \mu$ and $\sigma$ we can define a function $g$ and evaluate it over $x$,

`g(x,α,μ,σ) = sum( α[i] * exp( - (x-μ[i])^2/(2*σ[i]^2) ) for i = 1:n)`

or
$$
g(x,\alpha,\mu,\sigma) = \sum_{i=1}^n \alpha_i \exp \left( - \frac{(x-\mu_i)^2}{2 \sigma_i^2} \right).
$$


which gives an estimate for $y$ using the sum of $n$ Gaussians

`y_fit = [g(x_i,α,μ,σ) for x_i in x]`

Using the [LsqFit.jl](https://github.com/JuliaNLSolvers/LsqFit.jl) package, we'll get the best parameters to fit $f(x)$. LsqFit requires an initial estimate, so I chose
$$
\begin{aligned}
\alpha_i &= 1 - \frac{1}{2^i} \\
\mu_i &= 1 - \frac{1}{2^i} \\
\sigma_i &= \frac{1}{4^i}
\end{aligned}
$$
and then created an initial vector $p_0 = [\alpha; \mu; \sigma];$ with $n=4$. To get the fit, LsqFit uses the function curve_fit

`fit = curve_fit(gaussSum, x, y, p₀, lower = lb, upper = ub)`  

where `gaussSum` contains the definition for $g$, extracts the parameters from $p_0$, and generates $y\_\text{fit}$. The values of the parameters $\alpha, \mu$ and $\sigma$ are required to be between the lower bound `lb` and the upper bound `ub` which were set to zero and one for this example. 

The result is a pretty good approximation

 ![gaussian-fit](/assets/img/curve-fitting-with-julia/gaussian-fit.png)

You can see the peaks of each Gaussian with centers $\mu = [0.52, 0.80, 0.93, 0.99]$ and widths $\sigma = [0.218, 0.099, 0.041, 0.014]$. The optimal amplitudes are $\alpha = [0.51, 0.57, 0.63, 0.69]$. The function $f$ has a discontinuity at $x=1$, so we wouldn't be able to find a polynomial approximation. Smoothing over the discontinuity would help with the sum of Gaussians technique. This doesn't mean this model necessarily represents what's actually happening, but it shows that a sum of Gaussian-like production curves can still lead to a Seneca Cliff. The Julia code is on [GitHub](https://gist.github.com/XerxesZorgon/4bc86e874f27fd8fb6aced87735510a0).

This is a good experimental start to finding a method for fitting Gaussians to functions. Is there a pattern to the values for $\alpha, \mu$ and $\sigma$? Can you find a functional representation for the parameters that works for different $n$? What happens if you change $f$? Can you find a general rule giving the parameters for any $f$ and any $n$? Test your hypotheses by changing $f$ (line 17) and plotting the fit.

## The Proof

Here's the proof of Weierstrass' theorem. It's actually pretty easy to follow if you take it in mind-size bites. It comes from [Chris Tisdell](https://research.unsw.edu.au/people/professor-chris-tisdell), a mathematician at   [UNSW Sydney](https://www.unsw.edu.au/about-us). The proof below was taken from his [YouTube video](https://www.youtube.com/watch?v=MKVttK1uAXU) and is based on the proof by [Dunham Jackson](https://en.wikipedia.org/wiki/Dunham_Jackson).

![dunham-jackson](/assets/img/curve-fitting-with-julia/dunham-jackson.gif)

**Theorem**: Suppose $f: [a,b] \Rightarrow \mathbb{R}$ is a continuous function. Then we can construct a sequence of polynomials $P_n$ such that for any $\epsilon > 0$ there exists $N = N(\epsilon)$ such that for all $x \in [a,b]$ we have
$$
|P_n(x) - f(x)| < \epsilon, \text{ for all } n > N.
$$
**Proof**: Assume $0 < a < b < 1$. Extend $f$ to the entire real line by defining
$$
f(x) = \left\{ 
\begin{array}{ll}  
0, & \text{if } x \leq 0 \\
\frac{x}{a}f(a), & \text{if } 0 < x < a \\
f(x), & \text{if } a \leq x \leq b \\ 
\frac{1-x}{1-b}f(b), & \text{if } b < x < 1 \\
0, & \text{if } x \geq 1
\end{array}
\right.
$$
This just adds pieces to $f(x)$ so that it covers the entire real line by connecting $(0,0)$ to $(a,f(a))$ and $(b,f(b))$ to $(1,0)$, and then defining $f(x) = 0$ for any point outside the interval $[0,1]$, (and it's still continuous)

![f](/assets/img/curve-fitting-with-julia/f.png)

Now, create a sequence of constants (called a Landau integral),
$$
J_n := \int_{-1}^1 (1-u^2)^n du.
$$
Here are some examples of the Landau integral, and the numeric values over the interval $[-1,1]$. [Integration](https://en.wikipedia.org/wiki/Integral) gives the area below the curve and above the $x-$axis.

![landau](/assets/img/curve-fitting-with-julia/landau.png)


$$
\begin{aligned}
\int_{-1}^1 (1-u^2) du &= \left. \frac{u}{3}(3-u^2) \right|_{-1}^1 = \frac{2}{3} - \left(- \frac{2}{3} \right) = \frac{4}{3}\\

\int_{-1}^1 (1-u^2)^2 du &= \left. \frac{u}{15}(3u^4-10u^2+15) \right|_{-1}^1 = \frac{16}{15} \\

\int_{-1}^1 (1-u^2)^3 du &= \left. \frac{u}{35}(-5u^6+21u^4-35u^2+35) \right|_{-1}^1 = \frac{32}{35}.
\end{aligned}
$$
Next, define polynomials using these constants, 
$$
P_n(x) := \frac{1}{J_n}\int_0^1 f(t) \left( 1 - (t-x)^2 \right)^n dt.
$$
The first three polynomials of the sequence are
$$
\begin{aligned}
P_1(x) &= \frac{1}{J_1} \int_0^1 f(t) (1-(t-x)^2) dt \\
P_2(x) &= \frac{1}{J_2} \int_0^1 f(t) (1-(t-x)^2)^2 dt \\
P_3(x) &= \frac{1}{J_3} \int_0^1 f(t) (1-(t-x)^2)^3 dt.
\end{aligned}
$$
The idea is when $n$ gets to be big enough, $P_n(x)$ will very closely match $f(x)$. Notice that the degree of $P_n(x)$ is at most $2n$.

Since $f(x) = 0$ for every $x$ outside of the interval $[0,1]$ then
$$
\begin{aligned}
P_n(x) &= \frac{1}{J_n}\int_0^1 f(t) \left( 1 - (t-x)^2 \right)^n dt \\
&= \frac{1}{J_n}\int_{-1+x}^{1+x} f(t) \left( 1 - (t-x)^2 \right)^n dt \\
&= \frac{1}{J_n}\int_{-1}^1 f(x+u) \left( 1 - u^2 \right)^n du. \\
\end{aligned}
$$
Changing the limits of integration from 0 to 1 in the first line to $-1+x$ to $1+x$ in the second line doesn't really do anything for $x \in [0,1]$ except it now runs over $[-1,2]$ instead. In other words, let 
$$
g(t) = f(t) \left( 1 - (t-x)^2 \right)^n
$$
so
$$
\int_0^1 g(t) dt = \int_{-1+x}^0 g(t)dt + \int_0^1 g(t)dt + \int_1^{1+x} g(t)dt
$$
where the first and third terms are zero since $f(x)$ is zero on those intervals, leaving the middle term unchanged.

If we change variables, letting $u = t-x$ so $t = u+x$, then $dt = du$. The limits of the integral change from 
$$
\begin{aligned}
t &= -1 + x \Rightarrow u+x=-1+x \Rightarrow u = -1 \\
t &= 1+x \Rightarrow u+x=1+x \Rightarrow u = 1.
\end{aligned}
$$

Now, look at the difference between this polynomial approximation $P_n(x)$ and the function we want to approximate $f(x)$,
$$
\begin{aligned}
P_n(x) - f(x) &= \frac{1}{J_n}\int_{-1}^1 f(x+u) \left( 1 - u^2 \right)^n du - f(x) \\
&= \frac{1}{J_n}\int_{-1}^1 \left[ f(x+u) - f(x) \right] \left( 1 - u^2 \right)^n du 
\end{aligned}
$$
where we use the Landau integral
$$
\begin{aligned}
J_n &= \int_{-1}^1 (1-u^2)^n du \\
1 &= \frac{1}{J_n} \int_{-1}^1 (1-u^2)^n du \\
f(x) &= \frac{1}{J_n} \int_{-1}^1 f(x) (1-u^2)^n du. \\
\end{aligned}
$$
Since $f$ is continuous, then for any $\epsilon > 0$ there is a $\delta$ such that 
$$
| f(x+u) - f(x)| < \frac{\epsilon}{2}, \text{ for all } |u| < \delta.
$$
If $M$ is the maximum value of $|f|$ then
$$
|f(x+u) - f(x)| \leq 2M, \text{ for all } u
$$
since $|f(x+u)| \leq M$ and $|f(x)| \leq M$, then 
$$
|f(x+u)-f(x)| \leq |f(x+u)| + |f(x)| \leq M + M = 2M.
$$

For any $|u| > \delta$, then $u^2 > \delta^2$, so 
$$
1 \leq \frac{u^2}{\delta^2}
$$
and therefore
$$
|f(x+u)-f(x)| \leq \frac{2Mu^2}{\delta^2}.
$$
In either case, $|f(x+u)-f(x)|$ must be less than the sum of these two bounds, so
$$
|f(x+u)-f(x)| \leq \frac{\epsilon}{2} + \frac{2Mu^2}{\delta^2}.
$$
With these bounds, we can write
$$
\begin{aligned}
|P_n(x) - f(x)| &= \frac{1}{J_n}\int_{-1}^1 \left[ f(x+u) - f(x) \right] (1 - u^2)^n du \\
&\leq \frac{1}{J_n}\int_{-1}^1 \left[ \frac{\epsilon}{2} + \frac{2Mu^2}{\delta^2} \right] (1 - u^2)^n du \\
&= \frac{1}{J_n}\int_{-1}^1 \frac{\epsilon}{2} (1 - u^2)^n du + 
\frac{1}{J_n}\int_{-1}^1 \frac{2Mu^2}{\delta^2} (1 - u^2)^n du \\
&= \frac{\epsilon}{2} \frac{1}{J_n}\int_{-1}^1  (1 - u^2)^n du + 
\frac{2M}{\delta^2 J_n}\int_{-1}^1 u^2 (1 - u^2)^n du \\
&= \frac{\epsilon}{2} + \frac{2M}{\delta^2 J_n}\int_{-1}^1 u^2 (1 - u^2)^n du. \\
\end{aligned}
$$
Let 
$$
I_n = \int_{-1}^1 u^2 (1 - u^2)^n du
$$
and then using [integration by parts](https://www.mathsisfun.com/calculus/integration-by-parts.html) ($\int \mu d\nu = \mu \nu - \int \nu d \mu$) and letting 
$$
\begin{aligned}
\mu &= u \Rightarrow d \mu = 1 \\
d \nu &= u(1-u^2)^n \Rightarrow \nu = \frac{(1-u^2)^n(u^2-1)}{2(n+1)} = -\frac{1}{2(n+1)}J_{n+1}.
\end{aligned}
$$
So this means the integral $I_n$ can be bounded by $J_n/2n$,
$$
I_n = 0 + \frac{1}{2(n+1)}J_{n+1} < \frac{J_n}{2n}.
$$
In other words,
$$
\begin{aligned}
|P_n(x) - f(x)| &\leq \frac{\epsilon}{2} + \frac{2M}{\delta^2 J_n}I_n \\
&< \frac{\epsilon}{2} + \frac{2M}{\delta^2 J_n}\frac{J_n}{2n} \\
&= \frac{\epsilon}{2} + \frac{2M}{2n \delta^2}\\
&= \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
\end{aligned}
$$
so long as $n$ is sufficiently large such that 
$$
\frac{2M}{2n \delta^2} < \frac{\epsilon}{2}. \; \blacksquare
$$