import { test, expect } from "../../../setup";
import {
    generateName,
    generateAccountNumber,
    generateBankName,
    generateProductName,
    generateCategory,
    generateActivityPlans,
    generateActivityTypes,
    generateDescription
} from "../../../utils/faker";

async function createQuotation(adminPage) {

    /**
     * Redirecting to quotations inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/orders/quotations");
    await adminPage.getByRole('link', { name: 'New Quotation' }).waitFor();

    /**
     * New Quotation button clicked
     */
    await adminPage.getByRole('link', { name: 'New Quotation' }).click();

    /**
     * Waiting for Quotation edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Quotation' }).waitFor();

    /**
     * Filling up the Customer details
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();

    /**
     * Clicked on Add Products.
     */
    await adminPage.getByRole('button', { name: 'Add Product' }).click();

    /**
     * Adding products details
     */
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
    await expect(adminPage.getByRole('heading', { name: 'Quotation created' })).toBeVisible();

    /**
     * Confirming the Quotation
     */
    await adminPage.getByRole('button', { name: 'Confirm' }).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Quotation confirmed' })).toBeVisible();
}

async function createOrders(adminPage) {

    /**
     * Redirecting to orders inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/orders/orders");
    await adminPage.getByRole('heading', { name: 'Orders', exact: true }).waitFor();

    /**
     * New Orders button clicked
     */
    await adminPage.getByRole('link', { name: 'New Order' }).click();

    /**
     * Waiting for Order edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Order' }).waitFor();

    /**
     * Filling up the Customer details
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();

    /**
     * Clicked on Add Products.
     */
    await adminPage.getByRole('button', { name: 'Add Product' }).click();

    /**
     * Adding products details
     */
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
    await expect(adminPage.getByRole('heading', { name: 'Quotation created' })).toBeVisible();

    /**
     * Confirming the Quotation
     */
    await adminPage.getByRole('button', { name: 'Confirm' }).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Quotation confirmed' })).toBeVisible();
}

async function createCustomer(adminPage) {

    /**
     * Redirecting to Customer inside sales plugin.
     */
    await adminPage.goto("/admin/sale/orders/customers");
    await adminPage.getByRole('link', { name: 'Create Customer' }).click();

    /**
     * New Customer button clicked
     */
    await adminPage.getByRole('link', { name: 'Create Customer' }).click();

    /**
     * Waiting for Customer edit page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Customers")');

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
    await adminPage.getByRole('main').locator('a').filter({ hasText: 'Contacts' }).click();

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
     * Clicking on Bank Accounts
     */
    await adminPage.getByRole('tab', { name: 'Bank Accounts' }).click();

    /**
    * Waiting for Manage Bank Accounts page to appear
    */
    await adminPage.waitForSelector('h1:has-text("Manage Bank Accounts")');

    /**
     * Clicking on New Bank Account
     */
    await adminPage.getByRole('button', { name: 'New Bank Account' }).click();

    /**
     * Filling bank account details
     */
    await adminPage.getByRole('textbox', { name: 'Account Number*' }).fill(generateAccountNumber());
    await adminPage.getByRole('switch', { name: 'Can Send Money' }).click();

    /**
     * Creating new bank
     */
    await adminPage.getByTitle('Create').click();

    /**
     * Filling bank details
     */
    await adminPage.getByRole('textbox', { name: 'Name*' }).fill(generateBankName());

    /**
     * Clicking create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(3).click();

    /**
     * Selecting Account holder name from the drop down 
     */
    await adminPage.locator('div:nth-child(4) > .fi-fo-field-wrp > div > .grid > .fi-input-wrp > .fi-input-wrp-input > div:nth-child(2) > .choices > .choices__inner').click();
    await adminPage.locator('[id="choices--mountedTableActionsData0partner_id-item-choice-1"]').click();

    /**
     * Clicking on create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();
}

async function createProduct(adminPage) {

    /**
     * Redirecting to Products inside Sales plugin.
     */
    await adminPage.goto("admin/sale/products/products");
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

    /**
     * Clicking on Attributes
     */
    await adminPage.getByRole('tab', { name: 'Attributes' }).click();

    /**
     * Waiting for Manage Attributes page to appear
     */
    await adminPage.waitForSelector('h1:has-text("Manage Attributes")');

    /**
     * Clicking on Add Attribute
     */
    await adminPage.getByRole('button', { name: 'Add Attribute' }).click();

    /**
     * Filling up the required fields for attribute
     */
    await adminPage.getByTitle('Create').click();
    await adminPage.locator('[id="mountedFormComponentActionsData\\.0\\.name"]').fill('Color');
    await adminPage.getByRole('radio', { name: 'Color' }).check();
    await adminPage.locator('[id="mountedFormComponentActionsData\\.0\\.options"]').getByRole('textbox', { name: 'Name*' }).fill('RED');
    await adminPage.getByRole('spinbutton', { name: 'Extra Price*' }).fill('100');
    await adminPage.getByRole('button', { name: 'Add to options' }).click();
    await adminPage.getByRole('textbox', { name: 'Name*' }).nth(2).fill('BLUE');
    await adminPage.getByRole('spinbutton', { name: 'Extra Price*' }).nth(1).fill('2000');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).click();

    /**
     * Selecting the values for the attribute
     */
    await adminPage.getByRole('textbox', { name: 'Select an option' }).click();
    await adminPage.getByRole('option', { name: 'BLUE' }).click();
    await adminPage.getByRole('option', { name: 'RED' }).click();
    await adminPage.getByRole('heading', { name: 'Create product attribute' }).click();

    /**
     * Clicking on Create button for creating the attribute
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Attribute created' })).toBeVisible();

    /**
     * Clicking on Generate Variants 
     */
    await adminPage.getByRole('button', { name: 'Generate Variants' }).click();

    /**
     * Waiting for success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Variants generated' })).toBeVisible();
}

async function activityPlans(adminPage) {

    /**
     * Redirecting to Activity Plans inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/activity-plans");
    await adminPage.getByRole('button', { name: 'New Activity Plan' }).click();

    /**
     * Waiting for Activity Plans edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Plan' }).waitFor();

    /**
     * Filling up the required fields
     */
    await adminPage.getByRole('textbox', { name: 'Name*' }).fill(generateActivityPlans());
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.waitForSelector('input[name="search_terms"]');
    await adminPage.locator('[data-id="1"]').nth(0).click();

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity plan created' })).toBeVisible();
}

async function activityTypesNone(adminPage) {

    /**
     * Redirecting to Activity Types inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/settings/activity-types");
    await adminPage.getByRole('link', { name: 'New Activity Type' }).click();

    /**
     * Waiting for Activity Types edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Type' }).waitFor();

    /**
     * Filling up the Name of Activity Types
     */
    await adminPage.getByRole('textbox', { name: 'Activity Type*' }).fill(generateActivityTypes());

    /**
     * Selecting the Action Type as None
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.getByRole('option', { name: 'None' }).click();

    /**
     * Filling up the default note
     */
    await adminPage.locator('[id="data\\.default_note"]').fill(generateDescription());

    /**
     * Selecting the icon
     */
    await adminPage.getByText('No icon selected').click();
    await adminPage.getByRole('option', { name: 'heroicon-c-adjustments-horizontal' }).click();

    /**
     * Selecting Chaining Type
     */
    await adminPage.getByText('Suggest Next ActivitySuggest').click();
    await adminPage.getByRole('option', { name: 'Trigger Next Activity' }).click();
    await adminPage.getByText('Select an option').nth(4).click();
    await adminPage.getByRole('option', { name: 'To-Do' }).click();

    /**
     * Toggling the Status
     */
    await adminPage.getByRole('switch', { name: 'Status' }).click();

    /**
     * Filling the delay count
     */
    await adminPage.getByRole('spinbutton', { name: 'Delay Count' }).fill('2');
    await adminPage.getByLabel('Delay Unit').selectOption('days');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity Type created' })).toBeVisible();
}

async function activityTypesUpload(adminPage) {

    /**
     * Redirecting to Activity Types inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/settings/activity-types");
    await adminPage.getByRole('link', { name: 'New Activity Type' }).click();

    /**
     * Waiting for Activity Types edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Type' }).waitFor();

    /**
     * Filling up the Name of Activity Types
     */
    await adminPage.getByRole('textbox', { name: 'Activity Type*' }).fill(generateActivityTypes());

    /**
     * Selecting the Action Type as Upload File
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.getByRole('option', { name: 'Upload File' }).click();

    /**
     * Filling up the default note
     */
    await adminPage.locator('[id="data\\.default_note"]').fill(generateDescription());

    /**
     * Selecting the icon
     */
    await adminPage.getByText('No icon selected').click();
    await adminPage.getByRole('option', { name: 'heroicon-c-arrow-down-tray' }).click();

    /**
     * Selecting Trigger Type
     */
    await adminPage.getByText('Select an option').nth(4).click();
    await adminPage.getByRole('option', { name: 'Exception' }).click();

    /**
     * Toggling the Status
     */
    await adminPage.getByRole('switch', { name: 'Status' }).click();

    /**
     * Filling the delay count
     */
    await adminPage.getByRole('spinbutton', { name: 'Delay Count' }).fill('2');
    await adminPage.getByLabel('Delay Unit').selectOption('days');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity Type created' })).toBeVisible();
}

async function activityTypesDefault(adminPage) {

    /**
     * Redirecting to Activity Types inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/settings/activity-types");
    await adminPage.getByRole('link', { name: 'New Activity Type' }).click();

    /**
     * Waiting for Activity Types edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Type' }).waitFor();

    /**
     * Filling up the Name of Activity Types
     */
    await adminPage.getByRole('textbox', { name: 'Activity Type*' }).fill(generateActivityTypes());

    /**
     * Selecting the Action Type as Default
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.getByRole('option', { name: 'Default' }).click();

    /**
     * Filling up the default note
     */
    await adminPage.locator('[id="data\\.default_note"]').fill(generateDescription());

    /**
     * Selecting the icon
     */
    await adminPage.getByText('No icon selected').click();
    await adminPage.getByRole('option', { name: 'heroicon-c-adjustments-horizontal' }).click();

    /**
     * Selecting Chaining Type
     */
    await adminPage.getByText('Suggest Next ActivitySuggest').click();
    await adminPage.getByRole('option', { name: 'Suggest Next Activity' }).click();
    await adminPage.getByRole('textbox', { name: 'Select an option' }).click();

    /**
     * Selecting options
     */
    await adminPage.getByRole('option', { name: 'To-Do' }).click();
    await adminPage.getByRole('option', { name: 'Meeting' }).click();
    await adminPage.getByRole('option', { name: 'Webinar' }).click();
    await adminPage.getByRole('option', { name: 'Exception' }).click();
    await adminPage.getByRole('option', { name: 'Product Launch' }).click();
    await adminPage.getByRole('option', { name: 'Customer Feedback Session' }).click();
    await adminPage.getByRole('option', { name: 'Team Building' }).click();

    /**
     * Toggling the Status
     */
    await adminPage.getByRole('switch', { name: 'Status' }).click();

    /**
     * Filling the delay count
     */
    await adminPage.getByRole('spinbutton', { name: 'Delay Count' }).fill('2');
    await adminPage.getByLabel('Delay Unit').selectOption('days');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity Type created' })).toBeVisible();
}

async function activityTypesPhone(adminPage) {

    /**
     * Redirecting to Activity Types inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/settings/activity-types");
    await adminPage.getByRole('link', { name: 'New Activity Type' }).click();

    /**
     * Waiting for Activity Types edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Type' }).waitFor();

    /**
     * Filling up the Name of Activity Types
     */
    await adminPage.getByRole('textbox', { name: 'Activity Type*' }).fill(generateActivityTypes());

    /**
     * Selecting the Action Type as Phone Call
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.getByRole('option', { name: 'Phone Call' }).click();

    /**
     * Filling up the default note
     */
    await adminPage.locator('[id="data\\.default_note"]').fill(generateDescription());

    /**
     * Selecting the icon
     */
    await adminPage.getByText('No icon selected').click();
    await adminPage.getByRole('option', { name: 'heroicon-c-arrow-right-start-on-rectangle' }).click();

    /**
     * Selecting Chaining Type
     */
    await adminPage.getByText('Suggest Next ActivitySuggest').click();
    await adminPage.getByRole('option', { name: 'Trigger Next Activity' }).click();
    await adminPage.getByText('Select an option').nth(4).click();
    await adminPage.getByRole('option', { name: 'To-Do' }).click();

    /**
     * Toggling the Status
     */
    await adminPage.getByRole('switch', { name: 'Status' }).click();

    /**
     * Filling the delay count
     */
    await adminPage.getByRole('spinbutton', { name: 'Delay Count' }).fill('2');
    await adminPage.getByLabel('Delay Unit').selectOption('days');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity Type created' })).toBeVisible();
}

async function activityTypesMeeting(adminPage) {

    /**
     * Redirecting to Activity Types inside Sales plugin.
     */
    await adminPage.goto("/admin/sale/configurations/settings/activity-types");
    await adminPage.getByRole('link', { name: 'New Activity Type' }).click();

    /**
     * Waiting for Activity Types edit page to appear
     */
    await adminPage.getByRole('heading', { name: 'Create Activity Type' }).waitFor();

    /**
     * Filling up the Name of Activity Types
     */
    await adminPage.getByRole('textbox', { name: 'Activity Type*' }).fill(generateActivityTypes());

    /**
     * Selecting the Action Type as None
     */
    await adminPage.locator('.choices__inner').first().click();
    await adminPage.getByRole('option', { name: 'None' }).click();

    /**
     * Filling up the default note
     */
    await adminPage.locator('[id="data\\.default_note"]').fill(generateDescription());

    /**
     * Selecting the icon
     */
    await adminPage.getByText('No icon selected').click();
    await adminPage.getByRole('option', { name: 'heroicon-c-adjustments-horizontal' }).click();

    /**
     * Selecting Chaining Type
     */
    await adminPage.getByText('Suggest Next ActivitySuggest').click();
    await adminPage.getByRole('option', { name: 'Trigger Next Activity' }).click();
    await adminPage.getByText('Select an option').nth(4).click();
    await adminPage.getByRole('option', { name: 'To-Do' }).click();

    /**
     * Toggling the Status
     */
    await adminPage.getByRole('switch', { name: 'Status' }).click();

    /**
     * Filling the delay count
     */
    await adminPage.getByRole('spinbutton', { name: 'Delay Count' }).fill('2');
    await adminPage.getByLabel('Delay Unit').selectOption('days');

    /**
     * Clicking on Create button
     */
    await adminPage.getByRole('button', { name: 'Create' }).nth(1).click();

    /**
     * Expecting the success message
     */
    await expect(adminPage.getByRole('heading', { name: 'Activity Type created' })).toBeVisible();
}

test.describe("Orders Management", () => {
    test("should create a new quotation", async ({ adminPage }) => {
        await createQuotation(adminPage);
    });

    test("should create a new order", async ({ adminPage }) => {
        await createOrders(adminPage);
    });

    test("should create a new customer", async ({ adminPage }) => {
        await createCustomer(adminPage);
    });

    test("should create a new product", async ({ adminPage }) => {
        await createProduct(adminPage);
    });
})

test.describe("Configurations Management", () => {
    test("should create a new activity plans", async ({ adminPage }) => {
        await activityPlans(adminPage);
    });

    test.describe("Activity Types Management", () => {
        test("should create a new activity types as None", async ({ adminPage }) => {
            await activityTypesNone(adminPage);
        });

        test("should create a new activity types as Upload File", async ({ adminPage }) => {
            await activityTypesUpload(adminPage);
        });

        test("should create a new activity types as Default", async ({ adminPage }) => {
            await activityTypesDefault(adminPage);
        });

        test("should create a new activity types as Phone Call", async ({ adminPage }) => {
            await activityTypesPhone(adminPage);
        });

        test("should create a new activity types as Meeting", async ({ adminPage }) => {
            await activityTypesMeeting(adminPage);
        });
    })
});