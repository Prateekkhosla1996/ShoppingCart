$(function(){
    let productName = $('#productname')
    let productManuf = $('#productmanufacturer')
    let productPrice = $('#productprice')
    $('#btnproductadd').click(function(){
        addProduct(
            productName.val(),
            productManuf.val(),
            productPrice.val(),
            function(addedProduct){
                window.alert("Added " + addedProduct.name + " to database");
            }
            )
    })
})