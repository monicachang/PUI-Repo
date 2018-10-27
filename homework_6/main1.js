$(document).ready(()=>{

    console.log("hellow");
    var i = 0;


    // sessionStorage.setItem("cartItems", JSON.stringify(cart));
    // var storedCartItems = JSON.parse(sessionStorage.getItem("cartItems"));

    // console.log(JSON.parse(sessionStorage.getItem("cartItems")));
    // var items = JSON.parse(sessionStorage.getItem("cartItems"));
    console.log(JSON.parse(sessionStorage.getItem("allAttributes")));
    var items = JSON.parse(sessionStorage.getItem("allAttributes"));
    console.log(items[0]);

while (i < items.length-1) {
        console.log(items.length);
        i = Number(i) + 1

        var itemCard = document.createElement('div');
        itemCard.className =  "item-card";
        $(".all-items").append(itemCard);
        var close = document.createElement('span');
        close.className = "close";
        close.innerHTML = "x";
        $(".item-card").append(close);
        var cardImageBlock = document.createElement('div');
        cardImageBlock.className = "card-image-block";
        $(".item-card").append(cardImageBlock);
        var cardImage = document.createElement('img');
        cardImage.src = "../images/fanny1.jpg";
        $(".card-image-block").append(cardImage);

        var allCardItemText = document.createElement('div');
        allCardItemText.className = "all-card-item-text";
        $(".item-card").append(allCardItemText);

        var cardItemTextBlock1 = document.createElement('div');
        cardItemTextBlock1.className = "card-item-text-block1";
        $(".all-card-item-text").append(cardItemTextBlock1);

        var title = document.createElement('p');
        title.className = "card-item-title";
        title.innerHTML = "Forest Fanny";
        $(".card-item-text-block1").append(title);
        var size = document.createElement('p');
        size.className = "card-item-size";
        size.innerHTML = "Size: M";
        $(".card-item-text-block1").append(size);
        // size.innerHTML += arrayItem.itemsize;
        var color = document.createElement('p');
        color.className = "card-item-color";
        color.innerHTML = "Color: ";
        $(".card-item-text-block1").append(color);

        color.innerHTML += "Blue";

        var cardItemTextBlock2 = document.createElement('div');
        cardItemTextBlock2.className = "card-item-text-block2";
        $(".all-card-item-text").append(cardItemTextBlock2);

        var quantity = document.createElement('p');
        quantity.className = "card-item-quantity";
        quantity.innerHTML = "Qty: 1";
        $(".card-item-text-block2").append(quantity);

        var cardItemTextBlock3 = document.createElement('div');
        cardItemTextBlock3.className = "card-item-text-block3";
        $(".all-card-item-text").append(cardItemTextBlock3);

        var price = document.createElement('p');
        price.className = "card-item-price";
        price.innerHTML = "$26.00 ";
        $(".card-item-text-block3").append(price);
}
});