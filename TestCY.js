describe('Try test', function () {
    it('Open start page', function () {
            cy.visit('https://тест.скдф.рф/')
            cy.xpath('//span[text()="Вход для специалистов"]').click() 
           
    })
})