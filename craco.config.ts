import CracoLessPlugin from 'craco-less'
import { CracoConfig } from '@craco/types'
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'

const cracoConfig: CracoConfig = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    // plugins: {
    //   add: [new MonacoWebpackPlugin()],
    // },
    // configure: (webpackConfig) => {
    //   webpackConfig.plugins.push(new MonacoWebpackPlugin())
    //   return webpackConfig
    // },
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
}

export default cracoConfig
