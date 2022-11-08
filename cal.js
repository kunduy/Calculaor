

var input=document.querySelectorAll("input");
var exp="";
for(var i=0;i<input.length;i++)
{
      input[i].addEventListener("click" ,function(){
      
        var ins=this.value;
        exp+=ins;
        document.getElementById("screen").innerText=exp;

      })
    
}
var e=document.getElementById("equal");
e.addEventListener("click",function(){
    var q=eval(exp);
    document.getElementById("screen").innerText=q;

})

var r=document.getElementById("clr");
console.log(r); 
r.addEventListener('click',function(){
    document.getElementById("screen").innerText="";
    exp="";

})

