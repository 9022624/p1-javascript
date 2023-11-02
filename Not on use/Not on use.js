function GetValues() {
    Value1 = parseInt(document.getElementById("Value 1").value);
    Value2 = parseInt(document.getElementById("Value 2").value);

}


function Multiply() {
    GetValues();
    Result = Value1 * Value2;
    SetResult(Result);

}
function Subtract() {
    GetValues();
    Result = Value1 - Value2;
    SetResult(Result);

}
function Sum() {
    GetValues();
    Result = Value1 + Value2;
    SetResult(Result);

}
function Divide() {
    GetValues();
    Result = Value1 / Value2;
    SetResult(Result);

}

function SetResult (result) {
    ResultH1.InnerHTML = "Result: " + result;

}
/*function GetValues() {
    Value1 = parseInt(document.getElementById("Value 1").value);
    Value2 = parseInt(document.getElementById("Value 2").value);
}

function Multiply(){
    GetValues();
    Result = Value1 * Value2
    SetResult(Result);
}

function Subtract(){
    GetValues();
    Result = Value1 - Value2
    SetResult(Result);
}

function Sum(){
    GetValues();
    Result = Value1 + Value2
    SetResult(Result);
}

function (){
    GetValues();
    Result = Value1 / Value2
    SetResult(Result);
}


function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}*/

/*function GetValues() {
    Value1 = parseInt(document.getElementById("Value1").value);
    Value2 = parseInt(document.getElementById("Value2").value);
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
}*/


