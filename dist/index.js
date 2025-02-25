"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require("express");
const app = (0, express_1.default)();
const port = 8000;
app.get("/", (Request, Response) => {
    Response.send("hello from express + TSs");
});
app.listen(port, () => {
    console.log(`now listening on port:${port}`);
});
