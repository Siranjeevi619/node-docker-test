const express = require('express');

const app = express();
const PORT = 3000;

app.use("/", (req , res)=>{
    res.send("Hello Node! ");

})


app.listen(PORT, () => {
    console.log("server is running")
})