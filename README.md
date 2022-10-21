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