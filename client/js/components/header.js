function renderHeader() {
    const headerNode = document.getElementById('headerbar') //get html element for the header bar
    headerNode.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" onClick = "renderSneakers()">SoleMates</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active" onClick = "renderSneakers()">
            <a class="nav-link" href="#">All Sneakers</a>
        </li>
        <li class="nav-item" onClick = "renderListings()">
            <a class="nav-link" href="#">All Listings</a>
        </li>
        <li class="nav-item" onClick = "renderMySneakers()">
            <a class="nav-link" href="#">My Sneakers</a>
        </li>
        <li class="nav-item" onClick = "renderUsers()">
            <a class="nav-link" href="#">Users</a>
        </li>
        <li class="nav-item" onClick = "renderLogin()">
            <a class="nav-link" href="#">Login</a>
            <p id="user" style="display: none">Logged in as <span></span></p>
            <button id="log-out" style="display: none">Logout</button>
        </li>
        <li class="nav-item" onClick = "renderSignup()">
            <a class="nav-link" href="#">Signup</a>
        </li>
        <li class="nav-item" onClick = "renderAddSneakerForm()">
            <a class="nav-link" href="#">Add an Item</a>
        </li>
        </ul>
    </div>
    </nav>
`
    let logoutButton = document.querySelector('#log-out')
    let loginButton = document.querySelector('#log-in')
    let username = document.querySelector('#user > span')
    let userStatus = document.querySelector('#user')
    
    axios.get('/api/session').then((res) => {
        if (res.data.name == undefined) {
            //do nothing. 'logged in as' stays hidden
        } else if (res.data != undefined) {
            userStatus.style.display = 'inline-block' //unhide 'logged in as'
            username.innerText = res.data.name //update the span tag
            logoutButton.style.display = 'inline-block'
            loginButton.style.display = 'none'
        } else {
            console.log('something weird happened with api session')
        }
    })
    let logout = document.querySelector('#log-out')
    logout.addEventListener('click', () => {
        axios.delete('/api/session').then(() => {
            console.log('logged out')
            renderHeader()
        })
    })
}