$(document).ready(function() {
  var animating         = false
    , toggleElement     = $('#animate')
    , containerToScroll = $('#scroller')
    , scrollTop         = 100
    , scrollAmount      = 200
    , scrollTime        = 1000
    , interval          = null;

  var nudgeScroll = function() {
    scrollTop = scrollTop + scrollAmount;

    containerToScroll.animate({ scrollTop: scrollTop  }, scrollTime, 'linear');
  };

  toggleElement.click(function() {
    animating = !animating;

    if(animating) {
      interval = setInterval(nudgeScroll, scrollTime);
    } else {
      clearInterval(interval);
    }
  });

  $(window).scroll(function() {
    if  ($(window).scrollTop() == $(document).height() - $(window).height()) {
      posts.getRow($('#posts'));
    }
  });

});

