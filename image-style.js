const html = ({
    title,
    domain,
    border,
    titleColor,
    bgColor,
    imgHeight,
    imgWidth,
    style = ""
}) =>  `
    <html>
        <head>
            <style>
            ${
                style.length !== 0 ? style :
                `
                    :root {
                        --imgHeight: ${imgHeight};
                        --imgWidth: ${imgWidth};
                    }
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        font-family: monospace;
                        width: var(--imgWidth);
                        height: var(--imgHeight);
                        padding: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: ${bgColor};
                    }
                    .container {
                        width: 100%;
                        height: 100%;
                        padding: 30px;
                        border: ${border ? "2px solid #ddd" : 'none'}; 
                        display: flex;
                        flex-flow: column;
                        justify-content: flex-start;
                        box-shadow: 10px 10px 0 rgb(0, 0, 0, .1);
                    }
                    .blog-title {
                        display: flex;
                        align-items: center;
                        height: 90%;
                    }
                    h1{
                        font-size: 80px;
                        text-transform: uppercase;
                        margin: 0;
                        color: ${titleColor ? titleColor : "black"};
                    }
                    .domain {
                        display: flex;
                        justify-content: flex-end;
                        color: #ddd;
                    }
                    p {
                        font-size: 20px;
                    }
                `
            }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='blog-title'>
                    <h1>${title}</h1>
                </div>
                <div class='domain'>
                    <p>${domain}</p>
                </div>
            </div>
        </body>
    </html>
`
module.exports = html