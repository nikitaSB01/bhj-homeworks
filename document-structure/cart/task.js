const cartProducts = document.querySelector(".cart__products");
let productValue = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
const productControlDEC = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const productControlINC = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const AddProductButtonS = Array.from(
  document.querySelectorAll(".product__add")
);
const cart = document.querySelector(".cart");
check();
//! добавление в корзину
for (let m = 0; m < AddProductButtonS.length; m++) {
  //    проверка наличия элемента в корзине
  AddProductButtonS[m].addEventListener("click", () => {
    let goo = Array.from(document.querySelectorAll(".cart__product"));
    for (let q = 0; q < goo.length; q++) {
      if (goo[q] !== null) {
        if (
          goo[q].getAttribute("data-id") ===
          AddProductButtonS[m].closest(".product").getAttribute("data-id")
        ) {
          return;
        }
      }
    }
    //  добавление элемента(cart__product) в корзину
    cartProducts.insertAdjacentHTML(
      "afterBegin",
      "<div class='cart__product'><img class='cart__product-image'></img><div class='cart__product-count'></div></div>"
    );
    // добавление атрибута(data-id) товара
    let cartProduct = document.querySelector(".cart__product");
    let cartProductDataId = AddProductButtonS[m]
      .closest(".product")
      .getAttribute("data-id");
    cartProduct.setAttribute("data-id", cartProductDataId);
    // добавление фото товара
    let imgCart = document.querySelector(".cart__product-image");
    imgCartSCR = AddProductButtonS[m].closest(".product").children[1];
    imgCart.setAttribute("src", imgCartSCR.src);
    // добавление количетсва продуктов данного товара
    let count = document.querySelector(".cart__product-count");
    let hi = Number(
      AddProductButtonS[m].previousElementSibling.children[1].textContent
    );
    count.textContent = hi;
    //! изменение количества продуктов в корзине
    for (let p = 0; p < productValue.length; p++) {
      productControlDEC[p].addEventListener("click", () => {
        if (count.textContent > 1) {
          let dataIdProd = productControlINC[p]
            .closest(".product")
            .getAttribute("data-id");
          let dataIdProdCart = cartProduct.getAttribute("data-id");
          if (dataIdProd == dataIdProdCart) {
            count.textContent--;
          }
        }
      });
      productControlINC[p].addEventListener("click", () => {
        let dataIdProd = productControlINC[p]
          .closest(".product")
          .getAttribute("data-id");
        let dataIdProdCart = cartProduct.getAttribute("data-id");
        if (dataIdProd == dataIdProdCart) {
          count.textContent++;
        }
      });
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
for (let i = 0; i < productControlDEC.length; i++) {
  productControlDEC[i].addEventListener("click", () => {
    if (Number(productValue[i].textContent) > 1) {
      Number(productValue[i].textContent--);
    }
  });
  productControlINC[i].addEventListener("click", () => {
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
