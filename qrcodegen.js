import express from 'express';
import code from 'qrcode';
const port=4000;
const app=express();
app.get('/dinesh',(req,res)=>{
    const url='https://github.com/D7201999/';
    code.toDataURL(url,(err,qrcode)=>{
        if(err){
            res.status(500).send("Internal Server error");
        }
        else{
            res.send(`
            <body>Qrcode Generator
            <img src="${qrcode}" alt="QR Code">
            </body>`);
        }
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
});
