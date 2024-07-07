---
title: The Academic Browser
subtitle: Your Librarian in the Cloud
author: John Peach
lede:
hero:
  url: /assets/img/2022-07-13-academic-browser/library-francesca-grima-ln_slYqaMiI-unsplash.jpg
  alt:
tags: [math]
keywords: []
socialImg: /assets/img/2022-07-13-academic-browser/library-francesca-grima-ln_slYqaMiI-unsplash.jpg
software: ['zotero', 'mendeley', 'qiqqa', 'docear', 'r', 'rstudio', 'obsidian', 'zettlr', 'lyx', 'ghostwriter', 'typora']
---

In an earlier post, [*A Research Rubric*](https://wildpeaches.xyz/blog/a-research-rubric/), we showed how to do online journal article searches, based on Aaron Tay's [blog](https://musingsaboutlibrarianship.blogspot.com/). This post extends the basic idea and provides a structured method for performing a search.

Library image from [Francesca Grima](https://unsplash.com/photos/building-interior-photography-ln_slYqaMiI), Unsplash Sept. 30, 2019.

------

## The search process

The first step is to select and install a reference manager ([Zotero](https://www.zotero.org/), [Mendeley](https://www.mendeley.com/reference-management/reference-manager), [Qiqqa](https://jimmejardine.github.io/qiqqa-open-source-website/), [Docear](https://docear.org/)). 

The search begins with understanding the terms used by researchers in the field, followed by a high-level look at review articles. Next, do a more focused search for articles related to the topic you're interested in, and find other articles cited by, or referencing these papers. 

Download or bookmark interesting articles, read, summarize, and make sure you understand the relevant papers.

An outline of the [process](https://medium.com/a-academic-librarians-thoughts-on-open-access/4-ways-to-find-review-papers-systematic-reviews-meta-analysis-and-other-rich-sources-of-82898aebb6e7) is:

- Search for terms related to the topic using a dictionary or thesaurus.
- Read online encyclopedias to understand the basic ideas. Linked references can be a good source for more information.
- Do a broad search for relevant terms. A commonly applied word or phrase may not be generally used by researchers.
- Look for papers describing the current state of the art in the field. These meta or review articles reference many of the best papers written about a particular topic.
- Use the references in the review articles to find other papers. 
- From the targeted papers, follow citations forward and backward to expand your understanding.
- Read, understand, and summarize the best of the papers you've found. Ideally, you should read a paper once, and refer to your notes about it later if you want to remember the main topics.
- If you want to publish, you'll need to reference the articles you've read, and a good reference manager is critical to this step. Publishing could be notes to yourself, writing your blog, or submitting to a peer-reviewed journal.

## Organizing the tools

I wanted a way to organize the various online tools useful for researchers. My first thought was to do what I'm about to show you, but then I started thinking about making some fancy GUI, maybe in [Qt](https://www.qt.io/), and making a dedicated browser for the purpose. 

The advantage of a dedicated browser is that I wouldn't get distracted by checking the latest news on CNN and then feeling the need to find a video of [monkeys jumping into a pool](https://youtu.be/cpXwMGEB538) to make up for the bad karma.

Jan and I talked about this concept, possibly with buttons to automatically open a new tab in the browser linked to the appropriate tool. Jan was rightfully dubious about all of this, pointing out that everyone dives right into building the fanciest widget without fully considering the purpose.

So, back to my first thought, why not just organize links to the online tools in [bookmarks](https://gist.github.com/XerxesZorgon/75264cf3362282d1d434d6453a09fceb)? Browsers are already nice GUIs, everyone understands bookmarks, and they're very flexible. You can add or delete bookmarks, or drag them around inside the bookmark folder to put them in any order you like.

I started by making a dedicated folder called *Academic Journal Search*. Inside that folder, I created new folders for each step of the search process, plus a few extra folders for links to databases, browser extensions, reference managers, and miscellaneous others. 

![bookmarks-folders](/assets/img/2022-07-13-academic-browser/bookmarks-folders.png)

Another advantage to this method of organizing bookmarks is that you can put the same bookmark into more than one folder. For instance, [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,34&as_rr=1) appears in "Meta search" and "Journal articles". Aaron Tay wrote about a new feature in [Google Scholar](https://musingsaboutlibrarianship.blogspot.com/2022/01/google-scholar-adds-review-articles.html) that searches for review articles. Type in your search term and hit *Enter* to request review articles.

![google-scholar-review-articles](/assets/img/2022-07-13-academic-browser/google-scholar-review-articles.png)

Other literature databases have similar tools to do [meta searches](https://medium.com/a-academic-librarians-thoughts-on-open-access/4-ways-to-find-review-papers-systematic-reviews-meta-analysis-and-other-rich-sources-of-82898aebb6e7), or you can add "review", "meta-analysis", or "systematic reviews" to the search term. You might decide to combine the "Meta search" and "Journal articles" folders into a single folder and use one search engine for each type of search.

## A look inside

### Dictionaries and Thesauri

To learn about a new topic, you need to understand the definitions and have synonyms handy. The top links in these folders are to Merriam-Webster, but you might have other favorites.

### Encyclopedias

The first link is to Wikipedia, but Scholarpedia might be better if your topic is covered. Scholarpedia is written by subject experts and the articles are peer-reviewed. The scope is mostly physics and math, but if that's your interest, this is a good resource. Another interesting resource is [Leonardo](https://leonardo.wpopera.cloud/), an AI system designed to answer queries. Be aware that it's still in beta, and may not give completely accurate answers.

![leonardo](/assets/img/2022-07-13-academic-browser/leonardo.png)

### Term search

Search for basic terms in Google, Bing, or one of several other search engines.

### Meta search

These tools provide much greater capabilities than a simple Google search. [2DSearch](https://www.2dsearch.com/) lets you graphically build a query, and suggests synonyms. Use Boolean operators to combine terms, and select the literature database to search for papers about your topic.

![2Dsearch](/assets/img/2022-07-13-academic-browser/2Dsearch.png)

[Inciteful](https://inciteful.xyz/) discovers papers linked to a given article through references, and the *Literature Connector* tool finds the citation links from one paper to another.

The [litserachr](https://elizagrames.github.io/litsearchr/) package for [R](https://www.rstudio.com/) lets you apply advanced search techniques programmatically. It's also available [online](https://elizagrames.shinyapps.io/litsearchr/) with slightly reduced functionality.

### Journal articles

In the Journal articles folder, you'll find search engines specifically designed to look for papers of interest. [Google Scholar](https://scholar.google.com/) is a good start, but [Semantic Scholar](https://www.semanticscholar.org/), [Dimensions](https://app.dimensions.ai/discover/publication), and [BASE](https://www.base-search.net/) (Bielefeld Academic Search Engine) are other sources linking to millions of published papers.

 [Science.gov](https://www.science.gov/) searches federally funded science, and [ERIC](https://eric.ed.gov/) looks for education-related research. [eThOS](https://ethos.bl.uk/Home.do;jsessionid=696F598F7C91ED581EEBC06949B95114) (e-theses online service) is a website provided by [The British Library](https://www.bl.uk/#) where you can search for UK doctoral theses, giving free full access.

The [Zenodo](https://zenodo.org/) search engine and database let researchers upload papers, software, and data. Papers on any subject are accepted so long as they abide by  [Open Science](https://en.wikipedia.org/wiki/Open_science) requirements.

### Citation mapping

[Connected Papers](https://www.connectedpapers.com/) generates a visual representation of papers similar to another article. You can find derivative work, and build a bibliography from the connections.

![connected-papers](/assets/img/2022-07-13-academic-browser/connected-papers.png)

[Citation Gecko](https://www.citationgecko.com/) begins searching from a few relevant papers. It suggests others that might be useful, and with these "seed" papers, Citation Gecko builds a tree of connections.

![citation-gecko-recommended-papers](/assets/img/2022-07-13-academic-browser/citation-gecko-recommended-papers.png)

[VOSviewer](https://www.vosviewer.com/) constructs bibliometric networks of journals, researchers, institutions, and publications based on [Open Alex](https://openalex.org/), [Web of Science](https://mjl.clarivate.com/home?PC=K), [Scopus](https://id.elsevier.com/as/authorization.oauth2?platSite=SC%2Fscopus&ui_locales=en-US&scope=openid+profile+email+els_auth_info+els_analytics_info+urn%3Acom%3Aelsevier%3Aidp%3Apolicy%3Aproduct%3Aindv_identity&response_type=code&redirect_uri=https%3A%2F%2Fwww.scopus.com%2Fauthredirect.uri%3FtxGid%3De0d84ab3213e7a8d6947f9fa89a5ee80&state=forceLogin%7CtxId%3D11C9E01A4E182104F2981311D3CD7FE1.i-028e55ad00740fecc%3A3&authType=SINGLE_SIGN_IN&prompt=login&client_id=SCOPUS), [Dimensions](https://app.dimensions.ai/discover/publication), [Lens](https://www.lens.org/), and [PubMed](https://pubmed.ncbi.nlm.nih.gov/).

### Summarizers

Summarizers aren't a substitute for reading the paper but can be a starting point for finding important points made in the article. Many require a subscription, but [Resoomer](https://resoomer.com/en/), [SpinBot](https://spinbot.com/), [Summarizer](https://www.summarizer.org/), [Sassbook AI Text Summarizer](https://sassbook.com/ai-summarizer), and the [Quillbot Paraphrasing Tool](https://quillbot.com/) are free (sometimes with reduced capability). [Scholarcy](https://www.scholarcy.com/) is a paid service but has a free [extension](https://www.scholarcy.com/pricing/) for Chrome and Edge browsers. 

The [*Summarize the Internet*](https://addons.mozilla.org/en-US/firefox/addon/summarizer/) and [*TLDR This - Auto text summary*](https://addons.mozilla.org/en-US/firefox/addon/tldr-this-auto-text-summary/) summarizer extensions for Firefox are listed in the *Extensions* folder.

### Download tools

You can often download a paper directly from the search engine found in the *Journal articles* folder, but if you get stuck, try the [Unpaywall](https://unpaywall.org/), [Open Access Button](https://openaccessbutton.org/), or [CORE Discovery](https://core.ac.uk/services/discovery) extensions. [Library Genesis](http://libgen.rs/) is a shadow repository for undigitized or paywalled articles but has been accused by Elsevier of internet piracy. [Sci-hub](https://sci-hub.se/) is a similar repository where you're likely to find any article you want.

### Note taking

If you want to take notes on the papers you're reading, [Obsidian](https://obsidian.md/) or [Zettlr](https://zettlr.com/) are excellent alternatives to simple text editors. They allow both internal and external links, use [LaTeX](https://www.latex-project.org/) in [Markdown](https://www.markdownguide.org/) for writing formulas, and can include images.

### Publishing

Depending on your intended audience, you could try Obsidian or Zettlr. [LyX](https://www.lyx.org/) is a good editor if your document contains LaTeX, but to get to full control you might need a dedicated LaTeX editor like [TeXStudio](https://www.texstudio.org/) or [TeXnicCenter](https://www.texniccenter.org/). 

For simple Markdown editing, try [ghostwriter](https://ghostwriter.kde.org/) or [typora](https://typora.io/). Typora isn't free but is only $14.99 for installation on three computers.



## Sidebars and extensions

Firefox lets you open (or hide) the bookmarks view in a sidebar by typing *Ctrl-b*. Chrome doesn't have a sidebar built-in, but you can add the [Bookmarks Sidebar](https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh?hl=en-US) extension. Showing bookmarks in the sidebar makes an organized search convenient.

You will probably want several extensions which can clutter the toolbar if you've installed a lot of them. In Firefox, there's an [overflow menu](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars) where you can drag and drop extension icons if you don't need to access them routinely. They're still easily accessible. Just click on the `>>` at the end of the toolbar to open a drop-down menu of the extensions in the overflow area. 

![overflow-menu](/assets/img/2022-07-13-academic-browser/overflow-menu.png)

Some [extensions](https://musingsaboutlibrarianship.blogspot.com/2019/07/a-comparison-of-6-access-broker-browser.html), like [Unpaywall](https://unpaywall.org/), [Open Access](https://openaccessbutton.org/), [Core Discovery](https://addons.mozilla.org/en-US/firefox/addon/core-discovery/), and [Bypass Paywalls](https://addons.mozilla.org/en-US/firefox/addon/bypass-paywalls-clean-d/) could go into the overflow area and be accessed as needed. The [Google Scholar button](https://addons.mozilla.org/en-US/firefox/addon/google-scholar-button/) or [Zotero connector](https://www.zotero.org/download/connectors) might be something you want to have more immediately available. 

## Loading the bookmarks

To get you started, I've created a [bookmarks HTML file](https://gist.github.com/XerxesZorgon/75264cf3362282d1d434d6453a09fceb) containing the folders shown above, populated with helpful links. You can download the file and import it into your favorite browser. 

If you use Chrome, click on the three vertical dots in the upper right corner just below the 'X' that closes the window. This will open a menu, and you should select "Bookmarks". Now, select "Import bookmarks and settings ..." and in the drop-down box, choose "Bookmarks HTML file". 

Click "Import", choose the file you downloaded, and open it. After a few seconds, a message box will open showing that you've successfully imported the bookmarks.

![import-bookmarks-to-chrome](/assets/img/2022-07-13-academic-browser/import-bookmarks-to-chrome.png)

Open your bookmark manager and scroll to the bottom to find a folder called "Imported". Below that, you'll see the folder "Academic Journal Search". Drag that folder to a more convenient location, and then delete the "Imported" folder. 

You will still need to add any extensions you like from the links in the "Browser extensions" folder.

Your journal search tools should now be ready to help you discover the world of online academic literature.
