import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from '@tailwindcss/postcss';

const config = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({            
            config: false,
            minimize: true,
            plugins: [tailwindcss]
        }),
        typescript({tsconfig: './tsconfig.json'})
    ]
}

export default config;