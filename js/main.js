function callAlert (){
    alert('얼럿 띄우기')
}

function textChange(text){
    const changeAble = document.querySelector('.changeableText');
    changeAble.innerHTML = text;
}

const navBtn = document.querySelector('.navbar-toggler')
const subNav = document.querySelector('.list-group')

navBtn.addEventListener('click', function(){
    subNav.classList.toggle('show')
})

$('#modalOpen').on('click',function(){
    $('.black-bg').fadeIn();
})

$('#close').on('click',function(){
    $('.black-bg').fadeOut();
})

//폼 전송시 유효성 체크
$('button[type=submit]').on('click',function(e){
    if ($('.form-control.id').val() == '') {        
        alert('아이디를 입력해주세요');
        e.preventDefault();
    } else if ($('.form-control.pass').val() == '') {
        alert('비밀번호를 입력해주세요')
        e.preventDefault();
    } else if ($('.form-control.pass').val().length < 6) {
        alert('비밀번호를 6자리 이상 입력해주세요')
        e.preventDefault();
    }
});