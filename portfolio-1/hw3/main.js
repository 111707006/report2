let myGraph3 = document.getElementById('myGraph3');
let tracex ={};
tracex.type ="pie";
tracex.title ="朋友提供時間分配對照表";
tracex.labels =[];
tracex.values =[];
tracex.domain ={
    row:0,
    column:0
};

for(let x=0; x<evaluation_ratio1.length; x++){
    tracex.labels[x] =evaluation_ratio1[x]['name'];
    tracex.values[x] =evaluation_ratio1[x]['count'];
}
let tracey ={};
tracey.type ="pie";
tracey.title ="自身非期中週時間分配表";
tracey.labels =[];
tracey.values =[]; 
tracey.domain ={
    row:0,
    column:1
};

for(let x=0; x<evaluation_ratio2.length; x++){
    tracey.labels[x] =evaluation_ratio2[x]['name'];
    tracey.values[x] =evaluation_ratio2[x]['count'];
}

let tracez ={};
tracez.type ="pie";
tracez.title ="自身期中週時間分配表";
tracez.labels =[];
tracez.values =[];
tracez.domain ={
    row:1,
    column:0
}
for(let x=0; x<evaluation_ratio3.length; x++){
    tracez.labels[x] =evaluation_ratio3[x]['name'];
    tracez.values[x] =evaluation_ratio3[x]['count'];
};



let data3 =[];

data3.push(tracex);
data3.push(tracey);
data3.push(tracez);


let layout3 ={
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph3, data3, layout3);