function plugin (options = {}) {
  return files => {
    return files.map(file => {
      return Object.assign(file, { content: options.content || 'test' })
    })
  }
}

module.exports = plugin
