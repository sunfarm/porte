# Porte

Porte is a simple portfolio site built with [React](https://reactjs.org/) and [Bulma](https://bulma.io/documentation/) which aims to allow meaningful customization simply by updating a few files:
- `info.json`
- `background.jpg`
- `favicon.png`
- `logo.png`
- `texture.svg`

1. Add your info.
Update the file `./src/info.json` with your information. You might like using a tool I created called [DataDoer](https://datadoer.app/) to create your own json file.
2. Update images.
Replace images with your own files. I recommend using [Figma](https://www.figma.com) for the favicon and logo.
- `background.jpg`
- `favicon.png`
- `logo.png`
3. Change background texture and styles.
You can replace `texture.svg` with your own custom texture our use one of Steve Schoger's beautiful patterns available at [Hero Patterns](https://www.heropatterns.com/). Make sure you 'Download unstyled SVG'.
5. Deploy!
I recommend using [Netlify](https://www.netlify.com/). It's dead simple, has incredible features and you can get started for free!
6. GA tracking
You can add a GA tracking id as an environment variable for some basic Google Analytics. I am a total GA noob so I'm not even sure this works :(
`REACT_APP_GA_ID`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Credits

Photo by Juhasz Imre from Pexels

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project uses free icons from Fontawesome! which are licensed under the CC BY 4.0 license. See [their free license](https://fontawesome.com/license/free) page for more info. Attribution is included in the svg files themselves.


# How We Got Here
How this project was created

```
npx create-react-app portfolio
yarn add react-ga
yarn add node-sass
yarn add bulma

npm i --save @fortawesome/fontawesome-svg-core \
  npm i --save @fortawesome/free-solid-svg-icons \
  npm i --save @fortawesome/react-fontawesome
```
renamed portfolio to porte