/*
 * function.js
 * 
 * Usefull function
*/


/*
 * elementInView(element) : Check if an element is in the screen
 * 
 * based on function rited by:  blog.yoavfarhi.com
*/
function elementInView(element){
  return ((($(element).offset().top + $(element).height()) >= $(window).scrollTop()) && ($(element).offset().top <= ($(window).scrollTop() + $(window).height()))
    && (($(element).offset().top + $(element).height()) <= ($(window).scrollTop() + $(window).height())) &&  ($(element).offset().top >= $(window).scrollTop()) );
}