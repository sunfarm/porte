# Porte

Porte is a simple portfolio site built with [React](https://reactjs.org/) and [Bulma](https://bulma.io/documentation/) which aims to allow meaningful customization simply by updating a few files:
- `src/info.json`
- `public/images/background.jpg`
- `public/favicon.png`
- `public/images/logo.png`
- `src/texture.svg`

1. Add your info.
Update the file `./src/info.json` with your information. You might like using a tool I created called [DataDoer](https://datadoer.app/) to create your own json file.
2. Update images.
Replace images with your own files. I recommend using [Figma](https://www.figma.com) for the favicon and logo. [Here's the Figma file for this site](https://www.figma.com/file/gpcVoQJhrOfwgkaENFv2mAlR/Porte?node-id=0%3A1).
- `public/images/background.jpg`
- `public/favicon.png`
- `public/images/logo.png`
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

`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project uses free icons from Fontawesome! which are licensed under the CC BY 4.0 license. See [their free license](https://fontawesome.com/license/free) page for more info. Attribution is included in the svg files themselves.

## Additional Information

There are some files which you would not want to be overwritten when merging master into another branch if that other branch is a separate site. These files contain the data unique to that site e.g. `src/info.json`. There is a merge attribute defined in `.gitattributes` to always keep the current version of these files. You will need to run the following command to create the required merge driver in your global git configuration in order for it to function:

```
git config --global merge.ours.driver true
```

You can comment out or delete lines in `.gitattributes` if you would like to disable this behavior for a particular branch. You can also add files to the list if you would like to extend this behavior to additional files.

# How We Got Here
How this project was created

```
npx create-react-app portfolio
yarn add react-ga
yarn add bulma

yarn add --save @fortawesome/fontawesome-svg-core \
  yarn add --save @fortawesome/free-solid-svg-icons \
  yarn add --save @fortawesome/react-fontawesome
```
renamed portfolio to porte