console.log('signup page is running')

function renderSignup() {
    console.log('signup page is rendering')

    const htmlContent = document.getElementById('content')
    const form = document.createElement('form')
    form.innerHTML = `
        <label for="email">Email: </label>
        <input type="email" name="email"><br>
        <label for="password">Password: </label>
        <input type="password" name="password"><br>    
        <label for="name">Name: </label>
        <input type="text" name="name"><br>
        <label for="username">Username: </label>
        <input type="text" name="username"><br>

        <label for="location">Location: </label>
        <input type="text" name="location"><br>
        <label for="shoe_size">Shoe size: </label>
        <input type="number" name="shoe_size"><br>
        <label for="photo_URL">Photo URL: </label>
        <input type="url" name="photo_URL"><br>
        <label for="instagram_URL">Instagram URL: </label>
        <input type="url" name="instagram_URL"><br>

        <button type="submit">Save</button>
    `

    htmlContent.replaceChildren(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault() //prevents default pasting into URL when form is submitted

        const formData = new FormData(form) //copy data from form into formData
        let email = formData.get('email')
        let password = formData.get('password')
        let name = formData.get('name')
        let username = formData.get('username')
        let shoeSize =formData.get('shoe_size')
        let location = formData.get('location')
        let photo = formData.get('photo_URL')
        let instagram = formData.get('instagram_URL')

        axios.post('/api/users', {
            email: email,
            pass: password,
            name: name,
            username: username,
            size: shoeSize,
            loc: location,
            photo: photo,
            insta: instagram

        }).then(() => {
            window.location ='/' //redirect
        }).catch((err) => {
            console.log(err.response.data.message)
        })

    })

}