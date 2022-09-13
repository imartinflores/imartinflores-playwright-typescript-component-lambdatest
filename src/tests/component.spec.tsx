import { test, expect } from '@playwright/experimental-ct-react';
import Header from '../../src/header';
import App from '../../src/App';

test.use({ viewport: { width: 500, height: 500 } });

test('Header should work', async ({ mount, page }) => {
  const component = await mount(<Header></Header>);
  //await expect(page.locator("[qa-id='Header']")).toHaveText("Header Testing Component")
  await expect(page.locator("header>h1")).toHaveScreenshot()
  page.close()
});

test('App should work', async ({ mount }) => {
  const component = await mount(<App></App>);
  await expect(component).toContainText('My First Component');
});
