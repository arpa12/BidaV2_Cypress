class BidaRegistrationNew 
{
  bidaRegistrationDropdownMenu = '[class="dropdown-toggle change_url new"]'
  bidaRegistrationDropdownSubmenu = '[class="dropdown-submenu-toggle"]'
  bidaRegistrationOption = '[class="dropdown-submenu-toggle p-lg-2"]'
  newApplicationButton = '[class="p-lg-3"]'
  newApplicationFormButton = '[class="btn btn-info"]'

  selectCompanyModal() {
      cy.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/form/div/div[1]/div/button').click()
  }
  // clickModalContinueButton() {
  //     cy.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/form/div/div[3]/div/div/button').click()
  // }

  dashboardInnerModal(){
    cy.xpath('/html/body/div[1]/div/div/div[4]/div/div/div/button/span').click()
  }

  bidaRegistrationDropdownMenuClick()
  {
    cy.get(this.bidaRegistrationDropdownMenu).click()
  }

  bidaRegistrationDropdownSubmenuClick(){
    cy.get(this.bidaRegistrationDropdownSubmenu).click()
  }

  bidaRegistrationOptionClick(){
    cy.get(this.bidaRegistrationOption).contains('BIDA Registration').click()
  }

  newApplicationButtonClick(){
    cy.get(this.newApplicationButton)
    .contains('New')
    .click()
  }

  newApplicationFormButtonClick(){
    cy.get(this.newApplicationFormButton).contains('New Application').click()
  } 
}

class BidaRegistrationNewForm
{
  statusOfTheOrganizationSelector = '[name="organization_status_id"]'
  countryOfOriginSelector = '[name="country_of_origin_id"]'
  nameOfTheProjectSelector = '[name="project_name"]'
  bbsClassCodeSelector = '[onclick="openBusinessSectorModal(this)"]'
  bbsClassCodeSelectSelector = '[data-subclass="0111"]'
  subClassSelector = '[name="sub_class_id"]'
  desireOfficeLocationSelector = '[class="showInPreview btn btn-md btn-info"]'
  projectStatusSelector = '[name="project_status_id"]'




  statusOfTheOrganization()
  {
    cy.get(this.statusOfTheOrganizationSelector).select('Joint Venture')
  } 

  countryOfOrigin()
  {
    cy.get(this.countryOfOriginSelector).select('Afghanistan')
  }

  nameOfTheProject(){
    cy.get(this.nameOfTheProjectSelector).type('Test Project')
  }

  bbsClassCodeSelect(){
    cy.get(this.bbsClassCodeSelector).click()
  }

  bbsClassCodeSelectOption(){
    cy.get(this.bbsClassCodeSelectSelector).click()
  }

  subClass(){
    cy.get(this.subClassSelector).select('01111 - Growing of wheat')
  }

  desireOfficeLocation(){
    cy.get(this.desireOfficeLocationSelector).eq(0).click()
  }

  projectStatus(){
    cy.get(this.projectStatusSelector).select('Existing')
  }

  //annual production capacity
  productNameSelector = '[name="apc_product_name[0]"]'
  unitOfQuantitySelector = '[name="apc_quantity_unit[0]"]'
  quantitySelector = '[id="apc_quantity_0"]'
  priceSelector = '[id="apc_price_usd_0"]'
  valueSelector = '[name="apc_value_taka[0]"]'

  productName(){
    cy.get(this.productNameSelector).type('Test Product 1')
  }

  unitOfQuantity(){
    cy.get(this.unitOfQuantitySelector).select('Box')
  }

  quantity(){
    cy.get(this.quantitySelector).type('100')
  }

  price(){
    cy.get(this.priceSelector).type('50')
  }

  value(){
    cy.get(this.valueSelector).type('5000')
  }

  //Date of commercial operation
  dateOfCommercialOperationSelector = '[name="commercial_operation_date"]'

  dateOfCommercialOperation(){
    cy.get(this.dateOfCommercialOperationSelector).type('22-Oct-2025')
  }

  //Sales (in 100%)
  localSelector = '[id="local_sales_per"]'
  foreignSelector = '[id="forign_sales_per"]'

  local(){
    cy.get(this.localSelector).type('60')
  }

  foreign(){
    cy.get(this.foreignSelector).type('40')
  }

  //Manpower of the organization
  localExecutiveSelector = '[id="local_male"]'
  localSupportingStaffSelector = '[id="local_female"]'
  foreignExecutiveSelector = '[id="foreign_male"]'
  foreignSupportingStaffSelector = '[id="foreign_female"]'

  localExecutive(){
    cy.get(this.localExecutiveSelector).type('1')
  }
  localSupportingStaff(){
    cy.get(this.localSupportingStaffSelector).type('1')
  }
  foreignExecutive(){
    cy.get(this.foreignExecutiveSelector).type('1')
  }
  foreignSupportingStaff(){
    cy.get(this.foreignSupportingStaffSelector).type('1')
  }

  //investment
  machineryAndEquipmentSelector = '[id="local_machinery_ivst"]'
  dollarExchangeRateSelector = '[id="usd_exchange_rate"]'

  machineryAndEquipment(){
    cy.get(this.machineryAndEquipmentSelector).type('5')
  }
  dollarExchangeRate(){
    cy.get(this.dollarExchangeRateSelector).type('105')
  }

  // Source of finance
  foreignEquitySelector = '[id="finance_src_foreign_equity_1"]'
  localLoanSelector = '[id="finance_src_loc_loan_1"]'
  foreignLoanSelector = '[id="finance_src_foreign_loan_1"]'
  countrySelector = '[id="country_id"]'
  equityAmountSelector = '[name="equity_amount[0]"]'
  loanAmountSelector = '[name="loan_amount[0]"]'

  foreignEquity(){
    cy.get(this.foreignEquitySelector).type('2')
  }

  localLoan()
  {
    cy.get(this.localLoanSelector).type('2')
  }

  foreignLoan()
  {
    cy.get(this.foreignLoanSelector).type('1')
  }

  country(){
    cy.get(this.countrySelector).select('Afghanistan')
  }
  equityAmount(){
    cy.get(this.equityAmountSelector).type('2')
  }

  loanAmount(){
    cy.get(this.loanAmountSelector).type('3')
  }

  //Public utility service
  landSelector = '[name="public_land"]'
  land(){
    cy.get(this.landSelector).click()
  }

  // Trade licence details
  tradeLicenceNumberSelector = '[name="trade_licence_num"]'
  tradeLicenceIssuingAuthoritySelector = '[name="trade_licence_issuing_authority"]'

  tradeLicenceNumber(){
    cy.get(this.tradeLicenceNumberSelector).type('123456')
  }

  tradeLicenceIssuingAuthority(){
    cy.get(this.tradeLicenceIssuingAuthoritySelector).type('Trade Authority')
  }

  //Tin
  tinNumberSelector = '[name="tin_number"]'

  tinNumber(){
    cy.get(this.tinNumberSelector).type('123456789')
  }

  // save as draft button
  saveAsDraftButtonSelector = '[id="save_as_draft"]'
  saveAsDraftButtonClick(){
    cy.get(this.saveAsDraftButtonSelector).click()
  } 

  // edit button
  editButtonSelector = 'tbody>tr>td>a[class="btn btn-xs btn-success button-color common_batch_update "]'
  editButtonClick(){
    cy.get(this.editButtonSelector, { timeout: 15000 }).should('be.visible').eq(0).click()
  }

  //next button
  nextButtonSelector = '[class="next"]'
  nextButtonClick(){
    cy.get(this.nextButtonSelector).click()
  }


  //step two
  //list of directors
 fullNameOfDirectorSelector = '[name="g_full_name"]';
fullNameOfDirector(){
  cy.get(this.fullNameOfDirectorSelector).then(($input) => {
    // Check if the input field is empty
    if ($input.val().trim() === '') {
      // If empty, type the new value
      cy.get(this.fullNameOfDirectorSelector).type('John Doe');
    }
  });
}

  positionOfDirectorSelector = '[name="g_designation"]'
  positionOfDirector(){
    cy.get(this.positionOfDirectorSelector).then(($input) => {
      if ($input.val().trim() === '') {
        cy.get(this.positionOfDirectorSelector).type('Director');
      }
    });
  }

  // Signature Upload
  signatureUploadSelector = '[id="investorSignatureUploadBtn"]'
  uploadSignature(){
    const fileName = 'Signature1.jpg'; // this file must exist in cypress/fixtures/
    cy.get(this.signatureUploadSelector).attachFile(fileName);
  }

  imageSaveButtonSelector = '[id="cropImageBtn"]'
  imageSaveButtonClick(){
    cy.get(this.imageSaveButtonSelector).click()
  }

  //add director in step two
 saveAsDraftButton() {
    cy.get('#save_as_draft').click();
  }

 addDirectorButtonSelector = '.btn.btn-md.btn-primary'

addDirectorButtonClick() {
  cy.contains(this.addDirectorButtonSelector, 'Add more director')
    .should('be.visible')
    .invoke('removeAttr', 'target')  // optional if you want same tab
    .click()
}


  addNewDirectorSelector = '/html/body/div[1]/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div/div[1]/a/button'
  addNewDirectorClick(){
    cy.xpath(this.addNewDirectorSelector).click()
  }

  nationalityTypeSelector = '[value="bangladeshi"]'
  nationalityTypeClick(){
    cy.get(this.nationalityTypeSelector).click()
  }
  identityTypeSelector = '[value="nid"]'
  identityTypeClick(){
    cy.get(this.identityTypeSelector).click()
  }

  nidTypeSelector = '/html/body/div[1]/div/div/div[1]/div/div/form/div[3]/div[6]/div/fieldset/div[5]/div/input'
  nidType(){
    cy.xpath(this.nidTypeSelector).type('3758579902')
  }

  dateOfBirthSelector = '[id="nid_dob"]'
  dateOfBirth(){
    cy.get(this.dateOfBirthSelector).should('be.visible').type('30-Dec-2000')
  }

  nidNameSelector = '[id="user_nid_name"]'
  nidName(){
    cy.get(this.nidNameSelector).should('be.visible').type('ARPA NIHAN')
  }

  recaptchaCheckboxClick(){
    cy.log('⚠️ Please solve the reCAPTCHA manually');
    cy.log('You have 60 seconds to complete the challenge');
    // Wait for manual reCAPTCHA solving
    cy.wait(60000); // 60 seconds for manual intervention
  }

  nidVerifyButtonSelector = '[id="NIDVerifyBtn"]'
  nidVerifyButtonClick(){
    // Wait a moment to ensure reCAPTCHA is fully processed
    cy.wait(1000);
    
    // Click verify button - force click to bypass reCAPTCHA overlay
    cy.get(this.nidVerifyButtonSelector).click({ force: true });
  }

  nidGenderSelector = 'div[class="col-md-9 "]>label>input[value="female"]'
  nidGenderClick(){
    cy.get(this.nidGenderSelector).contains('Female').click()
  }

  nidDesignationSelector = '[name="nid_designation"]'
  nidDesignation(){
    cy.get(this.nidDesignationSelector).type('Director')
  }

  nidSaveButtonSelector = '[id="btn_save_close"]'
  nidSaveButtonClick(){
    cy.get(this.nidSaveButtonSelector).click()
  }

}
// module.exports = {
//   bidaRegistrationNew: new BidaRegistrationNew(),
//   bidaRegistrationNewForm: new BidaRegistrationNewForm()
// };

export const bidaRegistrationNew = new BidaRegistrationNew();
export const bidaRegistrationNewForm = new BidaRegistrationNewForm();