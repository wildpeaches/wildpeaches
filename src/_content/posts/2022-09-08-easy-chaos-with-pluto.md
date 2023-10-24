---
title: Easy Chaos with Pluto
subtitle: Simply Making a Mess of Everything 
author: John Peach
lede: 
hero:
  url: /assets/img/2022-09-08-easy-chaos-with-pluto/lorenz3.png
  alt:
tags: [math,chaos theory]
keywords: [Pluto notebook, logistic function, autocorrelation, phase portrait]
socialImg: /assets/img/2022-09-08-easy-chaos-with-pluto/lorenz3.png
---

## Getting Started with Pluto

[Pluto](https://juliapackages.com/p/pluto) is a notebook environment for [Julia](https://julialang.org/). Install Julia and start it to get a command window. The first step is to add some [packages](https://docs.julialang.org/en/v1/stdlib/Pkg/) we'll use for this project. Type "]" at the prompt (without the quotes) to enter the package manager. The packages you'll need are:

```julia
add Pluto
add PlutoUI
add Plots
add StatsBase
```

It may take a few minutes as Julia checks and downloads all necessary dependencies. When everything has finished, type "Ctrl-C" to exit the package manager. In the Julia command window, type "Using Pluto" followed by "Pluto.run()":

![julia-start-pluto](/assets/img/2022-09-08-easy-chaos-with-pluto/julia-start-pluto.png)

A new tab will open in your browser:

![welcome-to-pluto](/assets/img/2022-09-08-easy-chaos-with-pluto/welcome-to-pluto.png)

Download [EasyChaos.jl](https://gist.github.com/XerxesZorgon/3300e57441ecf83640361a6d7f287ba7) from Github and then enter the path in Pluto below "Open from file:". The notebook should look very much like the remainder of this post.

## *Easy Chaos!*

Pluto is a programming environment for *Julia*, designed to be **interactive** and **helpful**. Changes made anywhere in the notebook affect the entire notebook. Pluto is reactive so you don't need to recalculate cells.

This is useful in studying chaos because small changes made to a  function can have big effects. You can define a function, run it, and  immediately see the effects.

## *A Linear Equation*

The equation of a line is $y = mx + b$ where $m$ is the slope and $b$ is the $y-$intercept. The slope is how much $y$ changes for each unit change in $x$. For any starting point $x$ if you move one step to the right to $x + 1$, the new $y-$value becomes $m(x+1) + b = mx + m + b$. Subtract $y = mx + b$ and all that's left is $m$. 

A step by $1$ in the $x-$direction gives a change by $m$ in the $y-$direction, which is the slope of the line.

If $x=0$, then $y = m \times 0 + b = b$ so the $y-$intercept is $b$. Since two points define a line, then start at $b$ on the $y-$axis, move to $x=1$ and add $m$ (or subtract $m$ if $m$ is negative) to get a second point. Draw your line through the two points.

The line can also be defined as a function,
$$
f(x) = mx + b.
$$
Let's start by plotting some lines.

![using-PlutoUI-Plots](/assets/img/2022-09-08-easy-chaos-with-pluto/using-PlutoUI-Plots.png)

We need a way to change the values of $m$ and $b$. First, we'll make a slider for the slope $m$ and set the initial value to $m=1$.

![m-slider](/assets/img/2022-09-08-easy-chaos-with-pluto/m-slider.png)

Next, we'll make a slider for $b$ and set it to $b=0$. Both can be varied between $-5$ and $5$.

![line-plot](/assets/img/2022-09-08-easy-chaos-with-pluto/line-plot.png)

Notice that the origin of the plot is in the center. Move the sliders for $m$ and $b$ to get a new plot. Interesting, but not chaos.

## *A Little Chaos*

Chaos is doing nearly the same thing over and over and expecting wildly different results. Let's start with the linear equation above, with $m = 1$ and $b = -1$. 
$$
y = f(x) = x - 1.
$$
Starting at $x = 1$, the output of the function is $y=0$. Using this new value as the input, $f(0) = -1$. If you do this several times you get the uninteresting sequence
$$
x = \{1,0,-1,-2,-3, \ldots \}.
$$
Instead of calculating $x_1 = mx_0 + b$ and then $x_2 = mx_1 + b$ and so on, we can do this in a function *iter_f* with inputs $m,b,x_0,n$ where $x_0$ is the starting point, and $n$ is the number of iterations.

![iter_f](/assets/img/2022-09-08-easy-chaos-with-pluto/iter_f.png)

We can try this function with the equation $y = x - 1$ starting at $x_0 = 0.4961$ and $x_1 = 0.4962$ for $n = 10$ iterations.

![linear-results](/assets/img/2022-09-08-easy-chaos-with-pluto/linear-results.png)

Taking the difference between the outputs gives an uninteresting answer:

![linear-differences](/assets/img/2022-09-08-easy-chaos-with-pluto/linear-differences.png)

Now, let's change the equation slightly to $f(x) = 2x - 1$, and use the same starting points as before.

![linear-2x](/assets/img/2022-09-08-easy-chaos-with-pluto/linear-2x.png)

The difference between these sequences is:

![differences-2x](/assets/img/2022-09-08-easy-chaos-with-pluto/differences-2x.png)

Multiply the differences by $10000$ to make the changes more obvious:

![differences-2x-10000](/assets/img/2022-09-08-easy-chaos-with-pluto/differences-2x-10000.png)

This is a little bit surprising, but notice that each number is twice the previous number. It looks like the sequence $\{ 2^0, 2^1, 2^2, \dots 2^9 \}$ and could be written as $2^{[0:9]}$:

![differences-pow2](/assets/img/2022-09-08-easy-chaos-with-pluto/differences-pow2.png)

Let's write out several iterations of $y = mx + b$ in terms of the starting point $x_0$.

$$
\begin{aligned}
x_1 &= m x_0 + b \\
x_2 &= m x_1 + b = m (m x_0 + b) + b = m^2 x_0 + m  b + b = m^2 x_0 + (m+1) b \\
x_3 &= m x_2 + b = m (m^2 x_0 + (m+1) b) + b = m^3 x_0 + (m^2 + m + 1) b \\
x_4 &= m x_3 + b = m (m^3 x_0 + (m^2 + m  +1) b) + b = m^4 x_0 + (m^3 + m^2 + m + 1) b \\
\end{aligned}
$$
The $n^{th}$ iterate in terms of $x_0$ is

$$
x_n = m^n x_0 + (m^{n-1} + m^{n-2} + \cdots + 1) b.
$$


What happens if we make a small change in $x_0$? If we change $x_0$ by a small amount, $\epsilon$, then

$$
\tilde{x}_n = m^n (x_0 + \epsilon) + (m^{n-1} + m^{n-2} + \cdots + 1) b
$$


and the difference between the two results after $n$ iterations is (the term with $b$ is the same for both)
$$
\tilde{x}_n - x_n = m^n (x_0 + \epsilon) - m^n x_0 = m^n \epsilon.
$$
So long as $|m| > 1$ then we can make $m^n \epsilon$ as big as we like by iterating enough times, no matter how small $\epsilon$ is. A small change to the initial value of $x_0$ produces as big a change as you like in the final value, $x_n$.

There you have it. Chaos!

## *Moar Chaos*

With a slightly more complicated equation, chaos becomes even more interesting. Instead of iterating a linear equation, let's use the logistic function (see [The Growing Gap](https://wildpeaches.xyz/blog/the-growing-gap/) for an application of logistic functions)
$$
F(x) = cx(1-x).
$$
For $c = 4$, this is an inverted parabola that has a maximum at $(0.5,1.0)$. If you draw the line $y=x$ it intersects the parabola at $(0,0)$ and $(0.75,0.75)$. This line is useful for following the iterations or *orbits* of the function.

Start with a point on the $x-$axis, say $x_0 = 0.2$ (point *A*). Find the value of $F(0.2) = 4 \times 0.2 \times (1 - 0.2) = 0.64$. This point *B* is on the parabola above point *A*. 

We want to iterate $F(x)$ by using the $y-$coordinate of *B* as the next input. We could calculate $F(0.64) = 4 \times 0.64 \times (1 - 0.64) = 0.9216$ and we'll want to write a Julia function to do that, but it's also useful to see how the orbit evolves.

Draw a horizontal line until you get to the line $y=x$ at point *C*. Because *C* is on the $45 \degree$ line, then $x_C = y_C$ so the coordinates are $C = (0.64,0.64)$. The $x-$coordinate of *C* is the $y-$coordinate of *B*, so *C* becomes the next iterate. From *C*, draw a vertical line until you intersect the parabola at *D* which has coordinates $(0.64,0.9216)$. 

<img src="/assets/img/2022-09-08-easy-chaos-with-pluto/logistic-orbits.png" alt="logistic-orbits" style="zoom:50%;" />

This process can be repeated as often as you like and will show the trajectory of the function $F(x)$.

## *An Iterator for the Logistic Function*

Like the *iter_f* function above, we can write a Julia function to iterate the logistic function. The inputs will be the starting point, $x_0$, the constant $c$, and the number of iterations $n$ with a default value of $n=100$. 

This new function, *iter_logistic* will return the orbit, $y$.

![iter_logistic](/assets/img/2022-09-08-easy-chaos-with-pluto/iter_logistic.png)

Let's try an example with $x_0 = 0.2$

![slider-x0](/assets/img/2022-09-08-easy-chaos-with-pluto/slider-x0.png)

and $c = 4$.

![slider-c](/assets/img/2022-09-08-easy-chaos-with-pluto/slider-c.png)

![y-logistic](/assets/img/2022-09-08-easy-chaos-with-pluto/y-logistic.png)

Now we can plot the trajectory:

![plot-y-logistic](/assets/img/2022-09-08-easy-chaos-with-pluto/plot-y-logistic.png)

Try adjusting the value for $c$. When $c=4$ the plot seems pretty chaotic. What happens if you change $x_0$ from $0.2$ to $0.19$? This should show that the trajectory is sensitive to the initial value of $x_0$.

Next, try $c = 0.5$ and set $x_0 = 0.1$. Is the plot chaotic? Is it sensitive to initial conditions?

## *Autocorrelation and Orbits*

While the plot of the logistic function trajectory for $c=4$ appears chaotic, you might be able to convince yourself that there are repeating patterns. The repetitions are far from identical, but if you imagine making a copy of the plot and shifting it over a bit, it might line up.

This is what autocorrelation does. The amount of the shift is controlled by a lag $\tau$. For each $y[t]$ autocorrelation compares it to $y[t - \tau]$. The output of the autocorrelation function is a number $r_k$ between $-1$  and $1$, where 
$$
r_k = \frac{\sum_{t = \tau + 1}^N (y[t] - \mu)(y[t - \tau] - \mu)}{\sum_{t=1}^N (y[t] - \mu)^2}
$$
and $\mu$ is the average of all the $y$'s. If $r_k = 1$ then $y[t] = y[t + \tau]$ for every $t$, $r_k = 0$ means there is no correlation, and $r_k = -1$ says that $y[k] = -y[k + \tau]$.

A orbit is the plot of $y[k]$ on the $x-$axis and $y[k+\tau]$ on the $y-$axis.

Let's start by plotting the autocorrelation of the iterated logistic function for different values of $\tau$. 

Rather than scrolling back up to set $x_0$ and $c$, let's just create two new variables and call them $xP$ and $cP$.

![plot-autocorrelation](/assets/img/2022-09-08-easy-chaos-with-pluto/plot-autocorrelation.png)

Choose the autocorrelation step $\tau$:

![plot-phase-portrait](/assets/img/2022-09-08-easy-chaos-with-pluto/plot-logistic-orbit.png)

The autocorrelation plot seems about as chaotic as the logistic function, but when $\tau_0 = 1$, the phase portrait is very smooth. In fact, the outline of the blue dots (y1) looks just like the logistic function! 

This should be expected since $y_{n+1} = f(y_n)$ for every $n$. 

Why choose $\tau_0 = 1$? That choice of $\tau_0$ plots the orbit of the function. The orange lines (y2) show which point follows the current location. On the left side, the path seems to be mostly upwards towards a nearby point. On the right, points are sent back to the left half except those near $x = 1$.

Try setting $\tau_0 = 0$ and you'll see that the orbit becomes the line $y=x$, because there's perfect correlation between $y[t]$ and $y[t + \tau_0]$. The plot doesn't provide any insight. Try some other values of $\tau_0$ to see what happens.

With Pluto, you can change the input values to a function to immediately see the effects.  

------

Hero image from [Introduction to Online Nonstochastic Control](https://www.researchgate.net/publication/365486091_Introduction_to_Online_Nonstochastic_Control), Elad Hazan, Karan Singh, Research Gate, Figure 2.7: Lorenz attractor Nov 2022.

### Further Reading

- [How We Can Make Sense of Chaos](https://www.quantamagazine.org/how-mathematicians-make-sense-of-chaos-20220302/)
- [Autocorrelation Plot](https://www.itl.nist.gov/div898/handbook/eda/section3/autocopl.htm)
- [General principles of chaotic dynamics](https://watermark.silverchair.com/31-3-332.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAuAwggLcBgkqhkiG9w0BBwagggLNMIICyQIBADCCAsIGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMFer7lp4q3xQjfSY6AgEQgIICk0IOaNVk1vMyhKnEZZZpKfVV62JkFEXuxG-9gkisulLaWOmgUOFy-nYCJLfv1tL4nS78ez0KOPl2PEb-OD80Sq-kYtLGT63K4S9Q6f7PSOPxTKARDqgRigTIjGJVFokhWLny339aS1nAp79qTU6L0dgMy8r8W61PNDxWrduddnR9FNKU2cxyR9X--5v6Zk1bipU2aKdYEPIHjsGI0VpW8ZAiBlp0-0RKCAOIqMMMQvbyfznfnFhV46mwdazEgOXjg8dCEfovMM1lw8tfyKxA-ZpE2-YWKbUgtWsbCcWX3Gh5DZWmZRwgnCtlCEOJirh6-I57oF2dFiyBLnjqDOM00h9QAvE3GaeUx-yrCJw6ZfZ1ne4dBkeMrWUUZbanOw4OESvhM-cPrdbqE7nYLfpDSrBrVBLZ80T__G0g3ar1Al57bZ5ygReME4m1itWlU7v-lQNhQPH4cTNEPqN6IBiw7uYEt9UbQ4kwQCyYIQLfP_dIPGiqM1gSa6eXlIWTPlMHOl6R_VFhdhidx_lsBYBTxMtoHUmxxgg35Nr4_rrfio11vlQsHOB1ehgJTNG3V-CwT79gi-gcFBO-taBKw91dY2AcExpsQJ3ViJxV0GMWn3i58UUaYqoSorQs2iKeGqARIsf8hkBtX66k3AuE3-Tn_DZF3bI-t-DK98LsBpM-4FwmIbstHD_FOpztAzBtnM0iHnPYlh4DB3Ux3f5fyasMy5MewuKsRJTiEnXfl3bNnGyIG_nUBVTQmVuvYK9FOtDdDAJixAcvb1kzumiTL11tgEOlPVIjSOf_xEn2oVBnZsTBFP-k52VIBTlAGAp-_CFDAIjTLA_L3WAlcJ_iSrPnoxHvw6HzsMIAFgwtR98wNTD9wt3m)
- [Chaos Theory Simply Explained](https://www.researchgate.net/publication/289996762_Chaos_Theory_Simply_Explained)

