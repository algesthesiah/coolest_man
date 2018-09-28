import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const home = () => import(/* webpackChunkName: "home" */ '@/views/home');
const shop = () => import(/* webpackChunkName: "home" */ '@/views/home/shop');
const car = () => import(/* webpackChunkName: "home" */ '@/views/home/car');
const user = () => import(/* webpackChunkName: "home" */ '@/views/home/user');
const category = () =>
  import(/* webpackChunkName: "home" */ '@/views/home/category');
const find = () => import(/* webpackChunkName: "home" */ '@/views/home/find');
const special_course = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/special_course');
const source_info = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/source_info');
const learning_finance = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/learning_finance');
const buy_finance = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/buy_finance');
const video = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/video');
const pay = () => import(/* webpackChunkName: "header" */ '@/views/header/pay');
const noob = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/noob');
const integral = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/integral');
const problem = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/problem');
const help = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/help');
const college_system = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/college_system');
const exchange = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/exchange');
const save = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/save');
const reflect = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/reflect');
const myorder = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/myorder');
const banlance = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/banlance');
const promotion = () =>
  import(/* webpackChunkName: "header" */ '@/views/header/promotion');
const search = () =>
  import(/* webpackChunkName: "home" */ '@/views/home/search');
const home_header = () =>
  import(/* webpackChunkName: "header" */ '@/views/header');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/category',
      component: home,
      meta: {
        name: '首页'
      },
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: shop
        },
        {
          path: 'car',
          name: 'car',
          component: car
        },
        {
          path: 'user',
          name: 'user',
          component: user
        },
        {
          path: 'find',
          name: 'find',
          component: find
        },

        {
          path: 'category',
          name: 'category',
          component: category
        }
      ]
    },
    {
      path: 'search',
      name: 'search',
      component: search
    },

    {
      path: '/',
      name: 'home_header',
      redirect: '/special_course',
      meta: {
        name: '首页'
      },
      component: home_header,
      children: [
        {
          path: 'special_course',
          name: 'special_course',
          component: special_course,
          meta: {
            name: '专题课程'
          }
        },
        {
          path: 'banlance',
          name: 'banlance',
          component: banlance,
          meta: {
            name: '余额'
          }
        },
        {
          path: 'myorder',
          name: 'myorder',
          component: myorder,
          meta: {
            name: '我的订单'
          }
        },
        {
          path: 'source_info',
          name: 'source_info',
          component: source_info,
          meta: {
            name: '专题课程'
          }
        },
        {
          path: 'promotion',
          name: 'promotion',
          component: promotion,
          meta: {
            name: '推广'
          }
        },
        {
          path: 'problem',
          name: 'problem',
          component: problem,
          meta: {
            name: '常见问题'
          }
        },
        {
          path: 'integral',
          name: 'integral',
          component: integral,
          meta: {
            name: '我的积分'
          }
        },
        {
          path: 'reflect',
          name: 'reflect',
          component: reflect,
          meta: {
            name: '体现'
          }
        },
        {
          path: 'help',
          name: 'help',
          component: help,
          meta: {
            name: '帮助说明'
          }
        },
        {
          path: 'noob',
          name: 'noob',
          component: noob,
          meta: {
            name: '新手上路'
          }
        },
        {
          path: 'college_system',
          name: 'college_system',
          component: college_system,
          meta: {
            name: '学院体系'
          }
        },
        {
          path: 'pay',
          name: 'pay',
          component: pay,
          meta: {
            name: '立即购买'
          }
        },
        {
          path: 'exchange',
          name: 'exchange',
          component: exchange,
          meta: {
            name: '积分交换'
          }
        },
        {
          path: 'save',
          name: 'save',
          component: save,
          meta: {
            name: '确认充值'
          }
        },
        {
          path: 'learning_finance',
          name: 'learning_finance',
          component: learning_finance,
          meta: {
            name: '学习类理财'
          }
        },
        {
          path: 'buy_finance',
          name: 'buy_finance',
          component: buy_finance,
          meta: {
            name: '购买学习类理财产品'
          }
        },
        {
          path: 'video',
          name: 'video',
          component: video,
          meta: {
            name: '专题课程'
          }
        }
      ]
    }
  ]
});
