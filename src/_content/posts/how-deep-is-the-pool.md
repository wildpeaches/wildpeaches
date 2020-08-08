---
title: How deep is that pool?
subtitle: Figuring out COVID-19 testing
author: John Peach
permalink: /how-deep-is-that-pool/
date: 2020-08-07
tags: [math, covid-19]
---

Rapid testing of a large number of people is needed to control the COVID-19 pandemic. One way to do this is to apply pool testing where samples are taken from a large group of people and a test for the disease is applied to the combined sample. The American Society for Microbiology thinks that [it's time to jump in the pool](https://asm.org/Articles/2020/July/COVID-19-Pool-Testing-Is-It-Time-to-Jump-In) and [STAT agrees](https://www.statnews.com/2020/06/26/pool-testing-covid-19/). 

Here's an example of how pool testing works. Suppose the test requires a drawn blood sample. Then samples from say 50 people could be mixed together in a test tube and the test applied to that combined sample. If it comes back negative then we know that everyone in that group is not infected and with one test we've eliminated a large number of people from further testing. In cases where a large fraction of the population remains susceptible this can significantly reduce the number of tests needed.

On the other hand, if the test is positive then we know that at least one of the 50 people in the test pool is infected and we'll need another test to find out who among this group is infected. It would be efficient to split the original 50 into maybe five groups of 10 people and to do pool testing again on each of these smaller pools. But efficiency might get in the way of practicality. You'd have to either get everyone from the original group back to take more blood samples (and who wants that?) or you'd have to use partial samples at each step and keep track of who was in each subset of the original. Instead, let's say that everyone's sample is split into two—one pooled and one retained for retesting if the pool is positive. So, if the pool test indicates the presence of COVID-19 then the second half sample for everyone in that pool is retested.

But how do you decide how many people to include in each pool? If you include too many then you increase the chance that one or more of them is infected and you have to go back and test them all again anyway. If you make the pools too small then you might be running more tests than necessary. Even worse, until you start testing you don't really know what fraction of the population is infected so you might over or under estimate the background rate. How deep should you make that pool?

Let's say you want to test a population of $N$ people using pool sizes of $n$ where the probability of being infected is $p$. You'll begin by forming $P = N/n$ separate pools and of those maybe $\alpha P, (0 \leq \alpha \leq 1)$ of them will be positive so you'll need to do individual tests on $\alpha P n$ samples. The total number of tests run will be $P + \alpha P n$. What is the optimal value for $n$ as a function of $P$ and $p$?

What we need to do is to find the minimum of 
$$f(P,p) = P + \alpha P n = P (1 + \alpha n)$$
where $\alpha$ will be a function of the probability of a positive test. This is a Binomial distribution,
$$ \alpha(k,n,p) = Pr(k;n,p) = \binom{n}{k} p^k (1 - p)^{n-k} $$
for $k = 0,1, \ldots, n$. For our case, all we're concerned about is the case $k = 0$, $Pr(0;n,p) = (1-p)^n$ when the test returns a negative result, and the complement, $Pr(n,q) = 1 - q^n$ which is the case when at least one person in the pool tests positive and where $q = 1-p$. The function $f(P,p)$ is then
$$ f(P,p) = P \left( 1 + ( 1 - (1-p)^n ) n \right).$$
But, since $P = N/n$ we could just as easily make $f$ a function of $N,n$ and $p$
$$ f(N,n,p) =  N \left( \frac{1}{n} + 1 - (1-p)^n \right). $$
To recap, the term $1 - (1-p)^n$ comes from the fact that each person has a probability $p$ of being infected or $1-p$ of being virus free. We're assuming that everyone's chances of being infected are independent of everyone else, so the probability that all $n$ people in the pool are not infected is the product $(1-p)$ $n$ times, which gives $(1-p)^n$. But if one or more are infected then the test for that pool will fail which is the complement, or $1 - (1-p)^n$. Of course, people don't become infected independently of everyone else, but for this example we'll assume independence. It's possible that the pool could be carefully formed so that nobody had any direct interactions with anyone else in the pool.

Ok, so to find the number of tests required for a given infection rate $p$ means that we need to find the value of $n$ that makes $f(N,n,p)$ the smallest. A little bit of calculus here - we need to find $\frac{df}{dn} = 0$ for some value of $n$. I'll let Python's Sympy library do the heavy lifting.

In [1]:
```python
from sympy import *
from sympy.interactive import printing
printing.init_printing(use_latex = True)
from IPython.display import display
```

In [7]:
```python
n,p = symbols('n p')
```

In [8]:
```python
diff(1/n + 1 - (1-p)**n,n)
```
Out [8]:
$\displaystyle - \left(1 - p\right)^{n} \log{\left(1 - p \right)} - \frac{1}{n^{2}}$


In [9]:
```python
solve(diff(1/n + 1 - (1-p)**n,n) == 0,n)
```

Out [9]:
```python
[]
```

So this means that Sympy can't find an analytic solution, but we can solve it numerically.


In [16]:
```python
from scipy.optimize import fsolve
import numpy as np
from matplotlib import pyplot as plt
from matplotlib import style
plt.style.use("ggplot")


def optPoolSize(p):
    
    # The total number of tests required as a function of 
    # N: Total population size
    # n: Number of people in each pool
    # p: Probability that any person is infected
    # f(N,n,p) = N(1/n + 1 - (1-p)^n)
    # 
    # Want to find f'(N,n,p) = 0 for n given p
    # f'(N,n,p) = -(1-p)^n * log(1-p) - 1/n^2
    
    df = lambda n,p: -(1-p)**n * np.log(1-p) - 1/n**2
    
    # Convert to a function of n only
    dfn = lambda n: df(n,p)
    
    # Find an upper bound for n
    n_max = 10
    while dfn(n_max) < 0 and n_max < 100:
        n_max += 10
        
    # Optimal pool size
    n = fsolve(dfn,[1, n_max])
    return n[0]

def plotOptPool(pLim):
    # Probabilities
    nS = 50
    n0 = np.log10(pLim[0])
    n1 = np.log10(pLim[1])
    p = np.logspace(n0,n1,nS)
    
    
    # Optimal pool sizes
    n = list(map(optPoolSize,p))
    
    # Number of tests required
    f = lambda N,n,p: N * (1/n + 1 - (1-p)**n)
    
    tests = [f(100,n[k],p[k]) for k in range(len(p))]
    
    # Plot pool sizes as a function of infection rate
    fig1 = plt.figure()
    plt.plot(p,n)
    plt.xlabel('Infection rate')
    plt.ylabel('Optimal pool size')
    plt.title('Epidemiological Pool Sizes')
    plt.show()
    
    # Plot tests required as a function of infection rate
    fig2 = plt.figure()
    plt.plot(p,tests)
    plt.xlabel('Infection rate')
    plt.ylabel('Number of tests')
    plt.title('Tests per 100 people')
    plt.show()    
    
    
if __name__ == "__main__": 
    plotOptPool([0.001, 0.2])
```

![](/assets/img/how-deep-is-the-pool/pool-sizes.png){.mx-auto .blend-multiply}

![](/assets/img/how-deep-is-the-pool/tests-per-100.png){.mx-auto .blend-multiply}

Johns Hopkins University has been [tracking COVID-19 cases and testing](https://coronavirus.jhu.edu/testing/individual-states) which shows that the current positivity rate for the U.S. is about 7.5%, but there's also a [state-by-state breakdown](https://coronavirus.jhu.edu/testing/tracker/overview) which shows the positivity rates running from -4.6% to 20.9%. The negative positivity rate (does that even make sense?) is a result of how the scoring is done and the fact that reporting isn't fully available for all states. But what this shows is that at 7.5%, the optimal pool size is around 4 and we'll need 50 tests for every 100 people. So, sure we'll save half the number of tests, but it's not a huge savings. By the time the background rate is 20% it's hardly worth bothering with pool testing.

But here's a thought that might seem a bit counterintuitive at first. The problem is that we aren't testing enough. The reason that the positivity rates are so high is that there's a self-selection bias going on. People are showing up to be tested because they don't feel well so quite a few are in fact infected and that drives the positivity rates up. If we could get to the point that many more people could be tested, then most wouldn't be infected and it would make more sense to do pool testing.

![](/assets/img/how-deep-is-the-pool/testing-rates.png){.mx-auto .blend-multiply}
