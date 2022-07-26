//Function that handles when button is clicked
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
//check if value of amount is greater than 0
    if(principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
}else{
    result.innerHTML="<br>If you deposit <mark>"+principal+",</mark><br>\
        at an interest rate of <mark>"+rate+"%.</mark><br> \
        You will receive an amount of <mark>"+interest+",</mark><br>\
        in the year <mark>"+year+"</mark>";
}
}
//Function to update value on screen of the input range
function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval+"%";
    }     