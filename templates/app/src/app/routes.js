import {helpRoute} from './routes/help/';
import {dashboard} from './dashboard';

export const routes = [
  ...helpRoute,
  {path: '/', component: dashboard}
];
