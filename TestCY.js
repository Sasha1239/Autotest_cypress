describe('Try test', function () {
    it('Open start page', function () {
            cy.visit('https://skdf-s-qa.ckr-sota.ru')
            cy.xpath('//span[text()="Вход для специалисто"]').click() 
           
    })
})