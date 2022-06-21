function renderMySneakers() {
    console.log('mySneakers page is rendering')
    page = document.getElementById('content')
    axios.get('/api/session')
    .then((response) => {
        page.innerHTML = ''
        const userData = response.data; //get session data 
        // console.log(userData.email, userData.id, userData.name)
        const user_id = userData.id
        axios.get(`/api/sneakers/${user_id}`)
        .then((response) => {
            // console.log(response.data)
            const userSneakerData = response.data //returns an array of sneaker objects
            for (const sneaker of userSneakerData) {
                const sneakerItem = document.createElement('div')
                sneakerItem.innerHTML =
                    `
                    <div class="card" style="width: 25rem">
                    <img class="card-img-top" src="${sneaker.image_path}">
                    <div class="card-body">
                    <h5 class="card-title">${sneaker.name}</h5>
                    <p><strong>Description:</strong> ${sneaker.description}</p>
                    <p><strong>Brand:</strong> ${sneaker.brand}</p>
                    <p><strong>Purchase Place:</strong> ${sneaker.purchase_place}</p>
                    <p><strong>Size:</strong> ${sneaker.size}</p>
                    <p><strong>Type:</strong> ${sneaker.type}</p>
                    <p><strong>Condition:</strong> ${sneaker.condition}</p>
                    </div>
                    `
                    page.appendChild(sneakerItem)
            }
        })
        
    })
}

    