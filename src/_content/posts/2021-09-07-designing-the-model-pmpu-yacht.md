---
title: Designing the Model
subtitle: The Ultra Hyper Totally Amazing Push Me Pull You Supercavitating Surface Effect Flying Machine · Part III
author: John Peach
lede: null
hero:
  url: /assets/img/2021-09-07-designing-the-model/ode-on-a-grecian-urn.webp
  alt: null
tags:
  - math
  - deepnest
keywords:
  - P vs NP
  - bin packing
  - genetic algorithm
  - Procrustes method
socialImg: /assets/img/2021-09-07-designing-the-model/ode-on-a-grecian-urn.webp
lastmod: '2022-03-04T21:16:58.247Z'
software: ['deepnest', 'octave', 'geogebra', 'inkscape', 'delftship', 'libreoffice']
---

[Home](https://wildpeaches.github.io/)

## Flites of Fancy

Building a model helps to get a feel for how the ideas developed in the previous posts [Betz The Limit](https://wildpeaches.xyz/blog/betz-the-limit/) and [The Pushmi-Pullyu](https://wildpeaches.xyz/blog/the-pushmi-pullyu/) might work. A catamaran (see [Of Sailing Ships, Velociraptors, and Walking on the Moon](https://wildpeaches.xyz/blog/of-sailing-ships-velociraptors-and-walking-on-the-moon/)) provides a relatively steady surface to attach the wind turbine. For this model, I ignored detailed calculations but used the method described in [Yacht Design with Mathematics](https://wildpeaches.xyz/blog/yacht-design-with-mathematics/) to create the hull form.

To keep the hull relatively simple, the freeboard (top edge of the hull) is a straight line except where it tapers at the stern.

![hull-right-view](/assets/img/2021-09-07-designing-the-model/hull-right-view.jpg)

<p align = "center"><b>Hull designed with DELFTship</b></p>

The people at [Flite Test](https://www.flitetest.com/) put out lots of great videos showing how to create model aircraft and one of their videos shows how to make a [hot wire foam cutter](https://www.flitetest.com/articles/hot-wire-cutting-foam),

![Flite-test-hot-wire-cutter](/assets/img/2021-09-07-designing-the-model/Flite-test-hot-wire-cutter.jpg)

<p align = "center"><b>Hot Wire Foam Cutter</b></p>

and how to build templates to create the shape.

![Flite-Test-Template](/assets/img/2021-09-07-designing-the-model/Flite-Test-Template.jpg)

<p align = "center"><b>Cutting the Foam</b></p>

The mathematical tools shown in the [yacht design](https://wildpeaches.xyz/blog/yacht-design-with-mathematics/) post can easily be modified to create the [JA 37 Viggen](https://www.flitetest.com/articles/ja-37-viggen-scratch-build) jet shown in their video by modifying the shape of the section curves, and possibly using more than one homotopy, but for this project that's not necessary. A few section curves along the length of the hull, and sheer and freeboard/profile curves at the bow and stern should be sufficient. Here's a plot of the curves drawn in [Octave](https://www.gnu.org/software/octave/index),

![octave-sections](/assets/img/2021-09-07-designing-the-model/octave-sections.jpg)

<p align = "center"><b>Model Sections</b></p>

The top two rows are sections while the bottom row (from left to right) shows the half-bow sheer, half-stern sheer, bow freeboard and profile back to the first section, and the freeboard and profile for the aft section. The reason for using only half the sheer curve is that the sheer and freeboard/profile curves can be combined at right angles on a piece of foam to cut the bow and stern pieces. It might be useful to first cut the general outline by using two copies of the first and last sections.

To make the bow, make two rectangular blocks of foam that are half the width of the boat at the first section, as deep as that section, and the length of the distance between the bow and the first station. Attach a copy of the section template at both ends and use the hot wire cutter to generate the hull shape at the section curve.

![bow-cut](/assets/img/2021-09-07-designing-the-model/bow-cut.png)

<p align = "center"><b>Bow Foam Block</b></p>

Separate the two pieces of foam, and attach the sheer curve template to the top, and the profile to the inner edge. Now use the hot wire cutter to remove the excess foam to shape the bow, and glue the two pieces together. The same process can be done at the stern.

Print the curves and then paste them to a board to cut the shapes. If you have a CNC machine you can import the svg code directly into [jscut](http://jscut.org/jscut.html#) to generate the gcode, or use [gcmc](https://www.vagrearg.org/content/gcmc-intro).

![cnc](/assets/img/2021-09-07-designing-the-model/cnc.jpeg)

<p align = "center"><b>Desktop CNC Machine</b></p>

But, there's a lot of wasted space in the plot generated by Octave. If you've ever tried to pack a bunch of stuff in the trunk of your car as you leave for vacation, or had to pack a trailer or rental truck full of household items for a move, you understand that efficient packing is key.

There's a math for that. But first,

## $P \neq NP$ ... or Is It?

Many problems that we ask computers to solve are very easy, just tedious, which is why we like to have the computer do it. Adding a column of numbers, multiplying two large numbers together, sorting a set of words in lexicographic order, and searching for a string of words in a document are all the sorts of problems that computers do very well and quickly. If you ask a computer to sum $n$ numbers and it takes $t$ seconds, you'd expect that finding the sum of $2n$ similar numbers would take about $2t$ seconds. Problems that can be solved in time $t = p(n)$ where $p$ is a polynomial are said to be in class $P$, and there are efficient algorithms for finding the answers. The time required is called _polynomial time_ because of the polynomial relationship between the number of inputs $n$ and the processing time required, $t$.

Problems in the class $NP$ ([nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm) polynomial) are easy to check in polynomial time, but nobody has found an algorithm to solve them in polynomial time. The nondeterministic part means that whatever state the computer is in at one point of the algorithm doesn't necessarily define what state will be next. [KenKen](https://wildpeaches.xyz/blog/put-another-kenken-on-the-barbie/) puzzles are in $NP$ because they're difficult to solve but easy to check. Every problem in $P$ is also in $NP$ because you can check the answer just by solving the problem again.

Why is there a question about $P$ being equivalent to $NP$? Suppose you found some tricky algorithm that could quickly solve a KenKen puzzle in polynomial time. KenKen is thought to be in a sub-class called $NP-$complete which means that you can try every possible combination of solutions to see if one of them works (and it's easy to check if the solution is correct). It turns out that finding a polynomial time solution to an $NP-$complete problem would unlock solutions to all other $NP$ problems. $NP-$hard problems are all the problems that are at least as hard as $NP-$complete problems:

![PvsNP](/assets/img/2021-09-07-designing-the-model/PvsNP.png)

<p align = "center"><b>P vs. NP</b></p>

The $P$ vs $NP$ problem is one of the seven [Millennium Problems](https://www.claymath.org/millennium-problems). Find an answer to any one of them and the [Clay Mathematics Institute](https://www.claymath.org/) will give you one million dollars.

![one-million-dollars](/assets/img/2021-09-07-designing-the-model/one-million-dollars.gif)

<p align = "center"><b>Doctor Evil</b></p>

## Bin Packer, Bin Packer, Pack Me A Bin

![dog-packing](/assets/img/2021-09-07-designing-the-model/dog-packing.jpg)

<p align = "center"><b>Bin Packing with Dog</b></p>

In a two-dimensional bin packing problem, we have several shapes (in our case section and bow/stern curves) that need to be optimally fitted into an area. Usually, the area is a rectangle, but that's not a requirement. The bin packing problem is in the class $NP-$hard meaning that there isn't a known algorithm that can optimally fill the bin in polynomial time. So the question we want to answer is, does there exist an order and orientation of $K$ items with areas $I_j$ such that the sum of the sizes of items is less than or equal to the bin size $B$ $(\sum_{j=1}^K I_j \leq B)$?

There are quite a few heuristic methods available. These algorithms choose the next item to be placed based on the size and orientation of the item, looking at the remaining available space and possible future items to pack. You could put the largest item in the lower-left corner of the bin, the next largest beside that one, and so on until you've filled items up to the right wall. Now work your way back towards the left side, still filling large to small, like this:

![bin-packing-heuristic](/assets/img/2021-09-07-designing-the-model/bin-packing-heuristic.png)

<p align = "center"><b>Bin Packing Heuristic</b></p>

To read about other methods, see ["Survey on two-dimensional packing"](https://cgi.csc.liv.ac.uk/~epa/surveyhtml.html). If you have just a few items to pack, you might try all possible arrangements, which is called the "brute force method". Implementing any of these algorithms might be considered "work", which we'd like to avoid. Instead, there's a very nice (free) nesting tool called [Deepnest](https://deepnest.io/) that handles the nesting for us. Download and install Deepnest, and then run it. You should see something like this (without the curves, yet):

![Deepnest-start](/assets/img/2021-09-07-designing-the-model/Deepnest-start.png)

<p align = "center"><b>Deepnest Start Screen</b></p>

Click on "Import" to begin selecting curves generated by Octave. When you've imported all of them (only 5 shown here) click on the "+" at the bottom of the page which will let you add a bounding rectangle that will become the container bin. Set the dimensions of the container and click "Add". This generates the rectangle shown at the top of the page. Under "Sheet", make sure that only the bin is checked to indicate which item is the container. In some cases, you may want to increase the quantities of some curves, which may be adjusted under the heading "Quantity".

You may also want to adjust the configuration parameters by clicking on the gear shown on the left side.

![Deepnest-configuration](/assets/img/2021-09-07-designing-the-model/Deepnest-configuration.png)

<p align = "center"><b>Deepnest Parameter Options</b></p>

Hovering your cursor over any of the gray boxes brings up help information on the right side. Click on the Deepnest icon to return to the main page when done.

Next, click the "Start Nest" button which will switch to the nesting window,

![Deepnest-nesting-process](/assets/img/2021-09-07-designing-the-model/Deepnest-nesting-process.png)

<p align = "center"><b>Deepnest Packing Result</b></p>

Nesting continues until you click "Stop nest" because the algorithm never knows if it's found the best possible solution. With just five pieces, it found a solution that gets all of them inside the bounding box, but there might be another way to do it that makes them fit more compactly. You'll have to run it until you think you've got a good enough fit. At that point, click on "Export" and save the nest file in .svg format.

## Genetics

Deepnest uses a method called a _Genetic Algorithm_. Genetic algorithms mimic biological genetics by encoding information in strands of DNA, or what mathematicians call vectors. A vector is just an ordered list of numbers like, $v = \left[ 1, 5, 7, 2, 42, 8 \right]$. While working at the [Institute for Advanced Study](https://www.ias.edu/) in Princeton, NJ, [Alan Turing](https://www.iwm.org.uk/history/how-alan-turing-cracked-the-enigma-code) and [Nils Barricelli](https://cosmosmagazine.com/science/mathematics/nils-aall-barricelli/) used the [IAS machine](https://en.wikipedia.org/wiki/IAS_machine) at night (when it wasn't being used to design the bomb) to study [artificial life](https://nautil.us/issue/14/mutation/meet-the-father-of-digital-life). Historian George Freeman wrote about the early work done building the first electronic computer at the IAS, ["Turing's Cathedral"](https://www.ams.org/notices/201407/rnoti-p759.pdf), and gave a TED Talk, ["The Birth of the Computer"](https://www.ted.com/talks/george_dyson_the_birth_of_the_computer?language=en).

Genetic algorithms are a descendent of their early artificial life experiments, and use evolution to find near-optimal solutions to $NP$ problems. A population of vectors is created randomly, the vectors are paired off to generate a new generation of offspring vectors and the best of breed are kept for subsequent generations.

Deepnest may be generating vectors where the numbers come in pairs. The first number is the piece number, and the second of the pair could indicate the orientation angle. The default number of orientation angles is $4$, but you can change this in the configuration window.

One way to encode the orientation would be to use a "1" if the orientation is on the positive $x-$axis, "2" for positive $y$, "3" for negative $x$ and "4" for negative $y$,

![Deepnest-orientation](/assets/img/2021-09-07-designing-the-model/Deepnest-orientation.png)

A vector describing the order that items are placed in the bin and their orientation might be

$$
v = \left[2,2,3,4,1,2,4,3,5,3 \right]
$$

meaning that the $2^{nd}$ item would be placed first and it would be oriented along the $y-$axis, the $3^{rd}$ item next along the negative $y-$axis and so on. By following the instructions in this DNA vector, the algorithm knows how and in what order to place each item. When it's done, the algorithm measures how much space was needed, and how many items were placed.

The genetic algorithm creates many of these DNA vectors and then randomly selects pairs to "breed" a new generation. Breeding is done by randomly selecting a point along the vector, snipping off the ends, and then swapping DNA.

Suppose you created a second vector with random placement order and orientations,

$$
\begin{aligned}
v_i &= \left[2,2,3,4,1,2,4,3,5,3 \right] \\
v_j &= \left[1,3,3,3,5,2,4,4,2,4 \right]
\end{aligned}
$$

Snip the ends off of $v_i$ and $v_j$ and swap the segments to form two new offspring vectors, $v'_i$ and $v'_j$,

![dna-swap](/assets/img/2021-09-07-designing-the-model/dna-swap.png)

In terms of the bin packing algorithm, this generates new packing rubrics that may be better than the original pair. In any case, we can try out both and pick the two best of ${v_i,v'_i,v_j,v'_j}$. With a large population of random DNA samples, the genetic algorithm rapidly converges to a very good solution.

There is a flaw with using this method for the bin packing algorithm because in almost every swap it's likely that you'll be packing two of some items, and none of some others. In $v'_i$ notice that the first item packed is $2$ with orientation $2$, but then $2$ appears again at the end with orientation $4$. If you want to pack one of every item, you could choose a permutation of the numbers $1 \ldots n$. There are $n!$ permutations and by choosing the next larger power of two, you could encode the permutation in binary.

In the example above, there are the eleven sections and bow/stern curves, and $11! = 39,916,800$. This would take $26$ digits in binary, something like

$$
v = [0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,2,1,4,2,3,2,3,2,4,3]
$$

so the DNA vectors would become a bit longer, but not unmanageable. The first $26$ digits ($0$s and $1$s) form a unique binary encoding of a permutation of the numbers $1 - 11$, while the last $11$ numbers are randomly selected orientations. You have to create the binary encoding larger than $11!$, and so some mappings won't work, but fortunately the coding for this problem is handled by Deepnest.

## Greek Myths

For most applications of Deepnest, the items are visually distinguishable, but the section curves for this model are nearly identical and after they've been placed in the bin it's hard to tell one from another. One possible solution would be to include a unique number or [letter](https://gist.github.com/sam016/909e0f73d66a0d32b06b17ea77c2959b) with each item in .svg format. Another way would be to compare shapes since .svg files encode the locations of all points in the item. Of course, svg stands for "scalable vector graphics", so the encoded dimensions may change, and the orientation very likely is altered.

This is where Greek myths meet math geeks. In Greek mythology, Procrustes, the son of Poseidon, is described as an innkeeper and a bandit. Anyone who stayed at his inn had to fit the bed Procrustes provided, and nobody ever fit exactly. If the visitor was too short, Procrustes stretched him until he was long enough, and if he was too tall, his legs got cut off at the end of the bed. You might be better staying at $\Mu \omicron \tau \epsilon \lambda \; VI$. In the end, Theseus fits Procrustes to his own bed.

![Theseus-fighting-Prokrustes](/assets/img/2021-09-07-designing-the-model/Theseus-fighting-Prokrustes.jpg)

<p align = "center"><b>Theseus Defeats Procrustes</b></p>

For all myths Greek and Roman, check out Liv Albert's ["Let's Talk About Myths, Baby!"](https://www.mythsbaby.com/) podcast. That must be a typo. It should have been, "Let's Talk About Math, Baby!". Theseus may not have been so great either; episode $V$ is ["Theseus, Ruiner of Women & All Around Awful Person"](https://podcasts.apple.com/ca/podcast/v-theseus-ruiner-of-women-and-all-around-awful-person/id1264449047?i=1000391336365).

Anyway, the Procrustes method finds the best fit between two sets of points and can make correspondences between the initial set of curves provided to Deepnest and the completed packed set. If you can't get all of the curves on one sheet of paper or wood template, let Deepnest pack what it can, remove those items from the input set, and pack again until everything fits on several sheets.

Suppose you have two sets of points $\mathcal{P} = \{p_1,p_2, \ldots, p_n \}$ and $\mathcal{Q} = \{q_1,q_2, \ldots, q_n \}$ where $\mathcal{P}$ are the input points before Deepnest packs them and $\mathcal{Q}$ are the packed set. These points are in 2D, so each has coordinates $p_i = (x_i,y_i)$. Deepnest shifts the set of points by some fixed distance $t = (t_x,t_y)$ (called an affine transformation), scales the points by a constant $\sigma$ and rotates them through an angle $\theta$. The rotation can be written as a matrix,

$$
R = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix}.
$$

Deepnest changes the scale of the bin and everything in it which is why we need the scaling factor, but we'll rescale both sets so we don't need to find $\sigma$. To find the best match between an input set $\mathcal{P}_j$ and nested set $\mathcal{Q}_k$ we need to find the best fit between "visitor" and "bed". Mathematically, this means we need to find $R$ and $t$ that minimizes the function $F$,

$$
F(R,t) = \sum_{i=1}^n || (Rp_i + t) - q_i ||^2.
$$

The rotation [matrix multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication#Square_matrix_and_column_vector) the $x$ and $y$ coordinates of point $p_i$ by

$$
Rp_i = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} \begin{bmatrix}x_i \\ y_i \end{bmatrix} = \begin{bmatrix} \cos(\theta) x_i - \sin(\theta) y_i \\ \sin(\theta) x_i + \cos(\theta) y_i \end{bmatrix}.
$$

In polar coordinates, $p_i = (r \cos \alpha, r \sin \alpha)$, and to get to $q_i$ we'll rotate about the origin by some angle $\theta$. Notice that the distance from the origin to both $p_i$ and $q_i$ is the constant $r$.

![rotation](/assets/img/2021-09-07-designing-the-model/rotation.png)

So the coordinates of $Q$ are $(r \cos(\alpha + \theta), r \sin(\alpha + \theta))$. Using the [trigonometric identities](https://en.wikipedia.org/wiki/List_of_trigonometric_identities),

$$
\begin{aligned}
\cos(\alpha + \theta) &= \cos \alpha \cos \theta - \sin \alpha \sin \theta \\
\sin(\alpha + \theta) &= \sin \alpha \cos \theta + \cos \alpha \sin \theta
\end{aligned}
$$

the point

$$
\begin{aligned}
Q &= (r(\cos(\alpha + \theta)), r(\sin(\alpha + \theta))) \\
&= (r (\cos \alpha \cos \theta - \sin \alpha \sin \theta) , r (\sin \alpha \cos \theta + \cos \alpha \sin \theta) ) \\
&= ( r \cos \alpha \cos \theta - r \sin \alpha \sin \theta ,  r \sin \alpha \cos \theta + r \cos \alpha \sin \theta ) \\
&= (p_x \cos \theta - p_y \sin \theta ,  p_y \cos \theta + p_x \sin \theta ) \\
\end{aligned}
$$

which is the result of the matrix multiplication by $R$. The operator $|| \cdot ||$ is the _norm_ function, also known as the Euclidean Distance (Greeks again!), where

$$
||p-q|| = \sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}.
$$

To find the affine translation $t$ that minimizes $F$ we can take the derivative and set it to $0$,

$$
\begin{aligned}
0 &= \frac{\partial F(R,t)}{\partial t} = \sum_{i=1}^n 2 (Rp_i + t - q_i) \\
&= 2tn + 2R \sum_{i=1}^n p_i - 2 \sum_{i=1}^n q_i. \\
\end{aligned}
$$

Let $\bar{p} = \frac{1}{n} \sum_{i=1}^n p_i$ and $\bar{q} = \frac{1}{n} \sum_{i=1}^n q_i$ be the centers of the points in $\mathcal{P}$ and $\mathcal{Q}$. This means that $t = \bar{q} - R \bar{p}$, so the optimal value of the affine transformation is just the difference between the centers, and substituting this value of $t$ into $F$ gives

$$
\begin{aligned}
F(R,t) &= \sum_{i=1}^n || (R p_i + t) - q_i ||^2 \\
&= \sum_{i=1}^n || (R p_i + (\bar{q} - R \bar{p})) - q_i ||^2 \\
&= \sum_{i=1}^n || R( p_i - \bar{p}) - (q_i - \bar{q}) ||^2.
\end{aligned}
$$

To simplify, let's call $\hat{p_i} = p_i - \bar{p}$ and $\hat{q_i} = q_i - \bar{q}$, in other words, the locations of the points after subtracting the centers. This puts the centers of both sets at the origin.

The norm squared can be written as

$$
\begin{aligned}
|| (R p_i + t) - q_i||^2 &= ||R \hat{p_i} - \hat{q_i} ||^2 \\
&= (R \hat{p_i} - \hat{q_i})^T(R \hat{p_i} - \hat{q_i}) = (\hat{p_i}^T R^T - \hat{q_i}^T )(R \hat{p_i} - \hat{q_i}) \\
&= \hat{p_i}^T R^T R \hat{p_i} - \hat{p_i}^T R^T \hat{q_i} - \hat{q_i}^T R \hat{p_i} + \hat{q_i}^T\hat{q_i}.
\end{aligned}
$$

Since $R$ is a rotation, the product $R^TR = I$, the identity matrix (all ones on the diagonal and zeros elsewhere), so $\hat{p_i}^T R^T R \hat{p_i} = \hat{p_i}^T \hat{p_i}$, and since $\hat{p_i}^T R^T \hat{q_i}$ is a scalar (number) taking the [transpose](https://en.wikipedia.org/wiki/Transpose) doesn't change the value, so $\hat{p_i}^T R^T \hat{q_i} = \hat{q_i}^T R \hat{p_i}$. Now, the first and last terms don't have $R$ in them, so minimizing this with respect to $R$ is equivalent to finding the minimum of $-2 \hat{q_i}^T R \hat{p_i}$ over all $i$,

$$
\min \sum_{i=1}^n \left( -2 \hat{q_i}^T R \hat{p_i} \right) = \min \left(-2 \sum_{i=1}^n \hat{q_i}^T R \hat{p_i} \right) = \max \sum_{i=1}^n \left( \hat{q_i}^T R \hat{p_i} \right).
$$

The coefficient $-2$ can be ignored because it only changes the value of the minimum, but removing the minus sign changes a minimum to a maximum.

Let's call $\hat{\mathcal{P}}$ the $2 \times n$ array of translated points $\hat{p_i} = (p_x^i,p_y^i)$ and $\hat{\mathcal{Q}}$ the equivalent $2 \times n$ array for $\hat{q_i} = (q_x^i,q_y^i)$. Then if you multiply $\hat{\mathcal{Q}}^T R \hat{\mathcal{P}}$ the result is an $n \times n$ array, but along the diagonal are the terms $\hat{q_i}^T R \hat{p_i}$. Adding up all of the elements of the diagonal of a matrix is called the trace $(\text{tr})$ of the matrix, so

$$
\sum_{i=1}^n \left( \hat{q_i}^T R \hat{p_i} \right) = \text{tr} \left( \hat{\mathcal{Q}}^T R \hat{\mathcal{P}} \right).
$$

By itself, this doesn't seem that it helps much but the [trace operator](<https://en.wikipedia.org/wiki/Trace_(linear_algebra)>) has properties that we can use, one of them being that for any pair of compatible matrices $A$ and $B$, $\text{tr}(AB) = \text{tr}(BA)$. For the arrays here, this means that

$$
\text{tr} \left( \hat{\mathcal{Q}}^T (R \hat{\mathcal{P})} \right) = \text{tr} \left( (R \hat{\mathcal{P}}) \hat{\mathcal{Q}}^T \right).
$$

Next, let $\mathcal{S} = \hat{\mathcal{P}}\hat{\mathcal{Q}}^T$. Since $\hat{\mathcal{P}}$ is a $2 \times n$ array and $\hat{\mathcal{Q}}^T$ is $n \times 2$ then $\mathcal{S}$ is $2 \times 2$. Using the [Singular Value Decomposition](https://towardsdatascience.com/understanding-singular-value-decomposition-and-its-application-in-data-science-388a54be95d) (svd) we can write $\mathcal{S}$ as

$$
\mathcal{S} = U \Sigma V^T.
$$

The matrices $U$ and $V$ are [unitary](https://en.wikipedia.org/wiki/Unitary_matrix) meaning that if you multiply them by their conjugate transposes you get the [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix). The matrix in the middle, $\Sigma$ is diagonal and the elements on the diagonal are called the singular values. Substituting $\mathcal{S}$ into the equation for the trace,

$$
\text{tr} \left( R \hat{\mathcal{P}} \hat{\mathcal{Q}}^T \right) = \text{tr}(R \mathcal{S}) = \text{tr}(R U \Sigma V^T) = \text{tr}(\Sigma V^T R U).
$$

Since $U,V$ and $R$ are all [orthogonal matrices](https://mathworld.wolfram.com/OrthogonalMatrix.html) then the product $M = V^T R U$ is also orthogonal, so columns of $M$ are $2 \times 1$ [orthonormal vectors](https://www.sciencedirect.com/topics/mathematics/orthonormal-set-of-vector) and all of the entries of $M$ are less than or equal to one, meaning

$$
1 = m_j^Tm_j = \sum_{i=1}^2 m_{ij}^2 \implies m_{ij}^2 \leq 1 \implies |m_{ij}| \leq 1.
$$

Since $\Sigma V^T R U = \Sigma M$ we can bound the trace of $\Sigma M$ as

$$
\text{tr}(\Sigma M) = \sum_{i=1}^2 \sigma_i m_{ii} \leq \sum_{i=1}^2 \sigma_i.
$$

To maximize $\text{tr}(\Sigma M)$ each entry $m_{ii}$ must be $1$ which means that $M$ is the identity matrix. In other words,

$$
I = M = V^T R U \implies V = RU \implies R = VU^T.
$$

We can get the rotation matrix $R$ that maps $\hat{\mathcal{P}}$ into $\hat{\mathcal{Q}}$ by calculating $\mathcal{S} = \hat{\mathcal{P}}\hat{\mathcal{Q}}^T$, computing the svd of $\mathcal{S} = U \Sigma V^T$, and then getting $R = VU^T$. Very simple!

This is the basis of the Procrustes method when $\mathcal{P}$ and $\mathcal{Q}$ have the same number of points. In many cases, points will be missing from one set or the other and the Procrustes method needs to be modified. One way to do this is with _[The Softassign Procrustes Matching Algorithm](https://www.cise.ufl.edu/~anand/pdf/ipsprfnl.pdf)_.

The Octave function [`idNestObjects.m`](https://gist.github.com/XerxesZorgon/28e921492b64e75e641518633f179e76) reads in the set of .svg files generated by [`bez2svg.m`](https://gist.github.com/XerxesZorgon/3563a355c5f61469ceddd69000ae88cc) and the file of nested objects from Deepnest, makes the corresponding identifications and plots the curves with their identifying file names. On the left is the result of the Deepnest packing algorithm and on the right is the identification by Octave:

![Deepnest-nesting-and-id](/assets/img/2021-09-07-designing-the-model/Deepnest-nesting-and-id.png)

## The Recipe

To build a model boat using foam and a hot wire cutter, follow these steps:

1. Draw the hull lines (sheer, freeboard, profile, sections, homotopy) as described in [Yacht Design with Mathematics](https://wildpeaches.xyz/blog/yacht-design-with-mathematics/). You can use the online version of [Geogebra](https://www.geogebra.org/) if you don't want to download it.
2. Using the [Octave](https://www.gnu.org/software/octave/index) function [BezierHull.m](https://gist.github.com/XerxesZorgon/c92272ec4dead2e19e4c7ab3eb2593b6), generate the lines structure: `BezStruct = BezierHull(<fName>);`.
3. Make a new directory for svg files, then run [bez2svg.m](https://gist.github.com/XerxesZorgon/3563a355c5f61469ceddd69000ae88cc): `bez2svg(BezStruct,<svgDir>);`.
4. Install [Deepnest.io](https://deepnest.io/), load the svg files, and begin packing. Stop when a good solution is found, and save the nested svg file.
5. Identify the parts using [idNestObjects.m](https://gist.github.com/XerxesZorgon/28e921492b64e75e641518633f179e76): `idNestObjects(<svgDir>,<NestFile>);`. Save the image with ID'd objects so you can match it to the nested svg file later. You'll need the Octave/Matlab function [v2struct.m](https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/31532/versions/15/previews/html/v2struct.html) which is called from `idNestObjects`. Delete curves in the input list in Deepnest and repeat until all of the objects have been nested. [Inkscape](https://inkscape.org/) is useful for plotting svg image files.
6. Print the curves, cut them out, and attach them to the foam blocks. Build the [hot wire foam cutter](https://www.flitetest.com/articles/hot-wire-cutting-foam), and begin cutting out the hull.

If anyone asks, you're not making a toy boat out of old pieces of Styrofoam you threw in the garage for some project, you're ...

Applying a genetic algorithm to determine a heuristically optimal solution to an $NP-$hard bin packing method of orthogonal sections through a $C^\infty$ smooth $\mathbb{S}^2$ manifold generated from Bezier polynomials and homotopies, and then applying the Procrustes method to form a bijective mapping between pre and post-packed coordinate sets. It sounds a lot more important that way.

------

#### Image credits

Hero: An image of “kottabos with a pole” getting set up. [The History of Ancient Greece Podcast](http://www.thehistoryofancientgreece.com/), Ryan Stitt

Hot Wire Foam Cutter, Cutting the Foam: [Hot Wire Foam Cutting](https://www.flitetest.com/articles/hot-wire-cutting-foam). Flite Test, Apr 30, 2013.

Doctor Evil: [Austin Powers Doctor Evil GIF](https://giphy.com/gifs/nfl-week-play-13B1WmJg7HwjGU). Uploaded: 09/13/2015.

Bin Packing with Dog: [Black and brown Dachshund standing in box](https://unsplash.com/photos/black-and-brown-dachshund-standing-in-box-sxNt9g77PE0). [Erda Estremera](https://unsplash.com/@erdaest) Unsplash, Mar 2, 2018.

Theseus Defeats Procrustes: [Procrustes](https://intermedia.ge/%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%90%E1%83%97%E1%83%98/521529-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%99%E1%83%A0%E1%83%A3%E1%83%A1%E1%83%A2%E1%83%94/175/user:%E1%83%96%E1%83%A3%E1%83%A0%E1%83%90%E1%83%91%E1%83%90%E1%83%9C%E1%83%93). Intermedia, Zuraband, Mar. 25, 2016.

## Code for this article

[BezierHull.m](https://gist.github.com/XerxesZorgon/c92272ec4dead2e19e4c7ab3eb2593b6) - Octave functions for generating Bezier yacht hull curves using Letcher's method: `BezierHull`, `symBezFunc`, `funcSolve`, `write2DELFTship`, `scale`

[bez2svg.m](https://gist.github.com/XerxesZorgon/3563a355c5f61469ceddd69000ae88cc) - Converts curves in BezStruct to svg format: `bez2svg`, `func2Coords`, `section_at_x`, `funcSolve`, `pts2svg`, `disperse`

[idNestObjects.m](https://gist.github.com/XerxesZorgon/28e921492b64e75e641518633f179e76) - Returns a list of objects found in a nest generated by Deepnest.io: `idNestObjects`, `svg2paths`, `normPaths`, `plotNested`, `vnorm`  
