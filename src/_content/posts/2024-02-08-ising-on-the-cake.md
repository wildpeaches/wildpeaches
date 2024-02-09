---
title: Ising on the Cake
subtitle: Going through a difficult phase transition
author: John Peach
lede:
hero:
  url: /assets/img/2024-02-08-ising-on-the-cake/ising-on-the-cake.webp
  alt:
tags: [math, physics]
keywords: [ising model, phase transition, metropolis-hastings, statistical mechanics]
socialImg: /assets/img/
software: ['netlogo', 'r', 'rstudio']
---



## The Ising Model

![lenz-ising](/assets/img/2024-02-08-ising-on-the-cake/lenz-ising.webp)

[Wilhelm Lenz](https://www.physik.uni-rostock.de/das-institut/historisches/kalenderblaetter/kb-2013-06/) was a professor of theoretical physics at the University of Hamburg from 1921 to 1956. [Ernst Ising](http://theor.jinr.ru/~kuzemsky/isingbio.html) was a student of Lenz' and solved what is now known as the one-dimensional Ising Model in his thesis *[Beitrag zur Theorie des Ferromagnetismus](https://link.springer.com/article/10.1007/BF02980577)* published in 1925. The model represents magnetic dipole moments of atomic spin that may be in one of two states, up and down, and modeled as $+1$ or $-1$ over a grid of dipoles. Lenz invented the concept in 1920, but it was Ising who first solved it. Later, Lars Onsager solved the two-dimensional version in 1944 and P. F. Barth solved the problem for arbitrarily large dimensions in 1981.

Imagine you have a grid of tiny magnets, each one pointing either up or down. These magnets represent the "spins" of particles in the material. In the Ising Model, each magnet interacts with its neighbors, meaning it wants to align its direction with them. The key idea is that each magnet has a preference to either align with its neighbors (trying to lower its energy) or go against them (which increases its energy). This preference is determined by the temperature of the system and the strength of the interaction between magnets.

At higher temperatures, the magnets are more likely to be randomly oriented because they have enough energy to overcome the interaction between them. As the temperature decreases, the magnets start to align more and more, leading to what we call "order" in the system. This is similar to how ice crystals form when water cools down.

The Ising Model helps scientists understand phase transitions, where a material changes from one state to another, like from a magnetized state to a non-magnetized state (or vice versa). It's also used in various fields beyond physics, such as biology and computer science, to model systems with interacting components.

## Details of the Model

![Schematic-representation-of-a-configuration-of-the-2D-Ising-model-on-a-square-lattice_W640](/assets/img/2024-02-08-ising-on-the-cake/Schematic-representation-of-a-configuration-of-the-2D-Ising-model-on-a-square-lattice_W640.webp)

<p align = "center"><b>Schematic representation of a configuration of the 2D Ising model on a square lattice. </b></p>

In the schematic shown above, dipoles spinning in the $+1$ (up) direction are shown in red, while the $-1$ (down) dipoles are in blue. Interactions occur between the four nearest neighbors connected by the gray gridlines. The spin at node $i$ is $\sigma_i$ and the energy of the entire grid is 
$$
E({\sigma}) = -J \sum_{<ij>} \sigma_i \sigma_{j} - h \sum_i \sigma_i
$$
where $<ij>$ is the interaction between nearest neighbors on the grid. For example, a down spin surrounded by four up spins (either of the two blue spins in the second line from the bottom) would have a sum of $4J$ for the first term. The second term is the sum of all the spins, so in this example, there are $14$ up spins and $11$ down spins for a total of $-3h$. The parameter $J$ measures the strength of the coupling between adjacent magnetic dipoles, and $h$ is the effect of any external magnetic field.

## The Metropolis Algorithm

The [Metropolis](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) (or Metropolis-Hastings) Algorithm is a [Markov Chain Monte Carlo](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo) (MCMC) method that generates a sequence of random numbers from a probability distribution. A Markov Chain is a sequence of states where the current state depends only on the previous state, and the Monte Carlo method is a way to create random samplings. 

The Metropolis algorithm is a computational method used to simulate the behavior of systems described by statistical mechanics, such as the Ising Model. It's particularly useful for systems with many interacting components, where exact solutions are difficult or impossible to obtain.

Here's how the [Metropolis](https://phas.ubc.ca/~rozali/8.pdf) algorithm works within the context of the Ising Model:

1.  **Initialize the system**: Start with an initial configuration of spins (magnets) on a grid. Each spin can be randomly assigned an orientation, either up or down.
2.  **Select a spin to flip**: Randomly choose one spin from the grid. This spin will be considered for flipping its orientation.
3.  **Calculate energy change**: Compute the change in energy that would result from flipping the selected spin. This involves considering the interactions between the selected spin and its neighboring spins according to the rules of the Ising Model.
4.  **Accept or reject the flip**: If the energy change is negative (i.e., flipping the spin lowers the total energy of the system), accept the flip. If the energy change is positive, accept the flip with a probability determined by the Boltzmann factor: $e^{-\Delta E / kT}$, where $\Delta E$ is the energy change, $T$ is the temperature of the system, and $k$ is the Boltzmann constant. This probabilistic acceptance allows the system to explore higher energy configurations temporarily, which is essential for simulating systems at finite temperatures.
5.  **Update the system**: If the flip is accepted, update the spin configuration accordingly. If it's rejected, keep the current configuration.
6.  **Repeat**: Repeat steps 2-5 for a large number of iterations or until the system reaches equilibrium, where its properties stabilize.

By iterating through these steps, the Metropolis algorithm allows us to simulate the behavior of the Ising Model at different temperatures and study phenomena such as phase transitions. It's a powerful tool for understanding the collective behavior of many interacting spins in a material.

## A NetLogo Simulation

The [Ising Model](https://ccl.northwestern.edu/netlogo/models/Ising) can be simulated in [NetLogo](https://ccl.northwestern.edu/netlogo/download.shtml) either by downloading NetLogo or running the [model online](https://www.netlogoweb.org/launch#http://ccl.northwestern.edu/netlogo/models/models/Sample%20Models/Chemistry%20&%20Physics/Ising.nlogo). In the code section of NetLogo, you might want to change the color of the up spin from `blue + 2` to `red` to match the colors of the schematic. See the yellow highlighted line below.

![netlogo-ising-code](/assets/img/2024-02-08-ising-on-the-cake/netlogo-ising-code.webp)

<p align = "center"><b>Ising NetLogo Code</b></p>

To run the simulation, choose an initial temperature and click `setup-random`, then `go`. Watch the "Magnetization" graph evolve as spins flip from $+1$ to $-1$ or vice-versa. Next, try starting with all spins in the same direction, `setup -1` or `setup +1`. 

![netlogo-ising-spin-up](/assets/img/2024-02-08-ising-on-the-cake/netlogo-ising-spin-up.webp)

<p align = "center"><b>Ising Model Simulation</b></p>

Initially, the average spin is $+1$ because all dipoles are up, but over time random flips bring the average back to near $0$. What happens if the temperature is set very high or very low? 

## The Ising Model for Phase Transitions

The Ising Model can be used to simulate phase transitions like the one from ice to water or water to steam. Click on `setup -1` to orient all of the spins in the same direction, which could be interpreted as all of the molecules locked in the same "ice" condition. Hydrogen bonding between adjacent molecules provides an energy bonus that tends to lock them in a single orientation, the first term of $E(\sigma)$. 

At higher temperatures, the molecules are more free to reorient as they transition from the ice phase to the water phase. A larger value for the parameter `Ediff` leads to a sharper transition between phases. Try plotting the sum of all grid couplings (the sum of `Ediff` for all molecules):

```python
to-report energy
let total-energy 0
ask patches [
let Ediff 2 * molecule-orientation * sum [molecule-orientation] of neighbors
set total-energy total-energy + Ediff
]
report total-energy
end
```

You can modify the model by adding a new plot for `total-energy`. For a phase transition, rather than 'Magnetization' you could rename the plot to 'Order Parameter' which measures the average angle between each molecule's orientation and a reference angle (like a crystal axis). Lower values indicate more alignment. Change 'average spin' to 'average alignment' or something similar.

[Jakub Nowosad](https://jakubnowosad.com/) is a computational geographer working at the intersection between geocomputation and the environmental sciences, and is an Assistant Professor at [Adam Mickiewicz University](https://amu.edu.pl/en) in Poland. He used the Ising Model to simulate the transition from forest to open areas in two recently published articles, [*Simulating spatial patterns with the spatial kinetic Ising model*](https://jakubnowosad.com/posts/2023-12-17-spatialising-bp1/) and [*Optimizing the parameters of the spatial kinetic Ising model to simulate spatial patterns*](https://jakubnowosad.com/posts/2024-01-07-spatialising-bp2/). He used [R](https://www.r-project.org/about.html) rather than NetLogo for his simulations, but the results are similar. 

The Ising Model is an easily understood representation of many real-world interactions where nearest-neighbor states influence surrounding states. It may be useful for improving global warming models such as described in the paper [*Ising model for melt ponds on Arctic sea ice*](https://iopscience.iop.org/article/10.1088/1367-2630/ab26db), and who knows, maybe you can use it to solve this difficult [maze problem](https://www.quantamagazine.org/maze-proof-establishes-a-backbone-for-statistical-mechanics-20240207/).

![hexagons](/assets/img/2024-02-08-ising-on-the-cake/hexagons.gif)

<p align = "center"><b>Maze Proof Establishes a ‘Backbone’ for Statistical Mechanics</b></p>

### Image credits

Hero: [Ivy Sheet Cake](https://www.homestylebakery.com/product/ivy-sheet-cake/), Homestyle Bakery Nashville.

Wilhelm Lenz: [Wilhelm Lenz at the Institute of Physics](https://www.physik.uni-rostock.de/das-institut/historisches/kalenderblaetter/kb-2013-06/)

Ernst Ising: [Biography of Ernst Ising](http://theor.jinr.ru/~kuzemsky/isingbio.html)

[Schematic representation of a configuration of the 2D Ising model on a square lattice](https://www.researchgate.net/publication/321920877_Thermalisation_and_Relaxation_of_Quantum_Systems/figures?lo=1). [Sascha Wald](https://www.researchgate.net/profile/Sascha-Wald-2?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6Il9kaXJlY3QiLCJwYWdlIjoicHVibGljYXRpb24ifX0)

[Maze Proof Establishes a ‘Backbone’ for Statistical Mechanics](https://www.quantamagazine.org/maze-proof-establishes-a-backbone-for-statistical-mechanics-20240207/) - Quanta Magazine

## Code for this article

[Ising](https://modelingcommons.org/browse/one_model/1342#model_tabs_browse_info) NetLogo

## Further reading

[Ising](https://modelingcommons.org/browse/one_model/1342#model_tabs_browse_info) - NetLogo Modeling Commons

[Monte Carlo, Metropolis and the Ising Model](https://sites.physics.wustl.edu/gradcomputer/wiki/images/6/63/Ising_notes_v2.pdf)

[Ising model](https://rajeshrinet.github.io/blog/2014/ising-model/)

[The Ising model](https://phas.ubc.ca/~rozali/8.pdf)

[Optimizing the parameters of the spatial kinetic Ising model to simulate spatial patterns](https://jakubnowosad.com/posts/2024-01-07-spatialising-bp2/index.html) - [Jakub Nowosad](https://jakubnowosad.com/)

[Simulating spatial patterns with the spatial kinetic Ising model](https://jakubnowosad.com/posts/2023-12-17-spatialising-bp1/) -  [Jakub Nowosad](https://jakubnowosad.com/)

[Numerical Solutions to the Ising Model using the Metropolis Algorithm](https://www.maths.tcd.ie/~dbennett/js/ising.pdf) - Danny Bennett

[Phase diagram of the square 2D Ising lattice with nearest neighbor and next-nearest neighbor interactions](https://www.tandfonline.com/doi/full/10.1080/01411594.2022.2162897) - Harold J. W. Zandvliet

[Metropolis–Hastings algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) - Wikipedia

[The Ising Model](https://stanford.edu/~jeffjar/statmech/intro4.html) - [Jeffrey Chang](https://jeffjar.me/), [Notes on Statistical Mechanics II](https://stanford.edu/~jeffjar/statmech/index.html)

[Ising model for melt ponds on Arctic sea ice](https://iopscience.iop.org/article/10.1088/1367-2630/ab26db) - Yi-Ping Ma, Ivan Sudakov, Courtenay Strong and Kenneth M Golden, New Journal of Physics, 2019

