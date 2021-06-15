let counter = 0;
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

plus.addEventListener("click", function() {
    counter += 1;
    document.getElementById("count").innerHTML = (counter);
    if(counter < 0) {
        document.getElementById("count").style.color = "red";
    }else if(counter > 0) {
        document.getElementById("count").style.color = "green";
    }else {
        document.getElementById("count").style.color = "black";
    }
});

minus.addEventListener("click", function() {
    counter -= 1;
    document.getElementById("count").innerHTML = (counter);
    if(counter < 0) {
        document.getElementById("count").style.color = "red";
    }else if(counter > 0) {
        document.getElementById("count").style.color = "green";
    }else {
        document.getElementById("count").style.color = "black";
    }
});



