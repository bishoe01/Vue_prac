import { createRouter, createWebHistory } from "vue-router";
import TimeLine from './components/list.vue'
import TheHome from './components/Home.vue';
import TheDetail from './components/Detail.vue';
import TheComment from './components/TheComment.vue';
import TheAuthor from './components/TheAuthor.vue';
import The_404 from './components/The404.vue';
const routes= [{
    path : '/detail/:id',
    component : TheDetail,
    children : [
        {
            path : 'author',
            component : TheAuthor,
    },
    {
        path : "comment",
        component : TheComment,
    },
    ]
},
{
    path : '/list',
    component : TimeLine
},{
    path : '/',
    component : TheHome,
},
{
    path : "/:The404(.*)",
    component : The_404,
},
];



const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;