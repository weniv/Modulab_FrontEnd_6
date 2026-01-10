const webpack = require('webpack');
const path = require('path'); // node.js 의 path 모듈을 불러옵니다. 운영체제별로 상이한 경로 문법(구분자 : / 혹은 \)를 해결해 절대 경로로 반환하는 역할을 합니다.
require('dotenv').config();


// 모듈을 밖으로 빼내는 노드 JS문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [ // 여기서 로더를 추가할 수 있습니다.
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 여기 추가합니다.
                test: /\.(png|jpg|gif|svg|jpeg|webp)$/,
                type: 'asset/inline'
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '마지막 빌드 시간은 ' + new Date().toLocaleString() + ' 입니다.'
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
    ]
}