const http = require('http');


const server = http.createServer((req, res) => {
   if(req.url == '/'){
     res.end('Site refused to connect')
   }
   if(req.url == '/about'){
     // BLOCKING
     for(let i = 0; i<100;i++){
       for(let j = 0; j<1000;j++){
         console.log(`${i}, ${j}`)
       }
     }
     res.end("about")
   }
   res.end('not found')
})

server.listen(5000, ()=>{
  console.log('Server listening on port 5000...');
})
