const {Client}=require('pg')
const express=require('express')
const app=express()
app.use(express.json())
const con=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"369",
    database:"practice"
})

con.connect().then(()=>console.log("connected"))

app.post("/postdata",(req,res)=>{

    const {id,name}=req.body

    const insert_query='INSERT INTO EMPLOYEE(id,name) VALUES($1,$2)'
    con.query(insert_query,[id,name],(err,result)=>{

        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send("DATA POSTED")
        }
    })
})
app.get("/fetchdata",(req,res)=>{

  const fetch_query="SELECT*FROM employee"
  con.query(fetch_query,(err,result)=>{
    if(err){
        res.send(err)
    }else{
       
        res.send(result.rows)
    }
  })

})
app.get("/fetchById/:id",(req,res)=>{
    const fetch_query="SELECT * FROM employee where id= $1"
    const id=req.params.id
    con.query(fetch_query,[id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result.rows)
        }
    })
})
app.put("/update/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const update_query="UPDATE employee SET name=$1 WHERE id=$2"
    con.query(update_query,[name,id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send("UPDATED")
        }
    })
})
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    const delete_query="DELETE FROM employee where id=$1"
    con.query(delete_query,[id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send("RESULT")
        }
    })

})

app.listen(3000,()=>{
    console.log("server is running")
})