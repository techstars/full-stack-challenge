const webpack = require('webpack'); 
const dotenv = require('dotenv');

module.exports = (env) => {
    const env = dotenv.config().parsed;
    console.log('env: ', env);
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        plugins: [
        new webpack.DefinePlugin(envKeys)
        ]
    };
};