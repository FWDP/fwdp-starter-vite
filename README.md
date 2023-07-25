# VanillaJS + Vite(est)
![image](https://github.com/directormac/vanillawithbatteries/assets/5866196/d6c4b661-2cbd-44e7-841d-987c476d01cb)

## A template for the late night sessions with the people from FWDP

### How to use

### Clone the repository

```bash
git clone https://github.com/directormac/vanillawithbatteries
```
### Install Dependencies

```bash
# Go inside the Directory
cd vanillawithbatteries
# Reinitialize git repository
# Remove it using git bash
rm -rf .git && git init
# Remove using powershell
Remove-Item --path .git -Recurse -Force && git init
# Install dependencies
npm install
```

### Running Dev Server

```bash
npm run dev
```
### Running Tests

```bash 
npm run test
```

### Testing for production

```bash
npm run build
npm run preview
```

### This has a workflow included to deploy to github pages

First we need to go to the settings of your reposity and Pages Enable it using GitHub Actions

![image](https://github.com/directormac/vanillawithbatteries/assets/5866196/bbe43a4d-f2c2-4be4-8706-3634ae1fb7d6)


By default this will be hosted as `username.github.io/vanillawithbatteries` but you can change it to `username.github.io` 
by changing the `BASE` property in `vite.config.js` to `/` if you are hosting it with `username.github.io`
for sideprojects you can use `username.github.io/projectname` and change the `BASE` property in `vite.config.js` to `/projectname/`
`projectname` is the name of your repository



