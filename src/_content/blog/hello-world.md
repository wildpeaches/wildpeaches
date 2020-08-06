---
title: Hello World
tag: blog
author: Jan De Wilde
layout: blog.njk
permalink: /hello-world/
---

There are people who go by the moniker of mathematician. 

They are known to like to try and impress everyone by using symbols like $\varphi$. Sometimes they'll write stuff like ${3x-1}+(1+x)^2$ and feel quite chuffed with themselves. When they gather in flocks at a conference (known as a misery of mathematicians) they start peacocking pretty soon and will regurgitate such monstrosities as:

$$\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}$$

Yeah, right. Like that drivel means anything. Homeopathy can cure cancer and Alex Jones will be remembered as a philosopher of Plato's significance. Sure.

Here's a [link](https://jandewilde.org), I always forgot how to create them in markdown until I used the mnemonic device: b before p, brackets before parens.

Code can be useful. However it's use should not be overstated since:

1. you can't eat it
1. it can't be used to eliminate body odor. 

These are some clear shortcomings, nevertheless, here is a sprinkling of it.

```js
const getInversionCount = (array) => {
  let inversionCount = 0;
  for (let i = 0; i < array.length; i++) {
    let placesNotInvertedCount = 0;
    for (let j = 0; j < i; j++) {
      let arrayj = array[j];
      let arrayi = array[i];

      console.log({ i, j, arrayi, arrayj });
      if (arrayj < arrayi) placesNotInvertedCount++;
    }
    inversionCount += array[i] - 1 - placesNotInvertedCount;
    console.log(inversionCount);
  }
  return inversionCount;
};
```

> Blockquote anyone?




