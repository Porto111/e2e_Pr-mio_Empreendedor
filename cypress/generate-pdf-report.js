const fs = require('fs');
  const path = require('path');
  const merge = require('mochawesome-merge');
  const generator = require('mochawesome-report-generator');
  const puppeteer = require('puppeteer');

  async function generatePDFReport() {
    const reportDir = path.join('C:/Users/guilherme.souza/Desktop/Automações_de_teste/e2e_Prêmio_Empreendedor', 'cypress/generate-pdf-report.js');
    const jsonReport = await merge({ files: [path.join(reportDir, '*.json')] });
    const htmlReport = await generator.create(jsonReport, { inline: true });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlReport);
    await page.pdf({ path: path.join(reportDir, 'test-report.pdf'), format: 'A4' });

    await browser.close();
    console.log('PDF report generated at:', path.join(reportDir, 'test-report.pdf'));
  }

  generatePDFReport().catch(err => {
    console.error('Error generating PDF report:', err);
  });