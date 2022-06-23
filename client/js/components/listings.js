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
            <div class="card" style="width: 25rem">
                    <img class="card-img-top" src="${listings[index].image_path}">
                <div class="card-body">
                    <h5 class="card-title">${listings[index].name}</h5>
                    <p><strong>Description:</strong> ${listings[index].description}</p>
                    <p><strong>Brand:</strong> ${listings[index].brand}</p>
                    <p><strong>Purchase Place:</strong> ${listings[index].purchase_place}</p>
                    <p><strong>Size:</strong> ${listings[index].size}</p>
                    <p><strong>Type:</strong> ${listings[index].type}</p>
                    <p><strong>Condition:</strong> ${listings[index].condition}</p>
                    <p><strong>Listing Date:</strong> ${listings[index].listing_date}</p>
                    <p><strong>Location:</strong> ${listings[index].location}</p>
                    <p><strong>Selling Price:</strong> $${listings[index].selling_price}</p>
                    </div>
                </div>
                `
            page.appendChild(sneakerItem)
            }
        });
    renderFilter()

}