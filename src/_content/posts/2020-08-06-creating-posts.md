---
title: Creating posts 
author: Jan De Wilde
date: 2020-08-06
---

Firstly, make sure you have your [local development environment](../local-development/) running and the website is open on `localhost`  in your browser.

Now, open the repository folder in your preferred plain-text editor/IDE and create a new file in `_src/content/posts`  employing [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) and with the  `.md` extension. 

## Intro to Markdown
The `.md` file is a plain text file that will get parsed into HTML at build time. Markdown is not a complete substitute for HTML, it’s a writing syntax, though HTML is valid Markdown.

There are different flavors (read: extensions) of Markdown. I’m using the *markdown-it* parser, with a number of extensions, and of course, there are more that could be added. E.g. table of content, footnotes, definition lists, … Most notably, I’m currently using a KaTeX extension. 

I suggest looking at the[hello-world.md](https://raw.githubusercontent.com/JanDW/wildpeaches/master/src/_content/posts/hello-world.md) file  in the `posts`  directory you should be in. 

You might have been using MD already, but if not, [markdownguide.org](https://www.markdownguide.org/basic-syntax/)  and the [original documentation](https://daringfireball.net/projects/markdown/) from John Gruber should get you up to speed quickly. I’d be happy to answer any questions too, of course.

## Metadata
Eleventy provides a number of mechanisms to provide metadata, and one of then is to provide YAML data at the top of your file. It’s delimited by a series of three hyphens both at the top and bottom. Currently, you should provide

```md
---
title: Hello World
author: Jan De Wilde
permalink: /hello-world/
date: 2020-08-06
---
```

No need to duplicate the title (main heading) or author name in the markdown. It’ll get rendered based off the YAML.

## Browsersync
Browsersync watches the file system and upon each save of your Markdown, the browser will update and reflect the latest changes.

## Checking into git
```bash
git add -A && git commit -m "Commit message"
```

## Deploying
Deploying is extremely easy because a netlify build triggers when you push the changes to the master branch on GitHub. That’s it. Assuming your changes are on `master` locally, just 
```bash
git push
```

***
⚠️ The site is on Netlify’s free tier, which is limited in the number of build minutes available each month. If you plan to push your changes to GitHub to keep them safe **without the intent of deploying** you should work in a branch, other than master, that you push to the remote, in order not to trigger netlify. Here are the steps for that workflow:

Before I start, it’s worth pointing out that if you don’t feel like dealing with branches, I can make the deployment a more manual process instead.

You’re on the master branch and plan to start writing. This step will create the branch and check it out in one step so it is the active branch.
```bash
git checkout -b name-for-writing-branch
```

Commit your changes as usual. Now, to push your changes to the remote, you have to create the branch on the remote, and set up the local branch to track the remote one
```bash
git push -u origin name-for-writing-branch
```

Next time, with tracking set up, you can now just use
```bash
git push
```

Once your blog post is finished, you could merge it into master with a pull request on GitHub. 
