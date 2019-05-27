module.exports = {
  presets: [[ require('@racoon/ui-babel-preset'), {
    coverage: Boolean(process.env.COVERAGE),
    esModules: Boolean(process.env.ES_MODULES),
    removeConsole: process.env.NODE_ENV === 'production'
  }]]
}
