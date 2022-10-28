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

    const passWord = $('.form-control.pass').val();
    if (passWord.length >= 6 && /[A-Z]/.test(passWord) == false) {
        alert('비밀번호에 영문 대문자하나를 포함시키세요')
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

//간단 퀴즈 UI 사용자 입력값 체크해서 응답해주기 
let submitCount = 0; 
$('.submitQuiz').on('click',function(){
    if ($('#answer').val() !== '1392' && submitCount >= 2) {
        alert('한국인 맞음?')
        submitCount = 0
    } else if ($('#answer').val() !== '1392') {
        alert('틀림 ㅉ')
        submitCount += 1
    } else if ($('#answer').val() == '1392') {
        alert('정답')
        submitCount = 0
    }
})

//settimeOut, setInterval 사용법 
let saleCount = document.querySelector('.count');
saleCount.innerHTML = 5;

const alertTimer = setInterval(function(){
    saleCount.innerHTML -= 1;
    if (saleCount.innerHTML == 0) {
        clearInterval(alertTimer)
        $('.alert.alert-danger').removeClass('show')
    }
},1000)



//간단한 캐러셀 만들기

let currentPicture = 0;
$('.slide-2').on('click',function(){
    $('.slide-container').css('transform','translateX(-100vw)')
    currentPicture = 1;
})

$('.slide-3').on('click',function(){
    $('.slide-container').css('transform','translateX(-200vw)')
    currentPicture = 2;
})

$('.slide-1').on('click',function(){
    $('.slide-container').css('transform','translateX(0)')
    currentPicture = 0;
})


$('.next').on('click',function(e){
    if (currentPicture >= $('.slide-container').children().length - 1) {
        return   
    }
    currentPicture += 1;
    $('.slide-container').css('transform','translateX(-'+ currentPicture +'00vw)')
})

$('.prev').on('click',function(){
    if (currentPicture < 1) {
        return   
    }
    currentPicture -= 1;
    $('.slide-container').css('transform','translateX(-'+ currentPicture +'00vw)')
})


let startX = 0;
let clicked = false;
$('.slide-box').eq(0).on('mousedown', function(e){
    startX = e.clientX
    clicked = true;
})


$('body').eq(0).on('mouseup', function(e){
    clicked = false;
    let endX = e.clientX - startX;
    if (endX <= -100) {
        $('.slide-container').css('transform',`translateX(-100vw)`)
    } else {
        $('.slide-container').css('transform',`translateX(0vw)`)
    }
})

$('.slide-box').eq(0).on('mousemove', function(e){
    let endX = e.clientX - startX;
    if(clicked == true){
        console.log(endX)
        $('.slide-container').css('transform',`translateX(${endX}px)`)
    } 
})

//분초 -> MS단위 변환기
function translation(min, sec) {
    const minute = min * 60
    const 합계 = minute + sec;
    return 합계 * 1000;
}

console.log(translation(2,10))

//가격 계산기 (10%할인 + 첫구매시 1.5달러 추가할인)
function calculatePrice(price, first){
   const discount = price - price * 0.1;
   const firstOrNot = first;
   if (firstOrNot == true) {
        return (discount - 1.5).toFixed(1)
   } else {
        return discount
   }
}

console.log(calculatePrice(10, true))


//스크롤 이벤트

$(window).on('scroll', function(){
    if (window.scrollY > 100) {
        $('.navbar-brand').css('font-size','15px')
    } else {
        $('.navbar-brand').css('font-size','20px')
    }

    //스크롤 길이에 따른 프로그래스바 만들기
    const windowHeight = document.querySelector('html').clientHeight; //보여지는 화면 높이
    const scrollLength = document.querySelector('html').scrollTop; //스크롤 된 길이

    const heightPercent = Number(scrollLength / windowHeight * 100) //스크롤 길이를 퍼센트로 변환

    $('.progressBar').css('width', + heightPercent +'%') //프로그래스바 위드값에 퍼센트 넣기
    //특정 요소였다면, clientHeight + scrollTop / scrollHeight * 100 으로 가야되지만, 이 경우에는 html이 선택자라,
    //clientHeight 가 문서 전체 높이와 동일해진것.
})

$('.terms').on('scroll',function(){
    const termsBox = document.querySelector('.terms');
    
    const boxHeight = termsBox.scrollHeight
    const scrollHeight = termsBox.scrollTop + termsBox.clientHeight

    if (scrollHeight >= boxHeight - 10) {
        alert('스크롤 끝까지 완료')
        $(this).off('scroll')
    }
})

$('.white-bg').on('click',function(e){
    e.stopPropagation()
})


$('.black-bg').on('click',function(e){
    // if($(e.target).hasClass('black-bg')){
    //     $(this).fadeOut();
    // }

    $(this).fadeOut();
})


$('.simpleSwitch').on('click',function(e){
    switch($(e.target).text()) {
        case '강아지':
            alert('강아지를 좋아하시네요');
            break
        case '부모님':
            alert('부모님을 좋아하시네요');
            break
        case '와이프':
            alert('와이프를 좋아하시네요');
            break
    }
})