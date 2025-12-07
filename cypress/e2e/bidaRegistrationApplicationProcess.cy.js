import login from "../pages/login"
import application_process from "../pages/bidaRegistrationApplicationProcess"

describe('BIDA Registration Desk Processing', () => {

  it('Application processing by Assistant Director', () => {
    cy.visit('/')
    
    cy.origin('https://id.oss.net.bd', () => {
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
          return false
        }
        return true
      })
    })
    
    // login first
    login.performLogin()
    cy.wait(5000)
    login.enterUsername('rd1@batworld.com')
    cy.wait(5000)
    login.enterNextButton()
    cy.wait(5000)
    login.enterPassword('Ossp@123')
    cy.wait(5000)
    login.clickLoginButton()
    cy.wait(5000)
    
    // process application
    const appProcessor = new application_process()
    appProcessor.bidaRegistrationADApplicationProcess()
  })
})