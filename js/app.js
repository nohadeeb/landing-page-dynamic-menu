window.addEventListener('DOMContentLoaded', () => {//wexcute functions after dom content fully loaded
    document.forms.login.email.addEventListener("blur", emailfunc);// excute the function on froms login(name) email input
    /* on the valiadation error and success messages i've made an empty div every time the condition run javascript 
    function run and set styles and inject content according to occured condition*/
    function emailfunc() {
    let email = document.forms.login.email;// target the input by name attribute html
    let valid;// valid variable to set it to true or false 
    //this is the email pattern for correct mail using regular expressions
    var email_pattern = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-_]+\.[A-Za-z]/;
    if (!email.value || email_pattern.test(email.value) == false) {// لو مافيش ميل دخل او الميل دخل غلط
        email.className = "error_style";//add this class name to show the error message in these 2 conditions
        //show the hidden element and style it to red
        email.nextElementSibling.style.display = "block", email.nextElementSibling.style.color = "red";
        //add a the content
        email.nextElementSibling.innerHTML = "email can't be blank or your email is not valis";
        valid = false;
    }
    else {
        email.className = "success_style";//if the first condition didn't occur this set success_style class name
        //display the div that will be holding the success message set it to green
        email.nextElementSibling.style.display = "block", email.nextElementSibling.style.color = "green";
        // inject content to the element as it's empty by default
        email.nextElementSibling.innerHTML = "email accepted";
        valid = true;
    }

}

    //excute the function on froms login(name) password input
document.forms.login.password.addEventListener("blur", passwordfunc);
function passwordfunc() {
    var password = document.forms.login.password;
    var valid;
    if (!password.value || password.value.length < 8) {// if input is empty or less than 3 digits
        password.className = "error_style";// set error_style class name
        // display the hidden div
        password.nextElementSibling.style.display = "block", password.nextElementSibling.style.color = "red";
       //inject suitable content
        password.nextElementSibling.innerHTML = "password can't be blank and must be more than 8 charachters";
        // set valid to false
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
    event.preventDefault();//prevent the function to act normaly and reload the page
    emailfunc();//invoke 
    passwordfunc();//invoke
});


//---------------------------- registration form -----------------------------------------------------
document.forms.contact_us.contact_name.addEventListener("blur", fullname)
document.forms.register.fullname.addEventListener("blur", fullname)
/*i have a special case here as i want to use this function on several forms so i don't want to select a specific input form 
cause if i used this way i will have to duplicate the function several time to fit every specific forms
so when i called the function on line 64 the "this " will produce the input itself
but waht about when i call it on the main submit funxtion ?? in this case the "this " will refer to the form check line 220
so i have to put a parametere to control the fullname_input declaration / so here on forms.register.fullname "this " will be the input
but down on line 222 i want "this" also to refer to the input/ soon fullname(fullname_input) i refred to this(theform).fullname((input name attribute)*/
function fullname(fullname_input) {
    var fullname_pattern = /[A-Za-z/ A-Za-z]/;
    var valid;
    if (fullname_input.target) {  // if the blur event occured  
        fullname_input = this;// fullname_input variable will refer to "this"---> the input itself
        console.log(fullname_input);
// el function di 3ashan teshawer 3ala el input eli ana 3ayza ashaghal 3aleh el function
// bel tali 7a3raf ashaghal el function di 3ala ay name input f ay form msh form mo3ayana

    }
    //same strategy used on above password function
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
    //matching twoo passwords on 2 inputs to make sure they are the same
    if (confirmPassword.value.length < 8 || confirmPassword.value.match(first_password) == false){
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

function radio_select_checkbox() {// validation for the radio button to make sure the user not leave it empty
    var radio_female = document.forms.register.female;
    var radio_male = document.forms.register.male;
    var select = document.forms.register.selection;
    var options_index = select.options[select.selectedIndex].value;
    var checkbox_music = document.forms.register.music;
    var checkbox_football = document.forms.register.football;
    var checkbox_reading = document.forms.register.reading;
    var valid;
    if (!radio_female.checked && !radio_male.checked) {// if the twoo bottom not checked 
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
    //make sure of the mail match regular experessions and not empty and not less than 5 letters
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
    fullname(this.contact_name);//as we said on the fullname() function that this.contactname will refer to fullname_input which refers to the input
})

document.forms.register.addEventListener("submit", function (event) {
    event.preventDefault();
    fullname(this.fullname);//as we said on the fullname() function that this.fullname will refer to fullname_input parametere which refers to the input
    register_mail();// calling the register name function inside the submit function
    register_password();
    confirm_password();
    radio_select_checkbox();
})


// validation forms ended


//----------scroll to section---------------------------------
// slide down the fixed menu --------
//this function will allow hiddennavbar to alide down on scroll more than 20 px 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbarHidden").style.top = "0";}
    // if the user didn't start scrolling down hide the #navbar and give a position top -55px
   else{
        document.getElementById("navbarHidden").style.top = "-55px";
    }
}
// end slide down the fixed menu --------
// --------------mobile menu swicther--------------
//when the user click on the menu icon mobile give this navbar w width 100% as it's styled to width 0 by default 
//and and the icon only shows on media query selected screens
    document.querySelector('.openbtn').addEventListener('click', function openNav() {
        document.getElementById("navbarMobile").style.width = "50%";
    }
)
    //if the closebtn selected resize the navbarMobile to width 0 means hide it/ style with smooth transition on css file
    document.querySelector('.closebtn').addEventListener('click', function closeNav() {
        document.getElementById("navbarMobile").style.width = "0%";
    }
    )

//------------- end mibile menu swutcher -----------------
//test the function performance time start
const t0=performance.now()
let documentFragment = document.createDocumentFragment();// the virtual object in which we will store all our created 
//elements to prevent the load on the document object
let anchor;
// create the menu dynamicly to automatic create a menu link whenever a new section added to the page
function createmenu() {
    let hiddennav = document.getElementById('navbarHidden');//the sticky navbar which is hidden by default and slides down on scroll
    let nav = document.createElement('nav');//create nav
    nav.setAttribute('id', 'navbar');//set nav id attribute to be able to style it
    let menuUl = document.createElement('ul');
    mobileMenu=menuUl;
    nav.appendChild(menuUl);//put the created ul as a nav child
    let header = document.querySelector('header');
    // header.appendChild(nav);
    // let menulink = ['#specials', '#about-us', '#mission', '#vision']; by mistake i was about to add the menu id mnanually but this is not what the project asked
    // collect all dom esction elements
    let sections = document.querySelectorAll('section'); 
    // convert the dom elements into array to be able to loop inside it
    let sectionsArray = [...sections];
    // make the loop time = sections numbers as this loop role will be  creating menu items according to sections number
    // so we need to store the sections number which is sections length 
    for ( i = 0; i < sectionsArray.length; i++) {
        const li = document.createElement('li');//declare and create the li variable
        let anchor = document.createElement('a');//declare and create the anchor variable
        // set sectionId of this cuurent loop to sectionsArray[i].getAttribute('id');
        //so if we're on the loop i=0 sectionId = sectionsArray[0] which is the first section /.getAttribute('id');
        //which will store value of the section id attribute because we will need it to set menu link id to be similar to section id
        // for the scrolling function
        let sectionsId=sectionsArray[i].getAttribute('id');
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
    // ----- append the whole process to the hidden menu
    let hidden=nav.cloneNode(true);// make a copy of the nav to append it on the hiddennav
    documentFragment.appendChild(hidden);// append this copy to the fragment
    hiddennav.appendChild(documentFragment); //append the fragment to the #navbarHidden

    let ulcopyMobile = menuUl.cloneNode(true);// make a copy of the nav to append it on the #navbarMobile
    documentFragment.appendChild(ulcopyMobile);// append this copy to the fragment
    document.getElementById('navbarMobile').append(documentFragment);//append the fragment to the #navbarMobile

    scrollToId();
      
}


createmenu();
const t1 = performance.now();
console.log('this code took ' + (t1 - t0 )  + 'melliseconds')

function scrollToId(){
    menuitems = document.querySelectorAll('.menu-items');//dom elements
    menuitemsArray=[...menuitems];// converting dom elements to array to be able to loop
    console.log(menuitemsArray);

    let active ;
    for (const menuitem of menuitemsArray){// loop inside all menulinks to create sections scroll
        menuitem.addEventListener('click', event => {
        event.preventDefault();
        active=true;
        let menuItemIdid = menuitem.getAttribute("href");// this will output the section id  #whateve
        const menuSectionI = menuItemIdid.slice(1);// i have to remove the # to be able to catch the section id on the next line
        document.getElementById(menuSectionI).scrollIntoView({ behavior: "smooth" });// scroll into required section id
        let hidden = document.getElementById(menuSectionI).firstElementChild.firstElementChild;
        hidden.style.display = "block"; 
        document.getElementById(menuSectionI).firstElementChild.firstElementChild.nextElementSibling.style.display = 'block'; 
        
        // $(window).on('wheel', function (event) {
        //     $('li a').removeClass('active');
        //     document.getElementById(menuSectionI).classList.remove('active');
           
        // });
        name = document.getElementById(menuSectionI).firstElementChild.firstElementChild.textContent;
        description = document.getElementById(menuSectionI).firstElementChild.firstElementChild.nextElementSibling.textContent;
        const sectionDescription ={
            sectionname: name,
            sectionDescp: description,
            menuLinkid: menuItemIdid
        };// create an object to store every section main date and could be injected in the dom
        let activeSection=`active section name ${sectionDescription.sectionname} with menu id ${sectionDescription.menuItemIdid} .`



    })//end of event click
        // set active class according to section id and remove when the id changes
        $(window).scroll(function () {
            let scrollDistance = $(window).scrollTop(); // distance between top and element
            // Assign active class to nav links while scolling
            $('section').each(function (i) {//loop inside sections
                if ($(this).position().top <= scrollDistance) {
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
                    $('ul a.active').removeClass('active');
                    $('ul a').eq(i).addClass('active');
                    $('section.actives').removeClass('actives');
                    $('section').eq(i).addClass('actives');
                }
            });
        }).scroll();

         
}
    
}
   
});

