console.log('%c HI', 'color: firebrick')

function grabImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json))
}

function addImages(images) {
    const spot = document.getElementById("dog-image-container")
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        spot.appendChild(img)
    })
}

function grabBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => postBreeds(data.message))
}

function postBreeds(breeds){
    document.getElementById("dog-breeds").innerHTML = `
    <li>
        ${Object.keys(breeds).map(function (breed){
            return `<li>${breed}</li>`
        }).join('')}
        </li>
    `
}
  
    
    
    
    
    // const spot2 = document.getElementById("dog-breeds")
    // const breedList = document.createElement('li')
    //     breedList.textContent = `
    //     ${Object.keys(breeds).map(function (breed){
            
    //     })}
    //     `
    //     spot2.appendChild(breedList)
    



document.addEventListener('DOMContentLoaded', () => {
    grabImages()
    grabBreeds()
})