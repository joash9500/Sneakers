// renders all sneakers on homepage

function renderSneakers() {
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
            Name: ${sneakers[index].name}
            Description: ${sneakers[index].description}
            Brand: ${sneakers[index].brand}
            Purchase Place: ${sneakers[index].purchase_place}
            Size: ${sneakers[index].size}
            Type: ${sneakers[index].type}
            <img src="${sneakers[index].image_path}">
            Condition: ${sneakers[index].condition}
            Listing Date: ${sneakers[index].listing_date}
            Location: ${sneakers[index].location}
            Selling Price: $${sneakers[index].selling_price}
            `
            page.appendChild(sneakerItem)
            }
        });

}

// adds sneakers 

function renderAddSneakerForm() {
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