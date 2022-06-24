console.log('login page is rendering')

function renderLogin() {

    const htmlContent = document.getElementById('content')
    const htmlContent2 = document.getElementById('side-bar')
    const form = document.createElement('form')
    form.innerHTML = `
        <form>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group col-md-12">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="Password">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
    `

    htmlContent.replaceChildren(form)
    htmlContent2.replaceChildren()

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

