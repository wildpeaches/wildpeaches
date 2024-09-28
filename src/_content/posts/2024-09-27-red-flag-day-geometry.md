---
title: Red-Flag Day Geometry
subtitle: Linear Algebra and Heron's Formula
author: John Peach
lede:
hero:
  url: /assets/img/2024-09-27-red-flag-day-geometry/red-flag-day.webp
  alt:
tags: [geometry, mathematics, problem-solving, linear algebra]
keywords: [line intersection, Heron's formula, cross product, triangle area, Geogebra]
socialImg: /assets/img/
software: ['geogebra', 'julia']
---

[Home](https://wildpeaches.github.io/)

We're relaxing at the beach in Corolla, NC this week. It's after Labor Day so prices are down and the crowds have left. The first couple of days were red-flagged meaning you can't get in the water, but yesterday was fine and I got a boogie board and jumped in. But an offshore storm is developing and today is red-flag again. Even the birds don't want to take off.

![20240912_113509](/assets/img/2024-09-27-red-flag-day-geometry/birds.webp)

Luckily for me, I found this geometry problem to mess around with:

![geometry-problem](/assets/img/2024-09-27-red-flag-day-geometry/geometry-problem.webp)

There are many ways to solve this, but I thought it might be interesting to try something a little different. Here's the same problem in [Geogebra](https://www.geogebra.org/graphing):

![geogebra-image](/assets/img/2024-09-27-red-flag-day-geometry/geogebra-image.webp)

<p align = "center"><b>Geogebra Line Intersection Solution</b></p>

The intersection of line $AB$ and line $DE$ is $F = (\frac{8}{3},\frac{8}{3})$ and the intersection of $AC$ with $DE$ is $G = \frac{12}{5}, \frac{16}{5}$.  Geogebra does a great job of calculating the intersections, but there's a nice trick for finding the intersection of two lines using linear algebra. 

## A linear algebra trick

Since two points define a line, we can start by looking at how pairs of points on two lines are related to the point of intersection.

![LineLineIntersection](/assets/img/2024-09-27-red-flag-day-geometry/LineLineIntersection.webp)

The equations of the lines $L_1$ and $L_2$ can be written in terms of their starting points $(x_1,y_1)$ and $(x_3,y_3)$, direction vectors, and coefficients $u$ and $v$,
$$
\begin{aligned}
L_1 &= \begin{bmatrix} x_1 \\ y_1 \end{bmatrix} + u \begin{bmatrix} x_2 - x_1 \\ y_2 - y_1 \end{bmatrix} \\
L_2 &= \begin{bmatrix} x_3 \\ y_3 \end{bmatrix} + v \begin{bmatrix} x_4 - x_3 \\ y_4 - y_3 \end{bmatrix}.
\end{aligned}
$$
The point of intersection is then
$$
\begin{aligned}
(x,y) &= (x_1 + u(x_2-x_1), y_1 + u(y_2-y_1)) \\
&= (x_3 + v(x_4-x_3), y_3 + v(y_4-y_3)).
\end{aligned}
$$
If the intersection $(x,y)$ is between the points defining the lines then $0 \leq u,v \leq 1$. But, how do we solve for $u$ and $v$? Let's rewrite the equations in vector form, letting the initial points be $p = (x_1,y_1)$ and $r = (x_3,y_3)$. Now,
$$
\begin{aligned}
L_1 &= p + uq \\
L_2 &= r + vs
\end{aligned}
$$
where the vector directions are $q = \begin{bmatrix} x_2-x_1 & y_2 - y_1 \end{bmatrix}$ and  $s = \begin{bmatrix} x_4-x_3 & y_4 - y_3 \end{bmatrix}$. For line $L_1$ the vector $q$ shows the direction you would need to go to get from the starting point $(x_1,y_1)$ to the ending point $(x_2,y_2)$.

The point of intersection (assuming the lines intersect) occurs when $p + uq = r + vs$. Now here's a neat trick - take the cross product of both sides with $s,$
$$
\begin{aligned}
&(p + uq) \times s = (r + vs) \times s \\
&(p \times s) + u(q \times s) = (r \times s) +v (s \times s) \\
&(p \times s) + u(q \times s) = (r \times s)
\end{aligned}
$$
since the cross product of any vector with itself is $0$. Subtract $p \times s$ from both sides to get
$$
u (q \times s) = (r - p) \times s
$$
and then solve for $u$
$$
u = \frac{\Vert ( r - p ) \times s \Vert}{\Vert q \times s \Vert}.
$$
You can solve for $v$ the same way,
$$
v = \frac{\Vert ( p - r ) \times q \Vert}{\Vert s \times q \Vert}
$$
but you only need one of the two solutions. The point of intersection is
$$
P_{int} = p + uq
$$

The cross product gives the angle between two vectors and is related to the lengths of each,
$$
\vec{V_1} \times \vec{V_2} = \| \vec{V_1} \| \| \vec{V_2} \| \sin(\theta) \vec{V_3}
$$
where the notation $\| \vec{V_1} \|$ is the length of the vector $\vec{V_1}$ and $\theta$ is the angle between vectors $\vec{V_1}$ and $\vec{V_2}$. The direction of the cross product is $\vec{V_3}$ which is perpendicular to both $\vec{V_1}$ and $\vec{V_2}$. 

![cross-product](/assets/img/2024-09-27-red-flag-day-geometry/cross-product.webp)

<p align = "center"><b>The Cross Product</b></p>

## Testing the formula

We can test the formula by finding the intersection of the lines $AB$ and $DE$. The line $AB = L_1$ has initial point $p = (0,0)$ and direction $q = (4,4) - (0,0) = (4,4)$. The second line, $DE = L_2$ has initial point $r = (2,4)$ and direction $s = (4,0) - (2,4) = (2,-4)$. This gives
$$
F = \left( \frac{8}{3}, \frac{8}{3} \right)
$$
as shown in the Geogebra plot. Call the function `line_intersect` in Julia as

```julia
p = [0;0];
q = [4;4];
r = [2;4];
s = [2;-4];
F = line_intersect(p,q,r,s)
2-element Vector{Float64}:
 2.6666666666666665
 2.6666666666666665
```

For the second intersection, change $q$ to $[3,4]$ to get $G = \begin{bmatrix} 2.4, 3.2 \end{bmatrix}.$ 

The inputs $p,q,r,s$ are all 2-element vectors, but the cross product requires 3-element vectors. This is corrected in the code by adding a $0$ to the end of each input vector, e.g. `push!(p,0)`. When the solution is calculated, the 3rd element is still there, so we use `pop!(p_int)`  to remove the $0$ in the $z-$direction.

## Heron's formula

You may know the formula for the area of a triangle as one-half the base times the height.

![Triangle_with_notations_3](/assets/img/2024-09-27-red-flag-day-geometry/Triangle_with_notations_3.webp)

<p align = "center"><b>Triangle with altitude <em>h</em> cutting base <em>c</em> into <em>d</em> + (<em>c</em> − <em>d</em>)</b></p>

The base is $c$, but you have to calculate the height $h$ to get the area. Heron's formula is more direct,
$$
A = \sqrt{s(s-a)(s-b)(s-c)}
$$
where $s$ is the semi-perimeter, or half the perimeter of the triangle,
$$
s = \frac{1}{2}(a+b+c).
$$
[Heron of Alexandria](https://en.wikipedia.org/wiki/Hero_of_Alexandria) (also known as Hero) was a mathematician and engineer 

![Hero_of_Alexandria](/assets/img/2024-09-27-red-flag-day-geometry/Hero_of_Alexandria.webp)

<p align = "center"><b>Ἥρων, Heron of Alexandria</b></p>



known for many inventions such as this steam engine called an aeolipile which uses the principle of action/reaction of steam venting through the pipes to spin the ball.

![Aeolipile_illustration](/assets/img/2024-09-27-red-flag-day-geometry/Aeolipile_illustration.webp)

<p align = "center"><b>Aeolipile</b></p>

He is credited with the triangle area formula, but it was likely known much earlier.

There are many proofs of Heron's formula such as this one which uses the Pythagorean formula for right angle triangles. In the figure above, we can get two representations of the altitude $h$,
$$
\begin{aligned}
b^2 &= h^2 + d^2 \\
a^2 &= h^2 + (c-d)^2.
\end{aligned}
$$
Subtracting the first from the second and solving for $d$ gives
$$
\begin{aligned}
a^2 - b^2 &= (c-d)^2 - d^2 \\
&= c^2 -2cd + d^2 - d^2 \\
&= c^2 - 2cd \\
d &= \frac{-a^2+b^2+c^2}{2c}.
\end{aligned}
$$
Substitute this value of $d$ back into the first Pythagorean formula and solve for $h$ to get
$$
\begin{aligned}
h^2 &= b^2 - \left( \frac{-a^2+b^2+c^2}{2c} \right)^2 \\
&= \frac{(2bc - a^2 + b^2 + c^2)(2bc + a^2 - b^2 - c^2)}{4c^2} \\
&= \frac{((b+c)^2 - a^2)(a^2 - (b-c)^2)}{4c^2} \\
&= \frac{(b+c-a)(b+c+a)(a+b-c)(a-b+c)}{4c^2} \\
&= \frac{4s(s-a)(s-b)(s-c)}{c^2}.
\end{aligned}
$$
The first step above is to use the identity $x^2 - y^2 = (x-y)(x+y)$, and then the third line is derived from $(x \pm y)^2 = x^2 \pm 2xy + y^2$.

Now that we have the height of the triangle we can get the area,
$$
\begin{aligned}
A &= \frac{ch}{2} \\
&= \sqrt{ \frac{c^2}{4} \cdot \frac{4s(s-a)(s-b)(s-c)}{c^2}} \\
&= \sqrt{s(s-a)(s-b)(s-c)}.
\end{aligned}
$$
The Julia code for Heron's formula is included in `redflag.jl` as `herons`.

## The Red Flag Solution

With these two functions, we can now solve the problem. In Julia define the points

```julia
A = [0,0];
B = [4,4];
C = [3,4];
D = [2,4];
E = [4,0];
```

The points of intersection are

```julia
F = line_intersect(A,B,D,E-D)
2-element Vector{Float64}:
 2.6666666666666665
 2.6666666666666665
G = line_intersect(A,C,D,E-D)
2-element Vector{Float64}:
 2.4000000000000004
 3.2
```

and the area of the small triangle is

```julia
T = herons(A,F,G)
1.0666666666666644
```

The problem asked for the ratio of the triangle area to the square area as a percentage:

```julia
T/16 * 100
6.666666666666653
```

Sometimes you might like having a lazy day at the beach and not doing much more than solve a crossword puzzle. Solving this geometry puzzle is a bit like doing a crossword puzzle. There might not be a practical application for it, but you will find many opportunities to solve for the intersections of two lines, and knowing Heron's formula can also be handy. 

This solution using linear algebra and Heron's formula isn't the only way to find the answer, and it's always a good idea to check your answer by solving the problem with several unique methods.

I'm not sure why anyone would spend time making sand castles when you could be solving a geometry problem.

![sand_castle_problem](/assets/img/2024-09-27-red-flag-day-geometry/sand_castle_problem.webp)





![brazilian-jasmine](/assets/img/2024-09-27-red-flag-day-geometry/brazilian-jasmine.webp)

<p align = "center"><b>Brazilian Jasmine</b></p>

## Image credits

Triangle with altitude *h* cutting base *c* into *d* + (*c* − *d*): By Jamgoodman - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74872701.

Hero of Alexandria: By Unknown author - http://www.xtec.es/~jcanadil/imatges/personatges/actius/Heron.jpg, Public Domain, https://commons.wikimedia.org/w/index.php?curid=24180886.

Aeolipile: The entry under Aeolipile in volume one of this work states "The cut is copied from Hero’s “Spiritalia”, edited by Woodcroft, of London." - Knight's American Mechanical Dictionary, 1876. source, Public Domain, https://commons.wikimedia.org/w/index.php?curid=42014.

## Code for this article

The two [Julia](https://julialang.org/) functions, `line_intersect` and `herons` are in the file [redflag.jl](https://gist.github.com/XerxesZorgon/ac2455008735d62b5d5214224a1e7f20).

## References

Line–line intersection: [Wikipedia](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)

Intersection of two straight lines: [Math Open Reference](https://www.mathopenref.com/coordintersection.html)

Cross product: [Wikipedia](https://en.wikipedia.org/wiki/Cross_product)

Heron's Formula: [CueMath](https://www.cuemath.com/herons-formula/)

Heron's Formula Calculator: [OMNI Calculator](https://www.omnicalculator.com/math/herons-formula)

Heron of Alexandria: [Wikipedia](https://en.wikipedia.org/wiki/Hero_of_Alexandria)

Aeolipile: [Wikipedia](https://en.wikipedia.org/wiki/Aeolipile)



