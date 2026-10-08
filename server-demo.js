//http module help to create the express server:
const http = require('http');

const PORT = xxxxx; //value of the PORT

const server = http.createServer(async(req, res) => {
    //when a req came to server:
    console.log('Request recived');

    //type of request:
    if(req.method == 'GET'){
        res.end('GET request received');
    }
    else if(req.method == 'POST'){
        res.writeHead(201);

        res.end('post req received');
    }
    else{
        const reqType = req.method;
        res.end(`${reqType} request received`);
    }
});

//creating a new server instance:
server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
});
