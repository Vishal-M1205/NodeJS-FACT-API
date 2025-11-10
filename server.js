const http = require('http');
const fs = require('fs').promises;
const server = http.createServer( async (req,res)=>{
  res.setHeader(
    'Content-type','application/json'
  );
   if (req.method == 'GET' && req.url == '/'){
 res.writeHead(200);
    res.end(JSON.stringify({
        data : {
            title:'Greetings User here you can find amazing facts',
            factList : ['Cat','Dog','Horse','Tiger']
        }
    }));
   }
   if(req.method == 'GET' && req.url == '/fact/cat'){
    res.writeHead(200);
    const data = await fs.readFile('Cat.json','utf-8');
    const fact = JSON.parse(data)
    res.end(JSON.stringify(fact));
   }

 
   

})

server.listen(8000);

