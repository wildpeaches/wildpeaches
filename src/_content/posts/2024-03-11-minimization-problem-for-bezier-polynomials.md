---
title: A Minimization Problem for Bezier Polynomials
subtitle: Using Large Language Models for writing code
author: John Peach
lede:
hero:
  url: /assets/img/2024-03-11-minimization-problem-for-bezier-polynomials/math-to-code.webp
  alt:
tags: [math]
keywords: [Bezier polynomials, curve fitting, Large Language Models]
software: ['python']
socialImg: /assets/img/2024-03-11-minimization-problem-for-bezier-polynomials/math-to-code.webp
---

[Home](https://wildpeaches.github.io/)

## Introduction

In the article, [_Yacht Design with Mathematics_](https://wildpeaches.xyz/blog/yacht-design-with-mathematics/) we showed how to use Bezier polynomials to approximate curves in $\mathbb{R}^2$, but getting a good fit to the curve meant manipulating the positions of the control points by hand until you were satisfied with the approximation. Optimization problems have been solved by computers for decades, and this is one that seems should have a solution.

The first problem, though, is that we don't know where the control points $P$ should be, except that the first and last control points are the same as the first and last points of the curve $Q$. The second problem is that when you generate the curve you need to vary the parameter $t$ from $0$ to $1$. See the gif labeled "Bezier Curve" which shows the evolution of the Bezier polynomial as a function of $t$. When you select points along the curve there's no guarantee that those points are evenly spread out values of $t$.

So, we need to optimize both $P$ and $t$ simultaneously, and while it's conceptually easy to understand, turning it into useful code is an entirely different issue. In fact, solving the problem of converting mathematics into working code is the goal of [_The Coder_](https://euraika-sciences.github.io/the-coder/) in our project [_eurAIka_.](https://euraika-sciences.github.io/) There have been attempts to solve the problem of optimally fitting Bezier polynomials to curves such as Tim Pastva's thesis, [_Bezier Curve Fitting_](https://apps.dtic.mil/sti/tr/pdf/ADA350611.pdf), but I wondered if another approach might work.

I put the problem to several online Large Language Models: [Anthropic's Claude](https://www.anthropic.com/claude), [Poe](https://poe.com/login), [You.com](https://you.com/), [ChatGPT](https://chat.openai.com/auth/login), and in honor of [Pi Day](https://www.jpl.nasa.gov/edu/events/2024/3/7/celebrate-pi-day-with-nasa/), [Pi](https://pi.ai/onboarding). After giving each of the first four the problem statement, I realized that I'd typed in the definition of the matrix $A$ as $A = [t^{m-1} t^{m-2} \cdots t^0]$ using the variable $m$ where I should have written it with $p$, or at least defined the matrix $P$ as $m \times 2$​.

![pi-day](/assets/img/2024-03-11-minimization-problem-for-bezier-polynomials/pi-day.webp)

<p align = "center"><b>Fake "Pi Day" Holiday</b></p>

I told each AI assistant that I'd made the error, and each apologized for not understanding the problem correctly (not their fault!) and made corrections. However, I noticed that Poe gave exactly the same answer both times, and after reading through carefully, I realized that it had figured out that the parameter $p$​ was a required input the first time. You.com also caught the error and fixed it in the first response.

So, why do these Large Language Models seem to work so well? A big part of the answer in this case is that I asked for Python code and there are a lot of examples to use as a starting point. It's easy to think that they are somehow actually "intelligent" and to anthropomorphize them. In reality, they are much closer to the autocomplete function used in emails and texts on your phone. I'm not convinced that they are getting close to true Artificial General Intelligence (AGI) yet.

I haven't tried any of these solutions yet, and it may be better to alternate the optimization of $P$ and $t$ until convergence, so there's still work to do, but it appears to be a promising way to go from the mathematical statement of a problem to working code.

## The Problem Statement

This is the initial statement with the error in the definition of matrix $A$:

> Let $Q$ be an ordered sequence of $n$ points in $\mathbb{R}^2$ and $t \in [0,1]$ be a monotonically increasing vector of length $n$ such that $t_0 = 0$ and $t_{n-1} = 1.$ Define array $A$ to be the Vandermonde matrix formed from powers of $t$, $A = [t^{m-1} t^{m-2} \cdots t^0]$. Find the $p \times 2$ array $P$ that minimizes $\lVert AP - Q \lVert^2$ with the property that the first and last rows of $P$ are identical to the first and last rows of $Q$. A good initial estimate for $P$ is to construct $t$ uniformly in $[0,1]$ and solve for $P$ with the pseudoinverse of $A$, $P \approx (A^TA)^{-1}(A^Q)$, but this will be inexact because the true values of $t$ are unknown. Write a Python function to solve this problem, minimizing over both $P$ and $t$.

After seeing the responses, I told each (except Pi) that I'd made a mistake:

> I made an error in the definition of matrix $A$, which should have dimensions $n \times p$ so that the product $AP$ has dimensions $n \times 2$ to be compatible with the dimensions of $Q$. Thus, $A = [t^{p-1} t^{p-2} \cdots t^0]$, and the value of the scalar $p$​ should be an input parameter to the problem.

and added this line to the original problem:

> The matrix $Q$ and the value of the scalar $p$​ should be input parameters to the problem.

and here are the results from each LLM:

---

## Claude

To solve this problem, we can use an optimization technique such as gradient descent or a non-linear least-squares solver. Here's a Python implementation using the `scipy.optimize.least_squares` function:

```python
import numpy as np
from scipy.optimize import least_squares

def solve_vandermonde_problem(Q, p):
    n, _ = Q.shape

    # Define the objective function to minimize
    def objective(x):
        P = x[:p * 2].reshape(p, 2)
        t = x[p * 2:]

        # Construct the Vandermonde matrix
        A = np.vander(t, p)

        # Enforce the first and last rows of P to be equal to the first and last rows of Q
        P = np.vstack((Q[0], P, Q[-1]))

        # Compute the residuals
        residuals = (A @ P.T - Q.T).ravel()

        return residuals

    # Set up the initial guess
    t0 = np.linspace(0, 1, n)
    P0 = np.linalg.pinv(np.vander(t0, p)) @ Q.T
    P0 = P0.T[1:-1]  # Remove the first and last rows
    x0 = np.concatenate((P0.ravel(), t0))

    # Solve the optimization problem
    result = least_squares(objective, x0)
    x_opt = result.x

    # Extract the optimized P and t from the solution
    P_opt = x_opt[:p * 2].reshape(p, 2)
    P_opt = np.vstack((Q[0], P_opt, Q[-1]))
    t_opt = x_opt[p * 2:]

    return P_opt, t_opt
```

Here's how the `solve_vandermonde_problem` function works:

1. The function takes an array `Q` representing the ordered sequence of `n` points in `ℝ^2`.
2. It computes the degree `p` of the polynomial based on the number of points `n` (excluding the first and last points).
3. The objective function `objective` is defined to compute the residuals between `AP` and `Q`, where `A` is the Vandermonde matrix constructed from the vector `t`.
4. The initial guess `x0` is constructed by solving for `P` using the pseudoinverse of the Vandermonde matrix with a uniform `t` vector, and then concatenating the flattened `P` and `t`.
5. The `scipy.optimize.least_squares` function is called with the objective function and the initial guess `x0` to find the optimal solution `x_opt`.
6. The optimized values of `P` and `t` are extracted from `x_opt`.
7. The function returns the optimized `P_opt` (with the first and last rows set to the first and last rows of `Q`) and `t_opt`.

To use this function, simply call it with your `Q` array:

```python
# Example usage
Q = np.array([[0, 0], [1, 1], [2, 4], [3, 9], [4, 16]])
p = 3  # Degree of the polynomial
P_opt, t_opt = solve_vandermonde_problem(Q,p)
print("Optimized P:")
print(P_opt)
print("Optimized t:")
print(t_opt)
```

Note that this implementation assumes that a solution exists for the given `Q`. If no solution can be found, the `least_squares` function may not converge or may return a suboptimal solution.

---

## Poe

To solve the given problem, we can use an optimization algorithm to minimize the objective function. One common algorithm for this type of problem is the Levenberg-Marquardt algorithm, which is suitable for nonlinear least squares problems. We can use the `scipy.optimize.least_squares` function from the SciPy library to perform the optimization.

Here's a Python function that solves the problem using the Levenberg-Marquardt algorithm:

```python
import numpy as np
from scipy.optimize import least_squares

def find_minimal_P(Q, p):
    n = Q.shape[0]
    t0 = np.linspace(0, 1, n)  # Initial guess for t

    def objective(x):
        t = x[:n]
        P = x[n:].reshape(p, 2)
        A = np.vander(t, p, increasing=True)
        return np.ravel(A @ P - Q)

    x0 = np.concatenate((t0, Q[0]))
    result = least_squares(objective, x0)

    t = result.x[:n]
    P = result.x[n:].reshape(p, 2)
    return P, t
```

Here's how you can use the function:

```python
# Example usage

Q = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
p = 3

P, t = find_minimal_P(Q, p)
print("P:")
print(P)
print("t:")
print(t)
```

In this example, `Q` is the input sequence of points, and `p` is the desired number of rows in the output array `P`. The function returns the optimized `P` and `t`.

Note that this implementation assumes that `Q` has at least two points, and `p` is greater than or equal to 1. Also, make sure to have the NumPy and SciPy libraries installed to run this code.

---

## You.com

To solve this problem, we can use optimization techniques to minimize the objective function $\lVert AP - Q \lVert^2$ over both $P$ and $t$. One possible approach is to use the gradient descent algorithm to iteratively update the values of $P$ and $t$ until convergence. Here's a Python function that implements this approach:

```python
import numpy as np

def minimize_AP_Q(Q, p, max_iterations=1000, learning_rate=0.1, tolerance=1e-6):
    n = len(Q)
    m = p + 1

# Initialize P with the pseudoinverse of A
t = np.linspace(0, 1, n)
A = np.vander(t, m, increasing=True)
P = np.linalg.pinv(A) @ Q

# Gradient descent iterations
for iteration in range(max_iterations):
    # Compute the gradient of the objective function with respect to P and t
    gradient_P = 2 * A.T @ A @ P - 2 * A.T @ Q
    gradient_t = 2 * np.sum((A @ P - Q) * (P.T @ A.T), axis=1)

    # Update P and t
    P -= learning_rate * gradient_P
    t -= learning_rate * gradient_t

    # Check for convergence
    if np.linalg.norm(gradient_P) < tolerance and np.linalg.norm(gradient_t) < tolerance:
        break

return P

# Example usage

Q = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
p = 3
P = minimize_AP_Q(Q, p)
print(P)
```

In this code, the `minimize_AP_Q` function takes the input array `Q` and the parameter `p`, which represents the number of polynomial terms in $P$. It also has optional parameters for the maximum number of iterations (`max_iterations`), the learning rate (`learning_rate`), and the convergence tolerance (`tolerance`).

The function initializes $P$ with the pseudoinverse of $A$, and then performs gradient descent iterations to update $P$ and $t$ until convergence. The gradient of the objective function with respect to $P$ and $t$ is computed, and then used to update $P$ and $t$ according to the gradient descent update rule.

Finally, the function returns the optimized array $P$. In the example usage, we provide a sample input array `Q` and set `p` to 3. The function then prints the optimized array $P$.

Note that the initial estimate using the pseudoinverse of $A$ is used to provide a good starting point for the optimization, but the true values of $t$ are still unknown and need to be estimated. The optimization process helps to refine the estimate of $P$ and $t$ to minimize the objective function $\lVert AP - Q \lVert^2$​.

---

Let's redefine matrix $A$ to have dimensions $n \times p$ as you mentioned. The correct definition of matrix $A$ is $A = [t^{p-1} \ t^{p-2} \ \cdots \ t^0]$, where $t$ is the monotonically increasing vector of length $n$.

To solve the problem and minimize $\lVert AP - Q \rVert^2$, we can use the least squares method. This method finds the values of $P$ that minimize the sum of the squared differences between $AP$ and $Q$​. Here's an updated Python function that solves the problem:

```python
import numpy as np

def minimize_AP_Q(Q, p, max_iterations=1000, learning_rate=0.1, tolerance=1e-6):
    n = len(Q)
    m = p + 1

    # Initialize P and t
    P = np.zeros((p, 2))
    t = np.linspace(0, 1, n)

    # Gradient descent iterations
    for iteration in range(max_iterations):
        # Compute matrix A
        A = np.vander(t, m, increasing=True)

        # Compute the gradient of the objective function with respect to P
        gradient_P = 2 * A.T @ A @ P - 2 * A.T @ Q

        # Update P
        P -= learning_rate * gradient_P

        # Check for convergence
        if np.linalg.norm(gradient_P) < tolerance:
            break

    return P

# Example usage
Q = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
p = 3
P = minimize_AP_Q(Q, p)
print(P)
```

In this updated code, the `minimize_AP_Q` function takes the input array `Q` and the parameter `p`, which represents the number of polynomial terms in $P$. It also has optional parameters for the maximum number of iterations (`max_iterations`), the learning rate (`learning_rate`), and the convergence tolerance (`tolerance`).

The function initializes $P$ and $t$, and then performs gradient descent iterations to update $P$ until convergence. In each iteration, the matrix $A$ is computed using the current values of $t$, and the gradient of the objective function with respect to $P$ is computed. $P$ is then updated using the gradient descent update rule.

Finally, the function returns the optimized array $P$. In the example usage, we provide a sample input array `Q` and set `p` to 3. The function then prints the optimized array $P$.

Note that the values of $t$ are not updated in this version of the code, as the true values of $t$ are unknown. The optimization process focuses on finding the optimal values of $P$ that minimize the objective function $\lVert AP - Q \rVert^2$.

## ChatGPT

To solve this problem, we can use the optimization techniques provided by the SciPy library in Python. We'll use the `minimize` function from `scipy.optimize` to minimize the objective function, which calculates the squared norm of the difference between the given matrix $Q$ and the product of the Vandermonde matrix $A$ and the matrix $P$.

Here's the Python function to solve this problem:

```python
import numpy as np
from scipy.optimize import minimize

def objective_function(params, Q, p):
    n = Q.shape[0]
    t = params[:n]
    P = params[n:].reshape((p, 2))

    A = np.column_stack([t**(i) for i in range(p)])

    diff = np.dot(A, P) - Q
    return np.linalg.norm(diff) ** 2

def solve_minimization(Q, p):
    n = Q.shape[0]
    initial_t = np.linspace(0, 1, n)
    initial_P = np.linalg.pinv(np.column_stack([initial_t**(i) for i in range(p)])) @ Q

    initial_guess = np.concatenate((initial_t, initial_P.flatten()))

    bounds = [(0, 1) for _ in range(n)] + [(None, None)] * (p * 2)

    result = minimize(objective_function, initial_guess, args=(Q, p), bounds=bounds)

    t_optimal = result.x[:n]
    P_optimal = result.x[n:].reshape((p, 2))

    return P_optimal, t_optimal

# Example usage:

Q = np.array([[0, 0], [1, 2], [3, 1], [4, 3]])  # Example Q matrix
p = 4  # Example value of p

P_optimal, t_optimal = solve_minimization(Q, p)
print("Optimal P matrix:")
print(P_optimal)
print("Optimal t vector:")
print(t_optimal)
```

This code defines the objective function `objective_function` which computes the squared norm of the difference between the given matrix $Q$ and the product of the Vandermonde matrix $A$ and the matrix $P$. Then, the function `solve_minimization` uses SciPy's `minimize` function to find the optimal values of $P$ and $t$​ by minimizing the objective function. Finally, an example usage is provided at the bottom to demonstrate how to use the function.

## Pi

To solve this problem, we can use the scipy's optimization routine "minimize". This function implements a numerical optimization to find the minimum of a scalar function of one or more variables.

Here is a Python function that solves the problem:

```python
import numpy as np
from scipy.optimize import minimize

def fun(params, Q, p):
    t = params[:p]
    sort_indices = np.argsort(t)
    t = np.array(t)[sort_indices]
    P = params[p:]
    P = P.reshape((p, 2))
    A = np.vander(t)
    return np.linalg.norm(np.dot(A, P) - Q)

def solve_minimization_problem(Q, p):
    n = Q.shape[0]
    initial_guess_t = np.linspace(0, 1, p)
    initial_guess_P = Q[0]
    params = np.concatenate((initial_guess_t, initial_guess_P.flatten()))

    res = minimize(fun, params, args=(Q, p))
    P_min = res.x[p:].reshape((p, 2))
    t_min = res.x[:p]
    return t_min, P_min
```

This function works as follows:

- It defines a function fun that computes the norm of the difference between AP and Q for given values of t and P.
- It sorts the values of t in increasing order.
- Then, in the solve_minimization_problem function, it makes initial guesses for t and P.
- It concatenates these initial guesses into a single vector params.
- It uses minimize function to find the values of t and P that minimize fun.
- Finally, it reshapes the optimized P into a p x 2 array and returns the optimized values of t and P.

You can use this function by passing your Q and p to it:

```python
Q = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
p = 2
t_min, P_min = solve_minimization_problem(Q, p)
print('Optimized t:', t_min)
print('Optimized P:', P_min)
```

## Image credits

- Hero: [DreamStudio](https://dreamstudio.ai/generate)
- Pi Day: [Journal of Scientific Shitposting (JoSS)](https://www.facebook.com/photo/?fbid=4454582754766216&set=gm.3588248991389111&idorvanity=2595581653989188)
