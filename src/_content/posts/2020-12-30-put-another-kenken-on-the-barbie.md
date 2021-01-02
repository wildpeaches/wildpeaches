---
title: Put Another KenKen on the Barbie 
subtitle: Partitions with Pari/GP
lede: If you like Sudoku, you'll love KenKen!
author: John Peach
tags: [math]
keywords: [KenKen, Pari/GP, Integer Partitions, Number theory]
---
## Tetsuya Miyamoto

Tetsuya Miyamoto (宮本 哲也), a Japanese mathematics teacher invented KenKen ("cleverness squared") in 2004 to help his students improve math and logic skills. His students have dominated Japan’s “Math Olympics,” the country’s top mathematics competition for ages 11–15. Mr. Miyamoto said he believes in “the art of teaching without teaching”, and his favorite hobby is scuba diving. He's the star of the new documentary, [“Miyamoto and the Machine, The Story of KenKen”](https://www.miyamotoandthemachine.com/), and featured in a New Yorker article, ["The Puzzle Inventor Who Makes Math Beautiful."](https://www.newyorker.com/culture/the-new-yorker-documentary/the-puzzle-inventor-who-makes-math-beautiful)

Miyamoto told [Device Plus](https://www.deviceplus.com/others/interviews/kenken-puzzle-inventors-tips-for-engineers/), "Some would say the most important thing in mathematics is calculation. You memorize the formulas and calculate to solve a problem. In my opinion, there is much more than just calculation. I think the process of challenging yourself with different questions and struggling to figure out solutions on your own is what makes solving any kind of problems more fun and meaningful. This is the reason why I never step in to help my students solve puzzles, because I do not want to risk taking away their invaluable learning experiences."

![Tetsuya Miyamoto](/assets/img/put-another-kenken-on-the-barbie/tetsuya-miyamoto.svg)

His approach to challenges is, "I make a list of things I do not like to do and I pick one from the list that I absolutely do not want to do. Then, I set a date and get it done." 

* Scrub the toilet
* Take out the trash
* Eat [artificial calamari](https://www.thisamericanlife.org/725/turkey-in-a-face-mask/act-one-3)

Your list might be different.

## KenKen

If you've played [Sudoku](https://www.websudoku.com/), you know that the game is a $9 \times 9$ grid of cells where the cells must be filled with the integers $1 - 9$ such that each digit appears exactly once in each row, column, and $3 \times 3$ block. [KenKen](http://www.kenkenpuzzle.com/) is similar, but Miyamoto added an intriguing twist. 

![KenKen puzzle](/assets/img/put-another-kenken-on-the-barbie/KenKen-puzzle.svg)

Instead of square blocks, the board is divided into irregularly shaped cages, outlined in black. Each cage has a number in the upper left square and an arithmetic operator $(+ - \times \div)$. For example, in this puzzle, the cage in the upper left corner is $1 \times 2$ with $1-$ indicating that the difference between the two numbers must be $1$. You could enter $9,8$ or $8,9$ or any other pair that differs by one. The order doesn't matter except that you need to satisfy the rules of Sudoku by having one of each digit in every row and column. 

Notice that cages containing subtraction or division operators have only two squares, but ones with addition or multiplication often cover many squares. The next cage to the right contains the operation $90 \times$ meaning that the product of the three numbers must be $90$, and the cage in the upper right corner has $13+$ indicating that the sum of the two squares must be $13$. 

For a Sudoku puzzle to be uniquely solvable [at least 17 squares](https://www.technologyreview.com/2012/01/06/188520/mathematicians-solve-minimum-sudoku-problem/) must be filled, but KenKen puzzles are completely blank. In this puzzle, there is a $9$ without any arithmetic operators in the fourth row from the top, and the sixth column. This means that you can fill in that one square with a $9$. 

The [online game](http://www.kenkenpuzzle.com/) lets you choose the size of the puzzle so you might want to start with a smaller one.

## Partitions

Suppose your puzzle has a cage with $7+$ in it. How many ways can you write $7$ as the sum of integers from $1$ to $7$? The answer is 15: 

$$\{(7),(1,6),(2,5),(3,4),(1,1,5),(1,2,4),\newline
(1,3,3),(2,2,3),(1,1,1,4),(1,1,2,3),(1,2,2,2),\newline
(1,1,1,1,3),(1,1,1,2,2),(1,1,1,1,1,2),(1,1,1,1,1,1,1)\}$$ 

and this set is called the partition of $7$. 

See the $20+$ in the first column? There are $627$ ways to write $20$ as the sum of numbers between $1$ and $20$. The good news is that you can eliminate any that aren't exactly $4$ long and any that repeat numbers. The bad news is that you still have to look through $627$ possible solutions. The number of partitions of an integer is given by the [Partition function](https://en.wikipedia.org/wiki/Partition_function_(number_theory)).  The only way to get an exact solution for the number of partitions is through [recurrence relations](https://en.wikipedia.org/wiki/Recurrence_relation), meaning that you have to calculate the solutions for smaller numbers and then use those answers to get the answer you want. 

You will also need to work out multiplicative partitions. In the bottom row is $28 \times$ in a cage with two elements. This isn't too bad because $28$ can be factored as
$$
28 = 2^2 \times 7.
$$
This means that we can write the product in two ways, $28 = 2 \times 14$ or $28 = 4 \times 7$. Since the grid is $9 \times 9$, no entry can be greater than $9$, so the only possible partition is $(4,7)$. We don't know the order, but at least we've narrowed it down to two numbers.

Above the $28$ is a cage containing $4050 \times$ with $5$ elements spanning $2$ rows and $3$ columns. The factors of $4050$ are
$$
4050 = 2 \times 3^4 \times 5^2.
$$
You have to be careful with this one because a $1$, $3$, $5$, or $9$ could appear in each row if it's in two different columns. One possible solution might be

![Solution 4050](/assets/img/put-another-kenken-on-the-barbie/solution-4050.svg)

How can we find all of the partitions? Let's take a look at the PARI/GP computer algebra language.

## PARI/GP and Notepad++ Installation

[PARI/GP](https://pari.math.u-bordeaux.fr/) is an open-source computer algebra system originally developed by [Henri Cohen](https://www.math.u-bordeaux.fr/~hecohen/) for fast computations in number theory, but it can also be used for matrices, polynomials, power series, algebraic numbers, and transcendental functions. PARI is the C language library of functions for fast computations while GP is the scripting language on top of PARI. 

PARI/GP doesn't have an Interactive Development Environment (IDE) typical of many programming languages, but functions may be written in any text editor and imported into the interactive scripting shell *gp*. My preferred editor for PARI/GP is [Notepad++](https://notepad-plus-plus.org/) because syntax highlighting is available for many languages including PARI/GP.

Download the latest version of PARI/GP [here](https://pari.math.u-bordeaux.fr/download.html) and run the installer. If you want to be one of the cool kids, download the [logo](https://pari.math.u-bordeaux.fr/logo.html) and convert it to an [icon](https://icoconvert.com/) so you can start PARI from your desktop. Next, get the latest version of [Notepad++](https://notepad-plus-plus.org/downloads/). Once Notepad++ is running, click on <u>L</u>anguage $\rightarrow$ User Defined Language $\rightarrow$ Open User Defined Language folder ...

Besides the languages that come with Notepad++, there is a collection of [User Defined Languages (UDL)](https://github.com/notepad-plus-plus/userDefinedLanguages) ([list here](https://github.com/notepad-plus-plus/userDefinedLanguages/blob/master/udl-list.md)), and the PARI/GP definition is available [here](https://github.com/notepad-plus-plus/userDefinedLanguages/blob/master/UDLs/PARI-GP_by-third_maths.xml). Click on "Raw", copy the text into a new tab in Notepad++, and save it as "PariGP.xml" in the UDL folder. Now click on <u>L</u>anguage $\rightarrow$ User Defined Language $\rightarrow$ Define your language... which opens a dialog box. Click on Import... and navigate to the UDL folder. Select PariGP.xml and open it. If you click on <u>L</u>anguage again, you should see a dot next to User-defined at the bottom indicating that the PARI/GP lexer has been loaded. The Notepad++ user manual contains the [complete instructions](https://npp-user-manual.org/docs/user-defined-language-system/) for working with UDLs. 

![PARI_GP UDL](/assets/img/put-another-kenken-on-the-barbie/PARIGP-UDL.svg)

## The PARI/GP Command Window

Start PARI/GP by clicking on the desktop icon (because you're one of the cool kids). It should look something like this:

![PariGP Command Window](/assets/img/put-another-kenken-on-the-barbie/PariGP-command-window.svg)

The command prompt `gp >` is where you interact directly with the PARI engine. PARI understands all of the basic mathematical expressions as well as many specific to number theory. If you type `numbpart(20)` at the prompt PARI will return 627, the number of arithmetic partitions of 20. Enter `partitions(5)` to get a list of the partitions of $5$.

![Partitions](/assets/img/put-another-kenken-on-the-barbie/Partitions.svg)

You might find it handy to have the [PARI/GP Reference Card](http://math.mit.edu/~brubaker/PARI/PARIrefcard.pdf) open in a browser window to quickly look up the commands, or the [available functions by category](https://pari.math.u-bordeaux.fr/dochtml/html-stable/), which is more current. The `partitions` function is in the Combinatorics section.

## An Additive Partition Function

As we've seen, PARI/GP comes with a partition function built-in. For KenKen, though, we don't need all possible partitions of a number. The size of the puzzle limits the maximum value in any partition. If the sum is $20$ but the puzzle is $9 \times 9$, we can eliminate any subset containing values greater than $9$. We can also get rid of any sets that aren't the right length. In the example above, the leftmost column contains a cage with $4$ squares and must sum to $20$. 

Any of the partitions of $20$ that aren't $4$ long can be eliminated. Since all of the squares for this cage are contained in the first column, the values must be unique which further reduces the possible partitions. Just below this cage is another with 2 squares and $17+$ as the required operation. The only way to get a sum of $17$ is $8+9$. We don't know the order, but only an $8$ and a $9$ can appear in those two squares. This means that any partition of $20$ can't have $8$ or $9$ in it.

In PARI/GP the partitions of a target integer $t$ can be stored in a vector,

```clike
v = partions(t);
```

and the number of partitions as

```clike
np = numbpart(t);
```

Semi-colons at the end of lines suppress the output in the command window and separate lines in a function. 

To filter out the partitions that don't meet the requirements of a cage, we need to check each partition vector to see if the length is the size of the cage, $c$,

```clike
length(v) == c
```

and the maximum value of $v$ is less than the size of the puzzle, $n$,

```clike
vecmax(v) <= n
```

If the input parameter $u$ has been set to $1$ (true) then we need to check that all entries in $v$ are unique. Sets in PARI/GP are defined to have unique values, so simply converting $v$ to a set and then back to a vector removes duplicates,

```clike
u = Vec(Set(v));
```

Then, if the length of $u$ is the same as the length of $v$ we know that $v$ contains all unique entries,

```clike
length(v) == length(unique(v));
```

where the `unique` function is defined as

```clike
unique(v) = {u = Vec(Set(v));}
```

Functions are given names (in this case, `unique`), and the code is contained within curly braces. The value returned is either the last value calculated (`u`) or explicitly as `Return(u)`.

Putting it all together, you can write the function [`sumPart`](https://gist.github.com/XerxesZorgon/472509428d4e8b4b48bbd89fda8549b5) in Notepad++ (save with the extension *.gp* to get syntax highlighting)

```clike
sumPart(t,c,n,u=1,e=[]) = 
{
  \\ List of all additive partitions
  v = partitions(t);
  np = numbpart(t);
  
  \\ Select partitions meeting input requirements
  P = [];
  for(k = 1,np,
    if(kFilt(v[k],c,n,u,e),P = concat(P,[v[k]]))
  );
  
  \\ Print partitions
  for(k = 1,length(P),
    print(Vec(P[k]))
  );
  
  return(P)
  
}
```


and the filtering function [`kFilt`](https://gist.github.com/XerxesZorgon/3b73557826369e217ab30c1b5f84448a)

```clike
kFilt(v,c,n,u=1,e=[]) = 
{
	length(v) == c &   
	vecmax(v) <= n & 
	if(u,isunique(v),1) & 
	length(setintersect(Set(v),Set(e))) == 0;
}
```

In the function `sumPart`, the inputs are `t,c,n,u,e`. Setting `u=1` and `e=[]` means that the default value for `u` is true, and the default value for `e` is empty. This means that if there is a cage contained in a row or column and you haven't eliminated any entries yet, you need only supply `sumPart` with the input parameters `t,c,n`.

In the middle section where the partitions are filtered the first line is

```clike
P = [];
```

which creates the empty vector `P`. Next, the function loops over all `np` partitions, and if it finds one that satisfies the requirements, it concatenates the vector `v[k]` to `P`. The function `kFilt` returns true or false, so the `if` statement checks if `kFilt` is true and if it is, it does the concatenation. If you want something done when `kFilt` is false, put another comma in after `P = concat(P,v[k])` and write the code for the false condition. 

Comments are started with double backslashes, `\\` and block comments contained between `/*` and `*/`. 

Let's try it out. Click on the links above to get the code, save the files to a local folder, and start PARI/GP in that folder. In PARI/GP type,

```clike
gp> \r sumPart 
```

The `\r` command loads an external function, and PARI/GP will print the entire function when it loads. To find partitions for the cage with $20+$, run

```clike
sumPart(20,4,9,1,[8,9]);
```

which should return

```clike
[2, 5, 6, 7]
[3, 4, 6, 7]
```

Instead of searching through 627 possible partitions, we only need to consider two of them. These functions are available on GitHub along with the dependent functions [unique and isunique](https://gist.github.com/XerxesZorgon/409a0cc6364333381d38496591db8627).

## A Multiplicative Partition Function

 Multiplicative partitions (also called unordered factorizations, "factorisatio numerorum" in Latin) have been studied at least since 1923, but there doesn't seem to be a closed-form solution for the number of multiplicative partitions of an integer although there are upper bounds on how big it can be. A multiplicative partition of an integer is the set of all sets whose product is the integer. 

The [Online Encyclopedia of Integer Sequences (OEIS)](https://oeis.org/) describes a [multiplicative partition function](https://oeis.org/A001055) as the number of ways of factoring $n$ with all factors greater than $1$. This is a pin plot of the [number of partitions](https://oeis.org/A001055/graph) for each integer up to 200:

![Pin plot A001055](/assets/img/put-another-kenken-on-the-barbie/pin-plot-A001055.svg){.panel .py-4}

Suppose a cage with four cells has the operation $72 \times$. There are $16$ multiplicative partitions of $72 = 2^3 \times 3^2$, 

$$\{(2,2,2,3,3),(2,2,2,9),(2,2,3,6),(2,2,18),(2,3,3,4),\newline
(2,3,12),(2,4,9),(2,6,6),(2,36),(3,3,8),\newline
(3,4,6),(3,24),(4,18),(6,12),(8,9),(72)\}$$ 

The three $2$'s could all go into separate cells, or two could go into one cell and the other in a different cell, or they could all go into the same cell. The $3$'s are similar, but there are only two of them. Looking at the list of multiplicative partitions of  $72$ it's easy to see that the only possible partitions in a $9 \times 9$ puzzle are $(2,2,2,9),(2,2,3,6)$, and $(2,3,3,4)$, but you'd need to generate the full list first to be sure. 

But there's a complication because of the KenKen rules. Partitions don't include $1$'s, but the puzzle might have a multiplicative partition that includes a $1$. One of the partitions is $(2,4,9)$, but the cage might contain $(1,2,4,9)$. 

PARI/GP doesn't have a multiplicative equivalent of the function `numbpart`, but there is one on the OEIS written by [Michael B. Porter](https://oeis.org/A001055) called `fcnt`. The inputs are the integer $n$ and the maximum factor value $m$. For consistency with PARI/GP notation, I renamed it [`mnumbpart`](https://gist.github.com/XerxesZorgon/27bec0167801a19d8ed24542c30672ad) and made the second input, $m$, optional. I haven't found a PARI/GP function to return the set of multiplicative partitions, so I wrote [`mpartitions`](https://gist.github.com/XerxesZorgon/bbb00a0c55a429e07ca5d09f2ef43494).

With these two functions for multiplicative partitions, we can write a function called [`multPart`](https://gist.github.com/XerxesZorgon/42efdcda67fecf266d03534e50d9098c) that will work like `sumPart` does for additive partitions for KenKen. The only difference is that with multiplicative partitions we need to be able to include $1$'s in the set of possible solutions. To do this, find all of the possible partitions with cage size $c$, then append a $1$ to solutions with length $c-1$, and if the cage spans multiple rows or columns, append two $1$'s  to solutions with length $c-2$.

```clike
\\ Select partitions meeting input requirements
P = [];
for(k = 1,np,
  \\ Select all solutions with cage length c
  if(kFilt(v[k],c,n,u,e),P = concat(P,[v[k]]));
  
  \\ Select solutions with cage length c-1 and include one 1
  if(kFilt(v[k],c-1,n,u,e),P = concat(P,[concat(1,v[k])]));
  
  \\ If uniqueness is not required, allow two 1's
  if( u == 0, 
    if(kFilt(v[k],c-2,n,u,e),P = concat(P,[concat([1,1],v[k])]));
  );				
);
```

The last case assumes that at least one cage dimension is less than or equal to two. 

To load the two KenKen helper functions, at the *gp* prompt type 

```clike
\r sumPart
```

```clike
\r multPart
```

which will give you access to the functions `sumPart`, `multPart`, `mnumbpart`, `mpartitions`, `kFilt`, and `unique` at the PARI/GP command prompt. 

## What's next?

Tetsuya Miyamoto would likely say that this takes away from your opportunity to explore the logic of KenKen, so it would probably be a good idea to try a few puzzles before using this PARI/GP code. These functions won't solve the puzzle, but they significantly reduce the number of possible partitions for a cage. If you'd like to try to build a KenKen solver, Vardges Melkonian wrote, ["An Integer Programming Model for the KenKen Problem"](https://file.scirp.org/Html/1-1040464_66317.htm). He provides code written in [AMPL](https://ampl.com/) (A Mathematical Programming Language). AMPL is proprietary, but it may be possible to run some code [online](https://ampl.com/try-ampl/start/) or to use the open-source subset of AMPL, [GNU MathProg](http://web.mit.edu/lpsolve_v5525/doc/MathProg.htm).

For experiments in [number theory](https://en.wikipedia.org/wiki/Number_theory) and [combinatorics](https://en.wikipedia.org/wiki/Combinatorics), PARI/GP excels. Hundreds of specialized functions have been written for the language, and it is very fast. It lacks an IDE and debugging can only be done at the command line. Scripts are written in an external text editor, or may be run in a [SageMath](https://www.sagemath.org/) notebook. 

It might be possible to write an extension for PARI/GP in [VSCode](https://code.visualstudio.com/) or [Eclipse](https://www.eclipse.org/), where the [FAQ page](https://wiki.eclipse.org/The_Official_Eclipse_FAQs) has a section called ["Implementing Support for Your Own Language."](https://wiki.eclipse.org/The_Official_Eclipse_FAQs#Implementing_Support_for_Your_Own_Language) With an integrated debugger, PARI/GP would be a very powerful mathematical language.

And now it's time to present the revised list of things you absolutely don't want to do:

1. Play endless games of KenKen
1. Learn number theory
1. Writing an editor/debugger for PARI/GP.
{reversed}

We have a winner. Let me know when it's ready.