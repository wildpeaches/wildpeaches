---
title: Seven Bridges for Seven Truckers
subtitle: An Eulerian circuit through the neighborhood
author: John Peach
lede: null
hero:
  url: /assets/img/seven-bridges-for-seven-truckers/seven-brides.png
  alt: null
  class: hero--contain
tags:
  - math
keywords:
  - graph theory
  - Euler circuit
  - Königsberg bridge problem
socialImg: /assets/img/seven-bridges-for-seven-truckers/seven-brides.png
lastmod: '2022-03-04T21:11:23.175Z'
---

## Seven Trucks

We live in a small, quiet neighborhood. Still, trucks come fairly often.

![seven-trucks](/assets/img/seven-bridges-for-seven-truckers/seven-trucks.png)

Once a week the trash truck drives through, and the next day the recycling truck comes. The town provides street maintenance with three trucks. The leaf-eater truck is a giant Roomba for leaves, the stick-picker truck picks up large branches and sticks, and the gutter-sucker truck is a combination street sweeper and debris vacuum. FedEx and Amazon send trucks around several times a day, too.

The delivery trucks operate with controls on the left as is typical here in the U.S., but the other five put the driver on the right side so equipment can be guided by the driver. The trash and recycling trucks have a grabber to lift the bin, dump it into the truck, and return it to the side of the road. The leaf-eater vacuum tube can be swung back and forth from inside the truck to suck in large leaf piles. Even the delivery trucks tend to stop in front of the house so the driver can grab the package and step out on the right side of the vehicle without crossing the road.

One day, I watched the recycling truck come around and saw it make an efficient tour of the neighborhood. Naturally, I wondered what the most efficient route would be, and if there might be a way to figure it out. As any right-thinking person would say to themselves at this point, "Hey, this looks like the famous seven bridges of Königsberg problem!"

## Seven Bridges

Königsberg (now Kaliningrad) used to be in Prussia before the Soviet Union annexed the city on 9 April 1945. Königsberg was the home of philosopher Immanuel Kant, mathematician David Hilbert, and author Hannah Arendt.

![konigsberg-bridges](/assets/img/seven-bridges-for-seven-truckers/konigsberg-plain.png)

Six bridges connect the city on either side of the river to the two islands in the river, and one bridge connects the two islands. People in Königsberg wondered if you could find a walking path that crossed all seven bridges exactly once. Swimming back across the river is not allowed. They tried all sorts of routes through the city, but no one ever found a path that didn't require crossing at least one of the bridges twice.

## Euler's Graphs

Leonhard Euler, seen here wearing a pillowcase on his head (allegedly!), lived in nearby St. Petersburg. He proved why it isn't possible to cross all of the bridges exactly once, publishing his results in 1736, thus beginning the era of graph theory and topology.

![leonhard-euler](/assets/img/seven-bridges-for-seven-truckers/leonhard-euler.jpg)

Euler's insight was that each of the four areas could be condensed down to a point or node, and the bridges could be represented as lines or edges connecting the nodes. The locations of the bridges didn't matter, but Euler realized the number of edges had to match the number of bridges connected to each node. Here's the way he thought about it, with land areas as red nodes and bridges as yellow arcs connecting them.

![konigsberg-graph-overlay](/assets/img/seven-bridges-for-seven-truckers/konigsberg-graph-overlay.png)

Can you start at any node and make a path to trace each yellow arc exactly once? Let's start with some simpler cases. If you doodle around with two or three nodes you might come up with these possible node-edge connections.

![digraphs-two-three-nodes](/assets/img/seven-bridges-for-seven-truckers/digraphs-two-three-nodes.png)

Notice the first graph in the top row is essentially identical to the third one in the top row. They both connect two nodes with a single edge, although in the second example, a third unconnected node can't be reached.

The second graph in the top row is the same as the third graph in the second row because each connects three nodes in order. You can solve these two cases as long as you don't start with the middle node. All of these examples are solvable, but you may need to be careful about where you start and the path you take.

In one of my [abstract algebra](https://mathworld.wolfram.com/classroom/classes/AbstractAlgebra.html) classes, the professor told us he didn't know how many times we had walked through the classroom door, but he knew it was an odd number. His reasoning was we had all walked through the door once the first time we came into the room. From then on, at the end of each class and the beginning of the next, we walked through two times. To get back into the classroom we were now in required an _out_ and an _in_, in multiples of two. Adding up the initial entry and any subsequent pairs of leaving and re-entering gave an odd number of passages through the doorway for each of us.

One of the students, who shall remain nameless and blameless, crawled out a window, walked around to the front entrance, and back through the classroom door. This student clearly remembers the classroom being on the first floor, which was a good thing. This stunt was equivalent to swimming back across the river in the Königsberg bridge problem.

The professor's point is useful for this problem because if you have a valid path you can always add a pair of edges connecting any two nodes and you'll still have a solution. When you reach one of the nodes with your two new edges, cross over to the other node on one of the new edges, and back on the other one. Then, carry on with your original solution.

There's another possibility I haven't shown here. I call it the La-Z-Boy solution which is the case where none of the nodes are connected by any edges. If there aren't any bridges, you can cross all of them without getting up out of your La-Z-Boy.

## The Four Lands

The Königsberg problem requires four nodes. The river divides the city into two pieces North and South, and two more nodes represent the islands in the middle of the river. How many ways can you connect four nodes with either zero (the La-Z-Boy case) or one edge? To simplify the problem, think of the four nodes as vertices of a square.

With one edge, any orientation of the four nodes is equivalent to every other orientation. A rotation by $90\degree$ doesn't change the problem, and you can make a diagonal into an edge of the square by switching two vertices.

![digraphs-four-nodes-one-edge](/assets/img/seven-bridges-for-seven-truckers/digraphs-four-nodes-one-edge.png)

Flipping the square vertically or horizontally doesn't change anything, nor do flips along the diagonals. Here are all the unique combinations of zero or one edge on four nodes. I included the number of edges at each node at the top of each graph, and a red "X" indicates graphs without solutions.

![digraphs-four-nodes](/assets/img/seven-bridges-for-seven-truckers/digraphs-four-nodes.png)

## Euler's Solution

The three impossible cases have odd numbers of edges at each of the four nodes. This is a clue as to why no solution exists. Imagine that at each end of a bridge is a gate. As soon as you pass through the gate, it locks and you can't get through anymore. Suppose a node has 3 gates. You can enter the node through one gate, leave through another, leaving one more gate.

Your path will need to either start or end at that node because once you've passed through all pairs of gates, you're stuck at that node. A solution always exists for the unconnected (La-Z-Boy) case because zero is an even number.

This is how Euler showed that the Königsberg bridge problem couldn't be solved. On the left is the original graph shown in the overlay above. In the middle, I shifted the nodes to the vertices of a square, and on the right I removed paired edges. Now you can see this is the impossible case $(1,1,1,3)$. Removing edge pairs doesn't change whether a solution exists or not, but it declutters the problem.

![konigsberg-graph-reduced](/assets/img/seven-bridges-for-seven-truckers/konigsberg-graph-reduced.png)

## Digraphs

Digraphs, or directed graphs, are one-way streets meaning you can only travel from one node to the other if the edge points in the right direction. Intersections are nodes, and each side of the street is a directed edge between the nodes.

![directed-graph-in-nbrhd](/assets/img/seven-bridges-for-seven-truckers/directed-graph-in-nbrhd.png)

The recycling truck made a U-turn at the intersection of Creekview Circle and Waterside Drive (in the upper right corner of the map). I didn't see the full route through the neighborhood, but the truck seemed to need only one trip per side of a street. It may have used Rock Spring Court to reverse direction rather than making two U-turns.

The numbers next to each node are the total number of connections. In parentheses are the number of edges in and out of each node. Entries and exits match in every case because there are two sides to the roads, and every node has an even number of connections meaning a solution exists.

Using the [Strava](https://www.strava.com/) app on my phone, I walked a path connecting all of the nodes using each edge exactly once.

![strava-path](/assets/img/seven-bridges-for-seven-truckers/strava-path.png)

If the graph makes a closed loop, it's called an Eulerian graph. I didn't quite close the gap at the intersection of Pathway Drive and Spring Valley Road in my Strava hike, but this path is an Eulerian circuit.

## Applications of Graph Theory

Every time you type a word or phrase into Google, the search algorithm uses graph theory to find relevant web pages. It uses the number and importance of other websites connected to a site to determine how high to rank the page relative to other pages.

![pageranks-example](/assets/img/seven-bridges-for-seven-truckers/pageranks-example.svg)

Since page $B$ is considered very important, page $C$ receives a higher rank than page $E$ even though there are only two links to $C$, but nine to $E$.

Social networking sites like LinkedIn and Facebook connect people and groups forming online graphs. Manufacturing supply chains connect manufacturers of subassemblies to factories performing final assembly. Printed circuit boards form graphs through the connections between components.

![circuit-board-blue](/assets/img/seven-bridges-for-seven-truckers/circuit-board-blue.jpg)

In our previous post, ["A Research Rubric"](https://wildpeaches.xyz/blog/a-research-rubric/) we showed citation tools like [Connected Papers](https://www.connectedpapers.com/) and [Citation Gecko](https://www.citationgecko.com/) that use graphs to link scientific papers through citations, or similar topics. [VOSviewer](https://www.vosviewer.com/) is a tool to construct and visualize bibliographic networks.

Other applications include scheduling, molecular and genomic biology, Feynman graphs in physics, and [chemical modeling](https://avogadro.cc/) where atoms are nodes and bonds form the edges of the graph.

![avogadro-molecule](/assets/img/seven-bridges-for-seven-truckers/avogadro-molecule.png)

In 1956, [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) created an algorithm to find the [shortest path](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) between any two nodes in a graph, and it can even be used to find your way out of a [maze](https://towardsdatascience.com/solving-mazes-with-python-f7a412f2493f)!

## Software Tools

Graphs can be represented as sparse matrices where the $(i,j)^{th}$ entry in the matrix indicates how many edges connect node $i$ to node $j$. For the Königsberg bridges, the [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) looks like

$$
K = \left[
\begin{array}{cccc}
0 & 1 & 0 & 2 \\
1 & 0 & 1 & 1 \\
0 & 1 & 0 & 2 \\
2 & 1 & 2 & 0 \\
\end{array}
\right]
$$

![konigsberg-graph-unreduced](/assets/img/seven-bridges-for-seven-truckers/konigsberg-graph-unreduced.png)

The top row says node $a$ is connected once to node $b$, zero times to node $c$, and twice to node $d$. These matrices are called sparse because often most of the entries are zero, especially in graphs with many nodes.

Four programming languages used by scientists have graph theory toolboxes:

- [Julia](https://juliacomputing.com/): [JuliaGraphs](https://github.com/JuliaGraphs) calls [Graphviz](https://graphviz.org/)
- [Octave](https://www.gnu.org/software/octave/index)/[Matlab](https://www.mathworks.com/products/matlab.html): [octave-networks-toolbox](https://aeolianine.github.io/octave-networks-toolbox/), [grTheory - Graph Theory Toolbox](https://www.mathworks.com/matlabcentral/fileexchange/4266-grtheory-graph-theory-toolbox)
- [Python](https://anaconda.org/): [NetworkX](https://networkx.org/), [iGraph](https://igraph.org/python/), or [graph-tool](https://graph-tool.skewed.de/)
- [R](https://www.r-project.org/): [iGraph](https://igraph.org/r/)

Some standalone open-source or free packages are:

- [Graphviz](https://graphviz.org/): open source graph visualization software.
- [Gephi](https://gephi.org/): visualization and exploration software for all kinds of graphs and networks.
- [Microsoft Automatic Graph Layout](https://www.microsoft.com/en-us/research/project/microsoft-automatic-graph-layout/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fprojects%2Fmsagl%2F): a tool for graph layout and viewing.
- [Tulip](https://tulip.labri.fr/site/): an information visualization framework dedicated to the analysis and visualization of relational data.
- [LaNet-vi](https://lanet-vi.fi.uba.ar/): a large network visualization tool.
- [neo4j](https://neo4j.com/): stores and manages data in its more natural, connected state (free version, not open-source), uses [Cypher](<https://en.wikipedia.org/wiki/Cypher_(query_language)>) (query language)

A free online textbook by Robin J. Wilson, "Introduction to Graph Theory" is available [here](https://www.maths.ed.ac.uk/~v1ranick/papers/wilsongraph.pdf).

Graph theory has a lot to offer mathematically, and there are many applications for you to explore.
