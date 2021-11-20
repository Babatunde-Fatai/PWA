

export function loadStar (name, bool, scene) {

var bot = "../particles";
BABYLON.ParticleHelper.BaseAssetsUrl = bot;

var myParticleSet = BABYLON.Tools.LoadFile(`${bot}/systems/${name}.json`, (data) => {});


 if (bool == true) {

 myParticleSet = new BABYLON.ParticleHelper.CreateAsync(name, scene).then(function(set) {
 set.start();
   });

 }else if(bool == false) {

 myParticleSet = new BABYLON.ParticleHelper.CreateAsync(name, scene).then(function(set) {
 set.stop();
 
});
 }else {

 }
    


}


//** UI Modules **//

  var form = document.createElement("FORM"); //need to be accessed by other functions

export function searchBox () {
//Search box
//HTML DOM //Also babylonjs GUI // checkbox and text//
  //form to host search tools

  form.setAttribute('type', 'search');
  form.setAttribute('id',   'formS');
  form.style.flexDirection= 'row';
  form.style.alignItems= 'right';
  form.style.display = 'flex';
  //form.style.position= 'relative';

  form.style.width= '100%';
  form.style.height= '0%';
  document.body.appendChild(form);
 // document.getElementById('container').appendChild(form);



//searchbox on form
  var searchbox = document.createElement("INPUT"); 
//searchbox HTML DOM
  searchbox.setAttribute('type', 'search');
  searchbox.setAttribute('id',   'search');
  // searchbox = document.styleSheets[0].cssRules; //Css rules?
  let keyframes = searchbox[0];
  searchbox.style.position= 'absolute';
  searchbox.style.display= 'block';
  searchbox.style.color= "black";
  searchbox.placeholder = "";
  searchbox.style.top= '10%'
  searchbox.style.borderRadius = "25px";
  searchbox.autocomplete = "off"; // no suggestion box from previous input
  searchbox.style.height = "50px"; 
  searchbox.style.border = "20px";
  searchbox.style.paddingLeft = "30px"
  searchbox.style.paddingRight = "35px"
  searchbox.style.fontSize= "20px";
  searchbox.style.outlineWidth = "5px";
  searchbox.style.outlineColor = "grey";

  searchbox.style.background = "black";
  searchbox.style.width = "0%";
  searchbox.style.left= "2%";
  searchbox.style.outlineStyle = "double";
  searchbox.onmouseover = function(){

    //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "1%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";


    };
    searchbox.onmouseleave = function(){
      
     //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "1%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    // if searchbox is idle after a while fold back, being empty or not affects duration for fold
    setTimeout(function () {

    if (searchbox.value.length == 0)
    { 

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";





    }else if (searchbox.value.length > 0) {
      setTimeout(function () {

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";
    


      } , 10000)

    }

    // } return console.error();
  } , 10000);

  
    };
  //document.body.appendChild(searchbox)
  form.appendChild(searchbox);
  

  //Image button
  var searchbutton = document.createElement("INPUT"); 
  searchbutton.setAttribute('type', 'image');
  searchbutton.setAttribute('id',   'myBtn');

  searchbutton.style.position= 'absolute';
  // searchbutton.style.background = "darkslategrey";
  searchbutton.style.left= "3%";
  searchbutton.style.float= "right";
  searchbutton.style.justifyContent= "right";
  searchbutton.style.top= '11.5%'
  searchbutton.style.width = "30px";
  searchbutton.style.height = "30px"; 
  searchbutton.style.justifyContent = "center";
  //searchbutton.style.borderRadius = "10px";
  searchbutton.src= "../textures/search-icon-s.png";
    //use real height instead
  searchbutton.onmouseover = function(){
    //searchbox effect
  //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "1%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    };
    searchbutton.onmouseleave = function(){
    
    //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "1%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    // if searchbox is idle after a while fold back, being empty or not affects duration for fold
     setTimeout(function () {

    if (searchbox.value.length == 0)
    { 

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";





    }else if (searchbox.value.length > 0) {
      setTimeout(function () {

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";
    


      } , 10000)

    }

    // } return console.error();
  } , 10000);


    };
    searchbutton.onclick = function(){ 
    
  }

  form.appendChild(searchbutton);     


  //Search engine to use
  const google = 'https://www.google.com/search?q=';

  function submitted(event) { //function for submission
    event.preventDefault();
    const url = google + '+' + searchbox.value;
    const win = window.open(url, '_self'); //_blank
    win.focus();
  }
  form.addEventListener('submit', submitted);

    
    
  

    
     ///////////////////////////////////////////////////
    //** Activate babyulonjs GUI Searchbox and icon **//
    ///////////////////////////////////////////////////

      //  var input = new BABYLON.GUI.InputText();

      //   input.width = 0.2;
      //   //input.list = "text-editors";
      //   input.onFocusSelectAll = true; //complete selection of text on focus
      //   input.focusedBackground = "black"; //background color when focused on
      //   input.textHighlightColor  = "#D5E0FF"; //text color when focused on
      //   input.maxWidth = "300px";
      //   input.height = "40px";
      //   //input.paddingRight = "100px";
      //   input.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
      //   input.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      //   input.top = "60px";
      //   input.left = "-50px";
      //   input.text = "Search the Web...";
      //   input.color = "white";
      //   input.textWrapping = true;
      //   var displayMessage = new BABYLON.GUI.TextBlock();
      //   displayMessage.top = -100;
      //   displayMessage.fontSize = 24;
      //   displayMessage.color = "white";
      //   input.onTextCopyObservable.add(function(){
      //       displayMessage.text = "copied..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });

      //   input.onTextCutObservable.add(function(){
      //       displayMessage.text = "cut..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });

      //   input.onTextPasteObservable.add(function(){
      //       displayMessage.text = "pasted..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });
        
        
      //    //check if to activate or deactivate
      //   if(condition == true) {

      //   advancedTexture.addControl(displayMessage);
      //   advancedTexture.addControl(input); 

      //   } else if(condition == false) {

      //   advancedTexture.removeControl(displayMessage);
      //   advancedTexture.removeControl(input);  
          
      //   } else {

      //   }

    
      ///////search icon/////

    // var searchIcon = BABYLON.GUI.Button.CreateImageOnlyButton("right", "../textures/search-icon-s.png");
    // searchIcon.width = "35px";
    // searchIcon.height = "35px";
    // searchIcon.thickness = 0;
    // searchIcon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    // searchIcon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    // searchIcon.top = "62px";
    // searchIcon.left = "-52px";
    // searchIcon.onPointerClickObservable.add(() => { 
    //     if (acceptInput) {
    //         //Button event - what you want to happen

    //     }
    // });

    // //check if to activate or deactivate
    // if(condition == true) {

    //   advancedTexture.addControl(searchIcon); 

    // } else if(condition == false) {

    //   advancedTexture.removeControl(searchIcon); 
      
    // } else {

    // }


    }


//HTML DOM //Also babylonjs GUI // checkbox and text//

export function createCheckbox (text , checkbox) {

  // HTMl Div Execution - more efficient for now than babylonjs GUI - check below for code for BjsGUI
    var label = document.createElement('LABEL')
    label.style.position= 'absolute';
    label.style.left= '1%';
    label.style.top= '90%';
    label.style.width = "100px";
    //label.style.height = "100px";
    document.body.appendChild(label);



    text = document.createElement("div"); 
    var newContent = document.createTextNode("Hide Screen UI")
    text.appendChild(newContent);
    text.style.position= 'absolute';
    text.style.left= '25%';
    text.style.top= '95.5%';
   // newDiv.style.background= 'white';
    text.style.fontSize= '12px';
    text.style.color= "white";
    label.appendChild(text);  


    //checkbox
    checkbox = document.createElement("input"); 
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id',   'hideUI');
    //checkbox.style.position= 'absolute';
    //checkbox.style.left= '2%';
    //checkbox.style.top= '95.5%';
    //checkbox.style.scale = "13px";
    //checkbox.style.width = "15px";
    //checkbox.style.height = "15px"; 
    //checkbox.style.fontSize= '150px';
    //checkbox.style.color= "black";
    checkbox.onclick = function(){ //checkbox events
    
      if(checkbox.checked == true) {

      form.style.display = "none";
      text.removeChild(newContent)
      newContent = document.createTextNode("Dispay Screen UI"); 
      text.appendChild(newContent);


    

      }else {

      form.style.display = "flex";
      text.removeChild(newContent)
      newContent = document.createTextNode("Hide Screen UI"); 
      text.appendChild(newContent);

      }
     

    };
    label.appendChild(checkbox);  





     ///////////////////////////////////////////////////
    //** Activate babyulonjs GUI Checkbox and text **//
    ///////////////////////////////////////////////////

    // //Create a panel to host the checkbox
    // var checkPanel = new BABYLON.GUI.StackPanel();
    // checkPanel.width = "200px";
    // checkPanel.isVertical = false;
    // checkPanel.left = "20px";
    // checkPanel.top = "350px";
    // checkPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    // checkPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    // advancedTexture.addControl(checkPanel);

    // //create checkbox
    // var checkbox = new BABYLON.GUI.Checkbox();
    // checkbox.width = "20px";
    // checkbox.height = "20px";
    // checkbox.isChecked = true;
    // checkbox.color = "white";
    // checkbox.onIsCheckedChangedObservable.add(function(value) {
    //     // if (skull) {
    //     //     //skull.useVertexColors = value;
    //     // }
    // });
    // checkPanel.addControl(checkbox);   

    //Textblock
    // var header = new BABYLON.GUI.TextBlock();
    // header.text = "Show / Hide Screen UI";
    // header.width = "180px";
    // header.marginLeft = "10px";
    // header.resizeToFit = true;
    // header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    // header.color = "white";
    // checkPanel.addControl(header); 

}

//Where I get my date from
export function createDate (text) {

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var text;
text.innerHTML = today;
console.log(dateTime)

}


//Scene descriptions and details
export function sceneDetail () {
    
  //Scene text detail
    var detail = document.createElement('div');
    detail.setAttribute('type', '')
    //Details expansion Logo
    var detailIcon = document.createElement("img"); 
    detailIcon.setAttribute('type', 'image');
    detailIcon.setAttribute('id',   'myDetails');
    detailIcon.style.left= "95%";
    detailIcon.style.top= '90%'
    detailIcon.style.width = "64px";
    detailIcon.style.height = "64px";
    detailIcon.src= "../textures/3d-model.png";
    detailIcon.title = "Learn More";
    detailIcon.style.position= 'absolute';
    var open = false;
    detailIcon.onclick = function (){
      //open/close tab
     tabs();

    }
    detailIcon.onmouseover = function (){

    detailIcon.src= "../textures/3d-model-02.png";

    }
    detailIcon.onmouseleave = function (){

    detailIcon.src= "../textures/3d-model.png";

    }
    form.appendChild(detailIcon);  

    //function for open/close info tab
  function tabs() {
  if (open == false){

    textBox.style.display= 'flex';
    open = true;
    console.log('opened tab')

      // if tab has been open for a while
    setTimeout(function () {
    if (open == true)
    { 

     textBox.style.display= 'none';

     open = false;
     

    }else {}} , 15000);


  }else {

    textBox.style.display= 'none';

    open = false;
    console.log('closed tab')


  }

  }
  
    var textBox = document.createElement("h2"); 
    var newContent = document.createTextNode("This spot is going to have details on the particular scene and any other info or addon"); 
    textBox.appendChild(newContent);
    textBox.style.position= 'absolute';
    textBox.setAttribute('id',   'infoBox');
    textBox.style.display= 'none';
    textBox.style.left= '77%';
    textBox.style.top= '75%';
   // newDiv.style.background= 'white';
    form.appendChild(textBox);  



    //Reload Image
    var babylonLogo = document.createElement("img"); 
    babylonLogo.setAttribute('type', 'image');
    babylonLogo.setAttribute('id',   'myBtn');
    // searchbutton.style.position= 'absolute';
    babylonLogo.style.position= 'absolute';
   // searchbutton.style.background = "darkslategrey";
    babylonLogo.style.left= "50%";
    babylonLogo.style.top= '90%'
    //searchbutton.style.scale = "1px";
    babylonLogo.style.width = "50px";
    babylonLogo.style.height = "50px"; 
    babylonLogo.src= "../textures/refresh.png";
    babylonLogo.onmouseover = function (){
    babylonLogo.src= "../textures/refresh02.png";
    babylonLogo.style.width = "45px";
    babylonLogo.style.height = "45px"; 
    }
    babylonLogo.onmouseleave = function (){
      babylonLogo.src= "../textures/refresh.png";
      babylonLogo.style.width = "50px";
      babylonLogo.style.height = "50px"; 
    }
    babylonLogo.onclick = function (){
      babylonLogo.src= "../textures/refresh.png";
      reload();
    }
  function reload() {
      reload = location.reload();
  }

    document.body.appendChild(babylonLogo);  
    
  //   //Search engine to use
  // const url = 'https://www.babylonjs.com/';

  // function submitted(event) { //function for submission
  //   event.preventDefault();
  //   const win = window.open(url, '_blank');
  //   win.focus();
  // }



}

export function pinScene(text) {

    //To check if user already saved a favourite page, so as to retain pin icon
    var fave = localStorage.getItem('pinScene'); //favourite/pinned scene

    
    var label = document.createElement('LABEL')
    label.style.position= 'absolute';
    label.style.left= '95%';
    label.style.top= '10%';
    form.appendChild(label);
  

     //deling with Pin icon
    var pinIcon = document.createElement("img");
    pinIcon.setAttribute('type', 'image');
    pinIcon.setAttribute('id',   'myPin');
    pinIcon.style.left= "100%";
    pinIcon.style.top= '10.5%'
    pinIcon.style.position= 'absolute';
    if(fave == null){ //checking if already saved
    
    //unpin icon
    pinIcon.style.width = "30px";
    pinIcon.style.height = "30px";
    pinIcon.src= "../textures/tack.png";
    pinIcon.title = "Pin this Scene"; //Tooltip
    var pin = true;
    

    }else {

      //pinned icon
    pinIcon.src= "../textures/pin.png";
    pinIcon.style.width = "30px";
    pinIcon.style.height = "30px";
    pinIcon.title = "Unpin this Scene"; //Tooltip

    var pin = false;



    }
    pinIcon.onclick = function (){

      selectScene();


    }
    pinIcon.onmouseover = function () {

    if(fave == null){

    pinIcon.style.width = "35px";
    pinIcon.style.height = "35px";



    }

    }
    pinIcon.onmouseleave = function (){
    
    if(fave == null){

    pinIcon.style.width = "30px";
    pinIcon.style.height = "30px";



    }

    }
    label.appendChild(pinIcon); 
    

  //function for pin/unpinning scenes
  function selectScene() {

    //Condition to switch icons
  if (fave == null){
    pinIcon.src= "../textures/pin.png";
    pinIcon.style.width = "30px";
    pinIcon.style.height = "30px";
    //newContent = document.createTextNode("Unpin Scene")

   // pin = true;
    
    var currentScene = localStorage.getItem('newScene'); //get current scene
    var fav = localStorage.setItem('pinScene', currentScene) //save it to storage
   // var farev = localStorage.removeItem('newScene') //remove saved scene
    console.log("Saved Scene: " + currentScene)

  }else {


   //change icon
    pinIcon.src= "../textures/tack.png";
    pinIcon.style.width = "30px";
    pinIcon.style.height = "30px";
    //newContent = document.createTextNode("Pin Scene")

    //pin = false;

    var fav = localStorage.removeItem('pinScene') //remove saved scene
    console.log("Unpinned from scene")

  }

 

  }


}

export function sceneBehaviours(){



  //activate behaviour for scene
  switch (activeScene) {
     case 0:

       break;
     case 1:
 


       break;
     case 2:
       break;
     case 3:
       break;
     case 4:
       break;
     case 5:
       break;
     case 6:
       break;
     case 7:
       break;
      case 8:
       
       break;
     case 9:
       break;
     case 10:
       break;
     case 11:
       
       break;
   
     default:
       break;
    }


}

//for two stones
export function sceneEffect(scene){
  
switch (scene) {
    case 12:
    
     // HTMl Div Execution - more efficient for now than babylonjs GUI - check below for code for BjsGUI
    var label = document.createElement('LABEL')
    label.style.position= 'absolute';
    label.style.left= '1%';
    label.style.top= '94%';
    label.style.width = "100%";
    //label.style.height = "100px";
    document.body.appendChild(label);

   //checkbox // to reverse material animation
    var checkbox2 = document.createElement("input"); 
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.setAttribute('id',   'reverseStone');
    checkbox2.style.position= 'absolute';
    checkbox2.style.left= '0%';
    checkbox2.style.top= '95%';
    checkbox2.style.scale = "13px";
    checkbox2.style.width = "15px";
    checkbox2.style.height = "15px"; 
    checkbox2.style.fontSize= '150px';
    checkbox2.style.color= "white";
    checkbox2.onclick = function(){ //checkbox events

      if(checkbox2.checked == true) {
        
        var reverse = localStorage.setItem('reverser', JSON.stringify(checkbox2.style.top));

        //reverse == true;

      }else {
        var reverse = localStorage.removeItem('reverser');

        //reverse == false;
    

      }
     

    };
    label.appendChild(checkbox2); 

    var text = document.createElement("div"); 
    var newContent = document.createTextNode("Reverse Animation")
    text.appendChild(newContent);
    text.style.position= 'absolute';
    text.style.left= '2%';
    text.style.top= '90%';
   // newDiv.style.background= 'white';
    text.style.fontSize= '12px';
    text.style.color= "white";
    label.appendChild(text);  
    break;
  case 10:

    var checkbox2 = document.createElement("input"); 
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.setAttribute('id',   'reverseStone');
    checkbox2.style.position= 'absolute';
    checkbox2.style.left= '2%';
    checkbox2.style.top= '90%';
    checkbox2.style.scale = "13px";
    checkbox2.style.width = "15px";
    checkbox2.style.height = "15px"; 
    checkbox2.style.fontSize= '150px';
    checkbox2.style.color= "white";
    checkbox2.onclick = function(){ //checkbox events

      if(checkbox2.checked == true) {
        
        //var reverse = localStorage.setItem('reverser', JSON.stringify(checkbox2.style.top));

        //reverse == true;

      }else {
        //var reverse = localStorage.removeItem('reverser');

        //reverse == false;
    

      }
    };
    document.body.appendChild(checkbox2); 

  break;
  case 15:

  //checkbox //to toggle shape
    var checkbox2 = document.createElement("input"); 
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.setAttribute('id',   'changeShape');
    checkbox2.style.position= 'absolute';
    checkbox2.style.left= '2%';
    checkbox2.style.top= '90%';
    checkbox2.style.scale = "13px";
    checkbox2.style.width = "15px";
    checkbox2.style.height = "15px"; 
    checkbox2.style.fontSize= '150px';
    checkbox2.style.color= "white";
    checkbox2.onclick = function(){ //checkbox events

      if(checkbox2.checked == true) {
        
        localStorage.removeItem('shaper');
        var changeShape = localStorage.setItem('shaper', JSON.stringify(checkbox2.style.top)); 

        //reverse == true;

      }else {

        var changeShape = localStorage.removeItem('shaper');

        //reverse == false;
    

      }
     

    };
    document.body.appendChild(checkbox2); 


    break;
  case 14:
    
    
    break;
  default:
    break;
}

    


}

/////////////////UNUSED//////////////////////////


// //function to generate a random integer between 0 and 1 (both excluded ofcourse)
// //math.floor gets rid of decimals - approx.

// function randomInt(limit) {

//  return Math.floor(Math.random() * Math.floor(limit))
// }

// //Now item to select random items from the array

// export function randomScene (sceneArray) {

//  var index = randomInt(sceneArray.length)

//  //get the chosen scene
//  console.log("The Loaded Scene is: " + index)
// // return sceneArray[index];
//  return index;

// }



//load star by name


//////////////////////////////////////
