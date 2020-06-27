function getNumber(num){
    console.log(num)
    var result = document.getElementById("result") 

    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";

}

function ceResult(){
    var result1 = document.getElementById("result");
    result1.value = "0";
}

function getResult(){
    var result = document.getElementById("result");

    result.value = eval(result.value)
}
