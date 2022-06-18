  # longking-ui 组件库

  ### package.json 配置说明
    1、"files": [
        "dist",
        "components"
    ], // 指定希望发布的文件目录

    2、"main": "dist/index.umd.js", // 指定这个库的入口文件

  ### 演示文档
  https://maytake.github.io/longking-ui/

  ### 1.安装组件库
  ``` bash
  npm i longking-ui
  ```
  ### 2.引用组件库
  ```
  // 全部引入
import 'longking-ui/dist/css/index.css';
import MUI from 'longking-ui';
  Vue.use(MUI);

  // 按需引入
  import 'longking-ui/dist/css/demo.css';
  import { Demo } from 'longking-ui';
  Vue.use(Demo)
  ```


