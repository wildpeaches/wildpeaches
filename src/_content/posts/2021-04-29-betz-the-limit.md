---
title: The Ultra Hyper Totally Amazing Push Me Pull You Supercavitating Surface Effect Flying Machine
subtitle: Part I - Betz The Limit
author: John Peach
lede:
hero:
  url: /assets/img/betz-the-limit/wind-turbines-in-the-field.jpg
  alt:
tags: [math, physics]
keywords: [Betz Limit, Wind Energy]
socialImg: /assets/img/betz-the-limit/wind-turbines-in-the-field.jpg
---

> _Idiot wind
> Blowing every time you move your mouth
> Blowing down the back roads headin' south
> Idiot wind_
>
> ~ Bob Dylan

## Idiot Wind

To understand _The Ultra Hyper Totally Amazing Push Me Pull You_ we first need to understand how the wind blows. In this first part, we'll look at how energy is gathered from a wind turbine and the constraints on the total energy available. Every second, the sun fuses 620 million metric tons of hydrogen into 616 million metric tons of helium, releasing energy in the form of photons. Multiply the missing 4 million metric tons of mass times the speed of light squared ($3 \times 10^8 \frac{m}{s}$) and you get the energy generated every second,

$$
E = m c^2 = 4 \times 10^6 \cdot  \frac{1000 \; kg}{\text{metric ton}} \cdot \left(3 \times 10^8 \frac{m}{s} \right)^2 = 3.6 \times10^{26} \; \frac{kg \cdot m^2}{s^2} = \frac{J}{s}.
$$

A photon at the center of the sun takes about a million years[^1] to reach the surface, but only another 8 minutes 20 seconds to get to the Earth. Most of this light is in the visible spectrum, but after absorption at the Earth's surface, energy is re-radiated in the infrared band causing local warming.

Because the warming isn't uniform, the atmosphere heats more in some places than others resulting in different pressures. The pressures want to equalize and the only way for that to happen is for the wind to blow.

Kinetic energy is the mass of the air times the velocity of the wind (squared) and we've been capturing some of that energy for a long time to propel sailing ships and to power wind turbines. These posts will look at the possibility of combining those two ideas to make _The Ultra Hyper Totally Amazing Push Me Pull You_, the most astounding boat ever imagined.

First, we need to get an idea about how much energy is available and how much we can extract for useful propulsion.

## Eine Kleine Nachtphysik

Mozart and a friend go to visit a third friend. When they get to the door the first friend asks, "Shall we ring the doorbell?" and Mozart replies, "Nah, I'm inclined to knock".

Some basic physics. Kinetic energy is the energy of an object due to its motion, defined as one half the mass times velocity squared,

$$
KE = \frac{1}{2}mv^2 \; \left( \frac{kg \cdot m^2}{s^2} \right).
$$

In physics, work is defined as the change in kinetic energy usually due to a change in velocity,

$$
W = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

where $v_i$ and $v_f$ are the initial and final velocities.

Force is mass times acceleration,

$$
F = ma \; \left( \frac{kg \cdot m}{s^2} \right),
$$

and acceleration is the rate of change of velocity (how fast velocity is changing during a short time $dt$),

$$
a = \frac{dv}{dt}.
$$

Power is the rate of doing work and is also the derivative of force applied through a distance, with units of energy per unit time,

$$
P = \frac{dW}{dt} = \frac{d}{dt} (F \cdot x) = F \frac{dx}{dt} = Fv \; \left( \frac{kg \cdot m^2}{s^3} = \frac{N \cdot m}{s} = \frac{J}{s} \right)
$$

Momentum ($p$) is mass times velocity,

$$
p = mv \; \left( kg \frac{m}{s} \right).
$$

Sometimes it's useful to be able to write the change in velocity as a function of distance. The final velocity is the initial velocity plus acceleration over a time interval,

$$
v_f = v_i + a t. \tag{1}
$$

During constant acceleration, the distance traveled is the average of the initial and final velocity,

$$
d = \frac{1}{2} (v_i + v_f) t, \tag{2}
$$

and the distance can also be written as

$$
d = v_it + \frac{1}{2} at^2. \tag{3}
$$

Multiply both sides of $(3)$ by twice the acceleration $2a$ to get

$$
2ad = 2v_i at + a^2 t^2. \tag{4}
$$

Now, expand $(1)$ to get

$$
v_f^2 = v_i^2 + 2v_iat + a^2t^2 \tag{5}
$$

and notice that the right side of $(4)$ is the exactly the $2^{nd}$ and $3^{rd}$ terms of $(5)$ so we can make a substitution to get

$$
v_f^2 = v_i^2 + 2ad. \tag{6}
$$

What makes this form useful is that we can get the final velocity $v_f$ in terms of the initial velocity $v_i$ and the acceleration $a$ through a distance $d$ without having to know explicitly the time required.

## Albert Betz

Albert Betz was a German physicist interested in wind turbine technology. In 1920, he published a paper, _"Das Maximum der theoretisch möglichen Ausnutzung des Windes durch Windmotoren"_ which demonstrated the upper limit for extracting wind energy from a turbine. English engineer Frederick Lanchester published similar results in 1915 and Russian mathematician Nikolay Joukowsky did as well in 1920, making this another example of [Stigler’s Law of Eponymy](https://wildpeaches.xyz/blog/havens-haven/) - a scientific discovery named for someone other than the original discoverer. For his Ph.D. thesis in 1919, Betz studied ship propellers and showed how to optimally design them for minimum energy loss.

Betz' Law is surprisingly easy to prove. Here's a picture of wind flowing through the rotor disk of a wind turbine drawn by [David Watson](http://www.ftexploring.com/energy/wind-enrgy.html).

![wind-turbine](/assets/img/betz-the-limit/wind-turbine.png)

If the diameter of the rotor is $D$, then the swept area is

$$
A = \frac{1}{2} \pi D^2 \; \left( m^2 \right).
$$

As the wind blows through the swept area of the turbine, energy is extracted and converted into either mechanical or electrical energy. In the process, the velocity must decrease so that the average velocity through the disk is

$$
v = \frac{1}{2}(v_i + v_f) \; \left( \frac{m}{s} \right).
$$

The mass of the air passing through the disk during one second (assuming $v_i$ and $v_f$ are measured in meters per second), is the density $\rho$ of air times the average velocity times the disk area,

$$
m = \frac{1}{2} \rho A (v_i + v_f) = \rho A v \; \left( \frac{kg}{m^3} \cdot m^2 \cdot \frac{m}{s} = \frac{kg}{s} \right)
$$

The density of air at sea level is approximately

$$
\rho = 1.225 \; \frac{kg}{m^3}.
$$

The force acting on the wind turbine by the moving air is

$$
\begin{aligned}
F &= ma = \rho A v \Delta v \\
&= \rho A v (v_i - v_f) \; \left( \frac{kg \cdot m}{s^2} = \text{1 Newton} \right)
\end{aligned}
$$

where $v$ is the average velocity through the turbine.

As I explained above, power is the rate that work is being done or the derivative of force through a distance,

$$
\begin{aligned}
P &= F \cdot v \; \left( \frac{N \cdot m}{s} = \text{1 Watt} \right) \\
&= \rho A v^2 (v_i - v_f),
\end{aligned}
$$

but power is also the rate change in energy (in this case kinetic energy) per unit time,

$$
\begin{aligned}
P &= \frac{\Delta E}{\Delta t} = \frac{1}{2}m(v_i^2 - v_f^2) \\
&= \frac{1}{2} \rho A v (v_i^2 - v_f^2) \\
&= \frac{1}{4} \rho A (v_i + v_f)(v_i^2 - v_f^2) \\
&= \frac{1}{4} \rho A v_i^3 \left( 1 - \left( \frac{v_f}{v_i} \right)^2 + \left( \frac{v_f}{v_i} \right) - \left( \frac{v_f}{v_i} \right)^3   \right)
\end{aligned}
$$

after expanding and factoring out $v_i^3$.

Let $u = \frac{v_f}{v_i}$, so

$$
P = \frac{1}{4}\rho A v_i^3 \left(1 - u^2 + u - u^3 \right).
$$

Taking the derivative with respect to $u$,

$$
\frac{dP}{du} = \frac{1}{4}\rho A v_i^3( -2u + 1 -3u^2).
$$

This will have a critical point (either a maximum or a minimum) when $\frac{dP}{du} = 0$, which happens when

$$
3u^2 + 2u - 1 = 0.
$$

This has roots at $u = \frac{1}{3}$ and $u = -1$, so the only physically meaningful solution is the first root, meaning $v_f = \frac{1}{3}v_i$. The maximum power then is

$$
\begin{aligned}
P_{max} &= \frac{1}{4}\rho A v_i^3 \left(1 - \frac{1}{9} + \frac{1}{3} - \frac{1}{27} \right) \\
&= \frac{1}{4}\rho A v_i^3 \left( \frac{32}{27} \right) \\
&= \left( \frac{16}{27} \right) \frac{1}{2}\rho A v_i^3.
\end{aligned}
$$

In other words, the maximum power that can be extracted is $\frac{16}{27} \approx 59.3\%$ of the power available in the free stream.

So there we have it. With a carefully designed wind turbine, we can get almost $60\%$ of the energy out of it. Except ...

## CFD Messes Up Everything (Idiot Wind)

In 2001, Russian physicists Aleksandr Gorban, Aleksandr Gorlov, and Valentin Silantyev published a [paper](http://www.math.le.ac.uk/people/ag153/homepage/Gorlov2001.pdf), _"Limits of the Turbine Efficiency for Free Fluid Flow"_. This is a picture of Gorban, and just look at the smirk on his face

![alexandr-gorban](/assets/img/betz-the-limit/alexandr-gorban.jpg)

because they had applied Computational Fluid Dynamics (CFD) to Betz' Law. CFD uses numerical analysis to study fluid flows and can provide more accurate solutions than the Betz method above. Because Betz didn't have access to the powerful computers available today, he made some assumptions,

- The rotor has an infinite number of blades and they produce only lift, not drag.
- The airflow into the rotor disk is perpendicular to the disk (there's no rotation as it passes through).
- The air is incompressible, and there is no heat transfer.
- The rotor experiences a uniform thrust across the disk.

With CFD methods, Gorban, Gorlov, and Silantyev were able to show that the air mass spins up as it passes through the disk, thus wasting energy. Their maximum turned out to be $30.1 \%$ of the total available energy. In "[_Wind Turbine Power: The Betz Limit and Beyond_](https://cdn.intechopen.com/pdfs/41078/InTech-Wind_turbine_power_the_betz_limit_and_beyond.pdf)", Mahmoud Huleihil and Gedalya Mazor found that the maximum thermodynamic efficiency is $\frac{8}{27} \approx 29.6 \%$. Nevertheless, wind turbines do work, they extract useful energy and we can use them to power _The Ultra Hyper Totally Amazing Push Me Pull You_.

[^1]: Photons bounce around like crazy inside the sun, in a path called a [random walk](https://en.wikipedia.org/wiki/Random_walk), or [Brownian Motion](https://en.wikipedia.org/wiki/Brownian_motion). The average distance traveled during a random walk is the mean step size times the square root of the number of steps. The distance traveled during each step is very short, so many steps are required to get to the sun's surface.
