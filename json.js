const f=require('fs');
let data={
    name:"Dinesh",
    id:"532",
    branch:"CSE"
    

}
let newData=JSON.stringify(data);
console.log(`The JSON formatted data is:${newData}`);
f.writeFile('ex.json',newData,'utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
});
f.readFile('ex.json','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    let empjson=JSON.parse(data);
    console.log(empjson);
})