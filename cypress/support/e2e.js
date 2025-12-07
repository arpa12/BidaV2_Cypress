// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// Import cypress-xpath plugin
require('cypress-xpath')

// Global exception handler for cross-origin errors
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore errors from OSSPID authentication pages
  if (err.message.includes('baseUrl') || 
      err.message.includes('Identifier') || 
      err.message.includes('has already been declared')) {
    return false;
  }
  // Let other errors fail the test
  return true;
})