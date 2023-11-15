let myGraph=document.getElementById('myGraph');


let trace1 ={};
trace1.mode ="lines+markers"
trace1.type ="scatter";
trace1.name ="台北市房價季指數";
trace1.visible =true;
trace1.marker={
    size:10
};
trace1.x =[];
trace1.y =[];
trace1.text =[];
trace1.textposition = "bottom center";
trace1.textfont = {
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
   trace1.text[i] =set1[i][2];
}

let trace2 ={};
trace2.mode ="lines+markers"
trace2.type ="scatter";
trace2.name ="新北市房價季指數";
trace2.visible =false;
trace2.line ={
    color:'red'
};
trace2.x =[];
trace2.y =[];
trace2.text =[];
for (let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] =set2[i][2];

}


let trace3={};
trace3.mode ="lines+markers";
trace3.type ="scatter"
trace3.name ="桃園市房價季指數"
trace3.marker={
    size: 10
};
trace3.x =[];
trace3.y =[];
trace3.text=[];
trace3.visible =false;
trace3.line ={
    color: 'green',
    shape:'spline',
};
for(let i=0; i<set3.length; i++) {
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i]=set3[i][2];
}

let trace4={};
trace4.mode ="lines+markers";
trace4.type ="scatter"
trace4.name ="台中市房價季指數"
trace4.marker={
    size: 10
};
trace4.x =[];
trace4.y =[];
trace4.text=[];
trace4.visible =false;
trace4.line ={
    color: 'black',
    shape:'spline',
};
for(let i=0; i<set4.length; i++) {
    trace4.x[i] =set4[i][0];
    trace4.y[i] =set4[i][1];
    trace4.text[i]=set4[i][2];
}


let trace5={};
trace5.mode ="lines+markers";
trace5.type ="scatter"
trace5.name ="台南市房價季指數"
trace5.marker={
    size: 10
};
trace5.x =[];
trace5.y =[];
trace5.text=[];
trace5.visible =false;
trace5.line ={
    color: 'grey',
    shape:'spline',
};
for(let i=0; i<set5.length; i++) {
    trace5.x[i] =set5[i][0];
    trace5.y[i] =set5[i][1];
    trace5.text[i]=set5[i][2];
}

let trace6={};
trace6.mode ="lines+markers";
trace6.type ="scatter"
trace6.name ="高雄市房價季指數"
trace6.marker={
    size: 10
};
trace6.x =[];
trace6.y =[];
trace6.text=[];
trace6.visible =false;
trace6.line ={
    color: 'yellow',
    shape:'spline',
};
for(let i=0; i<set6.length; i++) {
    trace6.x[i] =set6[i][0];
    trace6.y[i] =set6[i][1];
    trace6.text[i]=set6[i][2];
};
let trace7={};
trace7.mode ="lines+markers";
trace7.type ="scatter"
trace7.name ="全台房價季指數"
trace7.marker={
    size: 10
};
trace7.x =[];
trace7.y =[];
trace7.text=[];
trace7.visible =false;
trace7.line ={
    color: 'purple',
    shape:'spline',
};
for(let i=0; i<set7.length; i++) {
    trace7.x[i] =set7[i][0];
    trace7.y[i] =set7[i][1];
    trace7.text[i]=set7[i][2];
};

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
data.push(trace5);
data.push(trace6);
data.push(trace7);



let layout ={
    margin:{
        t:50
    },
    xaxis:{
        range:[100,112]
    },
    yaxis:{
        range:[0,130]
    },
    title:'___________________六都住宅價格季指數趨勢圖 基期為105年全年=100',
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false,false,false,false,false]],
                    label:'台北'
                },
                {
                    method:'restyle',
                    args:['visible',[false,true, false,false,false,false,false]],
                    label:'新北'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true,false,false,false,false]],
                    label: '桃園'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false,true,false,false,false]],
                    label: '台中'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false,false,true,false,false,]],
                    label: '台南'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false,false,false,true,false,]],
                    label: '高雄'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false,false,false,false,true,]],
                    label: '全台'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true,true,true,true,true,]],
                    label: 'Display All'
                }
            ]
        }
    ]
};




Plotly.newPlot(myGraph, data, layout);