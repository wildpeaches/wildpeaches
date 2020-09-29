---
title: The Kelly Criterion
subtitle: Information Theory Reimagined
author: John Peach
tags: [math]
keywords: [Gambling, Statistics, Expectation, Optical Character Recognition]
---

Claude Shannon is known as "the father of information theory" for a paper he published in 1948, "A Mathematical Theory of Communication". For his master's thesis at MIT, he showed that by implementing Boolean algebra in electrical circuits you can construct any logical relationship. Without these two ideas, the digital information age could not exist.

John Kelly, Jr. was a mathematician from Texas who met Shannon when they both worked at AT&T's Bell Labs in Murray Hill, NJ during the 1950s. He read Shannon's paper on information theory and realized it could be applied to gambling. The basic idea is that for any bet you might make a good guess about the outcome, but you're rarely 100% certain. Using Shannon's theory, Kelly understood that depending on the probability of winning the bet, you should adjust how big a wager to make. 

There are two extremes to this concept. Most people don't gamble at all and fall into the "nothing ventured, nothing gained" camp. At the other extreme, there are stories of people betting everything they own on red at the roulette wheel in Las Vegas. If you are going to gamble, though, there is an optimal point in between which will give the maximum return.

In the early 1980s before I'd heard about Shannon and Kelly I was thinking about this problem and using a little bit of calculus came up with the identical solution that Kelly did. Shannon and Kelly used the mathematics of expectations which provides a rigorous proof, but I like mine because it seems a little more intuitive.

Suppose you have a betting opportunity where there are a series of identical bets. Each bet costs the same amount and the probability of winning is the same each time. For example, you might bet on a coin flip which has a 50-50 chance of paying off if it comes up heads. It costs a penny to play and you win a penny if the coin lands heads. In this case, your expectation is zero since you have to pay a penny to play and you win two pennies half the time, so you're only breaking even. But, maybe you've found an edge and can predict the outcome with better than even odds. How much should you bet each time?

It depends on how much you've brought to the table, and your current stash after playing several games. Let's say you can predict the outcome with probability $p$ and you win $w$ for each penny bet. Suppose you started with $S_0$ dollars initially, and of that, you bet a fraction $b$. Just to get in the game, your stash becomes $S_0 - S_0b = S_0(1-b)$. If you came with \$1 and bet a penny, then you'd be down to 99 cents before the first toss, and if it comes up tails, then that's where you'd be. But, if lands heads, then you win back the fraction you bet times the return $w$, so your stash becomes
$$
S = S_0 - S_0b + S_0bw = S_0(1-b+bw).
$$
In a long series of these bets, you'll win some and you'll lose some. Let's say you play $n$ times so you'll have a series of wins and losses, {*W,L,W,W,...L,W*}.  Your stash after these $n$ bets will be something like,
$$
S_n = S_0(1-b+bw)(1-b)(1-b+bw)(1-b+bw) \cdots (1-b)(1-b+bw).
$$
Of the $n$ bets, you can expect to win $pn$ of them, and lose $(1-p)n$ others. Now, the order doesn't matter since they all get multiplied together, so the amount you win will be $S_0(1-b+bw)^{pn}$ and the amount you lose will be $S_0(1-b)^{(1-p)n}$. Combining these, your stash becomes,
$$
S_n = S_0(1-b+bw)^{pn}(1-b)^{(1-p)n}.
$$
If we let $R_n = S_n/S_0$ be the ratio of your initial stash to final stash, this formula becomes		   	  	 	 
$$
R_n = (1-b+bw)^{pn}(1-b)^{(1-p)n}.
$$
Factoring out the $n$ gives the expected return per bet,
$$
R = (1-b+bw)^{p}(1-b)^{(1-p)}.
$$
Recall that $b$ is the fraction of your current stash you bet each time, $0 \leq b \leq 1$. What we'd like to do is to maximize $R$ as a function of $b$, which means we need to take the derivative of this equation, set it equal to zero, and solve for $b$.  Using the product rule of derivatives,
$$
\frac{dR}{db} = \frac{d}{db} u\cdot v = udv + vdu,
$$
so letting $u = (1-b+bw)^{p}$ and $v = (1-b)^{(1-p)}$ we have
$$
du = p(w-1)(1-b+bw)^{p-1}
$$
and
$$
dv = -\frac{(1-p)}{(1-b)^p},
$$
so
$$
\frac{dR}{db} = -(1-b+bw)^{p}\frac{(1-p)}{(1-b)^p}+(1-b)^{(1-p)}p(w-1)(1-b+bw)^{p-1}.
$$
It looks complicated, but remember that what we need to do is to set this to $0$ and solve for $b$, 
$$
-(1-b+bw)^{p}\frac{(1-p)}{(1-b)^p}+(1-b)^{(1-p)}p(w-1)(1-b+bw)^{p-1} = 0.
$$
First, multiply both sides by $-(1-b)^p$ to get
$$
(1-b+bw)^{p}(1-p)-(1-b)p(w-1)(1-b+bw)^{p-1} = 0.
$$
Next, multiply both sides by $(1-b+bw)^{-p+1}$, which gives
$$
(1-b+bw)(1-p)-(1-b)(w-1)p=0.
$$
Expanding and collecting terms,
$$
(b-p)w-b+1=0 \\
bw-pw-b+1=0 \\
b = \frac{pw-1}{w-1}.
$$

------

If the product $p \times w > 1$ then you can expect to win in the long run if you use the Kelly optimization. Here's an example where $p=1/2$ and $w = 3$.

![Return ratio graph plotting return ratio on Y and bet fraction on X](/assets/img/the-kelly-criterion/return-ratio.png){.blend-multiply .py-8}

The red dot is where the ratio reaches a maximum and happens when 
$$
b=\frac{pw-1}{w-1}=\frac{3/2-1}{3-1}=\frac{1}{4}.
$$
Putting $b = \frac{1}{4}$ into the function $R(b,p,w)$ gives a maximum return ratio of $R_{max}=1.0607$, meaning your stash will grow at a rate of about 6% per bet.  Professor Albert Bartlett has said, "The greatest shortcoming of the human race is our inability to understand the exponential function." He was referring to population growth and energy, but understanding it in terms of how much your pile of money can grow when properly bet might also be important to you. By increasing the size of your next bet after a win and decreasing it after a loss you can achieve exponential growth.

Notice for $b=0$ the return ratio is 1 meaning if you don't play you can't win. At the other end, $b=1$ which is when you gamble everything. Unless the outcome is certain, you'll lose it all sooner or later. For $b=0.5$ the curve has come down to 1 and for all values of  $b>0.5, $ $R<1$. Even though you might correctly predict the outcome and have a positive expectation, you can still lose money if you bet too large a fraction of your money.  

Here's a Monte Carlo experiment of the Kelly Criterion. By Monte Carlo, I mean the outcomes of each game are randomly chosen by the computer so it's very much like a real coin toss game. The values for $p$ and $w$ are still the same as before, but each outcome is unknown before the bet. I ran three different cases for the value of $b$. There's the optimal value of $b=0.25$ and two other cases, Bet- and Bet+ where $b = \mp 0.05$. At the end of the experiment, the stash for the optimal case is 361.1, but for the other two, it's only 289. It's a little hard to see because the curves are wiggling around a lot, but there is quite a difference in the outcome. 

<img src="" alt=""  />

![Kelly Monte Carlo graph plotting net value on Y and game number on X](/assets/img/the-kelly-criterion/kelly-monte-carlo.png){.blend-multiply .py-8}


John Kelly developed a speech synthesizer while working at Bell Labs, and used it to create the song "Daisy Bell" which Arthur C. Clarke included in the movie "2001: A Space Odyssey". He died of a stroke at age 41 in 1965 and never used his method to make money. Claude Shannon left Bell Labs to become chairman of the Mathematics Department at MIT. There, he and fellow faculty member Ed Thorp applied Kelly's method with Thorp's card counting blackjack scheme to bring down a casino in Reno, NV. Thorp is now president of Edward O. Thorp & Associates where his investments have yielded an average growth of 20% for almost 30 years.

