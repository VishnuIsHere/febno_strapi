const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '.tmp/data.db');
const db = new Database(dbPath, { verbose: console.log });

try {
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'waslasoft%'").all();
    console.log('Tables found:', tables);

    if (tables.length > 0) {
        const count = db.prepare(`SELECT count(*) as count FROM ${tables[0].name}`).get();
        console.log(`Row count in ${tables[0].name}:`, count);

        const rows = db.prepare(`SELECT * FROM ${tables[0].name}`).all();
        console.log('Data:', JSON.stringify(rows, null, 2));
    } else {
        console.log('No Waslasoft tables found.');
    }

    // Also check public permissions
    const permissions = db.prepare("SELECT * FROM up_permissions WHERE action LIKE '%waslasoft%'").all();
    console.log('Permissions found:', permissions);

} catch (err) {
    console.error('Error:', err);
}

db.close();
