import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'db_spa',
        connectionLimit: 10
        
    });

    return connection
}

