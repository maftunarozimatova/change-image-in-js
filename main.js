const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img_active = document.querySelector(".img_active")

img1.onclick = () => {
    let m = img1.getAttribute("src")
    let n = img_active.getAttribute("src")

    img1.setAttribute("src" , n)
    img_active.setAttribute("src", m)
}

img2.onclick = () => {
    let m = img2.getAttribute("src")
    let n = img_active.getAttribute("src")

    img2.setAttribute("src" , n)
    img_active.setAttribute("src", m)
}

img3.onclick = () => {
    let m = img3.getAttribute("src")
    let n = img_active.getAttribute("src")

    img3.setAttribute("src" , n)
    img_active.setAttribute("src", m)
}