// renders all sneakers for sale 

function renderListings() {
    axios
        .get("/api/listings")
        .then((response) => {
            const listings = response.data;
            console.log(listings)
            page = document.getElementById('content')
            page.innerHTML = ''
            for (index in listings) {
                const sneakerItem = document.createElement('div')
                sneakerItem.innerHTML =
                    `
            Name: ${listings[index].name}
            Description: ${listings[index].description}
            Brand: ${listings[index].brand}
            Purchase Place: ${listings[index].purchase_place}
            Size: ${listings[index].size}
            Type: ${listings[index].type}
            <img src="${listings[index].image_path}">
            Condition: ${listings[index].condition}
            Listing Date: ${listings[index].listing_date}
            Location: ${listings[index].location}
            Selling Price: $${listings[index].selling_price}
            `
            page.appendChild(sneakerItem)
            }
        });

}