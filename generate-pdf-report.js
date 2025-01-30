const fs = require('fs');
const path = require('path');
const merge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const puppeteer = require('puppeteer');
const { exec } = require('child_process');

async function runCypressTests() {
  return new Promise((resolve, reject) => {
    exec('npx cypress run --reporter mochawesome', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Cypress tests: ${stderr}`);
        reject(error);
      } else {
        console.log(`Cypress tests completed: ${stdout}`);
        resolve();
      }
    });
  });
}

async function generatePDFReport() {
  const reportDir = path.join('C:/Users/guilherme.souza/Desktop/Automações_de_teste/e2e_Prêmio_Empreendedor', 'cypress/reports');
  const jsonReport = await merge({ files: [path.join(reportDir, '*.json')] });
  const htmlReport = await generator.create(jsonReport, { inline: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlReport);
  await page.pdf({ path: path.join(reportDir, 'test-report.pdf'), format: 'A4' });

  await browser.close();
  console.log('PDF report generated at:', path.join(reportDir, 'test-report.pdf'));
}

async function main() {
  try {
    await runCypressTests();
    await generatePDFReport();
  } catch (error) {
    console.error('Error generating PDF report:', error);
  }
}

main();