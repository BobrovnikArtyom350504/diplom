module.exports = {
 entry: './src/app.ts',
 output: {
   filename: 'dist/bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
};
