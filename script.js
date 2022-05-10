let ans = Array(4).fill(-1);
function click10() {
    ans[0] = 0;
    document.getElementById("10").classList.add("selected");
    document.getElementById("11").classList.remove("selected");
}
function click11() {
    ans[0] = 1;
    document.getElementById("10").classList.remove("selected");
    document.getElementById("11").classList.add("selected");
}
function click20() {
    ans[1] = 0;
    document.getElementById("20").classList.add("selected");
    document.getElementById("21").classList.remove("selected");
}
function click21() {
    ans[1] = 1;
    document.getElementById("20").classList.remove("selected");
    document.getElementById("21").classList.add("selected");
}
function submit() {
    if (ans[0] == 0 && ans[1] == 0 && document.getElementById("q2").value.toLowerCase() == "dream") {
        window.open("https://www.youtube.com/watch?v=Gp9gFXf56yQ", "_blank");
        location.href = "tru_face.html";
    }
    else {
        alert('try again bozo');
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
}