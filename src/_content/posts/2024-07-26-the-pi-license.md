---
title: The Case of the Prime Suspect
subtitle: Your PI license to snoop
author: John Peach
lede: 
hero:
  url: /assets/img/2024-07-26-the-pi-license/Sam-Spade.webp
  alt:
tags: [mathematics, prime numbers, number theory, puzzles]
keywords: [prime factors, odious numbers, balanced primes, happy numbers, apocalyptic numbers]
socialImg: /assets/img/2024-07-26-the-pi-license/Sam-Spade.jpg
software: ['pari-gp','notepad++']
---

[Home](https://wildpeaches.github.io/)

![TracerBullett](/assets/img/2024-07-26-the-pi-license/TracerBullett.webp)

## The investigation opens

> *A picture of the dame was beginning to emerge. Some said she was polite, happy, balanced, in the prime of her life, and a friend of de Polignac's. But there was a dark side. She could be amenable to suggestions, especially at the wrong end of a .38, her moods were cyclic, and she was deficient in something, but I didn't know what. Social skills? Cash to pay off Lenny the mobster? Others called her odious and said she had apocalyptic visions because of how she was raised. In a lineup photo of the usual suspects, she was the shortest.  I needed to do a number on her to uncover who she really was.*

As I mulled over the case, my eyes drifted to the license plate of a car parked outside my office window. Those four digits... could they hold the key to cracking this case wide open?

That's when it hit me. This wasn't just any ordinary case – this was a job for a PI. Not your run-of-the-mill Private Investigator, mind you, but a Prime Investigator. It was time to dig into the mysterious world of number theory, using license plates as my guide.

From the clues could I solve the mystery?

## Spade digs in

Look around and you'll see numbers everywhere and you may even discover some interesting properties. A great source for numbers "in nature" are license plates which occasionally reveal insights into number theory. A well-known property is that of prime numbers which are divisible only by 1 and the number itself. Mathematicians have been studying the properties of primes and have developed many [conjectures](https://en.wikipedia.org/wiki/Category:Conjectures_about_prime_numbers) such as the [Goldbach Conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture) mentioned in [The Goldfish Conjecture](https://wildpeaches.xyz/blog/the-goldfish-conjecture/).

Prime numbers are the building blocks of mathematics – numbers divisible only by 1 and themselves. They're like the lone wolves of the number world, refusing to be broken down any further. And just like in my line of work, these primes have some fascinating characteristics that set them apart from the common numbers.

Let's start our investigation by looking at some methods for finding divisors of a number. Then, we'll examine some unusual properties of numbers and use a special tool – a Pari/GP program – to search for four-digit primes that have these properties. By the end of this case, we'll have uncovered the identity of our mysterious dame – a very special four-digit prime number hiding in plain sight on a license plate.

So grab your magnifying glass and put on your thinking cap. It's time to solve The Case of the Prime Suspect.

## License numbers

License plates often have three letters and four numbers which gives $26^3 \times 10000 = 175,760,000$ possible combinations, plenty enough for any state. Sometimes I try to find the prime factors of the four-digit number on a license plate, and my favorite so far is $4830$ which has prime factors $2,3,5,7,23$. Since $3 \times 7 = 21$, then we get $21 \times 23 \times 10 = 4830$. If you remember that $22^2 = 484$ you can calculate in your head
$$
21 \times 23 = (22-1) \times (22+1) = 22^2 - 1 = 483.
$$
The last factor $23$ is the concatenation of the first two factors $2$ and $3$.

How do you find the prime factors of a number? Well, you need to start small and check the first three prime numbers, $2,3, \text{ and } 5$. If the number is even then it's divisible by $2$, if the sum of the digits is divisible by $3$ then so is the number, and if it ends in $0$ or $5$, it's divisible by $5$.

Divisibility by $7$ is done by dropping trailing zeros, then doubling the last digit and subtracting the answer from the remainder.  So, $4830 \rightarrow 483$, double the $3$ and subtract from $48$ to get $42$. Since $42$ is divisible by $7,$ then so is $4830$. 

A number is a multiple of $11$ if the sum of the digits in the even locations minus the sum in the odd locations is a multiple of $11$ (including zero). The number $121$ is a multiple of $11$ because $1 + 1 - 2 = 0$, but $4830$ isn't since $4 + 3 - 8 = -1$. 

The trick for $13$ is to multiply the last digit by $4$ and add it to the sum of the remaining digits. For $17$ subtract $5$ times the last digit from the remaining digits to see if that's divisible by $17$, and for $19$ add twice the last digit to the remaining number. If the result for any of these is still too large, the process can be repeated. 

Make a quick estimate of the square root of the number since the prime divisors don't need to be any larger than the square root. For $4830$, once you've factored out $10 = 2 \times 5$, the square root of $483$ is smaller than $25$, so you won't need to check anything beyond $23$.

| Prime | Division trick                                               |
| ----- | ------------------------------------------------------------ |
| 2     | Ends in an even number                                       |
| 3     | Sum of digits is divisible by 3                              |
| 5     | Ends in 0 or 5                                               |
| 7     | Twice the last digit subtracted from the remainder is a multiple of 7 |
| 11    | The sum of the digits in even locations minus the sum of digits in odd locations is a multiple of 11 |
| 13    | Four times the last digit subtracted from the remainder is a multiple of 13 |
| 17    | Five times the last digit subtracted from the remainder is a multiple of 17 |
| 19    | Twice the last digit added to the remainder is a multiple of 19 |

Sometimes, though, these tricks won't work because the number you've found is prime.

## Clues for the PI (Prime Investigator)

I tried all of my sleuthing tricks on a license plate I saw recently, but couldn't find any divisors. When I got home I checked with [Pari/GP](Pari/GP) which confirmed that the number was prime. Not only that, but it had several other interesting properties, which you can find on the [Numbers Aplenty](https://www.numbersaplenty.com/) website. The mystery license plate number had these properties:

- [Polite](https://www.numbersaplenty.com/set/impolite_number/): It can be expressed as the sum of at least two consecutive natural numbers. The only impolite numbers are powers of $2$, and since the number is prime, it's not impolite. The number $666 = 1+2+3+ \ldots + 36$ is polite because it is the sum of the first $36$ natural numbers. 
- [Happy](https://www.numbersaplenty.com/set/happy_number/): Add the squares of the digits to get a new number. Continue the process and if you ever get to $1$, the original number is happy. 139 is an example of a happy number because $139 \rightarrow 1+9 + 81 = 91 \rightarrow 81 + 1 = 82 \rightarrow 64 + 4 = 68 \rightarrow 36 + 64 = 100 \rightarrow 1.$
- [Balanced](https://www.numbersaplenty.com/set/balanced_prime/) (prime): A prime equidistant from the previous and subsequent prime numbers. 5 is balanced because it is halfway between 3 and 7.
- [de Polignac](https://www.numbersaplenty.com/set/de_Polignac_number/): An odd number $n$ that cannot be expressed as $n = 2^k + p$ for some prime $p$. 2789 is a de Polignac number.
- [Amenable](https://www.numbersaplenty.com/set/amenable_number/): A number $n$ is amenable if there exists $n$ integers such that the sum of the $n$ integers equals the product. The first amenable numbers are 1,5,8,9,12,13,16,17 and 20. 
- [Cyclic](https://www.numbersaplenty.com/set/cyclic_number/): A number $n$ is cyclic if $n$ and $\phi(n)$ are [coprime](https://en.wikipedia.org/wiki/Coprime_integers) (have no common divisors). The function $\phi$ is [Euler's totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function) which counts the number of positive integers less than $n$ that are relatively prime with $n$. All prime numbers are cyclic.
- [Deficient](https://www.numbersaplenty.com/set/deficient_number/): If the sum of the proper divisors is less than the number itself, the number is deficient. All prime numbers are deficient.
- [Odious](https://www.numbersaplenty.com/set/odious_number/): A number is odious if the binary representation of the number has an odd number of 1's, and is evil if the number of 1's is even. In base $2$, the number $21 = 10101,$ so $21$ is odious.
- [Apocalyptic](https://www.numbersaplenty.com/set/apocalyptic_number/): If $2^n$ contains the sequence $666$ then $n$ is apocalyptic.

Can you solve for the mystery number from the clues? Since we know that the number is a four-digit  prime (no leading zeros), we know that it's polite, cyclic and deficient. But, given the other properties, can we point the finger at the suspect? Some of the clues will be much easier to check than others. If we generate a list of prime numbers greater than 1,000 and less than 10,000, it should be fairly easy to find balanced primes. 

With a little bit of coding, you can check if a number is happy and odious. It might be a little more difficult to see if it's apocalyptic, but Pari/GP is capable of calculating $2^n$ for any license plate $n$.

One property that might be difficult to check is if a number is amenable. With the other clues available though, maybe we won't need it.

## Narrowing down the list of suspects

With a bit of Pari/GP code the potential list of numbers can be reduced. We know the mystery number is a prime, and In Pari the function `primes(n)` gives almost what we need. The `primes` function returns the first $n$ primes, but what we need are the primes less than a given value. 

For a four-digit number, we want primes less than 10,000. The function `primepi(n)` tells how many primes are less than $n$, so by combining the two functions we can get a vector of primes less than $n$, `p1 = primes(primepi(1e4)`.

By generating a second vector containing the primes less than 1,000 we can use the `setdiff` function to get a vector of four digit primes. The function `primes_between` found in `pi_license` returns the vector of primes between any two numbers.

There are more than 1,000 four-digit primes, but the list can be significantly shortened by keeping only balanced primes. The next step is to filter out only odious primes which can be done with the Pari functions `binary`, `vecsum` and `%`. The last one is the modulus operator which returns 1 from `n % 2` if $n$ is odd and 0 if $n$ is even.

The Pari function `digits` creates a vector of digits from a number, so $n=1234$ becomes the vector $[1,2,3,4].$ Newer versions of Pari/GP permit list comprehension; `[x^2 | x <- digits(n)]` returns the vector $[1,4,9,16]$ and  `vecsum([x^2 | x <- digits(n)])` gives $1+4+9+16 = 30$.  Sequences always end in one of ten numbers, $\{0,1,4,16,20,37,42,58,89,145 \},$ and are considered "happy" if the sequence ends in 1. 

![happy](/assets/img/2024-07-26-the-pi-license/happy.webp)

<p align = "center"><b>Happy integer sequences</b></p>

The smallest four-digit apocalyptic number is $1002$,

```python
gp > 2^1002
% = 42860344287450692837937001962400072422456192468221344297750015534814042044997444899727935152627834325103786916702125873007485811427692561743938310298794299215738271099296923941684298420249484567511816728612185899934327765069595070236662175784308251658284785910746168670641719326610497547348822672277504
```

To find the sequence $666$ in a number, we first need to convert the number to a string, and then use a [search function](https://stackoverflow.com/questions/66966205/is-there-a-better-way-to-get-substring-in-pari-gp)

```python
substr(s,n,m) = strchr(Vecsmall(s)[n..n+m-1]);
```

 to find the substring "666". 

With these detective tools and the clues given above, you should be able to sniff out the right number.

## Case closed

I'll let you run the Pari/GP code [pi_license.gp](https://gist.github.com/XerxesZorgon/16603960ab722ad2ff3daa03389ce4d6) to solve the mystery. You could extend the search by writing functions for some of the other categories found in [Numbers Aplenty](https://www.numbersaplenty.com/) such as [enlightened](https://www.numbersaplenty.com/set/enlightened_number/), [frugal](https://www.numbersaplenty.com/set/frugal_number/), [magic](https://www.numbersaplenty.com/set/magic_constant/), [magnanimous](https://www.numbersaplenty.com/set/magnanimous_number/), [primeval](https://www.numbersaplenty.com/set/primeval_number/), [taxicab](https://www.numbersaplenty.com/set/taxicab_number/), [undulating](https://www.numbersaplenty.com/set/undulating_number/) or [zygodrome](https://www.numbersaplenty.com/set/zygodrome/) numbers. Taxicab numbers appeared in *[Haven's Haven](https://wildpeaches.xyz/blog/havens-haven/)*, and are numbers that can be expressed in more than one way as the sum of two cubes.  

I didn't include a function for [de Polignac's](https://www.numbersaplenty.com/set/de_Polignac_number/) condition. Can you write a Pari/GP function to check for this? Would it help narrow down the list of suspects?

If you're up to a challenge, prove that the search for happy numbers always ends in one of the ten numbers in the set given above. Finding such a proof would be [astonishing](https://www.numbersaplenty.com/set/astonishing_number/), [brilliant](https://www.numbersaplenty.com/set/brilliant_number/) and [admirable](https://www.numbersaplenty.com/set/admirable_number/).

## Image credits

- Hero: [The Adventures of Sam Spade](https://archive.org/details/OTRR_Sam_Spade_Singles) - [Old Time Radio Researchers Group](https://archive.org/search.php?query=creator%3A"Old+Time+Radio+Researchers+Group"), Text removal with [cleanup.pictures](https://cleanup.pictures/)
- [Tracer Bullet](https://www.blackgate.com/2022/07/17/a-black-gat-in-the-hand-tracer-bullet/) - Calvin and Hobbes, Bill Waterson
- Happy integer sequences - [Numbers Aplenty](https://www.numbersaplenty.com/set/happy_number/)

## Code for this article

[pi_license.gp](https://gist.github.com/XerxesZorgon/16603960ab722ad2ff3daa03389ce4d6) - Finds a four-digit prime number n such that n is

- Balanced: A prime equidistant from the previous and subsequent prime numbers.
- Odious: A number is odious if the binary representation of the number is an odd number of 1's, and is evil if the number of 1's is even.
- Happy: Add the squares of the digits to get a new number. Continue the process and if you ever get to $1$, the original number is happy.
- Apocalyptic: If $2^n$ contains the sequence $666$, then $n$ is apocalyptic.

You may need a text editor such as [Notepad++](https://notepad-plus-plus.org/) to write or modify Pari/GP functions.



 
