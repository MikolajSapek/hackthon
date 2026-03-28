const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--use-gl=angle', '--use-angle=metal', '--enable-gpu']
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message.substring(0, 200)));

  await page.goto('http://localhost:3001/?v=8');
  await page.waitForTimeout(12000);

  await page.evaluate(() => map.flyTo({ center: [12.56, 55.69], zoom: 13, pitch: 50, duration: 0 }));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/cph-deck-1.png' });
  console.log('1: Overview with deck.gl columns');

  await page.evaluate(() => map.flyTo({ center: [12.55, 55.695], zoom: 15, pitch: 55, duration: 0 }));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/cph-deck-2.png' });
  console.log('2: Close-up');

  if (errors.length) {
    console.log('Errors:');
    errors.forEach(e => console.log(' ', e));
  } else {
    console.log('No errors');
  }

  await browser.close();
})();
