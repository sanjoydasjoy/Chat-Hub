const express = require("express")
const app = express()

const port = 9000;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
//app.set("views" , path.join(__dirname, "public"))

let posts = [ // giving it const wont make it delete 
    {
        username: "dictator",
        content : "we agree with all your points"
    },
    {
        username: "sj",
        content : "stop with the lies"
    },
    {
        username: "anon",
        content : "Lets spread fake news"
    },
]

app.get("/posts", (req, res) => {
    res.render("home.ejs",{posts});
});



app.listen(port,()=>{
    console.log(`app is listening to ${port}`)
})
