---
title: Tools of Chaos
subtitle: Orbits
author: John Peach
hero:
  url: /assets/img/2022-09-28-tools-of-chaos-orbits/orbits.png
  alt:
tags: [math]
keywords: [chaos, orbits, Julia, Pluto]
socialImg: /assets/img/2022-09-28-tools-of-chaos-orbits/orbits.png
software: ['julia', 'pluto-jl', 'drwatson']
pullQuote:
  author: Buckaroo Banzai
  imgUrl: /assets/img/2022-09-28-tools-of-chaos-orbits/buckaroo-banzai.jpeg
  imgAlt: Illustration Headshot of Buckaroo Banzai.
  quote: No matter where you go, there you are.
---

[Home](https://wildpeaches.github.io/)

{% pullquote
  pullQuote.quote,
  pullQuote.author,
  pullQuote.imgUrl,
  pullQuote.imgAlt
%}

In chaos theory, an orbit is the sequence generated by repeatedly applying a function $f$ to the initial point $x_0$.

$$
S(x_0) = \{x_0,x_1,x_2, \ldots \} = \{x_0, f(x_0),f(f(x_0)), \ldots \}
$$

## Pluto Orbits

The previous post, [_Easy Chaos with Pluto_](https://wildpeaches.xyz/blog/easy-chaos-with-pluto/) showed how to run a Pluto notebook in Julia. A more in-depth introduction is on the MIT open course _[Introduction to Computational Thinking](https://computationalthinking.mit.edu/Spring21/)_ which describes the [first-time setup of Julia and Pluto](https://computationalthinking.mit.edu/Spring21/installation/) and provides a [Cheatsheets](https://computationalthinking.mit.edu/Spring21/cheatsheets/) page.

From _[JuliaDynamics](https://juliadynamics.github.io/JuliaDynamics/)_ we'll use _[ChaosTools](https://juliapackages.com/p/chaostools)_, _[DynamicalSystems](https://juliadynamics.github.io/DynamicalSystems.jl/dev/)_, _[InteractiveDynamics](https://juliadynamics.github.io/InteractiveDynamics.jl/dev/)_, and _[DrWatson](https://juliadynamics.github.io/DrWatson.jl/dev/)_. You should also add _[DifferentialEquations](https://diffeq.sciml.ai/stable/)_, [_Plots_](https://docs.juliaplots.org/stable/), and _[GLMakie](https://docs.makie.org/stable/explanations/backends/glmakie/index.html)_ with [_Pkg_](https://docs.julialang.org/en/v1/stdlib/Pkg/), the Julia package manager.

Download the Pluto notebook, _[Orbits.jl](https://gist.github.com/XerxesZorgon/aefccd2321bb1e717b648a66a8fe1187)_ used for this post.

## The Discrete and the Continuous

Chaotic orbits may be either discrete or continuous. In the previous post [_Easy Chaos with Pluto_](https://wildpeaches.xyz/blog/easy-chaos-with-pluto/) the [logistic function](https://www.geogebra.org/m/cjvqjcbh)

$$
x_{n+1} = rx_n(1-x_n)
$$

is an example of a discrete system. For $x_0 = 0.2$ and $r = 4$, this formula gives $x_1 = 0.64$. The sequence is $\{0.2, 0.64, 0.9216, 0.289, \ldots \}$ which makes discrete steps between iterations.

![logistic-map-fixed-point-iteration](/assets/img/2022-09-28-tools-of-chaos-orbits/logistic-map-fixed-point-iteration.png)

Continuous functions are often written in terms of time, such as the [Van der Pol equation](https://en.wikipedia.org/wiki/Van_der_Pol_oscillator)

$$
\begin{aligned}
\dot{x} &= y \\
\dot{y} &= \mu (1-x^2) y
\end{aligned}
$$

Pick any point $P = (x,y)$. The notation $\dot{x}$ and $\dot{y}$ are the derivatives of $x$ and $y$ which tells you how fast point $P$ is moving. Suppose $P = (1,3)$. Putting those coordinates into the Van der Pol equation gives

$$
\begin{aligned}
\dot{x} &= 3 \\
\dot{y} &= \mu(1 - 1^2) \times 3 = 0
\end{aligned}
$$

which says that the point $P$ is moving to the right with velocity $3$, and the $y$ velocity is zero. The time variable $t$ doesn't seem to show up, but $(\dot{x},\dot{y}$) is the velocity of $P$ which is a function of time. In some cases, you may see the notation $\dot{x} = \frac{dx}{dt}$ or $\dot{y} = \frac{dy}{dt}$ indicating that velocities are functions of time. The ratio gives the slope $m$ of the velocity,

$$
\frac{\dot{y}}{\dot{x}} = \frac{dy}{dt} / \frac{dx}{dt}.
$$

Starting at point $P_0$, the velocity is $v = (\dot{x},\dot{y})$, so for some small time step $\Delta t$ the next position would be $P_1 = P_0 + \Delta t (\dot{x},\dot{y})$. The time step can be as small as you like making the trajectory, or orbit, of $P_0$ a continuous function.

It isn't too difficult to generate the sequence of points in the orbit of the logistic function, but for the Van der Pol equation the velocity changes with every small time step, so keeping track of the orbit points becomes tedious. Fortunately, computers can handle these kinds of equations and plot the orbits for us.

## Chaotic Orbits

Orbits are chaotic if they have the following three properties:

- Sensitive dependence on initial conditions
- Topological transitivity
- Dense periodic orbits

One way to think about these properties is to imagine a car race. At the start they all have slightly different initial conditions. Some engines will be stronger than others, some drivers better than others, and only one car gets the pole position. Each car occupies a slightly different position on the track. These slight differences are the sensitive dependence on initial conditions that will determine the outcome of the race.

When the race starts the cars move down the track and begin to separate, each one completing laps at slightly different times than the others, and the paths that they take may be similar, but each car creates its own path. After enough time, the leaders will begin to lap the stragglers, and even though the cars separated at the start, they're now back together, which is a little like [topological transitivity](http://www.scholarpedia.org/article/Topologically_transitive).

The mathematical definition of [topological transitivity](https://mathworld.wolfram.com/TopologicallyTransitive.html) says that for any two regions $U$ and $V$ in the orbit, there is some positive integer $n$ such that some of the iterated points in $U$, or $f^n(U)$ can be found in $V$. This holds no matter how small the regions $U$ and $V$ are, and no matter where they are in the orbit.

Not all of the points in $U$ will map into $V$, and not all of the points in $V$ will be the result of iterated points in $U$, but there will be at least one point that does map. Another way to think about this is that every point in the orbit approaches every other point through iterations of $f$.

A consequence of topological transitivity is that an orbit is never two or more independent orbits. Even if the orbit appears to have distinct branches, eventually points in one branch will iterate into every other branch.

![topological-transitivity](/assets/img/2022-09-28-tools-of-chaos-orbits/topological-transitivity.png)

A [periodic orbit](http://www.scholarpedia.org/article/Periodic_orbit) is one where $f^n(x_0) = x_0$, so $x_0$ comes back to itself after $n$ iterations of $f$. The cars go around the track and return to the points where they started. The analogy with race cars isn't quite accurate because the lateral position on the track changes from lap to lap, but maybe you can imagine the propagation of points to be a little like a car race. Dense periodic orbits mean that at any point in the orbit of one point, you can always find the orbit of another point nearby.

These three properties of chaos were first described by [Robert L. Devaney](http://math.bu.edu/people/bob/) in his book, [_An Introduction to Chaotic Dynamical Systems_](https://www.researchgate.net/publication/355658928_An_Introduction_to_Chaotic_Dynamical_Systems). A popular non-mathematical book, [_Chaos: Making a New Science_](http://vattay.web.elte.hu/lectures/ChaosTheory/James%20Gleick%20-%20Chaos.%20Making%20a%20new%20science.pdf) was published by James Gleick in 1987. [Wolfram MathWorld](https://mathworld.wolfram.com/Chaos.html) says this about the definition of _chaos_,

> Gleick notes that "No one [of the chaos scientists he interviewed] could quite agree on [a definition of] the word itself," and so instead gives descriptions from a number of practitioners in the field. For example, he quotes Philip Holmes (apparently defining "chaotic") as, "The complicated aperiodic attracting orbits of certain, usually low-dimensional dynamical systems." Similarly, he quotes Bai-Lin Hao describing chaos (roughly) as "a kind of order without periodicity."

Chaotic systems are deterministic which means there is no random component to an orbit. Given a starting position, in principle, you can calculate exactly where a point will be $n$ steps into the future for any value of $n$. What makes them seem random is that two nearby starting points evolve in unpredictable ways.

## The Orbits Notebook

The _[Orbits.jl](https://gist.github.com/XerxesZorgon/aefccd2321bb1e717b648a66a8fe1187)_ notebook lets you experiment with both discrete and continuous dynamical systems using both built-in equations and systems you can write yourself. Using a built-in method is as simple as loading the dynamical system rule:

```julia
ds_henon = Systems.henon()
```

generating the trajectory

```julia
traj_henon = trajectory(ds_henon,100000)
```

and plotting the result

```julia
plot(traj_henon[:,1],traj_henon[:,2], seriestype = :scatter, aspect_ratio = :equal)
```

![henon-map](/assets/img/2022-09-28-tools-of-chaos-orbits/henon-map.png)

The equations for the Hénon Map are

$$
\begin{aligned}
x_{n+1} &= 1 - \alpha x_n^2 + y_n \\
y_{n+1} &= \beta x_n
\end{aligned}
$$

which could have been written in Julia as

```julia
function henon_rule(u, p, n)
  x, y = u # Current state
  α, β = p # Parameters
  xn = 1 - α*x^2 + y
  yn = β*x
  return SVector(xn, yn)
end
```

After setting the initial condition $u$ and the parameter vector $p$, we could generate the trajectory and plot it just as we did with the built-in version. The rule requires a step counter $n$ for discrete systems, or a time $t$ for continuous systems even if these variables don't show up in the equations.

The _[Orbits.jl](https://gist.github.com/XerxesZorgon/aefccd2321bb1e717b648a66a8fe1187)_ notebook is fully documented so you should be able to change parameters and extend equations or even create new systems. Have fun experimenting!

------

#### Image credits

Hero: [Iconic Arecibo Observatory’s 1000-feet telescope is beyond repair, will be demolished amid safety concerns](https://meaww.com/iconic-arecibo-observatory-1000-feet-telescope-beyond-repair-demolished-safety-concerns-decommission) [Mihika Basu](https://meaww.com/writer/mihika-b-0), MEAWW Nov 19, 2020.

Buckaroo Bonzai: [Buckaroo Bonzai](https://www.writeups.org/buckaroo-banzai-peter-weller/), Writeups.org

---

### References

- [Pluto on Github](https://github.com/fonsp/Pluto.jl)
- [DynamicalSystems.jl](https://juliadynamics.github.io/DynamicalSystems.jl/latest/)
- [Julia Dynamics](https://juliadynamics.github.io/JuliaDynamics/)
- [Chaos, Making a New Science](http://vattay.web.elte.hu/lectures/ChaosTheory/James%20Gleick%20-%20Chaos.%20Making%20a%20new%20science.pdf) by James Gleick
- [An Introduction to Chaotic Dynamical Systems](https://www.researchgate.net/publication/355658928_An_Introduction_to_Chaotic_Dynamical_Systems) by Robert L. Devaney
- [Robert Devaney's homepage](http://math.bu.edu/people/bob/) at Boston University
- [Santa Fe Institute Complexity Explorer](https://www.complexityexplorer.org/courses?status%5B%5D=active&status%5B%5D=upcoming&types%5B%5D=tutorial)
- [Introduction to Dynamical Systems and Chaos](https://www.complexityexplorer.org/courses/145-introduction-to-dynamical-systems-and-chaos) course at SFI
- [Nonlinear Dynamics](https://www.youtube.com/playlist?list=PLF0b3ThojznQ9xUDm-EbgFAnzdbeDVuSz) videos from SFI
- Wolfram MathWorld [Chaos](https://mathworld.wolfram.com/Chaos.html) page
- [Introduction to Computational Thinking](https://computationalthinking.mit.edu/Spring21/) MIT course
- DynamicalSystems.jl [examples](https://github.com/JuliaDynamics/JuliaDynamics/blob/master/tutorials/DynamicalSystemsIntro/DynamicalSystemsIntro.ipynb)
- [Introduction to DynamicalSystems.jl](https://www.youtube.com/watch?v=A8g9rdEfdNg) video
- JuliaDynamics.jl [tutorial notebooks](https://github.com/JuliaDynamics/JuliaDynamics/tree/master/tutorials/Youtube_JuliaLang_tutorial)
- [Creating an instance of a dynamical system](https://github.com/JuliaDynamics/JuliaDynamics/blob/master/tutorials/Youtube_JuliaLang_tutorial/1.%20DynamicalSystemsBase.ipynb), JuliaDynamics
- [What to do with a `DynamicalSystem`? Orbit Diagram](https://github.com/JuliaDynamics/JuliaDynamics/blob/master/tutorials/Youtube_JuliaLang_tutorial/2.%20ChaosTools.ipynb), JuliaDynamics
- [DynamicalSystems.jl: A Julia software library for chaos and nonlinear dynamics](https://joss.theoj.org/papers/10.21105/joss.00598), George Datseris
- [CHAOS ON THE INTERVAL a survey of relationship between the various kinds of chaos for continuous interval maps](https://arxiv.org/pdf/1504.03001.pdf), Sylvie Ruette
- [Chaos Definition and Classification](https://ww2.odu.edu/~skuhn/PHYS603/Coxe_Chaos.pdf), Alexander Coxe
- [The logistic map and you](https://www.gremble.xyz/posts/logistic-map-and-you.html), Jaco Stroebel
- [Dynamical Systems](http://www.scholarpedia.org/article/Encyclopedia_of_dynamical_systems), Scholarpedia
- [Periodic Orbit](http://www.scholarpedia.org/article/Periodic_orbit), Scholarpedia
- [Galactic Dynamics](http://www.scholarpedia.org/article/Galactic_dynamics), Scholarpedia
- [A Gentle Introduction to Chaos Theory](https://www.cantorsparadise.com/a-gentle-introduction-to-chaos-theory-93b9c821903b), Francesco Di Lallo
- [Chaos in the World](https://chaos-in-the-world.weebly.com/), Angela Zhao ([Discussion and Conclusion](https://chaos-in-the-world.weebly.com/discussion-and-conclusion.html))
- [Why do chaotic systems need dense periodic orbits?](https://math.stackexchange.com/questions/3263382/why-do-chaotic-systems-need-dense-periodic-orbits)
- [Chaos and Randomness](https://blog.evjang.com/2020/09/chaos.html), Eric Jang
- [Topological transitivity and recurrence as a source of chaos](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.522.4289&rep=rep1&type=pdf), Constantin P. Niculescu
- [On Devaney's Definition of Chaos and Dense Periodic Orbits](https://web.mat.bham.ac.uk/C.Good/research/pdfs/pn-dense.pdf), Syahida Che Dzul-Kifli and Chris Good
- [Topological Chaos: What may this mean?](https://hal.archives-ouvertes.fr/hal-00276838/document) Francois Blanchard
- [Periodic Orbits](http://www.physics.drexel.edu/~bob/PHYS750_NLD/ch4.pdf)
- [Lecture Notes](http://www.math.toronto.edu/burbulla/lecturenotes335/Chapter9.pdf), Burbulla
- [Orbits, Periodic Orbits, and Dense Orbits – Oh My!](http://www.goodmath.org/blog/2009/11/05/orbits-periodic-orbits-and-dense-orbits-oh-my/), Mark Chu-Carroll
- [Sarkovsky’s theorem](https://www.johndcook.com/blog/2021/04/10/sarkovskys-theorem/), John D. Cook
- [Dynamical System](https://en.wikipedia.org/wiki/Dynamical_system#Discrete_dynamical_system), Wikipedia
- [Standard Map](https://en.wikipedia.org/wiki/Standard_map), Wikipedia
- [Lotka-Volterra Equations](https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations), Wikipedia
- [Van der Pol oscillator](https://en.wikipedia.org/wiki/Van_der_Pol_oscillator), Wikipedia

## Code for this article

[Orbits.jl](https://gist.github.com/XerxesZorgon/aefccd2321bb1e717b648a66a8fe1187) - A Pluto notebook to study chaos
