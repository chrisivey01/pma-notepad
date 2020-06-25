module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/transform-runtime"]
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader:"html-loader"
                    }
                ],
            },
            {
                test:/\.s[ac]ss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
}