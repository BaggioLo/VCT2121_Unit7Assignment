const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');

/* Basically adding an eventlistener
so when we click on the hamburger it will toggle the
active class and display them as block,
the loop is to help loop through the navbar links
and toggle all of them as active */
toggleButton.addEventListener('click', function(){
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
})


