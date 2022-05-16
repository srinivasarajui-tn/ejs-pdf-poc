const puppeteer = require("puppeteer");
const fs = require("fs");

async function printPDF(tablesCount, rows) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(
    "http://localhost:8080/document?c=" + tablesCount + "&r=" + rows,
    {
      waitUntil: "networkidle0",
    }
  );

  const pdf = await page.pdf({ format: "A4" });
  fs.writeFileSync("files/output-" + tablesCount + "-" + rows + ".pdf", pdf);
  await browser.close();
  return pdf;
}
module.exports = printPDF;
