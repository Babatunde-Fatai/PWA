/////////////////////////////////Service worker wahala///////////////////

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  ///////////////////////////////////////////////////////////////////////////

//get the iframe in HTML
var iframe = document.getElementById('#iframe');
var maxScenes = -1; // number of scenes - always change as scene increases
var max = maxScenes + 1; //for random number selector
var min = -1; // starts from zero, chosese between values

// // Random number Between any two numbers: max and min
var activeScene; //Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("HERE IS the number choosen " + activeScene)

//function to change iframe src
function changeScene(sceneUrl) {
    document.getElementById('iframe').src = sceneUrl;
}

// let userSettings = await chrome.action.getUserSettings();
// console.log(`Is the action pinned? ${userSettings.isOnToolbar ? 'Yes': 'No'}.`);

//if you have time implement Async
var fave = localStorage.getItem('pinScene'); //favourite/pinned scene

if (fave == null) {


    let count = 0;

    var forFave = localStorage.getItem('formerSave');

    if (forFave == null) {
        count = 0;
        activeScene = count;

        localStorage.removeItem('formerSave')

        var nextScene = localStorage.setItem('formerSave', JSON.stringify(activeScene));

        //check if former save exist

        //if former save == null, active = 0, else active = formersave + 1 : next save


    } else {

        let c = localStorage.getItem('formerSave');
        localStorage.removeItem('formerSave')


        if (c >= max) {
            count = 0;
            activeScene = parseInt(count);

        } else {
            count = parseInt(c) + 1;
            activeScene = parseInt(count);


        }

        localStorage.removeItem('formerSave')
        console.log("forfave == null")


        var nextScene = localStorage.setItem('formerSave', JSON.stringify(activeScene));

    }



    console.log('This is the saved scene loaded ' + activeScene);

    localStorage.removeItem('newScene') //clear any saved scene
        //saving current scene
    var newScene = localStorage.setItem('newScene', JSON.stringify(activeScene)); //Always save new scenes
    console.log("This is the new Fave: " + JSON.stringify(activeScene))


} else {

    activeScene = parseInt(fave); //please remember to convert from string
    localStorage.removeItem('formerSave')

    console.log('This is the saved scene loaded ' + activeScene);

    localStorage.removeItem('newScene') //clear any saved scene
        //saving current scene
    var newScene = localStorage.setItem('newScene', JSON.stringify(activeScene)); //Always save new scenes
    console.log("This is the new Fave: " + JSON.stringify(activeScene))

}

//clear Data on close window
window.onbeforeunload = () => {

    sessionStorage.removeItem('formerSave') //clear any saved scene
        //let c = sessionStorage.getItem('formerSave');

}



//switch betwenn respective iframe scenes

switch (activeScene) {
    case 0:

        changeScene("../scenes/furballScene.html");

        break;
    case 1:

        changeScene("../scenes/astroidscene.html");
        break;
    case 2:
        changeScene("../scenes/specularBallsScene.html");


        break;
    case 3:

        changeScene("../scenes/spiralSpringScene.html");

        break;
    case 4:
        changeScene("../scenes/monkeyScene.html");
        break;
    case 5:
        changeScene("../scenes/glowScene.html");
        break;
    case 6:
        changeScene("../scenes/skyboxScene.html");
        break;
    case 7:
        changeScene("../scenes/islandScene.html");

        break;
    case 8:
        changeScene("../scenes/digitalRainScene.html");

        break;
    case 9:
        changeScene("../scenes/sunScene.html");

        break;
    case 10:
        changeScene("../scenes/daggerScene.html");
        break;
    case 11:
        changeScene("../scenes/twinStoneScene.html");
        break;
    case 12:
        changeScene("../scenes/dnaScene.html");
        break;
    case 13:
        changeScene("../scenes/furballScene.html");
        break;
    case 14:
        changeScene("../scenes/furpinkScene.html");
        break;
    case 15:
        changeScene("../scenes/galaxiaScene.html");
        break;
    case 16:
        changeScene("../scenes/waveScene.html");
        break;
    case 17:
        changeScene("../scenes/sketchFourier.html");

        break;
    case 18:
        changeScene("../scenes/sketchPicFourier.html");

        break;
    default:
        changeScene("../scenes/timeScene.html");
        break;

}