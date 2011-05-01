var posts = (function()
{
  return {
    newRowElement : function() {
      return $('<div class="row"></div>');
    },

    nextPost : function (className)
    {
      return  '<div class="post '+className+'">'+
              '<img src="/images/img-placeholder.jpg">'+
              '<div class="info">'+
              '<h2>Awesome Bikes</h2>'+
              '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'+
              '</div>'+
              '</div>';
    },
    
    getRow : function (addToElement)
    {
      var self         = this
        , initialState = [ 'omega',      'omega', 'omega', 'omega']
        , finalState   = ['alpha omega', 'omega', 'omega', null]
        , rowElement   = this.newRowElement();

      addToElement.append(rowElement);

      var row = $(initialState).map(function(state) {
        return self.nextPost(state);
      });

      var staggerTime = 200
        , currentTime = 0;
      
      $(row).each(function(i, elementString) {
        setTimeout(function() {
          var element = $(elementString);

          rowElement.append(element)
                    .show('normal');

          setTimeout(function() {
            element.toggleClass(initialState[i]);
            element.toggleClass(finalState[i]);
          }, 1);
        }, currentTime);

        currentTime = currentTime + staggerTime;
      });
    }
  }
})();