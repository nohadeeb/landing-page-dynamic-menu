# landing-page-dynamic-menu

* add sructures on the index.html file
which includes : wrapper for sticky menu and mobile menu
-forms for login , registration and contact 
-sections with it's content and images

- on the style.css includes all sections style , hidden sections and forms

-on the app.js 
first of all all I have maded validations for all forms with success and error messages
-a scroll function declared 
which gives the order to slide down the fixed navigation bar on scroll
then 2 event lisnter to open and close mobile menu 
-then the create menu function declared 
but before declaring the create menu i had to create a virtual object to hold the whole process and appended elements , adding attributes
to not load on the DOM
-I have created the nav bar element and append UL , LI , A elements to it and set all attributes to it
-looped inside the dom elements sections which was converted to an array using ES6 to be able to connect the id of each section and add it to the menu link id by order
-then append the navbar desktop , and mobile to the created document fragment
-scroll to id function is invoked inside the create menu function
-remove active function is declared 
-performance.now function created to test the createmenu () function

-scrolltoID () function declared
grouped all section inside an array to be able to loop inside of it
event listener created to navigate into the selected section 
-on the createmenu () function i took the id attribute value of each section and added to the menu link href
now it's easy to loop inside all links and use the scrollintoview() function each menulink[i] to the same sectionid[i]
adding active class to both clicked link and it's scrolled section

-below a WHEEL event function was added to remove the active class on wheel scroll to prevent having active class on all sections if the user 
navigated to all sections

-sectionDescription object created to store each section main infos
-scrollend created using setTimeout() function  to remove active class after 3 seconds 
so we have 2 condition where the active class will be removed on wheel and if 3 seconds passed
