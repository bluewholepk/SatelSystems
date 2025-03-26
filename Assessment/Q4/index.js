console.log("1). Create a Shopping cart price calculation and add discount if the price is more than Rs 100");
console.log("");
// function cart(item,price){
//     let dis =0;

//     if(price >100){
//         dis = price * 20/100;
//     }

//     let finalPrice = price - dis;

//     console.log(`Item : ${item}`);
//     console.log(`Original Price : ${price}`);
//     console.log(`Discount : ${dis}`);
//     console.log(`Final Price : ${finalPrice}`);
//     console.log(" ");
// }

// cart("Shirt",150);
// cart("Shoes",99);
// cart("Book",60);


function cart(items) {
    let totalPrice = 0;

    for (let i = 0; i < items.length; i++) {
        console.log(` ${i+1}) Item: ${items[i].name}, Price: ${items[i].price}`);
        totalPrice = totalPrice + items[i].price;

    }


    let discount = 0;
    
    if (totalPrice > 100) {
        discount = totalPrice * 20/100;
    }

    let finalPrice = totalPrice - discount;

    console.log("-------------------------------");
    console.log(`Total Price:  ${totalPrice}`);
    console.log(`Discount :  ${discount}`);
    console.log(`Final Price :  ${finalPrice}`);
    console.log("-------Thank You! Visit Again-------");
    console.log("");

}

// const shoppingCart = [
//     { name: "Shoes", price: 60 },
//     { name: "Book", price: 50 },
//     { name: "Bag", price: 30 }
// ];

const shoppingCart = [
    { name: "Book", price: 50 },
    { name: "Bag", price: 30 }
];

cart(shoppingCart);
