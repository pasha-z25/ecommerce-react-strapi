module.exports = {
  extends: ['halo-lab', 'prettier'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  plugins: ['prettier']
}
