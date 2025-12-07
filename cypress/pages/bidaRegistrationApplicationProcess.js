// Step 1: Function for Processing Application
export const bidaRegistrationStep1 = () => {
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/a').click();
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a').click();
  cy.wait(5000);
  cy.get('[id="dt-search-0"]').type('BR-07Dec2025-00002');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a').click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select('Verified');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.wait(2000);
  cy.get('[id="mainInput"]').type('All information are verified and found correct.');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

// Step 2: Function for Processing Application
export const bidaRegistrationStep2 = () => {
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/a').click();
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a').click();
  cy.wait(5000);
  cy.get('[id="dt-search-0"]').type('BR-07Dec2025-00002');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a').click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select('Approved for Payment');
  cy.get('[id="mainInput"]').type('All information are verified and found correct.');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

// Step 3: Function for Processing Application
export const bidaRegistrationStep3 = () => {
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/a').click();
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a').click();
  cy.wait(5000);
  cy.get('[id="dt-search-0"]').type('BR-07Dec2025-00002');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a').click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select('Approved');
  cy.wait(2000);
  cy.get('[id="approval_copy_remarks"]').type('Approved');
  cy.wait(2000);
  cy.get('[id="mainInput"]').type('All information are verified and found correct.');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};
