# 수업 정리본

- onclick 사용할때, 함수 짜두고 함수 호출만 해도 되는데, 
onclick="document.getElementById('id').style.display = 'block';" 이런식으로도 사용 가능함 이럴 필요까지는 없지만.
<br><br>
- form 은 서버로 유저 정보 전송하려고 쓰는것
<br><br>
- 로그인 form 만들기
    - form 태그에서는 submit 이라는 이벤트를 걸어도 됨. 
    ``` 
        $('form').on('submit',function(){}) 
    ```
    - 로그인 할 때 유효성 인증 안되면 return false나 e.preventDefault();로 동작을 막아준다.

<br><br>
- 비교연산자
    - == 과 === 의 차이는, ===이 더 엄격하게 비교함(자료타입까지 동일해야됨).
    - % 는 나눠서 나머지를 구하는 연산자. 
    ```
        3 % 2 = 1 이렇게 1을 뽑아내주는 연산자임. 그래서 뭐 짝수나 홀수나 구할 때 조건문 같은데서
        나머지가 1이면 홀수 나머지가 0이면 짝수 뭐 이런식으로 사용함
    ```
    - 조건문에서 데이터 타입 체크할때
    ```
        if (typeof(a) !== 'number' ||  typeof(b) !== 'number') -> 넘버타입 체크
    ```
    - 문자열에서 특정 자리의 값을 구하는건 많음. slice,substr 기타 등등<br>
    - 숫자에서 1의자리 값을 가져오고 싶을때는 
    ```
        숫자 % 10 을 사용하면 마지막 1의자리값이 나옴
    ```

<br><br>

- 변수
    - 선언,할당,범위
        - 선언 : 변수 만들기
        - 할당 : 만든 변수에 값 집어넣기
        - 범위 : 전역변수 (함수나 특정 코드 내부에 선언된 변수는 그 안에서만 사용가능)

    - 변수 종류
        - let : 재선언이 불가능하지만, 값을 재할당 할 수 있음
        - const : 재선언도 재할당도 불가
        - var : 둘다 가능(요즘은 잘 안씀 - 호이스팅 문제)

    - 분수 계산할때
        - 그냥... 일반 계산하듯이 하면 됨 100의 2/3를 구할때 
        ```
            let firstRefill =  100 * 2 / 3;
        ```

<br><br>

- setTimeout, setInterval, clearInterval
    - setTimeout 은 화면이 로드되고, 지정해둔 시간이 지난 뒤 콜백함수 실행
    - setInterval 은 화면 로드 후 지정된 초마다 함수 실행됨(반드시는 아니지만, 클리어인터벌 사용을 위해 셋인터벌은 변수에 담아서 사용해야 한다.)
    - clearInterval 은 setInterval을 종료시키는 함수.
    ```
        const alertTimer = setInterval(function(){
        saleCount.innerHTML -= 1;
        if (saleCount.innerHTML == 0) {
            clearInterval(alertTimer)
            $('.alert.alert-danger').removeClass('show')
            }
        },1000)
    ```

<br><br>

- 정규식 표현
    ```
        정규식표현.test('검사하고싶은내용')
        정규식표현 자리에, 내가 찾고자하는(있는지없는지) 정규식 표현을 적고, test인자에 검사하고싶은 내용을 적으면 된다. 

        ex) '테스트'에 a~z까지의 문자가 있느냐?
        /[a-z]/.text('테스트') // false
        
    ```

    - 문자열 검사
        - 한글인지 영문인지 구분은 못함 
    ```
        '문자열'.includes('찾고싶은 문자') //true false
    ```
    - 정규식은 // 슬래시 사이에 작성
        - /abcdefg/
    - 범위작성도 가능
        - /[a-z]/ : a~z
        - /[A-Z]/ : 대문자 A~Z
        - /[a-zA-z] : 알파벳이 들어있느냐
        - /[ㄱ-ㅎ가-힣]/ : 한글이 들어있는지
        - /[ㄱ-ㅎ가-힣ㅏ=ㅣ]/ : 모음도 검사
        - /[0-9]/ : 숫자 검사
        - /\S/ : 아무 문자가 하나 있는지-여러글자 아니고 한글자임(백슬래시)
        - /^a/ : a로 시작하는지 (웃음표시)
        - /a$/ : a로 끝나는지 (딸러표시)
        - /a|b/ : or a 또는 b 가 있는지 (| or 기호)
        - /\S+@\S+\.\S+/ : 이메일 형식 검사 (플러스 기호는 한개만이 아니라 여러개 표시임)

    - 구글에 regex test 검색하면 정규식 테스트할 수 있는 페이지 많이 뜸 

<br><br>

- 간단한 캐러셀 만들기
    - 특정 조건에서 현재 이벤트걸린 함수를 동작안하게 하려면 return 만 입력하면 됨. 
    - 비슷하게 반복되는 코드의 재사용성을 높이려면 가변적인 수치에 데이터를 집어넣게끔 만들면 좋음. 
    ```
        $('.next').on('click',function(e){
            if (currentPicture >= $('.slide-container').children().length - 1) {
                return   
            }
            currentPicture += 1;
            console.log(currentPicture)
            $('.slide-container').css('transform','translateX(-'+ currentPicture +'00vw)')
        })

        클릭 횟수마다 css의 특정수치가 변경되도록 할 때, 앞자리에 데이터를 넣어서 변경되도록 처리

    ```

<br><br>

- return 
    - return 은 함수 종료의 의미도 지니고 있음.
    - return 이후에 작성된 수식 또는 값들을 넘겨줌. 
    ```
     function test() {
        return 1 + 1
     }

     const test2 = test() // 2 
    ```

<br><br>

- 소수점 연산
    - 소수점 연산할때 약간의 오차가 발생한다.(컴퓨터에서 2진법으로 변환 후 계산하기 때문)
    - 정확한 연산을 위해서는 라이브러리를 쓰던지.. 반올림해서 써야된다. 
    ```
    const num = (a * 1.1).toFixed(2);
    toFixed는 반올림 해주는 매서드이다.
    파라미터는 몇번째 자리까지 반올림할것인지 지정해주는것.

    단 문자로 변환해줌. 그래서 오류가 생길 수 있으니깐 
    parseFloat(num), parseInt(num) 을 사용해서 int 로 변환시켜주고 추가 계산을 해야됨.
    ```

<br><br>

- scroll 이벤트
    - window.scrollY = 유저가 스크롤을 맨 위에서부터 얼마나 했는지 
    - window.scrollTo(x좌표, y좌표); = 내가 원하는 스크롤의 (전체 좌표중) 위치로 이동시켜줌 (하나 팁은 부트스트랩에서는 해당 매서드를 쓰게되면, 무조건 부드럽게 이동하는데 이를 막으려면 css 파일에 :root {scroll-behavior: auto} 값을 추가해주면 된다.)
    - window.scrollBy(x좌표,y좌표) : 현재의 위치에서, 얼마만큼 (px) 이동시켜줘라

    - 제이쿼리용
    ```
    $(window).scrollTop() = 현재 스크롤바 위치 출력. scrollY와 동일함. 단 파라미터에 Y 좌표값을 넣으면 해당 픽셀만큼 이동시켜줌. 

    $(window).scrollHeight() = 스크롤을 하는 화면의 실제 높이값(실제 윈도우(요소)높이 + 스크롤 포함된 길이)

    $(window).clientHeight() = 윈도우,요소의 눈에 보이는 높이. (스크롤포함이 아님 뷰포트를 말하는거 아님. 그 요소의 실제 높이를 의미함. 예를들어 선택자를 html 이나 window 를 해버리면, 문서 전체의 height 값이 되어버리는 것임. 주의할것)

    scrollTop :는 스크롤을 내린양을 의미하지 실제 내가 스크롤한 window 또는 elements 의 높이를 의미하지 않는다. 그래서, 내가 원하는 화면(요소)에서 스크롤을 끝까지 했는지를 체크하려면 
    스크롤바 내린 양 + 눈에 보이는 실제 높이 (scrollTop + clientHeight) 를 해줘야지 내가 원하는 영역의 스크롤을 끝까지 했는지 알 수 있다. 하지만 오차가 많이 나기 때문에, 여유를 두고 수치를 적어주는게 좋다. 예를들어 두개의 합한값이 200이면, 내가 이벤트를 걸려면 190이 되었을때 걸어주는식으로 실제값보다 조금더 여유있게 걸도록 하자
    ```

    ```
    //스크롤 길이에 따른 프로그래스바 만들기
    const windowHeight = document.querySelector('html').clientHeight;
    const scrollLength = document.querySelector('html').scrollTop;
    const heightPercent = Number(scrollLength / windowHeight * 100)
    $('.progressBar').css('width', + heightPercent +'%')
    ```

<br><br>

- for 반복문
    - 기본형 
        ```
        for (let i = 0; i < 3; i++) {

        }

        for 반복문의 횟수에는, int 를 넣어도 되지만, 요소.length 와 같이 넣어도 무방하다. 개수가 가변적인, 동일한 클래스의 모든 요소에 이벤트를 걸고 싶으면 요소.length 로 사용성을 높이는게 좋다.

        ```

