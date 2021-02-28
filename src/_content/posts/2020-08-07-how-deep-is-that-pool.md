---
title: How Deep Is That Pool?
subtitle: The Mathematics of COVID-19 Testing
author: John Peach
date: 2020-08-07
tags: [math, covid-19]
---

To control the COVID-19 pandemic requires rapid testing of many people. One way to do this is to perform a single test on the combined samples taken from a group of people, called pool testing. [The American Society for Microbiology thinks it's time to jump in the pool](https://asm.org/Articles/2020/July/COVID-19-Pool-Testing-Is-It-Time-to-Jump-In) and [STAT agrees](https://www.statnews.com/2020/06/26/pool-testing-covid-19/).

## How pool testing works

Here's an example of how pool testing works. Suppose the test requires a drawn blood sample. If the combined sample from a group of people comes back negative then with one test we've eliminated everyone in the group from further testing. In cases where a large fraction of the population remains susceptible, this can reduce the number of tests needed.

On the other hand, if the test is positive then we know at least one of the people in the test pool has been infected. In that case, we'll need to run a second test.

Suppose we assign 50 people in each pool. It would be efficient to split the original 50 into something like five groups of 10 people and to do pool testing again on each of these smaller pools. But then you'd have to either get everyone from the original group back to take more blood samples (and who wants that?), or you'd have to use partial samples at each step and keep track of who was in each subset of the original.

Instead, consider splitting everyone's sample into two - one pooled and one retained for retesting if the pool is positive. If the pool test indicates the presence of COVID-19 then we'll run a retest on the second half sample for everyone in the pool. The [CDC](https://www.cdc.gov/coronavirus/2019-ncov/lab/pooling-procedures.html) recommends this procedure,

"If a pooled test result is negative, then all specimens can be presumed negative with the single test. If the test result is positive or indeterminate, then all the specimens in the pool need to be retested individually. The advantages of this two-stage specimen pooling strategy include preserving testing reagents and resources, reducing the amount of time required to test large numbers of specimens, and lowering the overall cost of testing."

But how do you decide how many people to include in each pool? If you make the sample size too large then you increase the chance one or more of them is infected and you have to go back and test them all again anyway. If you make the pools too small then you might be running more tests than necessary.

Even worse, until you start testing you don't know what fraction of the population is infected so you might over or under estimate the background rate. How deep should you make the pool?

## Pool probabilities

Let's say you want to test a population of $N$ people using pool sizes of $n$ people (the depth of the pool) where the probability of being infected is $p$. You'll begin by forming $P = N/n$ pools (with some rounding if $n$ doesn't go into $N$ evenly). Of those, some fraction $\alpha \; (0 \leq \alpha \leq 1)$ of them will be positive. Again, ignoring rounding $\alpha P$ pools will be positive, so you'll need to retest $\alpha P n$ individual samples. In other words, the total number of tests run will be $P + \alpha P n$. What is the optimal value for $n$ as a function of $P$ and $p$?

What we need to do is to find the minimum of the function $T(n,p)$ where $T$ represents the number of required tests,

$$
T(n,p) = P + \alpha P n = P (1 + \alpha n) = N \left( \frac{1}{n} + \alpha \right)
$$

where $\alpha$ will be a function of the probability of a positive test. This is a [Binomial distribution](https.//en.m.wikipedia.org/wiki/Binomial_distribution),

$$
\alpha(k,n,p) = Pr(k;n,p) = \binom{n}{k} p^k (1 - p)^{n-k}
$$

for $k = 0,1, \ldots, n$ which gives the probability of $k$ failures in $n$ tests when the probability of failure (infection) for a single individual is $p$.

For our case, all we're concerned about is the case $k = 0$, $Pr(0;n,p) = (1-p)^n$ when the test returns a negative result since $1-p$ is the probability someone is not infected and $(1-p)^n$ means all $n$ people in the pool test negative.

The test function $T$ is then

$$
 T(n,p) = \frac{N}{n} \left( 1 + ( 1 - (1-p)^n ) n \right)
$$

or

$$
T(n,p) =  N \left( \frac{1}{n} + 1 - (1-p)^n \right).
$$

To recap, the term $1 - (1-p)^n$ comes from the fact that each person has a probability $p$ of being infected or $1-p$ of being virus-free. We're assuming everyone's chances of being infected are independent of everyone else, so the probability that all $n$ people in the pool are not infected is the product $(1-p)$ $n$ times, which gives $(1-p)^n$. But if one or more are infected then the test for that pool will fail, which is the complement, or $1 - (1-p)^n$.

Of course, people don't become infected independently of everyone else, but for this example, we'll assume independence. We're also assuming the tests are perfect, which they aren't. This can make a big difference to the estimate of infection rate.

Suppose the test is 97% accurate, which seems pretty good. This means that if a person is infected the test will almost always be correct, and out of 100 tests, it will be wrong about 3 times. If the true infection rate is 1%, then out of 100 people only 1 will actually be infected and the test will likely correctly determine this. Of the remaining 99 people though, it will incorrectly say about 3 of them are infected when in fact, they are not.

So now it appears that 4 out of 100 or 4% are infected. Since we need to know the probability of infection $p$ correctly to be able to set the depth of the pool $n$, in this case, we'd be off by 400%. Even worse, the accuracy of tests tends to decrease as the pool size increases. For this analysis though, we'll assume a perfect test.

To find the number of tests required for a given infection rate $p$ means we need to find the value of $n$ that makes $T(n,p)$ the smallest.

![Pool size for p = 7.5%](/assets/img/how-deep-is-the-pool/pool-size-p-seven-half.svg){.blend-multiply}

## Optimum pool sizes

A little calculus here—we need to find

$$
\frac{dT(n,p)}{dn} = -(1-p)^n \log(1-p) - \frac{1}{n^2} = 0
$$

for some value of $n$. That is, we're looking for the point on the curve where the slope is zero which will indicate either a minimum, a maximum, or an inflection point. Without going into any more, it turns out these points are the minimum values we're looking for.

Solving $\frac{dT}{dn} = 0$ for various values of $p$ gives this plot: ([python code here](https://gist.github.com/JanDW/2d555feb2967fd7fb3bb7525e03c2506))

![Pool sizes](/assets/img/how-deep-is-the-pool/pool-sizes.svg){.blend-multiply}

shows that for infection rates above about 1% the pool sizes are less than 10 people, and by the time the positivity is above 5% the pool size needs to drop to 5 people or fewer.

Once we have the optimal number of people per pool then for each infection probability $p$ we can calculate the number of required tests $T(n,p)$ shown here:

![Tests required](/assets/img/how-deep-is-the-pool/tests-required.svg){.blend-multiply}

If you'd like a review of derivatives Grant Sanderson's ["Derivative formulas through geometry"](https://www.youtube.com/watch?v=S0_qX4VJhMQ) video is a very good start and is part of his [The Essence of Calculus](https://www.youtube.com/watch?v=WUvTyaaNkzM) series. A complete calculus course is also available from Khan Academy's [Calculus I](https://www.khanacademy.org/math/calculus-1).

## The need for more testing

Johns Hopkins University has been tracking [COVID-19 cases and testing](https://coronavirus.jhu.edu/testing/individual-states) which shows the current positivity rate for the U.S. is about 7.5% (as of August 7th), and there's also a [state-by-state breakdown](https://coronavirus.jhu.edu/testing/tracker/overview) which shows the positivity rates running from -4.6% to 20.9%. The negative positivity rate (does that even make sense?) is a result of how the scoring is done and the fact that reporting isn't fully available for all states. But what this shows is for a 7.5% positivity rate, the optimal pool size is around 4 and we'll need 50 tests for every 100 people. So, sure we'll save half the number of tests, but it's not a big reduction. By the time the background rate is 20%, it's hardly worth bothering with pool testing.

But here's a thought that might seem a bit counterintuitive at first. The problem is we aren't testing enough. The reason the positivity rates are so high is that there's self-selection bias happening.

People ask to be tested because they don't feel well or think they may have been exposed. Many of them are infected which drives the positivity rates up. If we could get to the point where much of the general population is being tested, then most of the people being tested wouldn't be infected and it would make more sense to do pool testing.

This shows that to make COVID-19 pool testing worthwhile the test will need to be very accurate and we'll need to test a lot of people even if they have no reason to think that they may be sick or have been exposed.

<figure class="my-12">
  <iframe title="Embed" src="https://coronavirus.jhu.edu/embed/testing/state-data/testing_per_state_US.html" width="736" height="466" allowfullscreen="" frameborder="no" style="max-width: 100%" class="panel"></iframe>
  <figcaption>
  <small class="text-gray-600">Visualization by <a href="https://coronavirus.jhu.edu/testing/individual-states" rel="external">John Hopkins University &amp; Medicine &middot; Coronavirus Resource Center</a></small>
  </figcaption>
</figure>

Usama Kadri from Cardiff University has developed a [linear algebra method](https://www.tandfonline.com/doi/full/10.1080/20476965.2020.1817801) that tests samples from the same person in different pools multiple times to identify infected people, but it requires automated testing methods that may not be available to many hospitals. You can read about his technique in the 7 Oct 2020 edition of [SciTechDaily](https://scitechdaily.com/simple-algebra-enables-faster-large-volume-covid-19-testing/).
