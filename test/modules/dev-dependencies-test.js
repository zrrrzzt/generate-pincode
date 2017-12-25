const tap = require('tap')
const pkg = require('../../package.json')
const dependencies = pkg.devDependencies || {}
const dropModules = ['nsp']
const isDropped = (module) => !dropModules.includes(module)

if (Object.keys(dependencies).length > 0) {
  Object.keys(dependencies).filter(isDropped).forEach((dependency) => {
    const module = require(dependency)
    tap.ok(module, `${dependency} loads ok`)
  })
} else {
  tap.equal(true, true, 'no dev-dependencies to test')
}
