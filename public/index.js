// Your code here
function makeTitle() {
    const h1 = document.createElement("h1")
    h1.innerText = "Kitten Pic"
    document.body.appendChild(h1)

    h1.style.display = 'flex';
    h1.style.justifyContent = 'center';
    h1.style.color = 'darkorchid';
}

const addImage = async () => {
    // fetch('https://api.thecatapi.com/v1/images/search').then(res => {
    //     res.json().then(data => {
    //         const imgsection = document.createElement("section");
    //         const img = document.createElement("img");
    //         img.setAttribute("src", data[0].url);
    //         imgsection.appendChild(img);
    //         document.body.appendChild(imgsection);
    //     })
    // })

    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await res.json()
    // console.log("DATA", data)

    const imgsection = document.createElement("section");
    const img = document.createElement("img");
    img.setAttribute("src", data[0].url);
    img.setAttribute("id", 'cat-pic');
    img.id = 'cat-pic'

    imgsection.appendChild(img);
    document.body.appendChild(imgsection);
}

function setupAnimation() {
    const catPic = document.getElementById('cat-pic')
    if (Array.from(catPic.classList).includes('animate')) {
        catPic.classList.remove('animate')
    }
    catPic.addEventListener('click', () => {
        catPic.classList.add('animate');
        console.log("Cat pic", catPic)
        setTimeout(() => {
            catPic.classList.remove('animate');
        }, 3000)
    })
}


window.onload = async () => {
    makeTitle();
    await addImage();
    setupAnimation();
}
