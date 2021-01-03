function btnSapXep(event){
    event.preventDefault();
    var num1 = document.getElementById("so_1").value;
    var num2 = document.getElementById("so_2").value;
    var num3 = document.getElementById("so_3").value;
    if(num1 < num2 && num1< num3){
        var min = num1;
    }else if(num1 < num2 && num1 > num3){
        min = num3;
    }else if(num1 > num2 && num2 < num3){
        min = num2;
    }
    if( num1 > num2 && num1 < num3){
        var medium = num1;
    }else if(num1 < num2 && num2 < num3){
        medium = num2;
    }else{
        medium = num3;
    }
    if(num1 > num2 && num1 > num3){
        max = num1;
    }else if(num1< num2 && num2 > num3){
        max = num2;
    }else if(num1 < num3 && num2 < num3) {
        max = num3;
    }

    document.getElementById("thongBao").className = "d-block";
    document.getElementById("thongBao").innerHTML = min +" "+ medium +" " +max;

}

