let myGraph2=document.getElementById('myGraph2');

let traceA={};
traceA.type="bar";
traceA.name ="Social_software";
traceA.x=[];
traceA.y=[];

for(let i=0;i<Social_software.length;i++){
    traceA.x[i] =Social_software[i]['name'];
    traceA.y[i] =Social_software[i]['count'];
}

let traceB={};
traceB.type="bar";
traceB.name ="Game";
traceB.x=[];
traceB.y=[];

for(let i=0;i<Game.length;i++){
    traceB.x[i] =Game[i]['name'];
    traceB.y[i] =Game[i]['count'];
}
let traceC={};
traceC.type="bar";
traceC.name ="tool_program";
traceC.x=[];
traceC.y=[];

for(let i=0;i<tool_program.length;i++){
    traceC.x[i] =tool_program[i]['name'];
    traceC.y[i] =tool_program[i]['count'];
}
let data2 =[];
data2.push(traceA);
data2.push(traceB);
data2.push(traceC);

let layout2 ={
    margin:{
        t:0
    },
    barmode:"stack"
    
};
Plotly.newPlot(myGraph2,data2,layout2);

