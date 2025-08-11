# 📱 Cordova + Framework7 Starter Template
A ready-to-use hybrid mobile app starter using [Cordova](https://cordova.apache.org/) + [Framework7](https://framework7.io/).
Perfect for developers who want fast setup, clean structure, and zero clutter. 🚀

## 📸 Preview
| iOS Look                                                             | Android Look                                                                 |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Demo](https://framework7.io/kitchen-sink/core/?theme=ios) | [Demo](https://framework7.io/kitchen-sink/core/?theme=md) |


## 📂 Requirements
`NodeJS` you can download and install it [here](https://nodejs.org/en/) if you don't have one.

## 📦 Installation
Install `Cordova-cli` using:

    $ npm install -g cordova
Download `Framework7` using:

    $ npm install framework7
## 🚀 Implementation
Create your project using `Cordova-cli` with command:

    $ cordova create [Your Project name]
Open your `Cordova` project folder with command:

    $ cd [Your Project Name]
Go to folder `[Your Username]/node_modules/framework7` and copy files below:

    framework7-bundle.min.css
    framework7-bundle.min.js
    framework7-bundle.min.js.map
Paste `Framework7` files to your project folder with stucture:

    - [Your Project Name]
      - www
        - css
          - framework7-bundle.min.css
        - js
          - framework7-bundle.min.js
          - framework7-bundle.min.js.map
Create `index.js` and `index.css` file to your project folder with structure:

    - [Your Project Name]
      - www
        - css
          - index.css
        - js
          - index.js
Create folder and file `pages/[Your Page Here].html` for your page UI and Function:

    - [Your Project Name]
      - www
        - pages
          - [Your Page Here].html
## ⚙ Initialization
Edit file `www/index.html` and write:

    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <title>[Your Project Name]</title>
        <link rel="stylesheet" href="css/framework7-bundle.min.css?v=[Your Framework7 Bundle Version]">
        <link rel="stylesheet" href="css/index.css?v=[Your Project Version]">
    </head>

    <body>
        <div id="app">
            <div class="view view-main view-init" data-url="/"></div>
        </div>
        <script async src="cordova.js"></script>
        <script defer src="js/index.js?v=[Your Project Version]"></script>
    </body>

    </html>
If you want to change your `Framework7` Theme, you can go [here](https://framework7.io/docs/color-themes#generate-color-theme) and generate your own theme color, then paste it on your `index.css` file. Your `index.css` file will look like:

    :root {
        --f7-theme-color: #020202;
        --f7-theme-color-rgb: 2, 2, 2;
        --f7-theme-color-shade: #000000;
        --f7-theme-color-tint: #161616;
    }
Open your `index.js` and write this code to configure your `Framework7` apps:

    const onDeviceReady = () => {
        console.log(`Running cordova-${cordova.platformId}@${cordova.version}`)
        
        new Framework7({
            el: `#app`,
            name: [Your Project Name],
            routes: [{
                path: `/`,
                componentUrl: `./pages/[Your Page Here].html`,
            }],
        })
    }
## 📜 License
MIT — free to use, modify, and share.
