import 'dotenv/config';
import { setupApp } from './infrastructure';

const app = setupApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;

