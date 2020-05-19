import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const isDev = process.env.ROLLUP_WATCH === 'true';

export default {
    input: './src/index.ts',
    output: {
        file: pkg.module,
        format: 'es',
        sourcemap: isDev,
    },
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        // isDev ? livereload() : null
    ],
}
