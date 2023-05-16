const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()



app.use('/',router)
router.post('/', async (req, res)=>{
   await new Promise(resolve => setTimeout(resolve, 1000));
res.send('yo')
}) 


router.get('/', async (req, res)=>{
      console.log(req.headers)
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


let server = app.listen(3000)

// server.keepAliveTimeout = 3000; 
// Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
// server.headersTimeout = 100; 
