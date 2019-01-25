function openNav() {
  document.getElementById("mySidenav").style.width = "fit-content";

}
function closeNav() {

  document.getElementById("mySidenav").style.width = "0";

}
//clone main nav  to side menu nav
$(function () {
  $('#main-nav').clone().appendTo('#mySidenav');
  $('.top-bar >.currency').clone().appendTo('#mySidenav');
  $('.top-bar >.sign-in').clone().appendTo('#mySidenav');
  $('.top-bar >.sign-up').clone().appendTo('#mySidenav');
  $("#mySidenav nav").removeAttr('class');
  $("#mySidenav nav").removeAttr('id');
  $("#mySidenav nav>ul>li>a").clone().appendTo($(this).parent());
  $("#mySidenav nav>ul>li>a").each(function(){
    var attr=$(this).attr('href');
    $(this).siblings('.sub-nav').prepend('<a href="'+attr+'" class="btn">Go<a>')
  });
  $("#mySidenav nav>ul>li>a").removeAttr('href');


});
$(document).delegate(".sidenav nav>ul>li>a", 'click', function () {
  var item = this;

  if ($(item).siblings().css("display") == 'none') {

    $(item).siblings().css("display", "block");
  }
  else {

    $(item).siblings().css("display", "none")
  }

});
$(document).delegate(".dropdown>a", 'click', function () {
  var item = this;

  if ($(item).siblings().css("display") == 'none') {

    $(item).siblings().css("display", "block");
  }
  else {

    $(item).siblings().css("display", "none")
  }

});

