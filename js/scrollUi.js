$(window).scroll(function(){

    var 높이 = $(window).scrollTop();
    console.log(높이);
  
    var y =  -1/500 * 높이 + 115/50;
    $('.card-box').eq(0).css('opacity', y);
  
    var z = (-1/5000) * 높이 + 565/500;
    $('.card-box').eq(0).css('transform', `scale( ${z} )`);
  
  });