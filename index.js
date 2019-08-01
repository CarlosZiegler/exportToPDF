const puppeteer = require('puppeteer')

const tirar= async()=>{
    const browser= await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://ibjjf.com/championships/calendar/')
    //await page.goto('https://medium.com/applab/6-web-app-10de2dd1b6d8')
    await page.pdf({
        path : './Daten/Datei.pdf',
        format:'A4'})
    await browser.close()
}
tirar()
