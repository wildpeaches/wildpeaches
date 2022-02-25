---
title: Julia Sets in Julia
subtitle: 
author: John Peach
lede: 
hero:
  url: /assets/img/julia-sets-in-julia/julia_ranged_a.gif
  alt:
tags: [math]
keywords: [Julia sets, Julia language, complex numbers, iterated functions]
socialImg: /assets/img/julia-sets-in-julia/julia_ranged_a.gif
---

## Gaston Julia

Gaston Julia was born on the 3rd of February, 1893 in Sidi bel Abbès, Algeria to Delorès Delavent and Joseph Julia, a mechanic. Gaston became interested in music and mathematics at an early age, and excelled in both, settling on the violin as his favorite instrument. 

In 1901, the family moved to Oran on the coast of Algeria where he enrolled in the Lycée, eventually graduating with distinction in the baccalaureate examinations of science, modern languages, philosophy, and mathematics. He left Algeria for Paris and received a scholarship to the École Normale Supériore in 1911. In 1914 Germany declared war on France and Julia was called up for service with the 57th  Infantry Regiment at Libourne. 

Deployed to the Western Front, the following is a report of the action, and Julia's injury that cost him his nose.

*January 25, 1915, showed complete contempt for danger. Under an extremely violent bombardment, he succeeded despite his youth (22 years) to give a real example to his men. Struck by a bullet in the middle of  his face causing a terrible injury, he could no longer speak but wrote  on a ticket that he would not be evacuated. He only went to the  ambulance when the attack had been driven back. It was the first time  this officer had come under fire.*

For the remainder of his life, Julia wore a leather strap to cover the missing nose. 

![gaston-julia](/assets/img/julia-sets-in-julia/gaston-julia.png)

Julia married Marianne Chausson in 1918. She was the nurse who attended to him after his injury, and the daughter of composer Ernest Chausson. He had completed his Ph.D. in mathematics the year before, under [Émile Picard](https://mathshistory.st-andrews.ac.uk/Biographies/Picard_Emile/), [Henri Lebesgue](https://mathshistory.st-andrews.ac.uk/Biographies/Lebesgue/), and [Pierre Humbert](https://mathshistory.st-andrews.ac.uk/Biographies/Humbert_Pierre/). 

At age 25, he published a 199-page manuscript, [*Mémoire sur l'iteration des fonctions rationelles*](http://sites.mathdoc.fr/JMPA/PDF/JMPA_1918_8_1_A2_0.pdf), *(Memoir on the iteration of rational functions)* which brought him instant fame in mathematical circles and earned him the *Grand Prix des Sciences Mathématiques* of the [French Academy of Sciences](https://en.wikipedia.org/wiki/French_Academy_of_Sciences). 

An iterated function is applied repeatedly to the previous solution, and a rational function is one like
$$
f(x) = \frac{P(x)}{Q(x)}
$$
where $P(x)$ and $Q(x)$ are polynomial functions. $Q(x)$ can't be zero, but it can be $1$, meaning that $f(x) = P(x)$.

## Function iterations

Iterating a function is pretty simple. Suppose
$$
f(x) = x + 1.
$$
If you start with $x = 0$, then $f(0) = 1$. Now put $1$ into the function to get $f(1) = 2$. This goes on forever, $1,2,3, \ldots$ A more interesting function  is 
$$
f(x) = \begin{cases} \frac{x}{2} & \text{if} \mod(x,2) = 0 \\ 3x+1 &  \text{if} \mod(x,2) = 1. \end{cases}
$$
In other words, if $x$ is even, divide it by $2$, but if it's odd, multiply by $3$ and add $1$. Any number that's a power of $2$ immediately collapses down to $1$, for example, $x_0 = 8 \Rightarrow f(8) = 4 \Rightarrow f(4) = 2 \Rightarrow f(2) = 1$. Then you get stuck in the loop $4,2,1,4,2,1, \ldots$  If you start with $3$ you get the sequence $\{3,10,5,16,8,4,2,1\}$. 

Can you find a starting number that doesn't wind up at $1$? Nobody knows for sure, but it's thought that every sequence eventually winds down to $1$. This is known as the [Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture), named for mathematician Lothar Collatz who first proposed the conjecture in 1937. It's also called the Hailstone Problem because of the way the number sequence jumps up and down.

# Curses, FOILed Again!

Remember the FOIL method from high school algebra? If you want to expand $(x+2)(x-3)$ using the FOIL method, you multiply the First two terms, $x \times x = x^2$, then the Outer terms, $x \times -3 = -3x$, the Inner ones, $2 \times x = 2x$, and finally the Last two, $2 \times -3 = -6$ to get
$$
(x+2)(x-3) = x^2-x-6.
$$
![curses-foiled-again](/assets/img/julia-sets-in-julia/curses-foiled-again.jpg)

Snidely Whiplash often said, "Curses, foiled again!" on the [Rocky and Bullwinkle show](https://www.imdb.com/title/tt0052507/), but he may not have been referring to algebra. Here's a picture of Rocky, Bullwinkle, and Captain Peachfuzz. Because reasons.

![rocky-bullwinkle-peachfuzz](/assets/img/julia-sets-in-julia/rocky-bullwinkle-peachfuzz.jpg)

What's the square root of negative one $(\sqrt{-1})$? For a long time, mathematicians thought there was no solution to this problem because when you multiply two positive numbers together you get a positive number, and when you multiply two negative numbers together you also get a positive number, so there can't be an $x$ such that $x \times x = x^2 = -1$. But, in the 17th century, [René Descartes](https://en.wikipedia.org/wiki/René_Descartes) named the solution to $\sqrt{-1}$ as $i$, an imaginary, fictitious, and useless number. 

Since then, we've found plenty of uses for these otherwise useless numbers. Combine them with real numbers, the kind we're used to, and you get complex numbers like $4 + 3i$ which is $4$ parts real and $3$ parts imaginary. You can plot complex numbers as points, using the $x-$axis for the real part, and the $y-$axis for the imaginary part. Here's a plot of $z_1 = 4 + 3i$:



  ![complex-number](/assets/img/julia-sets-in-julia/complex-number.png)

Suppose you wanted to multiply $z_1$ by another complex number $z_2 = 2 + 5i$. Just use the FOIL method but with the complex numbers,
$$
\begin{aligned}
z_1 \times z_2 &= (4 + 3i) \times (2+5i) = 4 \cdot 2 + 4 \cdot 5i + 3i \cdot 2 + 3i \cdot 5i \\
&= 8 + 20i + 6i + 15i^2 \\
&= (8-15)+26i \\
&= -7 + 26i.
\end{aligned}
$$
Remember that $i^2 = -1$, so multiplying the two imaginary parts together gives the negative of the product, ignoring the $i$'s. It might make more sense to do the first and last together to get the new real part, and then the inner and outer parts for the new imaginary. You could call it the FLIO method.

In the plot, the real part of $z_1$ is $4$, which is drawn as the vector $u$, and the imaginary part is $3$, drawn as the vector $v$. These two vectors form the adjacent and opposite sides of a right triangle with angle $\theta$. Using the [Pythagorean Theorem](https://www.britannica.com/science/Pythagorean-theorem), we can calculate the length of the hypotenuse, $r = \sqrt{4^2+3^2} = \sqrt{25} = 5$. The sides $u$ and $v$ can be written in terms of $r$ and $\theta$ as
$$
\begin{aligned}
u &= r \cos \theta \\
v &= r \sin \theta.
\end{aligned}
$$

## A Most Beautiful Equation

Leonard Euler (see our previous post, ["Seven Bridges for Seven Truckers"](https://wildpeaches.xyz/blog/seven-bridges-for-seven-truckers/)) discovered an amazing property of complex numbers,
$$
e^{i \theta} = \cos \theta + i \sin \theta,
$$
where $e$ is the base of the natural logarithm. The proof is pretty simple. Define $f(\theta)$ as
$$
f(\theta) = \frac{\cos \theta + i \sin \theta}{e^{i\theta}} = e^{-i \theta} (\cos \theta + i \sin \theta).
$$
The reason for choosing this particular function is that we will show that $f(\theta) = 1$ for every $\theta$, meaning that the numerator and denominator are the same everywhere. Using the product rule of differentiation,
$$
\begin{aligned}
f'(\theta) &= \frac{d}{d \theta} e^{-i \theta} (\cos \theta + i \sin \theta) \\
&= e^{-i \theta} (-\sin \theta + i \cos \theta) - ie^{-i \theta} (\cos \theta + i \sin \theta) \\
&= e^{-i \theta} (-\sin \theta + i \cos \theta) - e^{-i \theta} (-\sin \theta + i \cos \theta) = 0. \\
\end{aligned}
$$
Since the derivative of $f(\theta) = 0$ for every $\theta$, then $f(\theta)$ is a constant. The derivative of a function gives the slope of the function at every point, so a derivative of zero means the function has zero slope, in other words, it's a straight line parallel to the $x-$axis at some constant distance from the axis. 

We can calculate the value of this constant at any $\theta$, and the easiest one is $\theta = 0$, where $f(\theta) = 1$ since $e^{-i \cdot 0} = 1$, $\cos 0 = 1$, and $\sin 0 = 0$. In other words, $f(\theta) = 1$ for every $\theta$, which completes the proof.

The angle $\theta$ is measured from the $x-$axis, so $\theta = 0$ is along the positive real number line, $\theta = \frac{\pi}{2}$ is the positive imaginary axis, $\theta = \pi$ represents negative real numbers and $\theta = \frac{3\pi}{2}$ points along the negative imaginary axis. 

![e-i-pi](/assets/img/julia-sets-in-julia/e-i-pi.png)

Looking at $z_2$, we see that when $\theta = \pi$, $e^{i \theta} = e^{i \pi} = -1$, which gives the most beautiful equation,
$$
\LARGE e^{i \pi} + 1 = 0.
$$
Physicist Richard Feynman said that this is "the most remarkable formula in mathematics" because it contains $e$, the base of natural logarithms, the imaginary number $i$, $\pi$, the constant relating the radius of a circle to its circumference and area, $1$ the first natural number, and $0$ the center of the mathematical universe.

## Iterations on a Complex Number

Julia wondered what would happen if he iterated a function like $f(z) = z^2 +c$ where both $z$ and $c$ could be complex. If $z = 0$ and $c = 1-i$, then the first few iterations become
$$
\begin{aligned}
z &= 0 \\
z &= 1-i \\
z &= 1-3i \\
z &= 7-7i \\
z &= 1+97i \\
\end{aligned}
$$
If you start with a smaller $c$, say $c = -0.79 + 0.15i$, the values of $z$ jump around, but they stay relatively small. Another way to look at the iterations is to plot several steps of the iterations at different starting points $z_0$ and additive constant $c$. 

Since the first iterate squares the initial value of $z_0$ and adds $c$, then $z_0 = 1$ and $z_0 = -1$ will meet at $c+1$ after the first step. The same thing happens for $z_0 = \pm i$. 

In this plot, $z_0 = (0.1+e^{i\theta})/2$  for $\theta = 30,120,210,300$ degrees, and $c = -0.1+0.1i$.

![several-iterates](/assets/img/julia-sets-in-julia/several-iterates.png)

Adding $0.1$ shifts the starting points a little bit to prevent overlapping trajectories, and dividing by $2$ is equivalent to setting $r=\frac{1}{2}$ in the $u$ and $v$ vectors except for the slight shift of the starting point. If you set $z_0 = 0.1+e^{i\theta}$, eventually all of the trajectories escape towards infinity.

![several-iterates-escape](/assets/img/julia-sets-in-julia/several-iterates-escape.png)

What is it that keeps some points from getting away, while others escape? The *norm* of a vector is the length of the vector and as we saw above, the length is easily calculated using the Pythagorean theorem. A shorthand notation for the *norm* is a pair of vertical lines around the vector or complex number,
$$
\text{norm}(z) = |z| = \sqrt{u^2+v^2}.
$$
After a single iteration, $z$ becomes $z^2 + c$, and the length or norm is $|z^2+c|$. One way to check if the iterates are tending towards infinity is to calculate the length of each iterate. In the case $\theta = 30 \degree = 0.52 \text{ radians}$ (without dividing by $2$), the norm of the iterates is
$$
z = [1, 1.046, 1.235, 1.428, 2.153, 4.508, 20.177, 407.001, 165649.888, 2.744e10].
$$
Using the same starting point, and now dividing by $2$, the iterates are
$$
z = [0.5, 0.317, 0.231, 0.091, 0.134, 0.129, 0.128, 0.129, 0.128, 0.128].
$$
Not only do the iterates remain small, but they get closer to $0.128$ (after rounding). 

What happens if you write $z = re^{i \theta}$ and want to find $z^2$? This is very easy because 
$$
\begin{aligned}
z^2 &= re^{i \theta} \times re^{i \theta} \\
&= r^2 \times (e^{i \theta})^2 \\
&= r^2 e^{2i \theta}.
\end{aligned}
$$
How long is the new vector $z^2$? The $e^{2i \theta}$ part measures the angle so it doesn't contribute to the length, which means that the length of $z^2$ is simply $r^2$.    

If we choose $c$ such that $|c| < 1$, then $|z^2+c|$ will be greater than $1$ if $|z^2| > 2$. If $r > 1$ then $r^2$ will grow at each step. If you think of $z^2$ and $c$ as vectors, then the smallest value for $r$ is when $z^2$ and $c$ point in opposite directions.

![r](/assets/img/julia-sets-in-julia/r.png)

In most cases, $z^2$ and $c$ won't point in opposite directions, so $r$ will be even larger and the trajectory will escape faster, but we can check to see if $z^2 > 2$ and stop iterating when we get to that value.

Vectors are added together by connecting the point of $u$ to the tail of $v$ to get $z = u+v$. Subtracting $v$ from $u$ turns the direction of $v$ around.

![vector-addition](/assets/img/julia-sets-in-julia/vector-addition.png)

Using the FOIL method, we can calculate $z^2$ for combinations of positive and negative vectors $u$ and $v$. 
$$
\begin{aligned}
z = u + vi \Rightarrow z^2 = (u^2-v^2) + 2uvi\\
z = u - vi \Rightarrow z^2 = (u^2-v^2) - 2uvi\\
z = -u + vi \Rightarrow z^2 = (u^2-v^2) - 2uvi\\
z = -u - vi \Rightarrow z^2 = (u^2-v^2) + 2uvi.\\
\end{aligned}
$$
In the picture above, you can see that the red $z$ vectors have the same $z^2$, as do the green vectors. After a single iteration, the new value of $z=u+v$ is the same as the new value of $z = -u-v$, just as the green vectors coincide. If $u+v$ results in an escaping trajectory, then so does $-u-v$. 

## Julia Sets

Gaston Julia wanted to find the boundary between the points that escaped and those that didn't. The boundary is now called the Julia Set. The $z$ points are taken from all points in the complex plane, and the set changes depending on the initial choice of the parameter $c$. 

![julia-set-c=-0.1+0.1im](/assets/img/julia-sets-in-julia/julia-set-c=-0.1+0.1im.png)

In this image, $c = -0.7269 + 0.1889i$, and the complex numbers range over $[-1.6,1.6] \times [-1.6,1.6]i$. The image is composed of 1281 points in each dimension, and for each point $z$, the number of iterations needed to exceed $|z| > 2$ is stored in a matrix. The black regions are where $|z|$ starts greater than $2$, and the colored points are counts. On the right side, the color bar indicates the number of iterations, up to 1000, before the norm of $z$ becomes large.

Another example shows that for $c = -0.20509091 + 0.71591i$, the points either are clearly in the set or outside. At the top of this post is a plot of the Julia set for values of $c$ from $c = −0.29609091+0.62491i$ to $c = -0.20509091 + 0.71591i$, taken from Benjamin Badger's [Julia Sets page](https://blbadger.github.io/julia-sets.html).

![julia-set-c=-0.20509091 + 0.71591i](/assets/img/julia-sets-in-julia/julia-set-c=-0.2+0.7im.png)

The [code](https://gist.github.com/XerxesZorgon/5205facbb7c7ef02999e27ead70a5d59) (on Github) to generate these images is very straightforward. An `iterCounts` array is initialized to zero, and for each $z$, the value of $|z_n| = |z_{n-1}^2+c|$ is computed. The iteration is repeated until either $|z_n| > 2$ or the number of iterations reaches 1000. The array `iterCounts` is displayed as a [heatmap](https://en.wikipedia.org/wiki/Heat_map) to make the image. 

The code is written in the [Julia](https://julialang.org/) language because Julia is easy to learn and extremely fast. In fact, Julia is so fast that I didn't bother to take advantage of symmetry. 

In the figure above, there are 1.6 million points and each point requires one multiplication and one addition to get $z_n = z_{n-1}^2 + c$, and two more multiplications and an addition followed by a square root to get the norm of $z$. Even if only a quarter of the points got to the limit of 1000 iterations, somewhere near one billion calculations were required. In Julia, the whole process completed in just a little over 10 seconds even with inefficient code.

```julia
function plotJulia(c,xRng = [-1.6,1.6], yRng = [-1.6, 1.6])
    # Array of iteration counts
    nx = 1281
    ny = 1281
    iterCounts = zeros(nx,ny)
    # Locations 
    xLocs = range(minimum(xRng),stop = maximum(xRng),length = nx)
    yLocs = range(minimum(yRng),stop = maximum(yRng),length = ny)
    # Loop over x,y locations iterating until maxIter reached, or |z|² > 4
    maxIters = 1000
    for j = 1:nx
        for k = 1:ny
            z = xLocs[j] + yLocs[k]im
            while iterCounts[j,k] < maxIters && norm(z) < 2
                z = z^2 + c
                iterCounts[j,k] += 1
            end
        end
    end

    # Display Julia set as a heatmap
    display(heatmap(iterCounts'))

    # Return array of iteratations
    return iterCounts
   
end
```

Gaston Julia never saw the images that we can now quickly produce in the Julia language, but he was able to work out many of the details and provide great insight into the structure of Julia sets.



---

### References

* ["Mémoire sur l’itération des fonctions rationnelles"](http://sites.mathdoc.fr/JMPA/PDF/JMPA_1918_8_1_A2_0.pdf), Gaston Julia
* [Gaston Julia](https://mathshistory.st-andrews.ac.uk/Biographies/Julia/), MacTutor History of Mathematics Archive
* ["Computers, Fractals and Dynamics: Computer Experiments in Mathematics"](https://www.thriftbooks.com/w/chaos-fractals-and-dynamics---computer-experiments-in-mathematics_robert-l-devaney/351327/item/4717789/?gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF6gvQ4KqvncCgSz3-gKDx7u2XGPeX35df4JdTBv5uG2r7RbtwE9uzMaAqoMEALw_wcB#idiq=4717789&edition=3603665), Robert L. Devaney
* ["Chaos, Fractals and Dynamics: Computer Experiments in Mathematics"](https://www.youtube.com/watch?v=TVfn6P4Z4-8), Robert L. Devaney (YouTube Video)
* ["An Introduction to Julia and Fatou Sets"](http://www.math.stonybrook.edu/~scott/Papers/India/Fatou-Julia.pdf), Scott Sutherland.
* ["Fractal Geometry: The Mandelbrot and Julia Sets"](https://www.math.uchicago.edu/~may/VIGRE/VIGRE2009/REUPapers/Avalos-Bock.pdf), Stephanie Avalos-Bock
* ["Complex Dynamics, the Julia Set."](http://www.uwosh.edu/faculty_staff/kuennene/Chaos/ChaosNotes8.pdf), [Eric Kuennen](http://www.uwosh.edu/faculty_staff/kuennene/)
* ["Understanding Julia and Mandelbrot Sets"](https://www.karlsims.com/julia.html), Karl Sims
* [Julia Sets](https://blbadger.github.io/julia-sets.html)
* [Julia Language Plots.jl](https://docs.juliaplots.org/latest/generated/gr/) and [plot attributes](https://docs.juliaplots.org/latest/attributes/#attributes)
* [Wikipedia](https://en.wikipedia.org/wiki/Julia_set) page on Julia sets
* [The Julia Programming Language](https://julialang.org/)
* [Timing in Julia](https://www.juliabloggers.com/timing-in-julia/)
* [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)
