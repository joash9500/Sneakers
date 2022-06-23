// renders filter side bar

function renderFilter() {
    console.log('running')
    const filterMenu = document.querySelector('#side-bar')
    const searchForm = document.createElement('form')
    const filterForm = document.createElement('form')
    filterMenu.style.display = 'inline-block'
    searchForm.innerHTML = `
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>   
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

        <div class="card" style="width: 25rem">
            <div class="card-body">
            <h5 class="card-title">Brand</h5>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="nike" name="nike">
                <label class="form-check-label" for="flexSwitchCheckDefault">Nike</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="adidas" name="adidas">
                <label class="form-check-label" for="flexSwitchCheckDefault">Adidas</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="puma" name="puma">
                <label class="form-check-label" for="flexSwitchCheckDefault">Puma</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="balenciaga" name="balenciaga">
                <label class="form-check-label" for="flexSwitchCheckDefault">Balenciaga</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="new balance" name="new balance">
                <label class="form-check-label" for="flexSwitchCheckDefault">New Balance</label>
            </div>
            </div>
        </div>

        <div class="card" style="width: 25rem">
            <div class="card-body">
            <h5 class="card-title">Popular</h5>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="air jordan" name="air jordan">
                <label class="form-check-label" for="flexSwitchCheckDefault">Air Jordan</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="yeezy" name="yeezy">
                <label class="form-check-label" for="flexSwitchCheckDefault">Yeezy</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="air max" name="air max">
                <label class="form-check-label" for="flexSwitchCheckDefault">Air Max</label>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body" style="width: 25rem">
            <h5 class="card-title">Condition</h5>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="like new" name="like new">
                <label class="form-check-label" for="flexSwitchCheckDefault">Like New</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="excellent" name="excellent">
                <label class="form-check-label" for="flexSwitchCheckDefault">Excellent</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="good" name="good">
                <label class="form-check-label" for="flexSwitchCheckDefault">Good</label>
            </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="fair" name="fair">
                <label class="form-check-label" for="flexSwitchCheckDefault">Fair</label>
            </div>
            </div>
        </div>
        
        <div class="card" style="width: 25rem">
            <div class="card-body">
            <h5 class="card-title">Size</h5>
            <label for="size"></label>
            <input type="range" id="send" min="0" max="15" step='0.5' oninput="result.value = send.value"name="size"><br> 
            <input type="text" id="result" value=""> <br> <br>
            </div>
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
    <input type="number" name="size"> <br>

    <label>Type: </label><br>
    <label for="display">Display </label>
    <input type="radio" name="type" value="display">
    <label for="listing">For Sale </label>
    <input type="radio" name="type" value="for sale"><br>
    
    <label for="image_path">Image URL: </label><br>
    <input type="text" name="image_path"> <br>

    <label>Condition: </label><br>
    <label for="As New">As New</label>
    <input type="radio" name="condition" value="As New"><br>
    <label for="Excellent">Excellent</label>
    <input type="radio" name="condition" value="Excellent"><br>
    <label for="Good">Good</label>
    <input type="radio" name="condition" value="Good"><br>
    <label for="Fair">Fair</label>
    <input type="radio" name="condition" value="Fair"><br>

    <button>Add your item</button> 
    `
    page.replaceChildren(form)
    form.addEventListener('submit', event => {
        event.preventDefault()

        let selectedType = ''
        let radio_type = document.getElementsByName('type')
        for (type_option of radio_type) {
            if (type_option.checked) {
                selectedType = type_option.value
            }
        }

        let selectedCondition = ''
        let radio_conditions = document.getElementsByName('condition')
        for (condition of radio_conditions) {
            if (condition.checked) {
                selectedCondition = type_option.value
            }
        }

        const formData = new FormData(form)

        axios.get('/api/session').then((resp) => {
            const user_id = resp.data.id
            const sneakerData = {
                name: formData.get("name"),
                description: formData.get("description"),
                brand: formData.get("brand"),
                purchase_place: formData.get("purchase_place"),
                size: formData.get("size"),
                type: selectedType,
                image_path: formData.get("image_path"),
                condition: selectedCondition,
                user_id: user_id
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
    })
}

