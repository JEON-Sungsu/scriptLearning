//for 반복문 사용 탭만들기



// for (let i = 0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         $('.tab-button').removeClass('orange')
//         $('.tab-button').eq(i).addClass('orange')
//         $('.tab-content').removeClass('show')
//         $('.tab-content').eq(i).addClass('show')
//     })
// }

$('.list').click(function(e){
    tabOpen(e.target.dataset.number)
})

function tabOpen(number) {
    $('.tab-button').removeClass('orange')
    $('.tab-button').eq(number).addClass('orange')
    $('.tab-content').removeClass('show')
    $('.tab-content').eq(number).addClass('show')
}

const shirts = [95, 100, 105, 110]
const pants = [28, 30, 32];

$('#productsMenu').on('change',function(){
    let selectOpt = '';

    if($(this).val() == '셔츠') {
        shirts.forEach(function(el){
            selectOpt += `<option>${el}</option>`
        })
        $('#productsMenuOption').css('display','block')
    } else if($(this).val() == '바지') {
        pants.forEach(function(el, index){
            selectOpt += `<option>${el}</option>`
        })
        $('#productsMenuOption').css('display','block')
        
    } else {
        $('#productsMenuOption').css('display','none');
    }

    $('#productsMenuOption').html(selectOpt)
})