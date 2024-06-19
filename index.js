require('dotenv').config()

const expres= require('express')
const app=expres()
const port= 3000

app.get('/' ,(req, res)=>{
    res.send('<h1> hello world</h1>')

})

// app.listen(port, ()=>{
//     console.log(`server is listing on the port  ${port}`)
// })

app.listen(process.env.PORT,()=>{
    console.log(`THE SERVER IS LISTINIG ON PORT ${process.env.PORT}`)
} )

