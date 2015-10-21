
var jepAuthFixInterval = 25;

jepAuthFix();

function jepAuthFix() {
    // if there is no rauth-registration element then there's nothing we can do
    var authElements = document.getElementsByClassName("rauth-registration");
    if (authElements.length == 0) {
        console.log('jepAuthFix: no rauth-registration elements found, aborting');
        return;
    }

    // get the current display state
    var authElement = authElements[0];
    var currentDisplayState = authElement.style.display;
    
    // can't fiddle with the display state until it's "block"
    if (currentDisplayState.length == 0) {
        console.log('jepAuthFix: rauth-registration display not yet set, waiting ' + jepAuthFixInterval + 'ms before retrying');
        setTimeout(jepAuthFix, jepAuthFixInterval);
        return;
    }

    // set the style to none
    console.log('jepAuthFix: switching rauth-registration display state from "' + currentDisplayState + '" to "none"');
    authElement.style.display = "none";
    console.log('jepAuthFix: finished');
}
