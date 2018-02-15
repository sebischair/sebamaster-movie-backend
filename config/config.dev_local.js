var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';
Config.db.name = 'moviedb';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

module.exports = Config;