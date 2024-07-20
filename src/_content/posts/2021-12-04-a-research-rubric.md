---
title: A Research Rubric
subtitle: 'Software to search, sort, store and summarize science'
author: John Peach
lede: null
hero:
  url: /assets/img/2021-12-04-a-research-rubric/VOSviewer2.png
  alt: null
tags:
  - math
keywords:
  - literature review
  - reference manager
  - keyword search
  - review paper
  - meta paper
  - citation mapping
  - summarizers
socialImg: /assets/img/2021-12-04-a-research-rubric/VOSviewer2.png
lastmod: '2022-03-04T21:13:44.581Z'
software: ['zotero', 'qiqqa', 'docear', 'mendeley']
---

[Home](https://wildpeaches.github.io/)

## The Perfect Bet

You want to learn something new. How do you do it? With easy access to the Internet, your first thought might be to let Google do the searching. Searching for terms about a subject often turns up more commonly used terms, and these new phrases may lead to areas you hadn't thought about initially. You can bookmark your searches, organize them into folders, and add [tags](https://support.mozilla.org/en-US/kb/categorizing-bookmarks-make-them-easy-to-find) to identify them using keywords in your bookmark manager.

Your search can be more organized than just collecting web page links into bookmarks. With the many new software tools available, you can search a topic efficiently, add tags and annotations to scientific papers, and automatically summarize the key concepts. To illustrate these ideas, I'm going to demonstrate the process by finding literature on predicting the outcomes of soccer matches.

The [goodreads summary](https://www.goodreads.com/book/show/26195954-the-perfect-bet) of Adam Kucharski's _The Perfect Bet: How Science and Math Are Taking the Luck Out of Gambling_ says,

> For the past 500 years, gamblers - led by mathematicians and scientists - have been trying to figure out how to pull the rug out from under Lady Luck. In _The Perfect Bet_, mathematician and award-winning writer Adam Kucharski tells the astonishing story of how the experts have succeeded, revolutionizing mathematics and science in the process. The house can seem unbeatable. Kucharski shows us just why it isn't. Even better, he demonstrates how the search for the perfect bet has been crucial for the scientific pursuit of a better world.

The book shows how to beat casino games, bet on sports, and gives optimal stock trading techniques. We thought that soccer might be a fun way to begin learning about predicting the outcome and betting on the results. But as Jan pointed out, soccer games are typically low-scoring. Kucharski's solution is in-game betting. Which team will take the next shot at the goal? Which team will control the ball the longest over the next five minutes?

Kucharski quoted an article from [The Post Game](https://www.thepostgame.com/#who-we-are), [_Betting After The Games Are Underway_](http://www.thepostgame.com/blog/spread-sheet/201101/betting-after-games-are-underway) about Cantor Fitzgerald, an entrepreneur who started CG Technology to handle these bets. A 2016 [ESPN article](https://www.espn.com/chalk/story/_/id/17707481/las-vegas-sportsbook-cg-technology-was-fined-225m-illegal-gambling-money-laundering-scheme) says that CG Technology was fined $22.5M for illegal gambling and money laundering. It appears that William Hill Race & Sportsbook has [acquired parts of CG Technology](https://www.williamhill.us/william-hill-acquisition-of-select-assets-of-cg-technology-formerly-cantor-gaming-faqs/), but it's not clear if in-game betting on soccer is still available. So, maybe we won't be able to bet on games, but even if we can, we still need to figure out how to do it. We need the prediction part first.

## The Process

Aaron Tay's [Musings about librarianship](https://musingsaboutlibrarianship.blogspot.com/) is a marvelous blog about conducting online research. Aaron is a Library Analytics Manager at Singapore Management University and is the founder of [Initiative for Open Abstracts](https://i4oa.org/) to promote unrestricted access to scholarly research. One of his blog posts, [_Navigating the literature review_](https://musingsaboutlibrarianship.blogspot.com/2020/12/navigating-literature-review-metaphors.html?q=google+search) describes the process of literature review, and contains some useful online tools. At the end of this post, I'll provide a more complete set of tools, but since Aaron has already picked out the ones he thinks are likely to be the most useful, we'll go through his process.

Normally, I'd recommend finding an expert or two as a first step, but "soccer gambling" is such an esoteric concept it's unlikely that you'd find a real expert in both soccer and gambling. We'll resort to doing online searches for this project. Aaron also has a post, [_Top new tools for researchers worth looking at_](https://aarontay.medium.com/top-new-tools-for-researchers-worth-looking-at-9d7d494761b0) with many good searching methods.

Simply reading about a subject doesn't make you an expert, though. You have to experiment with and practice the new concept. "How do you get to [Carnegie Hall?](https://www.carnegiehall.org/Explore/Articles/2020/04/10/The-Joke)", "Practice, man, practice."

Briefly, an outline of the method is

1. Make a folder for storing research articles, and set up a reference manager tool.
2. Look for papers containing key words to get an idea about commonly used terms in the field.
3. Find papers providing an overview of the subject, with references to more detailed articles.
4. Map the literature space by linking papers by similar topics, or through citations.
5. Read and summarize papers you've found, taking notes of important topics or methods mentioned.

## Set up a Reference Manager

Before beginning the search, we need to be able to save journal articles. Create a PDF folder somewhere on your hard drive. You can add subfolders if it helps keep some sort of organization to the papers. Most good reference managers will be able to handle a jumble of papers thrown into a single folder.

Aaron recommends [Zotero](https://www.zotero.org/), but alternatives I like are [Qiqqa](http://www.qiqqa.com/) and [Docear](https://docear.org/). The site [AlternativeTo](https://alternativeto.net/) recommends [Mendeley](https://www.mendeley.com/reference-management/reference-manager) as another good reference manager with [ features similar](https://www.library.yorku.ca/web/research-learn/citing-your-work-academic-integrity/citations/zotero-vs-mendeley-comparison/) to Zotero. Of course, Qiqqa claims it's [much better](http://www.qiqqa.com/About/Compare#) than Zotero, and since I've been using Qiqqa for a while I'll explain how it works. Qiqqa recently became [open source,](https://github.com/jimmejardine/qiqqa-open-source) so the latest version is available on [Github](https://github.com/GerHobbelt/qiqqa-open-source/releases), a quick tutorial is available on [YouTube](https://www.youtube.com/watch?v=b01GdtlyOmE), and the [Qiqqa manual](http://www.qiqqa.com/Content/Client/The%20Qiqqa%20Manual.pdf) is also online.

After you have saved articles to your PDF folder, start Qiqqa, click on "Guest" and at the top left corner you should see "Add PDFs or References". Click the drop-down arrow and then "Add Folder". Navigate to your PDF folder and select it, allowing subfolders. Qiqqa will then read each of the PDFs in your PDF folder using OCR, automatically adding tags and creating bibliographies for each paper. It may take a few minutes depending on how many papers you've downloaded, but when Qiqqa is finished you can select papers by tag, author, publisher, year, or custom search criteria. Double-clicking on the paper brings it up in a new tab.

When downloading a new PDF, you'll often find that the file name is something like _PhysRevX.7.041052.pdf_ when the title of the paper is _Quantum-Assisted Learning of Hardware-Embedded Probabilistic Graphical Models_. You don't need to change the file name title to match the paper title because Qiqqa will read the title and store it using the more readable form.

## Top Level or Keyword Searching

We want to figure out how to gamble on soccer. Or should we be betting on football? The [University of Reading Library](https://libguides.reading.ac.uk/database-searching/techniques) recommends combining key terms and truncating search words and using wildcards, combining search terms, and using  phrase and proximity searching. Since we're not sure that in-game gambling is still possible, we might be better off looking for a method or strategy to predict the outcome using something like "soccer AND prediction". Synonyms for "prediction" found in a [thesaurus](https://www.thesaurus.com) are "forecast", "guess", "indicator", "prognosis" and "indicator" so we could try combinations of those as well.

A Google search for "soccer prediction" returns lots of predictions other people are making about soon-to-be played games such as these from [FiveThirtyEight](https://projects.fivethirtyeight.com/soccer-predictions/). FiveThirtyEight gives a detailed description of how they [produce their predictions](https://fivethirtyeight.com/methodology/how-our-club-soccer-predictions-work/) which mostly rely on [ESPN's Soccer Power Index](https://www.espn.com/world-cup/story/_/id/4447078/ce/us/guide-espn-spi-ratings) (SPI). James Curley provided the data and [R](https://www.r-project.org/) code used by FiveThirtyEight on [GitHub](https://github.com/jalapic/engsoccerdata).

Arthur Caldas wrote an article on Medium, [_Beating soccer odds using Machine Learning — Project Walkthrough_](https://medium.com/analytics-vidhya/beating-soccer-odds-using-machine-learning-project-walkthrough-a1c3445b285a) that shows how to scrape data from the web, clean the downloaded data, and generate good features to use in the prediction.

A search on [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,34) shows additional terms like "machine learning", "neural network", "model", "bayesian", and "results". This search returns papers such as

- _[Incorporating domain knowledge in machine learning for soccer outcome prediction](https://link.springer.com/article/10.1007/s10994-018-5747-8)_
- [_Neural underpinnings of superior action prediction abilities in soccer players_](https://academic.oup.com/scan/article/10/3/342/1651945?login=true)
- [_Optimizing the Prediction Process: From Statistical Concepts to the Case Study of Soccer_](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0104647)

Other search engines such as [Microsoft Academic](https://academic.microsoft.com/home), [BASE](https://www.base-search.net/), and [Science Open](https://www.scienceopen.com/) provide alternate searching methods. BASE returned these links to very relevant papers,

- [_The Open International Soccer Database for machine learning._](https://push-zb.helmholtz-muenchen.de/frontdoor.php?source_opus=53951)
- [_The 2017 Soccer Prediction Challenge_](https://osf.io/ftuva/)
- [_pi-football: A Bayesian network model for forecasting Association Football match outcomes_](https://qmro.qmul.ac.uk/xmlui/handle/123456789/10780)

We should also take advantage of the papers referenced in _The Perfect Bet_:

- [The birth process model for association football matches](https://www.jstor.org/stable/2988632)
- [A mixed-effects model for identifying goal-scoring ability of footballers](https://www.jstor.org/stable/43965702)
- [Forecasting sports tournaments by ratings of (prob)abilities: A comparison for the EURO 2008](https://www.sciencedirect.com/science/article/abs/pii/S0169207009001459)
- [How computer analysts took over at Britain's top football clubs](https://www.theguardian.com/football/2014/mar/09/premier-league-football-clubs-computer-analysts-managers-data-winning)
- [How Does the Past of a Soccer Match Influence Its Future? Concepts and Statistical Analysis](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047678)
- [How efficient is the European football betting market? Evidence from arbitrage and trading strategies](https://onlinelibrary.wiley.com/doi/10.1002/for.1085)
- [How the spreadsheet-wielding geeks are taking over football](https://www.newstatesman.com/culture/sport/2013/06/how-spreadsheet-wielding-geeks-are-taking-over-football)
- [Joint modelling of goals and bookings in association football](https://www.jstor.org/stable/43965756)
- [Just how unpredictable is the Premier League? Scientists have done the maths](https://theconversation.com/just-how-unpredictable-is-the-premier-league-scientists-have-done-the-maths-59839)
- [Modelling association football scores and inefficiencies in the football betting market](https://www.jstor.org/stable/2986290)
- [Professionals Play Minimax](http://www.palacios-huerta.com/docs/professionals.pdf)
- [why spain will win...](https://www.yumpu.com/en/document/read/37701119/why-spain-will-win)
- [Why the power of one is overhyped in football](https://www.theguardian.com/football/blog/2013/mar/24/gareth-bale-one-man-team-overhyped)
- [World Cup Stats Prof: I was right all along](https://www.theregister.com/2010/07/13/world_cup_stats/)

_The Perfect Bet_ also mentions the [Journal of Quantitative Analysis in Sports](https://www.degruyter.com/journal/key/jqas/html?lang=en) and the MIT Sloan [Sports Analytics Conference](https://www.sloansportsconference.com/?p=9607), which may provide useful insights.

## Review Papers

Review or "meta" papers are written by experts on a particular subject, and describe the current state of science on that topic. Review papers typically describe the work by many scientists with references to papers they've written. Review papers can be found with [2Dsearch](https://www.2dsearch.com/), using methods discussed by Aaron Tay in a [Medium article](https://medium.com/a-academic-librarians-thoughts-on-open-access/4-ways-to-find-review-papers-systematic-reviews-meta-analysis-and-other-rich-sources-of-82898aebb6e7).

![2Dsearch](/assets/img/2021-12-04-a-research-rubric/2Dsearch.png)

<p align = "center"><b>2DSEARCH</b></p>

When you go to the 2Dsearch website, you'll see a blank area on the left and a results window on the right. Enter terms anywhere in the search term window. I chose "soccer", "review", and "prediction". Right-click on any word to bring up a list of suggested terms, and choose the most relevant ones. You can group similar terms by dragging a box around them, so in the Forecasting box I have "prediction", "forecast", "estimation", and "projections".

In the upper right corner of each box you can set the Boolean operator to "AND" or "OR" (upper case). Group all the search terms into a single box, labeled here as "Meta-analysis of soccer games prediction", and choose the Boolean "AND".

In the results window, choose the search space such as Lens.org. Other possibilities are Google, Google Scholar, PubMed, IEEE Xplore, and others. Double click on any paper to bring it up in a new tab. The three lines with a red dot in the upper left corner opens the global menu. A very useful starting point is the "How to use" button which will present introductory videos.

Using the search terms shown as well as "NOT injury" led to several useful papers,

- [On Modelling Soccer Data](http://statpostgrade.ch/bilan/student/vol3n4.pdf)
- [Modeling outcomes of soccer matches](https://link.springer.com/article/10.1007/s10994-018-5741-1)
- [The ARCANE Project: How an Ecological Dynamics Framework Can Enhance Performance Assessment and Prediction in Football](https://link.springer.com/article/10.1007/s40279-016-0549-2)
- [Predicting Sports Results with Artificial Intelligence – A Proposal Framework for Soccer Game](https://www.lens.org/lens/scholar/article/113-844-320-745-042/main)

Another useful search tool is [Semantic Scholar](https://www.semanticscholar.org/). After entering the search terms, use the drop-down menu under "Publication Type" and select "Review" and "Meta Analysis". This returned,

- [Forty years of score-based soccer match outcome prediction: an experimental review](https://www.semanticscholar.org/paper/Forty-years-of-score-based-soccer-match-outcome-an-Hub%C3%A1cek-Sourek/8a221f3af88556293982d7017633b100c1654421)
- [Dolores: a model that predicts football match outcomes from all over the world](https://link.springer.com/content/pdf/10.1007/s10994-018-5703-7.pdf)
- [Score-based soccer match outcome modeling – an experimental review](http://ida.felk.cvut.cz/zelezny/pubs/MathSport2019a.pdf)
- [A Review on Football Match Outcome Prediction using Bayesian Networks](https://iopscience.iop.org/article/10.1088/1742-6596/1020/1/012004/pdf)

## Citation Mapping

Aaron's post _[More research/literature mapping tools - Connected Papers and CoCites](https://musingsaboutlibrarianship.blogspot.com/2020/06/more-researchliterature-mapping-tools_16.html)_ reviews several citation mapping tools, and I liked Connected Papers best because it's browser-based and very fast. Type the name of a paper in the search bar and Connected Papers will display the abstract. Click on the abstract to get a graph of related papers,

![connected-papers](/assets/img/2021-12-04-a-research-rubric/connected-papers.png)

<p align = "center"><b>Connected Papers</b></p>

Hovering over one of the circles displays the title, authors, and abstract of that paper, and lets you open it in a new tab. The closer a circle is to the original paper, the more similar it is in content. Darker colors represent newer papers. This is a similarity graph, not a citation tree, but [Citation Gecko](https://www.citationgecko.com/) is a way to see how papers are linked through citations. When you start Citation Gecko, it asks for a seed paper

![citation-gecko-seed-papers.png](/assets/img/2021-12-04-a-research-rubric/citation-gecko-seed-papers.png)

<p align = "center"><b>Citation Gecko Seeds</b></p>

and after entering [_Dolores: a model that predicts football match outcomes from all over the world_](https://link.springer.com/content/pdf/10.1007/s10994-018-5703-7.pdf) other recommended seed papers are listed in a new pop-up window. After selecting the most relevant papers, click "Add selected seed papers" at the bottom of the window, which opens a new view.

![citation-gecko-recommended-papers.png](/assets/img/2021-12-04-a-research-rubric/citation-gecko-recommended-papers.png)

<p align = "center"><b>Citation Gecko Recommended Papers</b></p>

This lets you see links between your seed papers and others. You can add some of these as new seed papers, or you can follow the link to the paper. In many cases, you can download the paper by following the link.

Another useful search tool is the [Local Citation Network](https://timwoelfle.github.io/Local-Citation-Network/) that generates a list of citations based on a [DOI](https://www.doi.org/) (Digital Object Identifier) or list of DOI's and provides a graphical representation of the linked papers. Tim Wölfle, the author of Local Citation Network explains the differences between it and Citation Gecko on the [Leiden Madtrics](https://leidenmadtrics.nl/articles/local-citation-network-and-citation-gecko-making-literature-discovery-fun) site.

Ujjal Marjit wrote a nice blog post describing the tool, [_Free Visualization Tool to Support Literature Survey_](https://researcherssite.com/free-visualization-tool-to-support-literature-survey/).

![local-citation-network.png](/assets/img/2021-12-04-a-research-rubric/local-citation-network.png)

<p align = "center"><b>Local Citation Network</b></p>

## Summarizing and Annotating

Finding and downloading a lot of papers is pretty pointless by itself. _The readings will continue until morale improves_. You might have collected weeks worth of reading material, so we'll need a quick way to extract important points from each paper.

Unlike reading a novel, you shouldn't read a paper from start to finish. Read the abstract and key terms, then look for the important topics in each section. Look up any terms you don't understand, and summarize the main points. Elsevier has an [infographic](https://www.elsevier.com/connect/infographic-how-to-read-a-scientific-paper) outlining the process with links to papers that go into more depth.

[Scholarcy](https://www.scholarcy.com/) developed an AI paper summarizer extension for [Chrome](https://chrome.google.com/webstore/detail/scholarcy-research-paper/oekgknkmgmaehhpegfeioenikocgbcib?hl=en-GB) and [Edge](https://microsoftedge.microsoft.com/addons/detail/scholarcy-research-pape/bcghmjggkikigjnehajdkhnhddfmkbbd) that reads the paper currently open in your browser and generates tag words of key concepts, writes a summary, and gives an overview of the paper's methods, results, discussion, conclusions, and future work sections.

The summary is in Markdown format that can be read into editors like [Zettlr](https://www.zettlr.com/) or [Obsidian](https://obsidian.md/). Key concepts highlighted by Scholarcy have links to Wikipedia articles to quickly understand unfamiliar terms. Click on a reference in the Markdown summary and a link will open in Google Scholar, scite\_, or it will open the paper. Scholarcy mangles equations, but it does a pretty good job of giving you the gist of the article.

![scholarcy.png](/assets/img/2021-12-04-a-research-rubric/scholarcy.png)

<p align = "center"><b>Scholarcy</b></p>

An alternate to Scholarcy is [paper-digest](https://www.paper-digest.com/) described by Ujjal Marjit in [_How to Generate an Automatic Summary of Research Paper_](https://researcherssite.com/how-to-generate-an-automatic-summary-of-research-paper/). The summary is sparser than Scholarcy's but may be useful for a quick understanding of the basic outline.

![paper-digest.png](/assets/img/2021-12-04-a-research-rubric/paper-digest.png)

<p align = "center"><b>Paper Digest</b></p>

As mentioned earlier, [Qiqqa](https://github.com/jimmejardine/qiqqa-open-source) (open source) manages your documents, but also has many tools for searching and annotating your documents. After starting Qiqqa, the home screen opens. Click on the drop-down icon "Add PDFs or References" and select "Add Folder" to import your library into Qiqqa. Qiqqa uses OCR to read the documents. If you have added new documents since you first started Qiqqa, it reads those as well. When it has finished, you will have a "Guest" library, which looks something like this:

![qiqqa-guest.png](/assets/img/2021-12-04-a-research-rubric/qiqqa-guest.png)

<p align = "center"><b>Qiqqa</b></p>

In the left column are common tags and the number of papers with those tags. You can filter by Qiqqa Autotags (tags Qiqqa assigned), author, publication, year, theme (groups of common tags), or publication type such as article, book, or proceedings.

A search box in the upper right corner lets you find articles containing specific words or phrases. Here, I've searched for "pi-rating" and Qiqqa found seven papers with that term, sorting them by relevancy. Click on the search score block (yellow to red with percentages to the left of the title) to see page numbers where the term occurs in the paper.

![qiqqa-search-score.png](/assets/img/2021-12-04-a-research-rubric/qiqqa-search-score.png)

<p align = "center"><b>Qiqqa Search Score</b></p>

You can highlight a reference, right-click and search the web for the paper using the built-in Qiqqa browser.

![qiqqa-browser.png](/assets/img/2021-12-04-a-research-rubric/qiqqa-browser.png)

<p align = "center"><b>Qiqqa Browser</b></p>

As you read the paper, you can highlight important sections,

![qiqqa-highlighting.png](/assets/img/2021-12-04-a-research-rubric/qiqqa-highlighting.png)

<p align = "center"><b>Qiqqa Highlighting</b></p>

and add annotations and tags.

![qiqqa-annotation.png](/assets/img/2021-12-04-a-research-rubric/qiqqa-annotation.png)

<p align = "center"><b>Qiqqa Annotation and Tags</b></p>

Annotations become searchable so you don't need to remember where they are in the paper. Qiqqa has many more features described in the online [manual](http://www.qiqqa.com/Content/Client/The%20Qiqqa%20Manual.pdf).

Hopefully, you'll be able to use some of these tools to improve your research skills. They won't make you an [expert](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect), but at least you'll be better informed.

---

## A More Complete List of Tools

Below is a more complete list of software tools available for research. You may find some to be better than the ones described above for your work.

[Navigating the literature review](https://musingsaboutlibrarianship.blogspot.com/2020/12/navigating-literature-review-metaphors.html?q=google+search): Aaron Tay summarizes literature review tools.

[Top new tools for researchers worth looking at](https://aarontay.medium.com/top-new-tools-for-researchers-worth-looking-at-9d7d494761b0): Search tools, statistics software, data cleaning and machine learning.

### Top Level Searches

[Top Ten Search Tips](https://library.northeastern.edu/get-help/research-tutorials/effective-database-searches/top-ten-search-tips)

- [2Dsearch](https://www.2dsearch.com/) Instead of entering Boolean strings into one-dimensional search boxes, queries are formulated by manipulating objects on a two-dimensional canvas.
- [Academia.edu](https://www.academia.edu/) Download 28 million PDFs for free
- [arXiv](https://arxiv.org/) a free distribution service and an open-access archive for 1,978,106 scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and systems science, and economics.
- [BASE](https://www.base-search.net/) is one of the world's most voluminous search engines especially for academic web resources.
- [Digital Library of the Commons](https://dlc.dlib.indiana.edu/dlc/) is a gateway to the international literature on the commons.
- [DOAJ](https://doaj.org/) Independent database contains over 16,500 peer-reviewed open access journals covering all areas of science, technology, medicine, social sciences, arts and humanities.
- [EndNote Click](https://kopernio.com/) Save time accessing full-text PDFs with the free EndNote Click browser plugin.
- [ERIC](https://eric.ed.gov/) allows you to search by topic for material related to the field of education.
- [Google search](https://www.google.com/) Free search engine provided by Google
- [Google scholar](https://scholar.google.com/) indexes the full text or [metadata](https://en.wikipedia.org/wiki/Metadata) of [scholarly literature](https://en.wikipedia.org/wiki/Academic_publishing) across an array of publishing formats and disciplines.
- [OpenDOAR](https://v2.sherpa.ac.uk/opendoar/) is the quality-assured, global Directory of Open Access Repositories.
- [PLOS](https://plos.org/) a nonprofit, Open Access publisher empowering researchers to accelerate progress in science and medicine by leading a transformation in research communication.
- [Read by QXMD](https://read.qxmd.com/) lets you create a personalised feed that is updated daily with new papers on research topics or from journals of your choice.
- [refseek](https://www.refseek.com/) locates relevant academic search results from web pages, books, encyclopedias, and journals.
- [ScienceOpen](https://www.scienceopen.com/) provides researchers with a wide range of tools to support their research – all for free.
- [scinapse](https://www.scinapse.io/) Find papers from over 170m papers in major STEM journals.

### Literature Mapping

[List of Innovative Literature mapping tools](https://musingsaboutlibrarianship.blogspot.com/p/list-of-innovative-literature-mapping.html)

- [Bibnet Google Scholar Scraper](https://github.com/jimmytidey/bibnet-google-scholar-scraper) records top 10 papers or book from GS search, Using Google Scholar’s ‘search within citations’ it checks to see if any of the authors recorded to the database have cited any of the publications.
- [Citation Gecko](https://www.citationgecko.com/) finds relevant papers from seed papers
- [CiteSpace](http://cluster.cis.drexel.edu/~cchen/citespace/) is an application for visualizing and analyzing trends and patterns in scientific literature.
- [Connected Papers](https://www.connectedpapers.com/) is a simple one shot visualization tool using one seed paper.
- [Inciteful](https://inciteful.xyz/) uses multiple seed papers in an interative process.
- [Litmaps](https://www.litmaps.co/) lets you visualize research navigation, citation network search, and team synchronization.
- [Local Citation Network](https://timwoelfle.github.io/Local-Citation-Network/) helps scientists with their literature review using metadata from [Microsoft Academic](https://academic.microsoft.com), [Crossref](https://crossref.org) and [OpenCitations](https://opencitations.net)
- [Open Knowledge Maps](https://openknowledgemaps.org/) is the world's largest visual search engine for scientific knowledge.
- [PaperGraph](https://papergraph.dbz.dev/?search=Mastering+Atari%2C+Go%2C+Chess+and+Shogi+by+Planning) generates graph data from the [Semantic Scholar Open Research Corpus](http://s2-public-api-prod.us-west-2.elasticbeanstalk.com/corpus/download/) using the binaries in [dennybritz/papergraph](https://github.com/dennybritz/papergraph/) .
- [ResearchRabbit](https://www.researchrabbit.ai/) is a citation network graph (network and timeline), co-authorship graph (requires institutional email).
- [VOSviewer](https://www.vosviewer.com/) is a software tool for constructing and visualizing bibliometric networks

### Secondary (Deeper) Searches

- [CoCites](https://www.cocites.com/) uses keywords to find relevant articles
- [CrossRef](https://www.crossref.org/) makes research outputs easy to find, cite, link, assess, and reuse.
- [dblp](https://dblp.org/) provides open bibliographic information on major computer science journals and proceedings.
- [Dimensions](https://www.dimensions.ai/) is the world’s largest linked research information dataset.
- [EThOS](https://ethos.bl.uk/Home.do) searches over 500,000 doctoral theses.
- [iris.ai](https://iris.ai/) is a world-leading AI engine for scientific text understanding.
- [JURN](http://www.jurn.org/#gsc.tab=0) searches millions of free academic articles, chapters and theses.
- [OpenAlex](https://openalex.org/) open, comprehensive catalog of scholarly papers, authors, institutions a drop-in replacement for Microsoft Academic Graph (Dec 2021).
- [OpenCitations](https://opencitations.net/) is an independent not-for-profit infrastructure organization for open scholarship dedicated to the publication of open bibliographic and citation data by the use of Semantic Web technologies
- [OurResearch](https://ourresearch.org/) is a collection of free, open-source tools are used by millions every day, in universities, businessess, and libraries worldwide, to uncover, connect, and analyze research products.
- [Paperity](https://paperity.org/) gives readers easy and unconstrained access to thousands of journals from hundreds of disciplines, in one central location.
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/) comprises more than 33 million citations for biomedical literature from MEDLINE, life science journals, and online books.
- [Semantic Scholar](https://www.semanticscholar.org/) is a free, AI-powered research tool for scientific literature.
- [The Lens](https://www.lens.org/) is an online patent and scholarly literature search facility.
- [wizdom.ai](https://www.wizdom.ai/) Gain powerful insights about the past, present and future with the most comprehensive knowledge graph covering the entire universe of research.
- [Zenodo](https://zenodo.org/) is a general-purpose open-access repository developed under the European [OpenAIRE](https://www.openaire.eu/) program and operated by CERN It allows researchers to deposit research papers, data sets, research software, reports, and any other research related digital artefacts.
- [101 Free Online Journal and Research Databases for Academics](https://www.scribendi.com/whitepapers/101_Free_Online_Journal_and_Research_Databases_for_Academics_Free_Resource.pdf)

### Retreival

[Seven ways to download papers](https://www.bestsevenreviews.com/7-ways-download-research-papers/)

- [CORE](https://core.ac.uk/) is an aggregator of open access research published in research repositories and journals worldwide.
- [Directory of Open Access Journals](https://doaj.org/) is a community-curated website that lists high quality, peer-reviewed open access journals.
- [FreeFullPDF](https://www.freefullpdf.com/#gsc.tab=0) The aim of FreeFullPDF.com is to increase the visibility and ease of use of open access scientific journals, theses, posters and patents.
- [Library Genesis](http://libgen.io/) is a massive database of over 2.7 million books and 58 million science magazine files.
- [Open Access Button](https://openaccessbutton.org/) provides public repositories of research papers to make publicly funded research accessible to all.
- [ScienceOpen](https://www.scienceopen.com/) is a professional networking platform for scholars that offers access to over 40 million research papers in all areas of science.

### Summarizers

[Academic related browser extensions](https://musingsaboutlibrarianship.blogspot.com/2019/09/this-is-updated-version-of-this-medium.html?q=summarizer)

- [Crammer](https://crammer.app/) Provides text analytics to the webpage using artificial intelligence to quickly find what you are looking for and save time
- [esummarizer](http://esummarizer.com/) Automatically summarize any text in a few seconds.
- [IntelliPPT](https://www.intellippt.com/) Summarize articles, text, websites, essays and documents for free.
- [Open Text Summarizer](https://github.com/neopunisher/Open-Text-Summarizer/) OTS will create a short summary or will highlight the main ideas in the text.
- [paper digest](https://www.paper-digest.com/) Artificial Intelligence summarizes academic articles for you.
- [QuillBot](https://quillbot.com/) is a web-based summarizing tool that lets you take any textual content and derive the most important parts of the information.
- [Resoomer](https://resoomer.com/en/) filters through your content by essential factors, key topics, and ideas for faster interpretation of the text.
- [scholarcy](https://www.scholarcy.com/) is the online article summarizer tool, reads your research articles, reports and book chapters in seconds and breaks them down into bite-sized sections – so you can quickly assess how important any document is to your work.
- [SpinBot](https://spinbot.com/) is a text rewriter, article spinner, and content creating tool.
- [summarizebot](https://www.summarizebot.com/) summarizes any information and sharable documents, images, audio files
- [Summary Generator](https://summarygenerator.com/) is an online text summarizer based on open source text summarization software.
- [synopsis](https://synopsis.saasify.sh/) AI-powered content extraction and summarization for webpages and articles.

### Citations

- [CiteAs](https://citeas.org/) is a convenient tool to obtain the correct citation for any publication, preprint, software or dataset in one click.
- [citationchaser](https://estech.shinyapps.io/citationchaser/) An input article list can be used to return a list of all referenced records, and/or all citing records in the Lens.org database
- [scite](https://addons.mozilla.org/en-US/firefox/addon/scite/) displays the context of the citation and describes whether the article provides supporting or contrasting evidence.

### Organizers

- [BibSonomy](https://www.bibsonomy.org/) helps you to manage your publications and bookmarks, to collaborate with your colleagues and to find new interesting material for your research.
- [Docear](https://docear.org/) helps you organizing, creating, and discovering academic literature.
- [JabRef](https://www.jabref.org/) Easily retrieve and link full-text articles.
- [Mendeley](https://www.mendeley.com/reference-management/reference-manager) manages and shares academic knowledge.
- [Obsidian](https://obsidian.md/) is a knowledge base on top of a local folder of plain text Markdown files.
- [OpenPaper.work](https://openpaper.work/en/) sorts all your papers by turning them into searchable documents.
- [Polar](https://getpolarized.io/) is an integrated reading environment to build your knowledge base.
- [Qiqqa](http://www.qiqqa.com/) combines PDF reference management tools, a citation manager, and a mind map brainstorming tool.
- [Zotero](https://www.zotero.org/) is a free, easy-to-use tool to help you collect, organize, cite, and share research.

### Data Sources

- [Aminer](https://www.aminer.org/) is a free online service used to index, search, and mine big scientific data.
- [CIA World Factbook](https://www.cia.gov/the-world-factbook/) provides basic intelligence on the history, people, government, economy, energy, geography, environment, communications, transportation, military, terrorism, and transnational issues for 266 world entities.
- [Common Crawl](https://commoncrawl.org/) is an open repository of web crawl data that can be accessed and analyzed by anyone.
- [Our World in Data](https://ourworldindata.org/) provides research and data to make progress against the world’s largest problems.
- [Seshat](http://seshatdatabank.info/) gathers data into a single, large database that can be used to test scientific hypotheses.

### Paywalls

[Improving access and delivery of academic content](https://musingsaboutlibrarianship.blogspot.com/2020/08/improving-access-and-delivery-of.html)

[7 Ways How to Download Research Papers for Free](https://www.bestsevenreviews.com/7-ways-download-research-papers/)

- [Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome) is a web browser extension to help bypass paywalls for selected sites.
- [Library Genesis](http://libgen.li/) is a database of over 2.7 million books and 58 million science magazine files.
- [Open Access Button](https://openaccessbutton.org/) links to free, legal research articles delivered instantly or automatically requested from authors.
- [Sci-Hub](http://sci-hub.se/) provides access to academic papers and articles using educational institution access and its own cache of downloaded papers and articles. Illegal in some countries, use a [VPN](https://alternativeto.net/software/nordvpn/?license=free), [TOR](https://www.torproject.org/download/), or [Whonix](https://www.whonix.org/) to conceal your location if you still want to use Sci-Hub.
- [Unpaywall](https://unpaywall.org/) is a massive open database of more than 21 million free scholarly articles.

------

#### Image credits

Hero: [VOSviewer](https://www.vosviewer.com/).





