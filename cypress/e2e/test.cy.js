describe('QR Code Generator', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000'); 
    })
    it('should display the URL input field', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[type="url"]')
          .should('exist')
          .should('not.have.attr', 'placeholder', 'Ent a valid URL');
    });
    it('should generate a QR code when a valid URL is entered', () => {
        cy.get('input[type="url"]').type('https://www.example.com');
        cy.get('button').contains('Generate').click();
        cy.get('img[alt="qr-code"]').should('exist');
    });
    it('should allow downloading the generated QR code', () => {
        cy.get('input[type="url"]').type('https://www.example.com');
        cy.get('button').contains('Generate').click();
        cy.get('a[href]').should('have.attr', 'download', 'qrCode.png');
    });
    it('should clear the QR code and input field when the clear button is clicked', () => {
        cy.get('input[type="url"]').type('https://www.example.com');
        cy.get('button').contains('Generate').click();
        cy.get('button').contains('Clear').click();
        cy.get('img[alt="qr-code"]').should('not.exist');
        cy.get('input[type="url"]').should('have.value', '');
    });
    it('should display an error alert when attempting to generate a QR code without entering a URL', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').contains('Generate').click();
        cy.get('.mt-2.mb-1').should('exist');
    });
    it('should generate a QR code using keyboard navigation', () => {
        cy.visit('http://localhost:3000');
        
        cy.get('input[type="url"]').type('https://www.example.com{enter}');
        cy.get('img[alt="qr-code"]').should('exist');
    });
    it('should generate a QR code for a very long URL', () => {
        cy.visit('http://localhost:3000');
        
        cy.get('input[type="url"]').type('https://www.example.com?param1=veryLongValue1&param2=veryLongValue2&param3=veryLongValue3');
        cy.get('button').contains('Generate').click();
        
        cy.get('img[alt="qr-code"]').should('exist');
    });
    it('should hide the alert after 5 seconds', () => {
        cy.visit('http://localhost:3000');
      
        cy.get('button').contains('Generate').click();
        
        cy.get('.mt-2.mb-1').should('exist');
        
        cy.wait(5000); 
        cy.get('.mt-2.mb-1').should('not.exist');
    });
    it('should be responsive', () => {
        cy.visit('http://localhost:3000');
        
        cy.viewport(1200, 800);
        cy.wait(500); // It is sometimes good to wait for a moment to let the page adjust
        cy.screenshot('Desktop View');
        
        cy.viewport('iphone-x');
        cy.wait(500);
        cy.screenshot('iPhone X View');
        
        cy.viewport('ipad-mini');
        cy.wait(500);
        cy.screenshot('iPad Mini View');
    });
      
      
      
      
        
        
      
});
  