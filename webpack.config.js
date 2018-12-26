module.exports = function(env) {
    process.env.NODE_ENV = env;
    return require(`./config/webpack/webpack.${env}.js`);
};