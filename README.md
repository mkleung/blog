# Run gatsby site

> npm install

> gatsby develop

Then go to http://localhost:8000/  

# Deploy to github pages

Inside package.json, add inside scripts

"deploy": "gatsby build --prefix-paths && gh-pages -d public"

npm run deploy

# Packages to install

### TailwindCSS
- [Tailwind](https://tailwindcss.com/docs/guides/gatsby)

### Gatsby Image 
(NOTE: use photo.JPG - capitalize the JPG or will not show up on github pages and use
pathPrefix: "/", in gatsby-config.js)

### Font loader
-  npm install gatsby-omni-font-loader react-helmet

### Dark mode
-  npm i gatsby-plugin-dark-mode --legacy-peer-deps
or

### downgrade react

"dependencies": {
   ...
   "react": "16.14.0",
    "react-dom": "16.14.0",
    ...
    }

### Favicon
npm install gatsby-plugin-manifest


### Styled components

npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components

### Cleanup
npm cache clean --force

### Multilingual

https://lokalise.com/blog/gatsby-i18n/

### React Spring for dark mode

https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle