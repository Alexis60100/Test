// Main letiables


let rootlets = document.querySelector(':root');
let background2 = document.getElementById('background2');

let container = document.querySelector('.container');
let containerWidth = 0;
let containerWidthMax = 35;

let arrowContainer = document.querySelector('.arrowContainer');
let arrowContainerMargin = 29;
let arrowContainerMarginMax = 70;


let bar = document.querySelector('.bar img');
let barWidth = 0;
let barWidthMax = 60;

let lockon = document.getElementById('lockon');
let lockonBlinks = 0;
let lockonBlinksMax = 3;
let lockonAlpha = 0;

let lockonLocker = false;
let lockonOneShot = false;

let audio = new Audio('snd/wipehd_flyer.wav'); // new for wav files
let element;


// On Click

document.querySelector(".arrow").addEventListener("click", ShowInformation);

function ShowInformation(){

    if(lockonOneShot == false){    
        lockonOneShot = true;
        audio.play();
        BoxAnimation();
        ArrowAnimation();
        BarAnimation();
        BackgroundAnimation();
        ShowText1();
    }
}

// Animations


function BoxAnimation(){
    
    let timer = setInterval( function() {
        
        if(containerWidth <= containerWidthMax){
            container.style.visibility = "visible";
            containerWidth += 1;
            container.style.width = containerWidth + "em";
        }

    }, 10);    

}

function ArrowAnimation(){
    let timer = setInterval( function() {
        
        if(arrowContainerMargin <= arrowContainerMarginMax){
            arrowContainerMargin += 1;
            arrowContainer.style.marginLeft = arrowContainerMargin + "em";
        }

    }, 7);    

}

function BarAnimation(){
    
    let timer = setInterval( function() {
        
        if(barWidth <= barWidthMax){
            barWidth += 1;
            bar.style.width = barWidth + "em";
        }

        if(barWidth >= barWidthMax && lockonLocker ==  false){
            lockonLocker = true;
            LockOnAnimation();
        }

    }, 7);
    

}

function LockOnAnimation(){

    let timer = setInterval( function() {

        if(lockon.style.visibility == "visible"){
            if(lockonBlinks <= lockonBlinksMax){
                lockonBlinks += 1;
                lockon.style.visibility = "hidden";
            }
        } else{
            lockon.style.visibility = "visible";
        }

    }, 150);



    let timer2 = setInterval( function() {

        if(lockon.style.opacity < 1){
            lockonAlpha += 0.01;
            lockon.style.filter = "opacity("+lockonAlpha+")" + "invert(100%)";
            rootlets.style.setProperty('--lockonAlpha', lockonAlpha);
        }
    }, 5);

}


// Background Colors

let timerColorBase = 1;
let timerColor1;
let timerColor2;
let minOpacity = 0.25;
let maxOpacity = 1;

let reverseTimer1 = false;
let reverseTimer2 = false;

function BackgroundAnimation(){

    timerColor1 = 0;
    timerColor2 = 1;

    let timer = setInterval( function() {

        document.getElementById('timer').innerHTML = timerColor1;
        document.getElementById('timer').style.visibility = "hidden";
            
        if(reverseTimer1 == false){
            timerColor1 -= 0.01;
        } else {
            timerColor1 += 0.01;
        }

        if(reverseTimer2 == false){
            timerColor2 -= 0.01;
        } else {
            timerColor2 += 0.01;
        }

        rootlets.style.setProperty('--alphaValue1', timerColor1);
        rootlets.style.setProperty('--alphaValue2', timerColor2);

        if(timerColor1 <= minOpacity){
            reverseTimer1 = true;
            timerColor2 = 1;
        }
        if(timerColor1 >= maxOpacity){
            reverseTimer1 = false;
        }

        if(timerColor2 <= minOpacity){
            reverseTimer2 = true;
            timerColor1 = 1;
        }
        if(timerColor2 >= maxOpacity){
            reverseTimer2 = false;
        }
        
        /*if (timerColor1 === 0 || timerColor2 === 0) {
            clearInterval(timer);
        }*/

    }, 10);
}






// Identity

let characters1 = "initiating.firstname..............................................................";
characters1 = characters1.split(''); // Enregistre la chaine de caractères dans un tableau

let characters2 = "getting.lastname..................................................................";
characters2 = characters2.split('');

let characters3 = "warning:unable.to.get.content.............................................";
characters3 = characters3.split('');

let characters4 = "unexpected:protection.active..............................................";
characters4 = characters4.split('');

let characters5 = "error:fetching.is.incomplete..............................................";
characters5 = characters5.split('');



let identified = "...............................target identified....................................";
identified = identified.split(''); // Enregistre la chaine de caractères dans un tableau

let firstname = "..alexis";
firstname = firstname.split('');

let lastname = "....chapuis"; 
lastname = lastname.split('');

//let adress = "......could not connect to data"
let adress = "......8 rue d'angivillers, 60420 léglantiers"
adress = adress.split('');

//let phone = "........sensitive data detected" 
let phone = "........0645683560"
phone = phone.split('');

//let mail = "..........line:[insert:@] is incorrect";
let mail = "..........alexis210496[@]hotmail.fr"
mail = mail.split('');




// Text Content

function ShowText1(){
    if (identified.length > 0){
        document.getElementById("other").textContent += identified.shift(); // Renvoie la 1ère valeur du tableau et modifie sa taille
        setTimeout(ShowText1,10);
    }

    if(identified.length == 0){
        ShowDummy1();
    }

}


function ShowDummy1(){
    if (characters1.length > 0){
        document.getElementById("firstname").textContent += characters1.shift(); // Renvoie la 1ère valeur du tableau et modifie sa taille
        setTimeout(ShowDummy1,10);
    }

    if(characters1.length == 0){
        document.getElementById("firstname").textContent = "";
        ShowText2();
    }

}


function ShowText2(){

    if (firstname.length > 0){
        document.getElementById("firstname").textContent += firstname.shift();
        setTimeout(ShowText2,100);
    }

    if(firstname.length == 0){
        ShowDummy2();
    }
}



function ShowDummy2(){

    if (characters2.length > 0){
        document.getElementById("lastname").textContent += characters2.shift();
        setTimeout(ShowDummy2,10);
    }

    if(characters2.length == 0){
        document.getElementById("lastname").textContent = "";
        ShowText3();
    }
}


function ShowText3(){

    if (lastname.length > 0){
        document.getElementById("lastname").textContent += lastname.shift();
        setTimeout(ShowText3,100);
    }

    if(lastname.length == 0){
        ShowDummy3();
    }
}

function ShowDummy3(){

    if (characters3.length > 0){
        document.getElementById("adress").textContent += characters3.shift();
        setTimeout(ShowDummy3,50);
    }

    if(characters3.length == 0){
        document.getElementById("adress").textContent = "";
        ShowText4();
    }
}


function ShowText4(){

    if (adress.length > 0){
        document.getElementById("adress").textContent += adress.shift();
        setTimeout(ShowText4,50);
    }

    if(adress.length == 0){
        ShowDummy4();
    }
}

function ShowDummy4(){

    if (characters4.length > 0){
        document.getElementById("phone").textContent += characters4.shift();
        setTimeout(ShowDummy4,50);
    }

    if(characters4.length == 0){
        document.getElementById("phone").textContent = "";
        ShowText5();
    }
}


function ShowText5(){

    if (phone.length > 0){
        document.getElementById("phone").textContent += phone.shift();
        setTimeout(ShowText5,50);
    }

    if(phone.length == 0){
        ShowDummy5();
    }
}


function ShowDummy5(){

    if (characters5.length > 0){
        document.getElementById("mail").textContent += characters5.shift();
        setTimeout(ShowDummy5,50);
    }

    if(characters5.length == 0){ 
        document.getElementById("mail").textContent = "";
        ShowText6();
    }

}

function ShowText6(){

    if (mail.length > 0){
        document.getElementById("mail").textContent += mail.shift();
        setTimeout(ShowText6,100);
    }
}
