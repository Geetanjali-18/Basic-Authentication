// Basic Authentication Middleware
module.exports =function basicAuth (req, res, next){
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Area"');
        return res.status(401).send('Authentication required.');
    }

    // Decode credentials
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    // Hardcoded username and password
    const validUsername = 'admin1';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        return next(); // Authentication successful
    } else {
        res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Area"');
        return res.status(401).send('Invalid credentials.');
    }
};