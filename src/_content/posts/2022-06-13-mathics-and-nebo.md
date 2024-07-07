---
title: Mathics and Nebo
subtitle: Symbolic Mathematics and AI Handwriting Recognition
author: John Peach
lede: "I think this is the beginning of a beautiful friendship."
hero:
  url: /assets/img/2022-06-13-mathics-and-nebo/Casablanca.jpeg
  alt:
tags: [math]
keywords: []
socialImg: /assets/img/2022-06-13-mathics-and-nebo/Casablanca.jpeg
software: ['mathics', 'nebo', 'anaconda', 'python', 'geogebra', 'obsidian', 'syncthing']
---

I've been playing around with a couple of fun math toys recently, [Mathics](https://mathics.org/) and [Nebo](https://www.nebo.app/). Mathics is a free, open-source symbolic calculator. Nebo is a note-taking app for laptops, tablets, and smartphones with stylus inputs, and it can accept and understand mathematics. Nebo is free for the iPad, ($10 on Windows), and you can try Nebo [here](https://webdemo.myscript.com/views/math/index.html#).

## Mathics

The description of Mathics says,

> Mathics is a free, open-source general-purpose computer algebra system featuring Mathematica®-compatible syntax and functions. 

It relies on Python libraries, in particular, [Sympy](https://www.sympy.org/en/index.html) for symbolics, [mpmath](https://mpmath.org/doc/current/) for arbitrary precision floating-point arithmetic, [MathJax](https://www.mathjax.org/) to render equations, and [three.js](https://threejs.org/) and [Asymptote](https://asymptote.sourceforge.io/) to create graphics. Mathics isn't as powerful as Mathematica, but the price is much better. Here's a problem we can try in Mathics,
$$
x = i + \frac{1}{i + \frac{1}{i + \frac{1}{i + \ldots}}} \\
$$
Find $x$.

Notice that everything in the denominator of the first fraction is identical to $x$, so the equation can be rewritten as 
$$
\begin{aligned}
x &= i + \frac{1}{x} \\
x^2 & = ix + 1 \\
x^2 &- ix - 1 = 0
\end{aligned}
$$
Using the quadratic formula,
$$
x = \frac{i \pm \sqrt{i^2 - 4(-1)}}{2} = \frac{i \pm \sqrt{-1+4}}{2} = \frac{i \pm \sqrt{3}}{2}.
$$
In Mathics, the symbol for the imaginary unit $i = \sqrt{-1}$ is $I$, so to solve for $x$ type

![x2-Ix-1](/assets/img/2022-06-13-mathics-and-nebo/x2-Ix-1.png)

followed by `Ctrl-Enter` to get the solution. Hmmm. These solutions are correct, but not informative. The solution for $x$ has an $x$ in it.

The roots of a polynomial are the values of $x$ that make the polynomial zero, in this case, $x^2 - ix -1 = 0$. An $n^{th}-$degree polynomial will always have $n$ roots, even if some are [complex](https://en.wikipedia.org/wiki/Complex_number) (real + imaginary parts). Suppose the two roots to this polynomial are $r$ and $s$, which means that
$$
x^2-ix-1 = (x-r)(x-s).
$$
Putting this into Mathics and collecting terms,

![expand-rs](/assets/img/2022-06-13-mathics-and-nebo/expand-rs.png)

Then $rs = -1$ and $-r-s = -i \Rightarrow r + s = i$. Solving these two equations simultaneously in Mathics,

![rs-simul](/assets/img/2022-06-13-mathics-and-nebo/rs-simul.png)

which is correct.

To open a help window in Mathics, click on the `?` in the upper right corner. Complete documentation is available online [here](https://mathics.org/docs/mathics-latest.pdf).

![Mathics-help](/assets/img/2022-06-13-mathics-and-nebo/Mathics-help.png)

## Nebo

MyScript Nebo uses AI to interpret handwriting. If you have a tablet or laptop that accepts input from a stylus, Nebo will convert your handwritten notes to text. With Nebo, you can draw diagrams, and it will clean them up:

![nebo-diagram](/assets/img/2022-06-13-mathics-and-nebo/nebo-diagram.png)

You can insert images into a document, and draw freehand sketches. I tend to write ideas down on a pad of paper, and the next great idea goes on the next empty page in the pad. My house is cluttered with pads. What was this one all about?

![notes](/assets/img/2022-06-13-mathics-and-nebo/notes.jpg)

So I thought Nebo might be useful in organizing and cleaning up all my scribblings. Here's an example:

![nebo-script-to-tex](/assets/img/2022-06-13-mathics-and-nebo/nebo-script-to-tex.png)

On the left are the original hand-written equations. After tapping twice on the screen, Nebo converted everything to MathJax format. I had to fix three errors - two of the lower case $v$'s had been changed to upper case, and one of the $r$'s was interpreted as an $n$. Other than that, Nebo got it exactly right on the first try.

If you copy a section of math in Nebo, you can paste it into a markdown editor like this.
$$
\begin{aligned}
x^{2}+bx+c&=0\\
\left( x-r\right) \times \left( x-s\right) &=x^{2}-\left( r+s\right) x+rs\\
b&=-\left( r+s\right) \\
c&=rs\\
u&=\dfrac{r+s}{2}\\
v&=u-r=s-u\\
r&=u-v,s=u+v\\
rs&=\left( u-v\right) \times \left( u+v\right) =u^{2}-v^{2}
\end{aligned}
$$
Nebo includes the formatting characters 

```
\begin{aligned}
x^{2}+bx+c&=0\\
\left( x-r\right) \times \left( x-s\right) &=x^{2}-\left( r+s\right) x+rs\\
b&=-\left( r+s\right) \\
c&=rs\\
u&=\dfrac{r+s}{2}\\
v&=u-r=s-u\\
r&=u-v,s=u+v\\
rs&=\left( u-v\right) \times \left( u+v\right) =u^{2}-v^{2}
\end{aligned}
```

I added ampersands before the equal signs to align each equation with the one above it. Nebo did all of the rest, including the `\begin{aligned}` and `\end{aligned}`.

Getting back to the math, to find the roots of the quadratic polynomial $f(x) = x^2 + bx + c$, you might remember the quadratic formula,
$$
x = \frac{-b \pm \sqrt{b^2 - 4c}}{2}.
$$
If you have the form $f(x) = ax^2 + bx + c$, divide by $a$ and calling $\frac{b}{a}$ the new $b$, and $\frac{c}{a}$ the new $c$, which has the same roots. 

![fx-GeoGebra](/assets/img/2022-06-13-mathics-and-nebo/fx-GeoGebra.png)

If we call the roots $r$ and $s$, then the plot of $f(x)$ will cross the $x-$axis at $r$ and $s$, and $f$ can be written as
$$
f(x) = x^2 + bx + c = (x-r)(x-s).
$$
Expanding the terms on the right,
$$
f(x) = (x-r)(x-s) = x^2 - (r+s)x + rs
$$
which means that $b = -(r+s)$ and $c = rs$. 

Let's call the midpoint between $r$ and $s$ the point $u$. Then
$$
u = \frac{r+s}{2}
$$
or 
$$
u = -\frac{b}{2}.
$$
Since $u$ is the midpoint, the distance from $u$ to $s$ is the same as the distance from $r$ to $u$, so let's call that distance $v$. Another way to express this is $u = r + v$ and $s = v + u$. Solving for $r$ in the first equation, $r = u-v.$ Since $c = rs$ then
$$
c = rs = (u-v)(u+v) = u^2 - v^2.
$$
After calculating $u$ in terms of $b$, we can get $v$ from $c$ and $u$,
$$
v = \sqrt{u^2 - c}.
$$
To recap, first find the midpoint of the unknown roots which will be at $-\frac{b}{2}$, and then get the distance to the roots which is $\sqrt{u^2-c}$. The roots will be $v \pm u$. So, now you can follow all of my chicken-scratching in Nebo.

For example, suppose $f(x) = x^2 - 3x + 1$, the plot in the figure above drawn in [GeoGebra](https://www.geogebra.org/calculator). Then $u = -\frac{3}{2}$ and
$$
v = \sqrt{\left( -\frac{3}{2} \right)^2 - 1} = \sqrt{\frac{9}{4} - 1} = \sqrt{\frac{9}{4}-\frac{4}{4}} = \frac{\sqrt{5}}{2}.
$$
So, the roots are
$$
x = \frac{3}{2} \pm \frac{\sqrt{5}}{2} = \frac{3 \pm \sqrt{5}}{2}.
$$

One more Nebo trick - write the equation with an equal sign at the end like this:

![root-handwritten-Nebo](/assets/img/2022-06-13-mathics-and-nebo/root-handwritten-Nebo.png)

Double-tap, and you'll get a neatly written equation with the solution!

![root-solution-Nebo](/assets/img/2022-06-13-mathics-and-nebo/root-solution-Nebo.png)

Erase the $+$, replace it with a minus sign, and double-tap to get the other root $r \approx 0.382$. Nebo doesn't do complex math, so we wouldn't be able to solve the problem done earlier in Mathics, but for quick calculations, it's pretty neat!

A nice introduction to Nebo is available from [Paperless](https://www.youtube.com/watch?v=32MRVPpcezQ) and Vojislav Dimitrijevic of [My Deep Guide](https://www.mydeepguide.com/) reviews the mathematical capabilities [here](https://www.youtube.com/watch?v=TggWrK5dWAU).

## Obsessed with Obsidian

[Obsidian](https://obsidian.md/) is the electronic version of my pads of paper. Obsidian is a [markdown](https://www.markdownguide.org/) editor and a knowledge database of your ideas [linked](https://help.obsidian.md/How+to/Internal+link) together. [Upmath](https://upmath.me/) shows how to get started using [LaTeX](https://www.latex-project.org/) in Markdown files to write equations. Help is available by clicking on the `?` in the lower left-corner, which opens a new pop-up window. An outline appears in the left panel, and document links are shown in the right panel.

![obsidian-help](/assets/img/2022-06-13-mathics-and-nebo/obsidian-help.png)

The graphical view of help looks like this:

![obsidian-help-graph-view](/assets/img/2022-06-13-mathics-and-nebo/obsidian-help-graph-view.png)

Click on `Open another vault` to switch to your files. To extend the capabilities of Obsidian there are both [core plugins](https://help.obsidian.md/Plugins/Core+plugins) and [community plugins](https://obsidian.md/plugins). [The Sweet Setup](https://thesweetsetup.com/our-favorite-obsidian-plugins/) blog lists some of their favorite plugins, and [LibHunt](https://www.libhunt.com/topic/obsidian-plugin) lists the top community projects. 

## SyncThing

I switch between the desktop computer and laptop frequently, depending on whichever is the most convenient at the moment. But, how should I keep files synchronized between the two? Copying back and forth whenever I modify a file on one seemed tedious.

![floppy](/assets/img/2022-06-13-mathics-and-nebo/floppy.png)

This is where [SyncThing](https://syncthing.net/) comes to the rescue. It continuously synchronizes files between any number of your computers, all in the background, using your home network. Take a look at the ["Getting Started"](https://docs.syncthing.net/v1.20.2/intro/getting-started.html) page, and online [documentation](https://docs.syncthing.net/v1.20.2/index.html). After installation, all you need to do is identify your computers and the folders you'd like to synchronize. After that, the software keeps everything up-to-date.

![SyncThing](/assets/img/2022-06-13-mathics-and-nebo/SyncThing.png)

For Windows users, [SyncTrayzor](https://github.com/canton7/SyncTrayzor) is a tray utility for SyncThing. 

After installing SyncThing on both computers, I realized I needed to have both running simultaneously to be able to sync, but I almost always shut down one when working on the other. The solution is that SyncThing is available for both [Android](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid) and [iOS](https://forum.syncthing.net/t/isyncthing-ios-client-for-syncthing-now-in-beta/15815) phones, using the same convenient GUI. 

Since my phone is almost always on, it keeps the latest version of all the files from whichever computer I'm currently using. I've even found that Python code is automatically reloaded in the [Spyder](https://www.spyder-ide.org/) editor, so long as I've remembered to save my work.

Now, with the phone acting as an intermediary, SyncThing makes switching between computers [indistinguishable from magic.](https://lab.cccb.org/en/arthur-c-clarke-any-sufficiently-advanced-technology-is-indistinguishable-from-magic/)

## Mathics Installation

Installing Nebo, Obsidian, and SyncThing is just a matter of following their instructions. Mathics is slightly more complicated but still easy. Here are the steps I used:

1. Start Anaconda Powershell as administrator. I use [Anaconda Python](https://www.anaconda.com/products/distribution).
2. Check python version: python --version
3. Check pip version: pip --version
4. Install Mathics: pip install Mathics-omnibus[full]
5. Type: mathicsserver --help to check the installation
6. Start mathics: mathicsserver
7. In your browser (Chrome or Firefox) go to localhost:8000
8. Save the mathics.png image from [https://github.com/Mathics3](https://github.com/Mathics3?fbclid=IwAR30MJOUVhE1BeJ1uIEctq_2jAevvqTOg0629uNGziOkcWzm1nFOt00y7NI)
9. Convert the image to mathics.ico using [https://www.icoconverter.com/](https://www.icoconverter.com/?fbclid=IwAR192kpJyFGPPFrxtq_uV-1YPKH1od92unZthIrqY4zAJDWOEx4qeNQGx2Q)
10. Make a batch file called *mathics.bat* containing the single command *mathicsserver* 
11. Create a desktop icon linked to mathics.bat, and change the icon to mathics.ico
12. Click on the desktop icon to start Mathics, and type localhost:8000 in the address bar. Drag to the bookmarks bar. 

Running Mathics from now on requires two steps - clicking on the icon to start the server followed by clicking the link to localhost:8000.

------

#### Image credits

Hero: [Humphrey Bogart](https://www.imdb.com/name/nm0000007/?ref_=tt_mv_desc) and [Claude Rains](https://www.imdb.com/name/nm0001647/?ref_=tt_mv_desc) in [Casablanca (1942)](https://www.imdb.com/title/tt0034583/?ref_=tt_mv_desc). [IMDB](https://www.imdb.com/media/rm3692832256/tt0034583) (photo 101)

Floppy Disk: [How did people get apps on their computer before the Internet?](https://retrocomputing.stackexchange.com/questions/25315/how-did-people-get-apps-on-their-computer-before-the-internet) [user3840170](https://retrocomputing.stackexchange.com/users/15334/user3840170), Stack Exchange, Oct 4, 2022