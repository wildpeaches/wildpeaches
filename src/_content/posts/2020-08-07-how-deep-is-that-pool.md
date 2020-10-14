---
title: How deep is that pool?
subtitle: The mathematics of COVID-19 testing
author: John Peach
date: 2020-08-07
tags: [math, covid-19]
---

To control the COVID-19 pandemic requires rapid testing of a large number of people. One way to do this is to apply pool testing where a single test can be run on the combined samples taken from a group. [The American Society for Microbiology thinks it's time to jump in the pool](https://asm.org/Articles/2020/July/COVID-19-Pool-Testing-Is-It-Time-to-Jump-In) and [STAT agrees](https://www.statnews.com/2020/06/26/pool-testing-covid-19/).

Here's an example of how pool testing works. Suppose the test requires a drawn blood sample. Then samples from say 50 people could be mixed in a test tube and the test applied to the combined sample. If it comes back negative then we know that everyone in the group is not infected and with one test we've eliminated a large number of people from further testing. In cases where a large fraction of the population remains susceptible, this can reduce the number of tests needed.

On the other hand, if the test is positive then we know at least one of the 50 people in the test pool has been infected and we'll need a second test.

It would be efficient to split the original 50 into maybe five groups of 10 people and to do pool testing again on each of these smaller pools. But efficiency might get in the way of practicality. You'd have to either get everyone from the original group back to take more blood samples (and who wants that?) or you'd have to use partial samples at each step and keep track of who was in each subset of the original.

Usama Kadri from Cardiff University has developed a [linear algebra method](https://www.tandfonline.com/doi/full/10.1080/20476965.2020.1817801) that tests samples from the same person in different pools multiple times to identify infected people, but it requires automated testing methods that may not be available to many hospitals. You can read about his technique in the 7 Oct 2020 edition of [SciTechDaily](https://scitechdaily.com/simple-algebra-enables-faster-large-volume-covid-19-testing/). For now, I'll assume that at most two tests are run per person.

Instead, consider splitting everyone's sample into two - one pooled and one retained for retesting if the pool is positive. If the pool test indicates the presence of COVID-19 then we'll run a retest on the second half sample for everyone in the pool.

But how do you decide how many people to include in each pool? If you make the sample size too large then you increase the chance one or more of them is infected and you have to go back and test them all again anyway. If you make the pools too small then you might be running more tests than necessary.

Even worse, until you start testing you don't know what fraction of the population is infected so you might over or under estimate the background rate. How deep should you make the pool?

Let's say you want to test a population of $N$ people using pool sizes of $n$ people (the depth of the pool) where the probability of being infected is $p$. You'll begin by forming $P = N/n$ separate pools and of those, maybe $\alpha P, (0 \leq \alpha \leq 1)$ of them will be positive so you'll need to do individual tests on $\alpha P n$ samples. The total number of tests run will be $P + \alpha P n$. What is the optimal value for $n$ as a function of $P$ and $p$?

What we need to do is to find the minimum of the function $T(n,p)$ where $T$ represents the number of required tests,
$$
T(n,p) = P + \alpha P n = P (1 + \alpha n) = N \left( \frac{1}{n} + \alpha \right) 
$$
where $\alpha$ will be a function of the probability of a positive test. This is a Binomial distribution,
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

Suppose the test is 97% accurate, which seems on the surface pretty good. This means that if a person is infected the test will almost always be correct, and out of 100 tests, it will be wrong about 3 times. If the true infection rate is 1%, then out of 100 people only 1 will actually be infected and the test will likely correctly determine this. Of the remaining 99 people though, it will incorrectly say about 3 of them are infected when in fact, they are not.

So now it appears that 4 out of 100 or 4% are infected. Since we need to know $p$, the probability of infection, correctly to be able to set the depth of the pool $n$, in this case, we'd be off by 400%. Even worse, the accuracy of tests tends to decrease as the pool size increases. For this analysis though, we'll assume a perfect test.

Ok, so to find the number of tests required for a given infection rate $p$ means we need to find the value of $n$ that makes $T(n,p)$ the smallest.

![Pool size for p = 7.5%](/assets/img/how-deep-is-the-pool/Pool size for p = 7.5%.png)

A little bit of calculus here—we need to find
$$
\frac{dT(n,p)}{dn} = -(1-p)^n \log(1-p) - \frac{1}{n^2} = 0
$$
for some value of $n$. That is, we're looking for the point on the curve where the slope is zero which will indicate either a minimum, a maximum, or an inflection point. Without going into any more, it turns out these points are the minimum values we're looking for.

Solving $\frac{dT}{dn} = 0$ for various values of $p$ gives this plot: ([python code here](https://gist.github.com/JanDW/2d555feb2967fd7fb3bb7525e03c2506))

![Pool sizes](/assets/img/how-deep-is-the-pool/Pool sizes.png)

shows that for infection rates above about 1% the pool sizes are less than 10 people, and by the time the positivity is above 5% the pool size needs to drop to 5 people or fewer.

Once we have the optimal number of people per pool then for each infection probability $p$ we can calculate the number of required tests $T(n,p)$ shown here:

![Tests required](/assets/img/how-deep-is-the-pool/Tests required.png)

Johns Hopkins University has been tracking [COVID-19 cases and testing](https://coronavirus.jhu.edu/testing/individual-states) which shows the current positivity rate for the U.S. is about 7.5%, and there's also a [state-by-state breakdown](https://coronavirus.jhu.edu/testing/tracker/overview) which shows the positivity rates running from -4.6% to 20.9%. The negative positivity rate (does that even make sense?) is a result of how the scoring is done and the fact that reporting isn't fully available for all states. But what this shows is for a 7.5% positivity rate, the optimal pool size is around 4 and we'll need 50 tests for every 100 people. So, sure we'll save half the number of tests, but it's not going to get us a call from the Nobel Committee or a MacArthur Genius Grant. By the time the background rate is 20%, it's hardly worth bothering with pool testing.

But here's a thought that might seem a bit counterintuitive at first. The problem is we aren't testing enough. The reason the positivity rates are so high is that there's self-selection bias happening.

People are showing up to be tested because they don't feel well or think they may have been exposed, so many of them are infected which drives the positivity rates up. If we could get to the point where much of the general population is being tested, then most wouldn't be infected and it would make more sense to do pool testing.

This shows that to make COVID-19 pool testing worthwhile the test will need to be very accurate and we'll need to test a lot of people even if they have no reason to think that they may be sick or have been exposed.

<figure class="mt-12">
  <iframe title="Embed" src="https://coronavirus.jhu.edu/embed/testing/state-data/testing_per_state_US.html" width="736" height="466" allowfullscreen="" frameborder="no" style="max-width: 100%"></iframe>
  <figcaption>
  <small class="text-gray-600">Visualization by <a href="https://coronavirus.jhu.edu/testing/individual-states" rel="external">John Hopkins University &amp; Medicine &middot; Coronavirus Resource Center</a></small>
  </figcaption>
</figure>
