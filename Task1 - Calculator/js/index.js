let calculationText = document.getElementById("calculationText");
let resultText = document.getElementById("resultText");
let btn  = document.getElementsByTagName("button");

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',writeOnScreen);
}


function writeOnScreen(){
    switch(this.id){
        case "1":
            calculationText.value+="1";
            break;
        case "2":
            calculationText.value+="2";
            break;
        case "3":
            calculationText.value+="3";
            break;
        case "4":
            calculationText.value+="4";
            break;
        case "5":
            calculationText.value+="5";
            break;
        case "6":
            calculationText.value+="6";
            break;
        case "7":
            calculationText.value+="7";
            break;
        case "8":
            calculationText.value+="8";
            break;
        case "9":
            calculationText.value+="9";
            break;
        case "0":
            calculationText.value+="0";
            break;
        case "+":
            calculationText.value+=" + ";
            break;
        case "-":
            calculationText.value+=" - ";
            break;
        case "*":
            calculationText.value+=" * ";
            break;
        case "/":
            calculationText.value+=" / ";
            break;
        case "√":
            calculationText.value+=" √ ";
            break;
        case "clear":
            calculationText.value="";
            resultText.value="";
            break;
        case "del":
            if(isNaN(parseInt(calculationText.value[calculationText.value.length-1]))){
                calculationText.value=calculationText.value.substring(0,calculationText.value.length-3);
                break;    
            }
            calculationText.value=calculationText.value.substring(0,calculationText.value.length-1);
            break;
        case "=":
            let s=calculateResult();
            if(s==-1){
                resultText.value="Syntax Error";
                break;
            }
            resultText.value=eval(s);
            break;       
    }
}

function calculateResult(){
    let s=calculationText.value;
    let opStr="";
    let ops=s.split(" ");
    let i=ops.indexOf("");
    let d=ops.indexOf("÷");
    let result;
    while(i!=-1){
        ops.splice(i,1);
        i=ops.indexOf("");
    }

    for(let j=0;j<ops.length;j++){
        if(ops[j]=="√"){
            ops.splice(j,2,String(Math.sqrt(parseInt(ops[j+1]))));
        }
    }
    
    console.log(ops);

    for(let item of ops){
        opStr+=(item+" ");
    }
    if(isNaN(parseInt(ops[0]))){
        return -1;
    }
    return opStr;
}