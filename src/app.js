import { render } from 'https://unpkg.com/lit-html?module';
import page from '../node_modules/page/page.mjs';

import { logout as apiLogout } from '../src/api/data.js';
import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';

const container = document.querySelector('.container');
document.getElementById('logoutBtn').addEventListener('click', logout);

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, container);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const username = sessionStorage.getItem('username');
    if (username != null) {
        document.getElementById('welcome').textContent = `Welcome, ${username}`;
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}

