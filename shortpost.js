  $('.entry .post').each(function(){
        if($(this).height() >= 550){
          $(this).addClass('postoverlay');
          $('.postoverlay').css({
            'max-height':'550px',
            'overflow':'hidden'
            });
            $('<div class="postwrap"><div>+</div></div>').appendTo($(this));
        };
      });
      $('.postwrap').each(function(){
        $(this).click(function(){
          $(this).parent().removeAttr('style');
          $(this).hide();
        });
  })
