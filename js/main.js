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

//매개변수의 타입체크 및 입력값의 조건에 따른 각각 함수 실행
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

//파라미터의 마지막 숫자를 구하는 방법
function upgrade369(num){
    if(num % 10 == 3 || num % 10 == 6 || num % 10 == 9) {
        console.log('박수')
    } else {
        console.log('패스')
    }
}


//다크모드 만들기. 변수에 값을 저장해서 조건문에 사용 변수 선언,할당
let clickTimes = 1;
$('#darkMode').on('click',function(){
    if(clickTimes % 2 == 0) {
        $(this).text('Dark')
        $('body').removeClass('dark')
    } else {
        $(this).text('Light')
        $('body').addClass('dark')
        console.log('홀수')
    }

    clickTimes += 1;
})

//조건에 따른 간단한 이자율 계산 (함수 파라미터와 변수 활용?)
let percent;
function calculateSave(cost) {
    if (cost >= 60000) {
        percent = 1.2
    } else {
        percent = 1.15
    }

    console.log(cost * percent * percent)
}

//분수 계산식
function refill(firstQtt) {
    let firstRefill =  firstQtt * 2 / 3;
    let secondRefill = firstRefill * 2 / 3;
    console.log(firstQtt + firstRefill + secondRefill);
}