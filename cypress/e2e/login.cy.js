describe("Inicio de Sesión", () => {
    it("Inicio de sesión exitoso", () => {
      cy.visit('process.env.MONGO_URI')
      cy.get("input[name='login_usuario']").type('admin')
      cy.get("input[name='login_clave']").type('admin')
      cy.get('button[type="submit"]').click() // Asume que hay un botón de envío
  
      // Verifica si se redirige a la página de inicio o si se muestra un mensaje de bienvenida
      cy.url().should('include', '/dashboard') // Ajusta la URL según tu aplicación
      cy.contains('Bienvenido,admin').should('be.visible')
    })
  
    it("Inicio de sesión fallido con credenciales incorrectas", () => {
      cy.visit('process.env.MONGO_URI')
      cy.get("input[name='login_usuario']").type('usuarioIncorrecto')
      cy.get("input[name='login_clave']").type('contrasenaIncorrecta')
      cy.get('button[type="submit"]').click()
      cy.contains('Credenciales inválidas').should('be.visible') // Ajusta el mensaje según tu aplicación
    })
  
    // Agrega más casos de prueba para cubrir diferentes escenarios
  })