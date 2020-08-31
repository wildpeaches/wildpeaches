---
title: The Boonie Conundrum
subtitle: Monte Carlo simulation of a conspiracy
author: JOHN PEACH
date: 2020-08-27
tags: [math, Monte Carlo simulation, conspiracies, Gompertz Survival Function]
---

This is the tale of the Great Boonie Conspiracy in which we show through the mathematics of the Gompertz Survival Function that all conspiracies must fail. It's the story of a coverup by people who didn't cover up and were exposed in the end.

The high school is an imposing brick building with soaring white columns and a semi-circular drive enclosing an expansive lawn with tall shady oak trees. Go around to the back and you'll find the sports field where Boonie led the boys' soccer team. 

One of Boonie's responsibilities as team captain was to organize the fundraising car washes. The year this happened, Boonie decided to spice things up a bit by convincing the team to advertise the car wash by standing in the middle of the main street through town wearing only very skimpy shorts and sandals. Their "Car Wash" signs just barely covered the shorts. It's not clear whether people were more offended by the lack of clothing or the fact they were actively blocking traffic. The school answering machine rapidly filled with angry messages.

Monday morning's school announcements included one for Boonie to report to the principal's office. Principal S. demanded Boonie apologize to the town by writing a letter to the editor, and so Boonie did as he was told. Here's a lightly edited version:

"Saturday the Boys Varsity Soccer had a car wash outside of the high school.

Unfortunately, what we thought was fun and games turned out to be very offensive.

Children of all ages saw us strutting around in our sports shorts; we didn’t consider the consequences of such immature humor. 

Kids our age have been having high school carwashes to support our teams, and what we thought was the norm turned out to be disastrous."

It went on from there and seemed to be an abject apology. But if you read the first letter of each sentence you'll see the start of a hidden message which isn't exactly apologetic.

Now, if Boonie had kept this to himself maybe nobody would have noticed. The printed version didn't have the start of each sentence aligned below the previous one as I've done here. It would have been difficult to extract the hidden message. But what's the fun of keeping something like this to yourself?

This is Boonie's conundrum. As soon as he started telling his close friends, the word got around the school and everyone could read and decode the hidden message. And Boonie had signed his name to the letter.

As soon as the rumor leaped across the nearly impenetrable student/parent information barrier, Roger and I sketched up a graph something like this on my whiteboard and began estimating how long Boonie had until he was doomed to face the wrath of Principal S. a second time.

![](/assets/img/the-boonie-conundrum/boonie-graph.png){.mx-auto .blend-multiply}

We figured he had about three weeks and it turned out we were right to within a day or two. 


A simplified version might help explain this. Suppose there are five friends: Alex, Boonie, Channing, Drew, Ellison. A way to visualize this is through a matrix like this,

![](/assets/img/the-boonie-conundrum/friends.png){.mx-auto .blend-multiply}

The row with a "C" in front (for Channing) has "T" (true) in columns "Boonie" and "Channing" but "F" (false) for the others meaning Channing is friends with Boonie, but not Alex, Drew or Ellison. Next we'll add in a vector of people who know about the hidden message.  At the beginning only Boonie knows.

![](/assets/img/the-boonie-conundrum/knows-day-1.png){.mx-auto .blend-multiply}

The highlighted column corresponds to the "T" in the knowledge vector to the right of the friends matrix, and indicates everyone Boonie tells, in this case, Channing and Drew. You can multiply the friends matrix by the rumor knowledge vector by taking the first entry in the vector "F" and "multiplying" the entire first column of the friends. This makes everything for that column false, so put an "F" in the first position of the output vector on the right after the equals sign. The next entry is "T" because Boonie knows, and the column under "B" contains F,T,T,T,F so those places where there's a "T" become "T" in the output vector, but "F" always remains "F". The remaining entries in the knowledge vector are "F" so they don't contribute anything.

This process can be repeated simulating the spread of the rumor from day to day. On the second day, Boonie, Channing and Drew are all in on the rumor, so if any one of them tells someone else, that person knows. In other words, a single "T" in the yellow highlighted region on the "A" row is sufficient for Alex to know. Drew knows and Drew is friends with Alex, so Alex hears about the story. The reason we put a "T" in the Boonie row and column is it keeps Boonie in the know at each step. In fact, all of the entries on the diagonal are true for the same reason. 

![](/assets/img/the-boonie-conundrum/knows-day-2.png){.mx-auto .blend-multiply}

This is a start, but rumors don't spread this quickly. We have motive, but not opportunity yet. Friends may get together during the school day, but there might be someone else (a teacher, Principal S.?) or another reason the message doesn't get passed on. To simulate this, we'll create an opportunity matrix the same size as the friends matrix which will have mostly F's but with a few T's where the opportunity exists. The opportunity matrix changes randomly every day simulating different interactions between students. Now if there is a T in both the friends matrix and the opportunity matrix, the rumor expands.

We also need a way to transmit the message from students to parents to teachers to Principal S. A slight simplification is to remove the parents layer because there is about a one-to-one correspondence between students and parental units. That's not quite true, but good enough for now. 

Transmission from students to teachers is a matrix with the same number of rows as there are teachers, the number of columns corresponding to the number of students, and populated with T's and F's according to whether a student is a ratfink or not. Last, we'll have a one row matrix (vector) which passes information from the faculty to Principal S. Most of the teachers can be considered ratfinks. 

To recap, the simulation generates a random student friends matrix, a teacher friends matrix, and a student-teacher crossover matrix. The code generates rumor knowledge vectors for students and teachers, and a scalar for Principal S. They are all set to false except for the Boonie entry. Every day, the rumor spreads using the friends matrices and random opportunity matrices until it reaches Principal S. at which point Boonie is done for.


## Experimental Results

To run the simulation we need estimates of the interactions between students, teachers and Principal S. I used these:

* Number of students = 1500
* Number of teachers = 100
* Probability that a student is friends with another student = 0.5%. This works out to being friends with 7.5 other students, which might seem low at first, but it includes a factor for how comfortable one student is with telling someone else the story.
* Student opportunity = 1%. That is, there's a 1% chance that during any given day he or she will run into a friend and have the opportunity to pass on the rumor. 
* Student-teacher opportunity = 0.1%. There is a much lower probability that a student can pass it on to a teacher.
* Teacher friends = 5%. Out of 100 teachers, each one on average is sufficiently friendly with 5 others that they might discuss Boonie.
* Teacher opportunity = 0.1%. Teachers are busy, they don't have time for these things.
* Teacher-principal opportunity = 1%. The principal is also busy.

With all that, this is a plot of a typical run. ([Octave code boonieSim.m](/assets/code/the-boonie-conundrum/boonieSim.m)) 

![](/assets/img/the-boonie-conundrum/the-boonie-rumor.png){.mx-auto .blend-multiply}

In 14 days, or three school weeks, the rumor goes from Boonie to Principal S. In the end, only 16% of the teachers know and about 2% or 30 students have heard the story, yet Boonie gets caught anyway.

If you'd like to recreate the simulation, download and install [Octave](https://www.gnu.org/software/octave/), and then run the function boonieSim.m above.

While working on the Manhattan Project, Stanislaw Ulam developed a method to study the motion and energy of atomic particles. It couldn't give a precise answer, but gave statistical approximations. By running a simple experiment on the Eniac computer many times he was able to gain insight into the overall properties. Nicolas Metropolis suggested a secret code name for the process, "Monte Carlo", because of the random nature of the method.

We can easily perform Monte Carlo experiments with the Boonie rumor, too. Since the friends and opportunity matrices are generated randomly each time the function is called, the results will be slightly different at the end of each run. By repeating the experiment many times, we can start to see patterns.

In this [Monte Carlo experiment](/assets/code/the-boonie-conundrum/boonie_Monte_Carlo.m), I ran the same Boonie rumor function 1000 times. The peak seems to occur around 20 days, and the longest he got away with it is 80 days, but he always gets caught. In fact, after 40 days, there are fewer and fewer cases, meaning that Boonie is very unlikely to make it longer than 40 days in general. Monte Carlo experiments are very useful for obtaining statistical insights into problems. You can also change the experiment by adjusting some of the parameters such as studentFriendship probability to see how sensitive the outcome is to a small change.

![](/assets/img/the-boonie-conundrum/boonie-monte-carlo.png){.mx-auto .blend-multiply}

## On the Viability of Conspiratorial Beliefs

In this simulation Boonie always gets caught. But what about other conspiracies? Was the moon landing faked? [Neil deGrasse Tyson](https://www.youtube.com/watch?v=uTChrirK-hw&list=PLo2qyznkcH0JXUR1zG-L5zny0BriJjc7s&index=8&t=0s) says many people saw the Saturn V liftoff, all kinds of documents and other evidence is still available, and there were thousands of people at NASA who designed the rocket and its subsystems. In the end, he says it would be easier to actually send astronauts to the moon than to try to maintain the silence of all those engineers.

David Grimes, from Oxford University, published a paper in PLOS ONE, [On the Viability of Conspiratorial Beliefs](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0147905) in which he derived an equation for the survival time of a conspiracy theory. It depends on the number of conspirators, the amount of time since the beginning of the conspiracy, and an intrinsic probability of discovery common to all conspiracies. A faked moon landing [would have been uncovered in about 3.7 years](https://www.bbc.com/news/science-environment-35411684). His equation is

$$ L(t,N(t)) = 1 - e^{-t \left( 1-\phi^{N(t)} \right) } $$

where $N(t)$ is the Gompertzian survival function,

$$ N(t) = N_0 e^{ \frac{\alpha}{\beta} \left( 1 - e^{\beta (t + t_e)} \right) }. $$

$L$ represents the probability of leakage at time $t$ and $\phi$ is the Poisson distributed mean number of failures per unit time. The Gompertz function $N(t)$ has parameters $N_0$ for the initial number of conspirators, the average age of the conspirators $t_e$ at the time of the event, and empirically derived constants $\alpha = 10^{-4}$ and $\beta = 0.085$ which model how many conspirators take the mystery to their graves. The chance that the conspiracy outlives the conspirators declines rapidly with the number of people involved.


The conclusion of the Boonie Conundrum is that while conspiracies do exist, eventually there's a reckoning.

---

## Conspiracy theory resources

With so many conspiracy theories running around on the internet we need a way to check and debunk stories. A good start is to [Google](www.google.com) it to see what comes up. For breaking news check multiple sources around the world (see [List of news agencies](https://en.wikipedia.org/wiki/List_of_news_agencies)). For in depth analysis scholarly articles are often good, but sometimes they are locked behind paywalls. Browser extensions can help get around this such as [unpaywall](http://unpaywall.org/products/extension) and [Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome/blob/master/README.md).

The list below contains fact checking organizations, and some articles on how to deal with conspiracy theories and people who believe them. But, even these should be taken with a grain of salt. Question everything!

* [Snopes](https://www.snopes.com/)
* [FactCheck](https://www.factcheck.org/)
* [PolitiFact](https://www.politifact.com/)
* [Skeptical Inquirer](https://skepticalinquirer.org/)
* [RationalWiki](https://rationalwiki.org/wiki/Main_Page)
* [Media Bias/Fact Check](https://mediabiasfactcheck.com/)
* [Ad Fontes Media](https://www.adfontesmedia.com/)
* [The 8 Best Fact-Checking Sites for Finding Unbiased Truth](https://www.makeuseof.com/tag/true-5-factchecking-websites/) (Repeats some listed above)
* [Wikipedia article "Media bias in the United States"](https://en.wikipedia.org/wiki/Media_bias_in_the_United_States)
* [Wikipedia article "Conspiracy theory"](https://en.wikipedia.org/wiki/Conspiracy_theory)
* [List of fake news websites](https://en.wikipedia.org/wiki/List_of_fake_news_websites)
* [List of topics characterized as pseudoscience](https://en.wikipedia.org/wiki/List_of_topics_characterized_as_pseudoscience)
* [MIT Technology Review "How to talk to conspiracy theorists—and still be kind"](https://www.technologyreview.com/2020/07/15/1004950/how-to-talk-to-conspiracy-theorists-and-still-be-kind/)
* [Techniques of Science Denial](https://upload.wikimedia.org/wikipedia/commons/6/61/FLICC_Taxonomy_of_Logical_Fallacies.jpg?fbclid=IwAR3jMZJT2os4If5wy-zF1tYPzzkxWlUfHmp-Rm8ew3rBxGb4ahffN-JzF8E)

