//for 반복문 사용 탭만들기



for (let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange')
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(i).addClass('show')
    })
    
}

