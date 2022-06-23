// renders filter side bar

function renderFilter() {
    const filterMenu = document.querySelector('#side-bar')
    const searchForm = document.createElement('form')
    const filterForm = document.createElement('form')
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
                        </div>
                        `
                        page.appendChild(sneakerItem)
                    }
                }
            })
    })
    filterForm.innerHTML = `

        <div class="card" style="width: 25rem">
            <div class="card-body">
            <h5 class="card-title">Brand</h5>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="nike" value="Nike" name="brand">
                <label class="form-check-label" for="flexSwitchCheckDefault">Nike</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="adidas" value="Adidas" name="brand">
                <label class="form-check-label" for="flexSwitchCheckDefault">Adidas</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="puma" value="Puma" name="brand">
                <label class="form-check-label" for="flexSwitchCheckDefault">Puma</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="balenciaga" value="Balenciaga" name="brand">
                <label class="form-check-label" for="flexSwitchCheckDefault">Balenciaga</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="new balance" value="New Balance" name="brand">
                <label class="form-check-label" for="flexSwitchCheckDefault">New Balance</label>
            </div>
            </div>

        <div class="card">
            <div class="card-body" style="width: 25rem">
            <h5 class="card-title">Condition</h5>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="Like New" id="Like new" name="condition">
                <label class="form-check-label" for="flexSwitchCheckDefault">Like New</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="Excellent" id="excellent" name="condition">
                <label class="form-check-label" for="flexSwitchCheckDefault">Excellent</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="Good" id="good" name="condition">
                <label class="form-check-label" for="flexSwitchCheckDefault">Good</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="Fair" id="fair" name="condition">
                <label class="form-check-label" for="flexSwitchCheckDefault">Fair</label>
            </div>
            </div>
        </div>
        
        <div class="card" style="width: 25rem">
            <div class="card-body">
            <h5 class="card-title">Size</h5>
            <label for="size"></label>
            <input type="range" id="send" min="0" max="15" step='0.5' value="0" oninput="result.value = send.value"  ><br> 
            <input type="text" class="w-25 p-1 text-center" name='size' id="result" value="0"> <br> <br>
            </div>
        </div>   
        <button>Filter</button> 
        <label for="clear"></label>
        <input type="reset" value="Clear" name="clear"><br>
     
  `
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(filterForm)

        // produce an object with each filter name as the key and as a value a list of checked values
        let filters = {}

        formData.forEach((value, key) => {

            if (filters[key]) {
                filters[key].push(value)
              } else {
                filters[key] = [value] // New array with value in it
              }
            if (filters[key] == "0" ) {
                delete filters[key]
                    }
            console.log(value, key)
        });
        
        console.log(filters)
        axios.get('/api/sneakers')
            .then((response) => {
                const sneakers = response.data
                page = document.getElementById('content')
                page.innerHTML = ''

                // checks if filter options are in the sneakers table
                for (index in sneakers) {
                    let results = []
                    for (filter in filters) {
                        let values = filters[filter]

                        let result = values.includes(sneakers[index][filter])
                        results.push(result)
                        console.log(result)
                    }
                    // check if all filters can produce an item
                    let allFiltersMatch = results.every(filterMatches => filterMatches == true)
                    if (allFiltersMatch) {
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
            })
    })
    
    filterMenu.replaceChildren(searchForm, filterForm)
}

function renderSneakers() {
    renderFilter()
    const filterMenu = document.querySelector('#side-bar')
    filterMenu.style.display = 'inline-block'
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
    const filterMenu = document.querySelector('#side-bar')
    filterMenu.style.display = 'none'
    const page = document.getElementById('content')
    const form = document.createElement('form')
    // page.innerHTML = ''
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
    <input type="text" name="condition"> <br><br>
    If you wish to sell your sneakers: <br><br>
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

        const sneakerData = {
            name: formData.get("name"),
            description: formData.get("description"),
            brand: formData.get("brand"),
            purchase_place: formData.get("purchase_place"),
            size: formData.get("size"),
            sneakerType: formData.get("sneakerType"),
            image_path: formData.get("image_path"),
            condition: formData.get("condition"),
        }
        const listingData = {
            listing_date: formData.get("listing_date"),
            location: formData.get("location"),
            selling_price: formData.get("selling_price")
        }
        if (sneakerData.sneakerType == 'for sale') {
            axios.post('/api/listings', listingData)
                .then(response => {
                })
        }
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
    })
}

