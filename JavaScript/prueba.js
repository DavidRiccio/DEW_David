

function calculate(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let operation = document.querySelector("#operation").value;
    if (num2==0 || num1==0){
        document.getElementById("result").textContent = "Division por 0";
    } else{
        switch(operation){
            case "subtract":
                document.getElementById("result").textContent =num1 - num2;
            break;
    
            case "add":
                document.getElementById("result").textContent =num1 + num2;
            break;
    
            case "multiply":
                document.getElementById("result").textContent =num1 * num2;
            break;
    
            case "divide":
                document.getElementById("result").textContent =num1 / num2;
            break;
            
            default:
                console.log("error")
        }
    

    }
    
    
}

console.log(num1)
console.log(num2)
console.log(operation)