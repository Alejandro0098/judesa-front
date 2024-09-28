import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import constants from './constants/index.js';

const hostname = constants.hostname;
const port = constants.port;
const dev = constants.dev;
const protocol = constants.protocol;


const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
    } catch (err) {
        console.error('Error handling', req.url, err)
        res.statusCode = 500
        res.end('Internal server error')
    }
  })
  .once('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  .listen(port, () => {
    console.log(`Ready on ${protocol}://${hostname}:${port}`)
  })
 

})