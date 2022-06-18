function renderSneakers() {
    axios
        .get("/api/sneakers")
        .then((response) => {
            const sneakers = response.data;
            console.log(sneakers)
            page = document.getElementById('content')
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
            `
                page.appendChild(sneakerItem)
            }
        });

}