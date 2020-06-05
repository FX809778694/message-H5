import Vue from 'vue'
import BioSvg from '../components/lib/BioSvg' // svg组件

// 注册到全局
Vue.component('bio-svg', BioSvg);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
