function toaDo(event) {
    event.preventDefault();
    var a = document.getElementById("a").Value;
    var b = document.getElementById("b").Value;
    var c = document.getElementById("c").Value;
    var d = document.getElementById("d").Value;
    var e = document.getElementById("e").Value;
    var f = document.getElementById("f").Value;
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var ten_1 = document.getElementById("tenSv_1").value;
    var ten_2 = document.getElementById("tenSv_2").value;
    var ten_3 = document.getElementById("tenSv_3").value;
    var toaDoSv_1 = parseInt((x - a) + (y - b));
    var toaDoSv_2 = parseInt((x - c) + (y - d));
    var toaDoSv_3 = parseInt((x - e) + (y - f));
    if (toaDoSv_1 > toaDoSv_2 && toaDoSv_1 > toaDoSv_3) {
        var max = toaDoSv_1;
        document.getElementById("thongBao").innerHTML = ten_1 + toaDoSv_1;
    } else if (toaDoSv_1 > toaDoSv_2 && toaDoSv_1 < toaDoSv_3) {
        max = toaDoSv_3;
        document.getElementById("thongBao").innerHTML = ten_3 + toaDoSv_3;
    } else {
        max = toaDoSv_2;
        document.getElementById("thongBao").innerHTML = ten_2 + toaDoSv_2;
    }

}