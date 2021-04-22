const express=require('express')
const app =express()

//app.use(express.static(__dirname+'/Pages'))
function verify (req,res,next)
{
    let h= new Date().getHours()
    if (h > 17 || h < 8){    res.sendFile(__dirname + '/Pages/404NotFound.html');
next();
}

else { app.get('/', (req, res) =>res.redirect('Pages/Home.html'))}

}
app.get('/Home',verify, (req, res) => res.sendFile('/Pages/Home.html'))
app.get('/Contact', verify, (req, res) => res.sendFile('/Pages/Contact.html'))
app.get('/Services',verify, (req, res) => res.sendFile('/Pages/Services.html'))

app.listen(4000, (err)=>{
    if (err) console.log("Server is not running");
    else console.log("Server is running on port 4000");
});
app.use(express.static('./Pages'))

















 
// app.get ('/',(req,res)=>
// {res.send('page home')
// });

// app.get ('/products',(req,res)=>
// {res.send(' product page ')
// });

// app.use(logger)
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/Pages/Home.html")
// })
// app.get("/Services",(req,res)=>{
//     res.sendFile(__dirname + "/Pages/Services.html")
// })
// app.get("/Contact",(req,res)=>{
//     res.sendFile(__dirname + "/Pages/Contact.html")
// })
// function logger(req,res,next){
//     console.log(req.method,"at",req.url);
//     next();
// }


