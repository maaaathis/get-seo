import test from 'ava';
import { getSEO } from "./dist/getSEO.js"

const TEST_URL = 'https://github.com/maaaathis/maaaathis';

test('title', async t => {
    const seoGetter = new getSEO(TEST_URL);
    const title = await seoGetter.getTitle();
    t.is(title, 'GitHub - maaaathis/maaaathis: Personal GitHub Profile');
});

test('description', async t => {
    const seoGetter = new getSEO(TEST_URL);
    const description = await seoGetter.getDescription();
    t.is(description, 'Personal GitHub Profile. Contribute to maaaathis/maaaathis development by creating an account on GitHub.');
});