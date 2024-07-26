http = require('http')

// console.log(http)

server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.write('welcome to our homepage')
        res.end('')
    }

    if (req.url === '/about'){
        res.end('here it is!')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Oops!</h1> <p>We can\'t find that page.</p> <a href="/">Back home</a>');
    }
    // console.log(req)
    
})

server.listen(5000)