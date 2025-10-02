import Header from '../templates/Header.mjs';
import Home from '../pages/Home.mjs';
import Character from '../pages/Character.mjs';
import Error404 from '../pages/Error404.mjs';
import getHash from '../utils/getHash.mjs';
import resolveRoutes from "../utils/resolveRoutes.mjs";

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('Header');
    const content = null || document.getElementById('Content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    console.log(route);

    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;