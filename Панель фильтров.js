describe('Try test', function () {
    it('Open start page', function () {
            cy.visit('https://тест.скдф.рф/')
            cy.xpath('//span[text()="Вход для специалистов"]').click() 
            cy.xpath('//input[@id="Username"]').click()
                .type('operator1.skdf').should('have.value', 'operator1.skdf')
            cy.xpath('//input[@id="Password"]').click()
                .type('SOTA2101').should('have.value', 'SOTA2101')
            cy.xpath('//button[text()="Войти"]').click()
            cy.xpath('//div[text()="Цифровая база"]').click()
            cy.xpath('//div//span[@class="krkn__link krkn__nested-dropdown__option-text" and text()="Дороги"]').click()
            cy.wait(1000)
            cy.xpath('//span[text()="Фильтры"]').click()
            
            
    })
})            