describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/login');
    });
  
    it('should allow a user to login', () => {
      cy.get('input[type="email"]').type('user@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Logged in with: user@example.com');
      });
    });
  
    it('should show validation errors for empty fields', () => {
      cy.get('button[type="submit"]').click();
      cy.get('input:invalid').should('have.length', 2);
    });
  });
  