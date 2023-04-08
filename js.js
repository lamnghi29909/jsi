// arr = [1,2,"string", "hello", true, false, [1,2,3]]
// console.log(arr.length-1)



// for (i in arr) {
//     console.log(arr[i])
// }
// arr[2] = "Quân"
// arr.push() // thêm phàn tử vào cuối mảng
// arr.unshift() // thêm phần tử vào đầu mảng
// arr.shift() //xóa phần tử đầu
// arr.pop() // xóa phần tử cuối


//object

// let users = [
//     {    
//         id: 1,
//         name: "Quân",
//         age: 25,
//         phone_number: 123456
//     },
//     {    
//         id: 2,
//         name: "Quân",
//         age: 26,
//         phone_number: 1234567
//     },

// ]

// for (i of users) {
//     if (i.users[1].age > 25 ) {
//         console.log(i)
//     }
// }





// EX4: Write a JavaScript program to display the reading status 
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
// //         readingStatus: false
// //     }];
// // Ex5
// // Ex5: Với những đầu sách đã đọc, 
// //in ra title và author của những đầu sách đấy
// // EX6: Sẽ thêm 1 trường là price vào tất cả các
// // đầu sách

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
a = arr1.sort();
console.log(a)


var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var count = 0
var item 
var count1 = 1
for (var i = 0; i<arr2.length; i++ ) {
    for ( var j = i; j<arr2.length; j++){
        if (arr2[i] == arr2[j]) {
            count++;
            if (count1 < count) {
                count1 = count
                item = arr2[i]
            }
            
        }
        
    }
    count = 0

}
console.log(item)
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

var display = (array) => {
    for (book of array) {
        console.log(book.readingStatus)
        }
}
display(library)

var show1 = (array) => {
    for (i of array) {
        console.log("author:", i.author,"title:", i.title)
    }
}
show1(library)

var addPrice = (array) => {
    for (k of array) {
        if (k.author == "Bill Gates") {
            k.price = "500$"
        }
        else if (k.author == "Steve Jobs") {
            k.price = "600$"
        }
    console.log(k)
    }
}
addPrice(library)


const product = [
    {
        id:1,
        name: "aaaa",
        img: ""
    }
]
let newproduct = ""
function addProduct() {
    let name = document.querySelector(".name").value;
    let img = document.querySelector(".img").value;
    newproduct.push({
        id: id + 1,
        name:name,
        img:img,
    })
}
function sanpham(data) {
    let a = document.querySelector(".sanpham")
    a.innerHTML = "";
    if (a) {
        for(let item of data ) {
            a.innerHTML += `
            <div class="name">
                <p>${item.name}</p>
            </div>
            <div class="img">
                <img src="${item.img}" alt="">
                <button onclick="removeProduct()" data-id="${item.id}" class = "remove">Remove</button>
            </div>
            `
        }
    }
};
sanpham(product);

let btns = document.querySelectorAll(".remove");
for(let item of btns) {
   item.addEventListener("click", function() {
    let id = item.dataset.id;
    let remover = product.filter((item)=> id!=item.id);
    location.reload();
   })
}