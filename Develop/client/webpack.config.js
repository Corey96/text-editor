const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE Text Editor',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: './service-worker.js',
      }),
      new WebpackPwaManifest({
        name: 'JUST ANOTHER TEXT EDITOR',
        short_name: 'JATE',
        description: 'The PWA text editor'
        background_color: '##33FFBD',
        //theme_color:,
        start_url: './',
        publicPath: './',
        icons: [
          {
            src:
            sizes:
            destination:
          },
        ],
      }),
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
