import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'rxjs-operators.js',
    output: {
        file: 'dist/rxjs-operators.umd.js',
        format: 'umd',
        name: 'rxjs-operators'
    },
    plugins: [
        resolve()
    ]
}
