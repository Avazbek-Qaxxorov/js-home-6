let text = prompt("Enter text: ");
function bomb(str) {
    text = str
    if (str.includes("bomp")) {
        return "Duck!!!";
    } else {
        return "There isn't bomb relax.";
    }
}
document.write(bomb(text))