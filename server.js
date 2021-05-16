const fs = require('fs');
const http = require('http')

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8")

const server = http.createServer((req, res) => {

    const pathName = req.url;


    if (pathName === "/" || pathName === "/api") {
        res.writeHead(200, {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        })

        res.end(data)
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html"
        })
        res.end('<h1>404 page not found</h1>')
    }
})



server.listen(3000, '127.0.0.1', () => {
    console.log('server is running...')
})