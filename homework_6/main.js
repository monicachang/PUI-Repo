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
        console.log("quantity: " + $("#quantity-input").val());
        // add to number in cart
        console.log(Number(sessionStorage.itemQuantity));
        
        // console.log(Number(sessionStorage.numInCart += Number(sessionStorage.itemQuantity)));
        // sessionStorage.numInCart += Number(sessionStorage.itemQuantity);
        sessionStorage.numInCart = Number(sessionStorage.numInCart) + Number(sessionStorage.itemQuantity);
        console.log(Number(sessionStorage.numInCart));
        // console.log($(".number-in-cart-dot"));
        $(".number-in-cart-dot").text(sessionStorage.numInCart);

        // delivery
        if ($(".ship-to-me").children([0]).prop("checked")) {
            sessionStorage.shipToMe += Number(sessionStorage.itemQuantity);
        }
        // else if ($(".pick-up").children([0]).prop("checked")) {
        else {
            sessionStorage.pickUpInStore += Number(sessionStorage.itemQuantity);
        }

        
    });


});

// class Animal{

//     constructor(img, name, age)
//     {
//         this.pic = img
//         this.name = name
//         this.age = age
//     }
// }

// function random(length)
// {
//     return Math.floor(Math.random() * length)
// }

// $(document).ready(()=>{
//     console.log("ready")

//     var animal = new Animal(picts[random(3)], names[random(4)], ages[random(5)])
//     console.log(animal)
//     $("#animal-img").attr("src", animal.pic);
//     $("#animal-name").html(animal.name);
//     $("#animal-age").html(animal.age + " years old");
// });