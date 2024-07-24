import 'dotenv/config';
import './config/module-alias'

import 'reflect-metadata';
import '@/infrastructure/repos/postgres/helpers/postgres';
//import { setupApp } from './infrastructure';

postgres


const app = setupApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;

