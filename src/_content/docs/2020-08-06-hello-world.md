---
title: Hello World
author: Jan De Wilde
date: 2020-08-06
---

*This post demoes the capabilities of Markdown and added extensions. This post was created in the United States of America, anno 2020. Not that it matters.*

***

## KaTeX

There are those who go by the moniker of mathematician. 

They are known to like to try and impress everyone by making up symbols like $\varphi$. Sometimes they'll write stuff like ${3x-1}+(1+x)^2$ and feel quite chuffed with themselves. When they really start peacocking they'll regurgitate this incomprehensible drivel:

$$\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}$$

I kid, I kid! I have great respect for mathematicians! I'll take them over serial killers any day. Although there is some overlap. Alright, that's demoes the KaTeX extension in Markdown. Time to move on.

## Syntax highlighting

Code can be useful, can't it? I can really see it coming into widespread use one day! 

After all the unwarranted rudeness, let me extend an olive branch and use MATLAB to show syntax highlighting.

```matlab
ds = tabularTextDatastore('airlinesmall.csv');
ds.TreatAsMissing = 'NA';
ds.SelectedVariableNames = {'Year','Month','ArrDelay','DepDelay','Origin','Dest'};
ds.SelectedFormats(5:6) = {'%C','%C'};
pre = preview(ds)
```

By Erdős—your number, John?—such gobbledygook! No wonder most mathematicians don't get invited to parties. Here is some inline code `let foo = bar + baz;` Well, that's why I don't get invited either.

Have a look at the [full list of supported languages](https://prismjs.com/#supported-languages)

## Lists

- lists don't always need numbers
- which is of course hard to accept
- for the mathematician

1. neutral 
1. even
1. 14159 irrational
1. not even a prime, ugh, gross

## Quotes

> Q: What is the difference between a mathematician and a philosopher? 
>
>A: The mathematician only needs paper, pencil, and a trash bin for his work. The philosopher can do without the trash bin.

## Inline stuff

This is **bold**. Here's a [link](https://jandewilde.org), I always forgot how to create them in markdown until I used the mnemonic device: b before p, brackets before parens.

## Images

![Frosted glass depicting the number 20](https://images.unsplash.com/photo-1523350703530-161b46e28e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80)

Mathematicians like numbers. Even in bitmaps. In fact, legend has it some like the number twenty.

## HTML

HTML does just fine embedded in markdown. Here's a table. It's not very useful.

<table class="min-w-full divide-y divide-gray-300 bg-white my-10">
  <thead>
    <tr>
      <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left leading-4 font-medium">
        This
      </th>
      <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left leading-4 font-medium">
        That
      </th>
      <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-right leading-4 font-medium">
        The Other
      </th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-300">
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
        Answer
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-900">Amazingly Accurate Answer to Life,</div>
        <div class="text-sm leading-5 text-gray-500">the Universe and Everything</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
        42
      </td> 
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
        Answer
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-900">Amazingly Accurate Answer to Life,</div>
        <div class="text-sm leading-5 text-gray-500">the Universe and Everything</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
        42
      </td> 
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
        Answer
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-900">Amazingly Accurate Answer to Life,</div>
        <div class="text-sm leading-5 text-gray-500">the Universe and Everything</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
        42
      </td> 
    </tr>
  </tbody>
</table>



