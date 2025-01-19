---
title: Hubbert Linearization
subtitle: An Esoteric Concept with Extraordinary Consequences
author: John Peach
lede:
hero:
  url: /assets/img/2025-01-19-hubbert-linearization/hubberts-peak.webp
  alt:
tags: [energy, mathematics, resource-depletion, sustainability, ecology]
keywords: [Hubbert Peak, oil production, energy consumption, Maximum Power Principle, resource depletion]
socialImg: /assets/img/2025-01-19-hubbert-linearization/
software: ['desmos']
---

[Home](https://wildpeaches.github.io/)

A prescient insight by M. King Hubbert in 1956 revealed that U.S. oil production would soon reach a maximum never to be achieved again. We'll show the mathematics of how his method works, but also why the underlying hypothesis doesn't hold for global energy production. Howard T. Odum's Maximum Power Principle says that every species attempts to maximize consumption of natural energy resources at a rate that optimizes growth of the species. Humans have been following this principle during the Industrial Revolution, optimizing our numbers, but with dire consequences for ourselves and the environment.

## Hubbert's Prediction

In 1956, [M. King Hubbert](https://en.wikipedia.org/wiki/M._King_Hubbert) predicted that U.S. oil production would reach a maximum sometime between 1965 and 1970, and would decline forever afterward. Hubbert was a geologist and geophysicist working for Shell Oil at the time, but he also taught at Columbia, UC Berkeley, and Stanford. 

![m-king-hubbert](/assets/img/2025-01-19-hubbert-linearization/m-king-hubbert.webp)

In fact, U.S. oil production did peak in 1970, and declined until the early 2000s when the fracking revolution began and oil production surged. How did Hubbert correctly predict the peak of production? He assumed that for any oil field there would be a time when the first few wells were drilled and oil production would be low, followed by a "gold rush" of wells extracting ever increasing quantities, and then geology  constraints would lead to a slow decline. The point of maximum production is now known as "Hubbert's Peak" or "Peak Oil". Hubbert modeled the production curve as the derivative of a logistic function. This meant that the cumulative production over time fitted the S-shaped curve of the logistic.

## The Logistic Function

The logistic function can be expressed in several ways, but we'll start with this:
$$
Q(x) = \frac{L}{1+e^{-k(x-x_0)}}
$$
where $L$ is the maximum height of the function, $k$ controls the steepness, and $x_0$ is the midpoint. In terms of non-renewable resources, the variable $L$ in the numerator represents the Ultimate Recoverable Resource (often written as $URR$), or the total oil extracted from a field over its lifetime.

The production curve $P(x)$ is the amount of oil produced in any year, and can be expressed as the derivative of $Q(x)$,
$$
P(x)=Q'(x)=kQ(x) \left( 1-\frac{Q(x)}{L} \right)
$$
and turns out to be a function of $Q$ itself. When production begins, $x$ is small and the fraction $Q(x)/L \approx 0$, so $P(x) = k Q(x)$. Towards the end of the life of the field, $Q(x) \approx L$, so the term on the right approaches zero and production ends. 

What Hubbert realized was that by plotting $P(x)/Q(x)$ against $Q(x)$ the result is a straight line. That is, divide annual production by cumulative production, and plot that on the $y-$axis with cumulative production on the $x-$axis. Notice that
$$
\frac{P(x)}{Q(x)} = k\frac{Q(x)(1-\frac{Q(x)}{L})}{Q(x)} = \frac{k}{L}(L-Q(x)).
$$
The straight line is known as "Hubbert linearization". 

You can experiment with Hubbert linearization using the online scientific calculator, [Desmos](https://www.desmos.com/scientific). Define the constants $L$ and $k$, and then enter the cumulative and yearly production functions $Q$ and $P$. To plot the linearization, you need to define the function parametrically as a function of $t$, so that $x(t) = Q(t)$ and $y(t) = \frac{P(t)}{Q(t)}$.

![hubbert-linearization](/assets/img/2025-01-19-hubbert-linearization/hubbert-linearization.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Logistic function in Desmos</b></p></h3>

The variable $n$ is a convenience to represent the total lifespan of the field (in years). Since the peak occurs at the midpoint, we can use $x_0 = \frac{n}{2}$. Desmos creates sliders for each variable, and you can adjust the endpoints for each. The variable $k$ represents the maximum slope of $Q(x)$, and to make the graph show actual production, set $0 < k < 1$ (see Appendix B. *Necessary Conditions*). 

The convenience of Hubbert linearization is that the red line $\frac{P(t)}{Q(t)}$ ends at $L$, so even if the field hasn't been fully depleted you can follow the line to the intercept with the $x-$axis and get a good estimate of how much oil the field will eventually produce. 

## Hubbert Linearization Applied to Energy Data

A good source of data is [*Our World in Data*](https://ourworldindata.org/) (OWiD) founded by Max Roser in 2011, and now owned and maintained by the [Global Change Data Lab](https://global-change-data-lab.org/). 

![global-energy-substitution](/assets/img/2025-01-19-hubbert-linearization/global-energy-substitution-reduced.webp)

There are several serious flaws with this [data](https://ourworldindata.org/global-energy-200-years). First, they use the ['substitution method'](https://ourworldindata.org/energy-substitution-method) to attempt to make sources equal. For thermal systems that burn fossil fuels, the input fuel must be converted to heat but most of the heat is wasted. For example, a coal plant converts only 32% of the input energy contained in coal into useful electrical energy, so the OWiD multiplies the input quantity of coal by 0.32 to get the electrical energy delivered by the plant. Wind and solar produce electricity directly, so the conversion factor is one. The problem is that fossil fuel plants can generate power to meet demand, but renewables can't, so energy storage is required, and losses in these storage systems have not been included. 

Second, there's an implicit assumption that we can "electrify everything". Long-haul flights, trans-oceanic tankers and freighters, and interstate trucking all require fossil fuels with no feasible alternatives currently available. The data shown here is for total global energy use, but only 20% of our current consumption is for electricity.

Finally, the Energy Rate of Return (EROR) is critical in understanding whether an energy system is self-sustaining. Every system requires some energy input to generate output energy. The ratio of output energy to input energy is called [EROI](https://www.collapse2050.com/eroei-civilizations-decline/) (Energy Return over Input) and depends on energy costs to obtain, transform, and distribute the energy to the end user. EROI is important, but it doesn't include an estimate of how fast the initial input energy is returned. We don't yet know what the EROR is for sustainability, but fossil fuels are obviously self-sustaining, while non-fossil systems have not been shown to be capable of rebuilding new systems using only the energy derived from a similar system. See our previous article, *[Burning Man](https://wildpeaches.xyz/blog/burning-man/)* for details.

![EROR-table](/assets/img/2025-01-19-hubbert-linearization/EROR-table.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>EROR Estimates</b></p></h3>

Even with those caveats, though, the OWiD energy data can be useful for exploring the Hubbert hypothesis. Download the data and open it in a spreadsheet such as [LibreOffice](https://www.libreoffice.org/) Calc. I created three new columns labeled $P$, $Q$, and $P/Q$. Next, I copied one of the energy data columns into $P$, created the cumulative sum in $Q$, and calculated $P/Q$ in the third column. The Hubbert plots can be generated directly from the last two columns. For non-fossil fuel sources, the plots look like this:

![renewable-linearization](/assets/img/2025-01-19-hubbert-linearization/renewable-linearization.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Hubbert Linearization for Renewables</b></p></h3>

Looking at the general trends of these plots, we see a steady decline as annual production remains nearly constant while cumulative grows steadily, giving a linear downward slope to $P/Q$. If you were to plot the production to cumulative production energy for a single hydropower plant, you might expect that $P/Q = 1, 1/2, 1/3, 1/4, \ldots$ for the first four years of operation. There might be minor variations in $P$ from one year to the next, but in general, it would be a relatively steady output, producing the plot shown here. New dams and power plants would modify the curve somewhat as they came online, but the overall trend would continue.  

Fossil fuels should have a very different picture since the available quantities are finite, yet they also follow the same overall shape. One explanation is that there are such large quantities of remaining fossil fuels that we haven't reached the consumption levels needed to begin seeing the linearity of Hubbert's model.  

Total world consumption of coal is estimated to be about 1.5 trillion metric tons, and remaining reserves are about 1.07 trillion metric tons, so consumption to date is about 58% of known pre-industrial revolution totals. Gas consumption is only about 22% of the total, but should be sufficient to begin seeing effects in Hubbert linearization.

![fossil-linearization](/assets/img/2025-01-19-hubbert-linearization/fossil-linearization.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Hubbert Linearization for Fossil Fuels</b></p></h3>

Let's look more carefully at the oil and coal curves, zooming in on the more recent data. Ignoring the first portion of the curve, the shape of the plot still has the same characteristic initial decline followed by a long steady descent. 

![oil-coal-linearization](/assets/img/2025-01-19-hubbert-linearization/oil-coal-linearization.webp)

We estimate that 2.2 trillion barrels of oil have been discovered to date, and 1.68 trillion have been produced, so consumption is about 76% of the total. 

![Cumulative-Discoveries-Production-EIA-IEA](/assets/img/2025-01-19-hubbert-linearization/Cumulative-Discoveries-Production-EIA-IEA.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Oil Discoveries and Production</b></p></h3>

Looking at the cumulative consumption plots from OWiD data we see that there is no characteristic S-shape to the curves. If the Hubbert principle held for world consumption of non-renewable resources, we should be seeing the effects in the cumulative consumption plots. It seems that the reason Hubbert's model doesn't apply to world data is a result of the Maximum Power Principle.

![fossil-cumulative](/assets/img/2025-01-19-hubbert-linearization/fossil-cumulative.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Fossil Fuel Cumulative Production</b></p></h3>

## The Maximum Power Principle

Odum's Maximum Power Principle is a fundamental concept in systems ecology developed by [Howard T. Odum](https://www.emergysociety.com/howard-t-odum/) in the 1950s and has implications for understanding both natural and human-made systems. Odum was an ecologist who taught at the University of North Carolina at Chapel Hill and the University of Florida. One of his interests was [systems ecology](https://en.wikipedia.org/wiki/Systems_ecology) which applies systems theory, *the approach to the study of ecology of organisms using the techniques and philosophy of systems analysis: that is, the methods and tools developed, largely in engineering, for studying, characterizing and making predictions about complex entities, that is, systems,* as defined by ecologist Roger Kitching. 

![howard-t-odum](/assets/img/2025-01-19-hubbert-linearization/howard-t-odum.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Howard T. Odum</b></p></h3>

At its core, the Maximum Power Principle states that systems that survive in competition with other systems develop designs that maximize their use of available energy. It's not about using the least energy possible, but rather about capturing and using energy in the most effective way to ensure survival and growth.

A forest ecosystem provides a good example for understanding Odum's idea. Trees don't simply try to minimize their energy use. Instead, they develop complex structures - tall trunks, broad canopies, and extensive root systems - that allow them to capture the maximum amount of available solar energy and convert it into useful forms (biomass, seeds, etc.). While this might seem inefficient from a pure energy conservation standpoint, it actually represents the most successful strategy for long-term survival and reproduction.

In human systems, the Maximum Power Principle applies to everything from economic markets to cities. For instance, successful cities tend to develop infrastructure and networks that maximize their ability to process and utilize available resources, whether those are physical resources like food and water or more abstract resources like information and human capital.

What makes Odum's principle particularly valuable is how it connects to other fundamental concepts in thermodynamics and evolution. It builds on the Second Law of Thermodynamics (which deals with entropy) but adds a crucial insight: systems don't just dissipate energy randomly; they tend to organize themselves in ways that maximize their energy-processing capabilities.

One way to think about this is through the analogy of a river system. A river doesn't simply take the shortest path to the sea. Instead, it develops complex networks of tributaries and meanders that might seem inefficient at first glance. However, this apparently "wasteful" structure actually allows the river system to process more energy and material over time, creating stable, resilient patterns that can persist for millions of years.

An important nuance to understand is that "maximum power" doesn't mean "maximum energy use" - it refers to the optimal rate of energy transformation that allows a system to persist and thrive over time. Systems that process energy too quickly burn themselves out, while those that process it too slowly get outcompeted by more effective systems.

Viewing the fossil fuel plots in light of Odum's Maximum Power Principle it becomes clear that humans are optimizing energy consumption, and we are likely to continue on current trajectories until we reach geologically imposed resource limits. It appears that the first limit to be reached will likely be oil, and since it is the backbone of modern economic systems the effects will likely be profound.

Another consequence of the Maximum Power Principle is that there won't be an energy transition to renewables. Instead, we will continue increasing consumption of all forms of energy while we can.  This becomes apparent in the OWiD energy chart above which shows all forms of energy use in greater use over time. We never switched from one source to another simply because one was more economical than another.

## Appendix

### A. The Logistic Derivative

Here we derive the equation for production $P$ in terms of cumulative production $Q$, assuming $Q$ is logistic.

From 
$$
Q(x) = \frac{L}{1+e^{-k(x-x_0)}} = L \frac{e^{k(x-x_0)}}{1+e^{k(x-x_0)}}
$$
and recalling the quotient rule for derivatives,
$$
\frac{d}{dx} \frac{u(x)}{v(x)} = \frac{u'(x)v(x) - u(x)v'(x)}{(v(x))^2} 
$$
and letting
$$
\begin{aligned}
u(x) &= e^{k(x-x_0)} \\
u'(x) &= ke^{k(x-x_0)} = k u(x) \\
v(x) &= 1+e^{k(x-x_0)} = 1 + u(x) \\
v'(x) &= ke^{k(x-x_0)} = k u(x)
\end{aligned}
$$


we get
$$
\begin{aligned}
P(x) &= Q'(x) = L \frac{ku(x)(1+u(x))-u(x)ku(x)}{(1+u(x))^2} \\
&= L \frac{k u(x)}{(1+u(x))^2} \\
&= Lk \left( \frac{u(x)}{1+u(x)} \right) \left( \frac{1}{1+u(x)} \right) \\
&= Lk \frac{Q(x)}{L} \left( \frac{1+u(x)}{1+u(x)} - \frac{u(x)}{1+u(x)} \right) \\
&= k Q(x) \left( 1-\frac{Q(x)}{L} \right)
\end{aligned}
$$


### B. Necessary Conditions

What conditions are imposed on the parameters $k$ and $L$ to ensure the model is physically realistic? The value $L$ is the maximum quantity recovered so must be greater than zero and must be the maximum value of $Q(x)$. A second constraint is that production $P$ should never exceed cumulative production $Q$, and this puts limits on the steepness coefficient $k$.

For $k, L > 0$, both $P,Q \geq 0$ and $Q$ is monotonically increasing, $0 \leq Q(x) \leq L$. Since $Q$ is the integral of $P$, what conditions on $k$ and $L$ are required for $Q(x) \geq P(x) \; \forall x$? This represents the condition that $Q$ is the cumulative production $P$ of a non-renewable resource.

From the results above,
$$
Q(x) \geq k Q(x)\left( 1-\frac{Q(x)}{L} \right)
$$


so
$$
\begin{aligned}
1 &\geq k \left( 1-\frac{Q(x)}{L} \right) \\
1 &\geq k - k\frac{Q(x)}{L}  \\
\frac{kQ(x)}{L} &\geq k - 1 \\
\frac{Q(x)}{L} &\geq 1 - \frac{1}{k} \\
Q(x) &\geq L \left( 1 - \frac{1}{k} \right)

\end{aligned}
$$


Since $Q(x) \geq 0$, then $0 \geq  L \left( 1 - \frac{1}{k} \right)$ and for $L > 0$, this implies that $k \leq 1$.

------

## Image credits

- Hero: *An abstract art representation of Hubbert's Peak for oil production.* [DreamStudio](https://dreamstudio.ai/) AI art generator. 
- [M. King Hubbert](https://www.azquotes.com/author/28100-M_King_Hubbert), AZ Quotes.
- Hubbert Linearization, [Desmos Scientific Calculator](https://www.desmos.com/scientific).

## Code for this article

To reproduce the logistic function, open the [Desmos Scientific Calculator](https://www.desmos.com/scientific) in your browser and enter the variables and the equations as shown. Set limits for the variables such as $0 \leq k \leq 1$, and $0 \leq L \leq 50$. The upper bound on $L$ shown above is $1000$, but that will allow a very high peak for $P$, and isn't necessary for demonstrating the principles.

## References

- [Nuclear Energy and the Fossil Fuels](https://web.archive.org/web/20080527233843/http://www.hubbertpeak.com/hubbert/1956/1956.pdf). M.K. Hubbert, Presented before the Spring Meeting of the Southern District, American Petroleum Institute, Mar 7-9, 1956.
- [M. King Hubbert](https://rsparlourtricks.blogspot.com/2005/10/m-king-hubbert.html). Ron Schuler Oct 5, 2005.
- [Logistic function](https://en.wikipedia.org/wiki/Logistic_function#). Wikipedia.
- [Hubbert Math](https://sepwww.stanford.edu/sep/jon/hubbert.pdf). Jon Claerbout and Francis Muir, Stanford University, 2020.
- [EROEI and Civilization's Forced Decline](https://www.collapse2050.com/eroei-civilizations-decline/). Collapse 2050
- [Burning Man](https://wildpeaches.xyz/blog/burning-man/). John Peach and Erik Michaels, Wild Peaches Oct. 23, 2024.
- [A critique of Hubbert’s model for peak oil](https://www.facetsjournal.com/doi/10.1139/facets-2017-0097).  [Trevor H. Jones](https://www.facetsjournal.com/doi/10.1139/facets-2017-0097#con1) and [N. Brad Willms](https://www.facetsjournal.com/doi/10.1139/facets-2017-0097#con2), [FACETS](https://www.facetsjournal.com/journal/facets) [Volume 3, Number 1, October 2018](https://www.facetsjournal.com/toc/facets/3/1).
- [Howard T. Odum: History and Legacy](https://www.emergysociety.com/howard-t-odum/). M.T. Brown, C.A.S. Hall, S.E. Jorgensen, et al. [International Society for the Advancement of Emergy Research](https://www.emergysociety.com/)
