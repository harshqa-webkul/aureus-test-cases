import { test, expect } from "../../../setup"
import {
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
    await adminPage.getByRole('textbox', { name: 'Name' }).fill('Customer 1');

    /**
     * Clicking on create
     */
    await adminPage.locator('#key-bindings-1').click();
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

    const productDropdown = adminPage.locator('select[id*="product_id"]').locator('..').locator('..');
    await productDropdown.locator('.choices__inner').click();
    await productDropdown.locator('.choices__list[role="listbox"] .choices__item--choice').first().click();
    //await adminPage.locator('[data-id="1"]').nth(1).click();

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
});
