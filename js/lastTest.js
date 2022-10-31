$(document).ready(function(){
    callAjax();
})

let products = [];
let cart = [];

function callAjax(){
    $.ajax({
        url:'/store.json',
        dataType: 'JSON',
        method: 'GET',
        success: function(data){
            products = data.products;
            if(data.products.length > 0){
                drawCardForList(data.products);
            
                $('#search').on('keyup',function(e){
                    let _value = $(this).val();

                    const list = [];
                    if (_value.length != 0) {
                        $.each(data.products, function(){
                            let _title = this.title;
                            let _brand = this.brand;
                            if (_title.includes(_value) || _brand.includes(_value)){
                                list.push(this);
                                console.log(this);
                                drawCardForList(list);
                            }
                        })
                    }else{
                        list.concat(data.products);
                        drawCardForList(list.concat(data.products));   
                    }
                })

            };

            $('.addCart').on('click',function(e){
                //해당제품 pk 값 뽑아서
                let cartId = e.target.dataset.code;

                //cart 에 담긴 놈중에 같은 id 값을 가진 객체가 있는지 검사
                let findItemPk = cart.findIndex((a) => {return a.id == cartId})

                //동일한 값이 카트에 담겨있지 않으면
                if(findItemPk == -1){
                    //새로운 변수에, 객체 데이터를 담고
                    let newProduct = products.find((a) => {return a.id == cartId})
                    //객체에 키값을 하나 추가해준다.
                    newProduct.count = 1;
                    //객체를 배열에 넣어준다.
                    cart.push(newProduct);
                } else {
                    //이미 들어가있는 데이터중, 같은 id 값을 가진 데이터를 찾아서, 해당 데이터의 카운트의 값만 추가해준다.
                    cart[findItemPk].count++;
                }

                //어차피 카트에는, 동일한 데이터는 담기지 않기 때문에 _html += 으로 계속 붙여주고, append 할때 한번 비우고 넣어준다.
                let _html = '';
                let _sumPrice = 0;
                cart.forEach(function(item){
                    _html += drawCardInCart(item);
                    _sumPrice += item.price * item.count;
                })

                $('.dragIn').empty().append(_html);
                $('.addAll').html('합계 : '+ _sumPrice +'원')

            })

            //드래그를 시작할때, 드래그 되는 요소에 data를 심어준다.
            $('div[name=items').on('dragstart',function(e){
                e.originalEvent.dataTransfer.setData('id', e.target.dataset.code);
            });

            //드롭할때 드래그 되는 요소에 심어둔 data를 뽑아와서 변수에 저장한다.
            $('.dragIn').on('drop',function(e){
                let cartId = e.originalEvent.dataTransfer.getData('id');
                //버튼을 클릭하는걸 미리 짜두었으니 이걸로 대체. 물론 새로 만들어도 무방하다 위와 동일하게.
                $('.addCart').eq(cartId).click();
            })
        },
        error :function(){
            alert('오류 발생요.');
        }
        
    });
}


function drawCardForList(list){

    let html = '';
    $.each(list, function(){
        html += `<div class="col-lg-3" draggable="true" name="items" data-code="${this.id}">
                    <div class="card-box">
                        <div class="imgWrap">
                            <img src="../assets/images/${this.photo}" alt="">
                        </div>
                        <h5 class="product-title">${this.title}</h5>
                        <p class="store">${this.brand}</p>
                        <span class="price">가격 : ${this.price}</span>
                        <button type="button" class="btn btn-dark addCart" data-code="${this.id}">담기</button>
                    </div>
                </div>`;
    })
    $('.products').empty().append(html);
}

function drawCardInCart(obj) {
    return  `<div class="col-lg-3" draggable="true" name="items" data-code="${obj.id}">
        <div class="card-box">
            <div class="imgWrap">
                <img src="../assets/images/${obj.photo}" alt="">
            </div>
            <h5 class="product-title">${obj.title}</h5>
            <p class="store">${obj.brand}</p>
            <span class="price">가격 : ${obj.price}</span>
            <button type="button" class="btn btn-dark">담기</button>
            <input type="text" value="${obj.count}"/>
        </div>
    </div>`;
}


function dragOver(e){
    e.preventDefault();
}

function addPrice(a, b){

}