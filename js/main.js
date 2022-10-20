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

//369 함수 ㄷㄷ;; 이런걸 하다니
function _369Game(num) {
    if(num % 3 === 0) {
        console.log('박수')
    } else {
        console.log('통과')
    }
}

function _369GameDouble(num) {
    if(num % 9 === 0) {
        console.log('9의 배수')
    } else if (num % 3 === 0) {
        console.log('박수')
    } else {
        console.log('통과')
    }
}

function passTest(a,b) {
    console.log(typeof(a))
    if (typeof(a) !== 'number' ||  typeof(b) !== 'number' ){
        console.log('숫자를 입력해라')
    } else if( a < 40 || b < 40) {
        console.log('불합격')
    } else if (a + b < 120) {
        console.log('불합격')
    } else {
        console.log('합격')
    }
}

function upgrade369(num){
    if(num % 10 == 3 || num % 10 == 6 || num % 10 == 9) {
        console.log('박수')
    } else {
        console.log('패스')
    }
}