---
title: Introduction to NetLogo
subtitle: Using Agent-Based Modeling to Study Emergent Systems
author: John Peach
lede: I'm going to introduce NetLogo and show you how to write a simple program that has a surprising outcome. I won't show the result, so you'll need to download the software and try it yourself.
tags: [math]
keywords: [Agent Based Model, Emergent Systems]
---

## NetLogo

[NetLogo](https://ccl.northwestern.edu/netlogo/) is a simulation environment for multi-agent systems. Agents operate according to a set of rules within their environment. For example, the environment might be a grassy area where sheep can graze, and wolves attack and eat the sheep. Eating the sheep increases wolf energy allowing them to reproduce as does eating grass for the sheep.

But with more wolves around, the sheep population declines until the wolves starve, and if the sheep eat too much grass before it can regrow, they starve. The rules are simple. Sheep search for grassy patches and eat what they find, while the wolves hunt for sheep. With enough energy, sheep and wolves reproduce. An emergent system evolves from the collective actions of the agents.

In this example, sheep, wolves, and grassy patches are agents. The wolf-sheep simulation is an instance of the [Lotka-Volterra](https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations) predator-prey model,

$$
\frac{ds}{dt} = \alpha s - \beta sw
$$

$$
\frac{dw}{dt} = \delta sw - \gamma s
$$

where $\frac{ds}{dt}$ represents the growth rate of the sheep population $s$, $\frac{dw}{dt}$ is the rate of increase of the wolf population $w$, and the constants $\alpha, \beta, \delta$, and $\gamma$ control the interaction between the species. NetLogo lets you simulate the predator-prey model without needing to understand the math behind the interactions.

![Wolves and sheep](/assets/img/netlogo-introduction/wolf-sheep.svg)

The rules for the sheep-agents are pretty simple. First, they move in search of a new patch of grass and this move costs one unit of energy. If they find grass they eat it, but if their energy is too low they die. With sufficient energy, they can reproduce. Wolf rules are the same except they eat sheep instead of grass. At each time step, or "tick" every agent follows it's own set of rules and the system evolves.

```text
  ask sheep [
    move ; sheep turn to a random new direction, move forward one unit

    ; sheep eat grass, grass grows, and it costs sheep energy to move
    set energy energy - 1  ; deduct energy for sheep
    eat-grass  ; sheep eat grass
    death ; sheep die from starvation if they haven't eaten recently

    reproduce-sheep  ; sheep reproduce at a random rate
  ]
```

When you run this simulation you'll see the sheep running around searching for grass, the wolves searching for sheep, and the grass being eaten. A plot of the sheep and wolf populations looks like this.

![Population Plot](/assets/img/netlogo-introduction/population-plot.svg)

If you'd like to run this example, go to Files $\rightarrow$ Model Library $\rightarrow$ Biology $\rightarrow$ Wolf Sheep Predation.

NetLogo provides an online [Programming Guide](http://ccl.northwestern.edu/netlogo/mathematica.html) and [Command Dictionary](http://ccl.northwestern.edu/netlogo/docs/dictionary.html) as well as tutorials. Coursera has a two-hour long project course, ["Introduction to Agent-based Modeling with NetLogo"](https://www.coursera.org/projects/abm-netlogo) guiding new users through initial programming features.

NetLogo comes with a model library containing hundreds of pre-built models in areas of Art, Philosophy, Chemistry & Physics, Games, and more. Click on Files $\rightarrow$ Model Library to see the complete list. There are also extensions available, including the ability to connect NetLogo to an [Arduino](https://www.arduino.cc/) or [GoGo board](https://gogoboard.org/) under Tools $\rightarrow$ Extensions.

## Interface

When you first start NetLogo you'll see a screen like this:

![NetLogo start screen](/assets/img/netlogo-introduction/netlogo-start-screen.svg){ .blend-multiply}

The black square is the environment or world where agents move and follow the instructions you've written. The white area to the left is reserved for buttons, sliders, plots, and other interactive devices. At the bottom are the Command Center and a blank space where you can enter one line commands as the observer.

You write agent commands in the Code tab, and the Info tab is where you document your model.

## A Sample Problem

When you install NetLogo you'll get hundreds of agent-based model examples. This sample problem is a slight variant of the "Turtles Circliing Simple.nlogo" program from Uri Wilensky and William Rand's book, ["An Introduction to Agent-Based Modeling: Modeling Natural, Social, and Engineered Complex Systems with NetLogo"](http://www.intro-to-abm.com/). In NetLogo, agents are called "turtles" unless you rename them (to sheep or wolves or something).

Start NetLogo, and when you see the initial screen, as shown above, click on the Code tab to begin writing the functions for this simulation. Almost all NetLogo programs have two required features - a Setup function and a Go function. The Setup initializes the simulation, arranging the turtles and giving them their starting commands, while the Go function tells them how to behave at each tick.

In the setup function which begins with `to setup` and ends with `end`

```text
to setup
  setup-circle
  reset-ticks
end
```

there are two calls, `setup-circle`, and `reset-ticks`. The `reset-ticks` command resets the timer so the simulation begins at zero ticks. The real action begins with `setup-circle`:

```text
to setup-circle
  clear-all
  set-default-shape turtles "dot"
  ;; turtles should be evenly spaced around the circle
  create-ordered-turtles 40 [
    set size 2 ;; easier to see
    set speed .35 ;; this is the size of each step the turtles take in a tick
    fd 20 ;; move turtles to perimeter of circle
    rt 90 ;; turtles face tangent to the circle
  ]
end
```

The command `clear-all` clears the display window, removing all agents and any background patches. Next, the turtle shapes are set to "dot". The last command creates 40 new turtles with the `create-ordered-turtles` command. Usually, you would use `create-turtles`, but creating ordered turtles gives each agent its own heading with directions spaced evenly between 0 and 360 degrees. When it gets a `fd 20` (forward) command the turtle moves 20 paces outward so they all remain on the edge of a circle with radius 20. The last command is `rt 90` which causes each turtle to turn right 90 degrees. The command `set speed .35` sets the step size every turtle will make during each tick. It effectively sets the speed of the turtle.

The `to-go` function is pretty simple:

```text
to go
  ;; move forward then turn
  ask turtles [fd speed rt 1]
  tick
end
```

The turtles are asked to move forward at speed `speed` and then turn right one degree. Next, the tick counter is updated. The variable `speed` is not defined in NetLogo, and we're using it in the context of turtles, so the turtles need to own the speed variable. This is done with a single line at the beginning of the code:

```text
turtles-own [speed]
```

In the Interface area, we need to add two buttons to run the code just written. Make sure the drop-down next to "Add" is set to "Button" and then click on "Button" followed by a click in the white space which will create a button. A pop-up box will open where you need to enter the command `to-setup` and change the Display name to `Setup`,

![Make setup button](/assets/img/netlogo-introduction/make-setup-button.svg){ .blend-multiply}

Make another button with the command `to-go`, Display name `Go` and check the box next to "Forever". When you run the simulation, first click on "Setup" then "Go". Because you checked "Forever" for the "Go" button, the simulation will continue running until you click "Go" again.

We'll add in one more bit of code and two more buttons. This code changes the turtle's speed,

```text
to change-speed
  ask turtles [set speed speed -.15] ;; decrease the step-size by .15
end
```

reducing the speed from the current speed to speed - .15. Add these two buttons below the "Setup" and "Go" buttons:

![Change speed and track turtle buttons](/assets/img/netlogo-introduction/change-speed-track-turtle.svg)

The command for the "Change speed" button is a call to the `change-speed` function and the "Track turtle" button needs this command: `ask one-of turtles [pen-down]` which randomly selects one of the turtles and tells it to put its pen down. When the pen is down you'll be able to see a track of where the turtle has been. Right-click on the buttons and select "Edit" to add the commands.

You now have a complete NetLogo program. Click the "Setup" button to generate a circle of colored dots. Click on the "Go" button and the dots will spin clockwise around the circle. Don't click the "Change speed" button just yet, though.

![Turtle setup](/assets/img/netlogo-introduction/turtle-setup.svg)

Before you change the turtle speed, think about what you expect to happen when the speed changes. What we know will happen is that each turtle will be taking a slightly shorter step size during every tick. But what does the collective behavior look like? What is the resulting emergent system? Now, go ahead and click "Change speed" and watch the system for a while. Change the speed a second time. You can restart at any time by clicking the "Go" button and then resetting the simulation with the "Setup" button.

If you reset, click the "Go" button followed by "Track turtle". You should see a circle drawn by one of the turtles and all of them spinning exactly on the circle. Try changing speed and then tracking a few turtles. What happens if you change speed twice and then track turtles?

## Debugging

Many computer languages have Integrated Development Environments (IDEs) where you develop your program code, test it, and debug it. IDEs let you stop the execution of the code at breakpoints, and give you the ability to inspect variables and write a few lines of code to examine what the code is doing.

Since NetLogo is agent-based, each class of turtle is doing the same thing all at the same time. Instead of using breakpoints, you can click the "Go" button to stop the simulation. Right-click on an agent to see a pop-up menu. At the bottom of the menu, you can choose to inspect the turtle (here it's turtle #18) or inspect the patch under the turtle. Patches are small squares with integer coordinates, so in this case, the patch is at $x = 20$, $y = -3$.

![Debug turtles](/assets/img/netlogo-introduction/debug-turtle.svg)

Clicking on "inspect turtle 18" brings up this dialog:

![Inspect turtles](/assets/img/netlogo-introduction/inspect-turtle.svg)

Here, you can see the properties of this turtle, including the special turtles-own speed. Change the speed to 0.2 and set the pen-mode to "down", then press "Go" again. At the bottom of the Interface screen are the Command Center and an input area labeled "observer >",

![Observer command](/assets/img/netlogo-introduction/observer-command.svg)

where you can enter single lines of code such as `show [speed] of turtle 18` one to show the speed of turtle #18. In the Command Center, you'll see the results. These commands may be entered even if the program is running.

![Command center](/assets/img/netlogo-introduction/command-center.svg)

Every programming language has its own syntax. Besides working through example problems and tutorials, the Models Library contains sample programs in the "Code Examples" section that may be useful for your own programs. Usually, agents passing through the left wall reappear at the right wall, and going through the top makes them come back from the bottom of the screen. If you'd rather have them bounce off the walls, take a look at the "Bounce Example".

## Science in NetLogo

The biggest difference between NetLogo and most other languages is that it uses the idea of agents acting in parallel rather than following a sequential series of steps. You have to think about the commands to issue to each set of agents in your simulation to make them operate as a group. That is, you have to think about agents, but also the emergent system created by the collection of agents.

The trickiest part of agent-based models is probably trying to figure out what caused an emergent system. What simple agent commands might you need to cause a result? Suppose you had loaded [Turtles Circling Sun and Moon.nlogo](https://gist.github.com/XerxesZorgon/8ea0b72770b7df8d11cbd960e8c45374) but hadn't looked at any of the code. Try running it a few times and watch what happens when you click on "Sun" and "Moon". (The names "Sun" and "Moon" don't have any relevance to the code.) If you had no idea what caused the turtles to do what they're doing, would you be able to recreate the commands?

Solving this mystery is how to do science. You observe the behavior of the system and then try to figure out what causes it. It might be possible to get the same overall effect using a different method, so you need to carefully check to be sure your code exactly matches the observations under all conditions. In nature, you might observe a colony of insects behaving unexpectedly. You would hypothesize a reason for the behavior, and then test your hypothesis in much the same way as you did with this NetLogo function.
