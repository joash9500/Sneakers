console.log('login page is rendering')

function renderLogin() {

    const htmlContent = document.getElementById('content')
    const form = document.createElement('form')
    form.innerHTML = `
        <label for="email">Email: </label>
        <input type="email" name="email"><br>
        <label for="password">Password: </label>
        <input type="password" name="password"><br>

        <button type="submit">Log In</button>
    `

    htmlContent.replaceChildren(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault() //prevents default pasting into URL when form is submitted

        const formData = new FormData(form)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        axios.post('/api/session', data)
        .then((response) => {
            console.log(response.data.session)
            window.location = '/' //console log above won't work if window.location is active. commentn this line out if you wnat to see what the response is
        })

    })
}

