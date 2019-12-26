let express = require('express');
let bodyParser = require('body-parser');
let abb = express();

let sql = [{
        id: -1,
        name: 'Bob'
    },
    {
        id: 0,
        name: 'Jack',
        type: 0
    },
    {
        id:1,
        name:'Love',
        type:1
    },
    {
        id: 2,
        name: 'Nick',
        type: 9
    }
]

abb.use(express.static('eee'));
abb.use(bodyParser.json());
abb.use(bodyParser.urlencoded({ extended: false}));
abb.post('/login',(req,res) => {
    setTimeout(() => {
        res.json({
            code: 0
        })
    }, 2000);
})
abb.post('/login2', (req, res) => {
    let {
        body
    } = req;
    let o = sql.find(item => item.name === body.name);
    let obj = null;
    if(o){
        obj={
            code:0,
            type:o.type,
            user:o.name
        }
    }else{
        obj={
            code:1
        }
    }
    res.json(obj);
})

abb.get('/getary',(req,res)=>{
    setTimeout(()=>{
        res.json({code:0,ary:[1,2,3,4]})
    },4000);
})
abb.post('/noloading',(req,res)=>{
    setTimeout(() => {
        res.json({code:1})
    }, 3000);
})

abb.listen(80);