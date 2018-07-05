const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './project/assets/js/index',
    ],
    
    output: {
        path: path.resolve('./project/assets/bundles/'),
        filename: '[name]-[hash].js',
        // Tell Django where to find the static files
        publicPath: 'http://localhost:3000/assets/bundles/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // Prevent reload upon discovery of an error
        new BundleTracker({filename: './project/webpack-stats.json'}),
    ],

    module: {
        rules: [
            { // Below tells Babel to convert JSX to JS that browsers can understand
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                use: [
                    { loader: 'react-hot' },
                    { loader: 'babel-loader' },
                ]
            },
        ]
    },

}
