---
title: The Decline and Fall of the Petroleum Empire
subtitle: An EROI analysis of renewable energy
author: John Peach
lede:
hero:
  url: /assets/img/2023-10-10-decline-and-fall-of-petroleum/post-apocalyptic-burning-oil-refinery.webp
  alt:
tags: [math, physics]
keywords: [Peak oil, Oil production decline, Energy return on investment (EROI), Resource constraints, Biophysical economics]
socialImg: /assets/img/2023-10-10-decline-and-fall-of-petroleum/post-apocalyptic-burning-oil-refinery.webp
software: ['veusz', 'libreoffice']
---

[Home](https://wildpeaches.github.io/)

Listen to an Energy Return on Input (EROI) discussion with Brent Ragsdale and John Peach on [EcoRadio KC](https://kkfi.org/program-episodes/is-the-decline-of-oil-in-sight/).

------

Fossil fuels are effectively a finite resource. Sure, the same processes that created the oil we're using now are still ongoing, but it took tens or hundreds of millions of years to generate the oil that's being burned in about a hundred years, so in geological terms we are using up a resource that will never be replaced.

In [The Growing Gap](https://wildpeaches.xyz/blog/the-growing-gap/), we showed that a consequence of using a finite resource is that at some point production peaks, and never recovers (see the Peak Oil section). The peak is a physical limit, and while technological advances may delay the timing and increase the production rate after the peak production will relentlessly decline. 

A few questions that we'll try to answer here are,

- How soon might the peak in production occur?
- How fast will production decline post-peak?
- Can renewable energy make up the difference?

## The Peak of Oil Production

There is no consensus on when the peak of world oil production will occur. Predictions range from 2025 to 2040, while others claim we have already passed peak oil. 

Some analysts believe that peak oil is imminent, pointing to the fact that the rate of new oil discoveries has been declining for decades and that the cost of extracting oil from unconventional sources is rising. Others believe peak oil is still some time away, arguing there is still plenty of oil left in the ground and technological advances will make it possible to extract it more cheaply and efficiently.

A few predictions for the timing of the peak are:

- [International Energy Agency (IEA):](https://www.iea.org/news/growth-in-global-oil-demand-is-set-to-slow-significantly-by-2028) The IEA's 2023 World Energy Outlook predicts that global oil demand will peak in the late 2020s, but it does not say when oil production will peak.
- [BP:](https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/bp-peak-oil-demand-and-long-run-oil-prices.pdf) BP's 2023 Energy Outlook predicts that global oil demand will plateau in the mid-2030s, but it does not say when oil production will peak.
- [OPEC:](https://www.opec.org/opec_web/en/publications/340.htm) OPEC's 2023 World Oil Outlook predicts that global oil demand will continue to grow until at least 2045, and it does not see any need for peak oil concerns.

On the other hand, David Fickling writes, [Peak Oil Has Finally Arrived. No, Really](https://www.washingtonpost.com/business/energy/peak-oil-has-finally-arrivedno-really/2022/09/28/f67f2f0a-3f68-11ed-8c6e-9386bd7cd826_story.html). 

One outlier is the Intergovernmental Panel on Climate Change (IPCC) which projects continuously increasing fossil fuel consumption through 2100 in the RCP 8.5 model. See Appendix 1 for details.

Many of the arguments against peak oil are of the form "they" have been predicting a peak for years and were always wrong. Besides the physical argument that oil is a finite resource, this is a form of cherry-picking since there have been many optimists who over-predicted production. See for example Euan Mearns' [Peak Oil - Now or Later? A Response to Daniel Yergin](http://theoildrum.com/node/8391). Over-predicting oil supply is much less memorable than claiming a date for the maximum and being wrong. 

The timing of the peak probably won't be as significant as the post-peak decline in oil production. The [Energy Institute](https://www.energyinst.org/) produces the [Statistical Review of World Energy](https://www.energyinst.org/__data/assets/pdf_file/0004/1055542/EI_Stat_Review_PDF_single_3.pdf) ([data](https://www.energyinst.org/__data/assets/excel_doc/0007/1055545/EI-stats-review-all-data.xlsx)) which shows that world oil production peaked in 2019. Using their data, only Canada, the United States, Brazil, Oman, and "Other S. & Cent. America" were still experiencing increases in production as of 2022. Of the 55 oil-producing countries, 91% were at least 3 years past peak, and 78% were 6 years past peak.

The average decline rates were 4.8% in the first 5 years beyond peak production for all countries, which corresponds well with other estimates of [5-7% declines per year](https://energyskeptic.com/2020/giant-oil-field-decline-rates-and-their-influence-on-world-oil-production/).  For those countries that were six or more years post-peak, the decline rate is 5.2% per year.  On average, countries in the post-peak group saw maximum production 21 years ago, or in 2002.

## An EROI-based Model

### The renewable transition question

Is it possible to convert existing energy sources to renewable energy? Extracting and processing any energy source requires some energy input, and the ratio of output energy to input is called the Energy Return on Input (EROI).

My friend Nils Peterson asked the question, "How fast do we need to build out electric infrastructure to keep up with the decline in fossil fuels?". We both realize that electrical energy won't perfectly replace fossil fuels. In some cases, fossil fuels provide high heat that will be difficult or impossible with electrical energy alone, but electric motors are far more efficient than internal combustion motors.

Ignoring all other factors, what would it take to generate the equivalent amount of energy that we're currently deriving from oil, gas, and coal? 

### Oil field natural decline rates

Suppose the natural decline rate of non-renewable energy (fossil fuels) is $d$, so after $n$ years the amount produced would be $(1-d)^n$ of the original production. If the decline rate is 5% per year, after 30 years the amount available would be $(1-0.05)^{30} = 21.46\%$ of the original production rate.

Next, let's assume that we divert some fraction $r,$  $0 \leq r \leq 1$ of the total available energy towards the development of new renewable energy (RE) systems. 

Energy is required to mine and refine the metals and minerals needed for RE systems, so let's suppose we've allocated 1 unit of energy to the production of renewables. Over the lifetime of the system, we expect to produce much more than the input 1 unit. 

The ratio of lifetime returned energy to the energy required for manufacturing the system is called the Energy Return on Input or EROI. See the [Growing Gap](https://wildpeaches.xyz/blog/the-growing-gap/) for details about EROI, but we might expect PV solar systems to have an EROI around 15, while wind turbines could be a bit higher. 

The lifetime of a RE system might be 30 years, so for every 1 unit of input energy, we expect to get 15 units back over the 30-year lifetime. On average, the expected return per year would be 1/2 unit or EROI/lifetime. By allocating 1 unit to construction, we'll get 0.5 units back during the current year, and every year after that for the next 30 years.

### A simple model

To keep the model simple, let's assume that we can divert a fraction of the net available energy from the previous year, and the new RE system will be built on the first day of the new year, available for generating continuously from that point onwards. 

Using numbers, suppose we're diverting 1% of our available energy towards building RE, and for convenience, we'll start with a non-renewable energy source (NRE) generating 100 units of energy. In year $0,$ we immediately divert energy to RE equipment leaving 99.0 units available, but we've started investing in our future energy needs. The 1.0 units allocated to building RE gives us 0.5 units back in year $0$, for a total of 99.5 units. 

The natural decline of the NRE sources reduces the total to 95 units in the first year, but we have 0.5 units of RE, for a total of 95.5 units. Now we use 1% of 95.5 units, or 0.955 to build new RE systems that will return 0.4775 units in year 1. But we also have 0.5 units of RE generated by the equipment in year 0, for a total of 0.9775 units. 

This process of allocating some of the total available energy towards constructing new renewable systems continues over the lifetime of the systems. If the natural decline of fossil fuels is 5%, then setting aside 1% for renewables won't be enough because at the end of 30 years, the total available energy would be 38.5 units.

Setting aside 3% is better, but the total still declines to 82.9 units. Investing 5% would be more than sufficient and we'd have 144.9 units after 30 years. Where is the break-even point? If you take the proportion of the distance between 3% and 5%, and the ratio of the ending total energy for each scenario, a good initial estimate is 3.615% which gives 99.87 units of combined energy after 30 years, almost exactly back to the original 100 units at the start.

![renewable-decline](/assets/img/2023-10-10-decline-and-fall-of-petroleum/renewable-decline.png)

## Fixed Points

### Defining the problem

Suppose you have a function $f(x)$ and for some $x,$ when you put that $x$ into your function you get the same number back, or $x = f(x)$. Then $x$ is called a fixed point of $f$. Although we didn't mention them in the posts, fixed points are important in studying chaos theory ([Easy Chaos with Pluto](https://wildpeaches.xyz/blog/easy-chaos-with-pluto/), [Tools of Chaos](https://wildpeaches.xyz/blog/tools-of-chaos/)). The question that Nils is asking comes down to, "Is there a fixed point for renewable energy"?

To answer this question, we need to have a defining function for diverting existing energy sources into renewable construction. Let's call $T_n$ the total available energy in year $n$ (both NRE and RE), and start with $E_0 = 100$. We're diverting $r$ of the available energy into constructing new RE systems, or $rE_0.$ From that, we get back $q = EROI/\text{lifespan}$ units of energy back per energy input. So the RE from the start is $qrE_0$. 

The variables in the problem are

- $E_0 = 100$ is the initial NRE energy in arbitrary units. Setting it to 100 is a convenient way to think of everything in percentages of $E_0$. $E_n$ is the energy at the beginning of the year $n$ available for all purposes, including the construction of new RE systems.
- $T_n$ is the combined total energy produced in year $n$ from both NRE and RE, less the amount required to produce new RE systems. It is the amount of energy available to society for other purposes.
- $d$ is the natural decline of fossil fuel production post-peak, $0 \leq d \leq 1$.
- $r$ is the fraction of the total available energy diverted to constructing new RE systems, $0 \leq r \leq 1$.
- $q = EROI/\text{lifespan}$ is the quantity of RE generated every year, per unit of energy required for the construction of the system.
- $n$ is the number of years since the beginning of the conversion process.

### Model EROI calculations

To get started, let's assume that we divert $r$ units of the initial $E_0$ to build our first RE system. This generates $qr$ units giving
$$
T_0 = E_0 - rE_0 + qrE_0 = (1-r+qr)E_0.
$$
If we divert 1%, $r = 0.01$, and if the EROI of our RE system is 15 with a lifespan of 30 years, then $q = 0.5$ so $qr = 0.005$. At the beginning of the first year, the natural decline in NRE production is down to $(1-d) E_0$, but we have $qrE_0$ units of RE available from the starting point of year 0.
$$
\begin{aligned}
E_1 &= (1-d) E_0 + qrE_0 = (1 - d + qr)E_0 \\
&= (1 - 0.05 + 0.005) \times 100 = 95.5.
\end{aligned}
$$
Of this, we'll divert $rE_1$ units and get back $qrE_1$, and we have $qrE_0$ units of RE production from the beginning, giving a total of
$$
T_1 = E_1 - rE_1 + qr E_1 + qrE_0 = (1 - r + qr)E_1 + qrE_0.
$$
At the start of the second year, the total available is

- $(1-d)^2 E_0$ non-renewable
- $qr E_0$ renewable from the start
- $qrE_1$ renewable from the previous year

so we'll have 
$$
E_2 = (1-d)^2 E_0 + qr ( E_0 + E_1) 
$$
Of this, we'll divert $rE_2$ units and get back $qrE_2$ for a total
$$
T_2 = (1 - r + qr)E_2 + qr(E_0 + E_1).
$$
Writing the available energy $T_n$ in terms of the previously available energy,
$$
\begin{aligned}
T_0 &= (1-r+qr)E_0 \\
T_1 &= (1 - r + qr)E_1 + qrE_0 \\
T_2 &= (1 - r + qr)E_2 + qr(E_0 + E_1) \\
&\vdots \\
T_n &= (1 - r + qr)E_n + qr \sum_{i=0}^{n-1} E_i \\ 
T_{n+1} &= (1 - r + qr)E_{n+1} + qr \sum_{i=0}^{n} E_i. 
\end{aligned}
$$
Since 
$$
E_n = (1-d)^n E_0 + qr \sum_{i=0}^{n-1} E_i
$$
and 
$$
E_{n+1} = (1-d)^{n+1} E_0 + qr \sum_{i=0}^{n} E_i
$$
then
$$
T_n = (1 - r + qr)(1-d)^n E_0 + 2qr \sum_{i=0}^{n-1} E_i
$$
and
$$
T_{n+1} = (1 - r + qr)(1-d)^{n+1} E_0 + 2qr \sum_{i=0}^n E_i
$$


The fraction of energy diverted to new RE, $r$ is the only parameter we can control. If there exists $r$ such that $T_{n+1} = T_n$ for any $n$, then $r$ will be a fixed point. Equivalently, $r$ is a fixed point if $T_{n+1} - T_n = 0$, 
$$
\begin{aligned}
0 = T_{n+1} - T_n &= (1 - r + qr)E_{n+1} + qr \sum_{i=0}^{n} E_i - (1 - r + qr)E_n - qr \sum_{i=0}^{n-1} E_i \\
&= (1 - r + qr)(E_{n+1} - E_n) + qr \left(\sum_{i=0}^{n} E_i - \sum_{i=0}^{n-1} E_i \right) \\
&= (1 - r + qr)(E_{n+1} - E_n) + qr E_n \\
&= (1 - r + qr)E_{n+1} - (1-r)E_n.
\end{aligned}
$$
Expanding both sides,
$$
\begin{aligned}
E_{n+1} + r(-1+q)E_{n+1} &= E_n - rE_n \\
E_{n+1} - E_n &= - r(-1+q)E_{n+1} - rE_n \\
&= -r \left((-1+q)E_{n+1} + E_n \right)
\end{aligned}
$$
and solving for $r,$
$$
r = \frac{E_{n+1} - E_n}{(q - 1)E_{n+1} + E_n}.
$$
In the strict mathematical sense of fixed points, there is no one value of $r$ that gives a constant total energy. Since the difference between $E_{n+1}$ and $E_n$ changes each year, there isn't a single value for $r$ that gives a fixed point. The cumulative total renewable energy also changes every year giving each curve a concave upward shape.

If the lifetime of the RE system is longer than the EROI, then $q < 1$, so for each unit of initial energy input to build the system, the return per year is less than one. What this  means is that no matter how much is allocated in year 0, the total available will be less than the original energy fossil fuel energy, and this will continue in a post-peak condition.

### Results with 5% non-renewables diverted to renewables

Looking at the case where 5% of the available energy is diverted to building renewable energy, the quantity of fossil fuel that needs to be made up with renewables is shown in red as "Fossil fuel loss", and the decay from the start due to natural decline is the blue curve labeled "Fossil fuel". The green curve shows the increasing amount of renewable energy, and the purple curve shows the combined total.

![renewable-replacement-5pct](/assets/img/2023-10-10-decline-and-fall-of-petroleum/renewable-replacement-5pct.png)

During the early years of the conversion process, the total available energy would be less than if only fossil fuel were consumed. But by diverting 5% every year, the total quickly exceeds the initial energy availability.

## A Dose of Reality

![Answers-simple-vs-complex-750x600](/assets/img/2023-10-10-decline-and-fall-of-petroleum/Answers-simple-vs-complex-750x600.png)

<p align = "center"><b>Answers</b></p>

The graphs above show that if we simply divert 5% of the available energy towards constructing renewables, pretty soon we'll have more than we started with, it will be clean and forever increasing. What could possibly be wrong?

Governments could create incentives to make renewables more affordable, but at some point diverting 5% of the available energy is effectively creating a  recession where the economy drops by 5%. Politically, this is likely to be untenable. In any case, we're absolutely limited to 343 watts per square meter of incoming solar energy (See [CO2 v. CH4](https://wildpeaches.xyz/blog/co2-v-ch4/)). Nothing we do will create more sunlight than this upper bound.

In [Substituting Renewable Energy for Fossil Fuels is a Doomsday Stratagem](https://energy.utexas.edu/events/substituting-renewable-energy-fossil-fuels-doomsday-stratagem#:~:text=Energy%20substitution%20is%20a%20doomsday,its%20consequence%20of%20no%20growth.) ([YouTube](https://www.youtube.com/watch?v=2lW3D3hs1WU), [slides](https://www.artberman.com/wp-content/uploads/2023/09/UT-EI-Presentation-SEP-2023.pdf)) petroleum geologist [Art Berman](https://www.artberman.com/) points out that focusing on only carbon emissions overlooks 

- overconsumption, 
- air pollutants, 
- resource scarcity, 
- biodiversity loss, 
- ecotoxicity, 
- and [eutrophication](https://oceanservice.noaa.gov/facts/eutrophication.html) (algae blooms, dead zones). 

### Biodiversity loss

In [Can Modernity Last?](https://dothemath.ucsd.edu/2023/09/can-modernity-last/) Tom Murphy (UCSD physics) says, "We have used it [energy] to expand the human enterprise and population, knock down forests, destroy and fragment habitats, drive extinctions, and generally threaten the vitality of the planet", and

> It needs to be understood that renewable energy is not actually about saving the *planet*: clearly it will ravage more land and habitats in pursuit of materials. It’s really about preserving *modernity* in the face of CO2. Let’s be clear on the goal, here, and how ultimately narrow/misguided it is. Which is more valuable—modernity or the ecological health of the planet? Which depends on which?

A graph from Murphy's post shows the dramatic decrease in the ratio of wild land mammal mass to human mass which has dropped almost five orders of magnitude (10,000 times) over the period 10,000 B.C. to now.

![mam-hum-ratio](/assets/img/2023-10-10-decline-and-fall-of-petroleum/mam-hum-ratio.png)

<p align = "center"><b>Land mammal to human mass ratios</b></p>

and the [Living Planet Index](https://ourworldindata.org/grapher/global-living-planet-index) provides this graph of the decline in wild species over the last 50 years, showing a nearly 70% decline.

![global-living-planet-index](/assets/img/2023-10-10-decline-and-fall-of-petroleum/global-living-planet-index.svg)

<p align = "center"><b>Land mammal population declines</b></p>

### Earth boundaries

[Nate Hagens](https://www.thegreatsimplification.com/), Director of [The Institute for the Study of Energy & Our Future](https://www.energyandourfuture.org/) (ISEOF), estimates that fossil fuels provide the equivalent of 500 billion human laborers every year. Since the current population is about 8 billion, this means we have access to 62.5 laborers each on average. 

The [Stockholm Resilience Centre](https://www.stockholmresilience.org/) says that consumption of Earth resources is out of bounds and estimates that humans have exceeded planetary limits in several critical areas. Including Hagens' estimate, our energy bound far surpasses the other planetary limits we have crossed to date.

![earth-overshoot](/assets/img/2023-10-10-decline-and-fall-of-petroleum/earth-overshoot.png)

<p align = "center"><b>Earth resources safe operating space</b></p>

Converting energy sources to non-carbon based would address the $CO_2$ and radiative forcing issues, and would reduce the rate of ocean acidification, but wouldn't return any of the other limits to their safe operating zones. [World energy consumption](https://ourworldindata.org/grapher/energy-consumption-by-source-and-country) by source shows that fossil fuels dominate

![world-energy-by-source-key](/assets/img/2023-10-10-decline-and-fall-of-petroleum/world-energy-by-source-key.png)

but even with increasing energy derived from solar and wind, fossil fuel consumption continues to climb. This is not surprising since the economy depends on energy (See [Economics and the Stefan-Boltzmann Law](https://wildpeaches.xyz/blog/economics-and-the-stefan-boltzmann-law/)). Humans have never voluntarily substituted one form of energy for another, we've always just included new sources to the overall supply.

![NRE-and-RE-Comparison](/assets/img/2023-10-10-decline-and-fall-of-petroleum/NRE-and-RE-Comparison.png)

An unintended consequence of renewable energy adoption is that it could extend the life of fossil fuels because the consumption of solar or wind-derived electricity might reduce the cost of fossil fuels. This phenomenon was first observed by Stanley Jevons and is now known as [Jevons Paradox](https://en.wikipedia.org/wiki/Jevons_paradox) which says that the falling cost of a resource increases demand. 

This agrees with thermoeconomic, or biophysical economic theory which says that human economic systems are a form of thermodynamics and that low entropy energy sources are converted to wealth and waste heat.

### Resource shortfall

[Simon Michaux](https://www.simonmichaux.com/) is a professor of mining and mineralogy at the [Geological Survey of Finland](https://www.gtk.fi/en/) (GTK). Even for the first generation of renewables, he estimates there will be severe shortfalls of critical metals and minerals.

![Metals-Ratios](/assets/img/2023-10-10-decline-and-fall-of-petroleum/Metals-Ratios.png)

Copper (Cu) resources are less than 20% of the required quantities, and graphite (C-Gr), vanadium (V), and cobalt (Co) resources are about 3.5% of the needed amounts. This doesn't mean that these resources don't exist in the necessary quantities, but that the energy or EROI required to mine, refine and produce ores is too high. Nickel (Ni) and Lithium (Li) have only about 10% of the required quantities for an energy transition to renewables. The [quantity of useable ore per unit volume of mined material](https://tupa.gtk.fi/raportti/arkisto/16_2021.pdf) is decreasing because we have already exploited the best resources $( \text{\sect}8)$.

Not only are the recoverable quantities of required ores significantly less than what is needed for a renewable energy transition, but the rates of mining and processing would need to be increased by orders of magnitude. [Michaux estimates](https://ieo.imf.org/-/media/IEO/Files/Seminars/michaux-ppt.ashx) that copper mining would take 189 years at current rates to reach the required levels, nickel 400 years and lithium 9920 years.

![michaux-mining-rates](/assets/img/2023-10-10-decline-and-fall-of-petroleum/michaux-mining-rates.png)

<p align = "center"><b>Mining Rates</b></p>

### Electric power grid limits

Alice Friedemann is the author of [When Trucks Stop Running: Energy and the Future of Transportation](https://www.amazon.com/When-Trucks-Stop-Running-Transportation-ebook/dp/B0194UBRQC/ref=sr_1_4?crid=8K3IAMGGTYY8&keywords=alice+friedemann&qid=1696813959&sprefix=alice+frie%2Caps%2C90&sr=8-4) and [Life after Fossil Fuels: A Reality Check on Alternative Energy](https://www.amazon.com/Life-after-Fossil-Fuels-Alternative-ebook/dp/B091DS6G9C/ref=sr_1_1?crid=8K3IAMGGTYY8&keywords=alice+friedemann&qid=1696813959&sprefix=alice+frie%2Caps%2C90&sr=8-1). She also writes regularly on her site [Energy Skeptic](https://energyskeptic.com/) where she examined the condition of the U.S. electrical grid in a post titled, [The electric grid could be down for years if LPTs destroyed](https://energyskeptic.com/2023/power-transformers-that-take-up-to-2-years-to-build/). 

The average age of large power transformers (LPTs) is now 40 years which is the expected lifetime. Friedemann notes the critical issues facing electric utilities:

- The need to modernize and increase the capacity of the power grid is growing due to increased energy demand, aging infrastructure, grid resilience, security requirements, and global and national clean energy goals.
- Without improving domestic GOES steel (grain-oriented electrical steel) production capabilities, LPT manufacturers will be dependent on foreign sources.
- The U.S. manufacturers of LPTs are not competitive compared to the global manufacturers because of multiple issues including workforce skill gaps, high capital investment, lack of test space, and unstable material costs.
- Leading HVDC (high-voltage direct current) suppliers are present in the United States. However, their manufacturing plants are based in Asia and Europe where most demand resides.
- The semiconductors required for manufacturing HVDC converters are not manufactured in the U.S. States, either.
- As the world seeks to adopt more carbon-free electricity, demand for HVDC devices will increase, and procuring these devices with no local manufacturers will be more challenging and make the United States heavily dependent on foreign markets and politics.

Are the electric grids capable of sustaining a large increase in load to support an all-electric energy system?

A more succinct, but less technical summary of our predicament is [Should We Tell People It’s Too Late To Save Civilization?](https://collapsesurvivalsite.substack.com/p/should-we-tell-people-its-too-late?utm_source=post-email-title&publication_id=878624&post_id=137822899&utm_campaign=email-post-title&isFreemail=true&r=rg5l&utm_medium=email) by Alan Urban.

## The Sagan Standard, ECREE, TRL and TLAs

![sagan](/assets/img/2023-10-10-decline-and-fall-of-petroleum/sagan.jpg)

<p align = "center"><b>Carl Sagan with a Viking lander</b></p>

In Carl Sagan's book [Broca's Brain: Reflections on the Romance of Science](https://www.librarything.com/work/24116) he coined the aphorism "Extraordinary Claims Require Extraordinary Evidence", now often referred to by its acronym ECREE, and known as the [Sagan Standard](https://en.wikipedia.org/wiki/Sagan_standard#:~:text=The%20Sagan%20standard%20is%20the,the%201980%20television%20program%20Cosmos.) which is meant to question scientific claims. Do the claims that a renewable energy based society live up to the Sagan Standard?

### The claims

For all of the bad side effects of fossil fuels, their energy density allowed them to be self-sustaining. There are no large-scale demonstrations of a wind or PV system that can fully regenerate themselves while producing sufficient excess energy to be useful. Nor is there evidence that our current civilization wouldn't simply add any new energy source to the current mix, and we don't know what consequences or unintended side-effects might occur from these systems when deployed at scale. 

An interesting perspective is this [interview with financial analyst Louis-Vincent Gave](https://www.macrovoices.com/1239-macrovoices-394-louis-vincent-gave-china-energy-more) where he said, 

> "You know, I think over 10 years, we invested more than 4 trillion US dollars, trillion with a T, in wind and solar. And with that, we managed to move from 83% being carbon base to 81% being carbon based, which to me, speaks to the failure of those investments" and " people are realizing this, you know, are waking up to the fact that wind and solar have been a capital misallocation on a grand scale, that they haven't delivered a quarter of what we'd hoped they would deliver."

So why do we continue to hear that we know how to build renewable energy systems and that governments just need to provide the incentives to make the transition? It's a compelling narrative because it promises an end to carbon pollution without the need to modify our lifestyles. 

The idea that we're rapidly transitioning to renewables is emphasized by articles such as this one on NPR, [How did Uruguay cut carbon emissions? The answer is blowing in the wind](https://www.npr.org/2023/10/06/1197954251/uruguay-green-energy-carbon-emissions-climate-change) which describes how Uruguay converted their electrical grid to 98% renewables with wind and hydropower. 

But half of the electricity comes from hydro, and none of it would have been possible without fossil fuel inputs for the construction of the sources. Hydropower is appropriate for small, hilly regions, but wouldn't scale up to U.S.-sized requirements. Worldwide, most hydropower locations have already been appropriated for electric power generation and there aren't many remaining available sources.

There are plenty of scientific papers claiming that a transition is possible and even [this article](https://link.springer.com/article/10.1007/s41247-023-00113-9) by Marco Raugei of Oxford Brookes University in which he says that there are two opposing camps, the “systemic pessimists” and the “technological optimists”, and "that this is a false dichotomy that is damaging to the reputation of both “camps”, and which risks devaluing and trivializing the most important question of all, namely how to achieve long-term sustainability." The problem with his argument there aren't two sides. The “technological optimists” are making extraordinary claims without providing evidence to support those claims.

### Technology Readiness Levels

[Technology Readiness Levels (TRL)](https://en.wikipedia.org/wiki/Technology_readiness_level) is a concept developed by NASA to assess how close a new technology is to being deployable. There are nine levels,

| TRL  | NASA usage[[4\]](https://en.wikipedia.org/wiki/Technology_readiness_level#cite_note-4) | European Union[[5\]](https://en.wikipedia.org/wiki/Technology_readiness_level#cite_note-5) |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | Basic principles observed and reported                       | Basic principles observed                                    |
| 2    | Technology concept and/or application formulated             | Technology concept formulated                                |
| 3    | Analytical and experimental critical function and/or characteristic proof-of-concept | Experimental proof of concept                                |
| 4    | Component and/or breadboard validation in a laboratory environment | Technology validated in the lab                              |
| 5    | Component and/or breadboard validation in a relevant environment | Technology validated in relevant environment (industrially relevant environment in the case of key enabling technologies) |
| 6    | System/subsystem model or prototype demonstration in a relevant environment (ground or space) | Technology demonstrated in relevant environment (industrially relevant environment in the case of key enabling technologies) |
| 7    | System prototype demonstration in a space environment        | System prototype demonstration in an operational environment |
| 8    | Actual system completed and "flight qualified" through test and demonstration (ground or space) | System complete and qualified                                |
| 9    | Actual system "flight proven" through successful mission operations | Actual system proven in operational environment (competitive manufacturing in the case of key enabling technologies; or in space) |

ranging from an initial concept to fully ready systems. In [The Growing Gap](https://wildpeaches.xyz/blog/the-growing-gap/), we asked the following three questions,

1. Does the technology exist to successfully transition to a renewable energy economy?
2. What response from society might we expect? Will society replace fossil fuels with renewables, or just add to the energy mix?
3. What might be the impact? How will the biosphere be affected by adopting renewables?

Given the technology readiness level requirements, we haven't even achieved TRL 1.

Oh, and if you're wondering what the three-letter acronym TLA means, it stands for *Three Letter Acronym*.

## Appendix 1 - The IPCC, IAMs and RCP 8.5

The [Intergovernmental Panel on Climate Change](https://www.ipcc.ch/) (IPCC) has several scenarios called Representative Concentration Pathways (RCPs), and RCP 8.5 projects increasing fossil fuel emissions to 2100 which result in $8.5 \frac{W}{m^2}$ excess radiation at the top of the atmosphere relative to pre-industrial levels. For details about Earth's energy balance see [$CO_2 \; v. \; CH_4$](https://wildpeaches.xyz/blog/co2-v-ch4/). 

In an interview with Nate Hagens, climate and policy scientist [Roger Pielke, Jr.](https://www.thegreatsimplification.com/episode/81-roger-pielke) explained that during the early days of the IPCC, climate scientists were producing models in their specialty areas, and projecting the effects forward using scenarios developed for these models. The problem was that the forward projections weren't compatible, so it became difficult to compare models from different groups.

The IPCC initiated [Integrated Assessment Models](https://www.carbonbrief.org/qa-how-integrated-assessment-models-are-used-to-study-climate-change/) (IAMs) to provide a consistent framework for models from various disciplines to be compared. The IAMs were developed from inputs provided by demographers and economists who estimated world population and energy requirements out to 2100 under different assumptions of energy consumption. The one with the most rapid increase in emissions is [RCP 8.5](https://worldoceanreview.com/en/wor-5/climate-change-threats-and-natural-hazards/climate-change-and-the-coasts/the-ipcc-scenarios/) and is currently the pathway closest to measured data.

![ipcc-rcp](/assets/img/2023-10-10-decline-and-fall-of-petroleum/ipcc-rcp.png)

<p align = "center"><b>IPCC climate change pathways</b></p>

The problem with RCP 8.5 is that it depends on a very large increase in coal consumption which Justin Ritchie and Hadi Dowlatabadi question in their paper [Why do climate change scenarios return to coal?](https://www.sciencedirect.com/science/article/abs/pii/S0360544217314597), saying, 

> This paper argues SSP5-RCP8.5 is an exceptionally unlikely end-point of future CO2 forcing because it is biased by a return to coal hypothesis that distorts the future energy scenarios produced by IAMs. This return to coal hypothesis: (i) represents a significant discontinuity in historical primary energy development trends (Section 2), (ii) is assessed for plausibility with an untested and empirically unverified model of technological change in resource extraction technology (Section 3), (iii) results from a temporal information asymmetry between fossil resource assessments (Section 4.1) and (iv) repeats the pattern and rationale of historical projections that dramatically overestimated future coal use.

[Carbon Brief](https://www.carbonbrief.org/explainer-the-high-emissions-rcp8-5-global-warming-scenario/) explains that "In recent years the emissions scenario used to generate RCP8.5 has come [under](https://twitter.com/MLiebreich/status/1157777939590778881) [criticism](https://www.sciencedirect.com/science/article/abs/pii/S0360544217314597) by several researchers for its assumptions around high future emissions and a [dramatic expansion](https://www.sciencedirect.com/science/article/pii/S0140988317301226) of coal use." 

[Coal consumption](https://en.wikipedia.org/wiki/Peak_coal) as a fraction of the total energy supply appears to have peaked in 2008 meaning that RCP 8.5 is not a likely outcome despite the trajectory matching well with current conditions. 

This might seem to indicate that we don't need to be as concerned about climate change. But, as climate scientist [Michael Mann](https://michaelmann.net/content/story-about-%E2%80%98business-usual%E2%80%99-story-misleading) points out, even if emissions don't reach the quantities contained in RCP 8.5, that doesn't rule out non-linearities and feedback loops to keep the temperature pathway at the highest levels. 

## Appendix 2 - Building the models and plotting with Veusz

If you want to modify the conditions of the EROI model, the spreadsheet [decline.xlsx](https://docs.google.com/spreadsheets/d/1PCyTBKeQPU-eGGf5akvUFVAFEwI9ogUk/edit?usp=sharing&ouid=114371855488428161826&rtpof=true&sd=true) may be downloaded from my Google Drive account. As an alternative to Excel, download the open-source [Libre Office](https://www.libreoffice.org/) Calc. At the bottom of the data section in the spreadsheet are modifiable parameters for the decline rate $d,$ the divert rate $r,$ EROI, and system lifetimes.  

Plots were generated using the [Veusz Scientific Plotting Package](https://veusz.github.io/). Veusz best works with spreadsheet data (.csv) and is easily customizable. A good introduction to the basic features may be found [here](https://icme.hpc.msstate.edu/mediawiki/index.php/Veusz_Quick_Start.html). You will need to save the spreadsheet to .csv format for Veusz, but keep the original so the formulas work. Download the [Renewable Decline.vsz](https://gist.github.com/XerxesZorgon/0740e982586a7502d9f470c68f40d2a5) file and open it with Veusz to see the plot. To modify the output, run with different divert rates, and save each run in a column with a header like "Total avail 1%". You will need distinct column headers for Veusz.

Note that the model ends with the last year of the system lifetime, 30 years. If you want to extend the model, be aware that the formulas will need to be updated to include total renewable energy for only the past 30 years, or whatever lifetime you choose.

The estimate of a 4.8% decline in production post-peak was derived from data in the [Statistical Review of World Energy](https://www.energyinst.org/__data/assets/excel_doc/0007/1055545/EI-stats-review-all-data.xlsx) compiled by the [Energy Institute](https://www.energyinst.org/). This data was previously reported by [BP](https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html) until 2023. The formula for the decline rate is based on the following:
$$
\begin{aligned}
P &= P_0 (1 - r)^n \\
\frac{P}{P0} &= (1-r)^n \\
\log\left( \frac{P}{P0} \right) &= n \log(1-r) \\
\frac{\log\left( \frac{P}{P0} \right)}{n}  &= \log(1-r) \\
\exp \left( \frac{\log\left( \frac{P}{P0} \right)}{n} \right) &= 1 -r \\
r &= 1 - \exp \left( \frac{\log\left( \frac{P}{P0} \right)}{n} \right)
\end{aligned}
$$
where $P$ is the production after $n$ years post-peak, $P_0$ is the peak flow rate, and $r$ is the decline rate. The estimate was derived by setting $n=5,$ and averaging over the first 5 years post-peak. 

The data was extracted to [oil-prod-data.xlsx](https://docs.google.com/spreadsheets/d/1ipN9b_O5VErITjUiMFNwGLEOm7xbspl7/edit?usp=sharing&ouid=114371855488428161826&rtpof=true&sd=true) (Sheet 2) if you want to review the decline rates. 

------

#### Image credits

Hero: [DreamStudio.ai](https://dreamstudio.ai/generate). Prompt: "A post-apocalyptic burning oil refinery." with photo of the [Roman Colosseum](https://www.livescience.com/roman-colosseum). Robin-Angelo Photography via Getty Images.

Answers: [Science vs. Everything Else](https://www.gocomics.com/nonsequitur/2016/01/20). Wiley Miller, Non Sequitur, Jan 20, 2016.

Land mammal to human mass ratios: [Ecological Cliff Edge](https://dothemath.ucsd.edu/2023/08/ecological-cliff-edge/). Tom Murphy, [Do The Math](https://dothemath.ucsd.edu/), Aug. 18, 2023.

Land mammal population declines: [Living Planet Index, World](https://ourworldindata.org/grapher/global-living-planet-index). Our World in Data, World Wildlife Fund (WWF) and Zoological Society of London, Oct. 13, 2022.

Earth resources safe operating space: [Earth Out of Bounds](https://www.stockholmresilience.org/). Stockholm Resilience Centre, [Planetary Boundaries](https://www.stockholmresilience.org/research/planetary-boundaries.html), Azote for Stockholm Resilience Centre, based on analysis in Richardson et al 2023. 

Renewables Reserves Shortfall: [Is There Enough Metal to Replace Oil?](https://www.counterpunch.org/2022/08/23/is-there-enough-metal-to-replace-oil/). [Robert Hunziker](https://www.counterpunch.org/author/robert-hunziker/), [CounterPunch](https://www.counterpunch.org/), Aug. 23, 2022.

Mining Rates: [Assessment of the Extra Capacity Required of Alternative Energy Electrical Power Systems to Completely Replace Fossil Fuels](https://ieo.imf.org/-/media/IEO/Files/Seminars/michaux-ppt.ashx). Simon Michaux, GTK, Aug. 18, 2022.

Carl Sagan with a Viking lander: [Carl Sagan with Viking](https://airandspace.si.edu/multimedia-gallery/saganvikingjpg). Smithsonian National Air and Space Museum.

IPCC climate change pathways: [The IPCC Scenarios](https://worldoceanreview.com/en/wor-5/climate-change-threats-and-natural-hazards/climate-change-and-the-coasts/the-ipcc-scenarios/). 

------

## References and further reading

- [Peak Oil Has Finally Arrived. No, Really](https://www.washingtonpost.com/business/energy/peak-oil-has-finally-arrivedno-really/2022/09/28/f67f2f0a-3f68-11ed-8c6e-9386bd7cd826_story.html)
- [Peak Oil - Now or Later? A Response to Daniel Yergin](http://theoildrum.com/node/8391)
- [Giant oil field decline rates and peak oil](https://energyskeptic.com/2020/giant-oil-field-decline-rates-and-their-influence-on-world-oil-production/)
- [Substituting Renewable Energy for Fossil Fuels is a Doomsday Stratagem](https://energy.utexas.edu/events/substituting-renewable-energy-fossil-fuels-doomsday-stratagem#:~:text=Energy%20substitution%20is%20a%20doomsday,its%20consequence%20of%20no%20growth.)
- [Can Modernity Last?](https://dothemath.ucsd.edu/2023/09/can-modernity-last/)
- [Ecological Cliff Edge](https://dothemath.ucsd.edu/2023/08/ecological-cliff-edge/)
- [The global biomass of wild mammals](https://www.pnas.org/doi/10.1073/pnas.2204892120)
- [Living Planet Index](https://ourworldindata.org/grapher/global-living-planet-index)
- [The Great Simplification](https://www.thegreatsimplification.com/)
- [Stockholm Resilience Centre](https://www.stockholmresilience.org/) 
- [Energy consumption by source, World](https://ourworldindata.org/grapher/energy-consumption-by-source-and-country)
- [Transformation of the Industrial System](https://www.simonmichaux.com/)
- [Assessment of the extra capacity required of alternative energy electrical power systems to completely replace fossil fuels](https://ieo.imf.org/-/media/IEO/Files/Seminars/michaux-ppt.ashx)
- [When Trucks Stop Running: Energy and the Future of Transportation](https://www.amazon.com/When-Trucks-Stop-Running-Transportation-ebook/dp/B0194UBRQC/ref=sr_1_4?crid=8K3IAMGGTYY8&keywords=alice+friedemann&qid=1696813959&sprefix=alice+frie%2Caps%2C90&sr=8-4) 
- [Life after Fossil Fuels: A Reality Check on Alternative Energy](https://www.amazon.com/Life-after-Fossil-Fuels-Alternative-ebook/dp/B091DS6G9C/ref=sr_1_1?crid=8K3IAMGGTYY8&keywords=alice+friedemann&qid=1696813959&sprefix=alice+frie%2Caps%2C90&sr=8-1)
- [The electric grid could be down for years if LPTs destroyed](https://energyskeptic.com/2023/power-transformers-that-take-up-to-2-years-to-build/)
- [How did Uruguay cut carbon emissions? The answer is blowing in the wind](https://www.npr.org/2023/10/06/1197954251/uruguay-green-energy-carbon-emissions-climate-change) 
- [Understanding the Origins of Climate Models](https://www.thegreatsimplification.com/episode/81-roger-pielke)
- [How ‘integrated assessment models’ are used to study climate change](https://www.carbonbrief.org/qa-how-integrated-assessment-models-are-used-to-study-climate-change/)
- [The IPCC Scenarios](https://worldoceanreview.com/en/wor-5/climate-change-threats-and-natural-hazards/climate-change-and-the-coasts/the-ipcc-scenarios/)
- [Why do climate change scenarios return to coal?](https://www.sciencedirect.com/science/article/abs/pii/S0360544217314597)
- [Explainer: The high-emissions ‘RCP8.5’ global warming scenario](https://www.carbonbrief.org/explainer-the-high-emissions-rcp8-5-global-warming-scenario/)
- [The 1000 GtC coal question: Are cases of vastly expanded future coal combustion still plausible?](https://www.sciencedirect.com/science/article/abs/pii/S0140988317301226)
- [Emissions – the ‘business as usual’ story is misleading](https://www.nature.com/articles/d41586-020-00177-3)
- [The story about the ‘business as usual’ story is misleading](https://michaelmann.net/content/story-about-%E2%80%98business-usual%E2%80%99-story-misleading)
- [Should We Tell People It’s Too Late To Save Civilization?](https://collapsesurvivalsite.substack.com/p/should-we-tell-people-its-too-late?utm_source=post-email-title&publication_id=878624&post_id=137822899&utm_campaign=email-post-title&isFreemail=true&r=rg5l&utm_medium=email) 

## Code for this article

[decline.xlsx](https://docs.google.com/spreadsheets/d/1PCyTBKeQPU-eGGf5akvUFVAFEwI9ogUk/edit?usp=sharing&ouid=114371855488428161826&rtpof=true&sd=true) - Simple EROI model assuming declining oil production.

[Renewable Decline.vsz](https://gist.github.com/XerxesZorgon/0740e982586a7502d9f470c68f40d2a5) - Plots renewable energy conversion in decline.csv spreadsheet using Veusz.

[oil-prod-data.xlsx](https://docs.google.com/spreadsheets/d/1ipN9b_O5VErITjUiMFNwGLEOm7xbspl7/edit?usp=sharing&ouid=114371855488428161826&rtpof=true&sd=true) - Oil production data from the Energy Institute / BP for producing countries, by year.
