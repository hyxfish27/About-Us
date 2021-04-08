
const selectedPerson = document.getElementsByClassName('person');
var i;
// console.log(selectedPerson);

for (i = 0; i < selectedPerson.length; i++) {
    selectedPerson[i].addEventListener('click', onceHandler);
    const t2 = document.getElementById('t2');
    selectedPerson[i].addEventListener("mouseover", function (event) {
        // highlight the mouseenter target
        console.log(event.target.id)
        t2.className = "t2"
        var A = event.target.id
        switch (A) {
            case 'p1':
                t2.className = "0"
                break;
            case 'p2':
                t2.className = "1"
                break;
            case 'p3':
                t2.className = "2"
                break;
            case 'p4':
                t2.className = "3"
                break;
            case 'p5':
                t2.className = "4"
                break;
            case 'p6':
                t2.className = "5"
                break;
        }
    }, false);
}

document.getElementById('intro').style.display = "none";

// var introText = document.getElementById('intro_text');
var introName = document.getElementById('intro_name');
var introAge = document.getElementById('intro_age');
var introJob = document.getElementById('intro_job');
var introInterest = document.getElementById('intro_interest');
var introFriendShip = document.getElementById('intro_friendship');
var introOne = document.getElementById('intro_one');
// var Img = document.getElementById('intro_img');
var Img = document.getElementById('personal_img');
var flag = 1;

function onceHandler(event) {
    flag = 0;
    const t2 = document.getElementById('t2');
    var current_array_ = t2.className;
    Img.style.backgroundImage = 'url(' + PersonalIntro[current_array_].photo + ')';
    Img.style.backgroundPosition = PersonalIntro[current_array_].position;
    // alert("Wath ", event);
    // console.log(current_array_)

    document.getElementById('intro').style.display = "";

    document.getElementById('personal_img').style.animation = "try2 0.8s ease-out";
    document.getElementById('personal_intro').style.animation = "try 0.8s ease-out";
    introName.innerText = PersonalIntro[current_array_].name;
    introAge.innerText = PersonalIntro[current_array_].age;
    introJob.innerText = PersonalIntro[current_array_].job;
    introInterest.innerText = PersonalIntro[current_array_].interest;
    introFriendShip.innerText = PersonalIntro[current_array_].friendship;
    introOne.innerText = PersonalIntro[current_array_].intro;

}

$('html').click(function () {
    if (flag != "0") {
        // Hide the menus if visible
        document.getElementById('intro').style.display = "none";
    }
    else {
        flag = "1";
    }
});

