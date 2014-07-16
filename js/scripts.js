$(document).ready(function(){
  $("#rate-calc").submit(function(event){
    $("body").addClass("dickinabox")
    $("#rate-calc").addClass("formhide")
var result;
var Package ={number:parseInt($("input#number-of-pack").val()),
              weight:parseInt($("input#weight").val()),
              shipTime: $("select#time").val(),
              calculator: function(){
                if(this.shipTime ==="NOW"){
                    result= this.number * this.weight * 4000000
                }else if(this.shipTime==="Tomorrow"){
                    result= this.number * this.weight * 400
                }else if(this.shipTime==="Whenever I want it!"){
                    result= this.number * this.weight * 2
                }
              }}
Package.calculator();
$("#result").append("$"+result);
event.preventDefault();
})
});
