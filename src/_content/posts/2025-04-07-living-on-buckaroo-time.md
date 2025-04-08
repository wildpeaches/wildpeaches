---
title: Living on Buckaroo Time
subtitle: The Logic of Continuous Time Zones
author: John Peach
lede: Wherever you go, there you are.
hero: 
  url: /assets/img/2025-04-07-living-on-buckaroo-time/Buckaroo-Banzai.webp
  alt:
tags: [time zones, longitude, Android app, Buckaroo Banzai, continuous time]
keywords: [continuous time zones, longitude-based time, sundial time, Android development, Buckaroo Time]
software: ['android-studio', 'kotlin']
---

In [*A Brief History Of Time Zones*](https://geojango.com/blogs/explore-your-world/history-of-time-zones#:~:text=Sir%20Sanford%20Fleming%2C%20a%20Canadian,360%20degrees%20in%2024%20hours.) Michael Anderson explains that until the late 1800s every town kept time unique to the town. Visitors arriving  would find the clock tower to reset their watches to local time. Across the United States there were more than 300 town times, but in 1878 Canadian engineer Sir Sanford Fleming suggested dividing the Earth into 24 equal width time zones, each 15 degrees wide and spanning the length of an hour of Earth's rotation.

But there are problems with time zones. Could there be a better way? In the movie, *[The Adventures of Buckaroo Banzai Across the 8th Dimension](http://www.worldwatchonline.com/buckbio.htm)* Buckaroo said, 

> Wherever you go, there you are.

> Buckaroo Banzai - physicist, neurosurgeon, test pilot, and rock star - traveled across dimensions in his Oscillation Overthruster-equipped Jet Car. The son of a brilliant Japanese physicist and a mathematician mother, Banzai assembled a team of specialists known as the Hong Kong Cavaliers - scientists by day, rock musicians by night. From particle physics to high-speed vehicles, Buckaroo mastered multiple disciplines while fighting threats across the dimensional spectrum.

Well, I say, 

> No matter where you go, that's when you're there. 

I'll show you how to return to nineteenth century times using twenty-first century technology. Why limit ourselves to eight dimensions when we can live in an infinite dimensional space? Make the Space-Time Continuum Continuous Again! (MSTCCA!)

## The Trouble with Time Zones

What is this Space-Time Continuum Buckaroo Banzai nonsense all about? It's about the arbitrariness of how we define time and a modest proposal (in the best [Jonathan Swift](https://www.sparknotes.com/lit/modestproposal/summary/) sense) about how to fix it.

In [*Daylight Ravings Time*](https://dothemath.ucsd.edu/2025/03/daylight-ravings-time/) Tom Murphy rants about switching from standard time to daylight savings time which causes many people to lurch forward and backward in time twice a year. Except Arizona, Hawaii, and Puerto Rico don't switch, so if you're calling someone in one of those places you need to be aware of what time zone you're in relative to theirs. Some homes straddle a time zone so one partner might go to work an hour earlier than the other, or the kids might start school an hour different from their parents' work schedules.

Murphy ends his rant with,

> The point is: nature is not rigid. Seasons happen. We might consider gracefully bending with the seasons, rather than pretending that the universe lurches to our capricious definition of time.

Here's a map of world time zones:

![Time_Zones](/assets/img/2025-04-07-living-on-buckaroo-time/Time_Zones.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>World Time Zones</b></p></h3>

Look at Greenland manspreading itself across six time zones, and Iceland deciding to move itself into the next time over. In South America, you can take a step West and be an hour earlier. To avoid complications, the International Date Line wanders like a drunk around land masses and islands. It's five o'clock everywhere. 

## UTC and GMT

[Coordinated Universal Time](https://www.timeanddate.com/time/aboututc.html) (UTC) is used as a time standard around the world to synchronize times [relative to UTC](https://www.timeanddate.com/time/utc-offsets.html). One time zone to the East of UTC is UTC +1, and one time zone to the West is UTC -1. You might think that Coordinated Universal Time would have CUT as an abbreviation, or maybe Temps Universel Coordonné (TUC) if spoken in French. But no, UTC is the standard abbreviation for purely arbitrary reasons.

 [Greenwich Mean Time](https://www.timeanddate.com/time/zones/gmt) (GMT) is the time at the Royal Observatory in Greenwich, England. Except when they switch to British Summer Time (BST). Then the Royal Observatory stops observing Greenwich Mean Time for a few months because GMT doesn't have daylight savings.

![observatory-greenwich](/assets/img/2025-04-07-living-on-buckaroo-time/observatory-greenwich.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Greenwich Observatory</b></p></h3>

To clear everything up, GMT is a time zone, except when it isn't and UTC is not an abbreviation for anything but is the world's standard time. A great circle drawn from the North Pole to the South Pole through this particular building is the Prime Meridian and is the basis for Greenwich Mean Time also known as [Zulu time](https://www.timeanddate.com/time/zones/z), or UTC +0.

## A Modest Proposal

In [*The First Day of Summer Every Day,*](https://wildpeaches.xyz/blog/the-first-day-of-summer-every-day/) we showed how to sail from the Tropic of Cancer to the Tropic of Capricorn so that the sun would be directly overhead at some time every day. The point on the Earth where this happens is called the subsolar point. So you get all set to be exactly at the subsolar point, expecting to be there at noon. But, time zones are about an hour wide except when they aren't, and you might be sailing past an island that got moved into a different zone, so you're an hour or two early or late.

Here's a modest proposal - why not make time continuous with longitude? The subsolar point at noon every day would be exactly 12:00 PM. Another way to think about this is that the subsolar point travels around the Earth once a day and 12:00 PM is wherever the subsolar point is at any time. You don't have to be at the subsolar point to experience noon every day, though. Your noon is when the sun passes your longitude. 

Using this method to set the time of day means that all time zones are eliminated, and there's no need to switch from standard time to daylight savings time. People who live in or near one time zone and routinely travel across the border into another time zone wouldn't have to keep track of a time change twice a day. 

The small disadvantage to this proposal is that time changes continuously moving East and West. At latitude $40 \degree$ (approximately New York City), a 60-mile commute directly East or West is about $1.13 \degree$ change in longitude. Since there are $360 \degree$ in a circle and $86400$ seconds in a day, your commute would add or subtract about four and a half minutes. You'll be stuck in traffic longer than that. 

Well, another disadvantage is that you need to have a clock that changes time with your location, and you'll have to convince everyone else to switch to the new zoneless time. Some things like aircraft or financial systems might work better if internal clocks were linked to UTC, but this would be easy to implement. Broadcasts might also be set to UTC so shows would start at times previously thought of as the middle of time zones.

## To the Eighth Dimension and Beyond

Trying to keep track of both time and longitude would be tricky, except that phones have both features. I have an Android phone, so I'll show you how to build an app for that. If you have an iPhone, the code will be different, but the math will be the same.

The components of the program are:

- GPS location 
- Current UTC time
- Calculation of "sundial time" from latitude and UTC. Sundial time is another way of expressing time as a function of longitude.
- A display showing Buckaroo Time

Using GPS location and UTC time, we can find the longitude-dependent time with the [*equation of time*](https://en.wikipedia.org/wiki/Equation_of_time) where $\Delta t_{ey}$ is the discrepancy between [apparent solar time](https://en.wikipedia.org/wiki/Solar_time#Apparent_solar_time) as we observe the position of the sun, and mean solar time which represents the position of the sun as if it moved in a constant, uniform rate.
$$
\begin{aligned}
\Delta t_{ey} &= -7.659 \sin(D) + 9.863 \sin(2D + 3.5932) \\
D &= 6.62004077 + 0.01720197(365.25(y-2000)+d)
\end{aligned}
$$
where $d$ is the number of days since January 1st of the current year, $y$. 

The difference between solar time using the sun's position in the sky and clock time can be $\pm 16$ minutes through the year due to:

- The Earth's elliptical orbit eccentricity causes the Earth to move faster when it's closer to the Sun (see [Kepler's Laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/#:~:text=Kepler's%20Laws%20of%20Planetary%20Motion,-The%20story%20of&text=They%20describe%20how%20(1)%20planets,the%20size%20of%20its%20orbit.)),
- The tilt of the Earth's axis or obliquity causes the Sun's apparent position in the sky to move faster or slower as the seasons progress.

![EquationofTimeandAnalemma](/assets/img/2025-04-07-living-on-buckaroo-time/EquationofTimeandAnalemma.gif)

<h3 style = ”font-size:14px; ”<p align = "center"><b>The Equation of Time</b></p></h3>

## Understanding the Code

The first step is to download and install [Android Studio](https://developer.android.com/studio). Google recommends using [Kotlin](https://kotlinlang.org/) for Android apps, and it can be used for iPhones as well. 

When you start Android Studio, it will ask for the name of the project such as "Buckaroo Time" and will create a repository for it. The key function in the *Buckaroo Time* app is [MainActivity.kt](https://gist.github.com/XerxesZorgon/a8a728ce10bef894f3f1c53bdc532c36) which you will need to download and save in the `kotlin+java` directory. Android Studio will also create a function `AndroidManifest.xml` and you'll need to add the [permission elements](https://developer.android.com/guide/topics/manifest/uses-permission-element)

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

that allows the app access to the phone's GPS. 

The code accesses the phone GPS location with the [`FusedLocationProviderClient`](https://developer.android.com/develop/sensors-and-location/location/retrieve-current) and [`locationservices`](https://developers.google.com/android/reference/com/google/android/gms/location/LocationServices) functions, and the UTC time with Java `ZoneOffset` and `ZonedDateTime` functions.

In `MainActivity.kt` the function `calculateSolarTime` uses the phone clock and UTC to get the local time zone (including Standard or Daylight Savings Time) and calls the `equationOfTime` function to determine local solar time.

Load the `MainActivity.kt` file and click the run button at the top of the screen to start the app, which should look something like this:

![buckaroo-time-app](/assets/img/2025-04-07-living-on-buckaroo-time/buckaroo-time-app.webp)



Unless you're in the middle of your time zone and on Standard Time, there will be a discrepancy between Buckaroo Time and the time displayed on your computer, which shows the difference between the time we call noon and the time the sun will be closest to overhead in the sky.

## Possible next steps

Here are a few ideas for extending this app if you'd like to try continuous time for your phone:

- Check the equation of time function by writing it in another language. Input the time and longitude to see how well it matches Buckaroo Time.
- Add UTC time as part of the display.
- Input longitude as a second display to be able to arrange calls to alternate times and longitudes. With this extension, video conference meetings around the world could be coordinated. The start times might seem a little odd, but people would get used to this slight inconvenience.
- Convert the app to use on a watch with [Wear OS](https://developer.android.com/wear).
- Improve the user interface (UI) with [Jetpack Compose](https://developer.android.com/develop/ui/compose/documentation).
- Load the code into your phone and test it.

Another option would be to throw away your phone and clocks, move to Costa Rica, surf all day, and watch [*The Adventures of Buckaroo Banzai Across the Eighth Dimension*](https://pluto.tv/on-demand/movies/the-adventures-of-buckaroo-banzai-1-1?utm_medium=textsearch&utm_source=google) while sipping margaritas in the evening.

![santa-teresa-surfing-costa-rica](/assets/img/2025-04-07-living-on-buckaroo-time/santa-teresa-surfing-costa-rica.webp)

<h3 style = ”font-size:14px; ”<p align = "center"><b>Costa Rica Surfing</b></p></h3>

## Image credits

- Hero: [Dr. Buckaroo Banzai – D20 NPC](https://hamell.net/dr-buckaroo-banzai-d20-npc/), Rick, July 10, 2011.
- Time Zone Map: *[Your Complete Guide to Understanding World Time Zone](https://www.theendlessj.com/blog/general-travel-information/your-complete-guide-to-understanding-world-time-zone)*,  Jeff Yelton, December 17, 2020.
- [Animation showing equation of time](https://commons.wikimedia.org/w/index.php?curid=6913793) and [analemma](https://en.wikipedia.org/wiki/Analemma) path over one year. Rob Cook.
- [Greenwich Observatory](https://www.eastwoodobservatory.co.uk/eastwoods-astronomical-connection/): Eastwood's Astronomical Connection, Rosie, Eastwood Observatory, June 30, 2022.
- Buckaroo Time: Android Studio.
- [Santa Teresa's Beach Bliss Costa Rica](https://www.entercostarica.com/vacations/surfing/ride-the-waves), Pacific Trade Winds. 

## Code for this article

Download [MainActivity.kt](https://gist.github.com/XerxesZorgon/a8a728ce10bef894f3f1c53bdc532c36) for the [Android Studio](https://developer.android.com/studio) Buckaroo Time app. You will also need to add these two lines to AndroidManifest.xml:

```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

## References and further reading

- Anderson, M. *[A Brief History Of Time Zones](https://geojango.com/blogs/explore-your-world/history-of-time-zones)*. 
- Buckle, A. *[Time Zones: A Brief History](https://www.timeanddate.com/time/time-zones-history.html).* 
- K. Higgins, D. Miner, C.N. Smith, D.B. Sullivan, [*The Science of Timekeeping.*](https://www.nist.gov/pml/time-and-frequency-division/popular-links/walk-through-time) NIST. June 25, 2019.
- Ottewell, G. [*What is the equation of time? And what is noon, for you?*](https://earthsky.org/earth/equation-of-time-why-times-vary-for-your-high-noon/) *EarthSky*. June 18, 2024. 
- [*What is the international date line?*](https://oceanservice.noaa.gov/facts/international-date-line.html) NOAA. June 16, 2024.
- Bikos, K. [*What Is Solar Noon?*](https://www.timeanddate.com/astronomy/solar-noon.html) TimeAndDate. 
- Downing, M. [*One Hundred Years Later, the Madness of Daylight Saving Time Endures.*](https://www.smithsonianmag.com/history/100-years-later-madness-daylight-saving-time-endures-180968435/) *Smithsonian Magazine*. March 9, 2018.
- [Kochetkova](https://www.kaspersky.co.in/blog/author/kate/), K. *[Navigation at sea: How we found our way a long time ago, and how we do it now](https://www.kaspersky.co.in/blog/navigation-at-sea-how-we-found-our-way-a-long-time-ago-and-how-we-do-it-now/6071/).* kaspersky daily. June 1, 2016.
- Mishra, A. *[Location-Based Services in Android.](https://www.scaler.com/topics/android/location-based-services-in-android/)* Scaler Topics. 18 Jan 2024.
- [*GPS Accuracy.*](https://www.gps.gov/systems/gps/performance/accuracy/) GPS.gov. 
- Brown, L. [*How railroads inspired the creation of time zones.*](https://www.bbc.com/travel/article/20241115-how-railroads-inspired-the-creation-of-time-zones) BBC. 18 November, 2024.
- *[Orbits and Kepler’s Laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/).* NASA Science Editorial Team, May 02, 2024.
- [*History of Time Zones and Daylight Saving Time (DST).*](https://www.bts.gov/latch) Bureau of Transportation Statistics, February 21, 2021. 
- *[Develop Android apps with Kotlin.](https://developer.android.com/kotlin)* Android Developers. 
