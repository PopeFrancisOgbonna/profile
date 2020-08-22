const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) =>{
    res.sendFile(__dirname +"/index.html");
})
app.get('*',(req, res) =>{
    res.sendFile(__dirname +"/error.html");
})

app.listen(PORT,() =>console.log(`server started on ${PORT}`));