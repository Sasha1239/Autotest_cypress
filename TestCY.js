describe('Try test', function () {
    it('Open start page', function () {
            cy.visit('https://тест.скдф.рф/')
            cy.get('//span[text()="Вход для специалистов"]').click() 
           
    })
})