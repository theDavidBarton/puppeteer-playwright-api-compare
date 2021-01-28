const puppeteer = require('puppeteer')

const main = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('about:blank')
  // scraper script goes here
  await browser.close()
}
main()
