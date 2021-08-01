// if else condition
// examples
var foodReady = true;
var chickenFryPrice = 99;
var chickenRoastPrice = 199;
var chickenCurryPrice = 299;
var my_budget = 55;
//ex -01

// if(foodReady==true){
//  console.log("ok serve me food");
// }

//ex-02
if(foodReady==true){
    if(chickenCurryPrice<=my_budget){
        console.log("give me chicken curry");
    }else if(chickenRoastPrice<=my_budget){
        console.log("give me chicken roast");
      }
      else if(chickenFryPrice<=my_budget){
          console.log("give me chicken fry");
      
      }else{
        console.log("khabo na");
    }
}
