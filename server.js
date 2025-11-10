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

  if(req.method == "GET" && req.url == '/fact/dog'){
    const data = await fs.readFile('Dog.json','utf-8');
    const fact = JSON.parse(data)
    res.writeHead(200,'Success');
    res.end(JSON.stringify(fact));
  }  
  if(req.method == "GET" && req.url == '/fact/horse'){
    const data = await fs.readFile('Horse.json','utf-8');
    const fact = JSON.parse(data)
    res.writeHead(200,'Success');
    res.end(JSON.stringify(fact));
  }
if(req.method == "GET" && req.url == '/fact/tiger'){
    const data = await fs.readFile('Tiger.json','utf-8');
    const fact = JSON.parse(data)
    res.writeHead(200,'Success');
    res.end(JSON.stringify(fact));
  }
  if(req.method == 'POST' && req.url == '/fact/create'){
  let body = "";
  req.on('data',chunk => {
    body += chunk.toString();
  })
  req.on('end',async ()=>{
      const parsed = JSON.parse(body);
      const{title,facts} = parsed;
      await fs.writeFile(`${title}.json`,JSON.stringify(facts),'utf-8');
      res.writeHead(201);
      res.end(JSON.stringify({
        message  : "Data Created",
        data : parsed
      }))
  })
  }
})

server.listen(8000);

