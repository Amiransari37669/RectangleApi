const express = require('express')
const app = express()
const port=3000;

app.use(express.json());
app.post('/',  (req, res)=> {
  let data=req.body;
  let flag='';
  let response=[];
  for(i=0; i<data.length; i++){
    let X1=data[i].top_left[0];
    let Y1=data[i].top_left[1];
    let X2=(data[i].top_left[0]+data[i].dimensions[0]);
    let Y2=(data[i].top_left[1]-data[i].dimensions[1]);
    for(j=0; j<data.length; j++){
        if(i!=j){
        let x1=data[j].top_left[0];
        let y1=data[j].top_left[1];
        let x2=(data[j].top_left[0]+data[j].dimensions[0]);
        let y2=(data[j].top_left[1]-data[j].dimensions[1]);
        if(X1>=x2 || Y1<=y2 || X2<=x1 || Y2>=y1){
            flag="false"
        }
        else{
            flag= 'true'
            break;
        }
    }
}
    response.push(flag);
  }
  res.json(response);
})

app.listen(port,()=>{console.log(`Example app listening at ${port}`)})