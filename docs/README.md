# 快速开始

#### 安装组件库

```bash
npm i mooc-ui2
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'longking-ui/dist/css/index.css';
import MUI from 'longking-ui';
Vue.use(MUI);
// 按需引入
  import 'longking-ui/dist/css/demo.css';
  import { Demo } from 'longking-ui';
  Vue.use(Demo)
// 按需引入
  import 'longking-ui/dist/css/card.css';
  import Card from '../components/lib/card/index'; 
  Vue.use(Card)
```