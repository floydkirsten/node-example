import express from "express";

const app = express();
const port=1234;

app.get( '/', (req, res) => {
    res.send("Hello!");
});


app.listen( port, () => {
    console.log('server started at port ${ port }');
});