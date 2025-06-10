const first = prompt("enter body bacgroundcolor");

let second = prompt("enter text color");

let newElement = document.getElementById("color");

newElement.style.color = second;
document.body.style.backgroundColor = first;
