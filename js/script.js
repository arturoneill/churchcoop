

    $(function() {
        $("#imgBubble").hover(
            function() {
                $(this).attr("src", "pictures/animated.gif");
            },
            function() {
                $(this).attr("src", "pictures/static.gif");
            }                         
        );                  
    });

$('.statefill').hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$('.statefill').mouseleave(function(e) {
  $('#info-box').css('display','none');
});



$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
