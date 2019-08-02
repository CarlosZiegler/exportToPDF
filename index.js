const puppeteer = require('puppeteer')

const getPDF= async()=>{

    // Open Browser Headless
    const browser= await puppeteer.launch()

    // Create Page in Browser
    const page = await browser.newPage()

    //######################################  Set Link hier  ####################################################
    let link = 'https://medium.com/dockerbr/principais-comandos-docker-f9b02e6944cd'
    //###########################################################################################################

    // Get HTML of link
    await page.goto(link)

    //With Links to generate PDF
    await page.emulateMedia('screen');

    // HTML -> PDF in Path Document saved
    await page.pdf({
        path : './Document/Data.pdf',
        format:'A4'})

    // Close Browser
    await browser.close()

    //Response in console
    console.log('The homepage : '+link + ' has to PDF exported!!!')
}
getPDF()
