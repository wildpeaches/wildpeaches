---
title: The Wreck at Blossom and Sunset
subtitle: The Intersection of Poisson and Exponential Distributions 
author: John Peach
lede:
hero: 
  url: /assets/img/2020-08-01-blossom-and-sunset/Blossom-and-Sunset.png
  alt:
tags: [math,Poisson,Exponential]
keywords: [science, technology, engineering, mathematics, computing]
socialImg: /assets/img/2020-08-01-blossom-and-sunset/Blossom-and-Sunset.png
---

The town of Arlington repaved Sunset Road and installed new sidewalks all around. The block of Blossom between Sunset and Lennon had been unpaved for years because it was privately owned, but in 2020 the town paved it anyway. The neighborhood seemed much nicer after all the construction was done, but there was just one problem. There were no stop signs at the four-way intersection of Blossom and Sunset.

Jan and his family lived in the house right on the corner, and we lived in the blue house next door. We were watching the cars go by and realized that since there weren't any stop signs, everyone assumed they had the right-of-way no matter which direction they approached the intersection. Sooner or later there would be a huge wreck at the intersection of Blossom and Sunset. It seemed to us that we had two options. The first would be to inform someone in the town planning department about the serious omission. The second was to calculate the probability of a wreck. We chose option two.

## Time in the Intersection

Using [Google Earth](https://earth.google.com/web/search/45+Sunset+Road,+Arlington,+MA/@42.42767033,-71.1775864,57.47981609a,43.70107677d,35y,0h,0t,0r/data=CigiJgokCf-6pwPJgTRAEfy6pwPJgTTAGRgBWyhPVUFAIavHgqKy31DA) we can estimate the width of the intersection to be 24 feet. Assuming that cars in a residential neighborhood go about 25 mph, or 36.67 feet/second then the total time a car is in the intersection is 0.654 seconds. A handy conversion factor is that 60 mph is exactly 88 feet per second. A further simplification is that the car would only need to be in the same half of an intersection as another one, or they'd have a near miss but escape unscathed. This means that the exposed time in the intersection is just 1/3 of a second.

![sunset-and-blossom-google-earth](/assets/img/2020-08-01-blossom-and-sunset/sunset-and-blossom-google-earth.png)

<p align = "center"><b>Google Earth view of Blossom and Sunset</b></p>

I watched the intersection for 95 minutes collecting traffic data and found that 24 cars entered from Blossom and 14 from Sunset. 

## Poisson Distributions

Letting $\lambda$ be the average rate events occur, then the [Poisson Distribution](https://en.wikipedia.org/wiki/Poisson_distribution) gives the probability of $k$ events occurring in a fixed interval of time, $t$
$$
P(k \text{ events in time }t)= \frac{(\lambda t)^k e^{-\lambda t}}{k!},
$$
where $k! = k \cdot (k-1) \cdot (k-2) \cdots 2 \cdot 1$ is $k$ factorial. If $\lambda = 2.5$ then in some time interval $t$, we would expect two and a half events to occur on average. Events are discrete, though, so sometimes it might be that two events happen, and other times three happen. In fact, any non-negative integer number of events might occur, and the distribution (for $t = 1$) looks like this:

![poiss-dist](/assets/img/2020-08-01-blossom-and-sunset/poiss-dist.png)

About 25% of the time two events happen, and we'd expect one or three events roughly 20% of the time. There's even a reasonable chance that nothing will happen because the height of the bar for $k=0$ is about 8%. 

We need an estimate for the rate events occur to be able to apply the Poisson distribution. A car passing through the intersection is only exposed for 1/3 of a second, so during the time that I watched the intersection, there were
$$
95 \text{ mins} \times \frac{60 \text{ secs}}{\text{min}} \times \frac{3 \text{ intervals}}{\text{sec}} = 17100 \text{ intervals.}
$$
For Blossom, 24 cars entered the intersection so the rate is $\lambda_B = 24/17100 = 0.00140351$, and for Sunset the rate is $\lambda_S = 14/17100 = 0.0008187135.$ 

If a wreck is going to happen, two events need to occur simultaneously. A car needs to enter the intersection from Blossom at the same moment (1/3 second interval) that a car enters from Sunset. One way of thinking about the rate at which cars enter the intersection is to consider the rate as a probability. So, for Blossom, the probability that a car arrives is 24 observations divided by 17100 1/3-second long intervals. Since we're assuming independence of the events, then the probability of a crash is 
$$
\lambda_B \times \lambda_S = \lambda = \frac{24}{17100} \times \frac{14}{17100} = 1.491 \times 10^{-6}.
$$
The 17100 intervals represent 95 minutes of observation, but a more convenient period might be in days. Most of the traffic on Blossom and Sunset happens during daylight hours, usually between 8 AM and 4 PM since there's an elementary school a block away on Blossom. Since there are $8 \times 60 = 480$ minutes in these 8 hours, the number of intervals will be
$$
\frac{8 \text{ hrs}}{\text{day}} \times \frac{60 \text{ min}}{\text{ hr}} \times \frac{60 \text{ sec}}{\text{ min}}  \times \frac{3 \text{ intervals}}{\text{ sec}} = 86400 \frac{\text{intervals}}{\text{day}}.
$$
Now we can estimate the probability of a wreck happening sometime during a day using the formula for the Poisson distribution. The chance of one accident is
$$
P(k,\lambda,t) = P(1,1.491 \times 10^{-6}, 86400) = 0.09.
$$


Let's call the number of 1/3-second intervals in a day $n_I = 86400$. Then the probability of two accidents in the same day is,
$$
P(2,\lambda,n_I t) = 0.00446.
$$
Suppose we'd like to know the probability of one or more accidents at the intersection of Blossom and Sunset during the 8 hours. You'd have to sum up all of the probabilities for $k = 1,2,3, \dots$ to infinity. 

But, there's an easier way which is to calculate 
$$
P(0,\lambda,n_I) =  e^{-n_I \lambda} = 0.9055
$$
which is the probability that no accidents happen. Then the probability that one or more wrecks occur is $1 - P(0,\lambda,n_I) =  0.0945.$ To calculate the probability of an accident in 10 days, use $1 - P(0,\lambda,10 n_I) = 0.629$, and in 100 days, $1 - P(0,\lambda,100 n_I) = 0.99995.$ 

Hmmm. Maybe we should have mentioned something to someone.

![crash-prob](/assets/img/2020-08-01-blossom-and-sunset/crash-prob.png)

By day 20, the probability of at least one crash is over 80%. A bar chart of the probabilities of 0 - 8 crashes shows the chances of 1 or 2 wrecks to be over 25%, and 3 wrecks is about 18%. 

![crash-prob-day20](/assets/img/2020-08-01-blossom-and-sunset/crash-prob-day20.png)

## Exponential Distributions

[Exponential Distributions](https://en.wikipedia.org/wiki/Exponential_distribution) complement Poisson Distributions by giving the expected length of time between events. The exponential distribution function is
$$
P(\lambda,t) = \left\{ \begin{array}{ll} \lambda e^{-\lambda t} & t \geq 0 \\ 0 & t < 0   \end{array} \right.
$$
which looks like this for several values of the rate parameter $\lambda,$

![exp-dist](/assets/img/2020-08-01-blossom-and-sunset/exp-dist.png)

The cumulative exponential distribution is the area beneath the curve up to some time $t$. For $\lambda = 1$ and $t = 1$, the cumulative distribution is the area shown in yellow here. This area tells you the probability that an event will occur before $t = 1.$ The formula for the area is called the Cumulative Distribution Function (CDF),
$$
CDF(\lambda,t) = 1 - e^{-\lambda t}.
$$
![exp-dist-r=1](/assets/img/2020-08-01-blossom-and-sunset/exp-dist-r=1.png)

Suppose we'd like to estimate the probability of at least one crash in the next 10 days. It's just 
$$
CDF(\lambda, n_I t) = 1 - e^{-\lambda n_I t} = 1 - P(0,\lambda,10 n_I) = 0.629
$$
showing the relationship between the Poisson Distribution and the Exponential Distribution.

So why isn't the intersection of Blossom and Sunset littered with the detritus (Detroitus?) of destroyed automobiles? Since cars driving through the neighborhood don't go much more than 25 - 30 mph, there's time for drivers to react. Jamming on the brakes at the last moment is probably enough to separate the cars by more than the 1/3 second needed for a collision.

If you'd like to run this experiment for an intersection nearby, install the [Anaconda](https://www.anaconda.com/) platform and then start the [Navigator](https://docs.anaconda.com/free/navigator/index.html). 

![navigator](/assets/img/2020-08-01-blossom-and-sunset/navigator.png)

Launch [JupyterLab](https://jupyter.org/) and select the Python kernel. Save a copy of the [Blossom_and_Sunset.ipynb](https://gist.github.com/XerxesZorgon/16bd83e8c5ff0053b12ec40e8c6e8471) notebook locally, and then open it in JupyterLab. You can change the parameters in the notebook to fit your conditions, and then calculate the probability of a crash coming to a neighborhood near you!

------

#### Image credits

Hero: Google Street View

Google Earth: Overhead view of Blossom and Sunset

Anaconda: [Anaconda Navigator](https://www.anaconda.com/)