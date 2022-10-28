$.ajax({
    url:'/store.json',
    dataType: 'JSON',
    method: 'GET',
    success: function(data){
        console.log(data.products.length);

        if(data.products.length > 0){
            data.products.forEach(function(item, index){
                console.log('success');
                const productCard = `<div class="col-lg-3">
                                        <div class="card-box">
                                        <div class="imgWrap">
                                            <img src="../assets/images/${item.photo}" alt="">
                                        </div>
                                        <h5 class="product-title">${item.title}</h5>
                                        <p class="store">${item.brand}</p>
                                        <span class="price">가격 : ${item.price}</span>
                                        <button type="button" class="btn btn-dark">담기</button>
                                    </div>`;
                $('.products-wrap').append(productCard);
            });
        }
    },
    error :function(){
        alert('오류.');
    }
    
});