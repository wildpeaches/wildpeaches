---
title: The Magic Whiteboard - Part III
subtitle: The Robot Hacker
author: John Peach
lede: 
hero:
  url: /assets/img/2023-12-17-the-magic-whiteboard-hacker/the-hacker-sequence-dall-e.webp
  alt:
tags: [math, science]
keywords: [AI code assistant, JupyterLab]
socialImg: /assets/img/2023-12-17-the-magic-whiteboard-hacker/the-hacker-sequence-dall-e.webp
software: ['obsidian', 'anaconda', 'mamba', 'jupyterlab', 'julia', 'lean-theorem-prover', 'wxmaxima', 'octave', 'pari-gp', 'python', 'r', 'wolfram-language', 'knime', 'orange', 'weka', 'colab', 'fastai']
---

## The Hacker

The Hacker gives you several programming languages for scientific research as well as tools to analyze data and construct machine-learning methods for datasets. The Hacker is mostly built using [JupyterLab](https://docs.jupyter.org/en/latest/index.html) notebooks which let you insert notes and comments about the code you write using the same formatting that's available for the Magic Whiteboard. You can insert LaTeX math directly into your notes.

In principle, you could use JupyterLab to write your document since you can intersperse notes and code. We think that it's more appropriate to use the Magic Whiteboard for your main document and to reserve The Hacker for coding. The main results should be included in the document, but the coding details should be in an attached appendix. Most journals expect this separation, so having a space for writing and a space for coding seems more natural.

Just like the Magic Whiteboard and the Librarian, the Hacker is equipped with AI assistance, a conversational large language model called [Jupyternaut](https://blog.jupyter.org/generative-ai-in-jupyter-3f7174824862). You will still have access to the AI systems installed for the Magic Whiteboard since The Hacker runs in a tab in Obsidian.

![jupyternaut](/assets/img/2023-12-17-the-magic-whiteboard-hacker/jupyternaut.webp)

<p align = "center"><b>Jupyter and Jupyternaut AI</b></p>

## Mamba, Kernels, Environments, and Projects

When you start to work on a computational project you have to decide which language you want to use. There may be packages or extensions to the language that will be helpful to your project, so you'll have to load those into your workspace as well. Packages usually depend on many functions or subroutines which need to be included. Rather than attempting to keep track of all of the sub-packages required yourself, you need a package manager.

If you search for package managers for Jupyter you'll quickly find [Anaconda](https://anaconda.org/), but there's an alternative called [Mamba](https://github.com/mamba-org/mamba). Mamba is supposed to be a [drop-in replacement for Anaconda](https://statistics.berkeley.edu/computing/conda) but is [much faster](https://blog.hpc.qmul.ac.uk/mamba/) and more likely to succeed in finding the correct dependencies for each package. For each language, you need to install a [kernel](https://www.carc.usc.edu/user-information/user-guides/software-and-programming/jupyter-kernels) which "is a programming language-specific process that executes the code contained in a Jupyter notebook". A kernel connects Jupyter to a computer language.

An environment within Jupyter contains all of the packages you need for the project you're working on. You could think of it as an isolated folder on your computer containing everything required for one project. You should create a new environment for each project because the environment contains versions of the code for the project. By keeping everything isolated you can share not only the code you wrote, but exactly the software needed to run it which makes the project perfectly reproducible. 

If you want to try Mamba and already have Anaconda installed, first remove Anaconda and any associated folders. Follow the [instructions](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html) for installing Mamba using the [Miniforge](https://github.com/conda-forge/miniforge) distribution which will create one environment called *base*. On Windows, the installer does not add Minforge to the PATH environment variable and doesn't add a link to the start menu by default, but you should select both of these options.

The Mamba [Troubleshooting](https://mamba.readthedocs.io/en/latest/user_guide/troubleshooting.html#libmamba-so-2-undefined-symbol) page explains that the Anaconda default channels should not be used, and no other packages should be installed in the *base* environment. [Channels](https://prefix.dev/docs/mamba/channels) are online repositories of downloadable packages. Start the Miniforge prompt, type `mamba info`, and follow the directions on the Troubleshooting page to remove any Anaconda links containing `pkgs/main`, `pkgs/r/R`, `msys2`, or `defaults`. If the channel URLs contain only `conda-forge` you should be fine.

Finally, whatever you might read elsewhere, [don't install anything](https://focalplane.biologists.com/2022/12/08/managing-scientific-python-environments-using-conda-mamba-and-friends/) in the *base* environment besides Mamba. You should install Jupyter in an environment other than the *base* environment when using conda or Mamba. Here are a few reasons why:

- Installing Jupyter in its own environment prevents possible conflicts with other packages that you may install.
- It makes it easier to update or remove Jupyter without impacting other packages.
- You can create multiple Jupyter environments with different versions of Jupyter or kernels if needed for different projects.

Even when installed in its own environment, Jupyter will still be available to other environments. The Jupyter server process runs outside of any particular environment, so it can access kernels and packages from any environment you have configured. 

The key is that you need to make sure the ipykernel package is installed in each environment you want to connect to Jupyter. This registers the kernel with the Jupyter server. But Jupyter itself can remain in a dedicated environment and serve kernels from all your other environments.

To be able to use several different languages in JupyterLab such as Julia, Octave, Python, and R you can either install the kernels in the same environment as Jupyter or give each language kernel a separate environment:

1. Install the kernels in the same environment as Jupyter:
  - Create one environment for Jupyter and the kernels
  - Install Jupyter and needed kernel packages 
  - Kernels will be registered to work with the Jupyter server

2. Install kernels in their own language environments:
  - Create separate environments for each language 
  - Install Jupyter in one dedicated environment 
  - Install kernel packages in each language environment to register with Jupyter

The second approach of installing kernels in separate environments keeps things more isolated. But the kernels will still work with the Jupyter server as long as you install the kernel integration packages.

So in summary, you can use either approach based on your specific needs and preferences. The key is installing the kernel packages (like ipykernel) and registering with Jupyter through the kernelspecs. Jupyter is flexible enough to work with kernels from any environment.

The advantage of separate environments is isolation, while a shared Jupyter environment reduces duplication of installs. But both methods will enable the use of multiple languages with JupyterLab.

## Constructing the Hacker

To install [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) make a new environment named "Jupyter" or something similar using 

```bash
mamba create --name "Jupyter" python=<ver no>
```

where you specify the latest version of Python to be included in the Jupyter environment. Check that the new environment was created with `mamba env list`, and then activate it with `activate Jupyter` which should change the prompt to `(Jupyter) C:\Users\<your name>` or similar if you're not on a Windows machine. Next, activate the Jupyter environment with `activate Jupyter`  and then start a JupyterLab notebook using the command `jupyter lab`.

To be able to use different computer languages, you need to install [kernels](https://docs.jupyter.org/en/latest/projects/kernels.html) for each. The official list of available kernels is [here](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels), and there's an alternate list on [GitHub](https://gist.github.com/chronitis/682c4e0d9f663e85e3d87e97cd7d1624). By default, you'll have a kernel for Python, and installing others is relatively easy. To install [Julia](https://julialang.org/downloads/) follow the instructions for installing [IJulia](https://github.com/JuliaLang/IJulia.jl) and run `build IJulia` in the Julia package manager.

Most kernels are built with [IPython](https://github.com/ipython/ipykernel), but an alternative is [Xeus](https://github.com/jupyter-xeus/xeus) which gives [Octave](https://blog.jupyter.org/a-jupyter-kernel-for-gnu-octave-b6d29e56341f) a much nicer interface in Jupyter, although it isn't available for Windows systems yet. Xeus is being developed at [QuantStack](https://quantstack.net/index.html) which builds open-source software for science and education.

"[Managing Jupyter Kernels in JupyterLab](https://docs.posit.co/ide/server-pro/user/2023.03.1/jupyter-lab/guide/jupyter-kernel-management.html)" is a good resource for understanding Jupyter kernels, and "[What to do when things go wrong](https://jupyter-notebook.readthedocs.io/en/stable/troubleshooting.html)" from Jupyter is also very handy.	

From the official list, the ones you might like to start with are [Julia](https://github.com/JuliaLang/IJulia.jl), [Maxima](https://github.com/robert-dodier/maxima-jupyter), [Octave](https://github.com/calysto/octave_kernel), [PARI/GP](PARI/GP) (number theory - not available for Windows), and [Wolfram Language](https://github.com/WolframResearch/WolframLanguageForJupyter). But, there are other useful packages, and some haven't been included in the list. One add-on that should be installed first is [Jupyter AI](https://jupyter-ai.readthedocs.io/en/latest/) which provides generative AI to Jupyter notebooks. 

The set language [SetlX](https://randoom.org/Software/SetlX/) is installed by following the installation instructions and then running the commands shown under **Setup** for [iSetlX](https://github.com/1b15/iSetlX) in the Mamba window. To begin your introduction to SetlX and the theory of sets, see the accompanying [tutorial](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://download.randoom.org/setlX/tutorial.pdf) by Karl Stroetmann and Tom Herrmann. 

Since kernels are mostly community-built, some won't work as well as others. The Maxima kernel is one example that doesn't work as expected, but [wxMaxima](https://wxmaxima-developers.github.io/wxmaxima/) provides a nice notebook interface. If you want to use wxMaxima from The Hacker add a link to the wxMaxima start function (wxMaxima.exe on Windows). The Wolfram Language gives similar capabilities as wxMaxima and can be installed in Jupyter. (see [The Big Squish Theory - Part I](https://wildpeaches.xyz/blog/the-big-squish-theory-part-i/)).

![wxmaxima-notebook](/assets/img/2023-12-17-the-magic-whiteboard-hacker/wxmaxima-notebook.webp)

<p align = "center"><b>wxMaxima Notebook Example</b></p>

Some software tools have Jupyter kernels but aren't listed in the two lists above. The Lean Theorem Prover can be run from Jupyter using [Lean-To](https://github.com/bollu/lean-to) and [OpenModelica](https://openmodelica.org/), a modeling and simulation environment, uses [jupyter-openmodelica](https://github.com/OpenModelica/jupyter-openmodelica) to connect to Jupyter.

To check that the kernels have been installed correctly, run

```python
jupyter kernelspec list
```

If you see one listed as 'ir', that's the R kernel. If you already have a kernel installed but want to remove it or update it to the latest version first remove the existing kernel with `jupyter kernelspec uninstall {KERNEL_NAME}` and then re-install it. 

## Jupyter AI

For JupyterLab notebooks [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) gives conversational assistance to your coding questions. The documentation (see *ReadTheDocs* in the Jupyter AI Github pag) provides detailed instructions for installation and use. You should have the latest version of Python after installing Mamba, but you can check by starting the command prompt (in the MagicWhiteboard environment), and then typing `python` which should generate something like:

```python
Python 3.11.5 | packaged by Anaconda, Inc. | (main, Sep 11 2023, 13:26:23) [MSC v.1916 64 bit (AMD64)] on win32
```

Enter `exit()` to quit Python. Now follow the directions for installing Jupyter AI using conda (or Mamba)

```python
# change 4.0 to 3.0 if you need JupyterLab 3
conda config --add channels conda-forge
conda config --set channel_priority strict
conda install jupyterlab~=4.0
```

## Online science tools

Some math and science software tools don't have Jupyter kernels but are available online. In Obsidian, you can build links to these just as you did for the online literature search tools described in [The AI Librarian](https://wildpeaches.xyz/blog/the-magic-whiteboard-part-ii/), and clicking on one of the links will open the app in a new window in Obsidian. Examples of online tools you might like to include are listed below. Arrange them on the Obsidian page using the [Multi-Column Markdown](https://github.com/ckRobinson/multi-column-markdown) plugin.

- [Insight Maker](https://insightmaker.com/) - System dynamics models.
- [NetLogo](https://www.netlogoweb.org/) - Agent-based modeling.
- [Lean4](https://lean.math.hhu.de/) - Theorem prover.
- [Tracker Physics](https://physlets.org/tracker/trackerJS/) - Video analysis and modeling tool for physics.
- [SMath Studio](https://en.smath.com/cloud/) - [Mathematical program](https://smath.com/en-US/) with WYSIWYG editor and complete units of measurement support.
- [Geogebra](https://www.geogebra.org/classic?lang=en) - An [interactive geometry](https://en.wikipedia.org/wiki/Interactive_geometry_software), [algebra](https://en.wikipedia.org/wiki/Algebra), [statistics](https://en.wikipedia.org/wiki/Statistics), and [calculus](https://en.wikipedia.org/wiki/Calculus) application, intended for learning and [teaching mathematics](https://en.wikipedia.org/wiki/Teaching_mathematics) and science from primary school to university level. 
- [Desmos](https://www.desmos.com) - Free calculators, function graphing.
- [WebPlotDigitizer](https://automeris.io/WebPlotDigitizer/) - Extract data from graphs.
- [PHET](https://phet.colorado.edu/) - Physics, Chemistry, Math, Earth Science, and Biology simulations.
- [VisualMathEditor](https://visualmatheditor.equatheque.net/) - LaTeX, AsciiMath, and MathML editor.
- [SageMathCell](https://sagecell.sagemath.org/) - Simplified [SageMath](https://www.sagemath.org/) interface.
- [fxSolver](https://www.fxsolver.com/) - Solver for engineering and scientific equations.
- [Engineering Paper](https://engineeringpaper.xyz/temp-checkpoint-fde48b91-74ee-4f84-a88f-2dff064bdb47) - A tool that evaluates complex mathematical expressions while keeping track of the units. ([Documentation](https://engineeringpaper.xyz/CUsUSuwHkHzNyButyCHEng)).

You could also link to any software that you've downloaded locally to your machine, but they would open in the usual way, and not in an Obsidian window.

## Data Analysis

For data analysis, there are several very good options. One is [Knime](https://www.knime.com/?) which includes the [Knime AI Assistant](https://www.knime.com/blog/whats-new-knime-analytics-platform-52#k-ai) to help build analytic models. Knime uses visual programming to construct workflows.

![knime-workflow](/assets/img/2023-12-17-the-magic-whiteboard-hacker/knime-workflow.webp)

<p align = "center"><b>Knime Workflow</b></p>

Components such as **Excel Reader** can be dropped onto the worksheet and connected to other drag-and-drop components to create a complete data analysis system. New components can be written in [Python](https://www.knime.com/knime-python) or downloaded from the [Community Hub](https://hub.knime.com/). Similar tools are the [Orange Data Mining](https://orangedatamining.com/) platform and [Weka](https://www.cs.waikato.ac.nz/ml/weka/). If your data is in .csv format, you might want to consider the plugin [JupyterLab Spreadsheet](https://github.com/quigleyj97/jupyterlab-spreadsheet?tab=readme-ov-file#jupyterlab-spreadsheet).

Another option is to use [Google Colaboratory](https://colab.google/) (Colab), "a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs and TPUs." Colab is mainly designed to use Python and now has [AI coding assistance](https://blog.google/technology/developers/google-colab-ai-coding-features/) using [Codey](https://ai.google/discover/foundation-models/). Plug fast.ai into Colab and you'll be ["Making neural nets uncool again"](https://www.fast.ai/). The founders of [fastai](https://www.fast.ai/about.html), Jeremy Howard and Rachel Thomas, also provide a book, [*Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD*](https://www.amazon.com/Deep-Learning-Coders-fastai-PyTorch/dp/1492045527), two free online courses, [Practical Deep Learning for Coders](https://course.fast.ai/) and [From Deep Learning Foundations to Stable Diffusion](https://course.fast.ai/Lessons/part2.html) to go with the [code](https://docs.fast.ai/).

## Using AI for Science

Tools like [The Magic Whiteboard](https://wildpeaches.xyz/blog/the-magic-whiteboard-part-i/) are already being used to solve math and science problems. [Sergei Gukov](http://theory.caltech.edu/~gukov/) a professor of mathematics and physics at CalTech is one of the organizers of the [Mathematics and Machine Learning 2023](https://mathml2023.caltech.edu/) conference. He says, “There are some mathematicians who may still be skeptical about using the tools. The tools are mischievous and not as pure as using paper and pencil, but they work.”

Gukov and his colleagues are working on the smooth [Poincaré conjecture in 4-dimensions](https://math.uchicago.edu/~dannyc/books/4dpoincare/4dpoincare.html) using the assistance of AI which you can read about in [SciTech Daily.](https://scitechdaily.com/the-intersection-of-math-and-ai-a-new-era-in-problem-solving/) 

![Connecting-Math-and-Machine-Learning](/assets/img/2023-12-17-the-magic-whiteboard-hacker/Connecting-Math-and-Machine-Learning.webp)

<p align = "center"><b>The Intersection of Math and AI: A New Era in Problem-Solving</b></p>

Alhussein Fawzi and Bernardino Romera Paredes describe using FunSearch, an evolutionary method powered by LLMs to help solve the [cap set problem](https://en.wikipedia.org/wiki/Cap_set),  in [*FunSearch: Making new discoveries in mathematical sciences using Large Language Models*.](https://ai.nicheturnkeywebsites.com/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/) 

New AI resources arrive daily to help you assemble your Magic Whiteboard, but you now have the outline for building the basic whiteboard in Obsidian, the AI-assisted Librarian and Hacker ready to help with all of your STEM ideas.

------



### Image credits

Hero: [The Sequence](https://thesequence.substack.com/p/inside-fuyu-8b-adepts-super-innovative), image created with DALL-E

Jupyter and Jupyternaut AI: 

wxMaxima Notebook Example: [Solving algebra problems step by step with wxMaxima](https://www.ubuntu-user.com/Magazine/Archive/2015/24/Solving-algebra-problems-step-by-step-with-wxMaxima/%28offset%29/2)

Knime Workflow: [From Spreadsheets to Workflows](https://www.knime.com/from-spreadsheets-to-workflows)

SciTech Daily: [The Intersection of Math and AI: A New Era in Problem-Solving](https://scitechdaily.com/the-intersection-of-math-and-ai-a-new-era-in-problem-solving/)



------



## Links

### Jupyter

- [Project Jupyter](https://jupyter.org/) - Free software, open standards, and web services for interactive computing across all programming languages.
- [Jupyter Blog](https://blog.jupyter.org/) - All the latest about Project Jupyter.
- [Jupyter kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) - Official list of available Jupyter kernels. 
- [Jupyter kernel list](https://gist.github.com/chronitis/682c4e0d9f663e85e3d87e97cd7d1624) - Community-maintained list of kernels.
- [Xeus kernels](https://xeus.readthedocs.io/en/latest/) - A framework meant to facilitate the implementation of kernels for Project Jupyter.
- [Add kernels for multiple languages in Jupyter Notebook](https://note.nkmk.me/en/jupyter-notebook-kernels-bash/).
- [Jupyter Extension for Visual Studio Code](https://github.com/microsoft/vscode-jupyter).
- [JupyterLab Spreadsheet](https://github.com/quigleyj97/jupyterlab-spreadsheet?tab=readme-ov-file#jupyterlab-spreadsheet) - Adds a simple spreadsheet viewer to JupyterLab.
- [JupyterCAD - A JupyterLab extension for 3D geometry modeling](https://github.com/jupytercad/jupytercad).
- [Jason Weill](https://medium.com/@jweill-aws?source=post_page-----3f7174824862--------------------------------) - [Generative AI in Jupyter](https://blog.jupyter.org/generative-ai-in-jupyter-3f7174824862).
- [Jupyter AI](https://jupyter-ai.readthedocs.io/en/latest/users/index.html#prerequisites) - User documentation. 
- [Medium](https://towardsdatascience.com/interactive-spreadsheets-in-jupyter-32ab6ec0f4ff) - Interactive spreadsheets in Jupyter.

### Lean Theorem Prover

- [Lean-to](https://github.com/bollu/lean-to) - A Jupyter shelter for your Lean4 code.
- [LeanDojo](https://leandojo.readthedocs.io/en/latest/index.html) - Machine Learning for Theorem Proving in Lean. 
- [LeanDojo](https://leandojo.org/) - Theorem Proving with Retrieval-Augmented Language Models. 
- [Lean Copilot](https://github.com/lean-dojo/LeanCopilot) - LLMs as Copilots for Theorem Proving in Lean.
- [David Brochart](https://david-brochart.medium.com/?source=post_page-----805e48918801--------------------------------) - [Plug your application into the Jupyter world](https://blog.jupyter.org/plug-your-application-into-the-jupyter-world-805e48918801).

### Mamba and Gator

- [Mamba](https://github.com/mamba-org/mamba) - The Fast Cross-Platform Package Manager. 
- [Gator](https://github.com/mamba-org/gator) - The Mamba Navigator, a Web UI for managing conda environments.
- FocalPlane - [Managing Scientific Python environments using Conda, Mamba, and friends](https://focalplane.biologists.com/2022/12/08/managing-scientific-python-environments-using-conda-mamba-and-friends/)
- [dataviz cafe](https://dataviz.cafe/) - A catalog of open-source visualization tools.

### Science and Math AI Articles

- Stephen Wolfram - [LLM Tech and a Lot More: Version 13.3 of Wolfram Language and Mathematica](https://writings.stephenwolfram.com/2023/06/llm-tech-and-a-lot-more-version-13-3-of-wolfram-language-and-mathematica/).
- MIT Technology Review - [Google DeepMind used a large language model to solve an unsolvable math problem](https://www.technologyreview.com/2023/12/14/1085318/google-deepmind-large-language-model-solve-unsolvable-math-problem-cap-set/).
- Nature - [DeepMind AI outdoes human mathematicians on unsolved problems](https://www.nature.com/articles/d41586-023-04043-w). 
- SciTech Daily - [The Intersection of Math and AI: A New Era in Problem-Solving](https://scitechdaily.com/the-intersection-of-math-and-ai-a-new-era-in-problem-solving/).
- [Computational Discovery on Jupyter](https://computational-discovery-on-jupyter.github.io/Computational-Discovery-on-Jupyter/) - Using Python to explore some interesting mathematics, mathematics not in the standard curriculum.

### Similar AI Projects

- [Google Colab](https://colab.google/)
- fast.ai - [Making neural nets uncool again](https://www.fast.ai/).
- fast.ai - [A new old kind of R&D lab](https://www.fast.ai/posts/2023-12-12-launch.html).
- [Welcome to fastai](https://docs.fast.ai/)
- [Polymathic](https://polymathic-ai.org/) - Advancing Science through Multi‑Disciplinary AI.
- [Enthought](https://www.enthought.com/resource/cheat-sheet-large-language-models-for-scientific-research/) - Large Language Models+ For Scientific Research.
- [Jeda.ai](https://www.jeda.ai/online-whiteboard) - Generate the way to Success with AI Online Whiteboard.
- [The Sequence](https://thesequence.substack.com/p/inside-fuyu-8b-adepts-super-innovative) - Inside Fuyu-8B: Adept's Super Innovative Multimodal Foundation Model for AI Agents.
- [The Sequence](https://thesequence.substack.com/p/guest-post-meet-lorax-the-open-source) - Meet LoRAX: The Open Source System that Serves 1000s of Fine-Tuned LLMs on a Single GPU*.
- [Jarvis](https://github.com/microsoft/JARVIS) - Explore artificial general intelligence (AGI) and deliver cutting-edge research to the whole community.
- [Pinecone](https://www.pinecone.io/blog/canopy-rag-framework/) - Introducing Canopy: An easy, free, and flexible RAG framework powered by Pinecone.
- [Liquid.ai](https://www.liquid.ai/) - A new generation of foundation models from first principles.
- [Obsidian vault for scientific research](https://github.com/LalieA/obsidian-scientific-research-vault).