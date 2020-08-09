# -*- coding: utf-8 -*-
"""
Estimates the optimal pandemic testing pool size                                            
Ref: https://asm.org/Articles/2020/July/COVID-19-Pool-Testing-Is-It-Time-to-Jump-In 
https://www.statnews.com/2020/06/26/pool-testing-covid-19/  

Created on Sun Aug  2 20:29:23 2020

@author: johnx
"""

from scipy.optimize import fsolve
import numpy as np
from matplotlib import pyplot as plt
from matplotlib import style
plt.style.use("ggplot")


def optPoolSize_Case_I(p):
    
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
    while dfn(n_max) < 0:
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
    n = list(map(optPoolSize_Case_I,p))
    
    # Number of tests required
    f = lambda N,n,p: N * (1/n + 1 - (1-p)**n)
    
    tests = [f(100,n[k],p[k]) for k in range(len(p))]
    
    # Plot pool sizes as a function of infection rate
    plt.figure()
    plt.plot(100*p,n)
    plt.xlim([0,20])
    plt.ylim([0,35])
    plt.xlabel('Infection rate (%)')
    plt.ylabel('Optimal pool size')
    plt.title('Epidemiological Pool Sizes')
    plt.show()
    
    # Plot tests required as a function of infection rate
    plt.figure()
    plt.plot(100*p,tests)
    plt.xlim([0,20])
    plt.ylim([0,100])
    plt.xlabel('Infection rate (%)')
    plt.ylabel('Number of tests')
    plt.title('Tests per 100 people')
    plt.show()    
    
    
if __name__ == "__main__": 
    plotOptPool([0.001, 0.2])