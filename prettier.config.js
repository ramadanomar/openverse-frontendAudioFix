module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  vueIndentScriptAndStyle: false,
  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: 'tailwind.config.js',
}
