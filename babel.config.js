module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: {
          '@models': './src/app/models',
          '@controllers': './src/app/http/controllers',
          '@middlewares': './src/app/http/middlewares',
          '@routes': './src/routes',
          '@config': './src/config'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
