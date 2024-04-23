var calcDisplay = ""

function btnClick(e) {
   if(e == "1" || e == "2" || e == "3" || e == "4" || e == "/" || e == "*") {
    if (e == "AC") {
        calcDisplay= ""
    } else {
        calcDisplay = calcDisplay + e 
        console.log(e)
    } 
    document.getElementById("display").value = calcDisplay
    } else {
        console.log("input")
    }
    
}
var displayValue = document.getElementById("display").addEvenListener('change',displayChange)


function displayChange(){
    
}