// نجيب كل أزرار الطلب
const orderButtons = document.querySelectorAll(".order");

// سلة العرض
const cartList = document.getElementById("cart-list");

// مصفوفة السلة
let cart = [];

// لما اضغط على زر add to cart
orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".menu-item, .menu-Appetizers");

        const name = card.querySelector("h3").textContent;
        const priceText = card.querySelector(".price").textContent;
        const price = parseInt(priceText.replace(/\D/g, ""));
        const quantity = parseInt(card.querySelector(".visitors-input").value);

        // إضافة المنتج للسلة
        cart.push({ name, price, quantity });

        renderCart();
    });
});

// عرض السلة
function renderCart() {
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} — ${item.price} EGP × ${item.quantity}
            <button data-index="${index}">Delete</button>
        `;

        li.querySelector("button").addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });

        cartList.appendChild(li);
    });
}
