// image sources:
// "https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/DogHikingGear1.jpg",
// "https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/BestDogHikingPacks3.jpg",
// "https://www.trekkinn.com/f/13648/136488596_8/ruffwear-approach-pack.jpg",
// "https://s3.amazonaws.com/backpackersverse/wp-content/uploads/2016/12/15212859/Interested-In-Hiking-The-Appalachian-Trail-With-A-Dog.jpg",
// "https://i2.wp.com/www.hikingwithdogs.xyz/wp-content/uploads/2016/09/IMG_6174.jpg",
// "https://i.pinimg.com/originals/87/d1/9a/87d19ae93a331481120c5d97b528c478.jpg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWIIk39hRekEpGR7qhkUPM29yrhaeL7WDdemXLVi0Ot-e31WaWQ",
// "https://i.pinimg.com/originals/b0/84/56/b08456b959b1be81d765b0495241902d.jpg",
// "https://www.rei.com/media/edb94122-d2d2-4f52-ac52-11e92be1955f?size=784x588"

class cartItem{

    constructor(itemColor,itemSize, itemImage, shipToMe, pickUpInStore, itemQuantity)
    {
        this.itemColor = itemColor
        this.itemSize = itemSize
        this.itemImage = itemImage
        this.shipToMe = shipToMe
        this.pickUpInStore = pickUpInStore
        this.itemQuantity = itemQuantity
    }

}

var cart = new Array();
// localStorage.storedCartItems = "";

var picts = ["fanny1.jpg", "fannyBlue1.jpg", "fannyGreen1.jpg"]
var sources = ["https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/DogHikingGear1.jpg",
               "https://s3.amazonaws.com/backpackersverse/wp-content/uploads/2016/12/15212859/Interested-In-Hiking-The-Appalachian-Trail-With-A-Dog.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWIIk39hRekEpGR7qhkUPM29yrhaeL7WDdemXLVi0Ot-e31WaWQ",]

$(document).ready(()=>{
    // console.log("ready")

    // select a color
    $(document).on("click", ".color-dot", function() {
        $(this).parent().children("span").each(function() {
          $(this).removeClass("active-color");
          $(this).addClass("inactive-color");
        });
        $(this).addClass("active-color");
        // change the pictures
        if ($(this).hasClass("color1")) {
            $("#big-image").attr("src","../images/fanny1.jpg");
            $("#thumbnail1").attr("src", "../images/fanny1.jpg");
            $("#thumbnail2").attr("src", "../images/fanny2.jpg");
            $("#thumbnail3").attr("src", "../images/fanny3.jpg");
        }
        else if ($(this).hasClass("color2")) {
            $("#big-image").attr("src","../images/fannyBlue1.jpg");
            $("#thumbnail1").attr("src", "../images/fannyBlue1.jpg");
            $("#thumbnail2").attr("src", "../images/fannyBlue2.jpg");
            $("#thumbnail3").attr("src", "../images/fannyBlue3.jpg");
        }
        else if ($(this).hasClass("color3")) {
            $("#big-image").attr("src","../images/fannyGreen1.jpg");
            $("#thumbnail1").attr("src", "../images/fannyGreen1.jpg");
            $("#thumbnail2").attr("src", "../images/fannyGreen2.jpg");
            $("#thumbnail3").attr("src", "../images/fannyGreen3.jpg");
        }
    });

    // select a size
    $(document).on("click", ".size-dot", function() {
        $(this).parent().children("span").each(function() {
          $(this).removeClass("active-size");
          $(this).addClass("inactive-size");
        });
        $(this).addClass("active-size");
    });

    // add to cart
    sessionStorage.itemColor = "";
    sessionStorage.itemSize = "";
    sessionStorage.itemImage = "fanny1.jpg";
    sessionStorage.shipToMe = 0;
    sessionStorage.pickUpInStore = 0;
    sessionStorage.itemQuantity = 0;
    // total of all items
    sessionStorage.numInCart = 0;
    $("#add-to-cart").click(function() {
        console.log("hello");

        // get item color
        $(".colors").children("span").each(function() {
          if ($(this).hasClass("active-color")) {
            if ($(this).hasClass("color1")) {
                sessionStorage.itemColor = "orange";
                sessionStorage.itemImage = "fanny1.jpg";
            }
            else if ($(this).hasClass("color2")) {
                sessionStorage.itemColor = "blue";
                sessionStorage.itemImage = "fannyBlue1.jpg";
            }
            else if ($(this).hasClass("color3")) {
                sessionStorage.itemColor = "green";
                sessionStorage.itemImage = "fannyGreen1.jpg";
            }
          }
        });
        console.log(sessionStorage.itemColor);

        // get item size
        $(".sizes").children("span").each(function() {
          if ($(this).hasClass("active-size")) {
            if ($(this).hasClass("small")) {
                sessionStorage.itemSize = "small";
            }
            else if ($(this).hasClass("medium")) {
                sessionStorage.itemSize = "medium";
            }
            else if ($(this).hasClass("large")) {
                sessionStorage.itemSize = "large";
            }
          }
        });
        console.log(sessionStorage.itemSize);

        // itemQuantity
        sessionStorage.itemQuantity = Number($("#quantity-input").val());
        // console.log("quantity: " + $("#quantity-input").val());
        // add to number in cart
        // console.log(Number(sessionStorage.itemQuantity));
        
        sessionStorage.numInCart = Number(sessionStorage.numInCart) + Number(sessionStorage.itemQuantity);
        // console.log(Number(sessionStorage.numInCart));
        $(".number-in-cart-dot").text(sessionStorage.numInCart);
        // reveal number dot 
        $(".number-in-cart-block").show();

        // delivery
        if ($(".ship-to-me").children([0]).prop("checked")) {
            sessionStorage.shipToMe  = Number(sessionStorage.shipToMe) + Number(sessionStorage.itemQuantity);
        }
        // else if ($(".pick-up").children([0]).prop("checked")) {
        else {
            sessionStorage.pickUpInStore = Number(sessionStorage.pickUpInStore) + Number(sessionStorage.itemQuantity);
        }

        // make item
        var newCartItem = new cartItem(sessionStorage.itemColor, sessionStorage.itemSize, sessionStorage.itemImage, 
            sessionStorage.shipToMe, sessionStorage.pickUpInStore, sessionStorage.itemQuantity);

        // console.log(newCartItem);
        // console.log(newCartItem.itemColor);
        cart.push(newCartItem);


        // add item to cart popup

        // var cartItemPictureBlock = $("<div>", {"class": "cart-item-picture-block"});
        // $(".modal-content").append(cartItemPictureBlock);
        // var cartItemImage = $("<img>", {"class": "cart-item-image", "src": "../images/" + sessionStorage.itemImage});
        // $(".cart-item-picture-block").append(cartItemImage);

        sessionStorage.setItem("cartItems", JSON.stringify(cart));
        // localStorage.storedCartItems = JSON.parse(sessionStorage.getItem("cartItems"));
        // console.log('HREE');
        // console.log(storedCartItems[0]);
        sessionStorage.setItem("numberInCart", JSON.stringify(sessionStorage.numInCart));
        var storedNumberInCart = JSON.parse(sessionStorage.getItem("numberInCart"));

    });

    // store in cart
    $(document).on("click", ".cart-link", function() {
        // sessionStorage.setItem("cartItems", JSON.stringify(cart));
        // storedCartItems = JSON.parse(sessionStorage.getItem("cartItems"));
        // console.log('HREE');
        // console.log(storedCartItems);
        // sessionStorage.setItem("numberInCart", JSON.stringify(sessionStorage.numInCart));
        // var storedNumberInCart = JSON.parse(sessionStorage.getItem("numberInCart"));
        $( document ).ready(function() {
            // set cart items number
            // console.log(storedNumberInCart);
            // $(".number-in-cart-dot").text(storedNumberInCart);

            // console.log("hello");
            // console.log(storedCartItems[0]);
            // var itemCard = document.createElement('div');
            // itemCard.addClass("item-card");
            // $(".all-items").append(itemCard);
            // console.log($(".all-items").children[0]);
            // var close = document.createElement('span');
            // close.addClass("close");
            // $(".item-card").append(close);
            // var cardImageBlock = document.createElement('div');
            // cardImageBlock.addClass("card-image-block");
            // $(".item-card").append(cardImageBlock);
            // var cardImage = $document.createElement('img');
            // cardImage.attr("src", "../images/fanny1.jpg");
            // $(".card-imge-block").append(cardImage);

        });
    });

});

function displayCart() {

    console.log("hellow");

    // sessionStorage.setItem("cartItems", JSON.stringify(cart));
    // var storedCartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    console.log(sessionStorage.getItem("cartItems"));
    var items = sessionStorage.getItem("cartItems");
    // console.log(items.get(0));

    // sessionStorage.getItem("cartItems").forEach(function (arrayItem) {
    for (var arrayItem in sessionStorage.getItem("cartItems")) {

        // var i;
        // for (i = 0; i < sessionStorage.getItem("cartItems").length; ++i) {

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
        size.innerHTML = "Size: ";
        $(".card-item-text-block1").append(size);
        // size.innerHTML += arrayItem.itemsize;
        var color = document.createElement('p');
        color.className = "card-item-color";
        color.innerHTML = "Color: ";
        $(".card-item-text-block1").append(color);

        color.innerHTML += "hae;flkajw;elkfajwl;";

        var cardItemTextBlock2 = document.createElement('div');
        cardItemTextBlock2.className = "card-item-text-block2";
        $(".all-card-item-text").append(cardItemTextBlock2);

        var quantity = document.createElement('p');
        quantity.className = "card-item-quantity";
        quantity.innerHTML = "Qty: ";
        $(".card-item-text-block2").append(quantity);

        var cardItemTextBlock3 = document.createElement('div');
        cardItemTextBlock3.className = "card-item-text-block3";
        $(".all-card-item-text").append(cardItemTextBlock3);

        var price = document.createElement('p');
        price.className = "card-item-price";
        price.innerHTML = "Price: ";
        $(".card-item-text-block3").append(price);
    }
}


