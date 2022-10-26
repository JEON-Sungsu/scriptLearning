var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

$(document).ready(function(){
    let cardItem = '';
    $(products).each(function(index,item){
        cardItem = `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${item.title}</h5>
                        <p>가격 : ${item.price}</p>
                    </div>`
        $('#itemContainer').append(cardItem);
    })

    let clickCount = 1;
    $('#more').click(function(){
        let callUrl = '';
        if (clickCount == 1) {
            callUrl =  'https://codingapple1.github.io/js/more1.json';
            clickCount++
        } else if (clickCount == 2) {
            callUrl = 'https://codingapple1.github.io/js/more2.json'
            clickCount = 1;
            $(this).css('display','none')
        }

        $.get(callUrl)
        .done(function(data){
            $(data).each(function(index,item){
               const cardItemMore = `<div class="col-sm-4">
                                <img src="https://via.placeholder.com/600" class="w-100">
                                <h5>${item.title}</h5>
                                <p>가격 : ${item.price}</p>
                            </div>`
                $('#itemContainer').append(cardItemMore);
            })
        })
        .fail(function(){
            alert('정보가져오기 실패')
        })
    })
})


  //배열에서 자료 찾아내기.

  const arr = ['Howard','Toni', 'Thor', 'Legend']

  function findName(name){
    arr.forEach(function(el){
        if (el == name) {
            console.log('찾음');
        }
    })

//    for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if(arr[i] == name) {
//             return false;
//         }

//    }
}

// findName('Thor')

//구구단 만들기
// const arr99 = [2,3,4,5,6,7,8,9];

// for (let i = 0; i < arr99.length; i++){
//     for (let item = 2; item < 10; item++){
//         console.log(item * arr99[i]);
//     }
// }

//평균점수 구하는 계산기 만들기

function sumScore(before, now){
    const sum = before;
    let beforeSum = 0;
    let beforeAverage = 0;
    let comparedScore = 0;
    for (let i = 0; i < sum.length; i++) {
        beforeSum += sum[i];
    }

    beforeAverage = beforeSum / sum.length;
    comparedScore = Math.abs(beforeAverage - now);

    console.log(comparedScore)

    if (comparedScore > now) {
        console.log(`점수가 평균보다 ${comparedScore} 만큼 떨어짐`)
    } else {
        console.log(`점수가 평균보다 ${comparedScore} 만큼 오름`)
    }
}

// sumScore([10,20,30,40,50], 40);

//ajax 사용하기

// $.get('https://codingapple1.github.io/price.json')
// .done(function(data){
//     console.log(data.price);
// })
// .fail(function(){
//     alert('에러')
// })