var picts = ["fox1.jpg", "fox2.jpg", "fox3.jpg", "fox4.jpg"]
var names = ["Nutmeg", "Cinnamon", "Sugar", "Paprika"]
var ages = [2, 5, 7, 3, 14]

class Animal{

    constructor(img, name, age)
    {
        this.pic = img
        this.name = name
        this.age = age
    }
}

function random(length)
{
    return Math.floor(Math.random() * length)
}

$(document).ready(()=>{
    console.log("ready")

    var animal = new Animal(picts[2], names[2], ages[2])
    console.log(animal)
    $("#animal-img").attr("src", animal.pic);
    $("#animal-name").html(animal.name);
    $("#animal-age").html(animal.age + " years old");
});