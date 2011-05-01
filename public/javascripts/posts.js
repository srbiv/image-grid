var posts = (function()
{
  return {
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
    
    getRow : function (el)
    {
      el.append(this.nextPost('alpha'))
        .show('normal')
        .delay(3000)
        .append(this.nextPost(''))
        .show('normal')
        .delay(3000)
        .append(this.nextPost(''))
        .show('normal')
        .delay(3000)
        .append(this.nextPost('omega'))
        .show('normal')
        .delay(800)
    }
  }
})();