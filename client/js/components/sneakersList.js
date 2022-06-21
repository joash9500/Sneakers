// renders filter side bar

function renderFilter() {
    console.log('running')
    const filterMenu = document.querySelector('#side-bar')
    const searchForm = document.createElement('form')
    const filterForm = document.createElement('form')
    filterMenu.style.display = 'inline-block'
    searchForm.innerHTML = `
        <label for="search"></label><br>
        <input type="text" name="search" placeholder="search"> 
        <button>Search</button> 
    `
    // makes request to filter options on click 
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(searchForm)
        let search = formData.get('search')
        let searchLowerCase = search.toLowerCase()
        axios.get('/api/sneakers')
            .then((response) => {
                const sneakers = response.data
                page = document.getElementById('content')
                page.innerHTML = ''
                for (index in sneakers) {
                    let sneakersLowerCase = sneakers[index].name.toLowerCase()
                    if (sneakersLowerCase.includes(searchLowerCase)) {
                        const sneakerItem = document.createElement('div')
                        sneakerItem.innerHTML =
                            `
                        <div class="card" style="width: 25rem">
                        <img class="card-img-top" src="${sneakers[index].image_path}">
                        <div class="card-body">
                        <h5 class="card-title">${sneakers[index].name}</h5>
                        <p><strong>Description:</strong> ${sneakers[index].description}</p>
                        <p><strong>Brand:</strong> ${sneakers[index].brand}</p>
                        <p><strong>Purchase Place:</strong> ${sneakers[index].purchase_place}</p>
                        <p><strong>Size:</strong> ${sneakers[index].size}</p>
                        <p><strong>Type:</strong> ${sneakers[index].type}</p>
                        <p><strong>Condition:</strong> ${sneakers[index].condition}</p>
                        </div>
                        `
                        page.appendChild(sneakerItem)
                    }
                }
            })
    })
    filterForm.innerHTML = `
    <div class="col-sm-3">
        <br> Brand: <br>
        <label for="brand">Nike</label>
        <input type="checkbox" id="nike" name="nike"><br> 
        <label for="brand">Adidas</label>
        <input type="checkbox" id="adidas" name="adidas"><br>
        <label for="brand">Puma</label>
        <input type="checkbox" id="puma" name="puma"><br>
        <label for="brand">Balenciaga</label>
        <input type="checkbox" id="balenciaga" name="balenciaga"><br>
        <label for="brand">New Balance</label>
        <input type="checkbox" id="new balance" name="new balance"><br><br>
        Popular:<br>
        <label for="popular">Air Jordan</label>
        <input type="checkbox" id="air jordan" name="air jordan"><br>
        <label for="popular">Yeezy</label>
        <input type="checkbox" id="yeezy" name="yeezy"><br>
        <label for="popular">Air Max</label>
        <input type="checkbox" id="air max" name="air max"><br><br>
        Condition: <br>
        <label for="condition">Like New</label>
        <input type="checkbox" name="Like-New"><br> 
        <label for="condition">Excellent</label>
        <input type="checkbox" name="excellent"><br> 
        <label for="condition">Good</label>
        <input type="checkbox" name="Good"><br> 
        <label for="condition">Fair</label>
        <input type="checkbox" name="fair"><br> <br>
        Size:
        <label for="size"></label>
        <input type="range" id="send" min="0" max="15" step='0.5' oninput="result.value = send.value"name="size"><br> 
        <input type="text" id="result" value=""> <br> <br>
        <button>Filter</button> 
        <label for="clear"></label>
        <input type="reset" value="Clear" name="clear"><br>
    </div>
    `
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(filterForm)
        // displays if brand is checked
        let nikeOn = formData.get('nike')
        let adidasOn = formData.get('adidas')
        let pumaOn = formData.get('puma')
        let newBalanceOn = formData.get('new balance')
        let balenciagaOn = formData.get('balenciaga')

        let brandsChecked = {nike: nikeOn, adidas: adidasOn, puma: pumaOn, newBalance: newBalanceOn, balenciaga: balenciagaOn}

        let nike = document.getElementById('nike').name
        let adidas = document.getElementById('adidas').name
        let puma = document.getElementById('puma').name
        let newBalance = document.getElementById('new balance').name
        let balenciaga = document.getElementById('balenciaga').name

        let brands = [nike, adidas, puma, newBalance, balenciaga]

        let airJordanOn = formData.get('air jordan')
        let yeezyOn = formData.get('yeezy')
        let airMaxOn = formData.get('air max')

        popularChecked = [airJordanOn, yeezyOn, airMaxOn]

        let airJordan = document.getElementById('air jordan').name
        let yeezy = document.getElementById('yeezy').name
        let airMax = document.getElementById('air max').name

        popular = [airJordan, yeezy, airMax]

        axios.get('/api/sneakers')
            .then((response) => {
                const sneakers = response.data
                page = document.getElementById('content')
                page.innerHTML = ''


                for (index in sneakers) {
                    let sneakersBrandLowerCase = sneakers[index].brand.toLowerCase()
                    for (brand of brands) {
                        
                        if (sneakersBrandLowerCase.includes(brand) && brandsChecked[brand] == 'on') {
                            const sneakerItem = document.createElement('div')
                            sneakerItem.innerHTML =
                                `
                        <div class="card" style="width: 25rem">
                        <img class="card-img-top" src="${sneakers[index].image_path}">
                        <div class="card-body">
                        <h5 class="card-title">${sneakers[index].name}</h5>
                        <p><strong>Description:</strong> ${sneakers[index].description}</p>
                        <p><strong>Brand:</strong> ${sneakers[index].brand}</p>
                        <p><strong>Purchase Place:</strong> ${sneakers[index].purchase_place}</p>
                        <p><strong>Size:</strong> ${sneakers[index].size}</p>
                        <p><strong>Type:</strong> ${sneakers[index].type}</p>
                        <p><strong>Condition:</strong> ${sneakers[index].condition}</p>
                        </div>
                        </div>
                        `
                            page.appendChild(sneakerItem)
                        }


                    }
                }
            })
    })
    filterMenu.appendChild(searchForm)
    filterMenu.appendChild(filterForm)
}

function renderSneakers() {

    renderFilter() //run function to generate a filter form on the side bar
    axios
        .get("/api/sneakers")
        .then((response) => {
            const sneakers = response.data;
            page = document.getElementById('content')
            page.innerHTML = ''
            for (index in sneakers) {
                const sneakerItem = document.createElement('div')
                sneakerItem.innerHTML =
                    `
            <div class="card" style="width: 25rem">
                    <img class="card-img-top" src="${sneakers[index].image_path}">
                <div class="card-body">
                <h5 class="card-title">${sneakers[index].name}</h5>
                    <p><strong>Description:</strong> ${sneakers[index].description}</p>
                    <p><strong>Brand:</strong> ${sneakers[index].brand}</p>
                    <p><strong>Purchase Place:</strong> ${sneakers[index].purchase_place}</p>
                    <p><strong>Size:</strong> ${sneakers[index].size}</p>
                    <p><strong>Type:</strong> ${sneakers[index].type}</p>
                    <p><strong>Condition:</strong> ${sneakers[index].condition}</p>
                </div>
            </div>
            `
                page.appendChild(sneakerItem)
            }

        });

}

// adds sneakers 

function renderAddSneakerForm() {
    const page = document.getElementById('content')
    const form = document.createElement('form')
    form.innerHTML = `
    <label for="name">Name: </label><br>
    <input type="text" name="name"> <br>
    <label for="description">Description: </label><br>
    <input type="text" name="description"> <br>
    <label for="brand">Brand: </label><br>
    <input type="text" name="brand"> <br>
    <label for="purchase_place">Purchase location: </label><br>
    <input type="text" name="purchase_place"> <br>
    <label for="size">Size: </label><br>
    <input type="text" name="size"> <br>

    <label for="sneakerType">Type: </label><br>
    <input type="text" name="sneakerType"> <br>
    
    <label for="image_path">Image URL: </label><br>
    <input type="text" name="image_path"> <br>
    <label for="condition">Condition: </label><br>
    <input type="text" name="condition"> <br>
    <label for="listing_date">Listing Date: (YYYY-MM-DD)</label><br>
    <input type="text" name="listing_date"> <br>
    <label for="location">Location: </label><br>
    <input type="text" name="location"> <br>
    <label for="selling_price">Price: </label><br>
    <input type="text" name="selling_price"> <br>

    <button>Add your item</button> 
    `
    page.replaceChildren(form)
    form.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(form)

        axios.get('/api/session').then((resp) => {
            const user_id = resp.data.id
            const sneakerData = {
                name: formData.get("name"),
                description: formData.get("description"),
                brand: formData.get("brand"),
                purchase_place: formData.get("purchase_place"),
                size: formData.get("size"),
                type: formData.get("sneakerType"),
                image_path: formData.get("image_path"),
                condition: formData.get("condition"),
                user_id: user_id
            }
            const listingData = {
                listing_date: formData.get("listing_date"),
                location: formData.get("location"),
                selling_price: formData.get("selling_price")
                // user_id: user_id,
                // sneaker_id: sneakerID
            }

            if (sneakerData.type == 'for sale') {
                
                axios.post('/api/listings', listingData)
                    .then(response => {
                    // renderListings()
                    })
            } else if (sneakerData.type == 'display') {
                axios.post('/api/sneakers', sneakerData)
                .then(response => {
                    renderSneakers()
                })
                .catch((err) => {
                    if (err.response.status === 400) {
                        const reason = err.response.data.message
                        alert(reason)
                    } else {
                        alert('Unknown error occurred!!')
                    }
                })
            } else {
                alert('something wrong with type selected')
            }
        })
    })
}

