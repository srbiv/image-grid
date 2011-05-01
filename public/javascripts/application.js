// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  $('#animate').click(function ()
  {
    $("html, body").animate({ scrollTop: $(document).height() }, 3000);
    return false;
  });
  $(window).scroll(function(){
          if  ($(window).scrollTop() == $(document).height() - $(window).height()){
            posts.getRow($('#posts'));
          }
  });
});

