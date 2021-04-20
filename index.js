import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle ={};
 
if(curDate >= 1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(curDate>=12 && curDate<19){
  greeting ='Good After noon';
  cssStyle.color = 'Orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'Black';
}

ReactDom.render(
  <>
  <div>
  <h1>Hello , <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
  
);
