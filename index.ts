import express, {Express, Request, Response} from "express";

// const express = require("express");

const app = express();
const port = 8000;


app.get("/", (Request, Response) =>{
    Response.send("hello from express + TSs")
})


app.listen(port, () =>{
    console.log(`now listening on port:${port}`)
})