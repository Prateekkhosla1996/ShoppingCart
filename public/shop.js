function fetchProducts(done){
    $.get('/api/products',(data)=>{
        done(data)
    })
}
function addProduct(name,manuf,price,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manuf,
        price:price
    },function(data){
        done(data)
    })
}
function createProductcard(product){
    return(`  
     <div class="col-4 card mx-2 p-1">
        <h4 class="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col">
           Rs ${product.price}
        </div>
            <div class="col">
                <button class="btn btn-primary">BUY NOW</button>
            </div>
        </div>
    
    </div>`)
}