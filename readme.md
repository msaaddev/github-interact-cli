![github-interact-cli](https://i.imgur.com/m46Grpf.jpg)

<div align="center">
	<h1>⚡️ github-interact-cli<br>
	<img alt="version: 3.3.2" src="https://img.shields.io/badge/version-v3.3.2-green">
	<img alt="license: MIT" src="https://img.shields.io/badge/license-MIT-green">
	</h1>
</div>

`github-interact-cli` lets you use GitHub right inside your terminal.

## 👉 FEATURES

- 📦 Create a new repo
- ♻️ Delete your existing repo
- 🚀 Get all public repos of any GitHub User
- ⚠️ Open issue in any repo.
- ✉️ Get public email of any GitHub user
- ⭐️ Get stargazers of any GitHub repo

## 🎩 INSTALLATION

Install the CLI globally. If you are windows user, run your command prompt/terminal as administrator. If you are macOS user, add `sudo` before the following command.

```
npm i -g github-interact-cli
```

<div align="center">
	<img alt="installation" src="https://i.imgur.com/ClFFvhH.gif">
</div>

## 🏗 SETUP

Type the following in the terminal to run the CLI.

```
github
```

CLI will start running. It will ask you to add a **Personal Access Token** & your **GitHub Username**. If you don't know what Personal Access Token is & how to create one, check this [awesome guide](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) by GitHub.

`！Note:` Be sure to give the token _repo_, _admin:repo_hook_ & _delete repo_ scopes .

<img alt="personal access token configurations" src="https://i.imgur.com/E30KXz8.png">

Once you are done, exit the CLI so that configurations can be saved & used again.

<img alt="done" src="https://i.imgur.com/fVdgewD.png">

`！ Note:` This is one time thing. You will not have to do it again every time you run the CLI.

### 👌 Shortcuts

- New Repo

```
github-new
```

- Delete Repo

```
github-delete
```

- Get All Public Repo

```
github-get
```

- Open Issue

```
github-issue
```

- Get Email

```
github-email
```

- Get Stars

```
github-stars
```

### 📦 Create New Repo

Once you are done with the above setup, write the following in the terminal to run the CLI again.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>1</kbd> to Create a GitHub Repo. Then answer the next questions.

<img alt="done" src="https://i.imgur.com/bRPNnat.png">

Taa daa! The repo has been created. You can [check](https://github.com/msaaddev/git-test-repo) it! 🥂

### ♻️ Delete your Existing Repo

Type the following in the terminal to run the CLI.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>2</kbd> to Create a GitHub Repo. Then enter the name of the repo you want to delete.

<img alt="done" src="https://i.imgur.com/fdpmK2O.png">

Taa daa! The repo has been deleted. 🙌🏻

`! Note:` Be sure to give your personal access token _delete repo_ scope. If you don't know how to edit your current token, follow these steps.

- Open your GitHub account settings
- Select **Developer settings** from the left sidebar
- Click on **Personal access tokens**
- You will see a list of personal access tokens. Select the token you created earlier for github-interact-cli.
- Scroll down the scope list and select **delete_repo**
- Then scroll at the bottom & select **Update token**

<img alt="steps of editing personal access token" src="https://i.imgur.com/2s3lOJV.gif">

### 🚀 Get All Repos

Type the following in the terminal to run the CLI.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>3</kbd> to get all GitHub Public Repos of the any GitHub user. Next enter the username of the GitHub user you want to see the repos of.

<img alt="enter username" src="https://i.imgur.com/K0eW1yR.png">

Press <kbd>Enter</kbd>. And there you have it, folks! 🔥

<img alt="done" src="https://i.imgur.com/kID3qMm.png">

### ⚠️ Open Issue

Type the following in the terminal to run the CLI.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>4</kbd> to Create a GitHub Issue. Then answer the next questions.

<img alt="done" src="https://i.imgur.com/bAp9IK5.png">

[Click here](https://github.com/msaaddev/vidly/issues/9) to check the issue I just created in the screenshot.

### ✉️ Get Public Email

Type the following in the terminal to run the CLI.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>5</kbd> to get public email of the GitHub user. Then enter the username of the GitHub user.

<img alt="done" src="https://i.imgur.com/huGK5nv.png">

### ⭐️Get Stargazers

Type the following in the terminal to run the CLI.

```
github
```

You will get this menu. 🔥

<img alt="menu" src="https://i.imgur.com/ccwTAbs.png">

Enter <kbd>6</kbd> to get total number of stargazers of any GitHub repos. Then answer the next questions.

<img alt="done" src="https://i.imgur.com/TynjyHI.png">

## 🚀 FEATURE REQUEST

Use the [Issues](https://github.com/msaaddev/github-interact-cli/issues) section if you want to request any feature or report an issue.

## 🙌🏻 PROPS

- Header Image by [Iqra Fatima](https://github.com/iqrafatimame)

## 👨🏻‍💻 AUTHOR

🙋🏻‍♂️ Hola! I am Saad, an undergrad Computer Science student. I developed this CLI to automate the repetitive ridiculous amount of things we have to do in GitHub. You can follow me at

- [Twitter](https://twitter.com/msaaddev)
- [Facebook](https://www.facebook.com/msaaddev)
- [Blog](https://msaad.dev)

## 🔑 LICENSE

- MIT
