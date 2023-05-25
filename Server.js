const express = require("express")

const app = express()

const port = 5000

const CheckTime=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHours = currentDate.getHours()

    if(currentDay == 3 || currentDay == 0 || currentHours<9 || currentHours>18){
        return res.sendFile(__dirname+'/Public/Error.html')
    }

    next()
  

}

app.use(CheckTime)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/Homepage.html")
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+"/public/OurServices.html")
})
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+"/public/Contactus.html")
})
app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/public/Style.css")
})


app.listen(port,console.log(`Server is running on the port ${port}`))