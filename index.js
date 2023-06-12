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
      console.error(`asdfasdfasdfasdfasdf asdfalskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111 11111 333333333333333333 9999999999999999999
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
alskdf alksdf aslkdf alskdf laksdf lkasdjf lkasdf jlkasdf lka;sdf laksdf laksdf jklasdf lask;dfl ;askdfas;dfasdfasdfasdfasdfasfd 111111111
asdasdfasdfsdf919191991919191
`)
   
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

console.log('sleeping')
sleep(1000).then(()=>{
   console.log('woke up')
let server = app.listen(3000)

//  server.keepAliveTimeout = 3000; 
// Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
//  server.headersTimeout = 100; 

})
