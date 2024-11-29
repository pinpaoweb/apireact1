describe('Registro de usuario', () => {
    beforeEach(() => {
        // Establecer datos en localStorage antes de cada prueba
        cy.visit('https://react1api.vercel.app/'); // Visitar la página principal

        // Simular el almacenamiento de datos en localStorage
        cy.window().then((win) => {
            win.localStorage.setItem('username', 'Juan Pérez');
            win.localStorage.setItem('role', 'usuario');
        });
    });

    it('Debería registrar un nuevo usuario correctamente', () => {
        // Esperar a que el spinner no esté presente (si aplica)
        cy.get('.spinner', { timeout: 10000 }).should('not.exist');

        // Hacer clic en el enlace de registro
        cy.get('a[href="/register"]').click();

        // Verificar que estamos en la página de registro
        cy.url().should('include', '/register');

        // Completar el formulario de registro
        cy.get('#username').type('Juan Pérez');
        cy.get('#email').type('juan@example.com');
        cy.get('#password').type('contraseña123');
        
        // Hacer clic en el botón de enviar
        cy.get('button[type="submit"]').click();

        // Verificar que el mensaje de éxito aparezca
        cy.contains('¡Registro exitoso!').should('be.visible');
    });
});
