# Create gatspy site

npm init gatsby
cd my-gatsby-site
npm run develop

# Deploy to github pages

Inside package.json, add inside scripts

"deploy": "gatsby build --prefix-paths && gh-pages -d public"

npm run deploy

### Install Tailwindcss

https://tailwindcss.com/docs/guides/gatsby

