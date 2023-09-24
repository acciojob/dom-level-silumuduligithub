//your JS code here. If required.
let level = document.getElementById("level");
let count = 0;
while(level.tagName != "HTML"){
    level = level.parentNode;
    count++;
}
count++;
window.alert("The level of the element is: "+count);
