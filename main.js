function changeCount(num) {
  let countLS = localStorage.getItem('count');
  let count = 0;

  if (!countLS) {
    count = 1
    localStorage.setItem('count', count)
  } else {
    count = +countLS + num;
    console.log(count);

    localStorage.setItem('count', count)
  }
}

let counterElement = document.getElementById('cart-count')
let countOfProductsInCart = localStorage.getItem('count')
if (countOfProductsInCart) {
  counterElement.innerText = countOfProductsInCart
}

