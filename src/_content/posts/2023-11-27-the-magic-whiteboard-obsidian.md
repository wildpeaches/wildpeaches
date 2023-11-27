---
title: The Magic Whiteboard - Part I
subtitle: The Obsidian Wizard
author: John Peach
lede:
hero:
  url: /assets/img/2023-11-27-the-magic-whiteboard-obsidian/wizard1.webp
  alt:
tags: [math]
keywords: []
socialImg: /assets/img/2023-11-27-the-magic-whiteboard-obsidian/
software: ['obsidian','octave','python','r']
---



The Magic Whiteboard is your personal genius assistant for all of your STEM projects. It knows practically everything and can have in-depth conversations with you on most topics. If you need to look something up, The Magic Whiteboard will help you find the right sources and can summarize the information and discuss the material with you. 

Simple calculations can be done immediately by the wizard scientist, and the hacker will help write code for more complex problems. Do you need a data analyst? The Magic Whiteboard has one of those, too!

When you've finished writing up notes on a subject, you can have The Magic Whiteboard organize them and help you write anything from a blog post to an academic journal article. 

We'll show you how to build your own Magic Whiteboard and customize it for your work. The Magic Whiteboard can be modified at any time to help with your specific science or technology project. We'll show you how to set up a mathematics whiteboard, but you could just as easily make a [chemistry](https://github.com/Acylation/obsidian-chem), biology, or physics whiteboard.

When I start writing a STEM article, the first step is to convert an idea into an outline of the article. Often, the idea builds on something that has already been done, so a literature search is needed. It might need some math, and the concept needs to be converted to [LaTeX](https://www.latex-project.org/) to generate the correct mathematical symbols. 

In many cases, in-depth calculations are required which means writing code in the appropriate scientific computer language, and the output usually needs to be plotted. Finally, the concept must be converted into a coherent document. 

My problem is that I'm pretty good with math and LaTeX, and get progressively worse with everything else. I'm not trained as a software engineer or technical writer, and this is true for most scientists. Many others are beginning to see the benefits of something like the Magic Whiteboard. 

The Allen Institute is creating "[an open generative AI language model ‘by scientists, for scientists](https://www.geekwire.com/2023/allen-institute-for-ai-creating-an-open-generative-ai-language-model-by-scientists-for-scientists/)’", and an [international team of scientists](https://www.cam.ac.uk/research/news/scientists-begin-building-ai-for-scientific-discovery-using-tech-behind-chatgpt) is building an AI system called [Polymathic AI](https://polymathic-ai.org/) that will learn scientific principles. An article in Nature says that ["A world of AI-assisted writing and reviewing might transform the nature of the scientific paper"](https://www.nature.com/articles/d41586-023-03144-w#:~:text=In%20some%20cases%2C%20researchers%20have,is%20an%20AI%20language%20model.), but another asks ["Scientists used ChatGPT to generate an entire paper from scratch — but is it any good?"](https://www.nature.com/articles/d41586-023-02218-z) 

Large Language Models (LLMs) have been [controversial](https://hackernoon.com/navigating-the-ethical-landscape-of-llms) since their introduction because they can be biased, use potentially private data for training, and are prone to hallucinations. Hallucinations are when the answer it gives sounds plausible, but is incorrect. Think of them as billion-dollar mansplainers, and training an LLM requires a lot of [energy and resources](https://www.resilience.org/stories/2023-11-05/ai-the-information-economy-becomes-ever-more-energy-and-resource-intensive/), although it needs much less energy to give answers. Google says they're working on a way to prevent [Skynet](https://www.popularmechanics.com/technology/robots/a21154/google-develops-plan-to-convince-self-learning-machines-to-turn-themselves-off/) from happening, so that's ... um ... reassuring.

The Magic Whiteboard won't create anything without your input, and the answers may not always be correct so double check everything. And remember - STEM responsibly!

## The Characters

The Magic Whiteboard is built on the note-taking app [Obsidian](https://obsidian.md/) as a template that will be the starting point for your projects. The template contains functions for each purpose which might be thought of as characters in a novel. 

Each character has a tab so you can switch to that character to call on its expertise. You can choose which characters you want and name them whatever you like. You may not want all of the characters listed here, or you may decide to include some that we haven't.

The characters we'll be using are:

- The Mad Scientist's Whiteboard. This is your main workspace where you'll type up your notes. It can help organize your ideas and answer simple questions.
- The Librarian. If you need to look something up online or do a literature search, ask the librarian. The librarian will also help explain journal articles if you have questions, and keep track of your references.
- The Hacker. Tell the hacker what you'd like to solve, and it will help write the program in the language of your choice.
- The Statistician. Helps you make sense of piles of data. We'll include this in The Hacker tab.
- The Ghostwriter. When you've finished writing up your notes, the ghostwriter will write them up in a nice document.

In this article, we'll build the whiteboard in Obsidian. Later, we'll make the librarian in a style similar to [The Academic Browser](https://wildpeaches.xyz/blog/the-academic-browser/) and finally, we'll create an interface for AI-assisted programming (The Hacker) and data analysis (The Statistician). 

## The Vaults

To build your own Magic Whiteboard, [download](https://obsidian.md/download) and install Obsidian, "the private and flexible note‑taking app that adapts to the way you think." To get started, look at the [Obsidian Help](https://help.obsidian.md/Home) page or the [Community](https://obsidian.md/community) page. Projects are kept in [vaults](https://help.obsidian.md/Getting+started/Create+a+vault) that contain [notes](https://help.obsidian.md/Getting+started/Create+your+first+note). You may want to change the look of Obsidian by using a new [theme](https://help.obsidian.md/Extending+Obsidian/Themes).

Obsidian defines [templates](https://help.obsidian.md/Plugins/Templates) as pre-defined snippets of text. The Magic Whiteboard will use an entire vault as a template for other vaults, so first, [create a new vault](https://help.obsidian.md/User+interface/Vault+switcher#Create+new+vaults) and name it, "The Magic Whiteboard". Click the gear icon for "Settings" in the lower left corner if you want to change the appearance or use a different theme. 

Now add three pages (called [Notes](https://help.obsidian.md/Getting+started/Create+your+first+note) in Obsidian), naming them "Whiteboard", "The Librarian",  and "The Hacker", or whatever you like so long as they make sense to you. If you create a Note and want to change the name later, you can either change the title on the Notes page, or you can right-click the name in the vault outline on the left panel, and select "Rename". To make a new Notes page use `Ctrl-n`. 

![magic-whiteboard-main](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/magic-whiteboard-main.webp)

<p align = "center"><b>The Magic Whiteboard</b></p>

We'll extend Obsidian with useful plugins for each page. The intended purpose of a plugin might be for one of the notes pages, but it can be used anywhere in the vault. If you create a new vault, then you need to install plugins for that vault. Since The Magic Whiteboard will be used as a template for other vaults, we'll need to make a complete copy of the vault to maintain the structure and plugins.

## The Mad Scientist's Whiteboard

Obsidian comes with a core set of plugins, but there is a large set of [community plugins](https://help.obsidian.md/Extending+Obsidian/Community+plugins) available through the Settings gear (lower left). To turn on the magic of The Mad Scientist's Whiteboard, install the [Copilot](https://github.com/logancyang/obsidian-copilot) plugin by clicking the Settings gear, then Community Plugins and searching for Copilot in the community plugins. 

After installation, click on Copilot under Community Plugins on the left panel of the Settings window. Get API keys for OpenAI, Cohere, and Huggingface and link them to the Copilot settings. API keys are unique and generated at the time you ask for one. You should keep a copy of each API key in case you need to re-install it. I keep mine in my [KeePass](https://keepass.info/) database.

When you've entered the API keys, go back to the Settings page and turn the Copilot plugin off and back on.

You'll probably have to have an account and log in, but once you've done that it's the same as working from any other browser. ChatGPT remembers the history of questions you've asked, and they all show up here, too. 

You can [embed your login](https://help.screensteps.com/a/3528-how-do-i-embed-login-credentials-in-a-url) information in the link if you prefer:

`https://chat.openai.com/?model=text-davinci-002-render-sha?login=<myloginID>&password=<myPassword>`

Sometimes when I'm writing matrix equations I find that I know what should go into the matrix, but producing the LaTeX code takes a lot of time. With ChatGPT I can ask it to do it for me, and then I can copy and paste the answer into the document:

![LaTeX-code-for-symmetric-Toeplitz-matrix](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/LaTeX-code-for-symmetric-Toeplitz-matrix.webp)

<p align = "center"><b>ChatGPT LaTeX Generation</b></p>

This is much easier!

ChatGPT also knows how to read [LaTeX](https://www.latex-project.org/about/) and can generate a solution from it. 

![solve-sin-integral](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/solve-sin-integral.webp)

<p align = "center"><b>ChatGPT Integral Solution</b></p>

If you copy this into your Magic Whiteboard, the answer is in LaTeX format so you don't need to modify it in any way. You could get the same answer from [WolframAlpha](https://www.wolframalpha.com/), but you'd have to pay for the step-by-step solution, and you can't directly paste it into your document.

## The Magic of Plugins

Obsidian plugins extend the basic capabilities of the notebook and there are several that are very useful for working on STEM problems. After installing a new plugin hotkeys for some operations may have been defined by the plugin. 

To find the hotkeys, click the *Settings* gear, then *Hotkeys* in the left panel, and scroll down to find the hotkey definitions. The *Text Generator* plugin defines `Ctrl-J`  as the hotkey to initiate text generation by an AI provider.

![plugin-hotkeys](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/plugin-hotkeys.webp)

<p align = "center"><b>Obsidian Hotkeys</b></p>

### Execute Code

With the [Execute Code](https://github.com/twibiral/obsidian-execute-code) plugin, you can run snippets of code on the whiteboard in the Octave, Python, or R languages. This plugin could be handy for a simple calculation, but The Hacker tab will be much more comprehensive in its capabilities. 

I was able to get Python and R working by pasting in the full path and executable, e.g. `C:/Python39/pythonw.exe`, but as of now, the capabilities are limited to calculations that do not require importing libraries. 

For Octave, there is a space in the name of the  installation path that this plugin couldn't interpret, so I added the full path to the Environment Variables Path definition.

To use the plugin, type three backticks followed by `run-<language>`. Enter the calculation, then move your cursor out of the block, which will display the 'Run' button. Click on the button to execute the calculation, and place your cursor back inside the block to display the 'Clear' button. 

![execute-code-plugin](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/execute-code-plugin.webp)

<p align = "center"><b>Execute Code Example</b></p>

### Surfing

The [Surfing](https://github.com/PKM-er/Obsidian-Surfing) plugin lets you access the web from a new tab in Obsidian. With the Surfing plugin, if you click the "+" to add a new tab in your vault it will open a web page so you can surf the internet directly. 

### Text Generator

[Text Generator](https://github.com/nhaouari/obsidian-textgenerator-plugin) is an open-source AI Assistant Tool that brings the power of Generative Artificial Intelligence to the power of knowledge creation and organization in Obsidian. For example, use Text Generator to generate ideas, attractive titles, summaries, outlines, and whole paragraphs based on your knowledge database. 

If you have a subscription to one of the Large Language Models (LLMs), enter the API key and let the LLM help generate text for you. In this example, I wrote the paragraph at the top with the instruction "Following is the outline of the article", and let the LLM continue from there.

Instead of using a paid subscription model, this outline was generated with Google Bard. I'll explain how to do that in the next post.

![text-generator-outline](/assets/img/2023-11-27-the-magic-whiteboard-obsidian/text-generator-outline.webp)

<p align = "center"><b>Text Generator Example</b></p>

### Longform

[Longform](https://github.com/kevboh/longform) is a plugin for Obsidian that helps you write and edit novels, screenplays, and other long projects. It lets you organize a series of notes, or *scenes*, into an ordered manuscript. It also supports single-note projects for shorter works. 

### Excalidraw

[Excalidraw](https://excalidraw.com/) is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them, and this [plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin) connects Obsidian to Excalidraw. Because you need a whiteboard for your whiteboard. 

If you like Excalidraw, you might also like [Excalibrain](https://github.com/zsviczian/excalibrain) an interactive, structured mind-map of your Obsidian Vault generated  based on the folders and files in your Vault by interpreting the links,  dataview fields, tags, and YAML front matter in your markdown files. 

### Collaboration

At some point, you'll want to collaborate with other people on a project. You can either create an [Obsidian account](https://obsidian.md/account) and pay \$8/month for their [Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish) hosting service, or install the free open-source alternative, [MindStone](https://mindstone.tuancao.me/). 

If you use more than one computer, you'll also want to keep your files in sync. [Obsidian Sync](https://obsidian.md/sync) also costs \$8/month, but there are [free options](https://www.makeuseof.com/best-agile-productivity-tools-remote-hybrid-teams/) including [SyncThing](https://www.syncthing.net/) and [SyncTrayzor](https://github.com/canton7/SyncTrayzor) (see [Mathics and Nebo](https://wildpeaches.xyz/blog/mathics-and-nebo/)). 

The [Obsidian Hub](https://publish.obsidian.md/hub/00+-+Start+here) is an experimental repository for community-built plugins, and the [Plugins for Collaboration](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.01+Plugins+by+Category/Plugins+for+collaboration) page lists a few tools such as [Obsidian Git](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/obsidian-git) which may also be useful for working together.

### LanguageTool

[Obsidian LanguageTool](https://github.com/Clemens-E/obsidian-languagetool-plugin) is a plugin for Obsidian that integrates [LanguageTool](https://languagetool.org/) to provide advanced grammar and spell checking.

### Note Linker

The [Obsidian Note Linker](https://forum.obsidian.md/t/obsidian-note-linker-automatically-find-and-create-new-links-between-notes/41504) automatically finds and creates new links between notes. By scanning each note of the vault for occurrences of other note names (or aliases), it suggests a list of new potential links, which can be created with the click of a button. By [linking notes](https://help.obsidian.md/Linking+notes+and+files/Internal+links#:~:text=By%20linking%20notes%2C%20you%20can,%E2%86%92%20Automatically%20update%20internal%20links.), you can create a network of knowledge. 

### ZettelFlow

[ZettelFlow](https://github.com/RafaelGB/Obsidian-ZettelFlow) is your essential solution for optimizing your Zettelkasten method within the Obsidian app. This innovative plugin empowers you to effortlessly configure a  customized workflow, enabling the seamless creation of new notes while  specifying properties, templates, and storage locations through the  native canvas interface.

### Obsidian Plugins and Links

Some links to plugins that others have found useful:

- [Obsidian Hub](https://publish.obsidian.md/hub/00+-+Start+here)
- [Obsidian Resources](https://dynalist.io/d/CQ4V16tFhIJIfy-rgDK7r1Bp)
- [Obsidian Utils](https://github.com/mm53bar/obsidian_utils)
- [Obsidian Tools](https://wiki.nikiv.dev/tools/obsidian)
- [15 Obsidian Plugins that I can’t live without](https://rossgriffin.com/tutorials/15-obsidian-plugins-that-i-cant-live-without/)
- [Obsidian Plugins to Supercharge Your Note-Taking Experience](https://walterteng.com/obsidian-plugins)



------



### Image credits

Hero: [Stable Diffusion](https://stablediffusionweb.com/)

The Magic Whiteboard: Obsidian

ChatGPT LaTeX Generation and Integral Solution: ChatGPT

Obsidian Hotkeys: Obsidian

Execute Code Example: Execute Code Plugin

Text Generator Example: Text Generator Plugin



## Code for this article

[Obsidian](https://obsidian.md/), and plugins:
- [Copilot](https://github.com/logancyang/obsidian-copilot) 
- [Execute Code](https://github.com/twibiral/obsidian-execute-code)
- [Surfing](https://github.com/PKM-er/Obsidian-Surfing) 
- [Text Generator](https://github.com/nhaouari/obsidian-textgenerator-plugin)
- [Longform](https://github.com/kevboh/longform)
- [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)
- [MindStone](https://mindstone.tuancao.me/)
- [Obsidian Git](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/obsidian-git)
- [Obsidian LanguageTool](https://github.com/Clemens-E/obsidian-languagetool-plugin)
-  [Obsidian Note Linker](https://forum.obsidian.md/t/obsidian-note-linker-automatically-find-and-create-new-links-between-notes/41504) 
- [ZettelFlow](https://github.com/RafaelGB/Obsidian-ZettelFlow)
- [Obsidian Chem](https://github.com/Acylation/obsidian-chem)
