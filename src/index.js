//global variables
let dogBarDiv = document.querySelector('div#dog-bar')
let mainDogDiv = document.querySelector('div#dog-info')

fetch("http://localhost:3000/pups")
.then(res => res.json())
.then(dogArr => {
    // console.log(dogArr)
    dogArr.forEach((dogObj) => {
        // console.log(dogObj)
        let dogNameSpan = document.createElement('span')
            dogNameSpan.innerText = dogObj.name
            // console.log(dogNameSpan)
        dogBarDiv.append(dogNameSpan)
        dogNameSpan.addEventListener('click', (e) => {
            // console.log("Woof Woof")
            // console.log(dogObj)
            mainDogDiv.innerHTML = ""
            let mainDogImg = document.createElement('img')
            mainDogImg.src = dogObj.image
            mainDogDiv.append(mainDogImg)

            let mainDogName = document.createElement('h2')
            mainDogName.innerText = dogObj.name
            mainDogDiv.append(mainDogName)

            let mainDogButton = document.createElement('button')
            if(dogObj.isGoodDog === true) {
                mainDogButton.innerText = "Good Dog!"
            } else {
                mainDogButton.innerText = "Bad Dog!"
            }
            mainDogDiv.append(mainDogButton)

            mainDogButton.addEventListener('click', (e) => {
                if(mainDogButton.innerText === "Good Dog!") {
                    mainDogButton.innerText = "Bad Dog!"
                } else {
                    mainDogButton.innerText = "Good Dog!"
                }
                // fetch("localhost:3000/pups/${isGoodDog}", {
                //     method: "PATCH",
                //     headers: {
                //         "Content-type": "Application.json"
                //     },
                //     body: JSON.stringify({
                //         isGoodDog: trueOrFalse
                //     })
                // })
                // .then(res => res.json())
                // .then((updatedButton) => {
                //     mainDogButton.innerText = "Bad Dog!"
                // })
            })
        })
    })
})
