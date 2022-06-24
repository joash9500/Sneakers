function renderMySneakers() {
    console.log('mySneakers page is rendering')
    
    axios.get('/api/session')
    .then((response) => {


        const userData = response.data; //get session data 
        // console.log(userData.email, userData.id, userData.name, userData.location)
        const user_id = userData.id

        axios.get(`/api/sneakers/${user_id}`)
        .then((response) => {
            //container div
            // const sneakerContainer = document.createElement('div')
            // sneakerContainer.classList.add('card-group')
            const page = document.getElementById('content')
            page.innerHTML = ''

            const userSneakerData = response.data //returns an array of sneaker objects
            for (const sneaker of userSneakerData) {
                //master div
                const sneakerItem = document.createElement('div')
                sneakerItem.classList.add('card')
                sneakerItem.style.width = '25rem'
                //2nd master div
                const sneakerItem_body = document.createElement('div')
                sneakerItem_body.classList.add('card-body')
                //children of 2nd master div
                const sneakerImg = document.createElement('img')
                sneakerImg.src = sneaker.image_path
                sneakerImg.classList.add('img-fluid', 'img-same')

                const sneakerTitle = document.createElement('h5')
                sneakerTitle.classList.add('card-title')
                sneakerTitle.innerText = sneaker.name

                const brand = document.createElement('p')
                brand.innerText = sneaker.brand

                const purchasePlace = document.createElement('p')
                purchasePlace.innerText = sneaker.purchase_place

                const sneakerSize = document.createElement('p')
                sneakerSize.innerText = sneaker.size

                const sneakerType = document.createElement('p')
                sneakerType.innerText = sneaker.type

                const sneakerCondition = document.createElement('p')
                sneakerCondition.innerText = sneaker.condition

                const addListingButton = document.createElement('button')
                addListingButton.innerText = 'Add to Listing'
                addListingButton.addEventListener('click', () => {
                    console.log('running addlisting button event listener')
                    addListing(sneaker.id)
                })
                
                sneakerItem_body.append(sneakerImg, sneakerTitle, brand, purchasePlace, sneakerSize, sneakerType, sneakerCondition, addListingButton)
                sneakerItem.appendChild(sneakerItem_body)
                page.appendChild(sneakerItem)
            }
           
        })
        
    })
}

function addListing(sneaker_id) {
    console.log('add listings page is running')
    let page = document.getElementById('content')
    const form = document.createElement('form')
    form.innerHTML = `
    <label for="listing_date">Listing Date: (YYYY-MM-DD)</label><br>
    <input type="text" name="listing_date"><br>
    <label for="selling_price">Price: </label><br>
    <input type="number" name="selling_price"> <br>

    <button type="submit">Add your item</button> 
    `
    page.replaceChildren(form)

    form.addEventListener('submit', () => {

        const formData = new FormData(form)

        axios.get('/api/session').then((response) => { //get id and location from session

            let reqData = {
                    user_id: response.data.id,
                    user_location: response.data.location,
                    sneaker_id: sneaker_id,
                    listing_date: formData.get("listing_date"),
                    selling_price: formData.get("selling_price")
                }

            axios.post('/api/listings/', reqData).then((response) => {
                renderListings()
            })
        })
    })


}

