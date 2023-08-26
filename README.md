# Create gatspy site

npm init gatsby

cd my-gatsby-site

npm run develop

# Deploy to github pages

Inside package.json, add inside scripts

"deploy": "gatsby build --prefix-paths && gh-pages -d public"

npm run deploy

# Packages to install

- CSS [Tailwind](https://tailwindcss.com/docs/guides/gatsby)
- Gatsby Image (NOTE: use photo.JPG - capitalize the JPG or will not show up on github pages)