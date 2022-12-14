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

<br><br>

- 이벤트 버블링
    - 이벤트가 상위 요소로 번지는 현상.
    ```
    <div class="bg">
        <div class="content"></div>
    </div>

    해당 요소가 있다고 가정할 때, 나는 bg 와 content 둘다에게 별개의 click 이벤트를 걸어두어서 개별적인 동작을 실행시키고 싶고, content에 걸려있는 이벤트를 실행하기 위해 content를 클릭하게 되면, 이 click 이벤트가 상위요소인 bg에도 적용이 되서, content,bg 둘다에게 걸려있는 이벤트가 실행되게 되버린다. 이러한 현상을 이벤트 버블링이라고 한다.

    
    ```
    - 버블링을 막는것
    ```
    e.target; //유저가 실제 눌린것 가장 많이 씀.
    e.currentTarget; //이벤트 리스너가 달려있는곳
    e.preventDefault(); //submit 을 막아줘
    e.stopPropagation(); //내 상위요소로 이벤트 버블링 막아줌

    <div class="bg">
        <div class="content"></div>
    </div>

    위 상황에서 버블링을 막으려면

    $('.content').on('click',function(e){
        e.stopPropagation()
    })    

    $('.bg').on('click',function(e){
        //하위 요소에 e.stopPropagation을 쓰지 않았을 때 
        if($(e.target).hasClass('bg')){
            $(this).fadeOut()
        }

        //하위 요소에 e.stopPropagation을 적용 했을 때
        $(this).fadeOut()
    })

    이렇게 나눠 보면 될 것 같다.

    ```

<br><br>

- dataset
    - html 태그에 data 를 삽입해둠
    - data-내가원하는이름="값" html 태그 내에 이렇게 넣어주면 됨.
    ```<div data-name="바보"></div>```
    - data 를 뽑아오려면 선택자.dataset.데이터이름 이렇게 하면 됨
    ```$('div').dataset.name```
    - jquery 에서는 선택자.data('데이터이름','값') 이렇게 쓰면 된다.

<br><br>

- 배열, 객체 
    - 배열 출력 = arr[index]
    - 배열 변경 = arr[index] = 변경하고싶은값
    - 객체 출력 = obj.key
    - 객체 변경 = obj.key = 변경하고싶은값

    - 객체는 배열과 다르게 순서개념이 없음. 그래서 배열은 정렬이 가능함 (arr.sort();)
    - 배열은 중간에 자르기도 가능 arr.slice(index,index);

    - 객체 데이터 뽑는법
    ```
    obj.key
    obj["key"]

    두가지 다 키값 입력으로 데이터를 뽑지만, 대괄호로 뽑는다면 변수명을 집어넣을 수 있음.
    ```
    - 객체 내 배열값 뽑기
    ```
    const obj = {
        name = "howard"
        price = [50000, 3000, 4000],
    }

    console.log(obj.price[index]);
    이렇게 뽑으면 됨.
    ```

    - 배열 반복문 = forEach
    - 객채 반복문 = for in = 객체의 데이터 수만큼 반복함. 
    ```
    obj = {
        name : "kim",
        age : 34,
        gender : "male"
    }

    for (let key in obj) {
        블라블라
    }

    for in 문에서 변수 key 는 객체데이터 내의 key 값을 의미한다.
    저기서 console.log(key) 를 찍어보면 //name, age, gender 가 출력된다.
    ```

<br><br>

- 폼태그 관련
    - 폼태그에 사용되는것들(인풋,셀렉트,기타등등)의 값들이 변하는 이벤트는 change 이다. 
    - 유저가 선택한 값을 가져오려면 
    ```
    $('선택자').val()  (제이쿼리)
    선택자.value (바닐라스크립트)
    ```

<br><br>

- 자바스크립트로 html 그리기
    - 방법 1
    ```
    const pTag = document.createElement('p');
    pTag.innerHtml = 'P 태그 안에 넣고 싶은 내용'
    document.querySelector('.test').appendChild(pTag);

    1. 태그를 생성하고
    2. 태그안에 내가 넣고자하는 내용 집어넣고
    3. 생성한 태그를 넣고싶은 위치에 appendChild(생성한태그) 로 넣어준다.
    ```
    - 방법 2
    ```
    const html = '<p>하이<p>'
    document.querySelector('.test').insertAdjacentHTML('beforeend', html);

    1. 변수안에 만들고자하는 태그를 텍스트로 담는다.
    2. 변수에 담긴 태그를 넣고자 하는 위치를 선택자로 잡고 insertAdjacentHTML을 통해서 집어넣는다.

    jquery 에서는 간단한게 $('넣을위치선택자').append(html)로 하면 된다.

    만든 태그를 붙여넣는게 아니고 아에 싹 갈아 엎으려면 innerHTML 을 쓰면 된다.

    보통 개발할때 부모태그를 empty() 로 비운다음에 append() 로 붙이는데, 그냥 innerHTML (바닐라) html(jquery)를 쓰면 굳이 엠티는 안써도 되지 않을까? 
    ```

<br><br>

- arrow function
    - 함수를 간단하게 표현하는 애로우 펑션
    - 일반 함수와 차이점은 this 를 사용할때인데, 에로우 펑션에서 this 는 밖에 있는 이상한 값을 
    가져다 씀으로, 에로우 펑션에서 this 는 사용하지 않는게 좋음.

<br><br>

- 반복문 중간 종료 하는법
    - forEach
        - forEach는 중간에 원하는 행위를 완료했을때 종료시키는게 없다. 그래서 에러를 일부러 발생시켜서 종료시켜야 한다.
        ```
         const arr = ['Howard','Toni', 'Thor', 'Legend']

        function findName(name){
            arr.forEach(function(el){
                if (el == name) {
                    console.log('찾음');
                    throw new Error("찾아서 종료"); //강제로 에러 발생시켜서 중단하기
                }

                if (el == 'Legend') {
                    console.log('last')
                }

            })

            for(let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                    if(arr[i] == name) {
                        return false;
                    }

            }
        }
        ```

    - 일반 for 문
        - 일반 for 문에서는 return false 값을 주면 중간에 중단함
    - jquery each 문
        - each 문도 일반 for 문과 마찬가지로 return false 값을주면 중간에 중단함


<br><br>

- ajax 통신 방법
    - 서버에 요청을 할때는, 데이터의 url, 방식(post,get)을 잘 정의해서 요청해야된다.
    - 데이터 url = 어떤 데이터인지 (서버 개발자한테 물어보면 됨. 내가 이러이러한 데이터를 얻고 싶은데 어떤 url 로 요청해야되나요~? 그리고 이걸 정리해둔게 Api 문서임. Api 문서에는 a 라는 url로 get 메소드를 사용하여 요청하면 a 라는 정보를 줄게~ 와 같이 정리가 되어 있음)
    - 어떤 메소드 = POST,GET 
        - GET = 데이터를 읽고싶을 때
        ```
        GET 요청 방식
        ex) 브라우저 url 입력창
        ```
        - POST = 데이터를 보내고싶을 때 
        ```
        POST 요청 방식
        <form action="url" method="post">
        </form>

        댓글 입력, 게시판글남기기 등등... 
        ```

    - GET, POST 등과 같이 요청하면 브라우저가 새로고침이 된다. 그래서 새로고침 없이, GET,POST 요청을 하기 위해서 사용하는 방식이 ajax 통신 방법이다. 
  
    ```
    $.get('url')
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        alert('통신실패')
    })

    $.post('url', {내가보내고자하는 데이터})
    .done(function(data){

    })
    .fail(function(){
        alert('통신실패')
    })

    - post 요청은 두번째 파라미터로 내가 보내고자 하는 데이터를 넣어주면 된다.
    - .done 메소드는 통신이 성공했을때 실행시킬 내용을 입력해주면 된다.
    - .done 메소드의 콜백함수의 파라미터는, 서버로부터 받아오는 데이터가 자동으로 들어간다. 
    ```

    - 바닐라 자바스크립트로 ajax 요청하는법
    ```
    fetch('url')
    .then(rese => res.json()) //json 파일을(문자) object 나 array로 변환해주기 위해 해당 코드를 씀
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

    then 이 done, catch 가 fail이다. 
    참고로 말하자면
    서버와 유저간 통신에는 문자자료만 주고 받을 수 있다. array나 object를 주고받을 수 없음. 그래서 배열이나 객체를 보내고 싶을때는 "[배열]", "{객체 : 밸류}" 이런식으로 배열, 객체를 따옴표로 감싸서 보내야 되는데, 이걸 자동으로 만들어주는게 json 파일이다. 그 말은 json 파일은 문자로만 표현되어있다는 말이다.
    바닐라에서는 .then(resp => resp.json()) 과 같이 json 을 변환해줘야 하지만, jquery 에서는 json 을 자동으로 알아서 object 나 array로 변환시켜줘서 굳이 사용할 필요가 없다.

    ```

    - axios 라는 라이브러리가 있는데, 뷰나 리액트에서 많이 쓰는 ajax를 편하게 사용 할 수 있게 해주는 라이브러리다.
        

<br><br>

- 목록 정렬 
    - array 정렬하기
    1. sort 함수
        ```
        var arr = [1,3,5,6,2,8,9]
        arr.sort();
        
        그냥 sort를 쓰면 문자순으로 정렬해줌 ㄱㄴㄷ순

        arr.sort(function(a,b) {
            return a - b //오름차순(작은것부터 큰거)
            return b - a //내림차순(큰것부터 작은것)
        })

        숫자정렬

        sort 콜백함수의 파라미터는 배열 안의 자료임.
        return 에 남는 값이, 양수면 a 를 우측으로
        음수면 b 를 우측으로 보내줌 (a - b = 음수 or 양수)
        ```
    - array 안에 object 정렬하기 
        ```
         products.sort(function(a ,b){
            return a.price - b.price;
        })

        배열안에 객체가 있고, 객체 내부의 값들 중, 비교하고싶은 데이터의 key값을 뽑아서 위 처럼 정렬해주면 된다. 
        ```

    2. filter 함수: array 자료 중, 원하는 데이터만 뽑아주는 함수
        ```
        const newArr = arr.filter(function(a){
                            return 조건식(어떤 자료를 남길것인지를)
                            return a < 4 (4이하의 자료만 남기겠다.)
                        })

        a 는 동일하게 배열 안 데이터를 의미함.
        filter 는 기존의 arr 을 변화시켜주는게 아니고, 기존 arr 에서 조건에 해당하는 값을 뽑아와서 새로운 arr 을 생성해서 넣어줘야 하기때문에 변수에 담아서 사용해야한다.
        ```

    3. map 함수 : array 자료 전부를 변경할때 사용
        ```
        arr.map(function(a){
            return a * 4 //모든 데이터에 4를 곱해줌. 
        })

        사용 예시 예를들어 글로벌 마켓사이트에서, 가격을 원화,미화 등등으로 변경시켜야 할 때, 모든 가격에 거시기만 추가해주면 뭐 .. 
        ```

<br><br>

- 로컬 스토리지(localStorage)
    - 유저가 선택한 데이터를, 서버가 아닌 유저의 브라우저에 저장할 수 있는 공간
    - 반 영구적으로 저장 할 수 있다.
    - 위치 : 브라우저 개발자 도구 > Application 탭 > Local Storage
    - Local Storage, Session Storage 는 객체처럼 key: value 값 형태로 저장 가능
        - 총 용량은 5MB 이다
        - 문자/숫자만 저장 할 수 있다.
        - 세션과 로컬스토리지 차이는, 세션스토리지는 브라우저를 재시작하면 데이터가 사라지고, 로컬스토리지는 계속 남아있다.(유저가 브라우저를 청소하지 않는 이상)
        - 세션 스토리지를 쓰려면, localStorage 자리에 sessionStorage 로 변경해주면 됨.
    - indexedDb : 대용량 무언가를 저장하는데 복잡한 방식임
    - Cookies : 주로 로그인 정보 같은것을 저장하는 장소
    - Cache Storage : html , css 파일을 저장해둔곳.
    <br><br>
    - 로컬스토리지 사용하는법
        ```
        localStorage.setItem('key','value') //로컬스토리지에 저장하기
        localStorage.getItem('key') //저장해둔 데이터 뽑아오기
        localStorage.removeItem('key') //저장해둔 데이터 삭제하기
        ```

    - 로컬스토리지에 강제로 배열, 객체 넣는법
        - arr/obj 를 JSON 으로 변경해서 저장하면 된다.
        ```
        const arr = [1,2,3]
        const jsonArr = JSON.stringify(arr); //배열을 JSON 으로 변환

        localStorage.setItem('num', jsonArr);
        const getData = localStorage.getItem('num'); //저장한 JSON 파일을 변수에 담고

        JSON.parse(getData) //다시 배열로 변경해줌
        ```

        - 간단하게 배열 넣는 법
        ```
        const arr = [1,2,3]
        localStorage.setItem('key',JSON.stringify(arr))
        ```

    - 로컬스토리지 데이터 수정하기
        1. 로컬스토리지에 저장된 데이터는 바로 직접 수정이 불가능하다.
        2. 로컬스토리지에 저장된 데이터를 수정하기 위해서는
            1. 데이터를 다시 뽑아온다.
            2. 뽑아온 데이터를 배열로 변경해준다.
            3. 배열로 변경된 데이터를 수정한다(추가,삭제,변경 등등)
            4. 수정한 배열을 다시 setItem에 저장해준다. 
            ```
            if (localStorage.getItem('cart') != null) {
            let getStorage = JSON.parse(localStorage.getItem('cart'));
            getStorage.push(getProductName);

            let removeSame = [...new Set(getStorage)];

            localStorage.setItem('cart', JSON.stringify(removeSame));
            } else {
                localStorage.setItem('cart',JSON.stringify([getProductName]));
            }

            첫번째 조건문. cart로 저장된 데이터가 빈값이 아니면(데이터가 있으면)~ 블라블라
            두번째 cart로 저장된 데이터가 없으면 추가해줘~
            ```
<br><br>

- 일반 function 은 document.ready 밖에 존재해야한다.
    - 한번실행하고 말게 아니라 지속적으로 사용할 것이니깐..!


<br><br>

- 스크롤 이벤트
    - 스크롤의 길이(특정 구간 ex: 100 ~ 300 )를 .scrollTop() 으로 구해서, 특정 위치에서 스크롤의 양에따라 특정 UI를 서서히 변하게 하고싶을때
    ```
    1차함수를 구하면 된다.

    const z = a * scrollTop() + b;

    a = c * 650(변경시작 스크롤탑지점) + d;
    b = c * 1150(종료되는 스크롤탑지점) + d;


    a(시작지점에서 내가 넣고싶은 값) = c * 650(변경시작 스크롤탑지점) + d;
    b(종료되는 시점에서 내가 넣고싶은 값) = c * 1150(종료되는 스크롤탑지점) + d;

    예를들어서 내가 특정 요소의 opacity 를 스크롤 650의 위치에서는 1을 넣고 싶고
    스크롤 1150의 지점에서는 0을 넣고싶은 상황임. 

    a 에는 시작지점에 넣고싶은값
    b 에는 종료지점에 넣고싶은 값을 넣어주면 되는것이다. 
    ```

<br><br>

- mousedown, mouseup, mousemove 이벤트
    - mousedown : 마우스를 클릭했을때(눌렀을때) 발생하는 이벤트
    - mouseup : 마우스를 클릭하고 손을땔따(마우스 버튼이 올라올때) 발생하는 이벤트
    - mousemove : 마우스가 움직일때 발생하는 이벤트
        - mousemove 이벤트에서 콜백함수에 e.clientX는 현재 마우스의 X좌표를 알려줌 Y는 당연히 Y좌표겠지.
    - 모바일에서도 잘 동작하기 위해서는 touch 이벤트로 바꿔줘야한다.
        - touchstart
        - touchmove
        - touchend 
        - 터치이벤트에서 e.clientX 등의 좌표를 뽑아내려면 추가해야될게 있다. 아래와 같이 touches[0]를 넣어줘야 하는데, 이것은 터치할때 손가락이 여러개 닿을 수 있으니, 몇개나 닿는지를 넣어주는 함수이다.
        ```
        $('div').on('touchstart',function(e){
            e.touches[0].clientX 
        })

        $('div').on('touchend',function(e){
            e.changedTouches[0].clientX 
        })

        단 주의할 점은 touchend 는 touches 가 아니라 changedTouches 를 해야된다. 이유는 모름.
        ```
    - 터치와 마우스 이벤트 둘다 사용하려면... hammer.js 라이브러리를 쓰면 편하다고 한다.

<br><br>

- switch 문법
    - if 문과 유사한 문법이다.
    - if 와 차이점은, if문은 여러가지 등호들(and,or,등등)을 넣을 수 있지만, switch는 === 등호밖에 안들어간다. 변수의 값이 3이라면, 4라면, 5라면과 같이 일차원적으로밖에 못함.
    - break 를 넣지않으면, switch에 들어있는 모든 함수가 다 동작하게됨.
    ```
    switch (변수) {
        //변수에는 조건이 들어간다. 변수가 00이라면~
        
        case 3:
            alert('변수가 3이네요');
            break //switch문 실행을 중지시켜준다(return)
        
        case 4:
            alert('변수가 4네요');
            break
        
        default:
            alert('위의 변수에 다 안걸리면 이거 실행해주세요. if 문의 else와 동일하네')
    }
    ```

<br><br>

- 검색기능 구현 
    - 실제로 검색기능을 구현할 때에는, ajax로 하진 않음. 왜냐하면 데이터가 수만개가 넘어가는데, ajax로 해버리면 검색할때마다 수만개를 다 불러와야 하기 때문. 따로 검색 API 가 존재할것이라고 함. 
    - 

<br><br>

- concat 매소드
    - 문자열 + 문자열을 합치거나 배열 + 배열을 합치는 매소드이다.
    ```
    var test1 = "Hello";
    var test2 = "World";
    var test3 = "!";
    console.log(test1.concat(test2));
    // result : HelloWorld
    console.log(test1.concat(test2, test3));
    // result : HelloWorld!

    var test1 = [1, 2, 3];
    var test2 = [4, 5, 6];
    var test3 = ["a", "b", "c"];
    console.log(test1.concat(test2));
    // result : 1, 2, 3, 4, 5, 6
    console.log(test2.concat(test3));
    // result : 4, 5, 6, a, b, c
    ```

    - 주의할점은. 저렇게 합친다고 해서 원본 배열(메소드 체이닝을 붙이는 원본)이 변하거나 하는게 아니라서, 합쳐진 배열을 파라미터로 사용하려면, 그냥 
    원본.concat(붙이고싶은배열); 이걸 통으로 매개변수에 넣어주면 된다. 

<br><br>

- empty() jquery 메소드 사용
    - 기존의 내용을 다 지우고 새로 append 해야할때, $('선택자').empty().append(html); 이렇게 해줘도 된다.

<br><br>

- $.each문 사용법
    ```
    $.each(배열, 콜백함수)

    $.each(list, function(){
        html += `<span>${this.test1}</span>`
    })

    위처럼 html 그릴때 변수 넣는 부분에 this 는 forEach에서 콜백함수 첫번째 인자와 동일하다. 
    ```

<br><br>

- drag & drop 
    - 드래그를 할 요소에 draggable="true" 속성값을 넣어준다. 
    - 드래그를 시작하면 dragstart 라는 이벤트가 발생한다.
    - 드래그를 가져다 놓을곳에 드랍하면 drop 이벤트가 발생한다. 
    - 드랍을 할 위치에는 dragover 이벤트를 붙여서 e.preventDafault() 를 넣어줘야 한다. 


<br><br>

- Ajax 사용할때
    - 한번 ajax를 통해서 데이터를 불러오면, 추후 재사용을 하기 위해 데이터를 전역변수에 옮겨두고 계속 사용하는게 좋다. 
    검색기능 구현할때, 계속 ajax문 안에 두지 안흔것처럼 계속해서 데이터를 불러올필요 없으니깐 데이터 불러왔을 때 그리는 부분만 ajax문 안에 넣고, 불러온 데이터를 가지고 다른 무언가를 할때는 바깥으로 빼는게 좋음.

<br><br>

- find, findIndex 함수 
    - findIndex 함수 
        - 배열을 검색해, 조건에 맞는 값이 있는지 확인한 후 맞는 값이 있으면 해당 값의 index를 반환하고, 없으면 -1 을 반환함.
        ```
        arr = [1,2,3,4,5]

        let lookFor = arr.findIndex(function(element,index,arr){
            return element == 3 //요소를 돌면서 3이랑 동일한 값을 찾아라 -> 2를 반환해줌. 3의 인덱스 넘버
        })
        ```

    - find 함수
        - 배열 내부의 값을 검색해서, 그 값이 배열 내부에 존재하면 배열을 통째로 반환해준다.
        ```
        arr = [1,2,3,4]

        let tOrF = arr.find((element,index,arr) => return element == 3) //arr 에 3이 있으면 arr을 통째로 반환해라
        ```