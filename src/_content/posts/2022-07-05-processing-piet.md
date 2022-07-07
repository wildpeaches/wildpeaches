---
title: Processing Piet
subtitle: Language into Art, Art into Language
author: John Peach
lede: null
hero:
  url: /assets/img/processing-piet/torus-earth.jpg
  alt: null
tags:
  - programming
  - art
keywords:
  - Processing
  - Piet
  - Java
socialImg: /assets/img/processing-piet/torus-earth.jpg
lastmod: 2022-07-07T17:50:58.362Z
---

> Thus mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true.
>
> - Bertrand Russell

---

Jan is the artist of this blog. He drew the velociraptor walking on the moon for an earlier [post](/blog/of-sailing-ships-velociraptors-and-walking-on-the-moon/). For anyone artistically challenged (me), computers come to the rescue. We tried using the [Hotpot.ai](https://hotpot.ai/) artificial intelligence software to generate some art. The input to the program is a description of what you'd like the painting to look like. Since we'd been talking about Werner Herzog who once said,

> “Look into the eyes of a chicken and you will see real stupidity. It is a kind of bottomless stupidity, a fiendish stupidity. They are the most horrifying, cannibalistic and nightmarish creatures in the world.”

Jan suggested we use "The chicken contemplates Werner Herzog" which produced this watercolor using only the text as input.

![The chicken contemplates Werner Herzog](/assets/img/processing-piet/the-chicken-contemplates-werner-herzog.png)

Looking around for other art-related software tools, I found two interesting programs. [Processing](https://processing.org/) uses the Java language to generate art, and [Piet](https://www.dangermouse.net/esoteric/piet.html), named for the Dutch artist Piet Mondrian, uses art to create language.

Processing can create art in the style of Piet Mondrian, so I thought it might be interesting to look at Mondrian's art as both the result of computer language, and as input code.

## Piet Mondrian

Piet Mondrian is considered one of the greatest artists of the 20th century. He said of art,

> Art is higher than reality and has no direct relation to reality. To approach the spiritual in art, one will make as little use as possible of reality, because reality is opposed to the spiritual. We find ourselves in the presence of an abstract art. Art should be above reality, otherwise it would have no value for man.

His paintings evolved from impressionistic landscapes like _Willow Grove: Impression of Light and Shadow_ (1905) to the abstract _Composition A_ (1923).

![mondrian](/assets/img/processing-piet/mondrian.png)

Along with other late 19th and early 20th century artists, Mondrian rejected representational art, favoring [Cubism](https://en.wikipedia.org/wiki/Cubism) during the period 1912 - 1917, eventually settling on pure abstraction using only the primary colors red, yellow, and blue, and white, gray, and black, separated by vertical and horizontal lines.

## Processing

The [Processing](https://processing.org/) language was started in 2001 by [Casey Reas](https://en.wikipedia.org/wiki/Casey_Reas) and [Ben Fry](https://en.wikipedia.org/wiki/Ben_Fry) in the Aesthetics and Computation Group at the [MIT Media Lab](https://en.wikipedia.org/wiki/MIT_Media_Lab). It includes an Interactive Development Environment (IDE) for writing the Java code to produce images. Programming in Processing consists of applying key terms such as `background`, `line`, `ellipse`, and `rect` with coordinate and size parameters to define location and size. Both video and written [tutorials](https://processing.org/tutorials) help with Processing basics.

Mondrian's _Composition A_ makes an easy introduction to Processing because he used only six colors, and the lines are horizontal or vertical. Since I'm lazy, I thought that instead of trying to draw each line, I could paint the entire canvas black, and then paint colored rectangles on top. First, I needed to know the coordinates of each line forming the boundaries of the rectangles.

I added the [_coordinates_](https://chrome.google.com/webstore/detail/coordinates/bpflbjmbfccblbhlcmlgkajdpoiepmkd?hl=en-US) extension for Chrome which shows the $x,y$ pixel coordinates of the mouse pointer. The [Piet Mondrian](https://www.piet-mondrian.org/) fan club web page lists all his paintings and has an image of [Composition A](https://www.piet-mondrian.org/composition-a-1923.jsp) where I could pick out the coordinates. I chose the right edge of each black line, using the origin $(0,0)$ as the top left corner because both _Processing_ and the _coordinates_ extension use that point as the start.

![composition-a-line-coords](/assets/img/processing-piet/composition-a-line-coords.png)

The width of the lines separating the rectangles is about 4 pixels. I numbered each rectangle to make it easier to identify in the code, so rectangle 6 lies in the region bounded by $x_2 - x_3$ and $y_1 - y_3$.

In the IDE, we need to tell _Processing_ the dimensions of the image, and the color of the background, which is $0$ for black. Setting `rectMode` to `CORNERS` means that we want to define rectangles by the coordinates of the corners, rather than one corner and width and height. In `CORNERS` mode, the first two coordinates are the upper left corner, and the next two are the lower right, corresponding to the line locations.

```python
size(721,703);
background(0);
rectMode(CORNERS);
```

Next, I set the width of the lines between rectangles.

```python
/ Line width
int LW = 4;
```

The coordinates of the origin are $(550,372)$, so we'll have to shift everything in _Processing_ by subtracting $x_0$ and $y_0$ from the line coordinates. In _Processing_, we can define variables as

```python
int left_side = 550;
int x0 = 1;
int x1 = 594 - left_side;
```

and so on.

We need to get the right colors for each rectangle using a color picker tool. Most paint programs like Windows Paint3D can extract color from an image, usually using an eyedropper icon. Click the eyedropper, then the color you'd like to select. The blue rectangles have a mix of colors, red 100, green 87, and blue 197.

![color-picker](/assets/img/processing-piet/color-picker.png)

Pure red is red $= 255$ green $= 0$, and blue $= 0$. Halfway between red and green is yellow, and halfway between green and blue is cyan.

Colors can be defined as variables using vector notation `color(red,green,blue)`:

```python
/ Colors
color red = color(228,61,52);
color yellow = color(253,238,0);
color blue = color(87,70,182);
color white = color(255,255,255);
color gray = color(215,218,225);
```

Since we set the background color in the initialization section, we don't need a variable for black.

Mondrian's colors aren't as uniform as a single color represents, and the lines between the rectangles appear to be lighter than the black rectangles, but this will satisfy my artistic cravings.

When you start _Processing_ you'll see the IDE with the name of the file called "sketch\_\<ddmmyy\>a" where "ddmmyy" is today's date. Start writing your code on the first line.

![processing-ide](/assets/img/processing-piet/processing-ide.png)

Notice that two forward slashes `//` start a comment. Also, the location of the last $x$ line, `x7` is the pixel location (1271) minus the `left_side` plus the line width `LW`. Later, we'll define the width and height of each rectangle as the line locations minus the widths, but to get the full extent of the image the line width needs to be added back.

Rectangles with an edge on either the left side or top of the image should have that coordinate set to $1$ meaning that it starts in the first pixel. I redefined $x0 = 1$ and $y0=1$ for consistency while making the rectangles.

Each rectangle can be defined by the lines that surround it, and the color by the _fill_ command,

```python
/ Rectangle #1
fill(gray);
rect(x1,y0,x3-LW,y1-LW);
```

Continue building the remaining rectangles. Save the file ([sketch_220624.pde](https://gist.github.com/XerxesZorgon/e3ca1e889b4a5ad1fd3599d63fec77f0)), and then press the Run button at the top of the edit area of the IDE (the blue triangle in a white circle). If all goes well you should have a perfect reproduction of _Composition A_.

![mondrian-sketch](/assets/img/processing-piet/mondrian-sketch.png)

If not, close the sketch window, fix the code, and try again.

## Piet

David Morgan-Mar is an Australian physicist, photographer, [blogger](https://www.dangermouse.net/), and creator of esolangs, or esoteric computer languages. His esolang [Piet](https://www.dangermouse.net/esoteric/piet.html) uses images like the _Composition A_ painting we generated with _Processing_ as the instructions to the computer. Piet "sees" six different colors and three different intensities of each color, as well as black and white.

![piet-colors](/assets/img/processing-piet/piet-colors.png)

The basic unit of code in Piet is a codel, the smallest square of color used. It's like a pixel, but to make a codel visible, they're usually many pixels across. The gray rectangle in the top left (block #1) is contained between $x1 = 44$ and $x3 = 278$ and $y0 = 1$ and $y1 = 26$. The length is 234 pixels and the height is 26 making the width 9 times the height. If we define a codel to be $26 \times 26$ pixels, then the gray block is $9 \times 1$ codels.

Every computer language needs to know how to "read" the code. For Piet, the starting point is always in the upper left corner, which would be a black codel. Piet uses two different pointers to control the direction of travel through the program. The _Direction Pointer_ (DP) initially points to the right and is the direction taken until it reaches the edge of a color block. The direction can be right, left, up, or down.

The _Codel Chooser_ (CC) selects the edge of the current codel which can be either the left or right edge. The starting value for the CC is left, and the values for both the DP and the CC change frequently during the program execution. The rules for moving through the code are

1. The interpreter finds the edge of the current color block which is furthest in the direction of the DP. (This edge may be disjoint if the block is of a complex shape.)
2. The interpreter finds the codel of the current color block on that edge which is furthest to the CC's direction of the DP's direction of travel. (Visualize this as standing on the program and walking in the direction of the DP.)
3. The interpreter travels from that codel into the color block containing the codel immediately in the direction of the DP.

After this, the rules get more complicated than [**_The Campaign for North Africa_**](https://kotaku.com/the-notorious-board-game-that-takes-1500-hours-to-compl-1818510912). Imagine the colors, excluding white and black, wrapped around a cylinder. Next, bend the cylinder around a circle to form a torus like the image of Earth at the top. The Earth isn't flat, it's a torus. Just ask [Neil deGrasse Tyson](https://www.youtube.com/watch?v=XHBZkek8OSU).

The magentas on the right end are connected to the reds on the left end, and the light colors are connected to the dark. Depending on color and intensity changes between adjacent codels, the Piet interpreter will perform different actions.

![piet-lightness-and-hues](/assets/img/processing-piet/piet-lightness-and-hues.png)

Suppose you're on a medium yellow and move onto a dark blue. That's 3 steps in hue and one in intensity. If your next move is to the light green, then you've gone 4 steps in hue and 1 in intensity. Depending on how many steps you make, a different rule applies.

![piet-rules](/assets/img/processing-piet/piet-rules.png)

Dark blue to normal green is 4 steps in hue and 1 in intensity which is roll. Even though the move is from dark blue to light green, it's 1 Darker because you're wrapping around the torus in the clockwise direction if you're looking down the tube from the red end.

> roll: Pops the top two values off the stack and "rolls" the remaining stack entries to a depth equal to the second value popped, by a number of rolls equal to the first value popped. A single roll to depth _n_ is defined as burying the top value on the stack _n_ deep and bringing all values above it up by 1 place. A negative number of rolls rolls in the opposite direction. A negative depth is an error and the command is ignored. If a roll is greater than an implementation-dependent maximum stack depth, it is handled as an implementation-dependent error, though simply ignoring the command is recommended.

So that's clear. The stack is the computer memory. It's like a stack of paper where you can write one number or character on a piece of paper, and then "push" it onto the top of the pile. To get the number back, you "pop" it off the top of the stack. You can only pop one number at a time, and only the top number on the stack.

The computer can do basic arithmetic - add, subtract, multiply and divide. It does this by popping the top number off the stack, popping the next one, adding the two together, and pushing the result back onto the stack. Five color changes and two darker pops a character from the stack. Even though all data on the stack are integers, the command `out(char)` prints the [ASCII](https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html) equivalent of the top number on the stack. A 65 becomes "A", 90 is "Z", 97 is a lower case "a", and 122 is "z".

More detailed instructions for programming in Piet are available from these sources:

- The official [Piet](https://www.dangermouse.net/esoteric/piet.html) page by David Morgan-Mar (aka Dangermouse)
- [Fun with Piet](https://ksick.medium.com/fun-with-piet-10b5224858e) article on Medium by [Katharina Sick](https://ksick.medium.com/)
- The Esolangs Wikipage for [Piet](https://esolangs.org/wiki/Piet)
- Manfred Moosleitner's [_Piet - An Artistic Programming Language_](http://cl-informatik.uibk.ac.at/teaching/ss15/bob/reports/ss15-MM.pdf)
- The [npiet](https://www.bertnase.de/npiet/index.html) pages with an example program [trace](https://www.bertnase.de/npiet/hi-npiet-trace.html)
- [Marc Majcher's](http://www.majcher.com/code/piet/Piet-Interpreter.html) description of the language
- Gabrielle Singh Cadieux's [slides](https://docs.google.com/presentation/d/e/2PACX-1vQL2EVXcFKY1eW475ZQakUC3YARM7OzqwvpL-eFkkVkjFMXxY1G3qOHQCP2mmxAJlPVlzKsla6o-3lc/pub?start=false&loop=false&delayms=3000#slide=id.p) of her [MasterPiets](https://gabriellesc.github.io/piet/) IDE

## MasterPiets

I think the easiest way to get acquainted with _Piet_ would be to read David Morgan-Mar's page, and then skip right to the end of the list above and go through Gabrielle Singh Cadieux's presentation. [MasterPiets](https://gabriellesc.github.io/piet/) is her implementation of the _Piet_ interpreter and it runs in a browser window, so you don't need to download anything.

![masterpiets](/assets/img/processing-piet/masterpiets.png)

Everything you need is built-in. Decide how big you want the image to be, and set the height and width. Click on the eye to display the number of codels in each block. Select a color and the pen icon to begin filling in individual blocks. When you've finished, click the green run button, or if you want to debug your code, pause with the orange button, step with light blue, or set breakpoints and run to the break using the dark blue arrow.

Let's jump right in and try to code something. Many beginning programs start by printing "Hello World", which Gabrielle has included in her slides. A slight modification could be "Welcome" for your front door welcome mat. The ASCII code for "W" is 87, so we could create a block with area 87, push it onto the stack, and then use the "out(char)" command to get "W" in the output window.

<img src="/assets/img/processing-piet/w.png" alt="w" style="zoom: 200%;" />

I filled in an area of 87 squares in red, then made a few blocks to the right in dark red ("push") and finally made one square magenta for "out(char)". Clicking the green run button pushes 87 onto the stack and then writes the character "W" in the output window.

A very nice feature of _MasterPiets_ is that when you select a color to fill in your block, the commands get rearranged in the color selection window so you know which color you need for the next command. From red, I needed dark red to "push", and then to get the "W" in the output window, I need magenta.

## Mondrian rectangle statistics

I wanted to create a painting in the spirit of Mondrian by making the blocks rectangular, but the factors of 87 are 3 and 29 which would make a skinny rectangle. The letter "e" is 101, a prime number giving a rectangle $1 \times 101$.

If you look at the [rectangles](https://gist.github.com/XerxesZorgon/ca415b3c8fcb19437aa222e8091f67f4) from several of Mondrian's [Compositions](https://www.piet-mondrian.org/piet-mondrian-paintings.jsp) (2, C, II, III, with red and blue, with blue, with gray and light brown), and compare width to height (taking the larger value as the numerator) a histogram of the ratios is:

![rectangle-ratios-hist](/assets/img/processing-piet/rectangle-ratios-hist.png)

To make _Piet_ seem more Mondrian, we should make rectangles that represent the distribution of ratios found in his original paintings. There are many probability distributions, so we need to find one that fits the data. A distribution is a mathematical function that describes the probability of an event occurring under certain conditions.

For example, if you roll a die, the probability of getting any one of the six possible numbers is presumed equally likely. The distribution describing this is called the [Uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution). Another distribution you may have seen is the [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Occurrence_and_applications) with the familiar "bell-shaped" curve. But, the data from 121 Mondrian rectangles isn't either of those two distributions.

Using [R](https://www.rstudio.com/), it's possible to estimate a good fit to the data. First, read in the data. Next, plot the empirical density and cumulative distribution:

```python
rectDims <- read.csv("../rectangle-dimensions.csv")
library(fitdistrplus)
plotdist(rectDims$Ratio, histo = TRUE, demp = TRUE, breaks = 40)
```

![empirical-cumulative-dist](/assets/img/processing-piet/empirical-cumulative-dist.png)

The dotted curve in the _Empirical density_ plot is the function we'd like to approximate. Applying the function `descdist`,

```python
descdist(rectDims$Ratio, discrete=FALSE, boot=500)
summary statistics
------
min:  1   max:  40.375
median:  1.901961
mean:  3.432443
estimated sd:  4.88203
estimated skewness:  4.998436
estimated kurtosis:  34.11326 r
```

gives basic statistics about the data. [Skewness](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm) indicates how the data tends to be displaced to one side or the other of the maximum

$$
\text{Skewness } = \frac{\sum_{i=1}^N (X_i - \mu)^3/N}{\sigma^3}.
$$

In the summary statistics, the standard deviation, $\sigma$ is labeled "estimated sd", and the mean is $\mu$ in the equation.

If you flatten or pull up a normal distribution, you've got _kurtosis_ and should seek medical advice immediately.

![standard-symmetric-pdfs](/assets/img/processing-piet/standard-symmetric-pdfs.svg)

The red curve has large kurtosis, while the magenta curve is low. The formula for kurtosis is the same as skewness, except that the exponents are $4$ instead of $3$.

The Mondrian rectangles are strongly skewed to the right side and have a sharp peak at $1$, so the kurtosis is very high as well. The `descdist` function produces a [Cullen and Frey graph](http://www.di.fc.ul.pt/~jpn/r/distributions/fitting.html)

![cullen-and-frey](/assets/img/processing-piet/cullen-and-frey.png)

showing how well the data matches several other distributions. The blue dot at (25,34) is the observed data from the Mondrian rectangles. The yellow diamonds are [bootstrap](https://machinelearningmastery.com/a-gentle-introduction-to-the-bootstrap-method/) samples generated using a Monte Carlo resampling of the original data. _[An Introduction to the Bootstrap](http://www.ru.ac.bd/stat/wp-content/uploads/sites/25/2019/03/501_02_Efron_Introduction-to-the-Bootstrap.pdf)_ by Efron and Tibshirani is a good resource.

Both the observational data and the bootstrap values fall into the region covered by the [beta distribution](https://en.wikipedia.org/wiki/Beta_distribution), so that seems like a good initial guess. But, if we fit [log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), [Weibull](https://en.wikipedia.org/wiki/Weibull_distribution), and [Gamma](https://en.wikipedia.org/wiki/Gamma_distribution) distributions, it looks like the log-normal gives the best fit

![lognormal-weibull-gamma](/assets/img/processing-piet/lognormal-weibull-gamma.png)

using the commands

```python
# Estimate distribution parameters
fitRect <- list()
fitRect$lnorm <- fitdist(RR,"lnorm")
fitRect$weibull <- fitdist(RR,"weibull")
fitRect$gamma <- fitdist(RR,"gamma")

# Plot fits
par(mfrow=c(2,2))
plot.legend <- c("lognormal", "Weibull", "gamma")
denscomp(fitRect, legendtext = plot.legend)
cdfcomp (fitRect, legendtext = plot.legend)
qqcomp  (fitRect, legendtext = plot.legend)
ppcomp  (fitRect, legendtext = plot.legend)
```

Summary statistics for the log-normal distribution are returned using

```python
> summary(fitRect$lnorm)
Fitting of the distribution ' lnorm ' by maximum likelihood
Parameters :
         estimate Std. Error
meanlog 0.8492164 0.06761462
sdlog   0.7437608 0.04781037
Loglikelihood:  -238.6264   AIC:  481.2528   BIC:  486.8444
Correlation matrix:
              meanlog         sdlog
meanlog  1.000000e+00 -2.296957e-11
sdlog   -2.296957e-11  1.000000e+00
```

which says that the mean of the log-normal fit is $\mu = 0.8492164$ and the standard deviation is $\sigma = 0.7437608$. As a check, plot the log-normal distribution using the fitted parameters,

```python
curve(dlnorm(x, meanlog=0.8492164, sdlog=0.7437608), from=0, to=40)
```

which should have the same shape as the red curve in the _Histogram and theoretical densities_ plot above.

I doubt Mondrian took this much trouble to define the distribution of the sizes of his rectangles, but if we generate random rectangles from this distribution, it will seem more Mondrian-like.

## Generating the rectangles

Looking at the ASCII table, the codes corresponding to each letter are

| Letter | W   | e   | l   | c   | o   | m   | e   |
| ------ | --- | --- | --- | --- | --- | --- | --- |
| ASCII  | 87  | 101 | 108 | 99  | 111 | 109 | 101 |

Letter "W" needs 87 blocks, which could be either $1 \times 87$ or $3 \times 29$. But, if we're willing to relax the requirements a little, we can generate a few random log-normal distributed numbers using `rlnorm`,

```python
nIter <- 5
meanlog <- 0.8492164
sdlog <- 0.7437608
rlnorm(nIter,meanlog,sdlog)
[1] 4.4361233 2.8549616 0.8354034 1.1958887 8.1149446
```

Using the first random number, we'd like to make a rectangle with sides $x$ and $y$ such that $x \times y = 87$ and $x = 4.4361233 \times y$. Let's call the random number $r$, and the ASCII representation of "W", $n = 87$. Then

$$
\begin{aligned}
xy &= n \\
y &= \frac{x}{r} \\
\frac{x^2}{r} &= n \\
x &= \sqrt{rn}
\end{aligned}
$$

Since the random number $r$ isn't likely to be a whole number, and the square root of $r \times n$ isn't either, then we need to round $x$ to the nearest integer. To get $y$, divide $x$ by $r$, and round to the nearest integer. This leaves a remainder, so we'll have to make a small rectangle to be added to the first.

Rather than calculating the values for $x$ and $y$ for each letter, the function [`printRects`](https://gist.github.com/XerxesZorgon/b0e4fe201f51851572551c4458397574) prints several possible combinations of rectangle dimensions, and the associated remainder.

```python
inStr <- "Welcome"
nIter <- 5
meanlog <- 0.8492164
sdlog <- 0.7437608

printRects(inStr,nIter,meanlog,sdlog)
[1] "W"
[1] "(x,y) = [13, 6], rmdr = 9"
[1] "(x,y) = [9, 8], rmdr = 15"
[1] "(x,y) = [17, 4], rmdr = 19"
[1] "(x,y) = [14, 5], rmdr = 17"
[1] "(x,y) = [15, 5], rmdr = 12"
```

For "W" we could make a $13 \times 6 = 78$ rectangle, followed by a $3 \times 3 = 9$ rectangle. The code in _Piet_ would be

```python
push(78)
push(9)
add
out(char)
```

The reason for asking the function to give several possible combinations is that the remainder might be prime as in the $3^{rd}$ and $4^{th}$ cases, which would require a $1 \times 19$ or $1 \times 17$ rectangle. Since the code reduces the value of $x$ by $0.9$, sometimes the remainder works out to be one of the two dimensions of the rectangle. In that case, you can increase the length of the other side.

The rectangle dimensions I chose were

| Letter | W   | e   | l   | c   | o   | m   | e   |
| ------ | --- | --- | --- | --- | --- | --- | --- |
| ASCII  | 87  | 101 | 108 | 99  | 111 | 109 | 101 |
| x      | 13  | 11  | 12  | 11  | 12  | 11  | 9   |
| y      | 6   | 8   | 9   | 9   | 8   | 8   | 9   |
| rx     | 3   | 13  | 0   | 0   | 5   | 7   | 5   |
| ry     | 3   | 1   | 0   | 0   | 3   | 3   | 4   |

where $rx$ and $ry$ are the dimensions of the remaining rectangle. The sum of the ASCII values is 716, and we'll need more for the commands, but give yourself room for artistic creativity.

![welcome-mondrian-40](/assets/img/processing-piet/welcome-mondrian-40.png)

To make the letter "W", I made a block of $13 \times 6 = 78$ in red, followed by dark red "push", a $3 \times 3 = 9$ yellow block, and another "push" in dark yellow. Next, I put in a green block for "add" and finished with a yellow "out(char)". Here are the details:

![mondrian-create-W](/assets/img/processing-piet/mondrian-create-W.png)

The sizes of the "push", "add", and "out(char)" blocks can be anything, so sometimes I used a single codel at the end of a black line. White codels pass the pointer on to the next color block without changing anything. I found that putting in some white in the code helped keep track of which blocks belonged together to create a single letter.

The code starts in the upper left corner (the red block), travels across the top, down the right side, across the bottom, and then up the left side until it hits a solid black line where it stops. Much of the interior is never accessed, so you can put anything you like in that region.

The output from this code is shown in the MasterPiets Output window:

![mondrian-output](/assets/img/processing-piet/mondrian-output.png)

I input Mondrian's _Composition A_ into MasterPiets and it spits out some nonsense, "daed si luaP". I have no idea what that's about.

## The future of art

By changing the size of the painting, the colors used, and the size of the codel blocks, the same output can be generated in many vastly different formats. The colors used in Piet aren't entirely Mondrian, but you can get close to the original Mondrian style if you're careful. Thomas Schoch wrote this Piet program that spells "Piet" when run.

![Piet](/assets/img/processing-piet/Piet.png)

Piet is a [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness) language which means it can simulate any other Turing complete language. In principle, you could write a Piet program that would output a Processing sketch that would look like the original Piet program.

Piet isn't limited to simply printing words, either. On David Morgan-Mar's [Piet Program Gallery](https://www.dangermouse.net/esoteric/piet/samples.html) you'll find Clint Herron's implementation of Euclid's Algorithm for calculating the greatest common divisor of two integers. We discussed Euclid's Algorithm in [Haven's Haven](https://wildpeaches.xyz/blog/havens-haven/).

Artists of Mondrian's time were the Avant-Garde or Modernists. By the middle of the 20th century, art became post-modern, and by the end of the century, post-post-modern, post-millennial, post-mondrian, or [post-malone](https://www.postmalone.com/)\*. With computers and specialty esolangs we have now entered the era of pre-futurism.

---

\* Post Malone's real name is Austin Richard Post, but he used an [online rap name generator](https://www.insider.com/how-did-post-malone-get-his-name-jimmy-fallon-video-2018-10) for his first mix tape. Jan's rap name is Wilde Da Baby and mine is lil' peachfuzz.
