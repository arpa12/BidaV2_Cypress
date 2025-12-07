class Login {
  loginRegistration = '/html/body/div/header/div[2]/div/nav/div[1]/a';
  usernameInput = '[id="identifier"]';
  nextButton = '[id="next_btn"]';
  passwordInput = '[id="password"]';
  loginButtonClick = '[id="login_btn"]';
//   modalCloseButton = 'div[class="modal-header"] > button[class="close"]';
//   modalSelector = '[id="popupImage"]'; // keep your same reference

  performLogin() {
    cy.xpath(this.loginRegistration)
      .contains('Login /Registration')
      .click({ force: true });
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  enterNextButton() {
    cy.get(this.nextButton).click();
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButtonClick).click();
  }

  /**
   * Safely close modal if it’s visible
   */
//   closeModal() {
//     cy.get('body').then(($body) => {
//       // check if modal exists in DOM
//       if ($body.find(this.modalSelector).length) {
//         const isVisible = $body.find(this.modalSelector).is(':visible');
//         if (isVisible) {
//           cy.log('🔵 Closing visible modal...');
//           cy.get(this.modalCloseButton, { timeout: 10000 })
//             .should('be.visible')
//             .click({ force: true }); // added force:true for safety
//         } else {
//           cy.log('⚪ Modal exists but hidden, skipping click');
//         }
//       } else {
//         cy.log('⚪ No modal found in DOM, skipping close');
//       }
//     });
//   }
}

// module.exports = new Login();
const login = new Login();
export default login;
