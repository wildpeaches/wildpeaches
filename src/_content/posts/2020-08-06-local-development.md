---
title: Local development configuration
author: Jan De Wilde
permalink: /local-development/
---

## Installing git and nodeJS
To run your local instance you need to have [git](https://git-scm.com/download/) and [nodeJS](https://nodejs.org/en/download/)
installed. Pick your poison—I prefer to install them via the [brew](https://brew.sh/) package manager for MacOS, so that’s the documented approach.

This part is from memory, so 🤞.

First git (installed by default on Mac, but older version)
```bash
brew update && brew install git
```

Next, the longterm support version (lts) of nodeJS via node version manager (nvm)
```bash
brew update && brew install nvm && nvm use --lts
```

To verify if nodeJS is running
```bash
node -v # should return version number
```

Make sure you’ve been added to the repository as a contributor, next, it’s time to clone.

## Cloning the repository
Use your favorite client, or if you opt for the CLI, make sure you’re in the parent directory and clone:

Either over SSH … 
```bash
git clone git@github.com:JanDW/wildpeaches.git
```

… or over HTTPS
```bash
git clone https://github.com/JanDW/wildpeaches.git
```

Change into the cloned repo directory and install the dependencies (they are—as is common,—not in the repository, so this is a necessary step)
```bash
cd wildpeaches && npm install
```

If you see some warnings, don’t be too alarmed, as long as you make it through 🤓

## Local development
Among the dependencies is a web server, so you’re all set to spin up the site locally.

```bash
npm run serve
```

Check what’s returned in the terminal, near the end of the output you should see something similar to
```bash
Watching…
[Browsersync] Access URLs:
 ----------------------------------
       Local: http://localhost:8080
    External: http://10.0.1.7:8080
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ----------------------------------
[Browsersync] Serving files from: www
```

Just open `http://localhost:8080` in your browser and you should see the site.



