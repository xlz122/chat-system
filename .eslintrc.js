module.exports = {
  root: true,
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "react-hooks"
  ],
  rules: {
    // "prettier/prettier": "off"/"error" // 开启/关闭prettier
    "prettier/prettier": "off",
    "no-undef": "off",
    "no-restricted-globals": "off",
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/no-unresolved": [0], // 取消自动解析路径，以此开启alias的别名路径设置
    "import/extensions": [0], // 取消对文件扩展名的验证
    "linebreak-style": [0], // 取消换行符\n或\r\n的验证
    "no-undef": [0], // 取消全局变量检查，如window、document等
    "camelcase": [0], // 取消强制驼峰法命名，UNSAFE_componentWillReceiveProps钩子检查报错
    "object-curly-newline": [0], // 取消 { a, b, c } 多个变量需要换行
    "prefer-destructuring": [0], // 取消必须解构let { name } = obj，无法let name = obj.name;
    "arrow-body-style": [0], // 取消检查链式回调，.then().catch()
    "no-param-reassign": [0], // 取消函数参数需要重新赋值给另一个变量才能使用
    "no-mixed-operators": [0], // 取消 / 被当作除运算时检查
    "no-plusplus": [0], // 取消一元运算符 ++ 检查
    "no-bitwise": [0], // 取消不允许按位运算符验证
    "consistent-return": [0], // 取消return返回检查
    "jsx-a11y/label-has-associated-control": [0], // 取消label检查
    "class-methods-use-this": [0], // 取消类方法没有使用this检查
    "global-require": [2], // 要求 require() 出现在顶层模块作用域中
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }], // 禁止出现未使用过的变量， vars (all 检查全部变量) args（after-used 只检查最后一个函数参数）
    "no-var": 2, // 禁用var，用let和const代替
    "quotes": [2, "single"], // 开启强制单引号
    "eqeqeq": 2, // 强制全等( === 和 !==)
    "semi": [2, "always"],// 语句强制分号结尾
    "no-use-before-define": [2, { "functions": false, "classes": true, "variables": true }], // 禁止在变量定义之前使用它们 variables(变量)
    "arrow-parens": [2, "as-needed"], // 箭头函数参数括号，一个参数时可省略括号
    "arrow-spacing": [2, { before: true, after: true }], // 箭头函数，箭头前后空格
    "comma-dangle": [2, "never"], // 禁止对象最后一项逗号
    "max-len": [2, { code: 120 }], // 单行代码/字符串最大长度
    // react配置
    "react/jsx-props-no-spreading": [0], // 取消<Component {...this.props} />检查
    "react/jsx-no-bind": [0], // 取消JSX中不允许使用箭头函数和bind
    "react/jsx-filename-extension": [0, { "extensions": [".js, .jsx"] }],
    "react/destructuring-assignment": [0],
    "react/sort-comp": [2], // 强制组件方法顺序
    "react/self-closing-comp": [2], // 防止没有children的组件的额外结束标签<Text></Text>
    "react-hooks/rules-of-hooks": [2], // 检查 Hook 的规则，不允许在if for里面使用
    "react-hooks/exhaustive-deps": [0] // 检查 effect 的依赖
  }
}
