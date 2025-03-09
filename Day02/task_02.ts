// Q-01
// interface Person {
//     Name : String;
//     Age : number;
// }

// let Persons: Person = {Name:"Sofyan" , Age:30}

// if (Persons.Age < 18) {
//     console.log("Minor");
// } else {
//     console.log("Adult");
// }


// Q-02
// interface Teacher {
//     name: string;
//     subjects: string[];
// }

// const Teachers: Teacher = { name: "Mhmad", subjects: ["Arabic", "Math", "Relegin"] };

// Teachers.subjects.forEach(subject => {
//     console.log(subject);
// });

// Q-03
// interface Product {
//     name: string;
//     price: number;
//     quantity: number;
// }

// let AllProduct: Product = {name: "Iphone 16" , price: 1100 , quantity: 9}


// if (AllProduct.quantity>= 5) 
// {
//  console.log(AllProduct.price-(AllProduct.price*15)/100)
// } 

// Q-04
// تعريف المنتج
interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

// استرجاع المنتجات من Local Storage
function getProducts(): Product[] {
    return JSON.parse(localStorage.getItem("products") || "[]");
}

// حفظ المنتجات في Local Storage
function saveProducts(products: Product[]): void {
    localStorage.setItem("products", JSON.stringify(products));
}

// عرض المنتجات في الصفحة
function displayProducts(): void {
    const productList = document.getElementById("productList")!;
    productList.innerHTML = "";

    getProducts().forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price} JOD</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;
        productList.appendChild(card);
    });
}

// حذف منتج
function deleteProduct(index: number): void {
    const products = getProducts();
    products.splice(index, 1);
    saveProducts(products);
    displayProducts();
}

// إضافة منتج جديد
function addProduct(event: Event): void {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;
    const price = Number((document.getElementById("price") as HTMLInputElement).value);
    const quantity = Number((document.getElementById("quantity") as HTMLInputElement).value);

    if (!name || !description || isNaN(price) || isNaN(quantity)) return;

    const newProduct: Product = { name, description, price, quantity };
    const products = getProducts();
    products.push(newProduct);
    saveProducts(products);
    displayProducts();

    (document.getElementById("productForm") as HTMLFormElement).reset();
}

// ربط النموذج بالوظيفة
document.getElementById("productForm")!.addEventListener("submit", addProduct);

// تحميل المنتجات عند فتح الصفحة
window.onload = displayProducts;

// جعل deleteProduct متاحًا عالميًا للاستخدام في HTML
(window as any).deleteProduct = deleteProduct;
