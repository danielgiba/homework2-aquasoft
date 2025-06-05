import app from './app';
import { sequelize } from '../models';

const PORT = process.env.PORT || 3000;
//to check the port for postman if it's working for endpoints
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
