const express = require('express');
const app = express();
const path = require('path');
const port = '6767';


app.get("/", async(req, res)=>{
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/create", async(req, res)=>{
    res.sendFile(path.join(__dirname, "create_ico.html"));
})

app.get("/register", async(req, res)=>{
    res.sendFile(path.join(__dirname, "register_ico.html"));
})

app.get("/ico/admin", async(req, res)=>{
    res.sendFile(path.join(__dirname, "admin.html"));
})

app.get("/ico/admin/change", async(req, res)=>{
    res.sendFile(path.join(__dirname, "change_admin.html"));
})

app.get("/ico/admin/rate", async(req, res)=>{
    res.sendFile(path.join(__dirname, "new_rate.html"));
})

app.listen(port, async(req, res)=>{
    console.log(`Listening to port ${port}`);
})