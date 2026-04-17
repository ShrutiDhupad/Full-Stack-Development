const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

let tempData = [28,30,29,31,33,34,32];
let humidityData = [60,65,63,70,75,72,68];
let rainData = [2,0,5,1,0,3,4];

const tempChart = new Chart(document.getElementById("tempChart"),{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Temperature (°C)",
data:tempData,
borderColor:"red",
fill:false
}]
}
});

const humidityChart = new Chart(document.getElementById("humidityChart"),{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Humidity (%)",
data:humidityData,
backgroundColor:"blue"
}]
}
});

const rainChart = new Chart(document.getElementById("rainChart"),{
type:"pie",
data:{
labels:labels,
datasets:[{
label:"Rainfall (mm)",
data:rainData,
backgroundColor:[
"#3498db",
"#2ecc71",
"#9b59b6",
"#f1c40f",
"#e67e22",
"#e74c3c",
"#1abc9c"
]
}]
}
});

function updateData(){

tempChart.data.datasets[0].data =
tempData.map(n => n + Math.floor(Math.random()*3));

humidityChart.data.datasets[0].data =
humidityData.map(n => n + Math.floor(Math.random()*5));

rainChart.data.datasets[0].data =
rainData.map(n => n + Math.floor(Math.random()*3));

tempChart.update();
humidityChart.update();
rainChart.update();

}