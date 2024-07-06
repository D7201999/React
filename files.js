
//import { readFileSync } from 'fs';
const f1=require('fs');
let content=f1.readFileSync('message.txt','utf-8');
console.log(content);
f1.writeFileSync('write.txt',content);
console.log(f1.readFileSync('write.txt','utf-8'));
