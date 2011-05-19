$(document).ready(function() {
  var animating         = false
    , toggleElement     = $('#footer')
    , containerToScroll = $('#posts')
    , scrollTop         = 0
    , scrollAmount      = 100
    , scrollTime        = 1000
    , interval          = null;

  var nudgeScroll = function() {
    scrollTop = scrollTop + scrollAmount;
    containerToScroll.animate({ translate : ['0px', '-' + scrollTop + 'px'] }, scrollTime, 'linear');
  }

  toggleElement.click(function() {
    animating = !animating;

    if(animating) {
      interval = setInterval(nudgeScroll, scrollTime);
    } else {
      containerToScroll.animate({ translate : ['0px', '0px'] }, scrollTime, 'linear');
      clearInterval(interval);
    }
  })

  var allowedScrollFrequency = 800;
  var detectRow = function() {
    if  ($(window).scrollTop() == $(document).height() - $(window).height()) {
      posts.getRow($('#posts'));
    }
  }

  var debouncedDetectRow = _(detectRow).debounce(allowedScrollFrequency);

  $('.edit').click(function () {
    return posts.edit($(this));
  })
  
});

