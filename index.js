const mysql = require('mysql');

exports.login = (req, res) => {
    const { username, password } = req.body;
    
    const pool = mysql.createPool({
        host: '10.119.224.3',
        user: 'root',
        password: 'fracturevision',
        database: 'fracturevisiondb'
    });

    pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results) {
        if (error) {
            throw error;
        }

        if (results.length === 0) {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        } else {
            res.json({ success: true, data: results });
        }
    });
};
