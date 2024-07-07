---
title: Stefan-Boltzmann Revisited
subtitle: Limits to Growth with Physics
author: John Peach
lede:
hero:
  url: /assets/img/2024-05-29-stefan-boltzmann-revisited/devil-far-side-cartoon.webp
  alt:
tags: [math, physics]
keywords: [Stefan-Boltzmann Law, Earth energy imbalance, economic growth]
socialImg: /assets/img/2024-05-29-stefan-boltzmann-revisited/devil-far-side-cartoon.webp
software: ['julia', 'jupyterlab', 'smath-studio']
---

In our earlier article, [_Economics and the Stefan Boltzmann Law_](https://wildpeaches.xyz/blog/economics-and-the-stefan-boltzmann-law/) we showed that economic growth is limited by energy consumption because all energy rapidly becomes waste heat which must be radiated away from the Earth. Assuming an unlimited energy supply, the waste heat quickly increases until the Earth becomes uninhabitable. In reality, no energy sources exist that would allow this to happen, but it provides an absolute upper bound on growth.

An assumption is that economic growth depends on energy. [Tim Garrett](https://www.inscc.utah.edu/~tgarrett/garrett.html) who is a climate scientist at the University of Utah wrote two papers on energy and economic growth, [_Long-run evolution of the global economy: 1. Physical basis_](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013EF000171#eft223-bib-0016) and [_Long-run evolution of the global economy– Part 2: Hindcasts of innovation and growth_](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://esd.copernicus.org/articles/6/673/2015/esd-6-673-2015.pdf) where he estimates that to maintain $1000 of economic wealth requires 7.1 watts of constant power. Economic growth requires a surplus of energy above this minimum maintenance level.

In an interview with Rachel Donald on Planet Critical, Garrett discusses the thermodynamic relationship between energy, material consumption, and economics, in [_The Thermodynamics of Degrowth_](https://www.planetcritical.com/p/the-thermodynamics-of-degrowth).

To understand the physics of energy and the Stefan-Boltzmann Law we'll turn to another source - [_Limits to economic growth_](https://www.nature.com/articles/s41567-022-01652-6.epdf?sharing_token=yNwL92oPzcpklZSqVsr-ndRgN0jAjWel9jnR3ZoTv0N0u2htmeT1Hou6SrdtT_vjhsjDi8mPyrY6gILuO1cIPYM5r9vTrCV6dFSGWkHiq63t24rvELuWNN1w82farMIezAYiWj7ialZ8KkzI_SEgHP98WBPRE6PFu8lx9H4EP5A%3D) by [Tom Murphy](https://dothemath.ucsd.edu/tom-murphy-profile/) a professor (emeritus) in the departments of Physics and Astronomy & Astrophysics at the University of California, San Diego. From this, we'll be able to calculate

- The average Earth temperature based on incoming solar radiation
- The temperature increase from radiating away heat caused by industrial activities
- The temperature rise assuming constant economic growth over several centuries

The calculations will be done in a [JupyterLab notebook](https://jupyter.org/) in [Julia](https://julialang.org/) where you can adjust parameters to see the effects. Another resource is [_$CO_2 \; v. \; CH_4$_](https://wildpeaches.xyz/blog/co2-v-ch4/) where we used an SMath Studio notebook to build a single layer model of the atmosphere.

## Earth average temperature

The Stefan-Boltzmann Law is

$$
J = \sigma T^4
$$

where

- $J=$ radiant emittance in units of $\frac{W}{m^2}$
- $σ=5.67×10−8 \; \frac{W}{m^2⋅T^4}$ is the Stefan-Boltzmann constant
- $T=$ temperature of the blackbody radiator in degrees Kelvin

The equation is more fully explained in Murphy's free online textbook, [_Energy and Human Ambitions on a Finite Planet_](https://escholarship.org/uc/item/9js5291m#page=2) in §1.3 [**Thermodynamic Consequences**](https://escholarship.org/uc/item/9js5291m#section.1.3). The Stefan-Boltzmann Law relates the power $P$ radiated from a blackbody, or perfect radiator, with surface area $A_{surf}$ to the temperature of the body $T_{hot}$ radiating into a background at temperature $T_{cold}$.

$$
P=A_{surf} \sigma (T_{hot}^4−T_{cold}^4)
$$

The Earth radiates into space with a background temperature so cold that it can effectively be set to zero, reducing the equation to $P = A_{surf} \sigma T^4$.

The radius of the Earth is $R_{\oplus} \approx 6.371e6 \; m$ and the power of the sun is about $F_{\odot} = 1360 \frac{W}{m^2}$ at the top of the atmosphere. All light from the Sun that reaches the Earth passes through a disk with area $A_{disk} = \pi R_{\oplus}^2$ and is radiated into space from the full surface of the Earth with area $A_{surf} = 4 \pi R_{\oplus}^2$. Not all of the energy reaches the surface, so a correction term needs to be included to account for the albedo, $\alpha \approx 0.293$. Thus,

$$
P_{in} = F_\odot (1 - \alpha) \pi R_\oplus^2 = 960 \pi R_\oplus^2
$$

and

$$
P_{out} = 4 \pi R_\oplus^2 \sigma T^4.
$$

Solving for $T$,

$$
T = \left( \frac{960}{4 \sigma} \right)^{1/4}
$$

giving an average temperature, $T = 255 \degree K$. This is about $\Delta T_{GHG} = 33 \degree K$ colder than the observed average temperature because greenhouse gases in the atmosphere trap some of the escaping energy giving a mean surface temperature, $T_{Earth} = T + \Delta T_{GHG} = 288 \degree K \;(14.85 \degree C, 58.73 \degree F)$.

## Temperature increases from energy use

Almost all energy is quickly converted to heat which must be radiated away as infrared energy to maintain the Earth's energy balance. Exceptions to this are emissions in other wavebands directly into space such as radio waves or light. Compared to the energy used by heat-producing equipment, these sources are relatively small.

Total [energy consumption](https://ourworldindata.org/grapher/global-energy-substitution) worldwide in 2022 was $E = 178889 \; \text{TWh}$ (1 terawatt $= 1 \times 10^{12}$ watts) per year. To convert this to power, divide by the number of hours in a year because energy is power times time. Let $H = 365 \text{ days} \times 24 \frac{\text{hours}}{\text{day}} = 8760 \text{ hours}$. The constant power consumed is

$$
P_0 = \frac{E}{H} = \frac{178889 \text{ TWh}}{8760 \text{ hours}} = 14e13 \text{ watts}.
$$

![global-energy-substitution](/assets/img/2024-05-29-stefan-boltzmann-revisited/global-energy-substitution.webp)

<p align = "center"><b>Global Primary Energy Consumption</b></p>

For convenience, if we divide $P_0$ by the area of the Earth's disk, then this power can be combined with the solar input $P_{in}$ as if it were evenly distributed over the same area. Since $A_{disk} = \pi R_\oplus^2 = 1.275e14$ then the power per square meter is

$$
p_0 = \frac{P_0}{A_{disk}} = \frac{P_0}{\pi R_\oplus^2} = \frac{178889}{1.275e14}.
$$

The combined power from the Sun and energy consumption per square meter over the Earth's disk is

$$
p_{in} = F_\odot (1 - \alpha) + p_0
$$

and the power radiated out per square meter is $p_{out} = 4 \sigma T^4$. Equating $p_{in} = p_{out}$ and solving for $T$,

$$
\begin{aligned}
\Delta T_{Energy} &= \left( \frac{F_\odot (1 - \alpha) + p_0}{4 \sigma} \right)^{1/4} + \Delta T_{GHG} - (T + \Delta T_{GHG})\\
&= \left( \frac{F_\odot (1 - \alpha) + p_0}{4 \sigma} \right)^{1/4}  - T = 0.0106 \degree K.
\end{aligned}
$$

In Julia, this can be written as a function:

```julia
TE(E) = map(e -> ((F*(1-α)+e/(H*A_disk))/(4*σ))^0.25 + T_GHG, E)
```

which gives `TE(E) - TE(0) = 0.010624`. According to the paper _[Observational Assessment of Changes in Earth’s Energy Imbalance Since 2000](https://link.springer.com/article/10.1007/s10712-024-09838-8)_ by Loeb et al, the Earth's Energy Imbalance is now $1.0 \pm 0.2 \frac{W}{m^2}$. In _[Recent reductions in aerosol emissions have increased Earth’s energy imbalance](https://www.nature.com/articles/s43247-024-01324-8)_ the authors find that reductions in aerosol emissions are causing an acceleration of the imbalance.

Letting

$$
EEI = 1.0 \frac{W}{m^2} \cdot H \frac{hrs}{year} \cdot A_{surf} \; m^2 = 4.47e6 \; TWh
$$

From the function `TE`,

```julia
TE(EEI) - TE(0) = 0.265
```

while

```julia
TE(E) - TE(0) = 0.0106
```

which means that about 4% of the total energy imbalance is due to direct heating from human activities. The ratio of the energy consumed $E$, to the energy due to greenhouse gas imbalance $EEI$ is $E/EEI = 0.04$, so also about 4%.

## The single-layer model

In the [earlier article](https://wildpeaches.xyz/blog/co2-v-ch4/) showing how to model the term $T_{GHG}$ for temperature increase due to greenhouse gases can be more accurately approximated with a single-layer model of the atmosphere.

![single-layer-model-complete](/assets/img/2024-05-29-stefan-boltzmann-revisited/single-layer-model-complete.webp)

<p align = "center"><b>Atmosphere Single Layer Model</b></p>

The equation we used was

$$
T_e = \left( \frac{(1-\alpha)S}{(1 - \frac{\epsilon}{2}) \sigma} \right)^{1/4}
$$

where $S = F_\odot / (A_{surf}/A_{disk}) = F_\odot/4 = 341.25 \frac{W}{m^2}.$ We used $F_\odot =  1365$ previously. This model includes an emissivity term $\epsilon = 0.78$ to account for the transmission of energy through the atmosphere. This equation gives the temperature in terms of power per square meter of the Earth's surface.

A simple modification lets us calculate the temperature with an additional power term, $p$

$$
T_e(p) = \left( \frac{(1-\alpha)S + p}{(1 - \frac{\epsilon}{2}) \sigma} \right)^{1/4}.
$$

With no additional sources, $T_e(0) = 288.73 \degree K$ as expected. Adding the forcing term from greenhouse gases of $1 \frac{W}{m^2}$ and subtracting $T_e(0)$ gives

```
Te(1) - Te(0) = 0.2998
```

The calculated temperature increase of $0.3 \degree K$ for an additional $1 \frac{W}{m^2}$ of forcing seems too low compared to observed climate sensitivity, which typically ranges from $0.4$ to $1.2 \degree K$ per watt of radiative forcing. Here are some reasons why:

1. **Climate sensitivity**: The equation assumes a constant climate sensitivity, which is the equilibrium temperature change resulting from a doubling of atmospheric CO2 concentration. However, in reality, climate sensitivity is not constant and can be influenced by many factors.
2. **Climate Feedbacks:** The model does not include feedback mechanisms such as changes in water vapor, ice-albedo feedback, cloud cover changes, and others, which can amplify the warming effect.
3. **Simplifications:** The equation assumes a simple balance of incoming and outgoing radiation without considering the complex energy exchanges within the Earth's climate system.
4. **Radiative Forcing Efficacy:** Different greenhouse gases have different efficacies in terms of how much they contribute to radiative forcing per unit increase in concentration.
5. **Non-gray atmosphere**: The assumption of a gray body atmosphere, where the atmosphere has a constant emissivity and absorptivity independent of wavelength, is an oversimplification. The Earth's atmosphere has a more complex spectral behavior, with greenhouse gases absorbing and emitting differently at different wavelengths.

The simplified model gives a basic estimate but lacks the complexity required to match observed temperature increases accurately. Real-world climate sensitivity is influenced by a variety of feedback mechanisms and interactions not captured here. While useful for a basic understanding, more comprehensive climate models are needed for accurate predictions.

The Stefan-Boltzmann Law is well established in physics, but the Earth's climate system is much more complex than can be captured in a simple equation. It only accounts for about 30% of the observed warming, and even if greenhouse gas emissions ended now, we might expect several decades of continued warming before the system reaches equilibrium.

Recognizing that the predicted temperature increase is lower than observations, let's calculate the temperature under continuous economic growth, assuming that the economy is directly dependent on energy inputs.

## Exponential growth

In his paper, [_Limits to economic growth_](https://www.nature.com/articles/s41567-022-01652-6.epdf?sharing_token=yNwL92oPzcpklZSqVsr-ndRgN0jAjWel9jnR3ZoTv0N0u2htmeT1Hou6SrdtT_vjhsjDi8mPyrY6gILuO1cIPYM5r9vTrCV6dFSGWkHiq63t24rvELuWNN1w82farMIezAYiWj7ialZ8KkzI_SEgHP98WBPRE6PFu8lx9H4EP5A%3D) Tom Murphy shows the exponential growth of energy consumption.

![constant-power](/assets/img/2024-05-29-stefan-boltzmann-revisited/constant-power.webp)

<p align = "center"><b>Historical Energy Growth</b></p>

The red line is a fit through the data points at 1900 and 2000 with annual economic growth of 2.3%. This rate of growth corresponds to a multiplier of 10 per century and appears as a straight line because the _Power_ axis is logarithmic.

Continuing the plot for another thousand years, we can calculate the average power $q$ using

$$
q(T) = q_0 e^{r (t - t_0)}
$$

starting in year $t_0 = 2000$ with initial power $q_0 = 122857 \; TWh$. Plug the output of $q(T)$ into the function $T_e$​ to see the temperature of the Earth rising exponentially.

![earth-temperature](/assets/img/2024-05-29-stefan-boltzmann-revisited/earth-temperature.webp)

<p align = "center"><b>Earth Temperature</b></p>

So we have a choice. Do you want growth that leads to the Earth burning up in a huge ball of flame, or do you want a crashing economy?

C'mon, c'mon - it's either one or the other.

---

### Image credits

Hero: Dealing with the Devil, Gary Larson. [The 10 Best Far Side Comics](https://screenrant.com/best-far-side-comics/), Screen Rant.

Global primary energy consumption by source, [Our World in Data](https://ourworldindata.org/grapher/global-energy-substitution).

The Single Layer Model, _[CO2 v. CH4](https://wildpeaches.xyz/blog/co2-v-ch4/)_, Wild Peaches.

Historical energy growth: [Limits to economic growth](https://www.nature.com/articles/s41567-022-01652-6.epdf?sharing_token=yNwL92oPzcpklZSqVsr-ndRgN0jAjWel9jnR3ZoTv0N0u2htmeT1Hou6SrdtT_vjhsjDi8mPyrY6gILuO1cIPYM5r9vTrCV6dFSGWkHiq63t24rvELuWNN1w82farMIezAYiWj7ialZ8KkzI_SEgHP98WBPRE6PFu8lx9H4EP5A%3D), Tom Murphy.

Earth Temperature, _[The Stefan-Boltzmann Law Revisited](https://gist.github.com/XerxesZorgon/6b056a34ee85fb4322053b8265f3b301)_, generated in Julia.

---

### Code for this article

The calculations were done in a [JupyterLab](https://jupyter.org/) notebook using [Julia](https://julialang.org/), _[The Stefan-Boltzmann Law Revisited](https://gist.github.com/XerxesZorgon/6b056a34ee85fb4322053b8265f3b301)_. To generate the plot, install [_Plots.jl_](https://docs.juliaplots.org/stable/) using the [Julia package manager](https://docs.julialang.org/en/v1/stdlib/Pkg/). To export the figure use

```julia
savefig(raw"<file directory>\earth-temperature.png")
```

---

### References

[_Long-run evolution of the global economy: 1. Physical basis_](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013EF000171#eft223-bib-0016), Tim Garrett.

[_Long-run evolution of the global economy– Part 2: Hindcasts of innovation and growth_](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://esd.copernicus.org/articles/6/673/2015/esd-6-673-2015.pdf), Tim Garrett.

[_Limits to economic growth_](https://www.nature.com/articles/s41567-022-01652-6.epdf?sharing_token=yNwL92oPzcpklZSqVsr-ndRgN0jAjWel9jnR3ZoTv0N0u2htmeT1Hou6SrdtT_vjhsjDi8mPyrY6gILuO1cIPYM5r9vTrCV6dFSGWkHiq63t24rvELuWNN1w82farMIezAYiWj7ialZ8KkzI_SEgHP98WBPRE6PFu8lx9H4EP5A%3D), Tom Murphy.

[_Energy and Human Ambitions on a Finite Planet_](https://escholarship.org/uc/item/9js5291m#page=2), Tom Murphy.

[_Energy Transitions: Global and National Perspectives_](https://vaclavsmil.com/2016/12/14/energy-transitions-global-and-national-perspectives-second-expanded-and-updated-edition/), Vaclav Smil.

_[Observational Assessment of Changes in Earth’s Energy Imbalance Since 2000](https://link.springer.com/article/10.1007/s10712-024-09838-8)_, Loeb et al.

_[Recent reductions in aerosol emissions have increased Earth’s energy imbalance](https://www.nature.com/articles/s43247-024-01324-8)_, Hodnebrog et al.

[Navigating Climate Catastrophe: Part 1 – The Predicament](https://www.resilience.org/stories/2024-05-28/navigating-climate-catastrophe-part-1-the-predicament/), [Richard Heinberg](https://www.resilience.org/resilience-author/richard-heinberg/), Resilience

[_Simple Earth Climate Model: Single-Layer Imperfect Greenhouse Atmosphere_](https://c21.phas.ubc.ca/article/simple-earth-climate-model-single-layer-imperfect-greenhouse-atmosphere/), Physics Teaching for the 21st Century, UBC Physics & Astronomy Outreach.
