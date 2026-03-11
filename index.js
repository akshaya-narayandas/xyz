let exp = require("express");
let app = exp();
app.set("view engine","ejs");
app.listen(8080,() => {
    console.log("app is listening");
});
app.use(exp.static("public"));

app.get("/:username",(req,res)=>{
    let {username} = req.params;
    console.log(username);
    let data = Math.floor((Math.random() * 6) + 1);
    let fol = ["akshaya","sankalp"];






    res.render("home.ejs",{username,data,fol});
});

