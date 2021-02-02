const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  chainWebpack: config => {
    config.output.filename("js/[name].[hash:8].js");
    config.output.chunkFilename("js/[name].[hash:8].js").end();

    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    host: "local.zhenguanyu.com",
    disableHostCheck: true,
    port: 8080
  }
};
