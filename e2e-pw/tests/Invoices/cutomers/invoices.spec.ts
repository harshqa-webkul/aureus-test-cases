import { test, expect } from "../../../setup"
import {
    generateName,
    generateCategory,
    generateProductName
} from '../../../utils/faker'


async function createCustomer(adminPage) {

    /**
     * Redirecting to Customer inside Invoices plugin.
     */
    await adminPage.goto("admin/customer/partners");
    await adminPage.waitForSelector('a:has-text("New Customer")');

    /**
     * New Customer button clicked
     */
    await adminPage.getByRole('link', { name: 'New Customer' }).click();

    /**
     * Waiting for Customer edit page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Customer")');

    /**
     * Filling up the Customer details
     */
    const customerName = generateName();
    await adminPage.getByRole('textbox', { name: 'Name' }).fill(customerName);

    /**
     * Clicking on create
     */
    await adminPage.locator('#key-bindings-1').click();

    /**
     * Clicking on contacts
     */
    await adminPage.locator('a').filter({ hasText: 'Contacts' }).click();

    /**
     * Waiting for contacts page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Manage Contacts")');

    /**
     * Clicking on Add Contact
     */
    await adminPage.getByRole('button', { name: 'Add Contact' }).click();
    await adminPage.getByRole('textbox', { name: 'Name' }).fill(customerName);

    /**
     * Clicking on create button
     */
    await adminPage.getByRole('button', { name: 'Create', exact: true }).nth(4).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Contact created' })).toBeVisible();

    /**
     * Clicking on create
     */
    await adminPage.getByRole('tab', { name: 'Bank Accounts' }).click();

    /**
    * Waiting for contacts page to appear
    */
    await adminPage.waitForSelector('h1:has-text("Manage Bank Accounts")');

    await adminPage.getByRole('button', { name: 'New Bank Account' }).click();

    await adminPage.getByRole('textbox', { name: 'Account Number*' }).fill('123456789');
    await adminPage.getByRole('switch', { name: 'Can Send Money' }).click();

    await adminPage.getByTitle('Create').click();

    await adminPage.getByRole('textbox', { name: 'Name*' }).fill(customerName);
    await adminPage.getByRole('button', { name: 'Create' }).nth(3).click();




    await adminPage.locator('div').filter({ hasText: /^Select an option$/ }).click();
    //await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();
    //await adminPage.getByRole('option', { name: 'asd' }).click();

    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    //await adminPage.getByRole('textbox', { name: 'Account Number*' }).fill('1');
}

async function createProduct(adminPage) {
    /**
     * Redirecting to Products inside Invoices plugin.
     */
    await adminPage.goto("admin/customer/products");
    await adminPage.waitForSelector('a:has-text("New Product")');

    /**
     * New Product button clicked
     */
    await adminPage.getByRole('link', { name: 'New Product' }).click();

    /**
     * Waiting for Products edit page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Create Products")');

    /**
     * Filling up the required fields
     */
    await adminPage.getByRole('textbox', { name: 'Name*' }).fill(generateProductName());
    await adminPage.getByRole('spinbutton', { name: 'Price*' }).fill('100');

    /**
     * Adding a Category
     */
    await adminPage.locator('[id="data\\.settings"]').getByRole('button', { name: 'Create' }).click();
    await adminPage.getByPlaceholder('eg. Lamps').fill(generateCategory());
    await adminPage.getByRole('button', { name: 'Create' }).nth(4).click();

    /**
     * Saving the product
     */
    await adminPage.locator('#key-bindings-1').click();

}

async function createInvoice(adminPage) {

    /**
     * Redirecting to Invoices under Invoice plugin.
     */
    await adminPage.goto("admin/customer/invoices");
    await adminPage.waitForSelector('a:has-text("New Invoice")');

    /**
     * New Invoices button clicked
     */
    await adminPage.getByRole('link', { name: 'New Invoice' }).click();

    /**
     * Waiting for Invoices edit page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Create Invoice")');

    /**
     * General Section
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();

    /**
     * Clicked on Add Products.
     */
    await adminPage.getByRole('button', { name: 'Add Product' }).click();

    /**
     * Waiting for products fields to be visible after button clicked
     */
    await adminPage.waitForSelector('.fi-fo-repeater-item-content', { state: 'visible' });

    /**
     * Adding products details
     */
    await adminPage.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    const productDropdown = adminPage.locator('select[id*="product_id"]').locator('..').locator('..');
    await productDropdown.locator('.choices__inner').click();
    await productDropdown.locator('.choices__list[role="listbox"] .choices__item--choice').first().click();

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create', exact: true }).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Invoice created' })).toBeVisible();

    /**
     * Confirming the invoice
     */
    await adminPage.getByRole('button', { name: 'Confirm' }).click();
}

async function createCreditNote(adminPage) {

    /**
     * Redirecting to credit-note under Invoice plugin.
     */
    await adminPage.goto("admin/customer/credit-notes");
    await adminPage.waitForSelector('a:has-text("New Credit Note")');

    /**
     * New Credit Note button clicked
     */
    await adminPage.getByRole('link', { name: 'New Credit Note' }).click();

    /**
     * Waiting for create credit page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Create Credit Note")');

    /**
     * General Section
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();

    /**
     * Clicked on Add Products.
     */
    await adminPage.getByRole('button', { name: 'Add Product' }).click();

    /**
     * Waiting for products fields to be visible after button clicked
     */
    await adminPage.waitForSelector('.fi-fo-repeater-item-content', { state: 'visible' });

    /**
     * Adding products details
     */
    await adminPage.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    const productDropdown = adminPage.locator('select[id*="product_id"]').locator('..').locator('..');
    await productDropdown.locator('.choices__inner').click();
    await productDropdown.locator('.choices__list[role="listbox"] .choices__item--choice').first().click();

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create', exact: true }).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Credit note created' })).toBeVisible();

    /**
     * Confirming the credit note
     */
    await adminPage.getByRole('button', { name: 'Confirm' }).click();
}

test.describe("Customers management", () => {
    test("should create a new customer", async ({ adminPage }) => {
        await createCustomer(adminPage);
    });

    test("should create a new product", async ({ adminPage }) => {
        await createProduct(adminPage);
    });

    test("should create a new invoice", async ({ adminPage }) => {
        await createInvoice(adminPage);
    });

    test("should create a new credit note", async ({ adminPage }) => {
        await createCreditNote(adminPage);
    });

    test("should create a new payment", async ({ adminPage }) => {


    });

});
