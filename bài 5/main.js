// function btnSoChanLe(event) {
//     event.preventDefault();
//     var day = document.getElementById("so_1").value;
//     var month = document.getElementById("so_2").value;
//     var year = document.getElementById("so_3").value;
//     if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12)) {
//         var today = day + "/" + month + "/" + year;
//     } else {
//         today = "Nhập sai rồi thằng nhóc";
//     }

//     document.getElementById("footer").innerHTML = today;
// }
function btnTomorrow(event) {
    event.preventDefault();
    var day = parseInt(document.getElementById("so_1").value);
    var month = parseInt(document.getElementById("so_2").value);
    var year = parseInt(document.getElementById("so_3").value);
    var nextDay = day++;
    var nextMonth = month;
    var nextYear = year;
    var tomorrow = nextDay + "/" + nextMonth + "/" + nextYear;
    if (nextDay > 30 && (nextMonth === 4 || nextMonth === 6 || nextMonth === 9 || nextMonth === 11)) {
        nextDay = 1;
        nextMonth++;
    } else if (nextDay > 31 && (nextMonth === 1 || nextMonth === 3 || nextMonth === 5 || nextMonth === 7 || nextMonth === 8 || nextMonth === 10)) {
        nextDay = 1;
        nextMonth++;
    } else if (nextDay > 31 && nextMonth === 12) {
        nextDay = 1;
        nextMonth = 1;
        nextYear++;
    } else if (nextDay > 28 && nextMonth === 2) {
        nextDay = 1;
        nextMonth++;
    } else {
        alert = "Nhập sai rồi thằng nhóc";
    }
    document.getElementById("footer").innerHTML = tomorrow;
}