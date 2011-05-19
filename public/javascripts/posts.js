var posts = (function()
{
  var postTemplate;
  $(function() {
    var source   = $("#post-template").html()
    postTemplate = Handlebars.compile(source)
  });

  return {
    edit : function(element) {
      var parentDiv = $(element).closest('.post')
      var postIndex = parentDiv.clone()
      var href      = $(element).find('a').attr('href')
      var editForm  = postIndex.find('.edit_form').html()
      
      parentDiv.html("<p>loading</p>")
      
      $.getJSON(href, null, function (json) {
        editTemplate = Handlebars.compile(editForm)
        var html = editTemplate(null)
        parentDiv.html(html)
      })
      return false;
    },
     
    newRowElement : function() {
      return $('<div class="row"></div>')
    },

    nextPost : function (className)
    {
      return postTemplate(
        { className:   className
        , url:         "/images/img-placeholder-"+Math.round(Math.random()*4)+".jpg"
        , title:       "Awesome Bikes"
        , description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        });
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