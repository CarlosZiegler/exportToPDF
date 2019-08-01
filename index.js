const puppeteer = require('puppeteer')

const getPDF= async()=>{
    //open Browser Headless
    const browser= await puppeteer.launch()
    //Create Page in Browser
    const page = await browser.newPage()
    //set Link hier:
    let link = 'https://ibjjf.com/championships/calendar/'
    //get HTML of link
    await page.goto(link)
    //HTML -> PDF
    await page.pdf({
        path : './Document/Data.pdf',
        format:'A4'})
    await browser.close()
}
getPDF()
