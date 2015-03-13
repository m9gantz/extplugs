$('#favourites ul li a').each(function(){
        $(this).html('<img src="'+$(this).attr('href')+'avatar.jpg" title="'+$(this).text()+'" width="30">');
      });
$('#favourites ul li').css({
        'display':'inline',
        'list-style':'none',
});
/*test*/
