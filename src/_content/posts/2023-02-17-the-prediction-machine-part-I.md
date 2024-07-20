---
title: The Prediction Machine
subtitle: Part I - Protocols and OpenBB
author: John Peach
lede:
hero:
  url: /assets/img/2023-02-17-the-prediction-machine/Protocols-all.png
  alt:
tags: [math, ai, openbb]
keywords: [day trading, prediction, forecasting]
socialImg: /assets/img/2023-02-17-the-prediction-machine/Protocols-all.png
software: ['openbb-terminal', 'anaconda', 'python']
---

[Home](https://wildpeaches.github.io/)

> "Anyone who believes that exponential growth can go on forever in a finite world is either a madman or an economist."
>
> \- Kenneth Boulding, Economist
>
> "Or both."
>
> \- Steve Keen, Economist

## Prediction

In [*Superforecasting - The Art and Science of Prediction*](https://esotericlibrary.weebly.com/uploads/5/0/7/7/5077636/philip_e._tetlock_-_superforecasting_the_art_and_science_of_prediction.pdf) Philip Tetlock and Dan Gardner tested the predictions of experts and found "the average expert was roughly as accurate as a dart-throwing chimpanzee." Experts and pundits have gained reputations mainly by telling convincing stories more often than being right. Is it possible to create an algorithm that does better? 

For several years, Tetlock has been running the [Good Judgment Open](https://www.gjopen.com/) forecasting contest where anyone can try to be a superforecaster by estimating things like,

- What will be the average price of large eggs per dozen in the US as of 3 March 2023, according to the USDA?
- Will monthly global land and sea temperature anomalies reach or exceed 1.4°C before October 2023, according to the National Oceanic and Atmospheric Administration (NOAA)?
- How many tech industry employees will be laid off in February 2023 and March 2023, according to Layoffs.fyi?

On the Good Judgment *[About](https://goodjudgment.com/about/the-science-of-superforecasting/)* page, you can find many research papers on the subject of superforecasting.

To narrow the scope of this project a bit, let's try to predict whether a stock price will rise or fall during a day. Investing feels a little bit like the three laws of thermodynamics - you can't win, there are no tie games, and you have to play. You have to play because even if you bury your money in a hole in your backyard, that's a decision. It's a decision to forfeit the game, but still, you have to make that choice. 

During times when the market as a whole is moving down, there are still some stocks that rise, and there will be days when the market average increases. Can we find a method that will allow us to correctly find those stocks and those days?

## Day trading

Investing over a very short time is often called day trading, and is in contrast to the longer-term investment strategy known as "buy-and-hold". Most financial experts recommend the buy and hold strategy, but then they're dart-throwing chimpanzees. Surely with all of the rapidly evolving information available and new artificial intelligence methods, we can outperform the stock market.

From *[The cross-section of speculator skill: Evidence from day trading](https://faculty.haas.berkeley.edu/odean/papers/Day%20Traders/The%20Cross-Section%20of%20Speculator%20Skill.pdf)*: 

- Only 19% of traders did better than the market
- Less than 1% consistently beat the market
- The top 500 traders gained 0.379% per day
- The average day trader traded on 43 days of the year
- Aggregate net returns for all day traders (combined, not individually) were negative for every single year studied

If the best day traders earned 0.379% per day and traded only 43 days per year, then their average return would be $1.00379^{43} = 1.1766$, or 17.7%. That's better than the average, but only for the top 500 traders. 

## Protocols

Before we begin, there are some required protocols:

1. Don't do anything stupid.
2. Don't bet real money with this method.
3. If you do bet real money, it isn't our fault.
4. Don't second guess the algorithm.

There are two reasons not to second guess the algorithm. If you think the algorithm is making the wrong decision, it may be because you're biased, or forgetting some important detail. Presumably, the algorithm will be optimized to provide the best choice with all of the information it has, and be completely unemotional. Let it do its thing. 

The other possibility is that you have information that the algorithm doesn't know yet. In that case, shut it down and retrain it with more complete data, but don't try to correct it on the fly. You don't want to be like [this poor schlub](https://www.theguardian.com/technology/2022/nov/04/how-i-lost-1m-during-the-pandemic?utm_source=pocket-newtab). 

It's best to think of this project as an exercise in learning about some AI methods.

## Signals

Signals are the input information to the algorithm. The problem may be having too much information so the algorithm will be overwhelmed with data. To start, though, there are several distinct categories or sources of data we can use as inputs. These are,

- [Fundamental analysis](https://www.investopedia.com/terms/f/fundamentalanalysis.asp) calculates the expected stock price based on a detailed study of the underlying business drivers (profitability, operational efficiencies, managerial expertise, etc.) related to the company, its products, its industry, and the general economy.
- [Technical analysis](https://www.daytrading.com/technical-analysis) is the study of past market data to forecast the direction of future price movements.
- A [sentiment indicator](https://www.daytradetheworld.com/trading-blog/successful-traders-sentiment-profit-market/) is a tool that is used to measure the overall feeling or mood among investors and traders. 
- Macroeconomics deals with the [performance, structure, behavior, and decision-making](https://en.wikipedia.org/wiki/Macroeconomics) of an [economy](https://en.wikipedia.org/wiki/Economy "Economy") as a whole. 
- Other indicators are [seasonality](https://www.investopedia.com/terms/s/seasonality.asp), [volatility](https://baro-virtual.medium.com/how-can-you-determine-the-change-of-market-trend-in-about-70-of-cases-using-vix-f2ebc768cb06) (the VIX), [moving averages](https://www.investopedia.com/terms/s/sma.asp), the [advance-decline line](https://www.investopedia.com/terms/a/advancedeclineline.asp), and the [McClellan Oscillator](https://www.investopedia.com/terms/m/mcclellanoscillator.asp).

Finance professor Roy Batchelor says of the technical analysis method called Fibonacci ratios, "the idea that prices retrace to a Fibonacci ratio or round fraction of the previous trend clearly lacks any scientific rationale". Many technical trading principles may be [bullshit](https://www.callingbullshit.org/), but if enough people use them they could become self-fulfilling and useful indicators.

## OpenBB

[OpenBB](https://openbb.co/products/bot) is an open-source tool to help with financial research that can access stock market, crypto, and ETF data and perform analysis using fundamentals, technical signals, and sentiment indicators. The best way to understand all of the capabilities of OpenBB is to download it, run the application, and open the online [help pages](https://docs.openbb.co/terminal). It doesn't come with a fancy GUI, so you need to type in commands such as `Stocks`, `Economy`, or `Forecast` which will take you to sub-menus for more detailed commands.

Stock data is immediately available through [Yahoo Finance](https://finance.yahoo.com/), so to load recent data for [AMC Entertainment Holdings, Inc. (AMC)](https://finance.yahoo.com/quote/AMC?p=AMC) switch to the `Stocks` menu:

![openbb-stocks-menu](/assets/img/2023-02-17-the-prediction-machine/openbb-stocks-menu.png)

and now type `load amc` which will display 

`Loading Daily data for AMC with starting period 2020-02-11.`

You can change the range of dates to acquire with the start and end commands: `load amc -s 2021-01-01 -e 2022-01-01`, or whatever range you'd like to see. 

The `candle` command shows the opening and closing prices, and `candle --ma 20` overlays a 20-day moving average. The volume, or number of shares bought and sold, is shown in the bottom section of the plot.

![amc-candle](/assets/img/2023-02-17-the-prediction-machine/amc-candle.png)

Using the [Behavioral Analysis](https://docs.openbb.co/terminal/reference/stocks/ba) submenu (`ba`), you can plot mentions of the stock using data from FinnBrain:

![finnbrain-sentiment](/assets/img/2023-02-17-the-prediction-machine/finnbrain-sentiment.png)

## APIs

Much more financial data is available through third-party sources. You'll need to install keys for each [API](https://aws.amazon.com/what-is/api/) (Application Programming Interface), and OpenBB makes it easy to get the ones you want. Under the `Advanced` menu, you'll see `Set API keys`. On the [help page](https://docs.openbb.co/terminal/usage/guides/api-keys), scroll down to see how to obtain the keys. I got keys for stock-related sites that didn't charge for the information:

- [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
- [FinnHub](https://finnhub.io/)
- [FRED](https://fred.stlouisfed.org/)
- [GitHub](https://github.com/)
- [Reddit](https://www.reddit.com/wiki/api/)
- [Stocksera](https://stocksera.pythonanywhere.com/)

Reddit was a little tricky, but some help is [here](https://www.reddit.com/r/openBB/comments/wihlnb/how_to_get_a_reddit_api_key_for_openbb/), and for GitHub, I had to create a new app name, OpenBBWildPeaches. You might want to explore some of the other APIs to see if there's something you'd like to have.

## An example

The `Forecast` menu contains machine learning tools to help predict the future direction of stock prices. If you're in the `Stocks` submenu, use the command `home` to return to the top level, then `forecast` where you can apply commands to explore the data you previously loaded, apply feature engineering to create new data sets, and predict future prices with Time Series Forecasting.

![forecast](/assets/img/2023-02-17-the-prediction-machine/forecast.png)

Note the disclaimer at the top, and don't forget Protocol 2. 

Instead of using a built-in method, we'll use a very simple rule-based model. First, we need to [export](https://docs.openbb.co/terminal/reference/forecast/export) the data in either xlsx or csv format. From the top level, use `/stocks/load AMC --export xlsx` which will save the data in `<user>\OpenBBUserData\exports\20230215_211502_OpenBB_openbb_terminal_load_AMC.xlsx`

![amc-exported-xlsx](/assets/img/2023-02-17-the-prediction-machine/amc-exported-xlsx.png)

Using the closing price data we can build a simple prediction machine. Add a new column `Close Diff` and take the difference of the first two entries in column $E$, `=e3-e2`. Copy this formula to the bottom of the last row of data. These will be the values we want to predict.

The formula to predict the closing price differences is very simple. If the both of the differences are positive or both are negative, take the average of the two values. If the price went up one day, and down the other, add the two price differences together. An easy way to see the behavior of the price change over two consecutive days is to multiply price changes together, and apply the sign function, `=sign(h2*h3)` where column $H$ is used to store the differences. 

Next create one more column to hold the predicted values, using the formula `=IF(I4<0,H4+H3,AVERAGE(H4,H3))`. This says that if the entry in column $I$ is negative (the changes were in opposite directions) add the two values together, otherwise take the average. Your spreadsheet should now look like this:

![predicted-spreadsheet](/assets/img/2023-02-17-the-prediction-machine/predicted-spreadsheet.png)

Next, make a scatter plot of the predicted changes against the actual closing differences (col. $J$ vs col. $H$). I added a red line at $45\degree$ to show where perfect predictions would lie on the plot.

![predicted-price-change](/assets/img/2023-02-17-the-prediction-machine/predicted-price-change.png)

For a plain-vanilla prediction machine, it works fairly well. 

## A simple neural network

In the example, when the Indicator (column $I$) is less than zero the output is the sum $\Delta_{t-2} + \Delta_{t-1}$, and if it's non-negative the output is the average. But, the average is $\frac{1}{2}(\Delta_{t-2}+\Delta_{t-1})$, so what happened was we added the two inputs together and then multiplied by either $1$ or $\frac{1}{2}$ depending on whether the price changes, $\Delta$, were in the opposite or the same direction.

The equations contained in the spreadsheet can be outlined as a flow chart,

![simple-neural-net](/assets/img/2023-02-17-the-prediction-machine/simple-neural-net.png)

where the two previous changes in closing prices are the inputs. The first operation sums them together and the lower one multiplies them to create the indicator function ($-1/+1$) which returns a multiplier $m$. The prediction is $P_t = m (\Delta_{t-2}+ \Delta_{t-1})$. This is a very simple neural network with the exception that the values for $m$ were pre-selected. In a true neural network, some of the input data $\Delta$ would be used to "train" the network. 

In the training phase, the two values that $m$ can take on are adjusted until the errors between the true price changes and the predicted changes have been minimized. Many algorithms have been developed to handle the training portion and to test the optimal weights $m$ on data that has been held out from the training phase. Doing this helps to see how good the weights are at predicting new inputs. To read more about how neural networks are designed, take a look at [*Machine Learning for Beginners: An Introduction to Neural Networks*](https://towardsdatascience.com/machine-learning-for-beginners-an-introduction-to-neural-networks-d49f22d238f9) by Victor Zhou.

For the AMC stock data, the scatter plot uses only the first 250 data points out of a total of about 760 that were downloaded by OpenBB. Notice the sharp rise in prices during the summer of 2021. At that point, the simple neural network failed miserably.

In OpenBB you can write scripts to automate processes using the built-in functions. To create new functions like this simple neural network, we needed to export the data to a spreadsheet and write the functions there. OpenBB is written in Python, and a much more effective method for interfacing with it is through the Software Development Kit (SDK) which will allow us to write in Python and call OpenBB functions. Getting the SDK and running Python will be the subject of the next post. 
