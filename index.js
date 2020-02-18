const nodeHtmlToImage = require('node-html-to-image');
const html = require('./image-style');
const { titleToSlug } = require('./functions');

const pluginName = 'gatsby-plugin-blog-cover';

const createImage= ({
	title,
	imgPath,
    // default values bgColor, titleColr, image width and height
	bgColor = "white",
	titleColor = "black",
	border = true,
	domain,
	imgHeight = "600px",
	imgWidth = "1000px",
	// Empty string is the default value for style which means the default style would be used
	style = ""
}) => {

	const image = html({
		title,
		domain,
		border,
		titleColor,
		bgColor,
		imgHeight,
		imgWidth,
		style
	});

	const imgName = titleToSlug(title);
	const imgSlug = `${imgPath}/${imgName}.png`;

	nodeHtmlToImage({
		output: imgSlug,
		html: image,
	})
	.catch(err => {
		console.log(`Error from ${pluginName},\nCouldn't create image because: ${err}`)
	})

	// Remove "./src/" and return the image slug
	return imgSlug.replace(/^(\.\/src\/)/, "");

}

createImage({
	title: "Gatsby Plugin Blog Cover",
	bgColor: "purple",
	titleColor: "white",
	imgPath: './',
	domain: "https://dillionmegida.com"
})

module.exports = createImage;