module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const cssRule = webpackConfig.module.rules.find(
                (rule) => rule.test && rule.test.toString().includes('.css')
            );
            
            if (cssRule) {
                cssRule.exclude = /node_modules\/@wordpress/;
            }

            webpackConfig.module.rules.push({
                test: /\.css$/,
                include: /node_modules\/@wordpress/,
                use: ['style-loader', 'css-loader'],
            });

            return webpackConfig;
        },
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}; 