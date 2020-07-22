window.addEventListener('DOMContentLoaded', () => {
document.forms.login.email.addEventListener("blur", emailfunc);
function emailfunc() {
    var email = document.forms.login.email;// target by name attribute html
    var valid;
    var email_pattern = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]/;
    if (!email.value || email_pattern.test(email.value) == false) {// لو مافيش ميل دخل او الميل دخل غلط
        email.className = "error_style";
        email.nextElementSibling.style.display = "block", email.nextElementSibling.style.color = "red";
        email.nextElementSibling.innerHTML = "email can't be blank or your email is not valis";
        valid = false;
    }
    else {
        email.className = "success_style";

        email.nextElementSibling.style.display = "block", email.nextElementSibling.style.color = "green";
        email.nextElementSibling.innerHTML = "email accepted";
        valid = true;
    }

}


document.forms.login.password.addEventListener("blur", passwordfunc);
function passwordfunc() {
    var password = document.forms.login.password;
    var valid;


    if (!password.value || password.value.length < 8) {
        password.className = "error_style";
        password.nextElementSibling.style.display = "block", password.nextElementSibling.style.color = "red";
        password.nextElementSibling.innerHTML = "password can't be blank and must be more than 8 charachters";
        valid = false;
    }


    else {
        password.className = "success_style";
        password.nextElementSibling.style.display = "block", password.nextElementSibling.style.color = "green";
        password.nextElementSibling.innerHTML = "password accepted";
        valid = true;
    }

}


document.forms.login.addEventListener("submit", function (event) {
    event.preventDefault();
    emailfunc();
    passwordfunc();
});


//---------------------------- registration form -----------------------------------------------------
document.forms.contact_us.contact_name.addEventListener("blur", fullname)
document.forms.register.fullname.addEventListener("blur", fullname)
function fullname(fullname_input) {

    var fullname_pattern = /[A-Za-z/ A-Za-z]/;
    var valid;

    if (fullname_input.target) {    
        fullname_input = this;
        console.log(fullname_input.target);
// el function di 3ashan teshawer 3ala el input eli ana 3ayza ashaghal 3aleh el function
// bel tali 7a3raf ashaghal el function di 3ala ay name input f ay form msh form mo3ayana

    }



    if (!fullname_input.value || fullname_input.value.length < 8 || fullname_pattern.test(fullname_input.value) == false) {
        fullname_input.className = "error_style";
        fullname_input.nextElementSibling.style.display = "block", fullname_input.nextElementSibling.style.color = "red";
        fullname_input.nextElementSibling.innerHTML = "fullname can't be blank and must be more than 8 charachters";
        valid == false;
    }
    else {
        fullname_input.className = "success_style";
        fullname_input.nextElementSibling.style.display = "block", fullname_input.nextElementSibling.style.color = "green";
        fullname_input.nextElementSibling.innerHTML = " hello " + fullname_input.value;
        valid == true;
    }
}

document.forms.register.registeremail.addEventListener("blur", register_mail)
function register_mail() {
    var email_input = document.forms.register.registeremail;
    var email_pattern = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]/;
    var valid;
    if (!email_input.value || email_pattern.test(email_input.value) == false) {
        email_input.className = "error_style";
        email_input.nextElementSibling.style.display = "block", email_input.nextElementSibling.style.color = "red";
        email_input.nextElementSibling.innerHTML = "email can't be blank or your email is not valis";
        valid == false;
    }
    else {
        email_input.className = "success_style";
        email_input.nextElementSibling.style.display = "block", email_input.nextElementSibling.style.color = "green";
        email_input.nextElementSibling.innerHTML = "email accepted";
        valid == true
    }
}

document.forms.register.registerPassword.addEventListener("blur", register_password)
function register_password() {
    var reg_pass_input1 = document.forms.register.registerPassword;
    var valid;
    if (reg_pass_input1.value.length < 8) {
        reg_pass_input1.className = "error_style";
        reg_pass_input1.nextElementSibling.style.display = "block", reg_pass_input1.nextElementSibling.style.color = "red";
        reg_pass_input1.nextElementSibling.innerHTML = "password can't be blank and must be more than 8 charachters";
        valid == false;
    }
    else {
        reg_pass_input1.className = "success_style";
        reg_pass_input1.nextElementSibling.style.display = "block", reg_pass_input1.nextElementSibling.style.color = "green";
        reg_pass_input1.nextElementSibling.innerHTML = "password accepted";
        valid == true
    }
}

document.forms.register.confirmPassword.addEventListener("blur", confirm_password)
function confirm_password() {
    var confirmPassword = document.forms.register.confirmPassword;
    var first_password = document.forms.register.registerPassword;
    var valid;
    if (confirmPassword.value.length < 8 || first_password.match(confirmPassword.value) == false) {
        confirmPassword.className = "error_style";
        confirmPassword.nextElementSibling.style.display = "block", confirmPassword.nextElementSibling.style.color = "red";
        confirmPassword.nextElementSibling.innerHTML = "password can't be blank passwords must match";
        valid = false;
    }
    else {
        confirmPassword.className = "success_style";
        confirmPassword.nextElementSibling.style.display = "block", confirmPassword.nextElementSibling.style.color = "green";
        confirmPassword.nextElementSibling.innerHTML = "password accepted";
        valid = true;
    }
}

function radio_select_checkbox() {
    var radio_female = document.forms.register.female;
    var radio_male = document.forms.register.male;
    var select = document.forms.register.selection;
    var options_index = select.options[select.selectedIndex].value;
    var checkbox_music = document.forms.register.music;
    var checkbox_football = document.forms.register.football;
    var checkbox_reading = document.forms.register.reading;
    var valid;
    if (!radio_female.checked && !radio_male.checked) {
        document.getElementById('error_msg_radio').style.display = "block", document.getElementById('error_msg_radio').style.color = "red";
        document.getElementById('error_msg_radio').innerHTML = "please choose your gender";
        valid = false;
    }

    if (options_index == 0) {
        select.nextElementSibling.style.display = "block", select.nextElementSibling.style.color = "red";
        select.nextElementSibling.innerHTML = "please select your country";
        valid = false;
    }

    if (options_index) {
        select.nextElementSibling.style.display = "block", select.nextElementSibling.style.color = "green";
        select.nextElementSibling.innerHTML = "your country is " + options_index;
    }

    if (!checkbox_music.checked && !checkbox_football.checked && !checkbox_reading.checked) {
        document.getElementById('checkbox_errorMessage').style.display = "block", document.getElementById('checkbox_errorMessage').style.color = "red";
        document.getElementById('checkbox_errorMessage').innerHTML = "plz check your interest";
        valid = false;
    }

    else {
        alert('congratulation');
    }
}

document.forms.contact_us.contact_email.addEventListener("blur", contactus)
function contactus() {
    var contact_mail = document.forms.contact_us.contact_email;
    var email_pattern = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]/;
    var contact_name = document.forms.contact_us.contact_name;
    var valid;
    if (!contact_mail || email_pattern.test(contact_mail.value) == false || contact_mail.value < 5) {
        contact_mail.className = "error_style";
        contact_mail.nextElementSibling.style.display = "block", contact_mail.nextElementSibling.style.color = "red";
        contact_mail.nextElementSibling.innerHTML = "plz enter a valid mail";
        valid = false;
    }
    else {
        contact_mail.className = "success_style";
        contact_mail.nextElementSibling.style.display = "block", contact_mail.nextElementSibling.style.color = "green";
        contact_mail.nextElementSibling.innerHTML = "mail accepted";
        valid = true;
    }
}

document.forms.contact_us.addEventListener("submit", function (event) {
    event.preventDefault();
    fullname(this.contact_name);


})

document.forms.register.addEventListener("submit", function (event) {
    event.preventDefault();
    fullname(this.fullname_input);
    register_mail();
    register_password();
    confirm_password();
    radio_select_checkbox();
})

function mouseOverImage() {
    document.getElementById("imgg").src = "529453_523407651055201_1054030089_n.jpg";
}

function mouseOutImage() {
    document.getElementById("imgg").src = "155069_554607254560862_1103711602_n.jpg";
}
// validation forms ended

//-------------------- carousel -----------------------------

//-------------------- carousel -----------------------------

//----------scroll to section---------------------------------
// slide down the fixed menu --------
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbarHidden").style.top = "0";}
   else{
        document.getElementById("navbarHidden").style.top = "-55px";
    }
}
// end slide down the fixed menu --------
// --------------mobile menu swicther--------------
    document.querySelector('.openbtn').addEventListener('click', function openNav() {
        document.getElementById("navbarMobile").style.width = "100%";
    }
)
    document.querySelector('.closebtn').addEventListener('click', function closeNav() {
        document.getElementById("navbarMobile").style.width = "0%";
    }
    )
function closeNav() {
    document.getElementById("navbarMobile").style.width = "0%";
}
//------------- end mibile menu swutcher -----------------

const t0=performance.now()
let documentFragment = document.createDocumentFragment();
let anchor;
function createmenu() {
    let hiddennav = document.getElementById('navbarHidden');
    let nav = document.createElement('nav');
    nav.setAttribute('id', 'navbar');
    let menuUl = document.createElement('ul');
    mobileMenu=menuUl;
    nav.appendChild(menuUl);
    let header = document.querySelector('header');
    // header.appendChild(nav);
    // let menulink = ['#specials', '#about-us', '#mission', '#vision']; by mistake i was about to add the menu id mnanually but this is not what the project asked
    let sections = document.querySelectorAll('section');// collect all dom elements 
    let sectionsArray = [...sections];// covert the dom elements into array to be able to loop inside it
    for ( i = 0; i < sectionsArray.length; i++) {// make the loop time = sections numbers
        const li = document.createElement('li');//verify and create the li variable
        let anchor = document.createElement('a');
        let sectionsId=sectionsArray[i].getAttribute('id');// every time store the value of the section id
        console.log(sectionsArray[i]);
        console.log(sectionsId);
        // let linkContent = menulink[i].slice(1);
        li.appendChild(anchor);// evry time the loop excute it will create a li and append an anchor to it
        anchor.classList.add('menu-items');
        anchor.innerHTML = sectionsId;// set the id of the section to be the innerhtml of the menu link
        anchor.setAttribute('href',"#"+sectionsId);//every time take the section id and also add it as the link id and add # to it
        // the slice(1) to remove the # symbole from the string
        menuUl.appendChild(li);// every time a loop create an li append it to the menuul
    }
    documentFragment.appendChild(nav);// putthe nav on the fragmant
    header.appendChild(documentFragment);// put the fragmant on the exsisting header dom element
    //----- append the whole process to the hidden menu
    let hidden=nav.cloneNode(true);// make a copy of the nav
    documentFragment.appendChild(hidden);// append this copy to the fragment
    hiddennav.appendChild(documentFragment); //append the fragment to the #navbarHidden

    let ulcopyMobile=menuUl.cloneNode(true);
    documentFragment.appendChild(ulcopyMobile);
    document.getElementById('navbarMobile').prepend(documentFragment);

    scrollToId();
      
}

    function removeActive() {
        for (const menuitem of menuitemsArray) {
            let hasActive = menuitem.classList.contains('active');
            if (hasActive) {
                menuitem.classList.remove('active');
            }
        }
    } 
createmenu();
const t1 = performance.now();
console.log('this code took ' + (t1 - t0 )  + 'melliseconds')

function scrollToId(){
    menuitems = document.querySelectorAll('.menu-items');//dom elements
    menuitemsArray=[...menuitems];// converting dom elements to array to be able to loop
    // console.log(menuitemsArray);
    // $('.menu-items').click(function (event) {-----yhis is a jquery simple method but it doesn't use iteration
    //     id = $(this).attr("href");
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 1000);
    //     $(this).addClass('active');
    //     $(id).addClass('active');
        
    // });
    let active ;
    for (const menuitem of menuitemsArray){// loop inside all menulinks to create sections scroll
        menuitem.addEventListener('click', event => {
        event.preventDefault();
        active=true;
        let url=window.location;
        menuitem.href==url;
        let menuItemIdid = menuitem.getAttribute("href");// this will output the section id  #whateve
        const menuSectionI = menuItemIdid.slice(1);// i have to remove the # to be able to catch the section id on the next line
        document.getElementById(menuSectionI).scrollIntoView({ behavior: "smooth" });
        if(active){menuitem.classList.add('active');// add class to menu item
        document.getElementById(menuSectionI).classList.add('actives');}//add class to section

        let hidden = document.getElementById(menuSectionI).firstElementChild.firstElementChild;
        hidden.style.display = "block"; 
        document.getElementById(menuSectionI).firstElementChild.firstElementChild.nextElementSibling.style.display = 'block'; 

        $(window).on('wheel', function (event) {
            $('li a').removeClass('active');
            document.getElementById(menuSectionI).classList.remove('active');
           
        });
        name = document.getElementById(menuSectionI).firstElementChild.firstElementChild.textContent;
        description = document.getElementById(menuSectionI).firstElementChild.firstElementChild.nextElementSibling.textContent;

        
        const sectionDescription ={
            sectionname: name,
            sectionDescp: description,
            menuLinkid: menuItemIdid
        };
        let activeSection=`active section name ${sectionDescription.sectionname} with menu id ${sectionDescription.menuItemIdid} .`
            $.fn.scrollEnd = function (callback, timeout) {// remove active class after 3 seconds to prevent all sections to have
//the active class on the same time   
                $(this).scroll(function () {
                    var $this = $(this);
                    if ($this.data('scrollTimeout')) {
                        clearTimeout($this.data('scrollTimeout'));
                    }
                    $this.data('scrollTimeout', setTimeout(callback, timeout));
                });
            };

            // how to call it (with a 1000ms timeout):
            $(window).scrollEnd(function () {
                menuitem.classList.remove('active');// add class to menu item
                document.getElementById(menuSectionI).classList.remove('actives');
            }, 3000);   
    
    })//end of event click
           
}
    
}

    removeActive();     
});

