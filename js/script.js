var male = document.getElementById("male");
var female = document.getElementById("female");
var weight = document.getElementById("weight");
var age = document.getElementById("age");
var height = document.getElementById("height");
var form = document.getElementById("form");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("Semua Form Harus Di Isi !!!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var kondisiBMI = '';
  if(bmi<18.5){
    kondisiBMI = 'Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    kondisiBMI = 'Normal (Ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    kondisiBMI = 'Kelebihan Berat Badan';
     }else if(30<=bmi&&bmi<=34.9){
    kondisiBMI = 'Kegemukan (Obesitas';
     }
  
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(kondisiBMI);
  var b = document.createTextNode(' ');
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);