describe('Prueba de apertura de react1api', () => {
    it('Abre la página de react1api correctamente y verifica elementos', () => {
      cy.visit('https://react1api.vercel.app/')
      cy.title().should('eq', 'react1api')
      cy.contains('h1', 'Bienvenido a react1api').should('be.visible') // Verifica un encabezado
      cy.get('button[data-cy="login-button"]').click() // Hace clic en un botón
      cy.url().should('include', '/login') // Verifica que la URL cambie a la página de login
    })
  })