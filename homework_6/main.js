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

    constructor(itemColor,itemSize, itemImage, shipToMe, pickUpInStore, itemQuantity, itemName, itemPrice)
    {
        this.itemColor = itemColor
        this.itemSize = itemSize
        this.itemImage = itemImage
        this.shipToMe = shipToMe
        this.pickUpInStore = pickUpInStore
        this.itemQuantity = itemQuantity
        this.itemName = itemName
        this.itemPrice = itemPrice
    }

}

var itemCount = 0;
var cart = new Array();
// sessionStorage.numInCart = "";
// localStorage.storedCartItems = "";

// var allAttributes = new Array();
var picts = ["fanny1.jpg", "fannyBlue1.jpg", "fannyGreen1.jpg"]
var sources = ["https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/DogHikingGear1.jpg",
               "https://s3.amazonaws.com/backpackersverse/wp-content/uploads/2016/12/15212859/Interested-In-Hiking-The-Appalachian-Trail-With-A-Dog.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWIIk39hRekEpGR7qhkUPM29yrhaeL7WDdemXLVi0Ot-e31WaWQ",]

$( document ).ready(function() {
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
    sessionStorage.itemName = "";
    sessionStorage.itemPrice = 0;
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
                sessionStorage.itemSize = "S";
            }
            else if ($(this).hasClass("medium")) {
                sessionStorage.itemSize = "M";
            }
            else if ($(this).hasClass("large")) {
                sessionStorage.itemSize = "L";
            }
          }
        });
        console.log(sessionStorage.itemSize);

        // itemQuantity
        sessionStorage.itemQuantity = Number($("#quantity-input").val());

        
        sessionStorage.numInCart = Number(sessionStorage.numInCart) + Number(sessionStorage.itemQuantity);
        // console.log(Number(sessionStorage.numInCart));
        // $(".number-in-cart-dot").text(sessionStorage.numInCart);
        // reveal number dot 
        // $(".number-in-cart-block").show();

        // delivery
        if ($(".ship-to-me").children([0]).prop("checked")) {
            sessionStorage.shipToMe  = Number(sessionStorage.shipToMe) + Number(sessionStorage.itemQuantity);
        }
        // else if ($(".pick-up").children([0]).prop("checked")) {
        else {
            sessionStorage.pickUpInStore = Number(sessionStorage.pickUpInStore) + Number(sessionStorage.itemQuantity);
        }

        // set name and price for item
        sessionStorage.itemName = $(".item-naming").text();
        sessionStorage.itemPrice = $(".item-pricing").text();

        // make item
        var newCartItem = new cartItem(sessionStorage.itemColor, sessionStorage.itemSize, sessionStorage.itemImage, 
            sessionStorage.shipToMe, sessionStorage.pickUpInStore, sessionStorage.itemQuantity, sessionStorage.itemName,
            sessionStorage.itemPrice);

        cart.push(newCartItem);
        

        // this stores the number of times you add to cart and NOT the summed quantities
        itemCount = Number(itemCount) + 1;
        sessionStorage.setItem("itemCount", JSON.stringify(itemCount));

        // this stores the actual summed quantities
        sessionStorage.setItem("numberInCart", JSON.stringify(sessionStorage.numInCart));
        $(".number-in-cart-dot").text(JSON.parse(sessionStorage.getItem("numberInCart")));

        sessionStorage.setItem("cartItems", JSON.stringify(cart));

    });

});

function displayCart() {

    var items = JSON.parse(sessionStorage.getItem("cartItems"));
    console.log("itemcount" + sessionStorage.getItem("itemCount"));
    var totalPrice = 0;

    // keep the cart number displayed at the top
    var storedNumberInCart = JSON.parse(sessionStorage.getItem("numberInCart"));
    $(".number-in-cart-dot").text(storedNumberInCart);
    // console.log("hello");
    // console.log(sessionStorage.getItem("cartItems"));
    // console.log(items[0].itemSize);
    // console.log(items[1].itemSize);

    // Object.keys(items).forEach(function (key) {
    //   console.log(key + "'s favorite fruit is " + favoriteFruit[key]['itemSize']);

    // create a card
    var i;
    for (i = 0; i < items.length; i++) {
        var itemCard = document.createElement('div');
        itemCard.className =  "item-card";
        itemCard.id = "item-card"+i;
        $(".all-items").append(itemCard);
        var close = document.createElement('span');
        close.className = "close";
        close.id = "close"+i;
        close.innerHTML = "x";
        $("#item-card"+i).append(close);
        var cardImageBlock = document.createElement('div');
        cardImageBlock.className = "card-image-block";
        cardImageBlock.id = "card-image-block"+i;
        $("#item-card"+i).append(cardImageBlock);
        var cardImage = document.createElement('img');
        if (items[i].itemColor=="orange") {
            cardImage.src = "../images/" + picts[0];
        }
        else if (items[i].itemColor=="blue") {
            cardImage.src = "../images/" + picts[1];
        }
        else {
            cardImage.src = "../images/" + picts[2];
        }
        $("#card-image-block"+i).append(cardImage);

        var allCardItemText = document.createElement('div');
        allCardItemText.className = "all-card-item-text";
        allCardItemText.id = "all-card-item-text"+i;
        $("#item-card"+i).append(allCardItemText);

        var cardItemTextBlockA = document.createElement('div');
        cardItemTextBlockA.className = "card-item-text-blockA";
        cardItemTextBlockA.id = "card-item-text-blockA"+i;
        $("#all-card-item-text"+i).append(cardItemTextBlockA);

        var title = document.createElement('p');
        title.className = "card-item-title";
        title.id = "card-item-title"+i;
        title.innerHTML = items[i].itemName;
        $("#card-item-text-blockA"+i).append(title);
        var size = document.createElement('p');
        size.className = "card-item-size";
        size.id = "card-item-size"+i;
        size.innerHTML = "Size: "+items[i].itemSize;
        $("#card-item-text-blockA"+i).append(size);
        var color = document.createElement('p');
        color.className = "card-item-color";
        color.id = "card-item-color"+i;
        color.innerHTML = "Color: "+items[i].itemColor;
        $("#card-item-text-blockA"+i).append(color);
        var delivery = document.createElement('p');
        delivery.className = "card-item-delivery";
        delivery.id = "card-item-delivery"+i;
        if (items[i].shipToMe==0) {
            delivery.innerHTML = "Pick up In Store";
        }
        else {
            delivery.innerHTML = "Ship to Me";
        }
        $("#card-item-text-blockA"+i).append(delivery);

        var cardItemTextBlockB = document.createElement('div');
        cardItemTextBlockB.className = "card-item-text-blockB";
        cardItemTextBlockB.id = "card-item-text-blockB"+i;
        $("#all-card-item-text"+i).append(cardItemTextBlockB);

        var quantity = document.createElement('p');
        quantity.className = "card-item-quantity";
        quantity.id = "card-item-quantity"+i;
        quantity.innerHTML = "Qty: "+items[i].itemQuantity;
        $("#card-item-text-blockB"+i).append(quantity);

        var cardItemTextBlockC = document.createElement('div');
        cardItemTextBlockC.className = "card-item-text-blockC";
        cardItemTextBlockC.id = "card-item-text-blockC"+i;
        $("#all-card-item-text"+i).append(cardItemTextBlockC);

        var price = document.createElement('p');
        price.className = "card-item-price";
        price.id = "card-item-price"+i;
        price.innerHTML = "$" + items[i].itemPrice + " x " + items[i].itemQuantity;
        $("#card-item-text-blockC"+i).append(price);

        // add to total price
        totalPrice = Number(totalPrice) + Number(items[i].itemPrice) * Number(items[i].itemQuantity);
    }

    // update cart summary
    $(".cart-summary-item-number").text(storedNumberInCart);
    $(".total-cost").text(totalPrice);
}

function showCartNumber() {
    if (sessionStorage.getItem("numberInCart")) {
        $(".number-in-cart-dot").text(JSON.parse(sessionStorage.getItem("numberInCart")));
    }
}



