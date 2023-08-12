//Products list index page featured products
const product_arr = [
    {
        id: 1,
        img: "photos/shoes.jpg",
        name: "Running shoes for men",
        brand: "adidas",
        price: "$56.99"
    },
    {
        id: 2,
        img: "photos/laptop2.jpg",
        name: "Intel i3 11Gen",
        brand: "HP",
        price: "$567.99"
    },
    {
        id: 3,
        img: "photos/simple-wooden-desk.jpg",
        name: "Work from home desks",
        brand: "DecorHomes",
        price: "$399.99"
    },
    {
        id: 4,
        img: "photos/tv.jpg",
        name: "34'' Smart television",
        brand: "Sony",
        price: "$1899.99"
    },
    {
        id: 5,
        img: "photos/headphones.jpeg",
        name: "Bluetooth headphones",
        brand: "JBL",
        price: "$23.99"
    },
    {
        id: 6,
        img: "photos/Air-Conditioner.jpg",
        name: "3 ton split ac",
        brand: "Hitachi",
        price: "$568.99"
    },
    {
        id: 7,
        img: "photos/book.jpg",
        name: "Power of subcons..",
        brand: "Josheph Murphy",
        price: "$6.99"
    },
    {
        id: 8,
        img: "photos/royal-enfield-riding-jacket.jpg",
        name: "Riding jackets",
        brand: "Royal Enfield",
        price: "$56.99"
    }
];
//New arrivals Section List
const explore_arr = [
    {
        id: 1,
        img: "photos/wclo1.jpg",
        name: "Women Shawl",
        brand: "Rio",
        price: "$10.99"
    },
    {
        id: 2,
        img: "photos/clo8.jpg",
        name: "Collared shirts",
        brand: "Peter England",
        price: "$23.99"
    },
    {
        id: 3,
        img: "photos/clo1.jpg",
        name: "Sweatshirt",
        brand: "Puma",
        price: "$12.99"
    },
    {
        id: 4,
        img: "photos/clo2.jpg",
        name: "Jacket",
        brand: "Allen Solly",
        price: "$32.99"
    },
    {
        id: 5,
        img: "photos/clo3.jpg",
        name: "Joggers",
        brand: "Spunk",
        price: "$25.99"
    },
    {
        id: 6,
        img: "photos/clo4.jpg",
        name: "Tshirt",
        brand: "Souled store",
        price: "$8.99"
    },
    {
        id: 7,
        img: "photos/clo7.jpg",
        name: "Navy blue shirt",
        brand: "Uni Clo",
        price: "$44.50"
    },
    {
        id: 8,
        img: "photos/clo6.jpg",
        name: "Pack of 4 shirts",
        brand: "Buffalo",
        price: "$56.99"
    }
];
// const featured_shop_arr = [
//     {
//         id: 1,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "adidas",
//         price: "$56.99"
//     },
//     {
//         id: 2,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "puma",
//         price: "$56.99"
//     },
//     {
//         id: 3,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "adidas",
//         price: "$56.99"
//     },
//     {
//         id: 4,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "nike",
//         price: "$56.99"
//     },
//     {
//         id: 5,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "power",
//         price: "$56.99"
//     },
//     {
//         id: 6,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "reebok",
//         price: "$56.99"
//     },
//     {
//         id: 7,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "fila",
//         price: "$56.99"
//     },
//     {
//         id: 8,
//         img: "photos/colourful.jpg",
//         name: "Running shoes for men",
//         brand: "adidas",
//         price: "$56.99"
//     }
// ];

const item_list = document.querySelector(".container");
const explore_list = document.querySelector(".new_arrivals");
//const feature_list = document.querySelector(".featured_container");
window.addEventListener('DOMContentLoaded', function () {
    displayproducts(product_arr);
    // Explore more section display
    displayproducts_explore(explore_arr);
    //displayproducts_featured(featured_shop_arr);
});

function displayproducts(list) {
    let plist = list.map(function (item) {
        return `<div class="product_container">
                    <div class="product_image">
                        <img src="${item.img}"  alt="${item.name}">
                    </div>
                    <div class="info">
                        <p id="brand">${item.brand}</p>
                        <p id="product_desc">${item.name}</p>
                        <div class="rating">
                            <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                            <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                            <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                            <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                            <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                        </div>
                        <div class="cart_price">
                            <h3 id="price">${item.price}</h3>
                            <p><i class="fa-solid fa-cart-shopping"></i></p>
                        </div>
                    </div>
                </div> `;
    });
    plist = plist.join("");
    item_list.innerHTML = plist;
}
function displayproducts_explore(list) {
    let plist = list.map(function (item) {
        return `<div class="product_container">
                <div class="product_image">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="info">
                    <p id="brand">${item.brand}</p>
                    <p id="product_desc">${item.name}</p>
                    <div class="rating">
                        <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                        <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                        <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                        <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                        <i class="fa-solid fa-star" style="color: #ecb210;"></i>
                    </div>
                    <div class="cart_price">
                        <h3 id="price">${item.price}</h3>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div> `;
    });
    plist = plist.join("");
    explore_list.innerHTML = plist;
}




// function displayproducts_featured(list) {
//     let plist = list.map(function (item) {
//         return `<div class="product_container">
//                 <div class="product_image">
//                     <img src="${item.img}" alt="${item.name}">
//                 </div>
//                 <div class="info">
//                     <p id="brand">${item.brand}</p>
//                     <p id="product_desc">${item.name}</p>
//                     <div class="rating">
//                         <i class="fa-solid fa-star" style="color: #ecb210;"></i>
//                         <i class="fa-solid fa-star" style="color: #ecb210;"></i>
//                         <i class="fa-solid fa-star" style="color: #ecb210;"></i>
//                         <i class="fa-solid fa-star" style="color: #ecb210;"></i>
//                         <i class="fa-solid fa-star" style="color: #ecb210;"></i>
//                     </div>
//                     <div class="cart_price">
//                         <h3 id="price">${item.price}</h3>
//                         <i class="fa-solid fa-cart-shopping"></i>
//                     </div>
//                 </div>
//             </div> `;
//     });
//     plist = plist.join("");
//     feature_list.innerHTML = plist;
// }
const smallImage = document.querySelectorAll('.small_img');
smallImage.forEach((smallImage) => {
    smallImage.addEventListener('click', function () {
        const largeImg = document.getElementById("single_img");
        largeImg.src = smallImage.src;
        largeImg.alt = smallImg.alt;
    });
});
