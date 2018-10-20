// var picts = ["fanny1.jpg", "fanny2.jpg", "fanny3.jpg", "fannyBlue1.jpg", "fannyBlue2.jpg", 
//              "fannyBlue3.jpg", "fannyGreen1.jpg", "fannyGreen2.jpg", "fannyGreen3.jpg"]
// var sources = ["https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/DogHikingGear1.jpg",
//                "https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/BestDogHikingPacks3.jpg",
//                "https://www.trekkinn.com/f/13648/136488596_8/ruffwear-approach-pack.jpg",
//                "https://s3.amazonaws.com/backpackersverse/wp-content/uploads/2016/12/15212859/Interested-In-Hiking-The-Appalachian-Trail-With-A-Dog.jpg",
//                "https://i2.wp.com/www.hikingwithdogs.xyz/wp-content/uploads/2016/09/IMG_6174.jpg",
//                "https://i.pinimg.com/originals/87/d1/9a/87d19ae93a331481120c5d97b528c478.jpg",
//                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWIIk39hRekEpGR7qhkUPM29yrhaeL7WDdemXLVi0Ot-e31WaWQ",
//                "https://i.pinimg.com/originals/b0/84/56/b08456b959b1be81d765b0495241902d.jpg",
//                "https://www.rei.com/media/edb94122-d2d2-4f52-ac52-11e92be1955f?size=784x588"]

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
    var itemColor = "";
    var itemSize = "";
    var itemImage = "fanny1.jpg";
    var shipToMe = 0;
    var pickUpInStore = 0;
    var itemQuantity = 0;
    $("#add-to-cart").click(function() {
        console.log("hello");

        // get item color
        $(".colors").children("span").each(function() {
          if ($(this).hasClass("active-color")) {
            if ($(this).hasClass("color1")) {
                itemColor = "orange";
                itemImage = "fanny1.jpg";
            }
            else if ($(this).hasClass("color2")) {
                itemColor = "blue";
                itemImage = "fannyBlue1.jpg";
            }
            else if ($(this).hasClass("color3")) {
                itemColor = "green";
                itemImage = "fannyGreen1.jpg";
            }
          }
        });
        console.log(itemColor);

        // get item size
        $(".sizes").children("span").each(function() {
          if ($(this).hasClass("active-size")) {
            if ($(this).hasClass("small")) {
                itemSize = "small";
            }
            else if ($(this).hasClass("medium")) {
                itemSize = "medium";
            }
            else if ($(this).hasClass("large")) {
                itemSize = "large";
            }
          }
        });
        console.log(itemSize);

        // itemQuantity
        itemQuantity += parseInt($("#quantity-input").val());
        console.log("quantity: " + $("#quantity-input").val());

        // delivery
        if ($(".ship-to-me").children([0]).prop("checked")) {
            shipToMe += 1;
        }
        else if ($(".pick-up").children([0]).prop("checked")) {
            pickUpInStore += 1;
        }
        console.log(shipToMe);
        console.log(pickUpInStore);

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