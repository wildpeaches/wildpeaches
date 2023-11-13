---
title: Covid and the Winds
subtitle: An Analysis of a Viral Symphonic Arrangement
author: John Peach and Laura P. Hale
lede:
hero: 
  url: /assets/img/2023-11-12-covid-and-the-winds/covid-and-the-winds.webp
  alt:
tags: [math, CFD]
keywords: [Covid, box model, data fitting]
socialImg: /assets/img/2023-11-12-covid-and-the-winds/covid-and-the-winds.webp
software: ['veusz', 'heuristiclab']
---

> The answer, my friend, is blowin' in the wind
> The answer is blowin' in the wind
>
> * Bob Dylan

------

The [Durham Medical Orchestra](https://arts.duke.edu/durham-medical-orchestra/) (DMO) is a community orchestra affiliated with [Duke University](https://duke.edu/) in Durham, NC. The members of the orchestra are volunteer musicians, mostly health-related professionals at the university, but others from the area to complete the orchestra. Verena Moesenbichler-Bryant has been conducting the orchestra for the past fifteen seasons. The orchestra asked me to perform an analysis of the probability of transmission of an airborne virus during rehearsals in Bone Hall on the Duke campus, and Laura assisted in authoring a paper submitted to the [PLOS Computational Biology](https://journals.plos.org/ploscompbiol/) journal.

![DMO](/assets/img/2023-11-12-covid-and-the-winds/DMO.webp)

<p align = "center"><b>Durham Medical Orchestra</b></p>

Even though vaccines for the COVID-19 virus have become widely available, rehearsals present a challenge because of the large number of people in close proximity, and the fact that members of the winds section need to play without masks. 

The analysis considered the probability of transmission if the air in the room was well mixed, mechanisms for a possible superspreader event and the probability that an individual in the wind section is asymptomatic during rehearsal.

- The HVAC equipment in Bone Hall where the orchestra practices is in "economizer" mode meaning that 100% outside air is used to replace the air in the room at all times. The air in the room is fully replaced 6.4 times per hour. This high rate of replacement gives a very low viral concentration in a well-mixed volume.
- Empirical analysis of airflow near wind players shows that air remains undisturbed outside a radius of about 1 meter. However, it is thought that the flow induced by the HVAC could create a stream of high concentration. A susceptible person in such a flow would receive a high dose due to the concentration and long duration.
- The community background reported rate is around 0.1% at the time of this report. While the true rate of infection is likely higher, we expect that members of the DMO are much more vigilant since many are on the medical staff at Duke Hospital. If the infection rate among DMO wind players matches the community-reported rate, the probability that any one player is asymptomatically infected is around 2.5%.

## Introduction

The COVID-19 pandemic drew widespread public attention to the possibility of the spread of respiratory viruses during indoor events and community gatherings. This mathematical modeling study was conducted to objectively determine the probability of unmasked members of an indoor gathering contracting an infection, based on variables including the numbers of masked and unmasked individuals present, the room size and airflow, the activities being performed, the community prevalence of infection, and the transmission characteristics of the infectious agent. 

Most musical groups in the United States shut down entirely during the early days of the pandemic due to uncertainties regarding SARS-CoV-2 mode of transmission and its potential high morbidity in specific demographic/risk groups, combined with the lack of specific information regarding how respiratory particles are emitted from various wind instruments. 

This analysis considers the probability of transmission of the SARS-CoV-2 virus during practice by the Durham Medical Orchestra while rehearsing in Bone Hall on the Duke University Campus. The analysis assumes a single infected wind instrument player since string and percussion players will be protected with N95 masks.

The analysis examines two scenarios. The background level assumes uniform mixing of the air in the auditorium and estimates the probability that any other member becomes infected. A more direct pathway occurs when a susceptible player is positioned directly in front of an infectious wind player. 

Proposed mitigation strategies are to place box fans in the entrance doorways to the hall to mix clean air from outside the room, to use portable HEPA filters at strategic locations during practice, and to set the room HVAC equipment in \"economizer\" mode which introduces some outdoor air.

Filters in the HVAC equipment are effective at removing larger particles, but efficiency declines for smaller diameter particles. Droplets emitted by an infectious individual span a broad range of diameters. Aerosol droplet diameters decrease as a function of time in circulation, ambient temperature, and humidity.

## Viral Pathways and Risk Assessment

The COVID-19 pandemic caused by infection with the severe acute respiratory syndrome coronavirus-2 (SARS-CoV-2) directed public attention to the possibility that respiratory viruses might be readily spread during commonly held indoor events. Current knowledge indicates that SARs-CoV-2 is transmitted via droplets exhaled by the infectious individual and taken up through mucosal surfaces of the eyes, nose, or mouth of an exposed susceptible individual [[Russell](https://www.frontiersin.org/articles/10.3389/fimmu.2020.611337/full)] and is often spread by asymptomatic or pre-symptomatic individuals, despite vaccination [[Johansson](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2774707), [Bergwerk](https://www.nejm.org/doi/full/10.1056/nejmoa2109072), [Acharya](https://academic.oup.com/ofid/article/9/5/ofac135/6550312)]. 

Developing methodologies to accurately model the risk of viral transmission in specific indoor venues is important since this can provide rational strategies to protect vulnerable members of the community who attend events there. Such models may also guide the implementation of specific strategies to minimize infection risk and encourage members of the public to resume attending in-person indoor events. Detailed modeling studies of specific meeting venues have been undertaken that incorporated computational fluid dynamics (CFD) analysis [[Hedworth](https://www.science.org/doi/10.1126/sciadv.abg4511)]. These studies have provided important information related to the specific venues modeled. 

However, a simple tool that can readily incorporate data relevant to specific meeting and performing spaces is needed to allow communities to rationally assess the risks of infection for indoor events held in those spaces. Since the risk of viral transmission depends on the risk of having an unmasked asymptomatically infectious individual in the room, a model that can incorporate the changing community prevalence of respiratory pathogens would be most useful. Such a model may also objectively guide the implementation and/or discontinuation of mitigation strategies and encourage members of the public to resume attending in person. 

Understanding the risk of transmitting viral pathogens when wind instruments are played represents an important gap in knowledge that has disproportionally affected a wide variety of educational, community, and even professional musical groups. Most musical groups in the United States shut down entirely during the early days of the pandemic due to uncertainties regarding SARS-CoV-2 mode of transmission, combined with the lack of specific information regarding how respiratory particles are emitted from various wind instruments. 

When community infection rates began to decline after the initial pandemic shutdowns, many musical groups resumed rehearsals and performances, sometimes incorporating requirements thought to generically decrease viral spread such as symptom monitoring, physical distancing, requiring wind players to use playing masks and/or bell covers, and vaccination against SARS-CoV-2. Recent publications have begun to clarify the numbers and sizes of particles emitted by wind instruments  [[Volckens](https://www.nature.com/articles/s41598-022-15530-x#Fig1), [Stockman](https://pubs.acs.org/doi/10.1021/acsenvironau.1c00007)]. 

Venue and participant characteristics that led to some superspreader events have been reported [[Liu](https://pubs.aip.org/aip/pof/article/33/2/023301/1032688/Simulation-based-study-of-COVID-19-outbreak)]. However, given the early collapse of contact tracing and mask-wearing in most locations within the United States, the actual frequency of SAR-CoV-2 spread during most indoor community meetings and performances remains unclear. 

The true risk of SARS-CoV-2 spread during musical rehearsals and performances remains unknown. Physical distancing may be difficult to incorporate if constrained by the size of the rehearsal hall or stage. Woodwind and brass players often find playing with a mask challenging and/or unpleasant and bell covers can affect sound quality and intonation.

The SARS-CoV-2 virus is thought to be transmitted via droplets exhaled by the infectious individual and taken up through mucosal surfaces of the eyes, nose, or mouth of an exposed susceptible individual [[Russell](https://www.frontiersin.org/articles/10.3389/fimmu.2020.611337/full)]. Assuming that the infectious individual produces particles at a constant rate, the total number of viral-laden droplets in a confined space will increase linearly with time. Assuming instantaneous, uniform mixing of the air in the space gives a background estimate for particle density and an upper bound for individuals far from the infectious source. 

Droplets emitted by an infectious individual initially span a broad range of diameters and decrease as a function of time in circulation, based on ambient temperature and humidity that control evaporation rates [[Stadnytskyi](https://www.pnas.org/doi/full/10.1073/pnas.2006874117)]. Particles are removed via filtration or through dilution of room air by its replacement with fresh air via HVAC or other means. The dilution process is directly proportional to the rate of fresh air introduced into the space. Filtering directly removes particles at a rate that is proportional to density and particle size. Filters commonly present in heating, ventilation, and air conditioning (HVAC) equipment are effective at removing larger particles, but their efficiency declines for smaller diameter particles [[“Improving Ventilation in Your Home - CDC”](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/Improving-Ventilation-Home.html)].

## Background rate

The SARS-CoV-2 virus is thought to be transmitted via droplets exhaled by the infectious patient and taken up through eyes, nasal or oral passages in the exposed susceptible individual. Assuming that the infectious individual produces particles at a constant rate, the total number of viral-laden droplets will increase linearly with time. Assuming instantaneous, uniform mixing of the air in the space gives a background estimate for particle density, and an upper bound for individuals far from the infectious source.

Particles are removed through dilution of room air with the box fans at the entrances or by using the economizer mode in the HVAC. The dilution process is directly proportional to the rate of fresh air introduced into the space.

Filtering directly removes particles at a rate that is proportional to density, and also to particle size. Droplet volume depends on ambient temperature and relative humidity which control evaporation rates.

The probability of a susceptible individual becoming infected is a function of the dose received [[Venkatram](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8446944/pdf/INA-31-1886.pdf)], which is the integrated viral load over the exposure time.

## Box Model

The box model [Peng](https://pubs.acs.org/doi/pdf/10.1021/acs.est.1c06531) assumes rapid dispersion of droplets uniformly throughout a room (or box), ignoring the effects of close proximity. The model is

$$
\frac{dc}{dt} = \frac{E_p f_e}{V} - \left(\lambda_0 + \lambda_{fil} + \lambda_{dec} + \lambda_{dep} \right) c
$$
where
$$
\begin{aligned}
\bullet \; &c = \text{viral load per } m^3 \\
\bullet \; &E_p = \text{emission rate from the infectious source} \\
\bullet \; &f_e = \text{penetration efficiency through masks or other barriers} \\
\bullet \; &V = \text{box volume, }m^3 \\
\bullet \; &\lambda_0 = \text{rate of removal by ventilation} \\
\bullet \; &\lambda_{fil} = \text{rate of removal by filtering} \\
\bullet \; &\lambda_{dec} = \text{infectivity decay rate} \\
\bullet \; &\lambda_{dep} = \text{deposition rate of airborne virus-containing particles onto a surface} \\
\end{aligned}
$$
The rate of change in particle concentration $\frac{dc}{dt}$ is the rate of emissions $E_p$ into the total volume of the space $V$, minus the rate of removal times the current particle concentration $c$.

Letting $\lambda = \lambda_0 + \lambda_{fil} + \lambda_{dec} + \lambda_{dep}$, the steady state condition ($c_\infty$) is
$$
\begin{aligned}
0 &= \frac{dc}{dt} = \frac{E_p f_e}{V} - \lambda c_\infty \\
c_\infty &= \frac{E_p f_e}{V \lambda}.
\end{aligned}
$$
For a constant emission rate, $\epsilon$, the viral load ODE becomes
$$
\frac{dc}{dt} = \epsilon - \lambda c
$$
with solution
$$
c(t) = \frac{\epsilon}{\lambda} + k e^{-\lambda t}.
$$
If $c(0) = 0$, then $k = -\frac{\epsilon}{\lambda}$, and the solution becomes
$$
c(t) = \frac{\epsilon}{\lambda} \left(1 - e^{-\lambda t} \right).
$$


The infectious dose $D$ during exposure time $t$ is given by 
$$
D(t) = \int_{0}^t f_i B c(\tau) d \tau
$$
where $f_i$ is the penetration efficiency, and $B$ is the breathing volumetric flow rate ($m^3/hr$) of a susceptible individual. 

The infectivity decay and deposition rates are expected to be small relative to $\lambda_0$ and $\lambda_{fil}$ and will be ignored for this analysis.

## Room Geometry and HVAC Parameters

Since the greatest concern is for unmasked players, the penetration efficiencies $f_e$ and $f_i$ will be assumed to be one for this analysis. The box volume $V$ for Bone Hall is derived from the plan area of 2490 square feet times an average ceiling height of 15.25 feet, giving a volume of $37973 \; ft^3 = 1075 \; m^3$.

![bone-floor-plan](/assets/img/2023-11-12-covid-and-the-winds/bone-floor-plan.webp)

<p align = "center"><b>Fig 1. Bone Hall Floor Plan</b></p>

HVAC supply air enters the space from vents located on the floor along the back walls of the room and returns through vents above both of the entrance doors.

![bone-hall-supply-vent](/assets/img/2023-11-12-covid-and-the-winds/bone-hall-supply-vent.webp)

<p align = "center"><b>Fig 2. Bone Hall HVAC Supply Vents</b></p>

![bone-hall-hvac-return](/assets/img/2023-11-12-covid-and-the-winds/bone-hall-hvac-return.webp)

<p align = "center"><b>Fig 3. Bone Hall HVAC Return Air Duct</b></p>



## Emission Rates

The emission rates [[Volckens](https://www.nature.com/articles/s41598-022-15530-x#Fig1)] for droplets with diameters in the range of 0.25-35.15 $\mu$m have been estimated for various wind instruments as shown here.

 ![emission-rate-by-instrument](/assets/img/2023-11-12-covid-and-the-winds/emission-rate-by-instrument.webp)

<p align = "center"><b> Fig 4. Emission rates by instrument </b></p>

To estimate the aerosol emission rates expected during a rehearsal of the Durham Medical Orchestra, a recording was made of the 16 Oct 2022 rehearsal. The rehearsal was 2 hours, 40 minutes long (160 minutes) and an expert musician  listened to the playback at 50 randomly selected times to determine which wind instruments were playing. From this statistical sample, the fraction of total time could be determined, and using the expected emission rates for each instrument, the total particle load was calculated.

While not playing, the rest emission rate is estimated to be 6.5 particles per second [[Orton](https://www.nature.com/articles/s43856-022-00103-w.pdf)]. 

| Instrument  | Rate # / sec | Playing fraction | Mean playing time | Total playing emissions | Playing particles/hr | Non-playing time (sec/hr) | Non-playing emissions/hr | Total emissions/hr |
| ----------- | ------------ | ---------------- | ----------------- | ----------------------- | -------------------- | ------------------------- | ------------------------ | ------------------ |
| Bassoon     | 8.9          | 0.26             | 2496              | 22252                   | 8344                 | 2664                      | 17316                    | 25660              |
| Flute       | 9.9          | 0.34             | 3264              | 32285                   | 12107                | 2376                      | 15444                    | 27551              |
| Clarinet    | 13.1         | 0.4              | 3840              | 50202                   | 18826                | 2160                      | 14040                    | 32866              |
| Oboe        | 14.3         | 0.24             | 2304              | 33056                   | 12396                | 2736                      | 17784                    | 30180              |
| Piccolo     | 16.5         | 0.02             | 192               | 3176                    | 1191                 | 3528                      | 22932                    | 24123              |
| French horn | 20.0         | 0.16             | 1536              | 30765                   | 11537                | 3024                      | 19656                    | 31193              |
| Tuba        | 61.5         | 0.16             | 1536              | 94404                   | 35401                | 3024                      | 19656                    | 55057              |
| Trumpet     | 125.8        | 0.14             | 1344              | 169107                  | 63415                | 3096                      | 20124                    | 83539              |
| Trombone    | 127.9        | 0.18             | 1728              | 221020                  | 82883                | 2952                      | 19188                    | 102071             |

<p align = "center"><b> Table 1. Playing times and emission rates </b></p>

## Droplet Diameters

Emitted droplet counts [[Chen](https://www.medrxiv.org/content/medrxiv/early/2020/03/20/2020.03.16.20037291.full.pdf)] are functions of activity and diameter. In one study, speaking the numbers 1 - 100 produced a range of particle sizes ranging from 3 to 750 $\mu m$ diameter, in a log-normal distribution with log-mean $\mu=-3.66$ and log-standard deviation $\sigma=1.44.$ A maximum of 80 droplets were emitted at the most frequent initial droplet diameter 12 $\mu$m when speaking (a), while a single cough (b) generated  a similar range of particle sizes, with over 1500 particles of similar diameters.

![droplet-counts](/assets/img/2023-11-12-covid-and-the-winds/droplet-counts.webp)

<p align = "center"><b> Fig 5. Droplet emission counts by activity and diameter </b></p>

Normalizing and averaging these data sets results in a distribution.

![droplet-normalized-diameters](/assets/img/2023-11-12-covid-and-the-winds/droplet-normalized-diameters.webp)

<p align = "center"><b> Fig 6. Droplet emission distribution</b></p>



## Particle Removal Rates

Three pathways exist for particle removal ($\lambda_0$), fresh air is drawn in through the HVAC equipment in economizer mode, box fans pull air from outside the rehearsal room, and HEPA filters are placed in the room which effectively removes all particles.

The air handlers are designed to move $4500 \frac{ft^3}{min} = 7645 \frac{m^3}{hr}$. In economizer mode, approximately 20% fresh air, and up to 100% is introduced providing $1529 - 7645 \frac{m^3}{hr}$ into the space for a replacement rate of
$$
\begin{aligned}
\lambda_0(\text{HVAC}) &= \frac{1529 \frac{m^3}{hr}}{1075 \; m^3} = 1.42 \; hr^{-1} \; (20\%) \\
 &= \frac{7645 \frac{m^3}{hr}}{1075 \; m^3} = 7.11 \; hr^{-1} \; (100\%). 
\end{aligned}
$$
A proposed mitigation strategy is to use pairs of box fans at each entrance, one pair venting into the space and the other pair venting outward. Due to noise considerations, the fans would be in "medium" speed, corresponding to $1680 \; \text{CFM} = 2854 \frac{m^3}{hr}$ [[Lasko](https://lasko.com/)], giving
$$
\lambda_0{(\text{Fans})} = \frac{2854 \frac{m^3}{hr}}{1075 \; m^3} = 2.65 \; hr^{-1}.
$$
Portable HEPA filters such as the [Medify MA-25](https://medifyair.com/products/medify-ma-25-air-purifier) have low airflow rates of $3420 \frac{ft^3}{hr} = 57 \; \text{CFM} = 97 \frac{m^3}{hr}$ at medium speed and would likely be most effective locally near wind players.


$$
\lambda_0{(\text{HEPA})} = \frac{97 \frac{m^3}{hr}}{1075 \; m^3} = 0.09 \; hr^{-1}.
$$
The total removal rate is the sum of each contribution, $\lambda_0 = 3.07 \; hr^{-1} \; (20\%)$ or $8.76 \; hr^{-1} \; (100\%)$.

## Air Filtration via Building HVAC

Return air to the HVAC unit is filtered with MERV-13 filters. A MERV-13 air filter contains multiple thick pleats that are efficient at removing particles from filtered air [[Pease](https://www.sciencedirect.com/science/article/pii/S0360132321000457?via%3Dihub)].

![merv-13-filter](/assets/img/2023-11-12-covid-and-the-winds/merv-13-filter.webp)

<p align = "center"><b> Fig 7. MERV-13 Filter </b></p>

The efficiency $\eta_F$ of MERV-13 filters improves with particle size with approximately 50% removal of particles 0.35 $\mu m$ in diameter and increasing to 100% removal of particles greater than 3.0 $\mu m$ in diameter [[Camfil](https://www.camfil.com/en-us/products/general-ventilation-filters/panel-filters/aeropleat/ap-thirteen-_-47718)].

![merv-13-efficiency](/assets/img/2023-11-12-covid-and-the-winds/merv-13-efficiency.webp)

<p align = "center"><b>Fig 8. MERV-13 Filter Efficiency</b></p>

Approximating the efficiency as linear in the region 0.35-3.0 $\mu$m, 
$$
\eta_F = \begin{cases}
   0.189 d + 0.434  &\text{if } d < 3.0 \\
   1.0 &\text{otherwise } 
\end{cases}
$$

From the droplet size distribution (Figs. 5,6 above) the diameters are generally greater than 3 $\mu$m so MERV-13 filters can be expected to fully remove them from circulation. Thus, even when the HVAC is not using economizer mode, the effective $\lambda_0 = 8.76 \; hr^{-1}$ [[Volckens](https://www.nature.com/articles/s41598-022-15530-x#Fig1), [Wang](https://onlinelibrary.wiley.com/doi/10.1111/ina.13064), [Johnson](https://www.nature.com/articles/s41598-022-07301-5), [Stadnytskyi](https://www.pnas.org/doi/full/10.1073/pnas.2006874117), [Chen](https://www.medrxiv.org/content/medrxiv/early/2020/03/20/2020.03.16.20037291.full.pdf)]. 

## Particle Concentration and Dose

The worst-case scenario is an infectious trombone player emitting $E_p = 102K$ particles per hour. For Bone Hall with a total volume of $1075 \; m^3$, the emissions per unit volume are
$$
\epsilon = \frac{E_p}{V} = \frac{102e3 \; hr^{-1}}{1075 \; m^3} = 94.9 \; hr^{-1}m^{-3}.
$$
For $\lambda = \lambda_0 = 8.76 \; hr^{-1}$, we have
$$
c(t) = \frac{94.9 \; hr^{-1}m^{-3}}{8.76 \; hr^{-1}} \left(1 - e^{-8.76 t} \right) = 10.8 \left(1 - e^{-8.76 t} \right) \; m^{-3}.
$$
where $c(t)$ is the concentration of particles per cubic meter at time $t$ (in hours) since the start of rehearsal. The steady-state condition $c_\infty$ is
$$
c_\infty = \frac{E_p}{V \lambda} = 10.8 \; m^{-3}.
$$
The expected concentration increases rapidly, achieving $c_\infty$ by 0.5 hours (30 minutes), and is near 8 particles per cubic meter within 10 minutes. It was observed from the rehearsal recording that there was a warm-up period of approximately 10 minutes before the start of rehearsal.

<img src="/assets/img/2023-11-12-covid-and-the-winds/DMO-concentration.webp" alt="DMO concentration" style="zoom: 33%;" />

<p align = "center"><b>Fig 9. SARS-CoV-2 Concentration</b></p>

The dose received by a susceptible individual is the integral of the concentration times the breathing volumetric flow rate $B$ during the period of exposure. Since the concentration reaches $c_\infty$ in a very short time, a useful approximation is to use the linear function,
$$
D(t) = c_\infty B t.
$$
Normal breathing is 15 breaths per minute at 500 mL per breath for a total of 7.5 L per minute $= 0.45 \frac{m^3}{hr}$. The volumetric flow rate for a wind player is up to 1600 mL per breath [[Bouhuys](https://journals.physiology.org/doi/abs/10.1152/jappl.1964.19.5.967#)], but with rests, the value of $B$ is likely closer to $1 \frac{m^3}{hr}$ giving the expected dose $D = 10t$.

## Secondary Risk and Attack Rate

In [[Peng](https://pubs.acs.org/doi/pdf/10.1021/acs.est.1c06531)] the risk of secondary infection is defined as
$$
H = N_{sus}H_r = \frac{DN_{sus}}{V\lambda}
$$
where $N_{sus}$ is the number of susceptible individuals and $H_r$ is the relative risk with units $\frac{hr^2}{m^3}$. Empirically, the attack rate for SARS-CoV-2 was found to have a value of $H_r = 18.6,$ although this can vary depending on the specific variant that is circulating [[Madewell](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2791601)] and may vary for other respiratory viruses.

![airborne-risk](/assets/img/2023-11-12-covid-and-the-winds/airborne-risk.webp)

<p align = "center"><b>Fig 10. Relative Risk Estimate</b></p>

The parameter $E_{p0}$ is the quanta shedding rate of an infectious individual resting and breathing normally  (e.g. 102K particles per hour for a trombone player). $E_{p0}$ is dependent on the virus/variant, so a doubling of the rate of contagion shifts the curve to the left by a factor of two. 

For conditions in Bone Hall, the relative risk per susceptible individual is
$$
H_r = \frac{D}{V \lambda} = \frac{10 t}{1075 \times 8.76} = 0.001 t. 
$$
Even for a rehearsal length of 2-3 hours, the expected attack rate per susceptible individual is low ($H_r = 0.002 - 0.003$ corresponding to 0.2% - 0.3% risk of infection) given the specified air exchange rate generated by HVAC conditions and fans.

## Direct Exposure to Emissions from Wind Instruments

A susceptible individual is at higher risk if their location in the orchestra puts them directly in the exit jet of a wind instrument and if they are also a wind player and hence maskless. The length and direction of the emitted jet depends on the instrument being played. The jets were examined using Schlieren interferometry which applies a collimated light source to a fluid in motion. The motion induces density gradients in the refractive index permitting direct interpretation of fluid phenomena [[Settles](https://books.google.com/books?hl=en&lr=&id=HWtB2R0gWFgC&oi=fnd&pg=PR17&ots=sMFPW__jUT&sig=RLHjSzZZRssz6A73Jtu01H39_F8#v=onepage&q&f=false)]. 

[Becher et al](https://pubmed.ncbi.nlm.nih.gov/34121229/) applied Schlieren methods to wind instruments and were able to measure the lengths and directions of the emitted jets. Example imagery for a trumpet, clarinet, and bassoon show emitted jet lengths of approximately 30 cm, but with widely varying directions.

![Schlieren](/assets/img/2023-11-12-covid-and-the-winds/Schlieren.webp)

<p align = "center"><b>Fig 11. Schlieren Interferometry for Selected Wind Instruments</b></p>

The results for wind instruments and singers show that flutes typically have emission lengths of about 15 cm, while French horns may be 60 cm. The direction of flow is shown as the opening in the exit angle icon.

![wind-instruments-singers-schlieren](/assets/img/2023-11-12-covid-and-the-winds/wind-instruments-singers-schlieren.webp)

<p align = "center"><b>Fig 12. Wind Instrument Exit Rates and Angles</b></p>

[Spahn et al](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8159134/) used Safex fog to visualize airflow around 14 orchestral wind instruments and found that airflow rates were less than 0.1 m/s for all instruments at three measurement distances (1.0, 1.5, 2.0 m) from the instrument, concluding that "most wind instruments do not have any visual or measurable influence on the movement of compartment air."

From known superspreader events, it is clear that an alternate mechanism can result in infection [[Liu](https://pubs.aip.org/aip/pof/article/33/2/023301/1032688/Simulation-based-study-of-COVID-19-outbreak)]. We hypothesize that while the air outside a "bubble" surrounding the player remains undisturbed, the flow induced by the HVAC induces a highly concentrated stream away from the point of origin. A susceptible individual in this stream would be exposed to the high concentration for the duration of the rehearsal, and be at high risk of infection.

For purposes of this analysis, the greatest risk of infecting other musicians is assumed when the direction of instrument outflow/breathed air is directed at other musicians. The combination of the number of emitted particles and the direction of airflow suggests that an infectious trombone player represents the worst-case scenario for transmission when the direction of airflow is from the back to the front of the room, as in this model of the rehearsal hall. In this analysis, all string and percussion players are assumed to be properly wearing N-95 masks and thus to be not susceptible to infection.

A computational fluid dynamics (CFD) analysis of airflow in Bone Hall could be performed, but this will at best show the flow patterns from an individual player. If the proposed mechanism is correct, there does not appear to be a global mitigation strategy. One possible solution would be to move the trumpet and trombone players to the row directly behind the string players. Since the string players are masked during rehearsal, they would be at much lower risk than the unmasked wind instruments.

A local solution might be to place small fans in front of selected wind players such as trumpets and trombones to generate a low-speed updraft. If the flow from the fan could be kept in the laminar region, this might lift the "bubble" above the heads of downstream players.

## COVID Community Rates

In [Durham County, North Carolina](https://covidactnow.org/us/north_carolina-nc/county/durham_county/?s=41452893), publicly available records indicate that 75.2% of inhabitants are considered to be [fully vaccinated](https://covidactnow.org/us/north_carolina-nc/county/durham_county/?s=41452893) as of 25 November 2022. The reported community rate of SARS-CoV-2 infections was 55.4 new weekly cases per 100,000 people, and hospital admissions were 7.1 per 100,000 residents. The rate of newly reported cases is thought to be significantly fewer than the true number of infectious cases due to underreporting. In addition, newly reported cases are recorded only at the time of the report, but individuals remain infectious over many days. The ratio of the true rate of infection in the community relative to the number of reported cases varies widely, estimated between 50 and 85 (i.e. 50 to 85 actual cases for each reported case) [[Hortaçsu](https://pubmed.ncbi.nlm.nih.gov/?term=Horta%C3%A7su%20A%5BAuthor%5D)]. In addition, viral transmission can also occur when individuals are asymptomatic, which may include up to ~60% of actual cases [[Oran and Topol](https://www.acpjournals.org/doi/10.7326/M20-3012); [Johansson](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2774707); [Hortaçsu](https://pubmed.ncbi.nlm.nih.gov/?term=Horta%C3%A7su%20A%5BAuthor%5D); [Liu](https://pubs.aip.org/aip/pof/article/33/2/023301/1032688/Simulation-based-study-of-COVID-19-outbreak)].

Given these challenges, tracking SARS-CoV-2 concentrations in wastewater has been proposed as a way to more reliably track community prevalence of infection [[Michael-Kordatou](https://www.sciencedirect.com/science/article/pii/S2213343720306552?via%3Dihub)]. The United States Centers for Disease Control and Prevention ([CDC; Atlanta, GA](https://www.cdc.gov/healthywater/surveillance/wastewater-surveillance/data-reporting-analytics.html#normalization)) now tracks normalized concentrations of SARS-CoV-2 in wastewater at selected treatment plants throughout the country. Data for [Durham County, NC](covid.cdc.gov/covid-data-tracker/#wastewater-surveillance) on October 20, 2022, showed increasing detection of SARS-CoV-2 in sewage from a low in late September 2022. Although useful for observing trends, sewage data has not yet been validated as a reliable metric for background infection rates.

![sewershed-1523](/assets/img/2023-11-12-covid-and-the-winds/sewershed-1523.webp)

<p align = "center"><b>Fig 13. Normalized Wastewater Concentrations for Durham, NC</b></p>

The rate of newly reported cases is thought to be significantly fewer than the true number of infectious cases due to underreporting and because newly reported cases are recorded only at the time of the report, but individuals remain infectious over many days. For the DMO, members are required to be vaccinated, so we might expect a lower probability of infection. On the other hand, many are on the medical staff at Duke Hospital, so their exposure is likely higher than the average Durham resident.

Denoting the probability that any member of the winds section contracts COVID-19 by $P(I)$, then the probability that an individual is infection-free is $1 - P(I) = P(\neg I)$. Since there are 28 members of the winds section, the probability that all are uninfected at the time of rehearsal is
$$
P_{tot}(\neg I) = (1-P(I))^{28}.
$$
This means that the chance that at least one member is infected is
$$
P_1 = 1 - P_{tot} = 1 - (1 - P(I))^n,
$$
where $n$ is the number of unmasked individuals.  If the true rate of infection among wind players matches the community reported rate of 0.1%, then the probability that at least one individual in the section has SARS-CoV-2 infection would be around 2.5%. The function is nearly linear, so as the background rate rises to 1% the probability increases to 25%. Assuming a total of 90 members of the orchestra, if all are unmasked, the probability that at least one individual who is attending the rehearsal is infected with SARS-CoV-2 is 60% at a community background rate of 1% and approaches 100% at a community incidence level of 5%. 

![PI-both](/assets/img/2023-11-12-covid-and-the-winds/PI-both.webp)

<p align = "center"><b>Fig 14. Probability of Infection in DMO Wind Section</b></p>

If the true rate of infection among the DMO wind players matches the community reported rate of 0.1%, then the probability that at least one individual in the section has COVID-19 would be around 2.5%. The function is nearly linear, so as the background rate rises to 1% the probability increases to 25%.

## Probability of transmission to a susceptible individual

The probability that a susceptible individual becomes infected during rehearsal is a function of the viral attack rate and the relative risk rate parameter. From the community background rate $P(I),$ the probability of one unmasked infectious individual among $n$ total players is 
$$
P_1 = 1 - (1-P(I))^n.
$$
The relative risk $H_r$ is derived from the dose $D$, the box volume $V$, and the particle removal rate $\lambda$,
$$
H_r = \frac{D}{V \lambda}.
$$
Given the conditions in Durham, NC at the time of this study, the relative risk is 0.001 per hour, or 0.003 for a 3-hour rehearsal. According to [Peng et al](https://pubs.acs.org/doi/10.1021/acs.est.1c06531), the attack rate, or probability of secondary infection, is a function of the relative risk. Using the symbolic regression capabilities of [HeuristicLab](https://dev.heuristiclab.com/trac.fcgi/), a functional form of the attack rate was derived.

![covid-secondary-risk](/assets/img/2023-11-12-covid-and-the-winds/covid-secondary-risk.webp)

<p align = "center"><b>Fig 15. Attack Rate vs. Relative Risk</b></p>

Data for the fit was derived from the initial COVID-19 outbreak. The curve generalizes to other airborne viruses by the ratio of relative risks. For example, [Peng](https://pubs.acs.org/doi/10.1021/acs.est.1c06531) found that the same attack rate was observed in measles when the relative risk was about two orders smaller than that of COVID, so the calculated relative risk should be shifted left by 1/100,
$$
H_r(\text{\it{measles}}) = \frac{1}{100} H_r(\text{\it{COVID-19}}).
$$
For the given conditions of $H_r = 0.003$ during a 3-hour rehearsal in Bone Hall, the expected attack rate is 1.35%. 

Assuming one infectious player and 27 unmasked susceptible players, the probability of secondary infection is
$$
P_2 = 1 - (1 - 0.0135)^{27} = 0.307.
$$
With a community background rate of 55.4 per 100,000 residents, $P(I) = 0.000554,$ the probability of at least one member of the wind section being infectious is $P_1 = 0.015.$ 

These events are independent, so the probability that one of the susceptible unmasked players becomes infected during rehearsal is the combined probability,
$$
P(T) = P_1 \times P_2 = 0.015 \times 0.307 = 0.0046.
$$
or a 0.46% probability that an unmasked, susceptible wind player becomes infected during a 3-hour rehearsal.

The derived expression describes the relationship between the attack rate $r_{att}$ and relative risk $H_r$ was found to be
$$
r_{att} = (c_0 + \tanh(c_1 + c_2 H_r))c_3 + c_4
$$
where

- $c_0 = 1.04938e+09$
- $c_1 = 4.6547$
- $c_2 = 2.6915$
- $c_3 = 5.5207e+05$
- $c_4 = -5.7933e+14$

## Discussion

This study used mathematical modeling to examine the probability of an unmasked individual contracting infection with SARS-CoV-2 as a function of room size, effective air changes/hour, particle emissions from unmasked individuals, and the probability that an unmasked individual is infectious based on current community virus prevalence. Mitigation factors tested included the use of fans to enhance the introduction of outside air, portable HEPA filters to locally purify air, and masking of string and percussion players. 

The physical characteristics of the rehearsal hall used for this analysis are ideal for reducing the chances of infection during a rehearsal. The supply vents are located at the back of the room and the large number of vents reduces the airflow rate. Air return grates are high, above the room exits, so flow tends to rise as it moves towards the front of the room. Given the usual orchestral configurations where woodwinds and brass occupy higher risers in the center to back of the room, any infectious bubbles generated by these unmasked players are likely to rise to the air returns, and thus remain out of the breathing zone of musicians seated on lower risers. 

Many of the musicians on the lower risers are string players and thus are masked, further reducing risk. The HVAC equipment uses either MERV-13-filtered or 100% outside air, so a high rate of purification/replacement occurs. The use of box fans to increase overall airflow and HEPA filters located within wind sections to locally filter air further reduces any potential concentration of viral particles.

Under these conditions, the specific rehearsal hall modeled demonstrated a low (1.8%) risk of infection by unmasked wind players during a 160-minute rehearsal when community infection prevalence is 0.1%. The risk of infection at different levels of community viral prevalence, in alternate meeting spaces with different geometries and air circulation, and with different levels of particle-generating activities will require separate calculations that include the specific numeric values for the relevant variables of these alternate scenarios. 

To facilitate this, we have provided a [link](https://docs.google.com/spreadsheets/d/1H6o0BoBMBRt8ThR_MdVOIUa6XVGW-x-v1DO1M7PFB04/edit?usp=sharing) where calculations can be performed, using the model we have described based on input of the venue and group-specific variables listed on the left side of Fig 16. It is important to note that the risk of any unmasked and currently uninfected person contracting the virus during the modeled event, $P(T),$ is derived by multiplying $H_rT,$ the risk of having an infectious unmasked person in the room based on community virus prevalence, and $P_1,$ the variable that incorporates the characteristics of the event space, to derive the risk of secondary infection from the infectious index case.

![RespVirus-worksheet](/assets/img/2023-11-12-covid-and-the-winds/RespVirus-worksheet.webp)

<p align = "center"><b>Fig 16. Probability of Infection in DMO Wind Section</b></p>

## Conclusions

The physical characteristics of Bone Hall are ideal for reducing the chances of infection during a rehearsal. The supply vents are located at the back of the room and the large number of vents reduces the airflow rate. Return grates are high, above the room exits, so flow tends to rise towards the front of the room. The HVAC equipment uses 100% outside air, so a high rate of replacement occurs. The proposed use of box fans and HEPA filters further reduces the concentration of viral particles.

Empirical evidence suggests that wind instruments disturb air for a short distance near the player. Separating players by two meters is sufficient to avoid high exposure, but would be ineffective for anyone in the direct downstream region of an infectious player. We propose using upward-blowing fans set at low speeds to lift air streams.

The community background infection rate is low, and among orchestra members, it may be even lower due to the required 100% vaccination rate. While no group setting can be completely safe from reinfection, in general, the conditions for the Durham Medical Orchestra rehearsing in Bone Hall would seem to be low risk, assuming the background rate is low (~0.1%).

### Image credits

- Hero: Marie Hall Ets, [*Gilberto and the Wind*](https://www.penguinrandomhouse.com/books/323225/gilberto-and-the-wind-by-marie-hall-ets-illustrated-by-marie-hall-ets/)
- [Durham Medical Orchestra](http://dmomusic.org/)
- Fig 1. Bone Hall Floor Plan - Duke University Facilities Management Department
- Figs 2, 3. Bone Hall photographs.
- Fig 4. Emission rates by instrument - Volckens
- Fig 5. Droplet emission counts by activity and diameter - Chen
- Fig 6. Droplet emission distribution - Veusz NormalizedDiameters.vsz
- Fig 7. MERV-13 Filter - Camfil
- Fig 8. MERV-13 Filter Efficiency - Camfil
- Fig 9. SARS-CoV-2 Concentration - Veusz function $f(t) = 10.8(1 - \exp(-8.76t))$
- Fig 10. Relative Risk Estimate - Peng
- Fig 11. Schlieren Interferometry for Selected Wind Instruments - Becher
- Fig 12. Wind Instrument Exit Rates and Angles - Becher
- Fig 13. Normalized Wastewater Concentrations for Durham, NC - CDC
- Fig 14. Probability of Infection in DMO Wind Section - Veusz function $f(x) = 1 - (1 - \frac{x}{100})^n, \; n = 28,90$.
- Fig 15. Attack Rate vs. Relative Risk - Peng, HeuristicLab
- Fig 16. Probability of Infection in DMO Wind Section - [RespVirus](https://docs.google.com/spreadsheets/d/1H6o0BoBMBRt8ThR_MdVOIUa6XVGW-x-v1DO1M7PFB04/edit?usp=sharing) Google Sheets

## Code for this article

[NormalizedDiameters.vsz](https://gist.github.com/XerxesZorgon/bbe672407110399b8117fea9e8ae8cbb), data from [Normalized speaking coughing.csv](https://gist.github.com/XerxesZorgon/12b6c6e7b25983bfae447d25c8f350ec)

[HeuristicLab](https://dev.heuristiclab.com/trac.fcgi/), data from [Attack rate.csv](https://gist.github.com/XerxesZorgon/d2c29e383d29456b1d0f12e2f06b2103)

Respiratory Virus Transmission Risk Assessment - [RespVirus](https://docs.google.com/spreadsheets/d/1H6o0BoBMBRt8ThR_MdVOIUa6XVGW-x-v1DO1M7PFB04/edit?usp=sharing) Google Sheets. Instructions are on sheet #4.

## References

1. Acharya, C. et al, [Viral Load Among Vaccinated and Unvaccinated, Asymptomatic and Symptomatic Persons Infected With the SARS-CoV-2 Delta Variant](https://academic.oup.com/ofid/article/9/5/ofac135/6550312)
2. Becher, L. et al, [The spread of breathing air from wind instruments and singers using Schlieren techniques](https://pubmed.ncbi.nlm.nih.gov/34121229/)
3. Bergwerk, M. et al, [Covid-19 Breakthrough Infections in Vaccinated Health Care Workers](https://www.nejm.org/doi/full/10.1056/nejmoa2109072)
4. Bhagat, R. et al, [Effects of ventilation on the indoor spread of COVID-19](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/effects-of-ventilation-on-the-indoor-spread-of-covid19/CF272DAD7C27DC44F6A9393B0519CAE3)
5. Blocken B. et al, [Ventilation and air cleaning to limit aerosol particle concentrations in a gym during the COVID-19 pandemic](https://www.sciencedirect.com/science/article/pii/S0360132321000706)
6. Bouhuys, A., [Lung volumes and breathing patterns in wind-instrument players](https://journals.physiology.org/doi/abs/10.1152/jappl.1964.19.5.967#)
7. Brosseau, Q. et al, [Flow and aerosol dispersion from wind musical instruments](https://arxiv.org/pdf/2201.10386.pdf)
8. [Camfil](https://www.camfil.com/en-us/products/general-ventilation-filters/panel-filters/aeropleat/ap-thirteen-_-47718) AP-Thirteen High-efficiency MERV 13 pleated panel air filter.
9. CDC-1, [Improving Ventilation in Your Home](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/Improving-Ventilation-Home.html)
10. CDC-2, [Wastewater Surveillance Data Reporting and Analytics](https://www.cdc.gov/healthywater/surveillance/wastewater-surveillance/data-reporting-analytics.html#normalization)
11. CDC-3, COVID-19: [Wastewater Surveillance](covid.cdc.gov/covid-data-tracker/#wastewater-surveillance)
12. Chen, W. et al, [Short-range airborne route dominates exposure of respiratory infection during close contact](https://www.medrxiv.org/content/medrxiv/early/2020/03/20/2020.03.16.20037291.full.pdf)
13. Covid Act Now, [Durham County, NC](https://covidactnow.org/us/north_carolina-nc/county/durham_county/?s=41452893)
14. Hedworth, H. et al, [Mitigation strategies for airborne disease transmission in orchestras using computational fluid dynamics](https://www.science.org/doi/10.1126/sciadv.abg4511)
15. Hortaçsu, A et al, [Estimating the fraction of unreported infections in epidemics with a known epicenter: An application to COVID-19](https://pubmed.ncbi.nlm.nih.gov/?term=Hortaçsu A[Author])
16. Johansson, M. et al, [SARS-CoV-2 Transmission From People Without COVID-19 Symptoms](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2774707)
17. Johnson, T. et al, [Viral load of SARS-CoV-2 in droplets and bioaerosols directly captured during breathing, speaking, and coughing](https://www.nature.com/articles/s41598-022-07301-5)
18. [Lasko](https://lasko.com/) Box Fans
19. Lee, B. [Minimum Sizes of Respiratory Particles Carrying SARS-CoV-2 and the Possibility of Aerosol Generation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7579175/)
20. Liu, H. et al, [Simulation-based study of COVID-19 outbreak associated with air-conditioning in a restaurant](https://pubs.aip.org/aip/pof/article/33/2/023301/1032688/Simulation-based-study-of-COVID-19-outbreak)
21. Madewell, Z. et al, [Household Secondary Attack Rates of SARS-CoV-2 by Variant and Vaccination Status](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2791601)
22. [Medify Air](https://medifyair.com/) HEPA Filters
23. Michael-Kordatou, I. et al, [Sewage analysis as a tool for the COVID-19 pandemic response and management: the urgent need for optimised protocols for SARS-CoV-2 detection and quantification](https://www.sciencedirect.com/science/article/pii/S2213343720306552?via%3Dihub)
24. Ontario Public Health, [COVID-19 Transmission through Short and Long-Range Respiratory Particles](https://www.publichealthontario.ca/-/media/Documents/nCoV/phm/2022/01/covid-19-respiratory-transmission-range.pdf?sc_lang=en)
25. Oran, D. and Topol, E. [Prevalence of Asymptomatic SARS-CoV-2 Infection](https://www.acpjournals.org/doi/10.7326/M20-3012)
26. Orton, C. et al, [A comparison of respiratory particle emission rates at rest and while speaking or exercising](https://www.nature.com/articles/s43856-022-00103-w.pdf)
27. Pease, L. et al, [Investigation of potential aerosol transmission and infectivity of SARS-CoV-2 through central ventilation systems](https://www.sciencedirect.com/science/article/pii/S0360132321000457?via%3Dihub)
28. Peng, Z. et al, [Practical Indicators for Risk of Airborne Transmission in Shared Indoor Environments and Their Application to COVID-19 Outbreaks](https://pubs.acs.org/doi/pdf/10.1021/acs.est.1c06531)
29. Rhode Island Department of Health, [Preventing the Spread of COVID-19 By Circulating Air in Schools and Other Buildings](https://covid.ri.gov/covid-19-prevention/indoor-air-circulation)
30. Riediker, M. and Tsai, D-H, [Estimation of Viral Aerosol Emissions From Simulated Individuals With Asymptomatic to Moderate Coronavirus Disease 2019](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2768712)
31. Russell, M. et al, [Mucosal Immunity in COVID-19: A Neglected but Critical Aspect of SARS-CoV-2 Infection](https://www.frontiersin.org/articles/10.3389/fimmu.2020.611337/full)
32. Saw, L. et al, [Modeling aerosol transmission of SARS-CoV-2 from human-exhaled particles in a hospital ward](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8148403/)
33. Settles, G.S., [Schlieren and Shadowgraph Techniques](https://books.google.com/books?hl=en&lr=&id=HWtB2R0gWFgC&oi=fnd&pg=PR17&ots=sMFPW__jUT&sig=RLHjSzZZRssz6A73Jtu01H39_F8#v=onepage&q&f=false)
34. Spahn, C. et al, [Airflow and Air Velocity Measurements While Playing Wind Instruments, with Respect to Risk Assessment of a SARS-CoV-2 Infection](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8159134/)
35. Stadnytskyi, V. et al, [The airborne lifetime of small speech droplets and their potential importance in SARS-CoV-2 transmission](https://www.pnas.org/doi/full/10.1073/pnas.2006874117)
36. Stockman, T. et al, [Measurements and Simulations of Aerosol Released while Singing and Playing Wind Instruments](https://pubs.acs.org/doi/10.1021/acsenvironau.1c00007)
37. Tang, J. et al, [A schlieren optical study of the human cough with and without wearing masks for aerosol infection control](https://pubmed.ncbi.nlm.nih.gov/19815575/)
38. Venkatram, A., and Weil, J. [Modeling turbulent transport of aerosols inside rooms using eddy diffusivity](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8446944/pdf/INA-31-1886.pdf)
39. Volckens, J. et al, [Aerosol emissions from wind instruments: effects of performer age, sex, sound pressure level, and bell covers](https://www.nature.com/articles/s41598-022-15530-x#Fig1)
40. Wang, L. et al, [Characterization of aerosol plumes from singing and playing wind instruments associated with the risk of airborne virus transmission](https://onlinelibrary.wiley.com/doi/10.1111/ina.13064)
41. Wölfel, R. et al, [Virological assessment of hospitalized patients with COVID-2019](https://www.nature.com/articles/s41586-020-2196-x.pdf)

​	

