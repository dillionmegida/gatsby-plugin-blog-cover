const html = (title, domain, border, titleColor) =>  `
    <html>
        <head>
            <style>
                :root {
                    --imgHeight: 600px;
                    --imgWidth: 1000px;
                }
                body {
                    width: var(--imgWidth);
                    height: var(--imgHeight);
                    padding: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .container {
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    border: ${border ? "2px solid #ddd" : "none"}; 
                    display: flex;
                    flex-flow: column;
                    justify-content: flex-start;
                }
                .blog-title {
                    display: flex;
                    align-items: center;
                    height: 90%;
                }
                .blog-title h1{
                    font-size: 100px;
                    margin: 0;
                    color: ${titleColor ? titleColor : "black"}
                }
                .domain {
                    display: flex;
                    justify-content: flex-end;
                }
                .domain p {
                    font-size: 30px;
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