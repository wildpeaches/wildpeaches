---
title: The Big Squish Theory - Part I
subtitle: Physics of Catastrophic Underwater Implosions
author: John Peach
lede: An introduction to the Wolfram Language
hero:
  url: /assets/img/2023-08-22-big-squish-theory/nautilus.jpg
  alt:
tags: [math]
keywords: [Mathematica, Wave, Burgers' and Euler equations]
socialImg: /assets/img/2023-08-22-big-squish-theory/nautilus.jpg
software: ['wolfram-language', 'anaconda', 'jupyterlab']
---

> Pressure pushing down on me
> Pressing down on you, no man ask for
> Under pressure that burns a building down
>
> - [Under Pressure](https://youtu.be/vajSv_vVhZ8), Queen, David Bowie



## Under Pressure

Imagine you're [Captain Nemo](https://www.gutenberg.org/files/164/164-h/164-h.htm) and you submerge a bubble of air 20,000 leagues under the sea. How much pressure would the bubble of air be under?

Well, there are a couple of problems with this. First, what's a league? It's a [unit of length](https://en.wikipedia.org/wiki/League_(unit)), but depending on where you are it can vary from 1280.16 meters (in Myanmar) to 11,295 meters (in Norway). Using the conversion of 1 league = 4 kilometers that Jules Verne wrote about (in France), you'd be 80,000 km under the surface of the ocean, but the Earth's diameter is 12,735 km so that puts you 67,265 km out in space on the other side of the world. 

Verne meant that Captain Nemo and the Nautilus traveled 20,000 leagues in *distance* under the sea. Let's choose a [Titanic](https://en.wikipedia.org/wiki/Wreck_of_the_Titanic) depth of 3800 meters. Imagine a cubic meter box filled with water. From [*Fermi Problems Predict the Future*](https://wildpeaches.xyz/blog/fermi-problems-predict-the-future/) the mass of a cubic meter of water is 1000 kg or one metric ton, so 1000 kg would be spread out evenly over the bottom $1 \; m^2$ of the cube, meaning there would be $1000 \; \frac{kg}{m^2}$. If you stacked a second cube on top of the first, it would double to $2000 \; \frac{kg}{m^2}$. At a depth of 3800 meters, the mass is $3.8 \times 10^6 \; \frac{kg}{m^2}$ (3.8 million!). 

Pressure is the force per unit area, and to get the force we need an acceleration term since $F = ma$. The acceleration here is due to gravity, $g = 9.81 \; \frac{m}{s^2}$.  Multiplying the mass per unit area times the gravitational acceleration constant gives 
$$
p = \rho g h = 1000 \frac{kg}{m^3} \times 9.81 \frac{m}{s^2} \times 3800 \; m = 3.7 \times 10^7 \frac{kg}{m \cdot s^2} \left( \frac{N}{m^2} \right)
$$
where $p$ is the pressure, $\rho$ is density and $h$ is the height of the column of water above us.

If you prefer pressure in psi (pounds per square inch), at the Titanic the pressure is about 5400 psi, or about the weight of two small cars on every square inch. It's impossible to imagine that kind of pressure, but without actually experiencing it, suppose your foot got run over by a small car. The contact area of a tire with the ground is about 25 square inches, and if we make the weight of the car 2800 lbs, then the one tire running over your foot would only be supporting 700 lbs. Spread that out over 25 square inches, and you'd feel 28 psi. 

Your foot would be painfully squished, but nothing like what you'd feel dipping your toes in at the Titanic.

## Assume a Spherical Cow

In physics, there's a joke that starts, "Assume a [spherical cow](https://en.wikipedia.org/wiki/Spherical_cow)". The idea behind the spherical cow is that you should reduce assumptions to the minimum that allow the problem to still make sense, but also make it easy to solve.

![SphericalCow2](/assets/img/2023-08-22-big-squish-theory/SphericalCow2.gif)

<p align = "center"><b>Spherical Cow</b></p>

So, let's assume a spherical bubble of air that we can somehow magically transport 3800 meters under the sea while maintaining standard atmospheric pressure typical at the surface. A spherical bubble is perfect because the pressure at the edge will be the same everywhere and a sphere is the best shape to counter that pressure. Now, let's say that whatever container you used to get the bubble down to the bottom instantly disappears. What happens to the bubble?

Does the water just rush right in? The pressure of the air in the bubble is the same as at sea level, or 14.7 psi = $1.01 \times 10^5 \; \frac{N}{m^2}$. The water pressure is 366.3 times the air pressure. If you could measure the pressure instantaneously at the surface of the bubble, it would rise very rapidly to equal the pressure of the water, creating a shock wave inwards. 

## The Ideal Gas Law

In 1834 Benoît Paul Émile Clapeyron published the ideal gas law
$$
pV = nRT
$$
where $p,V,$ and $T$ are pressure, volume, and temperature as related to the quantity of gas $n$ and the ideal gas constant $R$, which is the product of the Boltzmann constant (see [*Economics and the Stefan Boltzmann Law*](https://wildpeaches.xyz/blog/economics-and-the-stefan-boltzmann-law/)) and the [Avogadro constant](https://en.wikipedia.org/wiki/Avogadro_constant). Since the quantity of the gas $n$ is in moles, it can be written as 
$$
n = \frac{m}{M}
$$
where $m$ is the mass in $kg$ and $M$ is the [molar mass](https://en.wikipedia.org/wiki/Molar_mass). Using the specific gas constant $R^* = \frac{R}{M}$ converts the equation to
$$
pV = mR^*T.
$$
For air, the [specific gas constant](https://en.wikipedia.org/wiki/Gas_constant#Specific_gas_constant) is $R^* = 287.05 \; \frac{J}{kg \cdot \degree K}$. 

Since we know the initial air pressure of the bubble and the pressure of the surrounding water, we can estimate the conditions of the air when the pressure is the same as the water pressure. But, the equation is in terms of the volume, $V,$ and the temperature, $T$. There are two unknowns and only one equation.

A way around this is to make another spherical cow assumption, which is that the compression process is isentropic, meaning that no heat escapes into the surrounding water and that the compression could be completely reversed to the initial conditions. The compression is also called adiabatic because the process happens so quickly that no heat is transferred. If you could push the boundaries of your bubble back to the original position, the temperature would cool back to where it was.

Under this assumption, the volumes and temperatures before and after compression can be related to the ratio of the pressures.

Let $p_1$ be the initial (atmospheric) pressure and $p_2$ be the pressure of the water. Then the volume and temperature of an ideal gas after compression would be
$$
\begin{aligned}
V_2 &= V_1 \left( \frac{p_2}{p_1} \right)^{-1/\gamma} \\
T_2 &= T_1 \left( \frac{p_2}{p_1} \right)^{(\gamma-1)/\gamma} 
\end{aligned}
$$
where $\gamma$ is the [heat capacity ratio](https://en.wikipedia.org/wiki/Heat_capacity_ratio) which is 1.4 for air. The ratio of the water pressure to the air pressure is
$$
\frac{p_2}{p_1} = \frac{3.7e7}{1.01e5}=366.3
$$
so the ratio of the volumes is
$$
\frac{V_2}{V_1} = 366.3^{-1/1.4} = 0.0147
$$
and the temperature ratio is
$$
\frac{T_2}{T_1} = 366.3^{(1.4-1)/1.4} = 5.4.
$$
Under ideal conditions, if the initial temperature was $20\degree \; C = 293\degree \; K$ then the final temperature would be  $1582.2\degree K$, or $1309.2\degree \; C = 2388.6\degree \; F$. Notice that the final volume is compressed to just under 1.5% of the original volume.  

The Ideal Gas Law gives a "before" and "after" picture of conditions in the bubble of air, but we'll need more powerful tools to see the evolving dynamics of The Big Squish.

## The Wolfram Language

[Wolfram Mathematica](https://www.wolfram.com/mathematica/) is a symbolic mathematical computation program used in scientific, engineering, mathematical, and computing fields. It is based on the Wolfram Language, a knowledge-based symbolic language. Mathematica is used in areas that require mathematics, such as science, engineering, and finance.

Mathematica was conceived by Stephen Wolfram and is developed by Wolfram Research of Champaign, Illinois. Mathematica 1.0 was released on June 23, 1988. While the Mathematica interface costs several hundred dollars per year, you can get the computational engine for free! 

You'll need to install [Anaconda](https://www.anaconda.com/) because the [Wolfram Language](https://www.wolfram.com/engine/) runs in a [JupyterLab notebook](https://jupyter.org/). Rather than giving all of the installation details here, I recommend reading Nicolás Guarín-Zapata's blog, ["Using Wolfram Language in Jupyter: A free alternative to Mathematica"](https://nicoguaro.github.io/posts/wolfram_jupyter/). 

After installing everything, launch the [Anaconda Navigator](https://docs.anaconda.com/free/navigator/index.html) and click on the "Launch" button under JupyterLab. This will open a new tab in your browser that will look something like this:

![jupyter-wolfram](/assets/img/2023-08-22-big-squish-theory/jupyter-wolfram.png)

<p align = "center"><b>JupyterLab Notebook</b></p>

Click on the Wolfram Language icon under "Notebook" to start a new Wolfram notebook. 

## Partial Differential Equations

Partial Differential Equations (PDEs) are equations that involve partial derivatives of an unknown function with several independent variables. They describe various physical phenomena involving functions of more than one variable. 

The PDEs we'll discuss here (in order of increasing complexity) to model The Big Squish are: 



- Wave equation: Describes the propagation of waves, such as sound or light waves. This relates the second partial derivatives of the function $u(x,t)$ with respect to time and space. The parameter $c$ determines the wave speed.
- Burgers' equation: Models fluid dynamics and shock waves. The 1D Burgers' equation is $∂u/∂t + u∂u/∂x = ν∂^2u/∂x^2$. The nonlinear $u∂u/∂x$ term represents convection, while the $ν∂^2u/∂x^2$ term represents diffusion. 
- Euler equations: Describe the motion of an inviscid fluid. These are a set of quasi-linear PDEs that conserve mass, momentum, and energy. For 3D flows, there are four PDEs with four dependent variables (density, velocity components, pressure).



The Navier-Stokes equations describe the motion of viscous fluid substances. They are derived by applying Newton's second law to fluid motion, together with the assumption that the stress in the fluid is the sum of a diffusing viscous term and a pressure term. This yields a set of nonlinear partial differential equations that conserve momentum.

For incompressible flow, the equations can be written as:

$$∂u/∂t + (u·∇)u = -∇p/ρ + ν∇^2u$$

where $u$ is the fluid velocity, $p$ is pressure, $ρ$ is density, and $ν$ is the kinematic viscosity.

The $(u·∇)u$ term represents convection, $∇p/ρ$ represents pressure forces, and $ν∇^2u$ represents diffusion. The equations are coupled with the mass continuity equation for incompressible flow:

$$∇·u = 0$$

Solving the Navier-Stokes equations for turbulent flows and complex geometries is very difficult and remains an active area of research. They are considered one of the most important unsolved problems in classical physics. The Navier-Stokes equations are beyond what we'll be discussing here, and in fact, we'll see that the Wolfram Language isn't capable of handling the conditions of The Big Squish Theory.

So in summary, PDEs are ubiquitous tools for modeling many physical systems across science and engineering disciplines. The particular form of a PDE reveals insight into the underlying physics.

Using the Wolfram Language we'll examine the [wave equation](https://gist.github.com/XerxesZorgon/aa7d13ac19cc0e2ca947f1e01bb050ea), [Burgers' equation](https://gist.github.com/XerxesZorgon/6e8ca30b211bae7833d639a11bad577d) and the [Euler equations](https://gist.github.com/XerxesZorgon/63504d5fa0450e2cd30a77e047f74c52) (follow links to download JupyterLab notebooks). Euler's gives the best representation of conditions as the bubble of air rapidly compresses.

## The Wave Equation

The wave equation gives the height of the wave $u(x,t)$ as a function of the position along the $x-$axis and time $t$. The one-dimensional PDE
$$
u_{tt} = c^2 \nabla^2 u = c^2 u_{xx}
$$
says that the acceleration of a particle of fluid $u_{tt}$ is proportional to its displacement $\nabla^2 u$ relative to neighboring particles. (See *[The mathematics of PDEs and the wave equation](https://mathtube.org/sites/default/files/lecture-notes/Lamoureux_Michael.pdf)* by Michael P. Lamoureaux). This equation can be written as 
$$
u_{tt} - c^2 u_{xx} = \left( \frac{\partial}{\partial t} - c \frac{\partial}{\partial x}\right) \left( \frac{\partial}{\partial t} + c \frac{\partial}{\partial x}\right) u = 0.
$$
The general solution to the wave equation is
$$
u(x,t) = f(x+ct)+g(x-ct)
$$
 where $f$ and $g$ are any functions of a single variable. Think of $f$ and $g$ as the outline of the wave and these outlines move left ($f$) and right ($g$) from their starting positions with velocity $c$. This is an [example](https://chem.libretexts.org/Courses/Pacific_Union_College/Quantum_Chemistry/02%3A_The_Classical_Wave_Equation/2.01%3A_The_One-Dimensional_Wave_Equation) of a wave where $f=0$:

![string-pulse-redline](/assets/img/2023-08-22-big-squish-theory/wave-x-t.gif)

<p align = "center"><b>Wave Equation</b></p>

It looks like the wave is moving from the left to the right, but any point on the wave just moves up and down. Watch the red dot as it moves along the white line. From Newton's second law, $F = ma$, the term $u_{tt}$ describes the vertical acceleration (using $m = 1$) because it's the second derivative of position with respect to time.

The term $u_{xx}$ measures the steepness of the wave at any point $x$ and says that the steeper the wave, the faster it's accelerating. This is derived from [Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law) which says that the force of a spring scales linearly with how far it's been stretched. It helps to think of the wave as a plucked guitar string. The points where the wave is steepest are also the points where the guitar string has been stretched the most.

## Solving the Wave Equation with the Wolfram Language

One of the nice things about using the Wolfram Language to solve problems like the wave, Burgers', or Euler equations is that the code looks very similar to the math equations. The syntax isn't exactly the same, though, so I found it useful to ask [ChatGPT](https://chat.openai.com/) and [Google Bard](https://bard.google.com/) for help writing the code. The steps used in solving any of these wave-like equations are:

1. Define any necessary parameters
2. Input the PDE
3. Set initial and boundary conditions, and combine them with the PDE
4. Solve the system with the Wolfram Language function `NDSolve`
5. Plot the result

For the wave equation, the parameters needed are the wave speed $c,$ the $x-$ domain, and the time interval of the simulation.

```mathematica
c = 1;
t0 = 0;
tf = 4 Pi;
x0 = 0;
xf = Pi;
```

The definition of the wave equation requires two partial derivatives which in Mathematica are of the form `D[u[x, t], {t, 2}]` for $u_{tt}$. The complete wave equation is

```mathematica
waveEquation = D[u[x, t], {t, 2}] - c^2*D[u[x, t], {x, 2}] == 0;
```

The initial and boundary equations are

```mathematica
initialCondition = u[x, 0] == Sin[x];
initialVelocityCondition = Derivative[0, 1][u][x, 0] == 0;
boundaryConditions = {
   u[x0, t] == 0,
   u[xf, t] == 0
};
```

For convenience, we can combine the equations into a single variable,

```mathematica
waveEqnWithICs = {waveEquation, initialCondition, initialVelocityCondition, boundaryConditions};
```

Even though it's possible to solve the wave equation analytically, we'll use a numerical solver in Mathematica,

```mathematica
sol = NDSolve[waveEqnWithICs, u, {x, x0, xf}, {t, t0, tf}];
```

and then plot the wave $u(x,t)$ against $x$ and $t$.

![wave3D](/assets/img/2023-08-22-big-squish-theory/wave3D.png)

<p align = "center"><b>Wave in 3D</b></p>

You can also show the wave in motion using

```python
frames = Table[
   Plot[Evaluate[u[x, t] /. sol], {x, x0, xf}, PlotRange -> {-1, 1}, 
    AxesLabel -> {"x", "u(x, t)"}, PlotLabel -> Row[{"t = ", t}]], {t, t0, tf, 0.1}];

animation = ListAnimate[frames];

animation
```

![wave](/assets/img/2023-08-22-big-squish-theory/wave.gif)

<p align = "center"><b>Standing Wave</b></p>

This version of the wave equation simulates a plucked string where the ends of the string are fixed. This is done by setting the boundary conditions at the endpoints to $0$ for all times. To generate a traveling wave like the one shown above, you'll need to rewrite the boundary conditions.

## Burgers' Equation

Shocks are related to waves, and the PDE describing them is called [Burgers' Equation](https://en.wikipedia.org/wiki/Burgers%27_equation),
$$
u_t + u u_x = 0.
$$
[Burgers](https://wikiwaves.org/Burgers_Equation)' is a simplification of the Navier-Stokes equations. Provide a proof of Navier-Stokes and the [Clay Mathematics Institute](https://www.claymath.org/millennium/navier-stokes-equation/) will award you one million dollars! 

The term $u_t$ is the vertical velocity of a wave particle since it has just one time derivative. The derivative with respect to $x$, $u_x$ gives the slope, and multiplying it by the height of the function $u$ induces the shock:

![File-Burgers2](/assets/img/2023-08-22-big-squish-theory/File-Burgers2.gif)

<p align = "center"><b>Burgers Equation</b></p>

This is a 2D simulation of Burgers' Equation in two dimensions where you can see the shock "pile up" as the wave moves.

![inviscid-burgers-equation-in-two-dimensions](/assets/img/2023-08-22-big-squish-theory/inviscid-burgers-equation-in-two-dimensions.gif)

<p align = "center"><b>Burgers 3D</b></p>

This form is the simplest version of Burgers' where the sum of the terms is zero, which is the case for an [inviscid fluid](https://www.cambridge.org/core/books/abs/basic-aerodynamics/fundamentals-of-steady-incompressible-inviscid-flows/4F5672B432936FA6E9176571060C3822) which happens when two adjacent layers of the fluid can slip past each other without friction. 

In most cases, PDEs can only be solved numerically. To do this, a grid is constructed in the $x-y$ plane, and $u(x,t)$ is solved for each time step over every square of the grid. The simulation improves with finer grids and shorter time steps, but the computational cost can be very high. Machine learning has helped reduce the grid density by discovering properties of the problem that reduce the complexity. Here's an [example](https://ai.googleblog.com/2019/07/learning-better-simulation-methods-for.html) of Burgers' using only 16 points:

![Burgers](/assets/img/2023-08-22-big-squish-theory/Burgers.gif)

<p align = "center"><b>Neural Network Approximation to Burgers</b></p>

For the Mathematica version of Burgers' equation, I used a hyperbolic tangent function for the initial condition,
$$
u(x,0) = \frac{1}{2}(1 - \tanh (10 (x - \frac{1}{2}))
$$
because it gave a smooth transition across the boundary at $x = \frac{1}{2}$. Mathematica generated a warning message,

```mathematica
NDSolve::eerr: Warning: scaled local spatial error estimate of 6047.74 at t = 1. in the direction of independent variable x is much greater than the prescribed error tolerance. Grid spacing with 2001 points may be too large to achieve the desired accuracy or precision. A singularity may have formed or a smaller grid spacing can be specified using the MaxStepSize or MinPoints method options.
```

but created a plot anyway.

![burgers-mathematica](/assets/img/2023-08-22-big-squish-theory/burgers-mathematica.gif)

<p align = "center"><b>Mathematica Solution</b></p>

Numerically, the solution becomes unstable fairly quickly when the shock forms. Better solutions are in the post [Solving Burger's equation with NDSolve at large time](https://mathematica.stackexchange.com/questions/267890/solving-burgers-equation-with-ndsolve-at-large-time) on the [Mathematica and Wolfram Language](https://mathematica.stackexchange.com/) Stack Exchange forum.

## Euler Equations

The Euler equations extend Burgers' by including conservation of mass, momentum, and energy. They describe the conditions at the boundary of the interface between the water and air inside the bubble,
$$
\frac{\partial}{\partial t} \begin{pmatrix} \rho \\ \rho v \\ \rho E \end{pmatrix} 
+ \frac{\partial}{\partial x} \begin{pmatrix} \rho v \\ \rho v^2 + p \\ (\rho E + p) v \end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$
where $\rho$ is density, $v$ is velocity, $E$ is specific internal energy, and pressure is given by
$$
p = (\gamma - 1) \left( \rho E - \frac{1}{2} \rho v^2 \right)
$$
and are valid for an adiabatic, inviscid fluid. Adiabatic flow means that there is no energy transferred in or out of the volume, and an inviscid fluid has no friction between layers of the fluid that are slipping past each other. Another way to describe this is that no shear forces act on the fluid. The adiabatic assumption is quite reasonable for the very short period the bubble is compressed, and fluids like water and air behave sufficiently like an inviscid fluid that the Euler equations hold. 

The top equation is for conservation of mass,
$$
\rho_t + \rho v_x = 0
$$
which says that the change in density over time $\rho_t$ is exactly compensated by the density $\rho$ of a small volume of fluid moving with velocity $v_x$ (along the $x-$axis). It is also known as the continuity equation.

Momentum is the product of mass and velocity, and momentum is conserved in a closed fluid system,
$$
(\rho v)_t + (\rho v^2 + p)_x = 0.
$$


For a unit volume of fluid, the mass is the density times the volume, so $\rho v$ is momentum and $\frac{\partial}{\partial t} (\rho v)$ is the rate of change of momentum. As with the conservation of mass equation, $\frac{\partial}{\partial x} (\rho v^2)$ is the rate of change of momentum due to the motion of the fluid. These two terms must be balanced by the change in momentum due to the pressure gradient $\frac{\partial}{\partial x} p$.

A pressure gradient means that the pressure on one side of a small volume of fluid is different from the pressure on the opposite side. The side with higher pressure will cause the small bit of fluid to accelerate away which increases the momentum. The greater the pressure gradient, the greater the momentum gain. 

The final equation describes the energy of the fluid,
$$
(\rho E)_t + ( \rho E v + pv )_x = 0.
$$
This form of the energy equation assumes no heat dissipation or transfer which is reasonable for the sudden compression experienced by a bubble of air at 3800 meters below the surface. The first term is the rate of change of energy with time, and the second is the change of energy due to the movement of the fluid.

The total energy of a small volume of fluid is derived from several sources:

- **Internal energy:** The internal energy of a fluid is the energy that is stored in the fluid due to the motion of its molecules. It is a function of the temperature and pressure of the fluid.
- **Kinetic energy:** The kinetic energy of a fluid is the energy that is stored in the fluid due to its motion. It is a function of the fluid velocity.
- **Work done by pressure forces:** The work done by pressure forces is the work that is done by the pressure of the fluid on the walls of the container that it is in. This work is used to increase the internal energy of the fluid.
- **Heat transfer:** Heat transfer is the transfer of energy from one point to another due to a temperature difference. Heat transfer can occur between the fluid and the walls of the container that it is in, or it can occur between different parts of the fluid.
- **Dissipation:** Dissipation is the loss of energy due to friction. Friction occurs when two surfaces rub against each other. In a fluid, friction occurs between the fluid molecules and the walls of the container that the fluid is in.

For air at sea level and water at a depth of 3800 meters, the values of the variables are

![water-air-properties-table](/assets/img/2023-08-22-big-squish-theory/water-air-properties-table.png)

<p align = "center"><b>Table of Properties</b></p>

1. [NOAA](https://oceanexplorer.noaa.gov/facts/temp-vary.html) How does the temperature of ocean water vary?
2. [Mac Instruments](https://macinstruments.com/blog/what-is-the-density-of-air-at-stp/#:~:text=According%20to%20the%20International%20Standard,%3A%200.0765%20lb%2Fft%5E3) What Is the Density of Air at STP?
3. [Stack Exchange](https://engineering.stackexchange.com/questions/7482/why-use-different-specific-heat-capacities-in-the-energy-equations-for-incompres) Why use different specific heat capacities in the energy equations for incompressible and compressible fluid flow?
4. [IAPWS (water)](http://twt.mpei.ac.ru/mcs/worksheets/iapws/IAPWS95.xmcd) Thermodynamic Properties of Ordinary Water Substance for General and Scientific Use
5. [Engineering Toolbox (air)](https://www.engineeringtoolbox.com/air-properties-d_1257.html) Ideal gas properties of air at low pressure - SI units. 
6. [BYJU's (water)](https://byjus.com/question-answer/what-is-r-for-water/) What is R for water?
7. [Engineering Toolbox (air)](https://www.engineeringtoolbox.com/individual-universal-gas-constant-d_588.html) The Universal and Individual Gas Constants in fluid mechanics and thermodynamics. 

The specific energy of water is derived from the [IAPWS](http://www.iapws.org/newform.html) [Main Thermodynamics Formulations](http://www.iapws.org/relguide/IAPWS-95.html) using a [density](https://twitter.com/AlainGoriely/status/1672183358506389505) of $1042 \frac{kg}{m^3}$ and a temperature of $4 \degree C$. At depths of $3800 \; m$ water compresses by about $4\%.$ 

The equation for pressure, $p = (\gamma - 1) \left( \rho E - \frac{1}{2} \rho v^2 \right)$ includes the heat capacity ratio $\gamma$, which for water is $\gamma = 1$. This would make the pressure zero, but since we know the pressure, density, and specific energy, we can calculate the heat capacity ratio for water at the initial conditions. The velocity is zero which simplifies the pressure equation to
$$
\begin{aligned}
p &= (\gamma - 1)\rho E \; \left( \frac{kg}{m^3} \right) \left( \frac{kJ}{kg} \right) = \frac{kJ}{m^3} = \frac{N \cdot m \times 10^3}{m^3} = 1000 \frac{N}{m^2} \\
\gamma - 1 &= \frac{p}{\rho E} \\
\gamma &= \frac{p}{\rho E} + 1.
\end{aligned}
$$
Since the units give pressure in $\frac{kN}{m^2}$, we need to divide the pressure by $1000$. For the initial conditions of water, this works out to
$$
\gamma_{water} = \frac{3.7 \times 10^5}{1042 \cdot 15.46} + 1 = 23.97
$$
Using these conditions in Mathematica gave this error message:

```mathematica
                                -7
NDSolve::ndsz: At t == 6.9232 10  , step size is effectively zero; singularity or stiff system suspected.
```

The code generated a plot, but it ended at time step $t \approx 0.0005$. 

![euler-shock](/assets/img/2023-08-22-big-squish-theory/euler-shock.png)

<p align = "center"><b>Mathematica Solution to Eulers Equation</b></p>

A stiff system is one where conditions change very rapidly, which is what we might expect with very high-pressure water rushing into a bubble of standard atmospheric pressure air. Even with somewhat better conditions, you have to be careful about handling stiff problems. A question on the Mathematica Stack Exchange asked about accurately [solving the 1-D Euler equations](https://mathematica.stackexchange.com/questions/11748/1d-euler-equations-fluid-dynamics-with-ndsolve) using NDSolve, which was answered by adding a viscosity term to the equations. The plots of density, energy, and velocity looked like this:

![Euler](/assets/img/2023-08-22-big-squish-theory/Euler.gif)

<p align = "center"><b>Euler Equations with NDSolve</b></p>

This didn't work for our Big Squish problem, but Mathematica wasn't meant to be used for this kind of problem. Instead, we need specialized code that can handle stiff problems which will be the subject of the next post.

## Test Functions

Test functions are a fundamental concept for solving partial differential equations (PDEs). They play a crucial role in variational formulations of PDEs, helping to transform differential equations into a system of algebraic equations that can be solved numerically.

The basic idea behind test functions is to multiply both sides of a PDE with a smooth function and then integrate over the domain. This leads to the weak or variational formulation of the problem, which is often more suitable for numerical approximation. For Burgers' equation,
$$
u_t + u u_x = 0
$$
the weak form is found by multiplying through by the test function $\phi(x,t)$ and integrating,
$$
\int_0^\infty \int_{-\infty}^\infty [u_t + u u_x]\phi(x,t) \;dx \; dt = 0.
$$
Using this trick leads to an approximate numerical solution to the original "strong form" of Burgers' equation. 

The same process can be used to find a numerical solution to Euler's equations. In Mathematica, the code to generate a weak form is

```python
testFunctions = {rho[x, t], v[x, t], e[x, t]};

weightedEulerEqs = MapThread[Equal, {eulerEqs, testFunctions}];

weightedEulersEqnWithICsBCs = {weightedEulerEqs, initConds, boundaryConds};
```

Test functions sometimes help with stiff problems, and often code designed for solving computational fluid dynamics problems requires that the problem be rewritten using a test function.

Even though Mathematica wasn't able to solve The Big Squish Theory problem, hopefully, you'll find many more uses for Mathematica and we'll get to the bottom of this pressing problem next time.

------

After playing lead guitar in Queen, [Brian May](https://en.wikipedia.org/wiki/Brian_May) earned a Ph.D. in astrophysics. Here, he contemplates another spherical problem.

![brian-may](/assets/img/2023-08-22-big-squish-theory/brian-may.jpeg)

------

#### Image credits

Hero: [Cutaway of Jules Verne's Nautilus](https://www.deviantart.com/hisutton/art/Cutaway-of-Jules-Verne-s-Nautilus-555662500). H I Sutton, Deviant Art, Aug. 23, 2015.

Spherical Cow: [Wikipedia](https://en.wikipedia.org/wiki/Spherical_cow), [Ingrid Kallick](https://ikallick.com/).

Wave Equation: [Wave Motion in Time and Space](https://www.acs.psu.edu/drussell/Demos/wave-x-t/wave-x-t.html). [Dan Russell](http://www.acs.psu.edu/drussell/demos.html), [Acoustics and Vibration Animations](https://www.acs.psu.edu/drussell/demos.html), May 28, 2008.

Burgers Equation: [Wikiwaves](https://wikiwaves.org/Burgers_Equation). 

Burgers 3D: [Inviscid Burgers Equation in Two Dimensions](https://en.m.wikipedia.org/wiki/File:Inviscid_Burgers_Equation_in_Two_Dimensions.gif). Nick Rogers, Wikipedia, Feb 9, 2012.

Neural Network Approximation to Burgers: [Learning Better Simulation Methods for Partial Differential Equations](https://blog.research.google/2019/07/learning-better-simulation-methods-for.html). Stephan Hoyer, Google Research, Jul. 23, 2019.

Euler Equations with NDSolve: [1D Euler equations (fluid dynamics) with NDSolve](https://mathematica.stackexchange.com/questions/11748/1d-euler-equations-fluid-dynamics-with-ndsolve). [xzczd](https://mathematica.stackexchange.com/users/1871/xzczd), [Mathematica Stack Exchange](https://mathematica.stackexchange.com/), Dec. 9, 2016.

Brian May: [Pinterest](https://www.pinterest.com/pin/419538521546981745/visual-search/?x=16&y=16&w=532&h=561).

------

## References

- [1D Euler equations](https://mathematica.stackexchange.com/questions/11748/1d-euler-equations-fluid-dynamics-with-ndsolve) (fluid dynamics) with NDSolve
- [Korteweg–De Vries equation](https://en.wikipedia.org/wiki/Korteweg%E2%80%93De_Vries_equation)
- [Burgers Equation](https://www.uni-muenster.de/imperia/md/content/physik_tp/lectures/ws2016-2017/num_methods_i/burgers.pdf)
- [Burgers' equation](http://www.clawpack.org/riemann_book/html/Burgers.html) (clawpack)
- [Note on One Dimensional Burgers Equation](https://www.researchgate.net/publication/333867601_Note_on_One_Dimensional_Burgers_Equation)
- [Numerical solutions of the Burgers’ equation by the least-squares quadratic B-spline finite element method](https://core.ac.uk/download/pdf/82349445.pdf)
- [Notes on Burgers' Equation](https://www.math.umd.edu/~mariakc/burgers.pdf)
- [Solution of Burgers equation with some initial data](https://mathematica.stackexchange.com/questions/197288/solution-of-burgers-equation-with-some-initial-data)
- [Discontinuous Galerkin Methods for Computational Fluid Dynamics](https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-4.pdf)
- [One Dimensional Euler's Equations of Gas Dynamics](http://www.csun.edu/~jb715473/examples/euler1d.htm)
- [The Euler Equation of Gas-Dynamics](http://personalpages.to.infn.it/~mignone/Plasma_Physics/euler_eqns.pdf)
- [Compressible Euler Equations](https://www.theoretical-physics.com/dev/fluid-dynamics/euler.html) (Theoretical Physics Reference)
- [Euler equations (fluid dynamics)](https://en.wikipedia.org/wiki/Euler_equations_(fluid_dynamics))
- [An Overview of Euler's Equations in Fluid Dynamics](https://resources.system-analysis.cadence.com/blog/msa2021-an-overview-of-eulers-equations-in-fluid-dynamics)
- [1D Euler equations (fluid dynamics) with NDSolve](https://mathematica.stackexchange.com/questions/11748/1d-euler-equations-fluid-dynamics-with-ndsolve)
- [Fluid dynamics collapse 1D Euler equations with NDSolve](https://mathematica.stackexchange.com/questions/231293/fluid-dynamics-collapse-1d-euler-equations-with-ndsolve)
- [Wolfram Language & System Documentation Center](https://reference.wolfram.com/language/)
- [Wolfram Language & System Language Overview](https://reference.wolfram.com/language/guide/LanguageOverview.html)
- [Stiffness Detection](https://reference.wolfram.com/language/tutorial/NDSolveStiffnessTest.html) (Mathematica)
- ["StiffnessSwitching" Method for NDSolve](https://reference.wolfram.com/language/tutorial/NDSolveStiffnessSwitching.html)
- [Using Wolfram Language in Jupyter: A free alternative to Mathematica](https://nicoguaro.github.io/posts/wolfram_jupyter/)
- [Codeium in Jupyter Notebooks](https://codeium.com/jupyter_tutorial)

## Code for this article

[Wave_mathematica.ipynb](https://gist.github.com/XerxesZorgon/aa7d13ac19cc0e2ca947f1e01bb050ea#file-wave_mathematica-ipynb) - Numerical solution to the wave equation.  

[Burgers.ipynb](https://gist.github.com/XerxesZorgon/6e8ca30b211bae7833d639a11bad577d#file-burgers-ipynb) - Numerical solution to Burgers' equation.

[EulerShock.ipynb](https://gist.github.com/XerxesZorgon/63504d5fa0450e2cd30a77e047f74c52) - Attempted numerical solution to Euler's equation in Wolfram Language notebook.
