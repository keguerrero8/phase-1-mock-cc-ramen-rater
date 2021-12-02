// write your code here
//DELIVERABLE 1
function getImagesAndPopulate(url) {

    return fetch(url)
    .then(response => response.json())
    .then(json => {
        //console.log(json)
        const div = document.querySelector("#ramen-menu")
        json.forEach(el => {
            const img = document.createElement("img")
            img.src = el.image
            div.append(img)
            //can make the below a function for clarity
            img.addEventListener("click", (event) => { //DELIVERABLE 2
                //console.log(el)
                const detailImage = document.querySelector(".detail-image")
                const h2 = document.querySelector(".name")
                const h3 = document.querySelector(".restaurant")
                const rating = document.querySelector("#rating-display")
                const comment = document.querySelector("#comment-display")
                detailImage.src = el.image
                h2.textContent = el.name
                h3.textContent = el.restaurant
                rating.textContent = el.rating
                comment.textContent = el.comment
            })
        })
    })

}
getImagesAndPopulate("http://localhost:3000/ramens")

// // //DELIVERABLE 2
// function populateItem (object) {
//     console.log(object)
//     const detailImage = document.querySelector(".detail-image")
//     const h2 = document.querySelector(".name")
//     const h3 = document.querySelector(".restaurant")
//     const rating = document.querySelector("#rating-display")
//     const comment = document.querySelector("#comment-display")
//     detailImage.src = object.image
//     h2.textContent = object.name
//     h3.textContent = object.restaurant
//     rating.textContent = object.rating
//     comment.textContent = object.comment
// }


//DELIVERABLE 3

function createNewRamen(){
    const form = document.querySelector("#new-ramen")
    form.addEventListener("submit", event => {
        event.preventDefault()
        //console.log(event)
        const div = document.querySelector("#ramen-menu")
        const inputName = document.querySelector("#new-name")
        const inputRestaurant = document.querySelector("#new-restaurant")
        const inputImage = document.querySelector("#new-image")
        const inputRating = document.querySelector("#new-rating")
        const inputComment = document.querySelector("#new-comment")
        const img = document.createElement("img") //create new ramen image to append   
        img.src = inputImage.value
        div.append(img)

        img.addEventListener("click", (event) => { 
            const detailImage = document.querySelector(".detail-image")
            const h2 = document.querySelector(".name")
            const h3 = document.querySelector(".restaurant")
            const rating = document.querySelector("#rating-display")
            const comment = document.querySelector("#comment-display")
            detailImage.src = inputImage.value
            h2.textContent = inputName.value
            h3.textContent = inputRestaurant.value
            rating.textContent = inputRating.value
            comment.textContent = inputComment.value
        })

    })

}

createNewRamen()

//Advanced deliverable 1
document.addEventListener("DOMContentLoaded", function () {
    return fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(json => {
        //const div = document.querySelector("#ramen-menu")
        const img = document.createElement("img")
        img.src = json[0].image
        //div.append(img)
        const detailImage = document.querySelector(".detail-image")
        const h2 = document.querySelector(".name")
        const h3 = document.querySelector(".restaurant")
        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")
        detailImage.src = json[0].image
        h2.textContent = json[0].name
        h3.textContent = json[0].restaurant
        rating.textContent = json[0].rating
        comment.textContent = json[0].comment
    })

})

//Advanced deliverable 2
// function updateRatingComment () {
//     const updateForm = document.querySelector("#edit-ramen")
//     updateForm.addEventListener("submit", event => {
//         event.preventDefault()
//         const updateRating = form.querySelector("#new-rating")
//         const updateComment = form.querySelector("#new-comment")
//         const rating = document.querySelector("#rating-display")
//         const comment = document.querySelector("#comment-display")
//         rating.textContent = updateRating.value
//         comment.textContent = updateComment.value

//     })

// }


