
//console.log(16+"volvo");
var p = {
    first : "deme",
    last : "haha",
    id : 5566,
    fu : function(){
        return this.first+" "+this.last;
    }
};
function f()
{
    x=document.getElementById("demo");
    x.innerHTML=p.fu();
}