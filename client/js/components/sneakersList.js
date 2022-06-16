function renderSneakers() {
    axios
        .get("/api/sneakers")
        .then((response) => {
            const sneakers = response.data;

        })
} 