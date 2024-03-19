document.getElementById("aaa").onclick = function(){
    let marks = +prompt("enter your marks")
    // console.log(marks)
    
    if(marks>=90){
        alert("you got A+")
        document.getElementById("Clear").innerHTML = "you got A+";



       
    }
    else if(marks>=80){
        alert("you got A")
        document.getElementById("Clear").innerHTML = "you got A";
    }
    else if(marks>=70){
        alert("you got B")
        document.getElementById("Clear").innerHTML = "you got B";
    }
    else {
        alert("you are fail")
        document.getElementById("Clear").innerHTML = "you are fail";
    }
}