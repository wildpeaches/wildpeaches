---
title: Extending Time
subtitle: Cesàro Sums, String Theory, and Vantablack in 3D!
author: John Peach
lede:
hero:
  url: /assets/img/2024-08-22-extending-time/the-persistence-of-memory-1931-salvador-dali.webp
  alt:
tags: [mathematics, clock design, 3D printing, string theory, Euler's Identity, Cesàro sums]
keywords: [Cesàro summability, mathematical expressions, quantum mechanics, FreeCAD, infinite series]
socialImg: /assets/img/the-persistence-of-memory-1931-salvador-dali.webp
software: ['freecad']
---

[Home](https://wildpeaches.github.io/)

> He say, "One and one and one is three"
> Got to be good-lookin' 'cause he's so hard to see
>
> - *Come Together*, The Beatles

## The Face of Time

For my birthday this year, Sara and Max gave me a math clock with the hours shown as trigonometric identities. Time is a concept we encounter every day, often represented by the simple numbers 1 through 12 on a clock face. 

But what if we could reimagine these numbers, expressing them through the lens of advanced mathematics? This article looks into some unusual mathematics, from Euler's Identity to Cesàro summability, and even touches on the intriguing connections to string theory. 

The next idea I had was to 3D print the equations onto disks that could be clipped to the edge of the clock so I could have both versions. The original angle versions would still be visible, but the new equations could be extended around the edges.



![angle-clock](/assets/img/2024-08-22-extending-time/angle-clock.webp)



We'll dive into the world of mathematical expressions, from simple arithmetic to complex theories, and discover alternative ways to represent the numbers on a clock face. The first step was to come up with unique expressions for the numbers 1 through 12, and along the way, we'll dive into Cesàro summability, string theory, and 3D printing.

### One

[Euler's Identity](https://en.wikipedia.org/wiki/Euler%27s_identity) is
$$
e^{i \pi}+1=0
$$
and is considered the most beautiful equation in mathematics because it combines the exponential function $e$, the imaginary number $i$, the ratio of the circumference of a circle to its diameter, $\pi$ and the additive and multiplicative identities $0$ and $1$. 

Geometrically, the complex number $z = x + iy$ is a point in the complex plane with coordinates $(x,y)$. It can also be thought of in terms of polar coordinates, $(r,\phi)$ where $r = \sqrt{x^2 + y^2}$ and $\phi$ is the counterclockwise angle from the $x-$axis.

![Euler's_formula](/assets/img/2024-08-22-extending-time/eulers-formula.webp)

<p align = "center"><b>Euler's identity for one</b></p>

Euler's formula says that $z = re^{i \phi}$ and when $\phi = \pi$, $z$ is the point $(-1,0)$ so $-e^{i \pi} = 1$.

### Two

In base 2, $2  = 10$. It just looks like it was put on the wrong side of the clock.

### Three

If $a,b,c,d$ are in [arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression) then 
$$
3 = \frac{d^2 - a^2}{c^2 - b^2} \; (a,b,c,d) \in AP.
$$
An arithmetic progression is a sequence of integers such that the differences between any two successive terms remain the same. The sequence ${1,4,7,10, \ldots}$ is an arithmetic progression because the difference between the numbers is always $3$.

[Proof](https://math.stackexchange.com/questions/505367/collection-of-surprising-identities-and-equations) ([Kieren MacMillan](https://math.stackexchange.com/users/93271/kieren-macmillan)): 

Let $\delta$ be the constant between successive terms of an arithmetic sequence, $(a,b,c,d) = (a,a+\delta,a+2\delta,a+3\delta)$. Then, write the expression above in terms of $\delta$, and use the fact that the difference of squares is
$$
x^2-y^2 = (x-y)(x+y)
$$
 to get the result.
$$
\frac{d^2 - a^2}{c^2 - b^2} = \frac{(d-a)(d+a)}{(c-b)(c+b)} = \frac{(3\delta)(2a + 3\delta)}{(\delta)(2a+3\delta)} = 3.
$$


### Four

[Euler's formula](https://en.wikipedia.org/wiki/Machin-like_formula):
$$
4 = \frac{\pi}{\arctan\left(\frac{1}{2} \right) + \arctan\left(\frac{1}{3} \right)}
$$

### Five

This is just a rearrangement of the [Golden ratio](https://en.wikipedia.org/wiki/Golden_ratio)
$$
5 = (2 \phi - 1)^2.
$$

### Six

Six is $3!$.

### Seven

This is an [approximation](https://math.stackexchange.com/questions/505367/collection-of-surprising-identities-and-equations):
$$
\left(\sum_{k=0}^\infty \frac{2k}{10^{2k}} \right)^{-1/2} = \frac{99 \sqrt{2}}{20} \approx 7.000357133746821.
$$

To get this approximation, let's evaluate the sum inside the parentheses: $S = \sum_{k=0}^\infty \frac{2k}{10^{2k}}$. This series can be derived from the [geometric series](https://mathworld.wolfram.com/GeometricSeries.html) 
$$
\sum_{k=0}^\infty x^k = \frac{1}{1-x} \text{ for } |x| < 1.
$$
Differentiating both sides with respect to $x$,
$$
\sum_{k=1}^\infty kx^{k-1} = \frac{1}{(1-x)^2}
$$
and then multiplying both sides by $x$,
$$
\sum_{k=1}^\infty kx^k = \frac{x}{(1-x)^2}.
$$
The $k=0$ term can be omitted since $\frac{2 \cdot 0}{10^{2 \cdot 0}} = 0.$ The value of $x$ here doesn't matter so long as $|x| < 1$. Letting $x = \frac{1}{100}$ gives 
$$
S = 2\sum_{k=1}^\infty \frac{k}{100^k} = 2 \cdot \frac{\frac{1}{100}}{(1-\frac{1}{100})^2} = 2 \cdot \frac{\frac{1}{100}}{(\frac{99}{100})^2}=2 \cdot \frac{100}{9801}.
$$
Substitute this back into the original expression to get
$$
\begin{aligned}
\left(\sum_{k=0}^\infty \frac{2k}{10^{2k}} \right)^{-1/2} &= \left(2 \cdot \frac{100}{9801}\right)^{-1/2} = \left(\frac{9801}{200}\right)^{1/2} \\
&= \frac{99}{10\sqrt{2}} = \frac{99 \sqrt{2}}{20}.
\end{aligned}
$$

### Eight

We'll combine eight and nine, so $8 = 2^3$, and

### Nine

$9 = 3^2$.

### Ten

$$
\begin{aligned}
10 &= \frac{1}{\sigma \sqrt{2 \pi}} \left( \sum_{n=1}^4 n \right) \int_{-\infty}^\infty e^{-\frac{1}{2} \left( \frac{x - \mu}{\sigma} \right)^2}  \; dx \\
&= \frac{\sum_{n=1}^4 n}{\sigma \sqrt{2 \pi}}  \int_{-\infty}^\infty e^{-\frac{1}{2} \left( \frac{x - \mu}{\sigma} \right)^2}  \; dx 
\end{aligned}
$$
The term in the middle is $1 + 2 + 3 + 4 = 10$, and everything else is the integral of the [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) which by definition must be $1$. The second line is a bit more compact.

### Eleven

In base $7$, eleven is $14_7$. We probably should have written $2 = 10_2$, but it would have taken away some of the obfuscation.

### Twelve

For the equation at high noon, we'll use the [fact that](https://www.youtube.com/watch?v=w-I6XTVZXww) the infinite sum,
$$
1 + 2 + 3 + 4 + 5 + 6 + \ldots = -\frac{1}{12}.
$$
This sum looks completely impossible, but it depends on a special interpretation of the sums of infinite sequences and leads to an important result in string theory.

Ernesto Cesàro was an Italian mathematician who worked mainly in the area of differential geometry.

![ErnestoCesaro](/assets/img/2024-08-22-extending-time/ErnestoCesaro.webp)

<p align = "center"><b>Ernesto Cesàro</b></p>

He thought about infinite series, and how you might define the sum of such a series even if it doesn't converge. In **Seven** we used the convergent geometric series to derive the approximation, but not all series converge which means that the infinite sum doesn't approach a finite value. There are [several tests](https://www.csusm.edu/mathlab/documents/seriesconvergediverge.pdf) to determine whether an infinite series is convergent or divergent. 	

Cesàro thought about series that are somewhere between convergent and divergent. Maybe the series doesn't settle down to a single value, but what if the average does? For example, the series $(1,-1,1,-1, \ldots)$ has partial sums (sums after the first $n$ terms) of $s_k = (1,0,1,0, \ldots)$. Cesàro saw that the average does converge because the sum of this new sequence divided by the number of terms becomes
$$
t_n = \frac{1}{n} \sum_{k=1}^{n-1} s_k = \left( \frac{1}{1}, \frac{1}{2}, \frac{2}{3}, \frac{2}{4}, \ldots \right) \rightarrow \frac{1}{2}.
$$
Another way to think about this is to let $S_1$ be the sum $1-1+1-1 \ldots$ The terms may be grouped in two ways,
$$
\begin{aligned}
S_1 &= (1 -1) + (1 -1) + (1 -1) \ldots = 0 \\
S_1 &= 1 + (-1 + 1) + (-1 + 1) + (-1 + 1) \ldots = 1.
\end{aligned}
$$
Adding the two rows together gives $2S_1 = 1$ or $S_1 = \frac{1}{2}$. So the question Cesàro asked was, does the sum $S_1$ converge to $0,1, \frac{1}{2}$, or [nothing at all](https://www.scientificamerican.com/article/1-the-paradox-of-1-1-1-1-1-1/)? 

Let's carry on with the Cesàro sum of $S_1 = \frac{1}{2}$ and let $S_2$ be the series
$$
S_2 = 1 - 2 + 3 - 4 + 5 - 6 \ldots
$$
Now, add $S_2 + S_2$, but with the second shifted by one place,
$$
\begin{aligned}
S_2 &= 1 - 2 + 3 - 4 + 5 - 6 + \ldots \\
S_2 &= 0 + 1 - 2 + 3 - 4 + 5 - \ldots \\
&= 1 - 1 + 1 - 1 + 1 - 1 + \ldots
\end{aligned}
$$
so $2 S_2 = S_1 = \frac{1}{2},$ or $S_2 = \frac{1}{4}$. 

Now define a new series
$$
S = \sum_{n=1}^\infty n = 1 + 2 + 3 + 4 + \ldots
$$
 and take the difference between $S$ and $S_2$,
$$
\begin{aligned}
S - S_2 &= 1 + 2 + 3 + 4 + \ldots \\
&-1 + 2 - 3 + 4 - \ldots \\
&= 0 + 4 + 0 + 8 + \ldots \\
&= 4(1 + 2 + 3 + 4 + \ldots)
\end{aligned}
$$
Thus $S - S_2 = 4S$ so 
$$
3S = -S_2 = -\frac{1}{4} \Rightarrow S = -\frac{1}{12}.
$$
Now high noon can be expressed as
$$
12 = -\left( \sum_{n=1}^\infty n \right)^{-1}.
$$

This seems like the mathematical weirdness equivalent of quantum mechanics! In fact, this strange identity is used in string theory to combine the ideas of general relativity and quantum mechanics.

## String Theory

Physics has two main branches of thought - general relativity and quantum mechanics, and string theory attempts to reconcile the two. **[General relativity](https://www.space.com/17661-theory-general-relativity.html)** gives a geometric interpretation of gravity in which space and time are deformed by mass. 

![general-relativity](/assets/img/2024-08-22-extending-time/general-relativity.webp)

<p align = "center"><b>Spacetime Warping</b></p>

General relativity has been thoroughly tested and shown to explain the slight perturbation of [Mercury's orbit](https://www.discovermagazine.com/the-sciences/relativitys-long-string-of-successful-predictions) due to the mass of the Sun, and how the speed of light is reduced in the presence of a large mass. 

While general relativity operates mainly on very large scales, quantum mechanics is valid for small scales, mainly at the size of atoms and below. 

**[Quantum mechanics](https://www.energy.gov/science/doe-explainsquantum-mechanics#:~:text=Quantum%20mechanics%20is%20the%20field,%E2%80%9Cwave%2Dparticle%20duality.%E2%80%9D)** is the branch of physics that deals with the behavior of matter and energy at the smallest scales, such as atoms and subatomic particles. It introduces concepts that differ significantly from classical physics, including wave-particle duality, quantization of energy levels, and the principle of superposition, where particles can exist in multiple states simultaneously until measured. Quantum mechanics successfully describes three of the four fundamental forces of nature—electromagnetism, the strong nuclear force, and the weak nuclear force—through the framework of quantum field theory.

![quantum-mechanics](/assets/img/2024-08-22-extending-time/quantum-mechanics.webp)

<p align = "center"><b>The Hydrogen Wave Function</b></p>

### The Gravity Problem

The challenge arises when trying to incorporate gravity into this quantum framework. Gravity is described by general relativity, formulated by Albert Einstein, which portrays gravity not as a force but as the curvature of spacetime caused by mass. In this view, massive objects like planets and stars warp the fabric of spacetime, and other objects move along the paths dictated by this curvature. This geometric interpretation contrasts sharply with the particle-based approach of quantum mechanics, where forces are mediated by particles (like photons for electromagnetism).

The fundamental incompatibility stems from the fact that general relativity operates in a smooth, continuous spacetime, while quantum mechanics relies on discrete, quantized interactions. When physicists attempt to apply quantum principles to gravity, they encounter significant difficulties, such as non-renormalizable infinities that arise in calculations involving gravitational interactions. This means that, unlike the other forces, gravity does not fit neatly into the quantum framework, leading to the so-called **["gravity problem."](https://www.quantamagazine.org/the-physicist-who-bets-that-gravity-cant-be-quantized-20230710/#:~:text=Quantizing%20gravity%20causes%20trouble%20because,deep%20conceptual%20and%20mathematical%20problems.&text=But%20since%20the%20particle%20has,field%20that%20we%20can%20measure.)**

Efforts to unify quantum mechanics and general relativity into a single coherent theory, often referred to as **[quantum gravity](https://magazine.caltech.edu/post/quantum-gravity)**, have led to various approaches, including string theory and loop quantum gravity. However, a complete and experimentally validated theory that successfully merges these two foundational pillars of physics remains elusive. The quest for such a unifying theory continues to be one of the most profound challenges in modern theoretical physics.

### String theory as a solution to the gravity problem

**[String theory](https://www.space.com/17594-string-theory.html#:~:text=String%20theory%20is%20a%20collection,Imagine%20microscopic%20wiggling%20rubber%20bands.)** is a theoretical framework in physics that attempts to reconcile quantum mechanics and general relativity. String theory says that the fundamental constituents of the universe are not point-like particles, but rather tiny, vibrating strings of energy. These strings, which exist in multiple dimensions beyond the four we can observe (three spatial and one time), vibrate in different ways to give rise to all the particles and forces we see in nature.

The idea of string theory first arose in the late 1960s and has since evolved into a complex and multifaceted field of study. One of its most striking features is the assertion that our universe may have many more dimensions than we can perceive – typically 9, 10, or 25 dimensions of space. These extra dimensions are thought to be compactified, or curled up so tightly that they are invisible to us, yet they play a crucial role in determining the properties of our universe  (see [C is for Calabi-Yau Manifolds](https://www.maths.ox.ac.uk/outreach/oxford-mathematics-alphabet/c-calabi-yau-manifolds)).

![CalabiYau5](/assets/img/2024-08-22-extending-time/CalabiYau5.webp)

<p align = "center"><b>Calabi-Yau Manifold</b></p>

String theory has the potential to unify all fundamental forces and particles under a single theoretical umbrella and it offers a way to describe gravity at the quantum level, but it remains highly speculative. It has yet to make testable predictions that could conclusively prove or disprove its validity, leading to ongoing debates about its place in modern physics. Nonetheless, the mathematical insights derived from string theory have had far-reaching impacts in various areas of theoretical physics and mathematics, ensuring its continued relevance in scientific discourse.

String theory, a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings, has a profound relationship with Cesàro sums. In the context of string theory, Cesàro sums are often used to deal with the infinities that arise in the calculation of the energy levels of a string. The energy levels of a string are given by a series that is divergent, meaning that it does not have a finite sum in the usual sense. However, by using Cesàro summation, one can assign a finite value to this series. This finite value is then interpreted as the physical energy of the string.

Moreover, the use of Cesàro sums in string theory is not just a mathematical trick but has deep physical implications. It is related to the fact that string theory includes a new kind of symmetry, called "[worldsheet duality](https://www.sciencedirect.com/science/article/pii/S0370269310013092)", which is not present in ordinary particle physics. This symmetry essentially states that a string propagating in a space with a large radius of curvature is equivalent to a string propagating in a space with a small radius of curvature. The use of Cesàro sums is crucial for this duality to hold.

Cesàro sums are an essential tool in string theory, used to make sense of the divergent series that appear in the theory and to ensure the consistency of the theory's novel symmetries.

### Cesàro sums in String Theory

The infinite sum resulting from Cesàro summation  is a result that arises from the realm of analytic continuation and regularization techniques in mathematics. This result, while counterintuitive, finds significant applications in string theory, particularly in the context of quantum field theory and the calculation of certain physical quantities.

In string theory, the concept of a string propagating through spacetime leads to the emergence of various mathematical structures, including the need to handle infinite sums. The sum can be interpreted through the lens of **[zeta function regularization](https://en.wikipedia.org/wiki/Zeta_function_regularization)**, where the Riemann zeta function $\zeta(s)$ is analytically continued to values where it does not converge. This result is crucial in string theory, particularly in the calculation of the vacuum energy of strings. When considering the quantum fluctuations of strings, one encounters divergent sums that can be regularized using this technique. The negative value of $-\frac{1}{12}$ can be interpreted as a contribution to the energy density of the vacuum, which has profound implications for the stability and dynamics of string theory models.

The application of this sum in string theory is not merely mathematical; it has physical consequences. For instance, the appearance of $-\frac{1}{12}$  in calculations related to the Casimir effect—a phenomenon where [vacuum fluctuations](https://phys.org/news/2020-08-vacuum-fluctuations-space.html) lead to observable forces between objects—demonstrates how such infinite sums can influence physical predictions. In string theory, the regularization of these sums allows physicists to derive finite results from otherwise divergent series, leading to a more coherent understanding of the underlying physics. In summary, the infinite sum serves as a powerful tool in string theory, enabling the treatment of divergences and contributing to the rich tapestry of quantum field theory. Its implications extend beyond mathematics, influencing our understanding of fundamental forces and the structure of the universe.

### The Casimir Effect

The **[Casimir effect](https://pubs.aip.org/physicstoday/article/74/1/42/396280/Science-and-technology-of-the-Casimir-effectCaused)** is a physical phenomenon that arises from the quantum fluctuations of the vacuum between two closely spaced conductive plates. When these plates are placed in a vacuum, they restrict the types of virtual particles that can exist between them, leading to a measurable force that pulls the plates together. This effect is a direct consequence of quantum field theory, where the vacuum is not empty but filled with fluctuating fields. 

![Casimir-Effect-july14](/assets/img/2024-08-22-extending-time/Casimir-Effect-july14.webp)

<p align = "center"><b>Casimir Effect</b></p>

The energy density of these fluctuations can be calculated by considering the allowed modes of oscillation between the plates, which leads to an infinite sum over the frequencies of these modes.

To compute the energy associated with these modes, one typically encounters divergent sums. For instance, the energy density can be expressed as:

$$
E \sim \sum_{n=1}^{\infty} \frac{1}{L^n}
$$
where $L$ is the separation between the plates. This sum diverges, but through the technique of zeta function regularization, one can assign a finite value to it. This is where the Riemann zeta function comes into play.

### Riemann Zeta Function and Regularization

The **[Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function)**, $\zeta(s)$, is defined for complex numbers $s$ with a real part greater than $1$ as:
$$
\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s}
$$
However, it can be analytically continued to other values of $s$, including negative integers. For example, at $s = -1$, the zeta function yields:
$$
\zeta(-1) = \sum_{n=1}^{\infty} \frac{1}{n^{-1}} = \sum_{n=1}^{\infty} n = -\frac{1}{12}.
$$
This result is particularly striking because it implies that the sum of all natural numbers, $\sum_{n=1}^{\infty} n$, can be assigned the value $-\frac{1}{12}$ through this regularization process. 

In the context of the Casimir effect, the energy density can be expressed in terms of the zeta function, allowing physicists to extract meaningful physical predictions from otherwise divergent series. The regularization effectively "removes" the infinities by subtracting divergent contributions, leading to a finite and physically significant result. 

The relationship between the infinite sum of natural numbers and the Riemann zeta function is rooted in the concept of analytic continuation. While the series $\sum_{n=1}^{\infty} n$ diverges in the traditional sense, the zeta function provides a framework to assign it a finite value through a process that involves complex analysis. This connection illustrates how mathematical techniques can bridge the gap between abstract mathematics and physical phenomena, such as the Casimir effect, where the implications of these sums manifest in observable forces and energies in quantum field theory. 

In summary, the Casimir effect demonstrates the utility of the Riemann zeta function in regularizing divergent sums, allowing physicists to derive finite results from infinite series, thereby enhancing our understanding of quantum mechanics and field theory.

But, before we get too excited about the future of string theory, [Peter Woit](https://www.math.columbia.edu/~woit/) writes in his review of Joseph Conlon's book [*Why String Theory?*](https://www.routledge.com/Why-String-Theory/Conlon/p/book/9781482242478) 

> Of the fourteen chapters of the book, chapter 7 is entitled “Direct Experimental Evidence for String Theory.” Here’s the entire content of chapter 7:
>
> > There is no direct experimental evidence for string theory.

Maybe physicists should rethink zeta function regularization?

![string-theory-xkcd](/assets/img/2024-08-22-extending-time/string-theory-xkcd.webp)

## FreeCAD

With that diversion into string theory, let's get back to 3D printing mathematics.

To build the 3D-printed parts for the equations, I chose [FreeCAD](https://www.freecad.org/), an open-source parametric computer-aided design system. Start FreeCAD, and select the *Part* workbench. Choose the top view so the $x-$axis points to the right and the $y-$​axis is up. The clip is composed of cubes, cylinders, and a ring fused with Boolean operations.  

![equation-clip](/assets/img/2024-08-22-extending-time/equation-clip.webp)

<p align = "center"><b>Equation clip in FreeCAD</b></p>

To generate the equation images, I used the online [Equation Editor](https://editor.codecogs.com/) and downloaded the image in [.svg](https://en.wikipedia.org/wiki/SVG) format, 20-point font, 120-pixel output resolution with transparent background and block compression. To make the [equation bold](https://www.baeldung.com/cs/latex-bold-math-symbols), put the LaTeX in math bold, e.g. `\mathbf{10}`. Another option is to use the [LaTeX Previewer](http://www.tlhiv.org/ltxpreview/) using `$$ \mathbf{14_7} $$`. 

Import the .svg figure into [TinkerCAD](https://www.tinkercad.com/dashboard) and adjust the dimensions. You can adjust the length and width by dragging a corner to a new position. Record the dimensions before making the adjustments so you can maintain the ratios. After adjusting the length and width, use the pop-up dialog to set the height to 4 mm. 

![one-svg-to-stl](/assets/img/2024-08-22-extending-time/one-svg-to-stl.webp)

<p align = "center"><b>Euler's Identity in TinkerCAD</b></p>

I thought it might be fun to paint the clip with [Vantablack](https://www.surreynanosystems.com/about/vantablack), a paint that absorbs over 99% of incident light and has got to be good-lookin' 'cause it's so hard to see. Rolling orange paint onto the equations would make them appear to float over an abyss of nothingness. I assume that Vanta Black is the antimatter nemesis of [Vanna White](https://en.wikipedia.org/wiki/Vanna_White).

*See: [**3D Print SVG Lineart (Inkscape and Tinkercad)**](https://www.instructables.com/3D-Print-SVG-Lineart-Inkscape-and-Tinkercad/) * 

## Equation clip dimensions

How big can we make the clips? This question was posed in the [Classical Mathematics Group](https://www.facebook.com/photo/?fbid=420796757312722&set=a.118796690846065), what is the ratio of $r$ to $R$?



![radii-ratios](/assets/img/2024-08-22-extending-time/radii-ratios.webp)

<p align = "center"><b>Circle Ratios</b></p>

The ratio 
$$
\frac{r}{r+R} = \sin \theta
$$
so to simplify the notation, let $u = \sin \theta$. Then
$$
\begin{aligned}
r &= u (r + R) \\
&= ur + uR \\
r - ur &= (1-u)r = uR \\
&\Rightarrow \frac{r}{R} = \frac{u}{1-u}.
\end{aligned}
$$
Since $\theta = 15 \degree$ and 
$$
\sin \left( \frac{\alpha}{2} \right) = \sqrt{ \frac{1 + \cos{\alpha}}{2} }
$$
when $\alpha = 30 \degree$, $\cos \alpha = \frac{ \sqrt{3} }{2}$  and for $\theta = \frac{\alpha}{2}$ 
$$
\begin{aligned}
u &= \sin \theta = \sin \left( \frac{\alpha}{2} \right) = \sqrt{ \frac{1 + \cos{\alpha}}{2} } \\
&= \sqrt{ \frac{1 + \frac{\sqrt{3}}{2}}{2} } = \sqrt{ \frac{\frac{2}{2} + \frac{\sqrt{3}}{2}}{2} } \\
&= \frac{1}{2} \sqrt{2 + \sqrt{3}}.
\end{aligned}
$$

With that, you have all of the tools to either extend time or waste time. Your choice.

## Image credits

Hero: *[The Persistence of Memory](https://www.singulart.com/en/blog/2019/09/10/the-persistence-of-memory-and-salvator-dalis-contribution-to-surrealism/)*, Salvador Dali, 1931.

One: Wikimedia Commons - Gunther

Ernesto Cesàro: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:ErnestoCesaro.webp) 

Spacetime Warping: *canbedone/Shutterstock*

The Hydrogen Wave Function: [DOE Explains...Quantum Mechanics](https://www.energy.gov/science/doe-explainsquantum-mechanics#:~:text=Quantum%20mechanics%20is%20the%20field,%E2%80%9Cwave%2Dparticle%20duality.%E2%80%9D)

Calabi-Yau Manifold: [C is for Calabi-Yau Manifolds](https://www.maths.ox.ac.uk/outreach/oxford-mathematics-alphabet/c-calabi-yau-manifolds)

Casimir Effect: [BYJU's](https://byjus.com/physics/casimir-effect/) 

String Theory Summarized: [XKCD](https://xkcd.com/171/), Randall Munroe

Equation clip in [FreeCAD](https://www.freecad.org/)

Euler's Identity in [TinkerCAD](https://www.tinkercad.com/dashboard)

Circle Ratios: [Classical Mathematics Group](https://www.facebook.com/photo/?fbid=420796757312722&set=a.118796690846065)

## References and further reading

- [What is String Theory?](https://youtu.be/TI6sY0kCPpk) Brian Greene, World Science Festival, Jul 25, 2019
- [What is string theory?](https://www.space.com/17594-string-theory.html#:~:text=String%20theory%20is%20a%20collection,Imagine%20microscopic%20wiggling%20rubber%20bands.) Nick Geiser, Space.com, May 18, 2023
- [String Theory](https://www.newscientist.com/definition/string-theory/), NewScientist
- [String Theory](https://byjus.com/physics/stringtheory/), Byju's
- [Why Is M-Theory the Leading Candidate for Theory of Everything?](https://www.quantamagazine.org/why-is-m-theory-the-leading-candidate-for-theory-of-everything-20171218/) Natalie Wolchover, Quanta Dec 18, 2017.
- [String Theory For Dummies Cheat Sheet](https://www.dummies.com/article/academics-the-arts/science/physics/string-theory-for-dummies-cheat-sheet-209405/),  Andrew Zimmerman Jones and Alessandro Sfrondrini, Jun 30, 2022.
- [String theory: it's not dead yet](https://www.newscientist.com/article/dn11882-string-theory-its-not-dead-yet/). [Sean Carroll](https://www.newscientist.com/author/sean-carroll/), NewScientist, May 19, 2007.
- [String Theory Ties Us in Knots](https://www.abc.net.au/science/articles/2010/08/31/2997489.htm), ABC Science,  Aug 31, 2010.
- [The roots and fruits of string theory](https://cerncourier.com/a/the-roots-and-fruits-of-string-theory/). Matthew Chalmers, CERN Courier, Oct 29, 2018.
- [Understanding vacuum fluctuations in space](https://phys.org/news/2020-08-vacuum-fluctuations-space.html), University of Regensburg Aug 10, 2020.
- [C is for Calabi-Yau Manifolds](https://www.maths.ox.ac.uk/outreach/oxford-mathematics-alphabet/c-calabi-yau-manifolds), Andreas Braun
- [The Most Astonishing Proof In String Theory: How The Sum 1+2+3+4+… Is Equal To -1/12?](https://www.scienceabc.com/eyeopeners/how-is-the-sum-1234-equal-to-112.html), Akash Peshin, Oct 19, 2023.
- [Two physicists explain: The sum of all positive integers equals −1/12](https://pubs.aip.org/physicstoday/online/11638). Steven T. Corneliussen, Feb 4, 2014.
- [What do we get if we sum all the natural numbers?](https://www.nottingham.ac.uk/~ppzap4/response.html).  Tony Padilla.
- [The Euler-Maclaurin formula, Bernoulli numbers, the zeta function, and real-variable analytic continuation](https://terrytao.wordpress.com/2010/04/10/the-euler-maclaurin-formula-bernoulli-numbers-the-zeta-function-and-real-variable-analytic-continuation/). Terence Tao, Apr 10, 2010.
- [Divergent Series: why 1+2+3+··· = −1/12](https://math.arizona.edu/~cais/Papers/Expos/div.pdf). Bryden Cais. 
- [The Paradox of 1 – 1 + 1 – 1 + 1 – 1 + …](https://www.scientificamerican.com/article/1-the-paradox-of-1-1-1-1-1-1/) Jack Murtaugh, Scientific American, Aug 16, 2024
- [Why Einstein’s General Relativity Theory Is Still Right After 100 Years](https://www.azoquantum.com/Article.aspx?ArticleID=361), Robert Lea, AZO Quantum, Aug 8, 2022.
- [Relativity's Long String of Successful Predictions](https://www.discovermagazine.com/the-sciences/relativitys-long-string-of-successful-predictions), [Adam Hadhazy](https://www.discovermagazine.com/author/ahadhazy), Discover Magazine, Feb 25, 2015.
- [What is the theory of general relativity?](https://www.space.com/17661-theory-general-relativity.html).  Nola Taylor Tillman, Meghan Bartels, Scott Dutfield, [Space.com](https://www.space.com/), May 14, 2023.
- [DOE Explains...Quantum Mechanics](https://www.energy.gov/science/doe-explainsquantum-mechanics#:~:text=Quantum%20mechanics%20is%20the%20field,%E2%80%9Cwave%2Dparticle%20duality.%E2%80%9D), DOE Office of Science.
- [The Physicist Who’s Challenging the Quantum Orthodoxy](https://www.quantamagazine.org/the-physicist-who-bets-that-gravity-cant-be-quantized-20230710/#:~:text=Quantizing%20gravity%20causes%20trouble%20because,deep%20conceptual%20and%20mathematical%20problems.&text=But%20since%20the%20particle%20has,field%20that%20we%20can%20measure.). 
- [Is Space Pixelated?](https://magazine.caltech.edu/post/quantum-gravity) Whitney Clavin, Caltech Magazine, Nov 29, 2021.
- [Science and technology of the Casimir effect](https://pubs.aip.org/physicstoday/article/74/1/42/396280/Science-and-technology-of-the-Casimir-effectCaused), Alexander Stange; David K. Campbell; David J. Bishop, Physics Today, Jan 2021
