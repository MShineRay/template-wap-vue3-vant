// 如果需要使用 rem 单位进行适配
// https://youzan.github.io/vant/v3/#/zh-CN/advanced-usage
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    // 'postcss-pxtorem': {
    //   rootValue({ file }) {
    //     return file.indexOf('vant') !== -1 ? 37.5 : 75;
    //   },
    //   propList: ['*'],
    // },
  },
};
