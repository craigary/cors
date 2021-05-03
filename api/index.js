const fetch = require('node-fetch')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  let url = 'https://jsonplaceholder.typicode.com/todos'
  if (req.query && req.query.url) {
    url = req.query.url
  }
  try {
    const response = await fetch(url)
    res.send(await response.json())
  } catch (e) {
    res.send(e)
  }
}
