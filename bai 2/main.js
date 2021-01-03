function btnSayHi(event){
    event.preventDefault();
    var member = document.getElementById("sayHi").value;
    if(member === "b" || member === "B"){
        var chao = "Chào Cha";
    }else if(member === "a" || member === "A"){
        chao = "Chào Anh";
    }else if(member === "e" || member === "E"){
        chao = "Chào Em";
    }else{
        chao = "Chào Mẹ";
    }
    document.getElementById("footer").className = "d-block";
    document.getElementById("footer").innerHTML = chao;
}