---
title: Gambling for Fun, Profit, Amusement, Money, General Contentment and Extra Cash
subtitle: The Options · Part I
author: John Peach
lede:
hero:
  url: /assets/img/gambling-science-1/cornelis-de-vos-players-and-courtesans-under-a-tent.jpg
  alt: Cornelis de Vos Players and Courtesans under a Tent
tags: [math]
keywords: [Gambling, Brier Score, Bayes, Skiena]
socialImg: /assets/img/gambling-science-1/cornelis-de-vos-players-and-courtesans-under-a-tent.jpg
---

> Victory is a fleeting thing in the gambling business. Today's winners are tomorrow's blinking toads, dumb beasts with no hope.
>
> —Hunter S. Thompson

## Why Gambling?

It's all about outsmarting the house. Is it possible? Don't know! But we've already explored one possibility with the [scratch lottery](https://wildpeaches.xyz/blog/winning-the-scratch-lottery/) that looks promising. In this first of a series of posts, we'll look at other options and discuss which ones are most likely to return an increasingly larger sum of money. One requirement for success is knowing the probability of winning and having a good estimate of the payoff as we previously discussed in [The Kelly Criterion](https://wildpeaches.xyz/blog/the-kelly-criterion/). With proper money management, your wealth should grow exponentially. If you start with \$1 and each bet increases your wealth by 2%, then after 100 bets your total will be ​\$7.10. You'll win sometimes and lose others, but in general, the growth should follow a curve something like this.

![exp](/assets/img/gambling-science-1/exp.png){.blend-multiply}

Not understanding the exponential function will end civilization (soon!) but meanwhile, we should use it to get rich quick to buy toys!, a yacht!, a vacation home!, a new car! (fully electric, of course).

Several factors come into play when considering gambling venues:

1. How accurately can you predict the outcome, and is it possible to fit a distribution to the probabilities?
1. How accurately can you predict the payoff?
1. How rapidly can you reinvest winnings? A game with a small payoff that repeats every couple of minutes might be a better choice than one with a large payoff available just once a month.
1. How easy is it to collect the data required to make the predictions?
1. How easy is it to make a bet? Can you place the bet online, or do you need to be in a casino?
1. How does bet size affect the payoff, and are there limits to bet sizes?
1. Are the other players likely to be honest, so that if you win you can expect to collect?

We'll also assume that the game is legal and it has a positive expectation under near-optimal play. Positive expectation means that by playing well, we can find a strategy such that the probability of winning times the return is greater than one. Many games, such as slot machines, are thought to have a negative expectation even with optimal play, but sometimes a strategy is discovered that shifts the odds to the player's favor. Besides the scratch lottery, the casino games of Blackjack and Roulette are examples of games once considered a sucker's bet.

Gambling can be categorized into three classes depending on how the bet money is handled. Gentleman's Agreements are between two players. A bar bet on the outcome of a sports event is an example, but day trading on the stock market is also a Gentleman's Agreement type bet, even though you might purchase shares from one person and sell to another. A mostly disinterested intermediary may be used to "hold" the bets, but the intermediary only takes a pre-agreed cut to act as the go-between.

Casino gambling covers any situation where you place a bet against the house. This type of bet could be an at a Las Vegas casino, with a bookie, or scratch tickets bought from state lotteries. In casino gambling, the house calculates the long-term odds and makes the games in such a way that in general, you will lose money.

In parimutuel betting, players bet on the outcome of several mutually exclusive events, placing the bet money in a pool. Winners divide the total pool, minus some portion taken by the administrator of the venue. Thus, the administrator is disinterested in the outcome but heavily vested in increasing the total size of the pool. Parimutuel betting is used for horse and dog racing, and Jai Alai.

## Gentleman's Agreement Games

### Stock Market

Probably the biggest game is the stock market and it becomes a true gamble when played as [day trading](https://www.investopedia.com/articles/trading/05/011705.asp). Most positions are closed out at the end of the day, so a profit must be taken during the hours the stock market is open. Successfully predicting the price and the probability that the price will increase at some point during the day is extraordinarily difficult but may be possible with new results in chaos theory research from the University of Maryland, (see [Machine Learning's 'Amazing' Ability to Predict Chaos | Quanta Magazine](https://www.quantamagazine.org/machine-learnings-amazing-ability-to-predict-chaos-20180418/)).

Since the price is expected to fluctuate throughout the day, you would need to predict not only that the price is going to increase, but when you should sell during the day to maximize the profit. One advantage to day trading is that there are many opportunities, but you may only be able to make a handful of transactions in any one day. Thus the rate of increase would be limited to the gain per day.

Stock market data is readily available, and making a trade is as easy as setting up a brokerage account. For most trades, almost any amount of stock purchased would not affect the price, but this could be an issue with smaller, or penny stocks. Since the market is highly regulated, you are almost certain of getting money back, besides the usual brokerage commissions.

The biggest problem with stocks is that the change in the value of a stock during a single trading day is small compared to the upfront cost. In other words, you have to put up a lot of money for the expectation of a small relative return, although this could be mitigated through [leverage](https://www.investopedia.com/terms/l/leverage.asp).

This is how to [slightly beat the market](https://towardsdatascience.com/how-we-have-beaten-the-crypto-market-using-machine-learning-a45e8a7dbdcd), and why it's [nearly impossible](https://towardsdatascience.com/quit-trying-to-predict-the-market-27d77149a709).

### Poker

If you are already very good at poker this could be an option. Very few people make it to the world-class level, though, and it seems to be a difficult road to riches.

### Sports Betting

Similarly to poker, unless you follow sports fervently, gambling on sports will be difficult. The turnover rate will be low, since you may be limited to one or fewer betting opportunities per day. Fewer than half the [states have legalized sports betting](https://en.wikipedia.org/wiki/Sports_betting), and in some states, sports gambling is restricted to tribal casinos.

![sports-betting-legality-in-the-us](/assets/img/gambling-science-1/sports-betting-legality-in-the-us.svg)

## Casino Gambling

### Blackjack

Until [Edward Thorp](https://www.amazon.com/Beat-Dealer-Winning-Strategy-Twenty-One/dp/0394703103) devised a card counting method that improved the player's odds, Blackjack was thought to be a negative expectation game. Casinos countered by using multiple decks and shuffling before the end. A player is a guest at the casino and may be ejected for any reason, so if they suspect you of counting cards the game is over for you. Proficiency in card counting requires hours of practice, and the investment may not be worth the time. If you do try Blackjack, you will need to play in person at the casino. The rate of return should be better than most games until you get caught.

### Roulette

Roulette is another casino game thought to have a house edge until a group of [physics graduate students](https://www.amazon.com/Eudaemonic-Pie-Thomas-Bass-ebook/dp/B06XGM7K64/ref=sr_1_1?crid=13066393GNM78&dchild=1&keywords=the+eudaemonic+pie&qid=1618177447&sprefix=the+eudaemonic+%2Cstripbooks%2C162&sr=8-1) at the University of California Santa Cruz found a way to predict where the ball would land. Casinos allow betting to continue until the ball falls from the rim of the roulette wheel. During this time it is possible to measure the speed of the wheel, the speed of the ball, and their relative positions. Using small computers built into their shoes, the team was able to predict the final slot of the ball within an octant, enough for the edge.

Electronics are banned in casinos, so getting caught with one was a serious concern for them. It might be possible to use [biofeedback](https://en.wikipedia.org/wiki/Biofeedback) to train yourself or at least learn the [timing](https://www.scientificamerican.com/article/your-brain-has-two-clocks/) to predict where the ball might land. Besides predicting where the ball will land, you'd need to remember the numbers of the neighboring pockets, calculate the probabilities associated with each pocket, and compute the Kelly optimal bet amount for each pocket. You'd better be pretty good at [lightning calculations](http://myreckonings.com/wordpress/wp-content/uploads/LightningCalculators/lightningcalculators.pdf).

Casinos carefully calibrate the wheels to eliminate bias, but manufacturing and installation errors introduce potentially playable discrepancies. Ed Thorp recognized that either the wheel is perfect, in which case predictable, or it has some bias. A biased wheel will favor some pockets over others that may be [exploitable](https://www.roulettephysics.com/roulette-wheel-secrets/).

![roulette-wheel](/assets/img/gambling-science-1/roulette-wheel.gif)

### The Scratch Lottery

The scratch lottery operated by many states seems to be an ideal starting point for gambling. Following the method in an earlier post [Winning the Scratch Lottery](https://wildpeaches.xyz/blog/winning-the-scratch-lottery/), the odds of winning are very high and the payoff is reasonable per invested dollar. The rate of wealth increase is limited to the speed at which tickets can be purchased and processed, and this will set an upper limit on growth. The method requires purchasing many tickets, identifying the winners, and returning losing tickets for a refund. Disadvantages are that returning to a store too soon could result in having to search through many tickets you might have already seen, and buying all the good tickets may leave other customers feeling frustrated.

## Parimutuel Betting

In parimutuel betting, players pool their money and each player selects one of several possible outcomes. Those players who correctly bet on the winner split the pool in proportion to the amount wagered, minus the house take, which is often about 20 percent of the total pool.

### Horse Racing

Horse racing occurs almost daily around the world and even in the U.S. at 20 to 30 tracks each day. There are 7 to 12 races each day a track is open, giving as many as 200 betting opportunities just on the Win / Place / Show ($1^{st}, 2^{nd},3^{rd}$) finishes. More exotic bets are often available on each race, as well. Data for racing events are available through [Equibase](https://www.equibase.com/), and the list of tracks open on any given day may be found on the [Entries](https://www.equibase.com/static/entry/index.html?SAP=TN) page. Data are freely available from Equibase, although some are only through a subscription service. The expected payoff for each entry is in the Morning Line which gives the odds at the start. Odds change dynamically as bets are placed.

Future posts will discuss how to collect data from Equibase, and how to work around paywall barriers. While horse racing is not as popular a sport as football or baseball in the U.S., there is sufficient interest that it presents a good betting opportunity. Off-track betting (OTB) is [legal in many states](https://www.legalsportsreport.com/horse-betting/otb/) providing an easy way to play [online](https://www.offtrackbetting.com/) at tracks around the world. Laws regarding online betting seem to be rapidly changing, with [many states](https://gamboool.com/states-where-it-is-legal-to-bet-on-horse-racing-online) approving betting through apps.

![Del_Mar_Horse_Racing](/assets/img/gambling-science-1/Del_Mar_Horse_Racing.jpeg)

### Greyhound Racing

Only four active tracks run greyhound racing, and they are expected to be phased out of existence by local laws. Betting on greyhounds shouldn't be considered because of the legal barriers in place now.

### Jai Alai

Jai Alai is a sport in which eight contestants participate in each match, two on the court at a time. The first two play until one wins the point. The next player in line challenges the winner, while the loser goes to the back of the line. A match winner is declared when one player has won seven points. The rules are a bit more complicated, but that's the basic idea.

[Steven Skiena](https://www.cs.stonybrook.edu/people/faculty/StevenSkiena) a professor of computer science at SUNY Stony Brook published [Calculated Bets: Computers, Gambling, and Mathematical Modeling to Win](https://books.google.com/books/about/Calculated_Bets.html?id=UvWGgaE4ZA8C) in 2001 in which he described a method to successfully gamble on the game of Jai Alai. I bought a copy and implemented a version in Fortran that correctly predicted match outcomes over nine months. Beginning with an initial stake of \$1000, and using the [Kelly Criterion](https://wildpeaches.xyz/blog/the-kelly-criterion/), the value grew to \$2.3 trillion. However, it didn't take into account the fact that most of the pool money was my own artificial money. Had I been betting in the actual pool, the amount bet would have quickly begun to affect the final odds and growth would have slowed to a crawl.

The prediction worked by inputting the player's point win/loss record and using that to assess the probability of winning against another player. If Player A had a W/L of $p_A$ and Player B had a W/L of $p_B$ then the algorithm gave Player A probability $p = f(p_A,p_B)$ of winning the point, and Player B won with probability $1-p$. The algorithm tracked every possible outcome, which meant that there were over a million possible results for every match. Cumulative probabilities that each player came in first, second, third, or out of the money determined the match predicted results.

![dania-jai-alai](/assets/img/gambling-science-1/dania-jai-alai.png)

The success with Jai Alai predictions gives some hope for predicting other similar events such as horse racing. Jai Alai is not sufficiently popular to be considered a betting opportunity, but [the reports of its death have been greatly exaggerated](https://www.treehugger.com/jai-alai-the-sport-that-almost-caught-on-in-the-us-4864008).

## Putting It All On Black

Guessing about how easy it might be to successfully gamble is very subjective, but this is how I see it:

![gambling-opportunities](/assets/img/gambling-science-1/gambling-opportunities.png)

The Scratch Lottery is simple and provides an easy entry, but will be limited in returns. The next best bet seems to be horse racing with the biggest hurdle being data collection. Eventually, horse race betting will hit limits on returns at which point investing in the stock market might be the best remaining option.

## Tête-à-Tête vs. Mano a Mano

Predicting the outcome of a Jai Alai match requires estimating how each point will be won, based on this mysterious function $p = f(p_A,p_B)$. Skiena came up with this function

$$
p(A>B) = \frac{1 + (p_A - p_B)^\alpha}{2}
$$

for some exponent $\alpha$ determined from the data. After analyzing many matches, he found that the best value for the exponent was $\alpha = 0.4$. The input probabilities $p_A$ and $p_B$ are the long-term wins per games played ratios. This formula assumes that Player $A$ has won more points than Player $B$ ($p_A > p_B$) and returns the probability that $A$ beats $B$, $p(A>B)$.

A more [Bayesian](https://en.wikipedia.org/wiki/Bayesian_probability) approach might be to look at how each player does against all others, like this:

![](/assets/img/gambling-science-1/pab.png)

The area on the right side of the vertical line represents the probability that Player $A$ wins against all others (including Player $B$), and the area above the horizontal line is the probability of winning for Player $B$. In head-to-head play, one player wins and one loses the point so the total number of points won by all players is exactly the total number lost by all players (meaning this is a zero-sum game). Except for the slight imbalance of wins/losses by players $A$ and $B$, their play against all others is almost as if they played against a generic player who wins exactly half the time.

The times when $A$ wins and $B$ loses against all competitors is the red rectangle in the lower right corner. The probability that $B$ loses while $A$ is winning is the area of that rectangle (Area $ = p_A(1-p_B)$) divided by the area of the right side,

$$
p(A_{win}|B_{lose}) = \frac{p_A (1-p_B)}{p_A(1-p_B)+(1-p_A)(1-p_B)}=\frac{\text{red}}{\text{red} + \text{yellow}}.
$$

The times when $B$ wins while $A$ loses against all others is the ratio of rectangles on the right side,

$$
p(B_{win}|A_{lose}) = \frac{p_B (1-p_A)}{p_B(1-p_A)+(1-p_A)(1-p_B)}=\frac{\text{gray}}{\text{gray} + \text{yellow}}.
$$

In a head-to-head match between Players $A$ and $B$, we're only interested in the cases when one of them wins and the other loses, so if we're trying to estimate the probability that $A$ beats $B$ we should calculate

$$
p(A_{win}|B_{lose}) = p(A>B) = \frac{p_A (1-p_B)}{p_A(1-p_B)+(1-p_A)p_B}=\frac{\text{red}}{\text{red} + \text{gray}}.
$$

A more rigorous explanation can be found in the [Society for American Baseball Research](https://sabr.org/) article written by John Richards, ["Probabilities of Victory in Head-to-Head Team Matchups"](https://sabr.org/journal/article/probabilities-of-victory-in-head-to-head-team-matchups/).

Now we have two competing formulas for estimating the probabilities during a one on one match. Which one is better? At first, it would seem that either one will work because the prediction is always in favor of the player with the greater win/loss ratio. But to use these formulas to predict the outcome of a match requires applying them many times (millions in the case of Jai Alai) and a better point predictor will give a better match predictor. We also need the best prediction possible as an input to the Kelly Criterion.

A short article by Glenn Brier appeared in the January 1950 issue of Monthly Weather Review titled [_"Verification of forecasts expressed in terms of probability"_](https://web.archive.org/web/20171023012737/https://docs.lib.noaa.gov/rescue/mwr/078/mwr-078-01-0001.pdf). Brier wanted a method to compare weather forecasts from different forecasters.

## Into the Brier Patch

Briers formula, now known as the Brier Score (BS) is

$$
BS = \frac{1}{N} \sum_{i=1}^N (f_i-o_i)^2
$$

where

- $f_i$ is the forecast (rain/no rain) on the $i^{th}$ day
- $o_i$ is the outcome on the $i^{th}$ day
- $N$ is the number of days

If the weather forecast for the day is a $30\%$ chance of rain and it doesn't rain then $o_i = 0$ and $(f_i - o_i)^2 = (0.3 - 0)^2 = 0.09$. On the other hand, if it did rain then $o_i = 1$, and $(f_i - o_i)^2 = (0.3 - 1)^2 = 0.49$.

For weather forecasts, the Brier Score is often modified to account for different types of weather such as snow, fog, or wind, but we're interested in predicting which one of two players will win a point so this version is sufficient.

We can run an experiment using [baseball data](https://www.retrosheet.org/gamelogs/index.html) from the Retrosheet Game Logs. Data for each season are available in comma-separated value (.csv) format with [161 fields](https://www.retrosheet.org/gamelogs/glfields.txt) for each game (contained in a single row). For the 2020 season, 898 rows represent the 898 games played between two teams.

We're only interested in the teams and the final score, so we can select the team codes in columns 4 (visitors) and 7 (home) and the scores in 10-11 (visitors/home). In fact, we don't really care about the final score, we just need to know which team won the game. So, if the value in column 10 is greater than column 11 the visitors won.

The first step is to compile a Won/Lost record for each team at the end of the season to use in the prediction formulas. Usually, you wouldn't be able to use the final standings to predict the winner of a game during the season, but since we'd like to be able to compare the two predictors, giving the best available information reduces the chance of introducing a confounding error. I used the [2020 Baseball Standings](https://www.mlb.com/standings/2020) and imported them into a spreadsheet, adding a column with the [team nickname](https://www.retrosheet.org/CurrentNames.csv) from Retrosheet.

![al-east-standings](/assets/img/gambling-science-1/al-east-standings.png)

You can simplify the spreadsheet by removing everything except columns A and E, and any rows with the division names, saving it as MLB.xlsx.

Import the data in [RStudio](https://www.rstudio.com/) following the [instructions](https://r-coder.com/read-excel-r/) shown in the [R Coder site](https://r-coder.com/). This should create a new variable `MLB` with team nicknames in the first column and final standings in the second column. Next, we need to create two lookup tables with the prediction probabilities.

Import the games data using File $\rightarrow$ Import Dataset $\rightarrow$ From Text (readr). Browse for the text file containing the season games data, change the name to "games" and uncheck "First Row as Names", then click "Import".

To run the code, download `MLB_brier.r` from [GitHub](https://gist.github.com/XerxesZorgon/6613be32ded7bd64dfc960a64ecec359), load it into [RStudio](https://www.rstudio.com/), click on "Source" in the upper right of the Editor pane, then create lookup tables,

```r
lookup <- make_lookup_tables(MLB)
```

You may need to update the [Tidyverse](https://www.tidyverse.org/) package (in an R console - see [IDE keeps getting stuck in a loop to restart R when trying to install a package that is already installed · Issue #2656 · rstudio/rstudio (github.com)](https://github.com/rstudio/rstudio/issues/2656)).

In the Environment pane, you should see variables "games", "MLB" and "lookup". Now you can compare the two predictor methods,

```r
BS <- brier_score(lookup,MLB,games)
```

When it finishes running, check the values of the Skiena and Bayes predictors,

```r
> BS$skiena
0.3107963

> BS$bayes
0.2354583
```

A lower score indicates a better predictor, so this says that the Bayes method is better than Skiena's, but to be fair, Skiena chose the exponent $\alpha = 0.4$ for predicting Jai Alai, not baseball. This shows that we need to be careful about choosing the best prediction method, though.

In the next post of this series, we'll explore what data might be needed and how to collect it.
