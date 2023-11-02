function GetValues() {
    Value1 = parseInt(document.getElementById("Value1").value);
    Value2 = parseInt(document.getElementById("Value2").value);

    if (Value1 <= 0 || Value2 <=0) {
        SetResult("Een getal is ingevoerd is te laag!");
        else false;}
    else {
        return true;
    }
}

function Multiply(){
    GetValues();
    Result = Value1 * Value2;
    SetResult(Result);

 }

function Subtract(){
    GetValues();
    Result = Value1 - Value2;
    SetResult(Result);
  
}
function Sum(){
    GetValues();
    Result = Value1 + Value2;
    SetResult(Result);
  
}
function Divide(){
    GetValues();
    Result = Value1 / Value2;
    SetResult(Result);

}
function SetResult(result) {
    document.getElementById("ResultH1").innerHTML = "Result: " + result;
}


