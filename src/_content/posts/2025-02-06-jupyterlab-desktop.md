---
title: JupyterLab Desktop
subtitle: Building eurAIka for Windows
author: John Peach
lede: 
hero:
  url: /assets/img/2025-02-06-jupyterlab-desktop/jupiter-red-spot.webp
  alt:
tags: [scientific computing, jupyter, research tools, software setup, development environment]
keywords: [JupyterLab, eurAIka, computational-research, scientific-software, kernel-installation]
socialImg: /assets/img/2025-02-06-jupyterlab-desktop/jupiter-red-spot.webp
software: ['julia', 'jupyterlab', 'lean-theorem-prover', 'mamba', 'obsidian', 'octave', 'pandoc', 'python', 'r', 'rstudio', 'vscode', 'wolfram-language', 'zettlr', 'zotero']
---

[Home](https://wildpeaches.github.io/)

Imagine having an AI-powered research assistant that can help you map  concepts, discover relevant papers, generate summaries, and translate your ideas into working code. That's the vision behind [eurAIka](https://euraika-sciences.github.io/), and  while we're building the complete platform, you can already assemble  many of its capabilities using freely available tools. This guide will  show you how to create your version of [eurAIka's](https://euraika-sciences.github.io/) three key modules:  The Whiteboard for visual concept mapping, The Librarian for managing  research literature, and The Coder for turning ideas into computational  results.

In the right combination, many of these tools approach the goals of [eurAIka](https://euraika-sciences.github.io/), our AI-powered research platform. The purpose of [eurAIka](https://euraika-sciences.github.io/) is to have three key modules using these components:

* **The Whiteboard** - Visually map concepts, collaborate with remote teams in real-time, and manage project flow. (Zettlr/Obsidian)
* **The Librarian** - Discover relevant papers, generate summaries, suggest experiments, and co-author publications. (Zen/Zotero)
* **The Coder** - Translate concepts to code and visualizations for data analysis and modeling. (Jupyterlab/VSCodium)

![eurAIka](/assets/img/2025-02-06-jupyterlab-desktop/eurAIka.webp)

JupyterLab Desktop is only one of the many pieces needed to construct eurAIka. The software we'll discuss here includes:

* Zettlr - A markdown editor designed for writing science articles
* Zen - A minimalist Firefox-based browser
* Zotero - A bibliography manager integrated with both Zettlr and Zen
* Start.me - A personalized start page for the Zen browser (or any other)
* JupyterLab Desktop - A standalone environment for Jupyter Notebooks
* VSCode - Integrated Development Environment. Features include support for [debugging](https://en.wikipedia.org/wiki/Debugging "Debugging"), [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting "Syntax highlighting"), [intelligent code completion](https://en.wikipedia.org/wiki/Intelligent_code_completion "Intelligent code completion"), [snippets](https://en.wikipedia.org/wiki/Snippet_\(programming\) "Snippet (programming)"), [code refactoring](https://en.wikipedia.org/wiki/Code_refactoring "Code refactoring"), and embedded [version control](https://en.wikipedia.org/wiki/Version_control "Version control") with [Git](https://en.wikipedia.org/wiki/Git "Git"). Github Copilot is available for free.
* VSCodium - Open-source binaries of VSCode
* ChatGPT and Claude desktop - AI in a dedicated window
* Google NotebookLM - Discuss a paper, convert a document into a podcast
* SciPress - Gives technical authors the tools they need to create stunning and engaging technical content
* Obsidian - Markdown editor and flexible writing app that adapts to the way you think
* Microsoft Power Toys - Utilities to customize windows

When you begin building eurAIka substitute your favorite tools, but let's see how these pieces fit together. 

## Zettlr

[Zettlr](https://www.zettlr.com/) is the Whiteboard for eurAIka letting you write your notes or documents in [Markdown](https://www.markdownguide.org/) format, including code and equations with [KaTeX](https://katex.org/). It has [Pandoc](https://pandoc.org/) built in so you can export to any desired format such as HTML, PDF, LaTeX, or others. As you write you'll want to include references, and Zettlr makes it easy with its built-in [citation manager](https://docs.zettlr.com/en/core/citations/) and connection to a reference manager such as [Zotero](https://www.zotero.org/) or [JabRef](https://www.jabref.org/). Check spelling, grammar, and style with [LanguageTool](https://docs.zettlr.com/en/guides/languagetool-local/), and format your document with custom templates called [Snippets](https://docs.zettlr.com/en/core/snippets/). When you're ready to submit your paper to a journal, you can create a [workflow](https://docs.zettlr.com/en/guides/journal-latex-template/) that will format it according to the journal's standards. To get started, go to the [Setup](https://docs.zettlr.com/en/getting-started/setup/) page to see how to download and install Zettlr.

## Zen Browser

Any browser will work for your online research, but you might want to look at [Zen](https://zen-browser.app/), a minimalist Firefox-based browser. The [documentation](https://docs.zen-browser.app/) page explains how to create [Profiles](https://docs.zen-browser.app/user-manual/profiles/) for each browsing session with unique cookies, accounts, settings, and history, a Zen Web Panel for your favorite web apps—like chats, notes, or to-do lists—right into your browser window for quick, side-by-side multitasking, or [Workspaces](https://docs.zen-browser.app/user-manual/workspaces/) to organize tabs and projects. If you want to browse two pages at once, try the [Split View](https://docs.zen-browser.app/faq#how-do-i-use-the-split-view-feature) feature.

![Zen split screen.png](/assets/img/2025-02-06-jupyterlab-desktop/zen-split-screen.webp)

If you use Zotero for your reference manager, install the [Zotero Connector for Firefox](https://www.zotero.org/download/connectors) extension to [add items](https://www.zotero.org/support/adding_items_to_zotero#web_translators) to Zotero with the click of a button. A handy utility is the [start.me](https://about.start.me/) browser organizer to keep your favorite links on your home page. I set up a start page with links for literature search, AI assistance, references, useful pages for [Wild Peaches](https://wildpeaches.xyz/), and favorite online math utilities.

![Start.me.png](/assets/img/2025-02-06-jupyterlab-desktop/start-me.webp)


## JupyterLab Desktop

[JupyterLab Desktop](https://blog.jupyter.org/jupyterlab-desktop-app-now-available-b8b661b17e9a) is a standalone application for notebook-style computations that mix [Markdown](https://www.markdownguide.org/) text with integrated [language kernels](https://docs.jupyter.org/en/stable/projects/kernels.html) allowing you to select the most appropriate computational tool for your project. JupyterLab was originally intended to run in a browser, but I find it convenient to have a separate window for the Zen browser to conduct literature searches while keeping **The Coder** open. For simple computations, a notebook-type environment can be useful, especially when you include detailed explanations in Markdown cells. Think of JupyterLab as a very powerful calculator, rather than a programming environment.

Download and install [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop?tab=readme-ov-file) and be sure to check out the [Jupyter Blog](https://blog.jupyter.org/) to stay up-to-date with the project. Select any language [kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) (alternate list [here](https://gist.github.com/chronitis/682c4e0d9f663e85e3d87e97cd7d1624)) that you want to use in your Jupyter Notebook. To see which kernels are installed, open a command window and type `jupyter kernelspec list`, and if you want to remove any of them use `jupyter kernelspec remove <full name of kernel>`. If JupyterLab is open the Launcher window will immediately reflect the changes.

For each language, I'll explain how to install the kernel. In general, follow the links on the [language kernels](https://docs.jupyter.org/en/stable/projects/kernels.html) page to find detailed instructions.

#### Julia

The [Julia Project](https://julialang.org/) as a whole is about bringing usable, scalable technical computing to a greater audience: allowing scientists and researchers to use computation more rapidly and effectively; letting businesses do harder and more interesting analyses more easily and cheaply.

[Download](https://julialang.org/downloads/) the latest version and install it. On Windows, if you use `WinGet` it will also install [Juliaup](https://github.com/JuliaLang/juliaup) which lets you select the version of your choice or you can get the latest using `juliaup update`. To complete the installation, open a new command window and type `julia`, which will check for the latest version, and then start Julia. In the Julia terminal, type `]` to launch the package manager and then enter `add IJulia` to install the required packages. This will automatically create a new button in the JupyterLab Launcher window with the latest version of Julia.

#### Lean Theorem Prover

[Lean](https://lean-lang.org/) is a functional programming language that makes it easy to write correct and maintainable code. You can also use Lean as an interactive theorem prover.

Steps to install [lean4_jupyter](https://github.com/utensil/lean4_jupyter) 

* Download and install [Lean](https://lean-lang.org/download/). Open a Powershell terminal at the Administrator level in the directory containing Lean.
* From the lean4_jupyter page copy and run: `git clone https://github.com/utensil/lean4_jupyter.git && cd lean4_jupyter && ./scripts/prep.sh`.
* [Install or update node.js](https://www.geeksforgeeks.org/update-node-js-and-npm-to-latest-version/): `nvm install node`, `nvm use <ver no.>`.
* Install lean4_jupyter with: `pip install -e .` Note the space and period at the end.
* Verify the installation: `pip list | Select-String lean4_jupyter`. If `lean4_jupyter` appears in the list, it means the installation was successful.
* Next, install the Lean4 Jupyter kernel: `python -m lean4_jupyter.install --user`.
* Check that the installation was successful with: `jupyter kernelspec list`.

#### Octave

[GNU Octave](https://octave.org/) is a high-level language, primarily intended for numerical computations. It provides a convenient command line interface for solving linear and nonlinear problems numerically, and for performing other numerical experiments using a language that is mostly compatible with Matlab.

Install [Octave](https://octave.org/) and run `mamba install octave_kernel` in [Miniforge](https://github.com/conda-forge/miniforge). Check that the Octave kernel exists using `jupyter kernelspec list`, and then install the kernel with

```
python -m octave\_kernel install
```

Some kernels have been developed using [Xeus](https://github.com/jupyter-xeus/xeus), e.g. [Xeus-Octave](https://github.com/jupyter-xeus/xeus-octave). [Xeus](https://xeus.readthedocs.io/en/latest/) is not itself a kernel, but a framework to help build new kernels for Jupyter. You'll need to install [Miniforge](https://github.com/conda-forge/miniforge?tab=readme-ov-file), and then run 

```
mamba install xeus-zmq -c conda-forge
```

An alternate version of Octave for Jupyter is available using the [xeus-octave](https://github.com/jupyter-xeus/xeus-octave) package, but it isn't available for Windows.

#### Python

JupyterLab comes with Python, so you will have it by default.

#### R

[R](https://www.r-project.org/) is a language and environment for statistical computing and graphics. Install R from one of the CRAN [mirrors](https://cran.r-project.org/mirrors.html), and optionally install [RStudio](https://posit.co/products/open-source/rstudio/), and IDE for R built by [Posit](https://posit.co/). Follow the instructions for getting and installing the IRkernel package to connect R and Jupyter.

#### Wolfram Language (Mathematica)

[Wolfram Language](https://www.wolfram.com/language/index.php.en) is a symbolic language, deliberately designed with the breadth and unity needed to develop powerful programs quickly. By integrating high-level forms—like [Image](https://reference.wolfram.com/language/ref/Image), [GeoPolygon](https://reference.wolfram.com/language/ref/GeoPolygon.html), or [Molecule](https://reference.wolfram.com/language/ref/Molecule.html)—along with advanced superfunctions—such as [ImageIdentify](https://reference.wolfram.com/language/ref/ImageIdentify.html) or [ApplyReaction](https://reference.wolfram.com/language/ref/ApplyReaction.html)—Wolfram Language makes it possible to quickly express complex ideas in computational form.

The [Wolfram Engine](https://www.wolfram.com/engine/) is free for personal projects and runs in Jupyter. There are some limitations with graphics, but Wolfram Language is a complete Mathematica implementation, so any mathematics that you might do in one is available in the other. The steps to get Wolfram Language running in Jupyter are:

* Download and install the [Wolfram Engine](https://www.wolfram.com/engine/). If you don't have an account, sign up for a free license.
* Start a Command Prompt at the Administrator level, and `cd` to the Wolfram directory, e.g. `C:\Program Files\Wolfram Research\Wolfram Engine\14.1`.
* Download the [`WolframLanguageForJupyter`](https://github.com/WolframResearch/WolframLanguageForJupyter/releases) paclet by clicking the triangle before "Assets". If you previously installed a version of Wolfram Language and the paclet, it may be the same paclet version, so copy it from the earlier WL directory.
* Start  WolframKernel.exe, and type `PacletInstall["WolframLanguageForJupyter-0.9.3.paclet"]` (replacing the paclet number as needed). If you previously installed the paclet, it will fail, but you can move on to the next step. This step may also require a few extra steps to complete the Wolfram Language installation.
* Enter `Needs["WolframLanguageForJupyter`"]`
* Enter `ConfigureJupyter["Add"]`
* Check that the installation worked with `jupyter kernelspec list` in a command terminal. The Jupyter Launcher will automatically update the kernel list which may take a few seconds.
* Remove previous versions with `jupyter kernelspec remove wolframlanguage<ver. no.>`

Details are available here: [Using Wolfram Language in Jupyter: A free alternative to Mathematica](https://nicoguaro.github.io/posts/wolfram_jupyter/) and in the [Wolfram Language kernel for Jupyter notebooks](https://github.com/WolframResearch/WolframLanguageForJupyter).

If you want better graphics, install the [Wolfram Language with Java Script](https://jerryi.github.io/wljs-docs/) (WLJS). The latest [release](https://github.com/JerryI/wolfram-js-frontend/releases) is available from the Assets section. This method provides dynamic graphics and widgets but opens in a separate window. For convenience, I prefer having a single point of entry for everything in Jupyter.

After installing the software and appropriate kernels your JupyterLab Launcher should look something like this:

![JupyterLab.png](/assets/img/2025-02-06-jupyterlab-desktop/JupyterLab.webp)

## VSCode or VSCodium

[Visual Studio Code](https://code.visualstudio.com/) (VSCode) is an integrated development environment (IDE) for writing programs in many popular computer languages. [VSCodium](https://vscodium.com/) is an open-source fork of VSCode with the Microsoft telemetry disabled. To install extensions look at the vertical icon bar on the left side for the Extensions icon. It's the one with four small squares with the upper right one separated from the other three. Click on that to open the Extensions Manager.

At the top, enter the name of the kernel you want to install, e.g. `Julia - Julia Language Support`. A new tab will open with instructions for installing the extension, which usually only requires clicking on the "Install" button. Follow any additional instructions on the page, and then start the kernel by clicking View $\rightarrow$ Command Palette, or Ctrl+Shift+P. For Julia, you can either type "Julia" or click `Julia: Start REPL`.

In many cases, there will be several options for the kernel. For example, there are eight choices for the Wolfram Language in VSCode. Choose whichever one you like, but consider the number of installations and the rating. If you don't like one, you can quickly uninstall it and try another. VSCode generally has more options than VSCodium because the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) is supported by Microsoft for VSCode, but not for VSCodium.

## ChatGPT and Claude Desktop

If you want to have separate windows for AI support, install the [ChatGPT](https://openai.com/chatgpt/desktop/), [Claude](https://claude.ai/download), or [Poe](https://poe.com/download) desktop app. ChatGPT seems to be the most capable model, while Claude is often more conversational and capable of reviewing articles. Poe gives the option of a wide variety of models if you want to experiment, but you may be rate-limited.

When I write articles for Wild Peaches, I let Claude and ChatGPT act as editors before I publish them. The first step was to tell Claude that it is an editor for a STEM blog and it should create a checklist for reviewing any submitted articles. The checklist Claude generated has fifteen items beginning with:



1. Problem Definition:

   * Is the problem or topic clearly stated?
   * Are the scope and context of the problem well-defined?
   * Has the author explained why this problem is important or relevant?

2. Technical Accuracy:

   * Are all facts, figures, and scientific concepts accurate and up-to-date?
   * Has the author cited reputable sources for key information?
   * Are mathematical equations and formulas correct and properly formatted?
   
   

When I'm ready for an article to be reviewed, I upload the editor checklist and the article and tell the AI to provide feedback based on the checklist. It's often very good at finding minor errors and suggesting improved wording.

## SciPress

[SciPress](https://www.scipress.io/) is a new platform for publishing topics on science and technology, which is a perfect match for [Wild Peaches](https://www.scipress.io/post/a2EPpqGZeAdxaWXvXsdP/Wild-Peaches). You can create an account and begin publishing for free immediately. Content is in [Markdown](https://www.markdownguide.org/) making writing very easy, and you can edit your article any time, even after publication. Stuart Ritchie argues in [*The big idea: should we get rid of the scientific paper?*](https://www.theguardian.com/books/2022/apr/11/the-big-idea-should-we-get-rid-of-the-scientific-paper?utm_source=pocket-newtab) that scientific publishing is a flawed process due to:

- Publication bias: A paper is more likely to be accepted if the results are "exciting", so there is a tendency to only publish better results
- Errors: Everybody makes mistakes. Ritchie says that 15% of published papers have errors that are so significant the papers should have been withdrawn, and authors find that they can't get journals to accept corrections.
- Code and data availability: In the past, published papers might refer to code and data used in the study, but getting that code and data to reproduce results was difficult. Updating results means publishing a new paper, rather than revising the existing one.
- Peer review: Publication relies on a review by (usually) three anonymous reviewers and approval by the journal editors. Reviewers are busy writing their own papers, and while they are likely interested in your paper, it's still an interruption to have to read someone's paper at a time requested by the journal. Reviewers are not unbiased either, especially if your work is in a narrow field. Approving another author's paper might improve the chances of approval for your next paper.
- Cost: Journals charge thousands of dollars for the privilege of publishing your work. Usually, this cost is borne by your university or organization, but all it does is add the imprimatur of the journal's name to your work.

Publishing in SciPress or some other online site eliminates many of these issues. The best argument in favor of journal publication is the peer review process, even with all of its flaws. Still, your readers are the people who are genuinely interested in the topic, and you can set up a feedback mechanism for questions and suggestions. The document is no longer static and can be updated and revised at any time. As AI systems improve, they may be able to take over much of the peer review process.

## Microsoft Power Toys

For Windows users, [Microsoft Power Toys](https://learn.microsoft.com/en-us/windows/powertoys/) can be a useful utility for the eurAIka platform. Some features that you might find useful are:

- [Advanced Paste](https://learn.microsoft.com/en-us/windows/powertoys/advanced-paste) is a tool that enables you to paste the text from your clipboard into any format needed.
- [FancyZones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones) is a window manager that makes it easy to create complex window layouts and quickly position windows into those layouts.
- [File Explorer add-ons](https://learn.microsoft.com/en-us/windows/powertoys/file-explorer) enable Preview pane and thumbnail rendering in File Explorer to display a variety of file types.
- [Image Resizer](https://learn.microsoft.com/en-us/windows/powertoys/image-resizer) is a Windows Shell extension for quickly resizing images.
- [PowerToys Run](https://learn.microsoft.com/en-us/windows/powertoys/run) can help you search and open your app instantly.
- [Quick Accent](https://learn.microsoft.com/en-us/windows/powertoys/quick-accent) is an alternative way to type accented characters.
- [Text Extractor](https://learn.microsoft.com/en-us/windows/powertoys/text-extractor) is a convenient way to copy text from anywhere on your screen.
- [Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces) is a desktop manager utility for launching a set of applications to custom positions and configurations with a single click.

For MacOS [Alfred](https://www.alfredapp.com/) may be an alternate to Power Toys.

## Next Steps

These tools should enable you to build your version of [eurAIka](https://euraika-sciences.github.io/), but there may be value in extending capability with hotkey control of some processes using [AutoHotKey](https://www.autohotkey.com/) or a similar tool. For example, Zettlr doesn't have [plugin support](https://github.com/Zettlr/Zettlr/discussions/3108), but some of this might be built with AutoHotKey. An alternate to Zettlr is [Obsidian](https://obsidian.md/community) which we used for the first version of eurAIka. Obsidian has thousands of [plugins](https://obsidian.md/plugins) and is customizable, but is not open-source. There is a free version for personal use but costs $50/year for commercial use.

To bring eurAIka a step closer to the original vision, we might consider [Langchain](https://www.langchain.com/) to apply enhanced AI methods to interact with tools such as Lean and Wolfram Language. Development tools for an AI Langflow application might include [LangSmith](https://www.langchain.com/langsmith), "an all-in-one developer platform for every step of the LLM-powered application lifecycle, whether you’re building with LangChain or not", [LangGraph](https://www.langchain.com/langgraph) to "design agents that reliably handle complex tasks", or [LangFlow](https://www.langflow.org/) "a low-code tool for developers that makes it easier to build powerful AI agents and workflows that can use any API, model, or database". All three have free tiers for hobbyists and experimenters.

## Image credits

- Hero: [Scientists make ‘rare advance’ in tackling the oldest unsolved problem in physics](https://edition.cnn.com/2025/02/06/science/turbulence-physics-oldest-unsolved-problem/index.html), Katie Hunt, CNN, 06 Feb 2025.
- eurAIka - [The Scientist's Assistant](https://euraika-sciences.github.io/), Wild Peaches.
- [Zen browser](https://zen-browser.app/) - welcome to a calmer internet.
- [start.me](https://about.start.me/) - Personalize your browser's startup page with bookmarks, notes, and more. 
- JupyterLab - [Project Jupyter](https://jupyter.org/), Free software, open standards, and web services for interactive computing across all programming languages.


## References and further reading

- [Julia language: a concise tutorial](https://syl1.gitbook.io/julia-language-a-concise-tutorial)
- [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/index.html), [Lean Documentation Overview](https://lean-lang.org/lean4/doc/whatIsLean.html), [Tutorial for Lean 4 Jupyter Kernel](https://nbviewer.org/github/utensil/lean4_jupyter/blob/18e8d701982d640aa443195f5ca287eec45313e3/examples/00_tutorial.ipynb?flush_cache=true), A Lean 4 Jupyter kernel via [repl](https://github.com/leanprover-community/repl) ([Github](https://github.com/utensil/lean4_jupyter)) 
- [Using Octave](https://wiki.octave.org/Using_Octave), [Octave Programming Tutorial](https://en.wikibooks.org/wiki/Octave_Programming_Tutorial)
- [The Python Tutorial](https://docs.python.org/3/tutorial/index.html)
- [Hands-On Programming with R](https://rstudio-education.github.io/hopr/), [R for Data Science (2e)](https://r4ds.hadley.nz/), [swirl - Learn R, in R.](https://swirlstats.com/)
- [Wolfram Language & System Documentation Center](https://reference.wolfram.com/language/index.html.en)
- [Zettlr Users Manual](https://docs.zettlr.com/en/)
- [Obsidian Help](https://help.obsidian.md/Home)
- [SciPress Docs](https://www.scipress.io/post/kehluzWG8Iq9y1Nu7IMP/docs)
- [Zen Browser Docs](https://docs.zen-browser.app/)
- [JupyterLab Desktop](https://blog.jupyter.org/jupyterlab-desktop-app-now-available-b8b661b17e9a)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VSCodium](https://vscodium.com/)
- [Microsoft Power Toys](https://learn.microsoft.com/en-us/windows/powertoys/)



