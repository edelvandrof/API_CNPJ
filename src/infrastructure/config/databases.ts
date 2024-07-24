import { postgres } from './../db';

let isConnected = false;

export const setupPostgres = async () => {
    try {
        const query = await postgres.query('SELECT NOW()');
        console.log('Connected to Postgres');
        isConnected = true;
        return query;
    } catch (error) {
        console.error('Error connecting to Postgres:', error);
        isConnected = false;
    }
}