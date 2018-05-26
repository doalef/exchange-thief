import CurrenyRoute from './currency';
export default (app) => {
    app.use('/currency',CurrenyRoute())
}