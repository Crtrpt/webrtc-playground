import './style.css'


import * as mqtt from 'precompiled-mqtt'


let client = null // create a client

const params = new URLSearchParams(window.location.search);
room.value=params.get("id");
username.value=`user_${Math.random().toString(16).slice(3)}`

function logInfo(text){
  var l=document.createElement("div");
  l.innerText=text;
  log.appendChild(l);
}
console.log(room.value);
join.addEventListener("click",(e)=>{
  const options = {
    clientId: username.value,
  }
  
  client=  mqtt.connect('mqtt://127.0.0.1:1882',options);
  client.on("connect",()=>{
    logInfo("连接成功")
    logInfo("订阅"+"/room/"+room.value)
    client.subscribe("/room/"+room.value,(e)=>{
  
    })
  })
  
  client.on("message",()=>{
  
  });
})


start.addEventListener("click",async (e)=>{
  var localStream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
  localVideo.srcObject = localStream;
})
