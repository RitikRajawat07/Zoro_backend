
const express = require('express');
const bodyParser = require('body-parser')


const db = [
    {
        id : 1, 
        name : "sohel",
        age : 22
    } , {
        id : 2,
        name : "sohel2",
        age : 23
    }
]

const app = express();

app.use(bodyParser())


app.get('/',(req,res)=>{
    return res.send(db)
})

app.post('/add',(req,res)=>{
    const newUser = req.body
    db.push(newUser);
    return res.send(db)    
})

app.patch('/update',(req,res)=>{
    const newUser = req.body
    const updatedDb = db.map(user => {
        if (user.id === newUser.id) {
            return {
                ...user,
                age : newUser.age
            };
        }
        return user;
    });
    return res.send(updatedDb)
})

app.delete('/delete',(req,res)=>{   
    const updatedDb = db.filter(user => user.id !== req.body.id);
    return res.send(updatedDb)
})

app.listen(3000, () => {
  console.log(`Server is running on port`);
});


