# How to use:

## Install Stuff

First install:


- Hugo v0.134.3 - https://github.com/gohugoio/hugo/releases/download/v0.134.3/hugo_0.134.3_windows-amd64.zip
- Golang
- A Nice Text Editor for Code (vscode)


Then:


- Open a terminal window at the root of your repository. (included in vscode)


## Run some commands

Tell git to fetch the theme submodule and then run the hugo server.

```
git clone git@github.com:th3raid0r/astrozane-start.git

cd astrozane-start

git submodule init 

git submodule update

hugo server
```

You can now browse to `http://localhost:1313` and see the template without any data in it. 

