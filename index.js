const nodeHtmlToImage = require('node-html-to-image');
const html = require('./image-style');

const title = "How to Select a div in HTML so that it will work well";
const domain = "https://dillionmegida.com";
const border = false;
const titleColor = "purple";

const output = html(title, domain, border, titleColor)
 
nodeHtmlToImage({
  output: './image.png',
  html: output,
//   content: {
//       title: title,
//       domain: domain
//   }
})
  .then(() => console.log('The image was created successfully!'))
  .catch(err => {
      console.log(`Couldn't create image because: ${err}`)
  })