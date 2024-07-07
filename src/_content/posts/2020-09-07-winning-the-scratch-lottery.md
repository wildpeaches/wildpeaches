---
title: Winning the Scratch Lottery
subtitle: An Experiment in OCR, Robotics, and Statistics
author: John Peach
lede: I know someone who has won the million-dollar lottery. Twice. Ask any mathematician about playing the lottery and you'll likely be told not to waste your money because you can't win. That would be bad advice because the lottery is rigged. In your favor.
hero:
  url: /assets/img/2020-09-07-winning-the-scratch-lottery/playing-the-lottery.jpg
  alt:
tags: [math]
keywords: [Gambling, Statistics, Expectation, Optical Character Recognition]
socialImg: /assets/img/2020-09-07-winning-the-scratch-lottery/bingo-card.jpg
software: ['sikulix', 'python', 'tesseract']
---

## Mohan Srivastava's Discovery

Mohan Srivastava is a geological statistician from Toronto who helps mining companies find gold. In 2003, he struck gold in another way by figuring out how to beat the Canadian scratch lottery, as he explained to [Jonah Lehrer of Wired Magazine](https://www.wired.com/2011/01/ff-lottery/). People think the lottery is a completely random game, but it isn't. The lottery commission knows a priori how much it expects to earn from each game by controlling the number of winning tickets.

Printing companies need to produce the right number of winning tickets at each payoff level. Let's look at a typical bingo ticket, one that I bought in Delaware several years ago.

![A scratch lottery bingo card.](/assets/img/2020-09-07-winning-the-scratch-lottery/bingo-card.jpg)

<p align = "center"><b>Delaware Bingo Scratch Lottery Card</b></p>

To play, you scratch off all the "?'s" in the area labeled "Caller's Card" and then scratch off matching numbers in each of the four Bingo cards above. If you complete any horizontal, vertical, or diagonal line you've got a winner. Srivastava figured that for a winning ticket, each number in a winning row, column or diagonal can only appear once on any of the cards. Otherwise, it would be difficult to keep track of where the winning numbers appear and how they contribute to winning cards.

On my ticket, the number 11 shows up in the upper left corner of cards 1 through 3, so 11 is not likely to be part of a winning Bingo. So, Srivastava's method is simple. First, count how many times each number appears in each of the four cards. Second, check to see if any numbers that appear only once form a winning Bingo pattern. He found that by using this method, he could predict winners about 90% of the time. He estimated it would take him about 45 seconds to crack each ticket, and he thought he could make about \$600 a day.

## Expectations

We need to talk about expectations. Mathematically, the expected value of a random process is the sum of the probability times the payoff for each possible outcome,

$$
E[x] = \sum_{i=1}^n p_i x_i
$$

where $p_i$ is the probability of event $i$ and $x_i$ is the payoff for the event. Another formulation is to include the cost, $C$, of the ticket in the expectation and then divide by the cost to get the expected return per dollar wagered,

$$
E[x] = \frac{\sum_{i=1}^n p_i x_i - C}{C} = \frac{\sum_{i=1}^n p_i x_i}{C} - 1.
$$

In this formulation, if $E[x] > 0$ you make money on average, while if the value is negative you lose.

Below is an example of the odds and payoffs for each possible winning combination from [Delaware](https://www.delottery.com/Content/images/instant-lottery/instant-details/DE192OSB_V12_05032020.jpg) (slightly different from my card). It's easy to calculate the expectation using Excel. I made a spreadsheet with columns for the payoff amount (Win), the odds, the probability, and the expected value for that combination. I also calculated the adjusted probability and adjusted expectation. I'll explain those in a bit.

{% table %}
| Win | Odds | Probability | Expectation | Adjusted Prob | Adjusted Exp |
|-----:|------:|------------:|------------:|--------------:|-------------:|
| 3 | 10 | 0.1000 | 0.3000 | 0.3579 | 1.0736 |
| 3 | 20 | 0.0500 | 0.1500 | 0.1789 | 0.5368 |
| 4 | 50 | 0.0200 | 0.0800 | 0.0716 | 0.2863 |
| 4 | 50 | 0.0200 | 0.0800 | 0.0716 | 0.2863 |
| 8 | 200 | 0.0050 | 0.0400 | 0.0179 | 0.1432 |
| 8 | 200 | 0.0050 | 0.0400 | 0.0179 | 0.1432 |
| 8 | 200 | 0.0050 | 0.0400 | 0.0179 | 0.1432 |
| 8 | 200 | 0.0050 | 0.0400 | 0.0179 | 0.1432 |
| 10 | 400 | 0.0025 | 0.0250 | 0.0089 | 0.0895 |
| 10 | 200 | 0.0050 | 0.0500 | 0.0179 | 0.1789 |
| 10 | 400 | 0.0025 | 0.0250 | 0.0089 | 0.0895 |
| 15 | 200 | 0.0050 | 0.0750 | 0.0179 | 0.2684 |
| 15 | 200 | 0.0050 | 0.0750 | 0.0179 | 0.2684 |
| 20 | 400 | 0.0025 | 0.0500 | 0.0089 | 0.1789 |
| 20 | 400 | 0.0025 | 0.0500 | 0.0089 | 0.1789 |
| 20 | 400 | 0.0025 | 0.0500 | 0.0089 | 0.1789 |
| 20 | 400 | 0.0025 | 0.0500 | 0.0089 | 0.1789 |
| 30 | 750 | 0.0013 | 0.0400 | 0.0048 | 0.1432 |
| 30 | 750 | 0.0013 | 0.0400 | 0.0048 | 0.1432 |
| 30 | 250 | 0.0040 | 0.1200 | 0.0143 | 0.4295 |
| 50 | 2500 | 0.0004 | 0.0200 | 0.0014 | 0.0716 |
| 50 | 3000 | 0.0003 | 0.0167 | 0.0012 | 0.0596 |
| 50 | 750 | 0.0013 | 0.0667 | 0.0048 | 0.2386 |
| 50 | 1500 | 0.0007 | 0.0333 | 0.0024 | 0.1193 |
| 60 | 3000 | 0.0003 | 0.0200 | 0.0012 | 0.0716 |
| 60 | 3000 | 0.0003 | 0.0200 | 0.0012 | 0.0716 |
| 60 | 1500 | 0.0007 | 0.0400 | 0.0024 | 0.1432 |
| 100 | 3000 | 0.0003 | 0.0333 | 0.0012 | 0.1193 |
| 100 | 3000 | 0.0003 | 0.0333 | 0.0012 | 0.1193 |
| 500 | 30000 | 0.0000 | 0.0167 | 0.0001 | 0.0596 |
| 500 | 30000 | 0.0000 | 0.0167 | 0.0001 | 0.0596 |
| 5000 | 60000 | 0.0000 | 0.0833 | 0.0001 | 0.2982 |
| | | 0.2515 | -0.3933 | 0.9000 | 1.1711 |
{% endtable %}

Looking at the first row corresponding to a Bingo on line 1 of card 1, the payoff is \$3 and the odds are 1 in 10 which makes the probability 1/10 = 0.1. Multiplying the payoff by the probability gives the expectation for that Bingo of \$0.30. Sum the expectations and then divide by the \$3 cost of the card (minus 1) to calculate the overall expectation of about -39 cents. In other words, you can expect to lose \$0.39 of every dollar that you play.

What if Mohan is right that you can improve your odds so you're picking winners 90\% of the time? At the bottom of the probability column, you'll see that I summed all of the probabilities and found the chances of getting a winning ticket are 0.2515 without using his method. In the adjusted probability column, I multiplied each probability by a factor of 0.9 / 0.2515 = 3.58 to adjust the total probability to 0.9. Next, I recalculated the expectations with these new probabilities and summed them to get the adjusted expectation of \$1.17. Winning \$1.17 for every dollar spent is a pretty decent return.

How much time and money would Mohan have to spend on this? To clear \$600 per day at \$1.17 per winning ticket, he'd have to turn in 171 winning tickets. (171 tickets $\times$ \$3 per ticket = \$513, and \$513 $\times$ \$1.17 = \$600.) But, he'd have to buy 3.58 times that many and weed out the losers, which means he'd be buying 679 total tickets for \$2037. At 45 seconds per ticket, it would take him 8.5 hours per day. Ugh. Tedious.

These numbers may be somewhat different from his because I was using expected values for the Delaware lottery. Still, it seems like a lot of time spent to collect \$600, and there's no getting around the tedium of looking at a bunch of lottery tickets all day long. Or is there?

## How to Beat the Lottery

I'll describe a potential path to scamming the lottery. First, you need to buy a lot of lottery tickets. After taking pictures of them, convert the images into useful numbers with [Optical Character Recognition](https://en.wikipedia.org/wiki/Optical_character_recognition) (OCR). Count of how many times each number appears on any of the four cards. We'll only keep track of those appearing exactly once. For the unique numbers, create a binary array of their positions on each card. Identify Bingos by summing rows, columns, and diagonals. Finally, scrape the dots in the Caller's Card and the corresponding numbers on each of the four cards to reveal winners. Return the unused cards to the store for refunds and cash in the winning tickets.

Most states have apps to scan lottery tickets with your phone, but a more rapid method would be handy. Something like this [Epson scanner](https://www.bestbuy.com/site/epson-es-400-high-speed-desktop-color-document-duplex-scanner-black/5689001.p?skuId=5689001), although a less expensive method would be to use the [Scanner Bin - The Clever Document Scanning Solution](https://www.amazon.com/Scanner-Bin-Document-Scanning-Solution/dp/B00XM7LKZM/ref=zg_bs_5728047011_7?_encoding=UTF8&psc=1&refRID=DZ59XYTDA4NPM42DXYJ4) so long as you could find a way to rapidly and automatically move the tickets out of the bin after capturing the image. Let's assume for now we can find a convenient method to take lots of pictures of lottery tickets in a hurry.

[SikuliX by RaiMan](http://sikulix.com/) automates keyboard, mouse, and screen functions programmatically. It uses [OpenCV](https://opencv.org/) to find images on the screen. Search for this pattern to locate each of the four Bingo cards :

![Grid structure.](/assets/img/2020-09-07-winning-the-scratch-lottery/lines-mask.png)

<p align = "center"><b>Lottery Ticket Lines Mask</b></p>

SikuliX returns the location of the pattern on the screen, and can capture images of each card with a snipping tool like [Greenshot](https://getgreenshot.org/). SikuliX can also find the locations of other special symbols such as the "FREE" in the middle of the cards and the little stack of money at random places on each card.

Image processing in [Python](https://www.anaconda.com/) will let us remove the lines by subtracting the mask shown above from each card, as well as the special symbols. With a clean image, [Tesseract OCR](https://nanonets.com/blog/ocr-with-tesseract/) gives the text equivalent of each number found in the card images. Using the online OCR program [OCRSpace](https://ocr.space/) without any image cleaning returned these numbers for each card:

![Comparison of Bingo Card and OCR results.](/assets/img/2020-09-07-winning-the-scratch-lottery/bingo-card-ocr-results.svg)

<p align = "center"><b>Bingo Card OCR</b></p>

There are errors, but Tesseract even correctly converted the "FREE" at the center of each Bingo card. Cleaning up the images before running the OCR should take care of most of the errors.

The next step is to identify the singleton occurrences of numbers on the cards. We'll set up a $100 \times 1$ zero vector for each number from 0 to 99, and then add 1 to the index corresponding to each number found on the cards. So, the 11 in the upper left corner of Cards 1-3 will mean a 3 will appear in the 12th entry of the vector. After every number has been counted, we can search the index vector for 1's. We'll set up four $5 \times 5$ zero arrays corresponding to each of the four cards, and put 1's into locations containing the singleton numbers.

By summing these card arrays horizontally and vertically we can find rows or columns totaling 5 (converting the FREE and special symbols to 1's) to identify winning Bingos. It's only a little harder to check the diagonals.

Of course, it would be nice to fully automate the card handling process with a [Sain Smart robotic arm](https://www.sainsmart.com/products/6-axis-desktop-robotic-arm-assembled?variant=45101269588&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2018-08-06&utm_source=google&utm_medium=smart_campaign&gclid=CjwKCAjw4rf6BRAvEiwAn2Q76hbnjXvDfjqax182Z_2NH5rwnm5mNKEy2nbklUOrsnatKz64XbQ5BhoCg7EQAvD_BwE), which could also be used to scratch off the lottery tickets. But, in any case, I think we've arrived at phase 3.

![South Park meme showing gnomes staring at project plan. Phase 1: Collect underpants. Phase 2: ? Phase 3: Profit.](/assets/img/2020-09-07-winning-the-scratch-lottery/underpants-gnomes.jpg)

<p align = "center"><b>South Park Underpants Gnomes</b></p>

---

Many states have adopted scratch lotteries as a way to pay for their schools, but the lottery is a very regressive tax on the mathematically challenged. By filtering out the winning tickets we'd be effectively increasing this regressive taxation. On the other hand, the Wired article suggested that some people are using the lottery to launder money, so it might be considered a social service to foil their efforts. Given the moral issues and all the software and hardware required you have to wonder, is it worth all this effort for a lousy \$100K a year?

---

_Update December 16, 2020:_ [An elderly mathematician hacked the lottery for 26 million](https://entrepreneurshandbook.co/an-elderly-mathematician-hacked-the-lottery-for-26-million-121c28faa88b)

------

#### Image credits

[Delaware Lottery Games](https://www.delottery.com/Instant-Games)

[South Park](https://southpark.cc.com/) Underpants Gnomes, Season 2 E 17 • 12/16/1998
