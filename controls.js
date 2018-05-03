var color =document.getElementById("color");
//LEVEL 2a//

color.addEventListener("change", function()  {
    document.getElementById("preview").style.backgroundColor = color.value;
});

//LEVEL 2b//
document.getElementById("numberB").addEventListener("click", function() {
     changeType("number");
});

document.getElementById("rangeB").addEventListener("click", function() {
     changeType("range");
});

//LEVEL 2c//
document.getElementById("range1").addEventListener("change", function() {
    document.getElementById("hair").style.width= document.getElementById("range1").value + "%";
});

document.getElementById("range2").addEventListener("change", function() {
    document.getElementById("eyes").style.width= document.getElementById("range2").value + "%";
});

document.getElementById("range3").addEventListener("change", function() {
    document.getElementById("nose").style.width= document.getElementById("range3").value + "%";
});

document.getElementById("range4").addEventListener("change", function() {
    document.getElementById("mouth").style.width= document.getElementById("range4").value + "%";
});

//LEVEL 3//
var hairI = 1;
var eyeI = 1;
var noseI = 1;
var mouthI = 1;

document.getElementById("hair").addEventListener("click", function() {
    hairI ++;
    if(hairI == 4){
        hairI = 1;
    }
    document.getElementById("hair").src="img/hair"+ hairI + ".png";
});

document.getElementById("eyes").addEventListener("click", function() {
    eyeI ++;
    if(eyeI == 4){
        eyeI = 1;
    }
    document.getElementById("eyes").src="img/eyes"+ eyeI + ".png";
});

document.getElementById("nose").addEventListener("click", function() {
    noseI ++;
    if(noseI == 4){
        noseI = 1;
    }
    document.getElementById("nose").src="img/nose"+ noseI + ".png";
});

document.getElementById("mouth").addEventListener("click", function() {
    mouthI ++;
    if(mouthI == 4){
        mouthI = 1;
    }
    document.getElementById("mouth").src="img/mouth"+ mouthI + ".png";
});

//LEVEL 4a//

document.getElementById("plusB").addEventListener("click", function() {
    createFace();    
});

//LEVEL 4b//


document.getElementById("randomB").addEventListener("click", function() {
    randomFace() 
});

//LEVEL 5a//
function createFace() {
    
    var newDiv= document.createElement("div")
    newDiv.className = "divCopy"
    newDiv.style.backgroundColor= document.getElementById("preview").style.backgroundColor;
    
    var newImg1= document.createElement("img");
    var newImg2= document.createElement("img");
    var newImg3= document.createElement("img");
    var newImg4= document.createElement("img");
    
    newImg1.src= document.getElementById("hair").src;
    newImg1.className="items"
    newImg1.style.cssText=document.getElementById("hair").style.cssText;
    newDiv.appendChild(newImg1);
    
    newImg2.src= document.getElementById("eyes").src;
    newImg2.className="items"
    newImg2.style.cssText=document.getElementById("eyes").style.cssText;
    newDiv.appendChild(newImg2);

    newImg3.src= document.getElementById("nose").src;
    newImg3.className="items"
    newImg3.style.cssText=document.getElementById("nose").style.cssText;
    newDiv.appendChild(newImg3);
    
    newImg4.src= document.getElementById("mouth").src;
    newImg4.className="items"
    newImg4.style.cssText=document.getElementById("mouth").style.cssText;
    newDiv.appendChild(newImg4);


    document.getElementById("display").appendChild(newDiv);
}

function randomFace() {
    var ImgN1 = Math.round(Math.random()*2)+1;
    var ImgN2 = Math.round(Math.random()*2)+1;
    var ImgN3 = Math.round(Math.random()*2)+1;
    var ImgN4 = Math.round(Math.random()*2)+1;
    
    document.getElementById("hair").src="img/hair" + ImgN1 +".png";
    document.getElementById("eyes").src="img/eyes" + ImgN2 +".png";
    document.getElementById("nose").src="img/nose" + ImgN3 +".png";
    document.getElementById("mouth").src="img/mouth" + ImgN4 +".png";
}


//LEVEL 5b//

function changeType(type) {
    document.getElementById("range1").type = type;
    document.getElementById("range2").type = type;
    document.getElementById("range3").type = type;
    document.getElementById("range4").type = type;
}

//LEVEL 6//

document.getElementById("autoB").addEventListener("click", function() {
   
      var myInterval =  setInterval(function() {
            randomFace();
            createFace();
        },500);
   
});
  
document.getElementById("stopB").addEventListener("click", function(){
 
    clearInterval(myInterval);
});




































