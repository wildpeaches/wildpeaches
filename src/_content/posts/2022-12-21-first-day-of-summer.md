---


title: The First Day of Summer Every Day
subtitle: Lazy Days with Astronomy
author: John Peach
lede:
hero:
  url: /assets/img/2022-12-21-first-day-of-summer/children-on-the-beach-by-winslow-homer.png
  alt:
tags: [math]
keywords: [math, astronomy, analemma]
socialImg: /assets/img/2022-12-21-first-day-of-summer/children-on-the-beach-by-winslow-homer.png
software: ['julia', 'pluto-jl', 'openstreetmap', 'google-earth']
---

[Home](https://wildpeaches.github.io/)

> School's out for summer
> School's out forever
>
> - Alice Cooper

Wouldn't it be great if every day was the first day of summer? With a little math and some astronomy, it's easy to do.

![](/assets/img/2022-12-21-first-day-of-summer/calvin-the-days-are-just-packed.webp)

## The Summer Solstice

The summer solstice is the one day of the year with the longest period of daylight. The Earth orbits the Sun in a plane, but the Earth's axis of rotation is tilted by about $23.5\degree$ relative to the orbital plane. 

![seasons-earth-orbit](/assets/img/2022-12-21-first-day-of-summer/seasons-earth-orbit.gif)

In the Northern Hemisphere, this tilt causes the longest day of the year to be around June 20th,

![summer-solstice](/assets/img/2022-12-21-first-day-of-summer/summer-solstice.jpg)

while in the Southern Hemisphere the longest day is near December 20th. 

![winter-solstice](/assets/img/2022-12-21-first-day-of-summer/winter-solstice.jpg)

The difference between the axis of rotation about the Sun and the Earth's axis between the North and South poles is called the axial tilt or obliquity. The obliquity slowly changes, currently $23.43631\degree$, and is one of three components of the [Milankovitch Cycles](https://climate.nasa.gov/news/2948/milankovitch-orbital-cycles-and-their-role-in-earths-climate/) which are responsible for long-term changes in climate determining when Ice Ages occur. 

The other two components are changes in the eccentricity of the orbit around the Sun and the direction of the Earth's axis as it orbits the Sun, called precession. These effects happen over periods of tens of thousands of years, so we can safely ignore them for our calculations. The Farmer's Almanac has a [calculator](https://www.almanac.com/astronomy/sun-rise-and-set) to show the number of daylight hours for any zip code.

So, if there is just one longest day of the year in each hemisphere, how can we make every day the first day of summer? One way would be to build a rocket that could get us into orbit around the Earth. If the orbit was tilted so the orbital axis pointed towards the Sun (approximately North-South around the Earth), then we'd have constant daylight. But, we wouldn't be able to hang out at the beach and dip our toes in the water.

Another possibility is to move a little bit every day, so the Sun is directly overhead at noon. The longest daylight hours would still be near June and December 20th, but having the Sun directly overhead would certainly feel like a good day at the beach. If you don't like the answer, redefine the question.

## The Subsolar Point

At every moment, there is one point on the Earth where the Sun is directly overhead. This point is called the subsolar point. Since the Earth's circumference is 40,075 km, and the Earth rotates once every 24 hours the subsolar point moves at a speed of 40075/24 = 1669.8 km/hour (a little over 1000 mph). Blink and it's gone.

At the summer solstice, the subsolar point touches someplace on the circle around the Earth called the Tropic of Cancer, and at the winter solstice, it reaches the Tropic of Capricorn. The names come from the [constellations](https://www.thoughtco.com/tropic-of-cancer-tropic-of-capricorn-3976951) where the Sun is at the solstices. The subsolar point continuously moves between these circles twice a year. In degrees, the change is about
$$
\text{Degrees/day} \approx \frac{2 \times 23.5}{365/2} = 0.2575\degree.
$$
Another way to think about it is in fractions of the Earth's circumference,
$$
\text{km/day} = 40075 \times \frac{0.2575}{360} = 28.67 \; \text{km} = 17.8 \text{ miles}.
$$
You could walk that far. 

The path of the subsolar point is sinusoidal, and looks something like this:

![Subsolar_point_date_graph](/assets/img/2022-12-21-first-day-of-summer/Subsolar_point_date_graph.svg)

<p align = "center"><b>Subsolar Point</b></p>

If you choose a latitude like Honolulu ($21.31 \degree$ N), then follow a horizontal line (blue) until it intersects the red curve, you get the day of the year that the Sun will be directly overhead. 

## The Subsolar Unit Vector

Imagine that you have a vector pointing North, another one pointing East, and a third pointing directly upwards toward the local zenith.

![earth-vectors](/assets/img/2022-12-21-first-day-of-summer/earth-vectors.png)

<p align = "center"><b>Earth Vectors</b></p>

All three vectors are perpendicular to each other, and if the Up vector points towards the Sun, then you're at the subsolar point. If you aren't at the subsolar point, then there will be an angle between the direction towards the Sun and your local up called the zenith angle. The angle between North and the Sun direction is called the azimuth angle.

![solarl-azimuth-zenith-angles1](/assets/img/2022-12-21-first-day-of-summer/solarl-azimuth-zenith-angles.png)

<p align = "center"><b>Azimuth and Zenith Angles</b></p>

Given our latitude, longitude, date, and time, we can calculate these two angles. First, we need to know the number of days since January 1<sup>st</sup>, 2000 at noon (called J2000),
$$
n = -1.5+(Y_{in}-2000) \cdot 365 + N_{leap} + \text{Day of Year} + \text{Fraction of Day from 0:00 UT}.
$$
The year 2000 is subtracted from the current year $Y_{in}$, and the result is multiplied by 365. Add the number of leap years $N_{leap}$ to account for the extra February 29<sup>th</sup> that occurs in each leap year, then correct for the current day of the year and fraction of a day for the current time. The correction of $-1.5$ is due to the starting point being at noon rather than midnight on January 1<sup>st</sup>, and because January 1<sup>st</sup> is considered the "0<sup>th</sup>" day.

To calculate the day of the year, create a vector of the number of days in each month
$$
\text{Days in each month} = \{31,28,31,30,31,30,31,31,30,31,30,31 \},
$$
and calculate the cumulative sum vector beginning with $0$ for January and omitting the final total
$$
\text{Cumulative days in each month} = \{0,31,59,90,120,151,181,212,243,273,304,334\}.
$$
If the current date is April 17<sup>th</sup>, look up the 4<sup>th</sup> entry in the cumulative vector, or $120$, which is the total number of days in the previous three months, and then add $17$ to get the day of the year, $137$. The correction for leap years, $N_{leap} = \lfloor (Y_{in}-2000)/4 \rfloor$ is the integer part of the number of years since 2000 divided by $4$. The symbol $\lfloor \;\rfloor$ is the mathematical way of saying this.

The fraction of a day is 
$$
\text{Fraction of Day} = \frac{3600 \times \text{hours} + 60 \times \text{minutes} + \text{seconds} }{86400}.
$$
[Longitude](https://education.nationalgeographic.org/resource/longitude) is the number of degrees East or West from the [Prime Meridian](https://gisgeography.com/prime-greenwich-meridian/) which is a [great circle](https://mathworld.wolfram.com/GreatCircle.html) passing through Greenwich, London. You can find the Prime Meridian in [Google Earth](https://earth.google.com/web/) by entering (51.478,0) in the search box which is where you'll see the [Royal Observatory](https://www.rmg.co.uk/royal-observatory). 

The longitude (in degrees) of the Sun depends on the day of year calculation above,
$$
L=280.466+0.9856474n.
$$
Every second counts because the longitude point is moving at $463.8 \frac{m}{s} = 1521.65 \frac{\text{feet}}{\text{sec}}$. 

We also need to calculate the [mean anomaly](https://en.wikipedia.org/wiki/Mean_anomaly) $g$, the [ecliptic longitude](https://sceweb.sce.uhcl.edu/helm/WEB-Positional%20Astronomy/Tutorial/Ecliptic%20coordinates/Ecliptic%20coordinates.html) $\lambda$, the [obliquity of ecliptic](https://glossary.ametsoc.org/wiki/Obliquity_of_the_ecliptic) $\epsilon$, the [right ascension](https://astronomy.swin.edu.au/cosmos/r/right+ascension) $\alpha$, and the [declination of the Sun](https://astronavigationdemystified.com/the-suns-declination-the-equinoxes-and-the-solstices/) $\delta$ (all in degrees). Degrees need to be in the range $[0,360]$,  and the easiest way to make that happen in your code is to wrap the calculations in a $\text{mod}$ function, e.g. $g = \text{mod(357.528 + 0.9856003n,360)}$.  
$$
\begin{aligned}
g &= 357.528 + 0.9856003n \\
\lambda &= L + 1.915 \sin g + 0.020 \sin(2g) \\
\epsilon &= 23.440 - 0.0000004n \\
\alpha &= \tan^{-1} \left( \cos \epsilon \tan \lambda \right) \\
\delta &= \sin^{-1} \left( \sin \epsilon \sin \lambda \right).
\end{aligned}
$$


## The Ecliptic Plane

The mean anomaly, $g$, is a measure of the position of an object in its elliptical orbit around a central body, with respect to its [periapsis](https://mathworld.wolfram.com/Periapsis.html) (the point in its orbit where it is closest to the central body). It is defined as the angle between the periapsis and the object's current position, measured at the center of the central body.

The mean anomaly can be used to predict the future position of an object in its orbit, using Kepler's laws of planetary motion. These laws describe the relationship between an object's orbital characteristics (such as its semi-major axis, eccentricity, and period) and its motion around the central body.

The ecliptic plane is the plane in which the Earth orbits the Sun. It is tilted with respect to the celestial equator by about 23.5 degrees, which is the reason for the seasons on Earth. The ecliptic plane is also the plane in which the Moon and planets move in their orbits around the Sun. The positions of celestial objects are often described in terms of their celestial coordinates, which include their ecliptic longitude and latitude.

The solar ecliptic longitude, $\lambda$, is measured in degrees, starting from the vernal equinox and increasing in a counterclockwise direction. It is usually measured in the range of 0 to 360 degrees. The solar ecliptic longitude is used to predict the location and phase of the Moon, as well as the positions of the planets. It is also used to track the motion of comets and asteroids.

![Ecliptic_with_earth_and_sun_animation](/assets/img/2022-12-21-first-day-of-summer/Ecliptic_with_earth_and_sun_animation.gif)

<p align = "center"><b>Ecliptic Plane</b></p>

The obliquity of the ecliptic, $\epsilon$, is the angle between the Earth's axis of rotation and the vector perpendicular to the ecliptic plane, in other words, the amount of tilt of the Earth.

## Right Ascension and Declination

Right ascension, $\alpha$, (or RA), and declination, $\delta$, (also Dec) are celestial coordinates used to specify the location of objects in the sky, including the Sun. The celestial sphere is an imaginary sphere with the Earth at its center, upon which the stars and other celestial objects appear to be located. Right ascension and declination are similar to longitude and latitude on the Earth's surface.

Right ascension is the angular distance of an object eastward along the celestial equator from the vernal equinox, the point where the Sun appears to cross the celestial equator from south to north at the start of spring. Right ascension is measured in hours, minutes, and seconds, with one hour equivalent to 15 degrees.

Declination is the angular distance of an object north or south of the celestial equator, measured in degrees.

![Ra_and_dec_on_celestial_sphere](/assets/img/2022-12-21-first-day-of-summer/Ra_and_dec_on_celestial_sphere.png)

<p align = "center"><b>Right Ascension and Declination</b></p>

The Sun's right ascension and declination change throughout the year due to the Earth's orbit around the Sun. The Sun's right ascension and declination are at their maximum at the summer solstice, which occurs around June 21st in the Northern Hemisphere. At this time, the Sun's right ascension is around 12 hours and its declination is at its maximum positive value of around 23.5 degrees. 

At the winter solstice, which occurs around December 21st in the Northern Hemisphere, the Sun's right ascension is around 18 hours and its declination is at its maximum negative value of around -23.5 degrees. At the spring and fall equinoxes, the Sun's right ascension is around 9 hours and its declination is 0 degrees.

It's worth noting that the Sun's right ascension and declination change slightly over time due to precession, a slow, cyclical motion of the Earth's axis that causes the celestial pole to trace out a small circle in the sky over a period of approximately 26,000 years.

The distance between the Earth and Sun varies according to this formula
$$
R_{ES} = 1.00014 - 0.01671 \cos g - 0.00014 \cos(2g)
$$
which is measured in [Astronomical Units](https://earthsky.org/space/what-is-the-astronomical-unit/) (au), the average distance from the Earth to the Sun (149,597,871 km). We also need the [Equation of Time](https://en.wikipedia.org/wiki/Equation_of_time) (in minutes),
$$
EoT = 4(L - \alpha)
$$
With this, we can calculate the subsolar position for any time. The subsolar latitude $\phi_S$ is the declination $\delta$, and the subsolar longitude is
$$
\lambda_S = -15(T_{GMT}-12+EoT/60)
$$
where $T_{GMT}$ is the [Greenwich Mean Time](https://time.is/GMT). 

## Azimuth and Elevation Angles

If your latitude and longitude coordinates are $(\phi_0,\lambda_0)$, and the Sun's latitude and longitude are $(\phi_S, \lambda_S)$ then the pointing toward the Sun is
$$
S = \begin{bmatrix}
\cos \phi_S \cos \lambda_S \\
\cos \phi_S \sin \lambda_S \\
\sin \phi_0 
\end{bmatrix}
$$
and the local upward pointing vector $V$ is 
$$
V = \begin{bmatrix}\cos \phi_0 \cos \lambda_0 \\
	\cos \phi_0 \sin \lambda_0 \\
	\sin \phi_0 \end{bmatrix}.
$$
Make both into unit vectors by $S = S/\|S\|$ and $V = V/\|V\|$.



The unit vector (after normalization) from your position towards the Sun is
$$
SV = \begin{bmatrix}
	\cos \phi_S \sin (\lambda_S - \lambda_0) \\    
	\cos \phi_0 \sin \phi_S - \sin \phi_0 \cos \phi_S \cos (\lambda_S - \lambda_0)\\    
	\sin \phi_0 \sin \phi_S + \cos \phi_0 \cos \phi_S \cos (\lambda_S - \lambda_0)
	\end{bmatrix}.
$$


The azimuth angle or the angle between North and the vector $SV$ towards the Sun can be found by taking the arctangent of the first two components of $SV$,
$$
Az = \tan^{-1} \left( \frac{SV[2]}{SV[1]} \right).
$$
The zenith angle is the arccosine of the third component. 
$$
Ze = \cos^{-1}(SV[3]).
$$
If the angle calculations are done in degrees, then the elevation angle is $El = 90 - Ze$ where $Ze$ is the zenith angle, and the elevation is the angle between your local horizon and the Sun.



Besides having a formula for the first day of Summer, the azimuth and elevation angles are much more useful for solar energy collection. To optimize the efficiency of a collector, you need to make the plane of the collector perpendicular to the direction towards the Sun, $S$. Often, it isn't practical to continuously match both the azimuth and elevation angles, so people often make corrections to just the elevation angle which still provides higher collection efficiency.

A [Pluto](https://plutojl.org/) notebook (in [Julia](https://julialang.org/)) to run these calculations is available on [Github](https://gist.github.com/XerxesZorgon/c0f35c26fda679172e58acfae396b2f5). You could extend the code to calculate the azimuth and elevation angles for an entire day, or you could plot a path in [OpenStreetMap](https://www.openstreetmap.org/#map=5/38.007/-95.844), and figure out where you'd need to be to directly under the Sun every day. The code does not correct for [refraction](https://en.wikipedia.org/wiki/Atmospheric_refraction), so you'd need to include that calculation if you want to collect solar energy.

Today, (21 Dec 2022),  the first day of summer in the Southern Hemisphere the code says that the Sun should be at the Tropic of Capricorn:

![subsolarpoint-lat-lon](/assets/img/2022-12-21-first-day-of-summer/subsolarpoint-lat-lon.png)

## The Anna Lemma

An [analemma](https://en.wikipedia.org/wiki/Analemma) is the pattern that the Sun makes over a year when viewed from the same location on the Earth. Jack Fishburn took this sequence of photographs at the Bell Laboratories in Murray Hill, NJ to create an analemma,

![lossy-page1-1713px-Analemma_fishburn.tif](/assets/img/2022-12-21-first-day-of-summer/lossy-page1-1713px-Analemma_fishburn.tif.jpg)

<p align = "center"><b>An Analemma</b></p>

Using the equations for azimuth and elevation, you could calculate the Sun's position to plot the analemma for your location. You might even be able to create an analemma with an online planetarium like [Stellarium](https://stellarium-web.org/). 

To make an analemma, you need to take a photo at exactly the same time (accounting for daylight savings time) throughout the year. If you take the photos at times separated by one-hour intervals, you'll get a wreath of analemmas,

![wreath-of-analemmas](/assets/img/2022-12-21-first-day-of-summer/wreath-of-analemmas.png)

<p align = "center"><b>Wreath of Analemmas</b></p>



## The Path to Summer

Now that we know how to find the subsolar point for any time of the year, we can map out a path to follow it. Should we walk, bike, or drive in an RV? It would be possible to walk because on average the distance is only about $29 \; km$, but walking that far every day would get tiresome pretty quickly. Biking might be more practical, or we could take it easy and get an RV or a camper van. 

In [Google Earth](https://earth.google.com/web/), you can turn on grid lines by clicking "Map Style" (second from last icon on the left side) and then "Turn on Gridlines" to show the Tropic of Cancer and Tropic of Capricorn. The most direct North-South path on land seems to be in eastern Africa, maybe starting in Egypt and ending in South Africa. The only other land route is through Central and South America, beginning in Mexico and ending in Chile.

Another option would be to go by boat. With the [Wharram Mana 24](https://www.wharram.com/self-build-boats/mana24), you could sail along the coast and at night pull up on the beach for an overnight camp. The [Pax](https://www.youtube.com/watch?v=KeJHlsgz7cw) is more comfortable (and check out the interior!) or you could get a [BeTriton](https://betriton.com/) combination bike/boat/camper. 

![mana-pax-z-triton](/assets/img/2022-12-21-first-day-of-summer/mana-pax-z-triton.png)

Now the options are to start upriver in Bangladesh, then along the coast of Myanmar... Ok, how about the East Coast of Africa? Start in Oman, then along the coast of Yemen, cross the oil tanker shipping lanes in the Gulf of Aden then along the coast of Somalia ... nope, nope, nope. The West coast of Africa wouldn't be too bad, but there's a long stretch from Liberia to Cameroon that runs mostly West to East, and we need to be moving South every day.

On the East coast of the Americas, you could start in the Bahamas and make your way down to the Turks and Caicos, then the Dominican Republic, over to Puerto Rico and follow the Leeward Islands to Trinidad and Tobago. Maybe not in a BeTriton with all that open-water sailing. Also, you'd likely be in the Caribbean right during the height of hurricane season.

How about the West coast? Start just North of Mazatlan, Mexico and it's a pretty nice ride South along the coast. You'd have to skip most of Panama because it curls Northward, but after that, it's smooth sailing all the way down the coast of Chile. You'll pass by Mejillones which looks pretty nice,

![Mejillones](/assets/img/2022-12-21-first-day-of-summer/Mejillones.jpg)

<p align = "center"><b>Mejillones, Chile</b></p>

and your last stop at the Tropic of Capricorn will be at Isla Santa Maria where the subsolar point and the Southern Hemisphere's longest day will coincide for the true first day of summer. Typical summer weather there is $15 - 20 \; \degree C$ or $59-68 \; \degree F$. Huh? You call that summer? Too much math just ruined a good six months at the beach.

## The Great Loop

Did you know that the Eastern third of the United States is an island? You can go completely around it in a boat. It's called the [Great Loop](https://www.greatloop.org/) and you can join a club that will help you navigate your way around. National Geographic says, ["The Great Loop is the epic U.S. adventure you've never heard of"](https://www.nationalgeographic.com/travel/article/great-loop-is-the-epic-us-adventure-you-have-never-heard-of). Maybe this would be a better way to spend the summer.

![GreatLoop](/assets/img/2022-12-21-first-day-of-summer/GreatLoop.png)

<p align = "center"><b>The Great Loop</b></p>

------

#### Image credits

Hero: [Children on the Beach](https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_Children_on_the_beach_(1873).jpg), Winslow Homer. Wikimedia Commons.

The Days Are Just Packed: [Calvin and Hobbes](https://calvinandhobbes.fandom.com/wiki/The_Days_are_Just_Packed), Bill Waterson, Apr. 11, 1991.

Solstice/Equinox: [Summer Solstice 2023: The First Day of Summer](https://www.almanac.com/content/first-day-summer-summer-solstice). [Catherine Boeckmann](https://www.almanac.com/author/catherine-boeckmann), Almanac, Oct. 21, 2023.

Summer/Winter Solstice, Subsolar Point: [Solstice](https://en.wikipedia.org/wiki/Solstice), Wikipedia. See also [What Is a Solstice?](https://scijinks.gov/solstice/), NOAA SciJinks.

Azimuth and Zenith Angles: [Estimating Solar Irradiance on Tilted Surface with Arbitrary Orientations and Tilt Angles](https://www.mdpi.com/1996-1073/12/8/1427). Hsu-Yung Chen et al., MDPI, Apr. 13, 2019.

Ecliptic Plane: [The ecliptic is the sun’s path in our sky](https://earthsky.org/astronomy-essentials/definition-ecliptic-what-is-the-ecliptic/). Scott Levine, EarthSky, Jun 18, 2023.

Right Ascension and Declination: [Right Ascension and Declination: Celestial Coordinates for Beginners](https://skyandtelescope.org/astronomy-resources/right-ascension-declination-celestial-coordinates/). Bob King, Sky & Telescope, Feb. 26, 2019.

An Analemma: [Analemma](https://en.wikipedia.org/wiki/Analemma) photo taken from 1998 to 1999 from Bell Laboratories, [Murray Hill](https://en.wikipedia.org/wiki/Murray_Hill,_New_Jersey). J. Fishburn.

Wreath of Analemmas: [Analemma](https://en.wikipedia.org/wiki/Analemma), Wikipedia.

Mejillones, Chile: [Get to know the tourist attractions of Mejillones](https://radiochilena.cl/conoce-los-atractivos-turistico-de-mejillones/). Tourism in Chile, Dec. 26, 2014.	

The Great Loop: [Great Loop](https://en.wikipedia.org/wiki/Great_Loop). Wikipedia.			

------

## References

[A solar azimuth formula that renders circumstantial treatment unnecessary without compromising mathematical rigor](https://www.sciencedirect.com/science/article/pii/S0960148121004031)

[Determination of optimal position of solar trough collector](https://pdf.sciencedirectassets.com/278653/1-s2.0-S1877705817X00258/1-s2.0-S1877705817327091/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLWVhc3QtMSJIMEYCIQCAn994QIbztX1qjAecZlf3yI1z7%2BZEvMX%2BC1v9U54%2BvAIhAI8Sle%2BrMXlcvUNg7hdTSqkhPF2jUJWLjCYb1QB3btsnKtUECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1IgwSKsvtM7tAAaOgMLcqqQRcObZGLZa5LP%2Frj82Yn%2BB08%2F8eBts9eb3Mvf%2FBW4cKbH%2BuomWSMkpcDCaA29euz42nCeTUDj4JXSk7ghM%2FVFtMh1B9wZ4dzXTcoo4lAbKF2TDguzQZIpju1pmNCHQjAmLNFzFvFcW0R%2FzkK0zTonj%2B4jq2GpbZimuEs40cx%2FP93HHUPV6xqG9bvlSHYmpYdfuZ%2F%2BhP2sNEZ9BhOEF4DaCeO4V6C8STScqrpMUh4aWhUdZN0a7miTIOd%2FLNafMzfpUj97P8FltuqykmrZ83%2BK3RP3J5mjPqKPCLQnL%2BKLWpAZLZxb5HZSl2JbvBvFrC7lW7yCOqalAkFalJbWKL%2FdudTlUXeDoVyecMqxGRPwKe1CKPvZd0%2FWpJ9U9gjm3bq9bgGvEcF2IkHTx3Vcynq5Fk9f21Wab87daHBGs%2Bs68pssvSBS5zr92MWljT6IRB8LXR70GRYDXXsdknmAJLUWd8soJGDiNgl20R%2FEZVhaZF1g3%2BwnY0HIe6%2FFyXkPuBc1kP2RrMZwAWwRat%2BAM%2Ff243szvaLo%2BzSme3FwHSMROWAkzd0vcl6jcOF0P0dGd263wynW1KtqcfvKtHakuM7BrVlwAiBs7cET43ZQHaGpJ7Co97TZ%2BM93mgd5phAH3ZMY7HfvtRHx7TAcxYKeq6nbLjTwjR3CpUd%2B4qoxPZ7b0hdqyf81HvQCq5F%2F7GY5AQmx1FmgzgfbiwONswCW8%2BYz%2FdPaLFWC1s%2BPp9MJC7jp0GOqgBfI2y3pLYTNcSV3HhWPPo7ittE8eKEAj7RlBmeMmXZo%2BJpJXbNMITQyRb62jvNK2kPd2ChK0o7umnsj%2F4uwC4KfODC%2Fd4GEFoj3e%2BRAlMBlyQWaEpdrOBTrbF%2B9Bjql85pBkBnl9bzJvN8BtA3qNcwsW4UzJ%2BQOFo3YCoyhhIsgQQVHij6g5rgZ84VKQ%2FSP6ZiGeB92nUAg9hPFYt7n4iFyMZ3UlbfiP8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221222T012823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY74ZMTSEM%2F20221222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8215844102474c9769e08bdfd3bce942378afa41001dc1688e9a8a77575bb072&hash=c228fb7d18c471d02770413bc2fc6e70f3b63a022c7f477ebbb74186afc78f84&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877705817327091&tid=spdf-dbd26849-1480-40ce-9294-2ad33e8b8907&sid=69c12ca62dcf9644444b5c06e048798eb7d5gxrqa&type=client&ua=5155065b5156575d0606&rr=77d51498ab46241f)

[Longitude, National Geographic](https://education.nationalgeographic.org/resource/longitude)

[Google Earth](https://earth.google.com/web/)

[Subsolar Point](https://en.wikipedia.org/wiki/Subsolar_point)

[Equation of time](https://en.wikipedia.org/wiki/Equation_of_time)

[Determination of Ecliptic Longitude](https://farside.ph.utexas.edu/books/Syntaxis/Almagest/node34.html)

[Ecliptic](https://en.wikipedia.org/wiki/Ecliptic)

[Ecliptic coordinate system](https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Spherical_coordinates)

[Obliquity of the ecliptic](https://glossary.ametsoc.org/wiki/Obliquity_of_the_ecliptic)

[Right Ascension](https://astronomy.swin.edu.au/cosmos/r/right+ascension)

[Solar azimuth angle](https://en.wikipedia.org/wiki/Solar_azimuth_angle)

[Position of the Sun](https://en.wikipedia.org/wiki/Position_of_the_Sun)

[Mean longitude](https://en.wikipedia.org/wiki/Mean_longitude)

[Right ascension](https://en.wikipedia.org/wiki/Right_ascension)

[Astronomical Calculations: Solar Coordinates](https://squarewidget.com/solar-coordinates/)

[NOAA Solar Calculator](https://gml.noaa.gov/grad/solcalc/)

[Subsolar Point](https://rl.se/subsolarpoint)

[Heavens Above](https://heavens-above.com/sun.aspx?lat=35.9288&lng=-79.0808&loc=Unnamed&alt=0&tz=EST) (Solar alt, Az, RA, Dec, Rng)

[The Sky Live](https://theskylive.com/sun-info)

[Day and Night World Map](https://www.timeanddate.com/worldclock/sunearth.php)

[Sky Marvels](https://www.skymarvels.com/infopages/vids/Earth%20-%20Sub-solar%20Point%20001.htm)

[Convert Right Ascension to HMS](https://www.vercalendario.info/en/how/convert-ra-degrees-hours.html)

## Code for this article

[SubSolarPoint.jl](https://gist.github.com/XerxesZorgon/c0f35c26fda679172e58acfae396b2f5#file-subsolarpoint-jl) - A Pluto.jl notebook to calculate the position of the subsolar point.
