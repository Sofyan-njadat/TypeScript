// Q-01
// interface Person {
//     Name : String;
//     Age : number;
// }
// استرجاع المنتجات من Local Storage
function getProducts() {
    return JSON.parse(localStorage.getItem("products") || "[]");
}
// حفظ المنتجات في Local Storage
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}
// عرض المنتجات في الصفحة
function displayProducts() {
    var productList = document.getElementById("productList");
    productList.innerHTML = "";
    getProducts().forEach(function (product, index) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p>Price: ").concat(product.price, " JOD</p>\n            <p>Quantity: ").concat(product.quantity, "</p>\n            <button onclick=\"deleteProduct(").concat(index, ")\">Delete</button>\n        ");
        productList.appendChild(card);
    });
}
// حذف منتج
function deleteProduct(index) {
    var products = getProducts();
    products.splice(index, 1);
    saveProducts(products);
    displayProducts();
}
// إضافة منتج جديد
function addProduct(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = Number(document.getElementById("price").value);
    var quantity = Number(document.getElementById("quantity").value);
    if (!name || !description || isNaN(price) || isNaN(quantity))
        return;
    var newProduct = { name: name, description: description, price: price, quantity: quantity };
    var products = getProducts();
    products.push(newProduct);
    saveProducts(products);
    displayProducts();
    document.getElementById("productForm").reset();
}
// ربط النموذج بالوظيفة
document.getElementById("productForm").addEventListener("submit", addProduct);
// تحميل المنتجات عند فتح الصفحة
window.onload = displayProducts;
// جعل deleteProduct متاحًا عالميًا للاستخدام في HTML
window.deleteProduct = deleteProduct;
