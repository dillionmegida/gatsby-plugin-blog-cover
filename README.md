# gatsby-plugin-blog-cover

<p align="center">
	<img alt="Gatsby plugin blog cover" src="./cover-image.png" height="200px" />
</p>

This plugin is used to setup default Blog Covers if there aren't any customized ones specified.

It's an inspiration I got when I couldn't create customized covers all the time, thereby leaving graphs and twitter card images with the favicon of my site. Favicons are suitable for other parts of my site, but I believe blog posts should have meaningful images.

## How To Use

### Install the plugin

```shell
npm i --save gatsby-plugin-blog-cover
```

### Go to `gatsby-node.js`

Example usage:

```js
exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const { title } = node.frontmatter;
		const generatedCoverSlug = createImage({
			title,
			imgPath: './src/images',
			domain: "https://dillionmegida.com"
		})
		createNodeField({
			node,
			name: 'generatedCoverSlug',
			value: generatedCoverSlug
		})
	}
}
```

`generatedCoverSlug` returns the path to the image without "./" which in this case would be **src/images/the-blog-title.png**.

The `title` is used to create the image (which includes the `domain` text) and then saved in `./src/images`. The image is of type `png`. `createNodeField` is used to create a node of the cover's slug on the `MarkdownRemark` node which can be queried with graphql.

The parameters available are:

- `title` (**required**): The title of the blog post e.g "How To Create A Website".
- `imagePath` (**required**): This is where the images are stored. Images must be saved in `src`.
- `domain` (**optional**): The domain of your blog e.g "https://example.com".
- `border`: **true** or **false** if you want a border round the text. Default is **true**.
- `titleColor`: The color of the title. The default is **black**
- `bgColor` (**optional**): The background color of the image. Defaults to white.
- `imgHeight` (**optional**): The height of the image. Defaults to 600px.` 
- `imgWidth` (**optional**): The width of the image. Defaults to `1000px.` 
- `style` (**optional**): If you're good with CSS, why not? You can specify your own style of the cover. But be careful, because CSS would try to render the styles you specify either wrong or right.

The body of the HTML is

```html
<body>
	<div class='container'>
		<div class='blog-title'>
			<h1>{{ title }}</h1>
		</div>
		<div class='domain'>
			<p>{{ domain }}</p>
		</div>
	</div>
</body>
```

### Require the image

For example, in your post template file, you can do the following:

```js
import React from "react";
import { graphql } from "gatsby";
...
export default ({ data }) => {
	const { fields, frontmatter } = data.markdownRemark;
	return (
		<>
			<h1>{frontmatter.title}</h1>
			<img src={require(`../../${post.fields.generatedCoverSlug}`)} alt='Blog Cover' width='100%' />
		</>
	)
}
...
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        generatedCoverSlug
      }
      frontmatter {
        title
      }
    }
  }
`
```

The path in your `require` function may be different. It is the path to the folder where your images live. So the above will translate to **require('../../src/images/the-blog-title.png')**

You can use the cover slug in your graphs and twitter cards for perfect previews when shared on social media.

`$slug` is a variable used in the query just as [seen in the Gatsby documentation](https://www.gatsbyjs.org/tutorial/part-seven/#creating-pages) for creating each blog post pages.

## Contributions

Pull requests and feature requests are welcome 🙂

Also, if you love the plugin, we could create different cover templates together 😇

## Author

[Dillion Megida](https://dillionmegida.com/about)