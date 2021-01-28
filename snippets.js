// config.js creation - pptr.dev
$$('version-name').map(el => (el.innerText.match(/\d+\.\d+\.\d+/) ? el.innerText.match(/\d+\.\d+\.\d+/)[0] : null))

const arr = []
$$('.pptr-sidebar-item').forEach(el => {
  let item = {}
  item[el.innerText] = { puppeteer: { className: el.innerText, path: el.href } }
  arr.push(item)
})
console.log(JSON.stringify(arr))
