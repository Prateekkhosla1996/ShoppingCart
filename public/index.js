
$(function(){
    let productList=$('#products-list')
    
    fetchProducts((products)=>{
        productList.empty()
        for(product of products){
            productList.append(createProductcard(product))
        }
    })
})