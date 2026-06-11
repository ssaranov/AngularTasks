import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { About } from './pages/about/about';
import { Statistics } from './pages/statistics/statistics';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path:'',
        component: Home,
        title:'Главная'
    },
    {
        path:'tasks',
        component: Tasks,
        title: 'Задачи'
    },
    {
        path:'about',
        component: About,
        title: 'Обо мне'
    },
    {
        path:'**',
        redirectTo:''
    },
    {
        path:'statistics',
        component: Statistics,
        title: 'Статистика'
    },
    {
         path:'Contact',
        component: Contact,
        title: 'Контакт'
    }
];
