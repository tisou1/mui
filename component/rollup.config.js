import { defineConfig } from 'rollup'
// 用于在node_modules中使用第三方模块。
import resolve from "@rollup/plugin-node-resolve"
import commandjs from "@rollup/plugin-commonjs"
import postcss from "rollup-plugin-postcss"
import babel from "@rollup/plugin-babel"
import typescript from '@rollup/plugin-typescript'
import del from "rollup-plugin-delete"


export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'es/index.js',
      format: 'es',
    }
  ],
  plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
       // 支持import引入
       resolve(),
       // 支持commandjs
       commandjs(),
       // ts

      typescript({
        tsconfig: 'tsconfig.json', // 指定TypeScript配置文件的路径
        declaration: true,
        outDir: 'dist', // 指定类
       }),
       // css
       postcss({
        extract: true, // 设置为true以将CSS提取为单独的文件
       }),
       del({
        targets: ['dist/*', 'es/*']
       })
  ],
  external: [
    ['react', 'react-dom'],
  ]
})