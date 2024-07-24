import dontenv from 'dotenv';
import { setupApp } from './infrastructure';
require('module-alias/register');

dontenv.config();

const app = setupApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;

