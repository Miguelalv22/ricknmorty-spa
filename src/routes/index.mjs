import Header from '../templates/Header.mjs';
import Home from '../pages/Home.mjs';
import Character from '../pages/Character.mjs';
import Error404 from '../pages/Error404.mjs';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('Header');
    const content = null || document.getElementById('Content');

    header.innerHTML = await Header();
};

export default router;