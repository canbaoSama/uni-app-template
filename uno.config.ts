import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
    shortcuts: [
        {
            'wh-full': 'w-full h-full',
            'flex-center-center': 'flex justify-center items-center',
            'bg-img-cover': 'bg-center bg-no-repeat bg-cover',
            'absolute-full': 'absolute wh-full top-0 left-0',
        },

    ],
    rules: [
        ['linear-gradient-white', { background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.01))' }],
    ],
    theme: {
        colors: {
            /** ******************************************************  UI 设计后的颜色 *******************************************************/
            'common-green': '#1c8a5f', // 正常状态绿色
            'light-green': '#23aa75', // 亮绿色  hover
            'green-1': '#53df92', // 边框绿色,文案绿色
            'border-gray': '#cbcbcb', // 边框灰色
            'border-hover-gray': '#cecece', // hover时边框灰色
            'btn-bg-gray': 'rgba(255, 255, 255, 0.15)', // 按钮默认灰色
            'btn-bg-gray-border': '#1e1e1e', // 默认按钮带边框的背景颜色
            'divideGray': '#3d3d3b', // 分割线灰色
            'divideGray-2': '#555555', // 分割线虚线灰色
            'gray-1': '#f6f6f6', // 文本颜色
            'gray-2': '#555957', // 图标按钮背景色
            'gray-3': '#222d29', // AI对话卡片背景颜色-我
            'gray-4': '#000000b3', // menu 菜单控件
            'gray-5': '#1b1b1b', // 聊天背景对话颜色
            'gray-6': '#191919', // 标题栏背景色
            'gray-7': '#505050', // 行动管控底色灰色
            'green-2': '#314a40', //  AI对话卡片背景颜色绿色
            'green-3': '#2c7559', // 卡片对话内容外围， 后面记得提到AI组件里
            'icon-gray': '#444444', // 图标灰色
            'warning-red': '#dc0000', // 警告的红色
            'white-1': '#0d1210', // 线框白色， 偏灰
            'white-2': '#75807c', // 线框白色， 偏灰
        },
    },
    presets: [
        presetUno(), // 预设的超集
        presetAttributify(), // 简写
        // presetIcons(), // icons
    ],
})
