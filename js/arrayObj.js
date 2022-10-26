var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

$(document).ready(function(){
    $(products).each(function(index,item){
        cardMaker(item);
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
                cardMaker(item);  
            })
        })
        .fail(function(){
            alert('정보가져오기 실패')
        })

        
    })

    
    //가격순 정렬
    $('#sorting').on('click',function(){
        products.sort(function(a ,b){
            return a.price - b.price;
        })

        $('#itemContainer').empty();

        $(products).each(function(index,item){
            cardMaker(item);
        })
    })

    //가나다순 정렬
    $('#sorting2').on('click',function(){
        products.sort(function(a ,b){
            if (a.title > b.title) return -1;
            else if (b.title > a.title) return 1;
            else return 0;
        })

        $('#itemContainer').empty();

        $(products).each(function(index,item){
            cardMaker(item);
        })
    })

    //6만원 이하 상품만 보기
    $('#sorting3').on('click',function(){
        const filteringList = products.filter(function(a){
            return a.price < 60000;
        })

        $('#itemContainer').empty();

        $(filteringList).each(function(index,item){
            cardMaker(item);
        })
    })

    function cardMaker(list) {
        const cardItemMore = `<div class="col-sm-4" style="margin-bottom:20px;">
                                <img src="https://via.placeholder.com/600" class="w-100">
                                <h5>${list.title}</h5>
                                <p>가격 : ${list.price}</p>
                                <button type="button" class="btn btn-secondary buy">구매</button>
                            </div>`
                $('#itemContainer').append(cardItemMore);
    }

    $(".buy").on('click' ,function(){
        const getProductName = $(this).siblings('h5').text();
        const obj = {
            title : getProductName,
            Qtt : 1,
        };

        if (localStorage.getItem('cart') != null) {
            let getStorage = JSON.parse(localStorage.getItem('cart'));
            $(getStorage).each(function(index, item){
                if(item.title == getProductName) {
                    item.Qtt++ 
                }
            })

            let sameFilter = getStorage.filter(it => it.title.includes(getProductName));
            if (sameFilter.length == 0) {
                getStorage.push(obj);
            }

            localStorage.setItem('cart', JSON.stringify(getStorage));
        } else {
            localStorage.setItem('cart',JSON.stringify([obj]));
        }
    })

})
// let removeSame = [...new Set(getStorage)];

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