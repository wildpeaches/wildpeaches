---
title: Economics and the Stefan Boltzmann Law
subtitle: Why do economists want us to live in a searing, burning, flaming apocalyptic hellscape?
author: John Peach
lede:
hero:
  url: /assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/heronimus-bosch-the-harrowing-of-hell.webp
  alt:
tags: [math]
keywords: []
socialImg: /assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/heronimus-bosch-the-harrowing-of-hell.jpg
---

[Home](https://wildpeaches.github.io/) 

Profits. 

![underpantsgnomes1](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/underpantsgnomes1.png)

In 1972, an MIT study called [*The Limits to Growth*](https://www.clubofrome.org/publication/the-limits-to-growth/) was published, warning

> The earth’s interlocking resources – the global system of nature in  which we all live – probably cannot support present rates of economic  and population growth much beyond the year 2100, if that long, even with advanced technology.

Here, I'll show how continued economic growth could turn the Earth into an inferno as hot as the surface of the Sun.

## World GDP

The [World GDP](https://ourworldindata.org/grapher/gross-domestic-product?tab=chart&country=OWID_WRL~World) (Gross Domestic Product) has been growing quite nicely for decades

![World GDP](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/world-gdp.png)

other than a couple of hiccups in 2008 and 2019-2020. Another way to look at the data is to plot the [logarithm](https://www.britannica.com/science/logarithm) of GDP. If you raise a number to a power, $10^2 = 100$ then the logarithm of the answer is the exponent, $\log_{10}(100) = 2$.

![log-world-GDP-fit](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/log-world-GDP-fit.png)

If you put your money in a savings account earning 2% per year, then the equation for how much you have after $t$ years is
$$
P(t) = P_0 (1+0.02)^t
$$
where $P_0$ is the initial deposit, and $0.02$ is the interest rate. The rate of increase is
$$
\frac{P(t)}{P_0} = (1+0.02)^t
$$
and if we take the logarithm (base 10) on both sides,
$$
\log_{10} \left( \frac{P(t)}{P_0} \right) = t \log_{10} (1.02) = 0.0086 t.
$$
By plotting the logarithm of the money in your bank account you'll see a perfectly straight line with a slope of $0.0086$. 

The World economy is growing like your bank account, although it's not a perfectly steady 2% per year. Before 1973, the slope was a little steeper than in the period from 1973 to 2019, but the linear fits to both segments are remarkably good. 

The $\log_{10}(GDP_{2019}) = 13.93$ and the $\log_{10}(GDP_{1973}) = 13.35$, so over 46 years the logarithm of the GDP increased by $0.58$, or $0.0126087$ per year. 

Since
$$
10^{0.0126087} = 1.029458
$$
then the World economy grew by an average of 2.9% per year. Great!

## World Energy

The log plot of total World energy consumption over the same period looks similar.

![Log World energy fit](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/log-world-energy-fit.png)

The linear fit isn't quite as good, but the trend is still there. The log of energy consumption in 2019 was 5.21 TWh, and in 1973 it was 4.82 TWh, so the average per year was 0.008423774, and
$$
10^{0.008423774} = 1.019586
$$
or just a bit under 2% growth per year. 

## GDP and Energy

If we plot log GDP against log energy, the fit is nearly linear.

![world-gdp-energy-log-log](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/world-gdp-energy-log-log.png)

But, as anyone who doesn't understand statistics quite well enough will be happy to tell you, "Correlation doesn't imply causation."

![xkcd-correlation](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/xkcd-correlation.png)

For every aphorism, there's a counter-aphorism. In this case, it's "Where there's smoke, there's fire," meaning if you've got a really good fit (correlation), you'd better start considering causation. 

[Tim Garrett](https://www.inscc.utah.edu/~tgarrett/) at the University of Utah has his head in the clouds because he's a climate scientist specializing in clouds, but he took a down-to-Earth look at the correlation between GDP and energy. In 2014, he published ["Long-run global economic growth"](https://www.inscc.utah.edu/~tgarrett/economics.html) where he considered the role of energy in the economy. He wrote,

> The core finding is that economic wealth or capital is not a static quantity that simply exists, but rather it requires continual energy consumption for its sustenance. 

He found that 7.1 Watts of power are needed to maintain $1000 of accumulated wealth. Economic growth requires more energy. In his 2014 paper, ["Long-run evolution of the global economy: 1. Physical basis"](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013EF000171), he described the economy as a thermodynamic heat engine meaning we use energy to generate wealth. 

Energy can't be created or destroyed, so eventually, all of this wealth-generating energy gets converted to a form that is no longer useful. The useless form of energy is waste heat.

Why does the economy need energy? Imagine if we suddenly had no access to external energy sources and had to rely entirely on our own physical energy. All vehicles would stop running, all industrial processes would end, and homes and businesses wouldn't have any electrical power. 

Nice economy youse got there. Shame if sumtin' was to happen to it.

![mafia-economy](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/mafia-economy.png)

## The Stefan-Boltzmann Law

In 1856, Eunice Newton Foote presented a paper to the [American Association for the Advancement of Science (AAAS)](https://www.aaas.org/), [*Circumstances affecting the Heat of the Sun's Rays*](https://publicdomainreview.org/collection/first-paper-to-link-co2-and-global-warming-by-eunice-foote-1856), the first paper to relate carbon dioxide concentration in the atmosphere to temperature. 

![Eunice_Newton_Foote](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/eunice-newton-foote2.png)

<p align = "center"><b>Eunice Newton Foote</b></p>

Three years later, Irish physicist [John Tyndall](https://www.tyndall.ie/john-tyndall/) independently rediscovered Foote's work, using a [ratio spectrophotometer](https://en.wikipedia.org/wiki/Spectrophotometry), and began the era of [climate science.](https://www.ucl.ac.uk/news/2020/jul/opinion-john-tyndall-forgotten-co-discoverer-climate-science)

![tyndall-and-apparatus](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/tyndall-and-apparatus.png)

<p align = "center"><b>John Tyndall</b></p>

In 1877, [Josef Stefan](https://en.wikipedia.org/wiki/Josef_Stefan) derived the physical law describing the relationship between radiation and temperature,
$$
j^* = \sigma T^4
$$
and in 1884, [Ludwig Boltzmann](https://en.wikipedia.org/wiki/Ludwig_Boltzmann) derived the law from first principles, finding the constant $\sigma$ to be
$$
\sigma = \frac{2 \pi^5 k^4}{15 c^2 h^3} \approx 5.67 \times 10^{-8} \frac{W}{m^2 \cdot K^4}
$$
where $k$ is the [Boltzmann constant](https://en.wikipedia.org/wiki/Boltzmann_constant), $c$ is the [speed of light in a vacuum](https://en.wikipedia.org/wiki/Speed_of_light), and $h$ is [Planck's constant](https://en.wikipedia.org/wiki/Planck_constant). The units are watts per (square meter - degree Kelvin to the fourth power), and $0 \degree K = 273.15 \degree C$. 

![Stefan and Boltzmann](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/stefan-and-boltzmann.png)

<p align = "center"><b>Stefan and Boltzmann</b></p>

## Global Warming

Using the works of Tyndall, Stefan, and Boltzmann, Swedish chemist [Svante Arrhenius](https://www.sciencehistory.org/distillations/magazine/future-calculations) developed a relationship between global warming and $CO_2$ concentration, publishing his results in the *London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science* in 1896. He showed that doubling the concentration of carbon dioxide in the atmosphere would increase global temperatures between $5.5\degree F$  and $9\degree F$.

![Svante Arrhenius](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/svante-arrhenius.jpg)

<p align = "center"><b>Svante Arrhenius</b></p>

What does the Stefan-Boltzmann law mean? An object at temperature $T$ in [degrees Kelvin](https://www.livescience.com/temperature.html) radiates energy $j^*$ in Watts per square meter. Watts are a unit of power, but multiply power by time to get energy. Also, the Stefan-Boltzmann law applies to [blackbody radiators](https://astronomy.swin.edu.au/cosmos/b/blackbody+radiation) or perfect radiators, but most objects are not quite ideal, so emit less energy than a blackbody.

Conversely, for an object to radiate more energy, it needs to be hotter, and this is how the law applies to climate science. Sunlight is mostly in the [visible spectrum (380 nm - 700 nm)](https://science.nasa.gov/ems/09_visiblelight) which is transparent to atmospheric molecules. After the light reaches the surface it warms the earth. To maintain an [energy balance](https://theconversation.com/earths-energy-budget-is-out-of-balance-heres-how-thats-warming-the-climate-165244) an equivalent amount needs to be reradiated into space.

![earth-energy-budget](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/earth-energy-budget.png)

<p align = "center"><b>Earth Energy Budget</b></p>

The top of the atmosphere receives around $1370 \frac{W}{m^2}$ from the sun. About 30% is reflected by clouds and other atmospheric molecules, leaving approximately $1000 \; \frac{W}{m^2}$ at the Earth's surface. Due to the [curvature of the Earth](https://earthobservatory.nasa.gov/features/EnergyBalance), and since only one side is illuminated, this reduces to an average of $340.4 \frac{W}{m^2}$. 

![sunlight_angle](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/sunlight_angle.png)

<p align = "center"><b>Sunlight Angle</b></p>

Reradiation from the warmed surface is in the [infrared spectrum](https://www.infinitioptics.com/technology/multi-sensor)

![Infrared_Spectrum_fixed](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/Infrared_Spectrum_fixed.svg)

<p align = "center"><b>Visible and Infrared Spectra</b></p>

which is where the trouble begins. Divalent molecules or molecules with a single central atom bonded to two other atoms are often excellent [absorbers of infrared radiation](https://www.epa.gov/ghgemissions/overview-greenhouse-gases). 

Examples of divalent molecules are $H_2 O, \; CO_2$, and $NO_2$, but an even better heat-trapping molecule, with one central atom and four bonds, is methane, $CH_4$. You might think of these molecules as tiny tuning forks resonating at the infrared (IR) frequency when struck by outgoing  radiation.

Since the molecules don't know which way is up, they reradiate the absorbed IR in all directions. Half of the energy returns to Earth, so we wind up with an imbalance (see the back radiation of $340.3 \frac{W}{m^2}$ in the figure above). To get rid of the extra energy, the Stefan-Boltzmann law says the Earth has to heat up.

Using the Stefan-Boltzmann Law, we can calculate the temperature of the surface of the Earth. Since $T = \left( \frac{j^*}{\sigma} \right)^{1/4}$,
$$
T_{\text{Earth}} = \left( \frac{340.3 \frac{W}{m^2}}{5.67 \times 10^{-8} \frac{W}{m^2-\degree K}} \right)^{1/4} = 278.3567 \degree K.
$$
The actual temperature is about $288 \degree K$, and the difference is due to the heat trapping capability of greenhouse gases. Without them, the Earth would be too cold to support life as we know it.

## Arithmetic, Population, and Energy

Fenway Park in Boston, MA is home to the Boston Red Sox. The stadium was built in 1912, rebuilt in 1934, and is the oldest MLB stadium still in use. According to the [Bleacher Report](https://bleacherreport.com/articles/661740-mlb-ballparks-9-shortest-porches-in-major-league-baseball), "The park has the shortest distance of any field in baseball to left-field (310 feet) or right-field (302 feet)." 

The left-field wall, called the "Green Monster", is 37 feet tall and houses the scoreboard. The scores are updated manually, and if a batter hits a ball through a hole where a number is being updated, it's an automatic ground-rule double.

![Fenway Park Home Plate & Green Monster](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/green-monster.png)

<p align = "center"><b>Fenway Green Monster</b></p>

Snidely Whiplash forced you at epee point to the upper bleachers just below the Citgo sign. There, he chained you to the seats, locked with an old-fashioned padlock. What is he up to? What have you ever done to Snidely? Nothing. He's just evil. As you watch, he wanders all around the bleachers applying Whiplash's Wicked Waterproofing to the entire interior of Fenway.

After a while, he makes his way out onto the empty field, still deploying his wicked waterproofing concoction. The grounds crew will have a real mess to clean up. Standing on the pitcher's mound, he yells up to you, "You're doomed now!," and removes his patented Snidely's Sneaky Pipette from his pocket. 

"I'm going to drip one drop, then a second later two drops, then four, and so on until you drown", yells Snidely. 

Drip. 

Drip, drip. 

Drip, drip, drip, drip.

Really, Snidely? At this rate, those drips will evaporate long before there's a problem. You can leisurely figure out how to pick the padlock and saunter off while Snidely is still dripping his stupid drips. Since you have plenty of time, why not figure out just how long it will take Whiplash to fill Fenway?

You didn't bring your slide rule so you'll have to estimate another way. Recalling the dimensions from home plate to the right and left walls are about 300 feet, then the area of the field is $(3 \times 10^2)^2 = 9 \times 10^4 \approx 10^5$ square feet. Every 10 feet of depth is a million cubic feet of volume. 

Since the Green Monster is 37 feet tall, you might be 50 feet above the field and the actual area of the stands is probably double the area of the field, so let's multiply the volume estimate by 100 to get $10^5 \times 10^2 = 10^7$ or 10 million cubic feet.

How many drops of water are there in a cubic foot? Picture lining up drips along a ruler. You estimate about 100 drops to fit a foot long ruler, so in a cubic foot there would be $(10^2)^3 = 10^6$ or a million drops per cubic foot. (The accepted number is [566,336.93](http://convert-to.com/conversion/water-weight-volume/convert-ft3-of-water-volume-to-si-drop-gtt-water-volume.html), but we're rounding.) 

To completely fill Fenway, Whiplash will have to drip $10^6 \times 10^7 = 10^{13}$ drops. Plenty of time. Let's work out some powers of 2 since he's doubling the number of drops every second.

You might remember that $2^{10} = 1024$, but if not, start with 2 and keep doubling until you get there: $2,4,8,16,32,64,128,256,512,1024$. 

Ten seconds after the first drop, Snidely will drip out about 1000 drops, not even enough to get one square foot damp. Hardly worth worrying about. After 20 seconds, it will be $2^{20} = 2^{10} \times 2^{10} = 1,000,000 = 10^6$ or a million drops. Double the time again, and we're up to $10^{12}$ drops Snidely is pouring out onto the field. If you sum the totals, you'll find
$$
\sum_{k=0}^n 2^k = 1 + 2 + 4 + \ldots + 2^n = 2^{n+1} - 1.
$$
In other words, you've got about 40 seconds to pick the padlock and leap to safety over the left-field wall! And you've already wasted $39 \;  1/2$ of them on these idiotic math calculations!

Albert Bartlett taught nuclear physics at the University of Colorado at Boulder. He gave a very popular lecture, [Arithmetic, Population and Energy](https://www.albartlett.org/presentations/arithmetic_population_energy.html) (1,742 times!), always beginning with

> *The greatest shortcoming of the human race is our inability to understand the exponential function.*

## Meltdown!

![earthmelting](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/earthmelting.jpg)

<p align = "center"><b>Meltdown!</b></p>

Since economic growth depends on increasing energy inputs, and all of the energy eventually is converted to waste heat, we can calculate the temperature of the Earth as a function of exponential growth.

In 2019, the World consumed 160,000 TWh of energy $(1 \; TWh = 10^{12} \; \text{watt-hours})$. The surface area of the Earth is about $5 \times 10^8 \; km^2 = 5 \times 10^{14} \; m^2$, and there are $365 \times 24 = 8760$ hours in a year. Divide total energy consumed by the number of hours in a year to get the average power 
$$
P = \frac{1.6 \times 10^{17} \; Wh}{8760 \; h} \approx 2 \times 10^{13} \; W.
$$
Now, divide the power by the surface area to get watts per square meter, $0.04 \frac{W}{m^2}$. Let's recalculate the temperature of the Earth with this extra energy,
$$
T_{\text{Earth}} = \left( \frac{(340.3 + 0.04) \frac{W}{m^2}}{5.67 \times 10^{-8} \frac{W}{m^2-\degree K}} \right)^{1/4} = 278.3648 \degree K.
$$
All of our energy consuming has raised the temperature by $0.0081 \degree$. Nothing to worry about here. Suppose your bank account paid just a bit more than 2%, say $2 \frac{1}{3}$%. The extra $\frac{1}{3}$% is just enough so that over a century, the value of your account will grow by a factor of 10. 

If the economy also grew by a factor of 10 in a century, then the temperature of the Earth would be (ignoring greenhouse gases)
$$
T_{\text{Earth}} = \left( \frac{(340.3 + 0.4) \frac{W}{m^2}}{5.67 \times 10^{-8} \frac{W}{m^2-\degree K}} \right)^{1/4} = 278.4384 \degree K.
$$
![Mad-Magazine-Alfred-Neuman-what-me-worry](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/Mad-Magazine-Alfred-Neuman-what-me-worry.gif)

<p align = "center"><b>Alfred E. Neuman</b></p>

After another hundred years, the economy adds $4$ Watts per square meter. A century later it's up to $40 \; \frac{W}{m^2}$, and pretty soon you've got a Snidely Whiplash kind of problem. 

The formula for the Earth's temperature is 
$$
T_{\text{Earth}} = \left( \frac{(340.3 + (1+\frac{r}{100})^t) \frac{W}{m^2}}{5.67 \times 10^{-8} \frac{W}{m^2-\degree K}} \right)^{1/4}
$$
where $r$ is the annual growth rate of the economy in percent, and $t$ is the number of years. This shows the effect on the Earth's surface temperature with a constant economic growth rate of $2.3 \%$:

![Earth Temperature](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/earth-temperature.png)

Water boils after 292 years, paper burns at year 357, gold melts in year 533, and after 789 years of constant growth, the surface of the Earth is the same temperature as the Sun. 

It can be difficult to imagine events taking place hundreds of years into the future, so a better way to think about this is to recall events in history. If 2.3% continuous economic growth had begun in the years 1730, 1665, 1489, or 1233 we'd be experiencing the effects now.

| Year | Event                                                        | Temperature | Comment         |
| ---- | ------------------------------------------------------------ | ----------- | --------------- |
| 1730 | Baltimore, MD founded, Fredrick the Great becomes King of Prussia (1740) | 373.1       | Water boils     |
| 1665 | Vermeer paints Girl with a Pearl Earring, Great Fire of London (1666) | 505.9       | Paper burns     |
| 1489 | The Queen of Cyprus, Catherine Cornaro, sells her kingdom to the Republic  of Venice (March 14) | 1337        | Gold melts      |
| 1233 | Catholic Inquisition begins, Magna Carta (1215)              | 5778        | Sun temperature |

With $2.3\%$ growth starting in 1492, the year Columbus first arrived in the New World, gold would begin melting now.

## Good News and Bad News

The good news is we don't have nearly enough energy to get temperatures to these levels. The bad news is the economy can't keep growing. The math used here applies to exponential growth, but linear growth would have the same effects over a longer time. 

Some economists have proposed alternatives to growth such as [Donut Economics](https://time.com/5930093/amsterdam-doughnut-economics/), which requires that everyone live within the Earth's ecological ceiling, regenerating and recycling all materials.

Branko Milanović, an economist at CUNY's Stone Center on Socio-Economic Inequality says for donut economics to take hold, people would have to "magically" become "indifferent to how well we do compared to others, and not really care about wealth and income." 

A similar proposed new economy is the [Circular Economy](https://www.europarl.europa.eu/news/en/headlines/economy/20151201STO05603/circular-economy-definition-importance-and-benefits), which involves sharing, leasing, reusing, repairing, refurbishing, and  recycling existing materials and products for as long as possible. In this  way, the life cycle of products could be extended.

![The_Circular_Economy_concept](/assets/img/2022-05-25-economics-and-the-stefan-boltzmann-law/The_Circular_Economy_concept.png)

Simon Michaux, Senior Scientist with the Geological Survey of Finland says of the [circular economy](https://tupa.gtk.fi/raportti/arkisto/3_2021.pdf)

> Circular Economy (CE) as a proposed solution is a good start but ultimately not a viable replacement in its current form. This is due to the CE not being able to allow for economic growth or human population growth, yet still develop a system based around recycling only. The mining of minerals is considered not relevant as it is to be phased out.

Efficiency won't help much either. Heat engines are limited by the [Carnot Efficiency Limit](https://www.e-education.psu.edu/egee102/node/1942), wind energy by the [Betz Limit](https://wildpeaches.xyz/blog/betz-the-limit/), and photovoltaic solar cells by the [bandgap limit](http://www.superstrate.net/pv/limit/). Making machines more efficient moves the timeline out a few years, but the result is the same. 

So, as John Michael Greer writes, ["Collapse now, and avoid the rush"](https://www.resilience.org/stories/2012-06-06/collapse-now-and-avoid-rush/?fbclid=IwAR0-lxMU4zFBR86cfkgs8KjriTc8rS3xlCN-KaNUJYEZktdfo-I3fBiu_qs).

------

#### Image credits

Hero: [The Harrowing of Hell](https://commons.wikimedia.org/wiki/File:Follower_of_Jheronimus_Bosch_-_The_Harrowing_of_Hell.jpg), Hieronymus Bosch. Wikimedia Commons

Underpants Gnomes: [South Park](https://southpark.cc.com/), Season 2 E 17 • 12/16/1998

Correlation: [Randall Munroe](https://xkcd.com/552/), XKCD.

Mafia Goon: [Mafia Patty FAKE](https://ahatintime.fandom.com/wiki/Mafia_Goon?file=Mafia_Patty_FAKE.jpg), [A Hat in Time Wiki](https://ahatintime.fandom.com/)

Eunice Foote: [Eunice Newton Foote, the Forgotten Pioneer of the Greenhouse Effect](https://www.bbvaopenmind.com/en/science/environment/eunice-newton-foote-pioneer-greenhouse-effect/). Javier Yanes, OpenMind, Mar 8, 2022 and [Nucleation Capital](https://nucleationcapital.com/eunice-newton-foote/).

John Tyndall: [Tyndall National Institute](https://www.tyndall.ie/john-tyndall/).

Apparatus: [Tyndall's setup for measuring radiant heat absorption by gases](https://en.m.wikipedia.org/wiki/File:Tyndalls_setup_for_measuring_radiant_heat_absorption_by_gases_annotated.svg), Wikipedia.

Jozef Stefan: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jozef_Stefan.jpg).	

Ludwig Boltzmann: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Boltzmann2.jpg).

Svante Arrhenius: [Future Calculations](https://www.sciencehistory.org/stories/magazine/future-calculations/). [Rudy M. Baum Sr.](https://www.sciencehistory.org/profile/rudy-m-baum-sr/) [Science History Institute Museum & Library](https://www.sciencehistory.org/), Jul. 18 2016. 

Earth Energy Budget: [Earth’s energy budget is out of balance – here’s how that’s warming the climate](https://theconversation.com/earths-energy-budget-is-out-of-balance-heres-how-thats-warming-the-climate-165244). Scott Denning, The Conversation, Aug. 9 2021. 

Sunlight Angle: [Incoming Sunlight](https://earthobservatory.nasa.gov/features/EnergyBalance/page2.php). NASA Earth Observatory, Jan 14, 2009.

Visible and Infrared Spectrum: [See Beyond Human Vision](https://www.infinitioptics.com/technology/multi-spectral-surveillance-imaging). [Infiniti Electro-Optics](https://www.infinitioptics.com/).

Fenway Green Monster: Wally Gobetz, [Fenway Park Home Plate Green Monster](https://wallpapersafari.com/w/phb0Rg), Jan 3, 2018. Boston Landmarks Commission, [Citgo Sign in Kenmore Square Study Report](https://www.bostonpreservation.org/sites/default/files/2018-11/citgo_sign_subcommittee_final_draft-.pdf) (pg. 18).

Meltdown!: [Want to save the world? Vote.](https://www.syfy.com/syfy-wire/want-to-save-the-world-vote) SYFY, Phil Plait, May 4, 2018.

Alfred E. Neuman: [Lost in Thought - Who Said What? ("What, me worry?")](https://www.stonesoferasmus.com/2018/03/lost-in-thought-who-said-what-what-me.html) Greig Roselli, Stones of Erasmus, 

------

### References and Further Reading

------

[Energy Ambitions on a Finite Planet](https://escholarship.org/content/qt9js5291m/qt9js5291m.pdf?t=r7pnb9), Tom Murphy. The inspiration for this post.

[Do The Math blog](https://dothemath.ucsd.edu/), Tom Murphy

[Energy: Key Charts](https://ourworldindata.org/energy), Hannah Ritchie, Max Roser and Pablo Rosado - Our World in Data

[World GDP](https://ourworldindata.org/grapher/gross-domestic-product?tab=chart&country=OWID_WRL~World), Our World in Data

[Global primary energy consumption by source](https://ourworldindata.org/grapher/global-energy-substitution?country=~OWID_WRL), Our World in Data 

[Long-run global economic growth](https://www.inscc.utah.edu/~tgarrett/economics.html), Tim Garrett

[Earth’s energy budget is out of balance – here’s how that’s warming the climate](https://theconversation.com/earths-energy-budget-is-out-of-balance-heres-how-thats-warming-the-climate-165244), Scott Denning

[Beyond Magical Thinking: Time to Get Real on Climate Change](https://e360.yale.edu/features/beyond-magical-thinking-time-to-get-real-about-climate-change), Vaclav Smil

[Age of Scarcity Begins With $1.6 Trillion Hit to World Economy](https://www.bloomberg.com/news/articles/2022-05-19/global-economy-loses-1-6-trillion-as-world-struggles-to-avoid-a-new-cold-war), Maeva Cousin, Tom Orlik, and Bryce Baschuk

[Arithmetic, Population and Energy](https://www.albartlett.org/presentations/arithmetic_population_energy.html), Albert Bartlett

[Forgotten Fundamentals of the Energy Crisis - overview](https://www.albartlett.org/articles/art_forgotten_fundamentals_overview.html), Albert Bartlett

[Correlation Between Temperature and Radiation](http://www.ces.fau.edu/nasa/module-2/correlation-between-temperature-and-radiation.php), Climate Science Investigations (CSI)

[Restructuring the Circular Economy into the Resource Balanced Economy](https://tupa.gtk.fi/raportti/arkisto/3_2021.pdf), Simon Michaux

[Surface Temperature of the Earth](https://www.physics-in-a-nutshell.com/article/17/surface-temperature-of-the-earth), Physics in a Nutshell

The Great Simplification podcast ["Physics and Planetary Ambitions"](https://www.thegreatsimplification.com/episode/18-tom-murphy), Nate Hagens and Tom Murphy

The Great Simplification podcast ["Minerals Blindness"](https://www.thegreatsimplification.com/episode/19-simon-michaux), Nate Hagens and Simon Michaux

[Reality Blind](https://read.realityblind.world/view/975731937/i/), NJ Hagens and DJ White

[The impending global collapse: will it end the obesity epidemic?](https://thesenecaeffect.blogspot.com/2022/05/the-seneca-cliff-does-it-also-affect.html?fbclid=IwAR2UxoQKSngD8TH3sNbogKRtaGPIH_U5D4lQCUaRpwyeXD1OUSn6UR_QwAs), Ugo Bardi (The answer to Donut Economics?)

[The Limits to Growth](https://www.clubofrome.org/publication/the-limits-to-growth/), Meadows, Meadows, Randers, Behrens (pdf [here](http://www.donellameadows.org/wp-content/userfiles/Limits-to-Growth-digital-scan-version.pdf))

[The Party’s Over: Oil, War, and the Fate of Industrial Society](https://richardheinberg.com/bookshelf/partys-over), Richard Heinberg

[Power: Limits and Prospects for Human Survival](https://power.postcarbon.org/), Richard Heinberg

GrowthBusters podcast [Paul Ehrlich on The Limits to Growth](https://www.growthbusters.org/ehrlich-limits-to-growth/) 

[Through the Eye of a Needle: An Eco-Heterodox Perspective on the Renewable Energy Transition](https://www.mdpi.com/1996-1073/14/15/4508), Megan Seibert, William Rees

[Rethinking the growth mantra: an exploration of the post-normal world of declining conventional fossil energy](https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0343999), Terrance Berg

[Cosmic View: The Universe in 40 Jumps](http://www.vendian.org/mncharity/cosmicview/pages/page06.html), Kees Boeke



