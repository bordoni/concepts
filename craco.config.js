module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // WordPress packages use process.env.NODE_ENV and expect it not to be
      // minified in order to take advantage of development checks
      if (webpackConfig.mode === 'production') {
        const terserPlugin = webpackConfig.optimization.minimizer.find(
          (plugin) => plugin.constructor.name === 'TerserPlugin'
        );
        
        if (terserPlugin) {
          terserPlugin.options.minimizer.options.keep_classnames = true;
          terserPlugin.options.minimizer.options.keep_fnames = true;
        }
      }
      
      return webpackConfig;
    },
  },
  style: {
    css: {
      loaderOptions: {
        // Some CSS in WordPress components uses :where() which needs
        // additional handling in some cases
        url: false,
      },
    },
  },
}; 