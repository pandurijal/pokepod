import MainPage from '../Pages/MainPage';
import DetailPage from '../Pages/DetailPage';

export const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/pokemon/:pokeName',
    component: DetailPage,
    exact: true
  }
];
