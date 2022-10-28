$(document).ready(function(){
    callAjax();
})

function callAjax(){
    $.ajax({
        url:'/store.json',
        dataType: 'JSON',
        method: 'GET',
        success: function(data){

            if(data.products.length > 0){
                // data.products.forEach(function(item, index){
                //     makingCard(item);
                // });
                drawCardForList(data.products);

                console.log(data.products)
            
                $('#search').on('keyup',function(e){
                    let _value = $(this).val();

                    const list = [];
                    if (_value.length != 0) {
                        $.each(data.products, function(){
                            let _title = this.title;
                            let _brand = this.brand;
                            if (_title.includes(_value) || _brand.includes(_value)){
                                list.push(this);
                            }
                        })
                    }else{
                        list.concat(data.products);
                    }
                    drawCardForList(list);
                    // if (_value.length != 0) {
                    //     data.products.forEach(function(item, index){
                    //         let _title = item.title;
                    //         let _brand = item.brand;
        
                    //         if (_title.includes(_value) || _brand.includes(_value)){
                    //             // $('.products').empty();
                    //             // makingCard(item);
                    //             html += drawCard(item);
                    //             $('.products').empty().append(html);
                    //         }
                    //     })
                    // } else if (_value.length == 0) {
                    //     data.products.forEach(function(item, index){
                    //         // makingCard(item);
                    //         html += drawCard(item);
                    //         $('.products').empty().append(html);
                    //     });
                    // }
                })

            }else{
                $('.products').empty().append('<h3>데이터가 ㄴㄴ</h3>');
            }

        },
        error :function(){
            alert('오류 발생요.');
        }
        
    });
}

function drawCardForList(list){

    let html = '';
    $.each(list, function(){
        html += `<div class="col-lg-3">
                    <div class="card-box">
                        <div class="imgWrap">
                            <img src="../assets/images/${this.photo}" alt="">
                        </div>
                        <h5 class="product-title">${this.title}</h5>
                        <p class="store">${this.brand}</p>
                        <span class="price">가격 : ${this.price}</span>
                        <button type="button" class="btn btn-dark">담기</button>
                    </div>
                </div>`;
    })
    $('.products').empty().append(html);

}

function drawCard(obj){
    return `<div class="col-lg-3">
                <div class="card-box">
                    <div class="imgWrap">
                        <img src="../assets/images/${obj.photo}" alt="">
                    </div>
                    <h5 class="product-title">${obj.title}</h5>
                    <p class="store">${obj.brand}</p>
                    <span class="price">가격 : ${obj.price}</span>
                    <button type="button" class="btn btn-dark">담기</button>
                </div>
            </div>`;
}

function makingCard (obj){
    const productCard = `<div class="col-lg-3">
                            <div class="card-box">
                            <div class="imgWrap">
                                <img src="../assets/images/${obj.photo}" alt="">
                            </div>
                            <h5 class="product-title">${obj.title}</h5>
                            <p class="store">${obj.brand}</p>
                            <span class="price">가격 : ${obj.price}</span>
                            <button type="button" class="btn btn-dark">담기</button>
                        </div>`;
    $('.products').empty().append(productCard);
}