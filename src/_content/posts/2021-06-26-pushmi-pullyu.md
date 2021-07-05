---
title: The Pushmi-Pullyu
subtitle: The Ultra Hyper Totally Amazing Push Me Pull You Supercavitating Surface Effect Flying Machine · Part II
author: John Peach
lede:
hero:
  url: /assets/img/pushmi-pullyu/pushmi-pullyu.jpeg
  alt:
tags: [math, physics]
keywords: [Betz Limit, Wind Energy]
socialImg: /assets/img/pushmi-pullyu/pushmi-pullyu.jpeg
---

> "Excuse me, surely you are related to the Deer Family, are you not?"
>
> "Yes," said the pushmi–pullyu—"to the Abyssinian Gazelles and the Asiatic Chamois—on my mother's side. My father's great–grandfather was the last of the Unicorns."

## In Violation of the Laws of Thermodynamics

The Push-me-pull-you is a perpetual motion machine in strict violation of the Laws of Thermodynamics. There will be consequences.

The three [Laws of Thermodynamics](http://physicsforidiots.com/physics/thermodynamics/) are:

1. You can't play unless you bet, and you can't win. An increase in [energy](https://kids.kiddle.co/Energy) in a system is the same as the energy given to a system in the form of [heat](https://kids.kiddle.co/Heat) or work. Energy cannot be created or destroyed, only changed. The amount of energy given to a system is the same amount of energy taken from the surroundings. In other words, you can't get more energy out of something than you put into it.
2. The most you can hope for is to break even. Given a pair of systems touching with different temperatures, heat will flow from hot to cold until the [temperature](https://kids.kiddle.co/Temperature) of the systems becomes equal. Energy flows from a more energetic system to a less energetic system, and entropy always increases.
3. You can't break even and you can't stop playing. When a system has a [temperature](https://kids.kiddle.co/Temperature) of [absolute zero](https://kids.kiddle.co/Absolute_zero) (on the Kelvin temperature scale) the [entropy](https://kids.kiddle.co/Entropy) is zero. Entropy is the energy that cannot be used to do [work](https://kids.kiddle.co/Work). Entropy approaches a constant as the system temperature approaches absolute zero.

![sf-obey](/assets/img/pushmi-pullyu/sf-obey.jpg)

The Push-me-pull-you is a boat with two propellers connected by a drive shaft. One propeller is above the water and spins with the wind. It turns the drive shaft which rotates a second propeller in the water. If you let the air propeller face the wind, then it will cause the propeller in the water to pull the boat forward into the wind. Now the apparent wind speed is the speed of the wind plus the speed of the boat, so the air propeller spins faster, spinning the water propeller faster and moving the boat more quickly through the water - into the wind! Now the apparent wind is even greater, so the boat goes faster and faster!

![push-me-pull-you-boat](/assets/img/pushmi-pullyu/push-me-pull-you-boat.png)

Turn the boat so it faces downwind, and then drag forces on the boat will begin to push the boat in the direction the wind is blowing. Now the propeller in the water spins because the boat is moving in the water, and the air propeller spinning acts as a blower, causing the boat to go faster downwind.

The Push-me-pull-you is clearly a perpetual motion machine violating at least one of those Laws of Thermodynamics. But if your ancestors are Abyssinian Gazelles and Unicorns maybe you've got some magic.

## An iceboat faster than the wind downwind

Is it possible for a boat to sail downwind faster than the wind? If the boat heads directly downwind, then at best, it could reach the same speed as the wind if no other drag forces were acting on the boat. A balloon floating in the air travels at the same speed as the wind, but a boat would have trouble achieving wind speed because of the drag forces of the water on the hull.

Ice boats speed along at many times the true wind speed when sailing at an angle to the wind direction. According to [this article](https://wiki2.org/en/Wind-powered_vehicle), "Iceboats can sail as close as 7 degrees off the apparent wind. Ice boats can achieve speeds as high as ten times the [wind speed](https://wiki2.org/en/Wind_speed) in good conditions."

![sailing-vectors](/assets/img/pushmi-pullyu/sailing-vectors.png)

If the iceboat sails at an angle to the true wind direction with velocity vector $V$, then the sailor will feel an apparent wind force in the opposite direction, $-V$. Combine $-V$ with the true wind vector $W$ to get $W-V$, the apparent wind on the iceboat (shown as the red vector). The boat will only be able to sail within some angle $\alpha$ to this apparent wind vector. If we assume $V = 5W$ (which seems more reasonable than the $10 \times$ from the link above), we can use the [law of sines](https://en.wikipedia.org/wiki/Law_of_sines) to calculate the other angles in the triangle,

![law-of-sines](/assets/img/pushmi-pullyu/law-of-sines.png)

For the iceboat, the angle between the boat direction and the apparent wind is $\alpha = 7^\circ$, and we have sides $a$, the wind vector, and $c = 5W$, the boat travel direction. Using the law of sines, we can calculate angle $\gamma$,

![iceboat-vectors](/assets/img/pushmi-pullyu/iceboat-vectors.png)

$$
\begin{aligned}
\frac{W}{\sin \alpha} &= \frac{5W}{\sin \gamma} \\
\frac{W}{5W \sin \alpha} &= \frac{1}{5 \sin \alpha} = \frac{1}{\sin \gamma} \\
\sin \gamma &= 5 \sin \alpha = 5 \sin 7^{\circ} \approx 0.60934\\
\gamma &= \sin^{-1} \left( 5 \sin 7^{\circ} \right) = \{ 37.54^{\circ}, 142.46^{\circ} \} \\
\end{aligned}
$$

Using the larger of the two possible solutions (see ["_The ambiguous case of triangle solution_"](https://en.wikipedia.org/wiki/Law_of_sines)) for $\gamma$ means $\beta = 180 - (\alpha + \gamma) = 30.54^{\circ}$, which is the angle between the boat direction and the true wind vector. The downwind component of the iceboat velocity vector is $5 \cos \beta = 4.31$, meaning the iceboat travels more than $4$ times the speed of wind downwind! The apparent wind velocity is $k = 5.82$ for this example.

## Push-Me-Pull-You Physics

In 1752 Leonhard Euler discovered Bernoulli's Principle of Fluid Dynamics,

$$
p + \frac{1}{2}\rho v^2 + \rho g h = \text{const.}
$$

where

$$
\begin{aligned}
\bullet \; p &= \text{pressure, } \frac{N}{m^2} = \frac{kg}{m \cdot s^2} \\
\bullet \; \rho &= \text{density, } \frac{kg}{m^3} \\
\bullet \; v &= \text{velocity, } \frac{m}{s} \\
\bullet \; g &= \text{gravitational acceleration constant, } 9.81 \; \frac{m}{s^2} \\
\bullet \; h &= \text{change in height, } m \\
\end{aligned}
$$

Daniel Bernoulli had earlier discovered that the pressure and the velocity of a fluid are inversely related, which means as the velocity of a fluid increases the pressure drops. Euler extended this concept to include the density $\rho$ and included a third term, $\rho g h$, to account for a change in height of the flow.

Water is considered to be an incompressible fluid. Imagine filling a container with water and then trying to squeeze the container after sealing it. Intuitively, it's obvious the total volume won't change no matter how hard you try to compress the container. It turns out that air is mostly incompressible as well if the speed is not too high. This means that the air density $\rho$ remains constant even as the velocity and pressure change.

For the Push-me-pull-you, the height of the stream of air through the wind turbine, and the height of the water through the propeller doesn't change much. The equation can be simplified to the form Bernoulli discovered,

$$
p + q = p_0
$$

where $q$ is the dynamic pressure, $q = \frac{1}{2}\rho v^2$, $p$ is called the static pressure, and $p_0$ is the total pressure which remains constant.

Using Bernoulli's Principle we can calculate the change in pressure through the wind turbine. In 1978, B. L. Blackford published a paper titled ["_The physics of a push-me pull-you boat_"](http://202.38.64.11/~cxyu/AJP_pushmepullyouboat.pdf). It wasn't the first to talk about connecting a wind turbine to a propeller to move the boat directly into the wind, but his paper is an early example. The equations here are based on his paper.

![bernoulli](/assets/img/pushmi-pullyu/bernoulli.png)

Far upstream and far downstream of the wind turbine, the pressure is $P_\infty$. The wind speed upstream is $v_u$, and downstream it's $v_d$. Directly in front of the turbine, (to the left) the pressure is $P_L$ and the speed is $v_L$ while just behind the turbine (to the right) the pressure is $P_R$ and the speed is $v_R$. Using Bernoulli's Principle,

$$
\begin{aligned}
P_\infty + \frac{1}{2}\rho v_u^2 &= P_L + \frac{1}{2}\rho v_L^2 \\
P_\infty + \frac{1}{2}\rho v_d^2 &= P_R + \frac{1}{2}\rho v_R^2.
\end{aligned}
$$

Taking the difference,

$$
\begin{aligned}
&\left(P_L + \frac{1}{2}\rho v_L^2 \right) - \left( P_R + \frac{1}{2}\rho v_R^2 \right) \\
&= \left( P_\infty + \frac{1}{2}\rho v_u^2 \right) - \left(  P_\infty + \frac{1}{2}\rho v_d^2 \right) \\
&= \frac{1}{2} \rho \left(v_u^2 -v_d^2 \right).
\end{aligned}
$$

The change in pressure is half the density times the difference of the squares of the air velocities upstream and downstream of the turbine.

In the previous post, [Betz the Limit](https://wildpeaches.xyz/blog/the-ultra-hyper-totally-amazing-push-me-pull-you-supercavitating-surface-effect-flying-machine/), we found the force of the wind on the turbine,

$$
F = \frac{1}{2} \rho A (v_u^2 - v_d^2)
$$

where

$$
\begin{aligned}
&\bullet \; \rho_{air} = \text{air density, } 1.225 \frac{kg}{m^3} \\
&\bullet \; A = \text{the swept area of the rotor, } \; A = \pi r^2, \; m \\
&\bullet \; v_u = \text{air velocity upstream of the turbine, } \frac{m}{s} \\
&\bullet \; v_d = \text{air velocity downstream of the turbine, } \frac{m}{s} \\
\end{aligned}
$$

The power extracted by the turbine is

$$
P = Fv
$$

where $v$ is the wind velocity through the turbine.

![turbine-propeller-physics](/assets/img/pushmi-pullyu/turbine-propeller-physics.png)

The same equations can be applied to the propeller in the water by using the density of water, $\rho_{water}  = 997 \frac{kg}{m^3}$. Usually, currents are flowing, but we can take the reference frame to be a particle of water, so the boat moves relative to that point. In any case, the wind speed and the boat speed will generally be quite a bit faster than the speed of the water.

In the picture above, the wind turbine connects to the propeller through some mechanical linkage, and for this analysis, we'll assume there is no energy lost. It's not a bad assumption - most drive trains have efficiencies above 95%, and often 98%. More importantly, we need to account for the efficiencies of the wind turbine and the propeller, neither of which can exceed the Betz Limit. As the wind moves through the turbine (or the water through the propeller), the speed of the fluid changes. Let's call the ratio $\alpha_T$ of the wind speed at the turbine, $v_T$, to the upstream windspeed, $v_u$,

$$
\alpha_T = \frac{v_T}{v_u}.
$$

The force $F_T$ on the wind turbine is

$$
\begin{aligned}
F_T &= \rho_{air} A_T v (v_u - v_d) \\
&= \frac{1}{2} \rho_{air} A_T (v_u + v_d) (v_u - v_d)
\end{aligned}
$$

Substituting $v_T = \alpha_T v_u$,

$$
\begin{aligned}
F_T &= \frac{1}{2} \rho_{air}A_T (v_u + \alpha_T v_u)(v_u - \alpha_T v_u) \\
&= \frac{1}{2} \rho_{air}A_T v_u^2 (1-\alpha_T^2)
\end{aligned}
$$

Conservation of mass requires that at every point in the stream tube the area times the velocity (times density) must remain constant,

$$
A_u v_u = \alpha_T A_T v_u = A_d v_d.
$$

Using Bernoulli's Principle ($P + \frac{1}{2}\rho v^2 = \text{const.}$),

$$
P_\infty + \frac{1}{2} \rho v_u^2 = P_L + \frac{1}{2} \rho [v_u (1-\alpha_T)]^2.
$$

$$
P_\infty + \frac{1}{2} \rho v_d^2 = P_R + \frac{1}{2} \rho [v_u (1-\alpha_T)]^2.
$$

The pressure change across the wind turbine is the difference of these two equations,

$$
\begin{aligned}\Delta P &= P_L - P_R \\
\left( P_L + \frac{1}{2} \rho [\alpha_T v_u]^2 \right) - \left( P_R + \frac{1}{2} \rho [\alpha_T v_u]^2 \right)
&= \left( P_\infty + \frac{1}{2} \rho v_u^2 \right) - \left( P_\infty + \frac{1}{2} \rho v_d^2 \right) \\
&= \frac{1}{2} \rho (v_u^2 - v_d^2). \\
\end{aligned}
$$

The force on the turbine is the power times the swept area of the turbine,

$$
F = PA_T = \frac{1}{2} \rho A_T (v_u^2 - v_d^2).
$$

Momentum must also be conserved, so

$$
F = \rho A_u v_u^2 - \rho A_d v_d^2.
$$

Using these two formulas for the force on the turbine,

$$
\frac{1}{2} \rho A_T (v_u^2 - v_d^2) = \rho A_u v_u^2 - \rho A_d v_d^2.
$$

Multiplying both sides by $2$ and factoring out the density $\rho$ gives

$$
A_T v_u^2 - A_T v_d^2 = 2A_u v_u^2 - A_d v_d^2.
$$

We can use the conservation of mass equation above to solve for the downstream velocity, $v_d$, in terms of the wind speed upstream of the turbine, $v_u$,

$$
\begin{aligned}
\frac{1}{2} \rho A_T (v_u^2 - v_d^2) &= \rho A_u v_u^2 - \rho A_d v_d^2 \\
\frac{1}{2} A_Tv_u^2 - \frac{1}{2} A_T v_d^2 &= A_u v_u^2 - A_d v_d^2 \\
\frac{1}{2} A_Tv_u^2 - A_u v_u^2 &= \frac{1}{2} A_T v_d^2 - A_d v_d^2 \\
\frac{1}{2} A_Tv_u^2 - \alpha_T A_T v_u^2 &= \frac{1}{2} A_T v_d^2 - \alpha_T A_T v_u v_d \\
\frac{1}{2} v_u^2 - \alpha_T v_u^2 &= \frac{1}{2} v_d^2 - \alpha_T v_u v_d \\
v_u^2 - 2 \alpha_T v_u^2 &= v_d^2 - 2 \alpha_T v_u v_d \\
v_d^2 - 2 \alpha_T v_u v_d &- (1 - 2 \alpha_T) v_u^2 = 0.
\end{aligned}
$$

This is a quadratic equation in $v_d$, which we can solve using the quadratic formula. Let $B = -2\alpha_T v_u$ and $C = -(1-2 \alpha_T)v_u^2$,

$$
\begin{aligned}
v_d &= \frac{1}{2}\left( -B \pm \sqrt{B^2-4C} \right) \\
&= \frac{1}{2}\left( 2 \alpha_T v_u \pm \sqrt{ 4 \alpha_T^2 v_u^2 + 4 (1-2\alpha_T)v_u^2} \right) \\
&= \left( \alpha_T v_u \pm v_u \sqrt{ \alpha_T^2 +  (1-2\alpha_T)} \right) \\
&= \left( \alpha_T v_u \pm v_u \sqrt{ (\alpha_T - 1)^2} \right) \\
&= \alpha_T v_u \pm (\alpha_T - 1) v_u \\
&= \{ (2 \alpha_T - 1) v_u, v_u \}.
\end{aligned}
$$

The second solution, $v_d = v_u$ happens only if nothing happens to slow the wind down, and no energy is extracted.

## Power extracted and net forward thrust

The downstream wind velocity through the turbine has slowed to

$$
v_d = (2 \alpha_T - 1) v_u
$$

so the force on the turbine is

$$
\begin{aligned}
F &= \frac{1}{2} \rho A_T (v_u^2 - v_d^2) \\
&= \frac{1}{2} \rho A_T (v_u^2 - (2 \alpha_T - 1)^2v_u^2) \\
&= \frac{1}{2} \rho A_T (1 - (2 \alpha_T - 1)^2) v_u^2 \\
&= \frac{1}{2} \rho A_T (1 - (4 \alpha_T^2 - 4 \alpha_T + 1)) v_u^2 \\
&= \frac{1}{2} \rho A_T (-4 \alpha_T^2 + 4 \alpha_T) v_u^2 \\
&= 2 \rho A_T \alpha_T (1 - \alpha_T) v_u^2. \\
\end{aligned}
$$

Power is force times air velocity at the turbine,

$$
P = F (1 - \alpha_T) v_u = 2 \rho A_T \alpha_T (1-\alpha_T)^2 v_u^3.
$$

Differentiating the power with respect to the parameter $\alpha_T$,

$$
\begin{aligned}
\frac{dP}{d \alpha_T} &= 2 \rho A_T \left( 2 \alpha_T (\alpha_T - 1) + (1 - \alpha_T)^2 \right) v_u^3 \\
&= 2 \rho A_T \left( 3 \alpha_T^2 - 4 \alpha_T + 1 \right) v_u^3,
\end{aligned}
$$

which has a critical point at $\alpha_T = \frac{1}{3}$, giving the maximum efficiency

$$
\begin{aligned}
\eta_{max} &= \frac{P_{max}}{\frac{1}{2} \rho A_T v_u^3} \\
&= \frac{2 \rho A_T \alpha_T (1-\alpha_T)^2 v_u^3}{\frac{1}{2} \rho A_T v_u^3} \\
&= 4 \frac{1}{3} \left( 1 - \frac{1}{3} \right)^2 \\
&= \frac{16}{27}
\end{aligned}
$$

which is the same result we found in [Betz The Limit](https://wildpeaches.xyz/blog/betz-the-limit/). Using $\alpha_T = \frac{1}{3}$,

$$
P_{max} = 2 \rho A_T \frac{4}{27} v_u^3 = \frac{8}{27} \rho A_T v_u^3 = 8 \rho A_T v_T^3,
$$

and

$$
F_{max} \frac{P}{(1-\alpha_T v_u)} = \frac{4}{9} \rho A_T v_u^2 = \frac{4}{3} \rho A_T v_T^2.
$$

The same equations can be derived for the propeller, except we're assuming the water speed is zero before the propeller applies thrust. This means that the water speed downstream is twice the speed at the propeller.

Taking the difference between the thrust of the propeller and the force on the wind turbine gives the net forward thrust,

$$
F_{\text{net}} = \rho_{\text{air}} A_T v_{\text{air}}^2 \left( 0.56 \left( \frac{\rho_{\text{air}} A_T }{\rho_{\text{water}} A_P} \right)^{1/3} - \frac{4}{9} \right).
$$

This case assumes ideal efficiencies and no mechanical losses. Under these conditions, if

$$
\frac{\rho_{\text{air}} A_T }{\rho_{\text{water}} A_P}  > \frac{1}{2},
$$

the net force will be positive and the boat will move forward. Since $\frac{\rho_{\text{air}}}{\rho_{\text{water}}} \approx \frac{1}{1000}$ then

$$
A_T > 500 A_P
$$

or, the ratio of the wind turbine diameter to the propeller diameter needs to be more than $22.4$.

## Faster than the wind in any direction

### Downwind

[Mark Drela](https://aeroastro.mit.edu/faculty-research/faculty-list/mark-drela) is Director of the Wright Brothers Wind Tunnel and a professor in the AeroAstro department at MIT. His interest in the push-me-pull-you concept led him to write ["_Dead-Downwind Faster Than The Wind (DDWFTTW) Analysis._"](https://www.blueplanettimes.com/wp-content/uploads/2010/08/Drela-DDWFTTW-Analysis.pdf) Assume the boat is in motion and the boat velocity is greater than the wind velocity.

![boat-velocities](/assets/img/pushmi-pullyu/boat-downwind-velocities.png)

Power is force times velocity, $P = Fv$, but there will be some loss due to inefficiencies. For the water propeller

$$
P_W = F_P V \eta_P \tag{1}
$$

and for the air turbine

$$
P_A \eta_A = F_A (V-W) \tag{2}
$$

which can be rewritten as

$$
P_A = \frac{1}{\eta_A} F_A (V-W)​.
$$

The efficiency factors $\eta_P$ and $\eta_A$ appear on opposite sides of the equal sign in these two equations because power is being taken from the water with efficiency $\eta_P$, while the wind turbine puts power into the air with efficiency $\eta_A$.

The apparent wind velocity at the air turbine is the difference between the boat velocity $V$ and the true wind speed $W$. Although the transmission gear efficiency is usually quite high, some loss will occur, so the power at the air turbine will be less than the power at the propeller,

$$
P_A = P_W \eta_G. \tag{3}
$$

Substituting $(1)$ and $(2)$ into $(3)$,

$$
\begin{aligned}
\frac{F_A (V-W)}{\eta_A} &= F_P V \eta_P \eta_G \\
F_A &= F_P \frac{V}{V-W} \eta_P \eta_G \eta_A. \\
\end{aligned}
$$

The available force to push the boat downwind is the difference between the force generated by water on the propeller and the force generated by the air turbine,

$$
\begin{aligned}
F_{\text{net}} &= F_A - F_W = \left( F_P \frac{V}{V-W} \eta_P \eta_G \eta_A \right) - \left( F_P V \eta_P \eta_G \right) \\
&= F_P \left( \frac{V}{V-W} \eta_P \eta_G \eta_A - 1  \right).
\end{aligned}
$$

For the net force on the boat to be positive, this condition has to be true:

$$
\frac{V}{V-W} \eta_P \eta_G \eta_A > 1.
$$

### Upwind

![boat-upwind-velocities](/assets/img/pushmi-pullyu/boat-upwind-velocities.png)

Reversing the wind direction, the same analysis is possible, but the apparent wind velocity at the air turbine is $W+V$. The power extracted by the air turbine becomes

$$
P_A = F_A (V+W) \eta_A \\
$$

and the power provided by the propeller is

$$
\begin{aligned}
P_W \eta_P &= F_P V \\
P_W &= \frac{F_P V}{\eta_P}.
\end{aligned}
$$

The gearing results in power loss from the air turbine to the propeller,

$$
P_W = P_A \eta_G,
$$

so

$$
\begin{aligned}
F_P V &= F_A (V+W) \eta_A \eta_G \eta_P \\
F_P &= F_A \frac{V+W}{V} \eta_A \eta_G \eta_P
\end{aligned}
$$

The net force is the force of the propeller minus the force on the turbine,

$$
F_{\text{net}} = F_P - F_A = F_A \left( \frac{V+W}{V} \eta_A \eta_G \eta_P - 1  \right).
$$

As in the downwind case, if

$$
\frac{V+W}{V} \eta_A \eta_G \eta_P > 1
$$

then the boat will move directly into the wind.

## Enough with all of the physics equations!

Is there a more intuitive way to understand how a boat can go downwind faster than the wind using an air turbine connected to a propeller? The [Greenbird](http://www.greenbird.co.uk/about-the-greenbird/how-it-works) is a wind-powered land vehicle equipped with a wing sail able to reach 126.2 mph. The physics are the same as described for iceboats above, but by carefully minimizing drag and maximizing the power derived from the wing, the team set the world land speed record.

Rick Cavallaro and his team built the [Blackbird](https://www.lockhaven.edu/~dsimanek/museum/ddwfttw.htm) achieving downwind speeds three times the wind speed, using a turbine geared to the wheels. When the vehicle begins moving downwind, the wheels turn which drives the turbine. The air at the turbine moves backward relative to the position of the cart causing it to accelerate. This makes the wheels turn faster, turning the turbine blades faster. The key is to understand this from the point of view of the person sitting in the cart. To the driver, the wheels spin due to the forward motion of the vehicle, while the turbine blows the air backwards relative to the vehicle.

![blackbird](/assets/img/pushmi-pullyu/blackbird.jpg)

[Rick](https://www.youtube.com/watch?v=X6oJpnSJyV8) gave a talk to the St. Francis Yacht Club on January 18, 2017, in which he gives multiple explanations about why the physics works. In the talk, he says he's found that no single explanation seems to satisfy everyone, so he gives several ways to think about it and hopes that one will work for you. Another explanation was provided by [particlezoo](https://www.physicsforums.com/threads/ddwfttw-looking-for-the-least-confusing-explanation.896869/) on the Physics Forums, but seeing is believing, so check out Derek Muller's Veritasium channel, ["Risking My Life To Settle A Physics Debate"](https://www.youtube.com/watch?v=jyQwgBAaBag&t=19s).

Even after building the Blackbird and having the North American Land Sailing Association certify it went 2.8 times the speed of the wind downwind, not everyone was convinced. Rick wrote an article for Wired Magazine in 2010 called ["A Long, Strange Trip Downwind Faster Than the Wind"](https://www.wired.com/2010/08/ddwfttw/) where he describes the reaction from aerodynamicists and physicists detailing all of the violations of the Laws of Thermodynamics, and the impossibility of such a vehicle. A friend told him, “Someday one of these will hang from the rafters of the Air and Space Museum with a plaque which will read, ‘In the early part of the century, this device caused physics and aero professors everywhere to storm out of their classrooms in absolute frustration.’”

![ddwfttw](/assets/img/pushmi-pullyu/ddwfttw.jpg)
