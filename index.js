// const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()


let a = 0;
app.use('/',router)
router.post('/', async (req, res)=>{
   await new Promise(resolve => setTimeout(resolve, 1000));
res.send('yo')
}) 


router.get('/', async (req, res)=>{
   // console.log(req.headers)
      console.log('asdfasdfasdfasdfsa asdfasdfa asdasdfas asdfasdfasdfads asdfasdfasdfasv asdfasdfasdfasdfasdfasdf asdfasdfasdfasdfasdfasdf asdfsd');
   a += 1;
   console.log(a);

   
//      await new Promise(resolve => setTimeout(resolve, 3000));
    return res.json({
       hello:'world'
    })
})


router.get('/fs', (req, res)=>{
   require('fs').writeFileSync('./file.txt', 'asdfasdf')
   res.send('ok')
})

router.get('/process_exit', (req, res)=>{
     process.exit()

})
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms ));

// console.log('sleeping')
// sleep(4000).then(()=>{
   // console.log('woke up')
let server = app.listen(3000)

//  server.keepAliveTimeout = 3000; 
// Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
//  server.headersTimeout = 100; 

// })
