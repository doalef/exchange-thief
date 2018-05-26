import CurrenyRoute from './currency';
import UserRoute from './user';
import PageRouter from './page';
export default (app) => {
    app.use('/currency',CurrenyRoute());
    app.use('/users',UserRoute());
    app.use('/',PageRouter());
}