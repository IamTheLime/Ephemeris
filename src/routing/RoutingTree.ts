import Home from '@/components/Home/Home.vue';
import NotFound from '@/components/notffound/NotFound.vue';
import Blog from '@/components/Blog/Blog.vue';

const routes = [
    { path: '/(home)?', component: Home },
    { path: '/blog', component: Blog },
    { path: '*', component: NotFound },
];

export default routes;
