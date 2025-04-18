var myBtn4= document.getElementById('start');
const roleDiv = document.getElementById('role');

myBtn4.onclick = function () {
    var ward = parseInt(Math.random() * 12) + 1;

    if (ward == 1) {
        roleDiv.textContent = "合図確認、点、ホームドアよし、出発進行、定時";
    } else if (ward == 2) {
        roleDiv.textContent = "BCよし、ホームドア開、滅、出発進行、定時";
    } else if (ward == 3) {
        roleDiv.textContent = "閉塞進行";
    } else if (ward == 4) {
        roleDiv.textContent = "中継進行";
    } else if (ward == 5) {
        roleDiv.textContent = "場内進行";
    } else if (ward == 6) {
        roleDiv.textContent = "予告7番";
    } else if (ward == 7) {
        roleDiv.textContent = "進路7番";
    } else if (ward == 8) {
        roleDiv.textContent = "制限60";
    } else if (ward == 9) {
        roleDiv.textContent = "制限解除";
    } else if (ward == 10) {
        roleDiv.textContent = "Pよし";
    } else if (ward == 11) {
        roleDiv.textContent = "パターン接近";
    } else if (ward == 12) {
        roleDiv.textContent = "パターン解除";
    }
}