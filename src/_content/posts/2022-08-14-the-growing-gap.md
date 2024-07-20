---
title: The Growing Gap
subtitle: The End of an Era
author: John Peach
lede: The oil age may be coming to a close much sooner than most people realize, and there is a growing gap between expectations and the thermodynamic reality of renewable energy.
hero:
  url: /assets/img/2022-08-14-the-growing-gap/pulling-on-the-gas-guage.jpg
  alt:
tags: [math, ]
keywords: [logistic function]
socialImg: /assets/img/2022-08-14-the-growing-gap/pulling-on-the-gas-guage.jpg
software: ['octave', 'veusz', 'libreoffice', 'r', 'rstudio']
---

[Home](https://wildpeaches.github.io/)

A recent paper by Jean Laherrère, Charles Hall, and Roger Bentley asks the question, ["How much oil remains for the world to produce? Comparing assessment methods, and separating fact from fiction"](https://www.sciencedirect.com/science/article/pii/S2666049022000524#s0110). 

The answer depends on how much oil has been discovered, how much more we might expect to be discovered, and how much we've already used. 

![laherrere-hall-bentley](/assets/img/2022-08-14-the-growing-gap/laherrere-hall-bentley.png)

Laherrère is a petroleum geologist, Hall a systems ecologist, and Bentley is in the cybernetics department at the University of Reading.

## Oil. What's it good for?

In the earlier post, ["Economics and the Stefan Boltzmann Law"](https://wildpeaches.xyz/blog/economics-and-the-stefan-boltzmann-law/) we showed that the economy is energy driven. The energy used to keep economic growth going is mostly derived from fossil fuels - coal, gas, and oil. Fossil fuels are so pervasive it's almost impossible to think of a sector of the economy that doesn't depend on them in some form. 

Generally, we think of oil as fuel, but [Ranken Energy](https://www.ranken-energy.com/index.php/products-made-from-petroleum/) lists 144 of over 6000 products made from oil including drugs, paint, pillows, and parachutes. Of the [42 gallons in a barrel of oil](https://www.eia.gov/energyexplained/oil-and-petroleum-products/), 20 gallons are converted to gasoline, 11 into diesel, and 3.5 into jet fuel. 

Natural gas is often found with oil and is used to generate electricity and ammonia-based fertilizers that feed [half the world](https://www.thyssenkrupp.com/en/stories/sustainability-and-climate-protection/ammonia-in-agriculture:-the-engine-of-plant-growth). You can drive your car to the grocery store to buy food from fields tilled by diesel tractors, shipped to the store in refrigerated diesel-powered trucks, or flown thousands of miles in a jet airplane.

The Haber-Bosch process to convert gas into fertilizer was invented by Fritz Haber in Germany and developed into an industrial-scale operation by Carl Bosch five years later. Haber won the Nobel Prize in Chemistry in 1918 for his discovery. 

During the first World War, Haber proposed and oversaw the deployment of poison gas at the [Second Battle of Ypres](https://en.wikipedia.org/wiki/Second_Battle_of_Ypres), and later developed [Zyklon B](https://www.bbc.com/news/world-13015210), the gas used by the Nazis in their death chambers to kill millions of people including some of Haber's Jewish relatives. He's known as the "father of chemical warfare." 

Mix [ammonium nitrate fertilizer](https://theconversation.com/ammonium-nitrate-and-iodine-a-look-back-at-the-explosive-history-of-two-essential-substances-146448) with some diesel fuel and you've got a [powerful explosive](https://www.fbi.gov/history/famous-cases/oklahoma-city-bombing), which may have been Haber's real purpose.

His pacifist wife, [Clara Immerwahr](https://en.wikipedia.org/wiki/Clara_Immerwahr), shot herself with Haber's military pistol on May 2nd, 1915, and died in their twelve-year-old son's arms the next day. Haber left for the Eastern Front that day to gas the Russians. 

What a guy.

![products-from-barrel-crude-oil](/assets/img/2022-08-14-the-growing-gap/products-from-barrel-crude-oil.png)

Oil [formed](https://education.nationalgeographic.org/resource/petroleum) from the lipids of diatoms over a period of millions of years. It is the ultimate biofuel. Without oil we wouldn't have [global warming](https://climate.nasa.gov/global-warming-vs-climate-change/) or be able to wipe out the [plankton in the oceans](https://www.goesfoundation.com/).

> The real problem of humanity is the following: We have Paleolithic emotions, medieval institutions and godlike technology. And it is terrifically dangerous, and it is now approaching a point of crisis  overall.
>
> - Edward O. Wilson  

## Peak Oil

[Investopedia](https://www.investopedia.com/terms/p/peak_oil.asp) says of peak oil:

> Peak oil refers to the hypothetical point at which global crude oil  production will hit its maximum rate, after which production will start  to decline. This concept is derived from geophysicist Marion King  Hubbert's "[peak theory](https://www.investopedia.com/terms/h/hubbert-peak-theory.asp)," which states that oil production follows a bell-shaped curve.

Many people confuse the terms "hypothesis" and "theory". From Merriam-Webster:

> Hypothesis: a tentative assumption made to draw out and test its logical or [empirical](https://www.merriam-webster.com/dictionary/empirical) consequences
>
> Theory: a [plausible](https://www.merriam-webster.com/dictionary/plausible) or scientifically acceptable general principle or body of principles offered to explain phenomena

Accepting that the quantity of oil is finite, a maximum production rate is provable and isn't merely hypothetical. 

There are at least two ways to prove that a peak in production must occur. The more complicated method is to use Rolle's Theorem:

**Theorem**: If a real-valued function $f$ is continuous on a proper closed interval $[a, b]$, differentiable on the open interval $(a, b)$, and $f (a) = f (b)$, then there exists at least one $c$ in the open interval $(a, b)$ such that $f' ( c ) = 0$. 

For oil production, $f$ is the quantity produced at any moment. The interval $[a,b]$ is the oil production era. To be a closed interval, time $a$ is any point before oil production began, and point $b$ will be when oil production ceases. For $f$ to be differentiable on the open interval $(a,b)$ it must be a smooth function that can be traced from point $a$ to point $b$. 

Since $a$ and $b$ are times outside the interval of oil production, then $f(a) = f(b) = 0$, so the theorem says there exists at least one point $c$ between $a$ and $b$ such that $f'(c) = 0$. The derivative $f'$ is a measure of the slope of the function $f$. In the case of resources, $f(t) \geq 0$, so the derivative $f'(c)$ must be at a maximum for at least one value of $c$. In other words, production increases before $c$ and decreases later, so $c$ is a peak in production. This might happen more than once on the interval $[a,b]$, but we can choose the maximum of all these peaks.

An easier proof is by contradiction. Assume that no peak ever happens. Then, whatever maximum occurred in the past must be exceeded sometime in the future. Later, that peak will also be exceeded, and so on, infinitely many times. Add up all of the peaks and you get an infinite amount of oil, which contradicts the assumption of a finite quantity.

Is peak oil something to be concerned about? Many people assume that society can and will transition to clean energy sources. If this assumption is incorrect, then post-peak the available energy will decline, and with it a permanent decline in the economy.

## Data sources

Geologists classify oil deposits into three groupings, proven (1P), probable (2P), and possible (3P) that have a 90%, 50%, and 10% probability of [commercial extraction](https://blog.evaluateenergy.com/what-are-3p-oil-gas-reserves-and-why-are-they-important), respectively. The classifications can change depending on the cost of oil and improvements in technology.

Another classification is based on how the oil is produced. Most oil fields are considered to be "conventional". Conventional is obtained by drilling into a reservoir where underground pressure forces oil to the surface. Offshore oil is similar but requires offshore floating platforms. Hydraulic fracturing (fracking) uses high-pressure liquids to break open sub-surface oil-bearing rock. Extra-heavy tar sands are surface mined, mainly from Athabasca in Canada and Orinoco in Venezuela.

There are several sources for data:

- [Energy Information Agency](https://www.eia.gov/petroleum/data.php#crude) (EIA)
- [BP Statistical Review of World Energy](https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy/energy-charting-tool-desktop.html), (click **Download full report**)
- [Our World in Data](https://ourworldindata.org/energy-production-consumption)
- [JODI](https://www.jodidata.org/oil/) 
- [International Energy Agency](https://www.iea.org/data-and-statistics/data-products/?filter=oil) (IEA) - subscription only
- [Statista](https://www.statista.com/study/57187/oil-and-gas---global/) - subscription only
- [Wood Mackenzie](https://www.woodmac.com/store/industry-sector/upstream-oil-and-gas/) - subscription only



## Discoveries



How much oil has been discovered? It's kind of a [squishy](http://large.stanford.edu/courses/2013/ph240/zaydullin2/docs/petrobjects.pdf) number. Petroleum geologists [estimate](https://www.rferl.org/a/How_Do_Experts_Estimate_The_Size_Of_Oil_And_Gas_Fields/1330630.html) the volume of oil in a field using [seismic imaging](http://www.cpeo.org/techtree/ttdescript/seisim.htm) and by calculating how much oil is produced from nearby wells. If you want lots of [equations](https://wiki.aapg.org/Reserves_estimation) for reserve estimation, the [AAPI](https://wiki.aapg.org/Main_Page) wiki provides them, but the equations may not help without an accurate assessment of the methods used.

There's an incentive to overestimate, and many believe that OPEC (Organization of Petroleum Exporting Countries) did just that in the 1980s. OPEC decided that each member nation could produce at a rate proportional to their known reserves. 

![OPEC_reserve](/assets/img/2022-08-14-the-growing-gap/OPEC_reserve.png)

In 1988, many OPEC nations suddenly "found" a lot more oil. Saudi Arabia made their discoveries two years later. In their paper, Laherrère, Hall, and Bentley estimate that OPEC and FSU (the former Soviet Union) countries have overstated reserves by 400 Gb (1 Gb = 1 billion barrels). 

Another problem with reserve estimates is that each country self-reports its reserves. Every year, the [Oil and Gas Journal](https://www.ogj.com/) asks oil-producing countries for their best estimate of remaining reserves. Most countries (74 of 107 in 2021) don't bother responding, so the reserves are estimated to be the same as the previous year. In the "Declared Reserves" plot above, several countries have no change year-to-year, while others have perfectly linear increases.

The amount remaining also depends on whether the reported quantity is 1P, 2P, or 3P. Statistically, the 2P data is the most reliable because estimating 50% probability of recovery means that the oil is just as likely to be extracted as not. Laherrère et al use 2P data, and backdate estimates to the original date of discovery. 

Often the first estimate of a field's size is too small, and later increases as better information becomes available. Backdating refers to adding new data to the original estimate. In fact, most "new" oil comes from increased estimates of the oil in previously discovered fields.

The 1P (90% probability of recovery) estimates are typically recorded at the time the size of the field is revised, while 2P data are backdated. Backdating 2P data gives a better estimate of the original recoverable oil in a field.

The best information comes from oil consultancy companies who sell subscriptions to their data, but even then, the results may include the reserve increases by OPEC and FSU. Subscription costs are often hundreds of thousands of dollars per year and are out of reach to everyone other than oil companies. For this reason, we'll have to rely on data from other sources, and here we'll use the Laherrère paper.

## Production

Production data is more reliable than discoveries. Oil needs to be extracted from a reservoir, shipped to a refinery, refined into various products, and then sold on the wholesale market. Each step provides information on total production.

At times, sanctions have been applied to oil-producing countries curb sales and cut off money supplies. It's generally thought that total production doesn't change much under sanctions. Consuming countries that don't abide by the sanctions purchase crude or refined oil products from the sanctioned country. Oil tanker captains have been known to turn off transponders to avoid tracking. 

While production data isn't perfect, it's much better than discovery data.

## A look at the data

Using the data from the paper, we can get some insight, assuming the caveats outlined above, including the adjustments made by Laherrère, Hall, and Bentley to correct the reserve overestimates by OPEC and FSU. Discovery data came from [IHS International](https://ihsmarkit.com/index.html), considered one of the better sources for petroleum [data](https://my.ihs.com/energy). Production data came from EIA.

![Discoveries-Production](/assets/img/2022-08-14-the-growing-gap/Discoveries-Production.png)

Plotting 2P backdated discovery data and production data together shows that after the North Sea discovery, only three years have had discoveries greater than production. If you think of discoveries as "putting money in the bank", then since 1983 we've been outspending our income.

Except for the giant oil field of Ghawar found in 1948, the peak of discoveries came in 1964 with Samotlor in Siberia. The size of newly found fields has been generally trending down for the last 60 years.

Cumulative discoveries and production show the trends more clearly.

![Cumulative-Discoveries-Production](/assets/img/2022-08-14-the-growing-gap/Cumulative-Discoveries-Production.png)

------

Total discoveries is 2167 Gb and the total production as of 2020 is 1380 Gb. Annual production is about 30 Gb, and the difference between discoveries and production is 786 Gb, which would leave 26 years at current rates. 

The midpoint of production happened in 1992, so half of all oil consumed occurred in the last 28 years. The maximum difference between discoveries and production was 1183 Gb in 1985. 

Oil is a finite resource, but we've been outstripping the rate of discoveries for 40 years. The difference between production and discoveries is a rapidly growing gap.

## Hubbert linearization

In 1956, [M King Hubbert](https://wildpeaches.xyz/blog/curve-fitting-with-julia/) a geologist working for Shell Oil developed a model to estimated the total reserves based on the annual and cumulative production to date. The formula is based on the [logistic function](https://en.wikipedia.org/wiki/Logistic_function) 
$$
P = \omega Q \left( 1 - \frac{Q}{Q_{\infty}} \right)
$$
where

- $P =$ current production rate (Gb/yr)
- $Q=$ cumulative production (Gb)
- $Q_{\infty}=$ total producible reserves (Gb)
- $\omega=$ decay proportionality constant

Early in the production of a field, $Q$ is much smaller than $Q_\infty$ so $P \approx \omega Q$. At the end of the field life, $Q \approx Q_\infty$ so the term in parentheses becomes zero, and production ends. 

The idea behind this function is that initially, oil is easy to produce, and production ramps up exponentially. Production levels off at the midpoint and then drops off to form a "bell-shaped" curve.

If you divide current production by the cumulative production the equation becomes
$$
\frac{P}{Q} = \omega \left( 1 - \frac{Q}{Q_{\infty}} \right) = -\frac{\omega}{Q_\infty}Q + \omega
$$
 which is a linear function in $Q$, with slope $-\frac{\omega}{Q_\infty}$ and $y-$intercept $\omega$. The plot of $\frac{P}{Q}$ against $Q$ looks like this:

![hubbert-linearization](/assets/img/2022-08-14-the-growing-gap/hubbert-linearization.png)

The plot on the left fits all the data, but up to about 500 Gb of cumulative production the ratio is noisy. It jumps up and down and is hard to fit. The plot on the right starts at 500 Gb and gives a much better fit.

But, there are still problems with the better fit. It's not quite linear, and seems to curve upwards at the ends. In their paper, *[Hubbert Math](http://sepwww.stanford.edu/sep/jon/hubbert.pdf)* Jon Claerbout and Francis Muir say, "In real life there is no reason for the decay rate to match the growth rate". The bell-shaped curve could be skewed to one side or the other, and the linearity of the fit wouldn't hold.

## Fitting discovery data

Hubbert linearization attempts to find the total of available oil resources by looking at production data. Production data is more reliable than discovery data, but if the model is flawed then data quality is immaterial.

Suppose the 2P backdated, corrected data in Laherrère, Hall, and Bentley is the best estimate for discoveries, and the logistic function represents how discoveries happen. Early in the oil age, few people were looking for oil, and seismic technology didn't exist. By the 1960s the technology had progressed to the point that oil companies regularly found large fields, but now most big oil fields have been discovered leaving only smaller fields. 

The plot of discoveries above fits fairly well, although it's skewed somewhat to the right. The logistic function used to fit the data is
$$
f(x;Q_\infty,k,m,C)= \frac{Q_\infty}{1 + \exp(-k(x-m))}+C
$$
where 

- $x=$ cumulative discoveries, Gb
- $Q_\infty=$ total producible reserves (Gb)
- $k=$ logistic function growth rate
- $m=$ midpoint of discoveries
- $C=$ offset adjustment

The red curve is the fit to the data:

![cumulative-discoveries-fit](/assets/img/2022-08-14-the-growing-gap/cumulative-discoveries-fit.png)

There's a big jump in 1948 with the discovery of Ghawar, and the $21^{st}$-century data doesn't quite match, but otherwise, it's not too bad. 

Beginning around 2005, conventional oil production reached a plateau and almost all of the additional growth in oil production came from U.S. fracking and Canadian tar sands. 

Let's fit the two periods separately. The $20^{th}$-century could be considered the time of "conventional" oil, while the "fracking era" might have started in 2000.

 ![discoveries-logistic-fit](/assets/img/2022-08-14-the-growing-gap/discoveries-logistic-fit.png)

Splitting the data into two eras gives a very good fit and provides a direct method for $Q_\infty$ for each era. $Q_\infty(conv) = 1990$ Gb and $Q_\infty(frac) = 250$ Gb for a total of $2240$ Gb, or about $200$ Gb less than the Hubbert Linearization method.

Notice in both plots that the current cumulative discovery is very close to the predicted maximum meaning that we shouldn't expect much more.

## Fitting production data

Between 1900 and 1970 oil production grew exponentially, but in the 1970s the [Arab Oil Embargoes](https://www.britannica.com/event/Arab-oil-embargo) forced importing countries to become less profligate with energy and more efficient. Since about 1982, oil production has grown linearly by $0.26$ Gb per year.

![production-linear-fit](/assets/img/2022-08-14-the-growing-gap/production-linear-fit.png)

Using 1980 as the base year, the linear fit to production data is
$$
P(t) = 0.262 t + 18.8 \; Gb.
$$
Cumulative production is the integral of this function
$$
C(t) = 0.131t^2+18.8t+k.
$$
The $k$ is a [constant of integration](https://mathworld.wolfram.com/ConstantofIntegration.html) that makes the cumulative total be $1380$ Gb in 2019,
$$
\begin{aligned}
C(t) &= 0.131 t^2 + 18.8 t+k \\
k &= 1380 - 0.131 \times 49^2 - 18.8 \times 49 = 144.27\\
C(t) &= 0.131 t^2 + 18.8 t + 144.27
\end{aligned}
$$
Using the estimate of $2240$ Gb for the upper limit of discoveries we can calculate the time (in years since 1980) when cumulative production will equal the total of discoveries. 
$$
\begin{aligned}
2240 &= C(t) = 0.131t^2 + 18.8t + 144.27\\
0 &= 0.131t^2 + 18.8t - 2095.73 \\

\end{aligned}
$$
The roots of this quadratic equation are $-217.17520$ and $73.66375$. Discarding the negative root, the world will completely run out of oil in $73.66375$ years since 1980, or in 2053 (Saturday, Aug 30 at 6:27 AM, UTC - just kidding, it's not going to happen precisely then) unless the trajectory of discoveries or production changes.

## EROI

[Charles Hall](https://www.esf.edu/biology/directory/emeritus.php) (the second author of the paper) was a professor at the SUNY College of Environmental Science and Forestry. Ecologists know animals must expend some energy to stay alive. Some need to find the right plants to eat, others are predators and need to chase their prey. In either case, they expend energy searching for food.

Hall realized that the same is true for every form of energy that humans use as well. We use energy to drill the well, transport the crude petroleum to the refinery, and send the refined oil and other products to the point of sale.

The ratio of the energy derived at the final use point divided by the energy required to extract, transport, and process the oil is known as the *Energy Return On Investment* (EROI). 

Early in the oil age, the [Edwin Drake](https://en.wikipedia.org/wiki/Edwin_Drake) drilled a hole near Titusville, PA that progressed at a rate of 3 feet per day. Quite a bit of energy must have been expended before reaching recoverable oil.

The techniques improved, and soon, for every one barrel of oil needed to drill and transport to the refinery, a hundred barrels were recovered. Through most of the 20th century, the ratio remained at about 50 to 1.

In their paper, *[Long-term estimates of the energy-return-on-investment (EROI) of coal, oil, and gas global productions](https://hal-ifp.archives-ouvertes.fr/hal-03186990/file/Long%20Term%20Estimates%20of%20the%20Energy-Return%20Cahiers%20de%20l%27Economie%20n%C2%B0113.pdf)*, Victor Court and Florian Fizaine develop a function to fit their estimates of the EROI for oil. They use two components in their model - a technological component and a physical component. The technological component models how rapidly oil companies learned to find and extract oil. 

The physical component is a limit based on the increasing difficulty of finding oil fields, and the decreasing size of fields. The bigger, easier to extract resources tend to be found and produced first.

![eroi-function](/assets/img/2022-08-14-the-growing-gap/eroi-function.png)

The $x-$axis of the plots is the fraction of the available resource discovered to date, while the $y-$axis represents the fraction of the maximum possible EROI. Using their functions, we can plot the EROI as a function of time.

​	![EROI](/assets/img/2022-08-14-the-growing-gap/EROI.png)

The right end shows we are now only able to get about 20% of the maximum possible EROI, which was achieved in the early 1920s. Another way to look at this is to compare the yearly production to the net available. For example, if the EROI is 50 to 1, then we have 50 barrels available after using one to extract the total.

![Net-EROI](/assets/img/2022-08-14-the-growing-gap/Net-EROI.png)

Court and Fizaine assume that the maximum possible EROI was about 45. The green curve at the bottom represents the energy required to extract and process oil. The blue curve is the net available including the EROI loss. Annual consumption is the red curve, but over time less is becoming available for use in other processes. EROI losses are a second growing gap in our energy supply.

## Fracking and Extra Heavy

What about the fracking revolution in the U.S. over the past 15 years? Didn't that make us energy independent? Robert Rapier writes in Forbes, [*Surprise! The U.S. Is Still Energy Independent*](https://www.forbes.com/sites/rrapier/2022/03/08/surprise-the-us-is-still-energy-independent/?sh=15ab44ea30b6) while Julian Lee says, [*Don't Believe the U.S. Energy Independence Hype*](https://www.bloomberg.com/opinion/articles/2021-02-28/what-energy-dependence-the-u-s-still-needs-russian-oil-and-middle-east-peace#xj4y7vzkg) in Bloomberg. 

Let's look at the data rather than the dogma. This is U.S. oil production and consumption according to the [BP 2022 Statistical Review of World Energy](https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy/energy-charting-tool-desktop.html):

![US-OIL-Production-Consumption](/assets/img/2022-08-14-the-growing-gap/US-OIL-Production-Consumption.png)

The rapid increase in production comes from fracking, or tight oil, which has mainly occurred in three areas, the Bakken in North Dakota, the Permian in West Texas and Eastern New Mexico, and the Eagle Ford region in South Texas. Without oil from these sources, there would be a significant oil shortfall.

![longer-term-crude-condensate-1](/assets/img/2022-08-14-the-growing-gap/longer-term-crude-condensate-1.jpg)

There's been a lot of hype about the "fracking revolution" and how new technology enabled it to happen. This is generally untrue. Hydraulic fracturing began in the 1960s in Texas and Louisiana, and the other key component, horizontal drilling, started being used in the early 1990s. While there have been improvements in the chemical mixes used to break open oil-bearing shales, most of what enabled the "fracking revolution" was easy money.

After the 2008 economic crash, the Federal Reserve lowered interest rates and loaned trillions of dollars to large banks. Billions went into the fracking industry and operators drilled thousands of wells. The problem was that the lifespan of each well is very short, with output typically declining by 90% in the first three years, so to keep producing, the oil companies frantically drilled new wells.

The operators were very good at finding the "sweet spots" in each field, so they started in the middle and worked their way outward, but as they went the production from newer wells was less than previous wells. It became a kind of Ponzi scheme that eventually cost investors an estimated $300 billion. Investor backlash has forced oil companies to significantly scale back new drilling operations.

In 2019, David Hughes published the [*Shale Reality Check*](https://www.postcarbon.org/publications/shale-reality-check-2019/). In a [Post Carbon article](https://www.postcarbon.org/david-hughes-shale-reality-check-2019/), Asher Miller says of it,

> Though Hughes is careful to focus his analysis only on the geological  and technological feasibility of the EIA’s forecasts, I have to stress  that when viewed from the broader perspective of economic, energy, and climate security, the EIA’s *Annual Energy Outlook* is borderline insane.

Even if U.S. oil production almost matches consumption, an overlooked issue is that of embedded energy in the products we purchase. We import much more embedded energy than we export just by being one of the world's largest consumers of foreign products. In *[The myth of US energy independence](https://www.nature.com/articles/s41560-022-01053-2)*, Shepard and Pratson  argue

> The current energy shock will have longer-lasting impacts than even the  COVID-19 pandemic because it will permanently alter the composition of  the global energy network rather than putting it on pause. The US is at a crossroads regarding its energy independence. On one path, it can  maintain the status quo of importing goods and services without regard  for the energy required to produce them. On the other path, it can  strengthen its energy security by enhancing the domestic capabilities of the supply chains it depends on while supporting energy independence  abroad. The latter is much more secure and economically efficient in the long run. Simply put, achieving US energy security requires all  countries to achieve energy security.

Of course, this assumes that some form of domestic energy is available.

Why not include the extra heavy oils from Athabasca and Orinoco? The EROI of tar sands is very low, and without external funding, they probably won't see significant production. Looked at from an EROI perspective, though, any government or investor money is nothing more than an expectation of future energy, and that may not exist. 

The projections for oil production from fracking and tar sands seems to be a reality gap. 

## Efficiency and Substitution

![william-stanley-jevons](/assets/img/2022-08-14-the-growing-gap/william-stanley-jevons.jpg)

<p align = "center"><b>William Stanley Jevons</b></p>

In 1865 William Stanley Jevons, an English mathematician, and economist wrote

> Now, if the quantity of coal used in a blast furnace, for instance, be diminished in comparison with the yield, the profits of the trade will  increase, new capital will be attracted, the price of pig-iron will fall, but the demand for it increase; and eventually the greater number of furnaces will more than make up for the diminished consumption of each.  And if such is not always the result within a single branch, it must be remembered that the progress of any branch of manufacture excite a new activity in most other branches.

What Jevons noticed was that as processes became more efficient, the scale of the manufacturing process grew and with it, energy consumption. 

On the other hand, if you replace your gas-powered car with an electric car, it's unlikely that you will suddenly start driving more just because your cost of transportation energy has decreased. In [*Rethinking the Jevons Paradox: Why more clean energy efficiency is good for the environment*](https://rethinkdisruption.com/rethinking-jevons-paradox/) Adam Dorr argues

> However, The Jevons Effect is commonly invoked – and misinterpreted – in environmental discourse to mean that new technologies are *always* worse for the environment than older ones, even if they are more efficient. This is not the case.
>
> In a narrow technical sense, the Jevons Effect *only* happens if a technology makes an *existing* process more efficient – and even then, only if demand is highly sensitive to  prices. But new technology oft obviates the old way of doing things entirely. Automobiles, for example, did not create a Jevons Effect for horse manure, despite triggering a 10,000-fold increase in freight and  passenger miles traveled.

This may be true at a reductionist level, but on a larger scale, Jevons still appears to be valid as described by the [Khazzoom–Brookes postulate](https://en.wikipedia.org/wiki/Khazzoom%E2%80%93Brookes_postulate), which says (see *[The Jevons Paradox: The Evolution of Complex Adaptive Systems and the Challenge for Scientific Analysis (pg. 79)](https://books.google.com/books?hl=en&lr=&id=nfHDSSqi4NQC&oi=fnd&pg=PA79&ots=PZeTdkUOr7&sig=YkFJUbtXb5NIy0O_8--z5-336bA#v=onepage&q&f=false)*)

> that an increase in energy efficiency, as characterized at the microeconomic level, can ‘backfire’, leading to an increase in energy use, at the macroeconomic level, rather than to a reduction.  

Efficiency without degrowth is pointless. Remember the story of the [grains of rice and the chessboard](https://purposefocuscommitment.medium.com/the-rice-and-the-chess-board-story-the-power-of-exponential-growth-b1f7bd70aaca)? The sage asks the king for a grain of rice on the first square, two on the second, four on the third, and so on. This is an example of exponential growth. 

Now think about what would happen if the king was twice as efficient with his rice. On a second chess board, he puts half a grain on the first square, one on the second, and two on the third. But, this is equivalent to the rice on the squares of the first board shifted one place over. The half grain could be placed beside the board, and then everything remains the same as in the first case.

The king is twice as efficient dispensing grains of rice, but delays the inevitable by just one day.

In economics, an annual growth rate of 3% gives a doubling time of 24 years, so you might imagine the grains of rice doubling every 24 years. The result is the same, but it takes a bit longer in real life.

A plot of energy consumption over the period 1800-2018 shows that energy consumption of all types is generally increasing. We aren't substituting one form of energy for another, we're just adding more energy from all sources to the mix.

![world-energy-consumption](/assets/img/2022-08-14-the-growing-gap/world-energy-consumption.jpg)

## Renewable energy

Obviously, the answer is renewable energy. But, lets carefully consider solar and wind energy sources. What is meant by the terms "renewable" and "sustainable"? The energy source, the sun, will continue to provide for several billion years, but the machinery used to extract the energy has a life of only a few decades, after which it must be replaced (see *[The Dark Side of Solar Power](https://hbr.org/2021/06/the-dark-side-of-solar-power)*).  

Three bigger questions are,

1. Does the technology exist to successfully transition to a renewable energy economy?
2. What response from society might we expect?
3. What might be the impact?

The questions could be more simply put, can we, will we, and should we use renewable energy?

Many people who consider a renewable energy future probably think that of course we can do it, and in fact, we're in the middle of a rapid transition. While it's true that new wind and solar installations are happening much more rapidly than even a few decades ago, the total energy produced is still very small relative to the energy derived from fossil fuels, and there is a large gap between total energy produced and the wind/solar component.



![EnergyFractions](/assets/img/2022-08-14-the-growing-gap/EnergyFractions.png)

The questions may not have immediate answers, but there are larger issues that need to be addressed for each one.

**Does the technology exist to successfully transition to a renewable energy economy?** 

At the moment, there doesn't appear to be the end-to-end technology required for either PV solar or wind energy to be self-sustaining, at least on an industrial scale. 

Alan Turing proposed the ["Imitation Game"](https://plato.stanford.edu/entries/turing-test/) or Turing Test for computer artificial intelligence in which a computer must be indistinguishable from a human. A similar Turing Test for renewables is needed. That is, using only the electrical energy derived from a solar panel, is it possible to make a new solar panel indistinguishable from the first? To be useful, the first panel would need to provide additional energy beyond self-replication.

The [EROI of renewables](https://energyskeptic.com/2017/tilting-at-windmills-spains-disastrous-attempt-to-replace-fossil-fuels-with-solar-pv-part-2/) may be too low to be useful. In *[Spain’s Photovoltaic Revolution: The Energy Return on Investment](https://link.springer.com/book/10.1007/978-1-4419-9437-0)*, Prieto and Hall found that the EROI was only 2.5, and panel lifetimes were under 20 years. It has been estimated that society requires an EROI of 10-15 to remain viable. At present, modern solar and wind energy systems (Siebert and Rees, *[Through the Eye of a Needle: An Eco-Heterodox Perspective on the Renewable Energy Transition](https://www.mdpi.com/1996-1073/14/15/4508/htm?s=09)*)

> are not renewable, that their production—from mining to installation—is  fossil-energy-intensive, and that producing them—particularly mining  their metals and discarding their waste—entails egregious social  injustices and significant ecological degradation. 

Many of the raw materials required for solar and wind have been extensively mined. This means that more energy is required to [mine and process ore](https://www.researchgate.net/profile/Simon-Michaux-2/publication/351712079_The_Mining_of_Minerals_and_the_Limits_to_Growth/links/60a62816a6fdcc3507dd1b4b/The-Mining-of-Minerals-and-the-Limits-to-Growth.pdf?origin=publication_detail). Simon Michaux says ([*The Mining of Minerals and the Limits to Growth*](https://www.researchgate.net/profile/Simon-Michaux-2/publication/351712079_The_Mining_of_Minerals_and_the_Limits_to_Growth/links/60a62816a6fdcc3507dd1b4b/The-Mining-of-Minerals-and-the-Limits-to-Growth.pdf?origin=publication_detail))

> Current thinking is that European industrial businesses will replace a complex industrial ecosystem that took more than a century to build. This system was built with the support of the highest calorically dense source of energy the world has ever known (oil), in cheap abundant quantities, with easily available credit, and unlimited mineral resources. This task is hoped to be done at a time when there is comparatively
> very expensive energy, a fragile finance system saturated in debt, not enough minerals, and an unprecedented number of human populations, embedded in a deteriorating environment.

In [*It's Time to Wake Up*](https://www.gtk.fi/en/time-to-wake-up/) Michaux says,

> The currently known global mineral reserves will not be sufficient  to supply enough metals to manufacture the planned non-fossil fuel industrial systems.

Alice Friedemann ([When Trucks Stop Running](https://link.springer.com/book/10.1007/978-3-319-26375-5)) says,

> Virtually everything in our homes, everything in our stores, got there on a truck. Prior to that, 90 percent of those items were  transported on a ship and/or a train. If trucks, trains, and ships stopped running, our global economy and way of life would stop too.

Currently there are no viable alternatives to oil power for heavy trucking, ships, or long-haul aircraft.

Hubbert envisioned nuclear energy filling in for fossil fuels as reserves dwindled, and thus expected oil production to be symmetric about the peak. Without a feasible replacement energy source, this may not be true and the decline could be [much steeper](https://wildpeaches.xyz/blog/curve-fitting-with-julia/) than the century-long increase.

**What response from society might we expect?**

Every indication is that society responds to new energy sources by incorporating them into the existing paradigm. There is no substitution of one source for another. Tim Garrett in [Long-run global economic growth](https://www.inscc.utah.edu/~tgarrett/economics.html) found that

> ... sustaining the GDP will  require that we constantly grow global power production capacity; or, sustaining long-run global GDP growth will require constantly accelerating growth of global power capacity, i.e. that the rate of increase must itself increase. 

yet Tom Murphy shows that physical limits to growth exist ([Limits to economic growth](https://tmurphy.physics.ucsd.edu/papers/limits-econ-final.pdf))

> In brief, inelastic demand for critical resources in limited supply will not permit prices for these things to become arbitrarily small, which would be necessary to maintain indefinite economic growth. The implications are profound in a society structured around growth, and the time limit is sooner than many assume.

Also, see our earlier post, [Economics and the Stefan Boltzmann Law](https://wildpeaches.xyz/blog/economics-and-the-stefan-boltzmann-law/). At some point, exponential growth will hit hard resource limits.

**What will be the impact?**

Suppose we did develop some new energy source to replace fossil fuels. What impact might we expect on the biosphere? 

Of the nine planetary boundaries identified by [Johan Rockström and Will Steffan](https://www.stockholmresilience.org/research/planetary-boundaries/the-nine-planetary-boundaries.html), climate change, biogeochemical flows, land-system change, and biosphere integrity have exceeded the estimated safe operating zones. 

Two boundaries, novel entities (chemical pollution, radioactive materials, AI) and atmospheric aerosol loading have not been quantified. Only stratospheric ozone depletion and freshwater use remain within the boundaries.

Most of these boundaries would continue to be exceeded even with a carbon-free energy source under business as usual conditions.

 ![planetary-boundaries-cover-1620](/assets/img/2022-08-14-the-growing-gap/planetary-boundaries.png)

<p align = "center"><b>Planetary Boundaries</b></p>

To anyone who claims that a carbon-free energy society at anything approaching the current scale is not only possible but easily achievable, a complete feasibility demonstration is urgently needed. 

As Carl Sagan said, "*extraordinary claims require extraordinary evidence*".

------

#### Image credits

Hero: AliExpress, [Creativity refuel Car Sticker](https://www.aliexpress.us/item/3256801369628304.html?gatewayAdapt=glo2usa4itemAdapt)

William Stanley Jevons: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:PSM_V11_D660_William_Stanley_Jevons.jpg)

Planetary Boundaries: [Stockholm Resilience Centre](https://www.stockholmresilience.org/research/planetary-boundaries/the-nine-planetary-boundaries.html)

------

## Processing the data

The figure of OPEC claimed and estimated reserves was generated with `Plot_OPEC_reserve.m` in [Octave](https://octave.org/). Data was taken from the [2006 BP Statistical Review of World Energy](https://www.rrojasdatabank.info/bpstats2006.pdf) and is embedded in the code. More accurate data might be available from later reports.

The bar chart of discoveries overlaid with yearly production was done using the [Veusz](https://veusz.github.io/) worksheet `Discoveries-Production.vsz`. The cumulative discoveries and production chart was generated using Veusz and saved as `Cumulative-Discoveries-Production.vsz`. Input data is from `DiscProd.csv` where discovery (Disc) and production (Prod) data came from digitizing Fig 4 of the paper using [WebPlotDigitizer](https://automeris.io/WebPlotDigitizer/). The remaining columns were calculated in a [spreadsheet](https://www.libreoffice.org/). 

Discovery data from the digitized plot was interpolated using the nearest neighbor, while the production data was cubic spline interpolated in the Octave function `discProd.m`. The output was written to the files `discoveries.csv` and `production.csv`. Fig 4 had been cropped to 70 Gb, so the raw data for 1948 has been adjusted to 146 Gb using BP data. 

The Hubbert Linearization plots were made with `Hubbert-Linearization.vsz`, and by adjusting  the fit ranges.

The Cumulative Oil Discoveries plot was generated with the [R](https://www.rstudio.com/) function `fit2Data.r`. The "Conventional Era" and "Fracking Era" plots use `fit2Data.r` but pass in `logFit <- fit2Data(head(prodDF,100))` to use the period 1900 - 2000, and `logFit <- fit2Data(tail(prodDF,20))` for 2000 - 2019 respectively. The function is contained in `fitLogistic.r`.

The linear fit to production data for the period 1980 - 2019 was done using the [Veusz linear fitting](https://fossies.org/linux/veusz/Documents/manual/pdf/veusz.pdf) (pg. 5) routine. 

EROI was generated with `Net-EROI.vsz` using data in `EROI.csv`. The data is derived from `DiscProd.csv`  using the [Court and Fizaine](https://hal-ifp.archives-ouvertes.fr/hal-03186990/file/Long%20Term%20Estimates%20of%20the%20Energy-Return%20Cahiers%20de%20l'Economie%20n%C2%B0113.pdf) parameters with the Octave function `EROI.m`. Instructions for running the function are shown in the example section.

U.S. production and consumption `us-oil-production-consumption.csv` was derived from the [BP Statistical Review of World Energy](https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy/energy-charting-tool-desktop.html) and plotted with `US-OIL-Production-Consumption.vsz`. 

The energy fraction chart uses `global-energy-substitution.csv` from Our World in Data [Energy Production and Consumption](https://ourworldindata.org/energy-production-consumption) using the Octave function `OWD_FF_frac.m`. 

For convenience, all of the functions are in [GrowingGap_functions.zip](https://github.com/XerxesZorgon/GrowingGap/blob/main/GrowingGap_functions.zip) and the data is contained in  [GrowingGap_data.zip](https://github.com/XerxesZorgon/GrowingGap/blob/main/GrowingGap_data.zip) which may be downloaded from Github. 



## References and further reading

- [How much oil remains for the world to produce? Comparing assessment methods, and separating fact from fiction](https://www.sciencedirect.com/science/article/pii/S2666049022000524#s0110).  Laherrère, Hall, Bentley
- [World oil production: past & forecasts](https://aspofrance.files.wordpress.com/2021/06/oil-productionforecasts.pdf). Laherrère
- [Peak Oil](https://en.wikipedia.org/wiki/Peak_oil). Wikipedia
- [Oil Reserves](https://en.wikipedia.org/wiki/Oil_reserves). Wikipedia
- [Backdating is the key](http://aspofrance.viabloga.com/files/JL_ASPO2011.pdf). Laherrère
- [Comments on *Squeezing more oil from the ground by L. Maugeri*](https://www.peakoil.net/headline-news/comments-by-jean-laherr-re-on-squeezing-more-oil-from-the-ground-scientific-american). Campbell, Laherrère  (Follow the links, "[You can read Jean’s comments here](https://www.peakoil.net/publications/comments-on-squeezing-more-oil-from-the-ground)", and [Maugerifinalversion.pdf](https://www.peakoil.net/files/Maugerifinalversion.pdf).)
- [Review and Analysis of the Peak Oil Debate](https://apps.dtic.mil/sti/pdfs/ADA488967.pdf). Fisher
- [Forecasting the limits to the availability and diversity of global conventional oil supply: Validation](https://www.sciencedirect.com/science/article/pii/S0360544213009420?via%3Dihub). Hallock, Wu, Hall, Jefferson
- [Shaping the global oil peak: A review of the evidence on field sizes, reserve growth, decline rates and depletion rates](https://www.sciencedirect.com/science/article/abs/pii/S0360544211006694). Sorrell, Speirs, Bentley, Miller, Thompson
- [Fossil Fuels](https://www.sciencedirect.com/science/article/pii/B9780128095973001115?via%3Dihub). Yildiz
- [Peak oil, 20 years later: Failed prediction or useful insight?](https://www.sciencedirect.com/science/article/pii/S2214629618303207?via%3Dihub). Bardi
- [Peak Oil: Assessment, Critique of the Current Solutions, and Proposition of Alternatives](https://www.academia.edu/3853536/Peak_Oil_Assessment_Critique_of_the_Current_Solutions_and_Proposition_of_Alternatives). Serkine
- [Projection of world fossil fuels by country](https://www.sciencedirect.com/science/article/abs/pii/S0016236114010254). Mohr, Wang, Ellem, Ward, Giurco
- [Global Oil Market Forecasting Models](https://ieeexplore.ieee.org/document/9247646). Akinfiev
- [WORLD OIL RESERVES 1948 – 2001: ANNUAL STATISTICS AND ANALYSIS](https://journals.sagepub.com/doi/pdf/10.1260/0144598011492561). Energy Exploration & Exploitation
- [Hubbert math](http://sepwww.stanford.edu/sep/jon/hubbert.pdf). Claerbout, Muir
- [Economics for the future – Beyond the superorganism](https://www.sciencedirect.com/science/article/pii/S0921800919310067). Hagens
- [No matter who wins](https://www.energyandourfuture.org/2020/11/02/no-matter-who-wins/). Hagens
- [Where are we going?](https://www.resilience.org/stories/2018-05-08/where-are-we-going/). Hagens
- [Unraveling the Complexity of the Jevons Paradox: The Link Between Innovation, Efficiency, and Sustainability](https://www.frontiersin.org/articles/10.3389/fenrg.2018.00026/full). Giampietro, Mayumi
- [Resources for a better future: Jevons Paradox](https://www.resilience.org/stories/2020-06-17/jevons-paradox/). Bliss
- [Limits to economic growth](https://tmurphy.physics.ucsd.edu/papers/limits-econ-final.pdf). Murphy
- [The myth of US energy independence](https://www.nature.com/articles/s41560-022-01053-2). Shepard, Pratson
- [Scientists' warning on population](https://scientistswarning.forestry.oregonstate.edu/sites/default/files/Crist2022.pdf). Crist, Ripple, Ehrlich, Rees, Wolf
- [Tilting at Windmills, Spain’s disastrous attempt to replace fossil fuels with Solar PV, Part 2](https://energyskeptic.com/2017/tilting-at-windmills-spains-disastrous-attempt-to-replace-fossil-fuels-with-solar-pv-part-2/). [Friedemann](https://energyskeptic.com/about-energyskeptic/) 
- [Sustainable Energy — without the hot air](http://www.inference.org.uk/sustainable/book/tex/sewtha.pdf). MacKay
- [Peak Industrial Output and the Limits to Growth as a Consequence of Depleting Natural Resources The permanent divergence of the real economy and the fiat economy](https://www.academia.edu/36305486/Peak_Industrial_Output_and_the_Limits_to_Growth_as_a_Consequence_of_Depleting_Natural_Resources_The_permanent_divergence_of_the_real_economy_and_the_fiat_economy?email_work_card=view-paper). Michaux
- [The Mining of Minerals and the Limits to Growth](https://www.researchgate.net/profile/Simon-Michaux-2/publication/351712079_The_Mining_of_Minerals_and_the_Limits_to_Growth/links/60a62816a6fdcc3507dd1b4b/The-Mining-of-Minerals-and-the-Limits-to-Growth.pdf?origin=publication_detail). Michaux
- [Oil from a Critical Raw Material Perspective](https://tupa.gtk.fi/raportti/arkisto/70_2019.pdf). Michaux
- [It's Time to Wake Up](https://www.gtk.fi/en/time-to-wake-up/). Michaux
- [Assessment of the Extra Capacity Required of Alternative Energy Electrical Power Systems to Completely Replace Fossil Fuels](https://mcusercontent.com/72459de8ffe7657f347608c49/files/be87ecb0-46b0-9c31-886a-6202ba5a9b63/Assessment_to_phase_out_fossil_fuels_Summary.pdf). Michaux
- [Peak lithium makes transportation & electricity storage pointless](https://energyskeptic.com/2022/not-enough-lithium-for-electric-car-batteries/). Friedemann
- [Why Canadian oilsands will not help solve the energy crisis](https://energyskeptic.com/2022/oilsands-are-not-a-solution/). Friedemann
- [When Trucks Stop Running](https://link.springer.com/book/10.1007/978-3-319-26375-5). Friedemann
- [Transportation: How long can we adapt before we fall off the Net Energy Cliff?](https://energyskeptic.com/2017/transportation-how-long-can-we-adapt-before-we-fall-off-the-net-energy-cliff/). Friedemann
- [Spain's Solar Revolution Revisited (Six Years Later)](https://energyskeptic.com/wp-content/uploads/2017/01/Pedro-Prieto_ISBPE_2017-Spains-solar-revolution-revisited.pdf). Prieto
- [Through the Eye of a Needle: An Eco-Heterodox Perspective on the Renewable Energy Transition](https://www.mdpi.com/1996-1073/14/15/4508/htm?s=09). Seibert, Rees
- [COP-26: Stopping Climate Change and Other Illusions](https://www.buildingsandcities.org/insights/commentaries/cop26-illusions.html). Rees

------

## Blogs and Websites

[Institute for the Study of Energy & Our Future](https://www.energyandourfuture.org/)

[Energy Skeptic](https://energyskeptic.com/)

[The Collapse Chronicle](https://paper.li/thecollapsechronicle#/)

[Problems, Predicaments, and Technology](https://problemspredicamentsandtechnology.blogspot.com/)

[Desdemona Despair](http://desdemonadespair.net/)

[resilience](https://www.resilience.org/)

[Resource Insights](https://resourceinsights.blogspot.com/)

[Radio Ecoshock](https://www.ecoshock.org/)

[LifeItself](https://patzek-lifeitself.blogspot.com/)

[Peak Oil Barrel](https://peakoilbarrel.com/)

[The Easiest Person to Fool](https://theeasiestpersontofool.blogspot.com/)

[Surplus Energy Economics](https://surplusenergyeconomics.wordpress.com/)

[post carbon institute](https://www.postcarbon.org/)

[Consciousness of Sheep](https://consciousnessofsheep.co.uk/)

[Mongabay](https://news.mongabay.com/)

[…and Then There's Physics](https://andthentheresphysics.wordpress.com/) 			

[Crude Oil Peak](http://crudeoilpeak.info/)

[Our Finite World](https://ourfiniteworld.com/author/gailtheactuary/)		

[The Energy Bulletin](https://energybulletin.org/)

[Shale Bubble](https://shalebubble.org/)

[The Great Change](https://peaksurfer.blogspot.com/)

[Damn the Matrix](https://damnthematrix.wordpress.com/)

[Wrong Kind of Green](https://www.wrongkindofgreen.org/)

[The decline of oil has already begun](https://www.greenpeace.org/international/story/29458/peak-oil-decline-coronavirus-economy/?fbclid=IwAR2XdmVc1bImSUeis72vPSdr53tPGpgrRwgZ1RZZ31G-gQl-VHg0A-k7Fcg)

[Museletter](https://richardheinberg.com/)

[Net Zero and Carbon Neutrality: Unscientific Myths for an US and THEM World](https://www.clubofrome.org/blog-post/nair-carbon-neutrality/?fbclid=IwAR1g2Z38ZDHg2fWt8awfqYMaNNmQoosjYYzNP1s7puBV_H0tGwQhFPRf_Zw) - Club of Rome

[Club of Rome](https://www.clubofrome.org/)

[un-denial](https://un-denial.com/)

[Of Two Minds](https://www.oftwominds.com/blog.html)

[Oily Stuff](https://www.oilystuffblog.com/)

[Doomsday Now](https://doomsdaynow.com/)

[Marshall Brain](https://marshallbrain.com/)

------

## Code for this article

[GrowingGap_functions.zip](https://github.com/XerxesZorgon/GrowingGap/blob/main/GrowingGap_functions.zip) - Octave and R functions used to process data

[GrowingGap_data.zip](https://github.com/XerxesZorgon/GrowingGap/blob/main/GrowingGap_data.zip) - Data for energy analysis

[Peak Oil Presentation](https://github.com/XerxesZorgon/GrowingGap/blob/main/Peak%20Oil%20Presentation.pptx) - Slides 
