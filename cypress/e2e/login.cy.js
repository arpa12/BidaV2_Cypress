// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew, bidaRegistrationNewForm} from "../pages/bidaRegistrationNew"
import { bidaRegistrationStep1, bidaRegistrationStep2, bidaRegistrationStep3 } from "../pages/bidaRegistrationApplicationProcess";

describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('/');  // Navigate to base URL

    // Perform login
    login.performLogin();
    cy.wait(5000);
    login.enterUsername('jahangir514789@gmail.com');
    cy.wait(5000);
    login.enterNextButton();
    cy.wait(5000);
    login.enterPassword('12567aA@');
    cy.wait(5000);
    login.clickLoginButton();
    cy.wait(5000);
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    // cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[13]/a').click(); 
  });

  it('BIDA Registration Form Fillup', () => {
    cy.visit('/')
    
    cy.origin('https://id.oss.net.bd', () => {
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
          return false
        }
        return true
      })
    })
    
    // login steps
    login.performLogin()
    cy.wait(5000)
    login.enterUsername('jahangir514789@gmail.com')
    cy.wait(5000)
    login.enterNextButton()
    cy.wait(5000)
    login.enterPassword('12567aA@')
    cy.wait(5000)
    login.clickLoginButton()
    cy.wait(5000)
    // login.closeModal()


// Navigate to BIDA Registration and start a new application
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    // cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()
    // cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationDropdownMenuClick()
    // cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationDropdownSubmenuClick()
    // cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationOptionClick()
    cy.wait(3000)
    bidaRegistrationNew.newApplicationButtonClick()
    cy.wait(3000)
    bidaRegistrationNew.newApplicationFormButtonClick()
    cy.wait(5000)

// Fill out the BIDA Registration Form
    bidaRegistrationNewForm.statusOfTheOrganization()
    cy.wait(2000)
    bidaRegistrationNewForm.countryOfOrigin()
    cy.wait(2000)
    bidaRegistrationNewForm.nameOfTheProject()
    cy.wait(2000)
    bidaRegistrationNewForm.bbsClassCodeSelect()
    cy.wait(2000)
    bidaRegistrationNewForm.bbsClassCodeSelectOption()
    cy.wait(2000)
    bidaRegistrationNewForm.subClass()
    cy.wait(2000)
    bidaRegistrationNewForm.desireOfficeLocation()
    cy.wait(2000)
    bidaRegistrationNewForm.projectStatus()
    cy.wait(2000)
    bidaRegistrationNewForm.productName()
    cy.wait(2000)
    bidaRegistrationNewForm.unitOfQuantity()
    cy.wait(2000)
    bidaRegistrationNewForm.quantity()
    cy.wait(2000)
    bidaRegistrationNewForm.price()
    cy.wait(2000)
    bidaRegistrationNewForm.value()
    cy.wait(2000)
    bidaRegistrationNewForm.dateOfCommercialOperation()
    cy.wait(2000)
    bidaRegistrationNewForm.local()
    cy.wait(2000)
    bidaRegistrationNewForm.foreign()
    cy.wait(2000)
    bidaRegistrationNewForm.localExecutive()
    cy.wait(2000)
    bidaRegistrationNewForm.localSupportingStaff()
    cy.wait(2000)
    bidaRegistrationNewForm.foreignExecutive()
    cy.wait(2000)
    bidaRegistrationNewForm.foreignSupportingStaff()
    cy.wait(2000)
    bidaRegistrationNewForm.machineryAndEquipment()
    cy.wait(2000)
    bidaRegistrationNewForm.dollarExchangeRate()
    cy.wait(2000)
    bidaRegistrationNewForm.foreignEquity()
    cy.wait(2000)
    bidaRegistrationNewForm.localLoan()
    cy.wait(2000)
    bidaRegistrationNewForm.foreignLoan()
    cy.wait(2000)
    bidaRegistrationNewForm.country()
    cy.wait(2000)
    bidaRegistrationNewForm.equityAmount()
    cy.wait(2000)
    bidaRegistrationNewForm.loanAmount()
    cy.wait(2000)
    bidaRegistrationNewForm.land()
    cy.wait(2000)
    bidaRegistrationNewForm.tradeLicenceNumber()
    cy.wait(2000)
    bidaRegistrationNewForm.tradeLicenceIssuingAuthority()
    cy.wait(2000)
    bidaRegistrationNewForm.tinNumber()
    cy.wait(2000)
     bidaRegistrationNewForm.saveAsDraftButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.editButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.nextButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.fullNameOfDirector()
    cy.wait(1000)
    bidaRegistrationNewForm.positionOfDirector()
    cy.wait(1000)
    bidaRegistrationNewForm.uploadSignature()
    cy.wait(3000)
    bidaRegistrationNewForm.imageSaveButtonClick()
    cy.wait(2000)
    bidaRegistrationNewForm.saveAsDraftButton()
    cy.wait(5000)
    bidaRegistrationNewForm.editButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.nextButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.addDirectorButtonClick()
    cy.wait(5000)
    bidaRegistrationNewForm.addNewDirectorClick()
    cy.wait(5000)

    bidaRegistrationNewForm.nationalityTypeClick()
    cy.get('[value="foreign"]').check()
    cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/form/div[3]/div[5]/div/div/div/label[1]/input').click()
    cy.wait(1000)
   
    cy.get('[id="etin_number"]').should('be.visible').type('214993409358')
    cy.get('[id="etin_dob"]').should('be.visible').click()
    cy.get('[id="etin_dob"]').should('be.visible').clear().type('19-May-1975')
    cy.get('[id="TINVerifyBtn"]').should('be.visible').click()
    cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/form/div[3]/div[9]/div/fieldset/div[4]/div/label[1]/input').should('be.visible').click()
    cy.get('[id="etin_designation"]').should('be.visible').type('QA')
    cy.get('[id="etin_nationality"]').select('Chinese')
    cy.get('[id="ETINVerifySave"]').should('be.visible').click()
    cy.wait(5000)
    cy.get('[class="navbar-header nav-logo"]').should('be.visible').click()
    cy.contains('My Desk').should('be.visible').click()
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[6]/a').should('be.visible').eq(0).click()
    // cy.get('[class="btn btn-success"]').should('be.visible').then($el => {
    //   cy.wrap($el).click();
    // });

    cy.get('[href="#next"]').should('be.visible').click()
    cy.wait(1000)
    cy.get('[href="#next"]').should('be.visible').click()
    cy.wait(2000)
    cy.get('[href="#next"]').should('be.visible').click()
    cy.wait(3000)
    cy.contains('Click here to add or update the records', { timeout: 15000 })
      .should('be.visible')
      .invoke('removeAttr', 'target')
    cy.wait(500)
    cy.contains('Click here to add or update the records').click();
    //Import Machnery
    cy.wait(2000)
    cy.contains('Add Manually').should('be.visible').click()
    cy.wait(3000)
    cy.get('[name="l_machinery_imported_name[0]"]').should('be.visible').type('Meat Cutting Machineries')
    cy.wait(300)
    cy.get('[name="l_machinery_imported_qty[0]"]').should('be.visible').type('2')
    cy.wait(300)
    cy.get('[name="l_machinery_imported_unit_price[0]"]').should('be.visible').type('200000')
    cy.wait(300)
    cy.get('[name="l_machinery_imported_total_value[0]"]').should('be.visible').type('2.5')
    cy.wait(300)
    cy.get('[id="machinery_create_btn"]').should('be.visible').click()
    cy.wait(5000) // Increased wait to ensure form submission completes
    
    // Local Machnery
    cy.get('[href="#tab_3"]', { timeout: 10000 }).should('be.visible').click()
    cy.wait(2000)
    cy.xpath('/html/body/div[1]/div/div/div[3]/div/div[2]/div[2]/div/div[3]/div/div/div/div[1]/div[2]/a[2]/button').should('be.visible').click()
    cy.get('[name="l_machinery_local_name[0]"]').should('be.visible').type(' Machineries')
    cy.get('[name="l_machinery_local_qty[0]"]').should('be.visible').type('2')
    cy.get('[name="l_machinery_local_total_value[0]"]').should('be.visible').type('2.5')
    cy.get('[name="l_machinery_local_unit_price[0]"]').should('be.visible').type('200000')
    cy.get('[id="machinery_create_btn"]').should('be.visible').click()
    cy.wait(5000)
    cy.get('[class="navbar-header nav-logo"]').should('be.visible').click()
    cy.wait(2000)
    cy.contains('My Desk').should('be.visible').click()
    cy.wait(3000)
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[6]/a').should('be.visible').eq(0).click()
    cy.wait(2000)
    cy.get('[href="#next"]').should('be.visible').click()
    cy.get('[href="#next"]').should('be.visible').click()
    cy.get('[href="#next"]').should('be.visible').click()
    //Attachments
    cy.get('#file189').first().attachFile('demo.pdf')
    cy.wait(3000)
    // cy.get('#file1226').first().attachFile('demo.pdf')
    // cy.wait(4000)
    cy.get('[href="#next"]').should('be.visible').click()

    //declaration
    cy.get('[id="accept_terms"]').click()
    cy.get('[href="#next"]').should('be.visible').click()

    //Payment and Submit
    cy.get('[id="submitForm"]').click()
    cy.wait(5000)
    cy.get('[value="Account"]').click()
    cy.wait(5000)
    cy.xpath('/html/body/div[3]/div/div[6]/button[1]').click()
    cy.wait(5000)
    cy.get('[id="PayAccountNo"]').type('1234567891011')
    cy.wait(3000)
    cy.get('[id="PayAccountName"]').type('Jahangir Alam')
    cy.wait(3000)
    cy.get('[id="PayMobile"]').type('11111111111')
    cy.wait(3000)
    cy.xpath('/html/body/div[2]/form/div[2]/div/div[5]/div/div/button').click()
    cy.wait(3000)
    cy.get('[id="OTPVal"]').type('123456')
    cy.wait(3000)
    cy.get('[id="btnConfirm"]').click()
    cy.wait(5000)

    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[13]/a').click();
   

    // bidaRegistrationNewForm.identityTypeClick()
    // cy.wait(1000)
    // bidaRegistrationNewForm.nidType()
    // cy.wait(1000)
    // bidaRegistrationNewForm.dateOfBirth()
    // cy.wait(2000)
    // bidaRegistrationNewForm.nidName()
    // cy.wait(2000)
    // bidaRegistrationNewForm.recaptchaCheckboxClick()
    // cy.wait(2000)
    // bidaRegistrationNewForm.nidVerifyButtonClick()
    // cy.wait(5000)
    // bidaRegistrationNewForm.nidGenderClick()
    // cy.wait(5000)
    // bidaRegistrationNewForm.nidDesignation()
    // cy.wait(5000)
    // bidaRegistrationNewForm.nidSaveButtonClick()
    // cy.wait(5000)

    //after processing application

  })

  it('BIDA Registration Application Processing - Step 1', () => {
       cy.visit('/')
    
    cy.origin('https://id.oss.net.bd', () => {
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
          return false
        }
        return true
      })
    })
    
    // login steps
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
    // login.closeModal()

    bidaRegistrationStep1();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
  });

  it.skip('BIDA Registration Application Processing - Step 2', () => {
       cy.visit('/')
    
    cy.origin('https://id.oss.net.bd', () => {
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
          return false
        }
        return true
      })
    })
    
    // login steps
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
    // login.closeModal()

    bidaRegistrationStep2();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
  });

  it('BIDA Registration after Processing Application', () => {
      cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('jahangir514789@gmail.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('12567aA@')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
  
      //after processing application
      // Navigate to BIDA Registration and start a new application
      bidaRegistrationNew.selectCompanyModal()
      // cy.wait(3000)
      // bidaRegistrationNew.clickModalContinueButton()
      // cy.wait(3000)
      bidaRegistrationNew.dashboardInnerModal()
      // cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationDropdownMenuClick()
      // cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationDropdownSubmenuClick()
      // cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationOptionClick()
      cy.wait(3000)
      bidaRegistrationNew.newApplicationButtonClick()
      cy.wait(3000)
  
      cy.get('[id="dt-search-0"]').type('BR-08Dec2025-00001')
      cy.wait(2000)
      cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a').click()
  
          //Payment and Submit
      cy.get('[id="submitForm"]').click()
      cy.wait(5000)
      cy.get('[value="Account"]').click()
      cy.wait(5000)
      cy.xpath('/html/body/div[3]/div/div[6]/button[1]').click()
      cy.wait(5000)
      cy.get('[id="PayAccountNo"]').type('1234567891011')
      cy.wait(3000)
      cy.get('[id="PayAccountName"]').type('Jahangir Alam')
      cy.wait(3000)
      cy.get('[id="PayMobile"]').type('11111111111')
      cy.wait(3000)
      cy.xpath('/html/body/div[2]/form/div[2]/div/div[5]/div/div/button').click()
      cy.wait(3000)
      cy.get('[id="OTPVal"]').type('123456')
      cy.wait(3000)
      cy.get('[id="btnConfirm"]').click()
      cy.wait(5000)
      cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
      cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[13]/a').click();
  
    })

  it('BIDA Registration Application Processing - Step 3', () => {
       cy.visit('/')
    
    cy.origin('https://id.oss.net.bd', () => {
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
          return false
        }
        return true
      })
    })
    
    // login steps
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
    // login.closeModal()

    bidaRegistrationStep3();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
  });


});
