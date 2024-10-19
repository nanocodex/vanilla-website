/*
    An analogy to describe what is happening:
    The name of the demon gets longer the farther you are from it.
    Call its name and it will find you.

    Literal explanation:
    The program compares the "src" attribute of its script tag in the html file with the absolute script path variable.
    It then uses the difference, the number of "../" used in src, to determine the working root without having to hardcode the absolute file path.
*/

const absoluteScriptPath = "assets/javascript/working-root.js";
// When referencing this file, always give it the id of "#wr-script" for identification by the program
const workingRoot = document.getElementById("wr-script").getAttribute("src").split(absoluteScriptPath)[0];
const filePath = window.location.pathname;


function replaceFilePath() {
    document.getElementById("filePath").innerHTML = filePath;
}

function replaceWorkingRootPath() {
    let workingRootPath = filePath.split("/");
    const dirCount = workingRoot.split("../").length;

    for (let i = 0; i < dirCount; i++) {
        workingRootPath.pop();
    }
    workingRootPath = workingRootPath.toString().replaceAll(",", "/");

    document.getElementById("workingRootPath").innerHTML = workingRootPath;
}

function workingRootSrc() {
    for (let i = 0; i < document.getElementsByClassName("workingRootSrc").length; i++) {
        const element = document.getElementsByClassName("workingRootSrc")[i];

        // Only changes the href/src attribute if it already exists
        if (element.getAttribute("href") != undefined) {            
            element.setAttribute("href", workingRoot + element.getAttribute("href"));
        } else if (element.getAttribute("src") != undefined) {
            element.setAttribute("src", workingRoot + element.getAttribute("src"));            
        }
    }
}

// I only added an arrow function here to test it out
window.onload = () => {
    // For debug purposes only
    // console.log("Window src: " + workingRoot);
    replaceFilePath();
    replaceWorkingRootPath();
    workingRootSrc();
}