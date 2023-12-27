const cartProducts = document.querySelector(".cart__products");

let productValue = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
const productControlDec = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const productControlInc = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const AddProductButtons = Array.from(
  document.querySelectorAll(".product__add")
);
const cart = document.querySelector(".cart");
check();
//! добавление в корзину
for (let i = 0; i < AddProductButtons.length; i++) {
  AddProductButtons[i].addEventListener("click", () => {
    let cartProductsFind = Array.from(cartProducts.children);
    let attributeClickProduct = AddProductButtons[i]
      .closest(".product")
      .getAttribute("data-id");
    //    проверка наличия элемента в корзине
    const productInCard = cartProductsFind.find(
      (item) => item.getAttribute("data-id") === attributeClickProduct
    );
    if (productInCard) {
      productInCard.children[1].textContent =
        Number(productInCard.children[1].textContent) +
        Number(
          AddProductButtons[i].previousElementSibling.children[1].textContent
        );
      return;
    } else {
      //  добавление элемента(cart__product) в корзину
      cartProducts.insertAdjacentHTML(
        "afterBegin",
        "<div class='cart__product'><img class='cart__product-image'></img><div class='cart__product-count'></div></div>"
      );
      // добавление атрибута(data-id) товара
      let cartProduct = document.querySelector(".cart__product");
      let cartProductDataId = AddProductButtons[i]
        .closest(".product")
        .getAttribute("data-id");
      cartProduct.setAttribute("data-id", cartProductDataId);
      // добавление фото товара
      let imgCart = document.querySelector(".cart__product-image");
      let imgCartScr = AddProductButtons[i].closest(".product").children[1];
      imgCart.setAttribute("src", imgCartScr.src);
      // добавление количетсва продуктов данного товара
      let count = document.querySelector(".cart__product-count");
      let productValueNumber = Number(
        AddProductButtons[i].previousElementSibling.children[1].textContent
      );
      count.textContent = productValueNumber;
    }
    //! удаление товара по клику
    let cartProductsRemove = Array.from(
      document.querySelectorAll(".cart__product")
    );
    for (
      let removeItem = 0;
      removeItem < cartProductsRemove.length;
      removeItem++
    ) {
      cartProductsRemove[removeItem].addEventListener("click", () => {
        cartProductsRemove[removeItem].remove();
        check();
      });
    }
    check();
  });
}
//! изменение количества продуктов
for (let i = 0; i < productControlDec.length; i++) {
  productControlDec[i].addEventListener("click", () => {
    if (Number(productValue[i].textContent) > 1) {
      Number(productValue[i].textContent--);
    }
  });
  productControlInc[i].addEventListener("click", () => {
    Number(productValue[i].textContent++);
  });
}
//! проверка корзина
function check() {
  if (cart.children[1].children.length > 0) {
    cart.style.visibility = "visible";
  } else {
    cart.style.visibility = "hidden";
  }
}
