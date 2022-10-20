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
   