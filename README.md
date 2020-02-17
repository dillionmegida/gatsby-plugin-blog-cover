# gatsby-plugin-blog-cover

This plugin is used to setup default Blog Covers if there aren't any customized ones specified.

...image

It's an inspiration I got when I couldnt create customized covers all the time, thereby leaving graphs and twitter card images with the favicon of my site. Favicons are suitable for other parts of my site, but I believe blog posts should have meaningful images.

## How To Use

### Install the plugin

```shell
npm i --save gatsby-plugin-blog-cover
```

### Add to `gatsby-config.js`

...

The options available are:
- `imagePath` (**required**): This is where the images are stored.
- ``title` (**required**): The title of the blog post e.g "How To Create A Website".
- `domain` (**optional**): The domain of your blog e.g "https://example.com".
- `border`: **true** or **false** if you want a border round the text. Default is **true**.
- `titleColor`: The color of the title. The default is **black**
