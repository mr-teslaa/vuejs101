# Journey of learning VUE.JS version 3.0

## I created different branches for different lesson

_Tutorial 1: https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1_

## Lesson 2(Modal Project) -TheCodeNinja

### Goals of this lesson

-   Vue CLI <br>

-   Project stucture <br>

    -   `node_modules`: any libraries or dependencies we use for this project. In ourcase the vue library and the things vue depends on is stored here. don't think much about it. leave it as it is.

    -   `public`: in here index.html file is the single page. that represent the single page application like vue. in this file there's nothing inside the body. in `<div id="app">.....</div>` vuejs will dynamicly inject the body.

    -   `src`: in here will have all of our source code. all of our different components, js, css, templates will be here.

    In `src/main.js` file, the first line is `import { createApp } from 'vue'` which means, we don't need to create any vue funtion like before. this line will go to `node_modules` folder and look for `createApp` function in vue dependencies and create a vue application for us.

    In second line of `src/main.js` the second line `import App from './App.vue'` means it will go to App.vue file (App.vue is known as components in vue). `import App` here `App` is the root component which mounted in `#app` location. That's why the third line difines like this `createApp(App).mount('#app')`

-   App.vue <br>
    In `App.vue` we have three things. <br>

    -   `<template>...</template>`
    -   `<sripts>.....</scripts>`
    -   `<style>...<style>`

    Every vue components (`.vue` file) have these 3 thing

-   other files <br>

    -   `.gitignore`: this file helps you to ignore any file or folder if you want to when you put your codes in github.
    -   `babel.config.js`: this file have configuration file so that we can use some javascript's features.
    -   in `package.json` file's **6th** line we have `"serve": "vue-cli-service serve"`. Which means if we type `serve` along with npm it will run the local deveopment server to our browser. in our case `npm run serve`. if we rename the **6th** line with anything else i.e. `demo` then the command will be `npm run demo`. and also some packages file, for now you don't need to touch or edit them. they are just some files that helps our application up and running, that's all.

-   Template refs <br>

    -   If we want to grab any element in vue we need to use `refs` aka `tempate refs`. Like `document.querySelector()` or `getElementById()` it will select any element and then you will able to modify/manipulate that element.
        **NB: `refs` name can be anything, it don't have any fix name**

-   Multiple Components

    -   for simplicity we will separate differenct section in different `.vue` file. because it will be a mess if we code for a large scale website. that's why the multiple components comes in.  
        i.e we can have different .vue component like this: `footer.vue`, `article.vue`, `content.vue` and so on.

    -   after creating separate `.vue` components(in this case it's `Modal.vue`) you need to import it where you want to use that. In our case we want to use that in our `App.vue` file. Basic sytex is `import {a custom name} from '/components/filename'`.in this case we put a line like this,
        **NB: Whatever we call the component name after `import` we need to use the exact same name to write that vue tag**

        ```
        import Modal from "./components/Modal.vue"
        ```

        we should call this `Modal.vue` file like this. `<Modal />`

# modal-project

for running npm server

```
npm run serve
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
