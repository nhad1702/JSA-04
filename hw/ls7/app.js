const parentEl = document.getElementById("parent");


const productItem = document.createElement("div");
productItem.setAttribute("class", "item text-gray bg-yellow")
const productImg = document.createElement("img");
productImg.setAttribute(
    "src",
    "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=1920&q=75"
);
productImg.setAttribute("class", "img")
productItem.appendChild(productImg);
parentEl.appendChild(productItem);
