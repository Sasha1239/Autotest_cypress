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
            cy.xpath('//div/a[@href="/roads/32197941"]').click()
            cy.xpath('//div/span[text()="Редактировать"]').click()
            cy.xpath('//h2[text()="Владелец дороги"]').click()
            cy.xpath('//div[@class="krkn__multi-dropdown__placeholder-text" and text()="Международный маршрут"]').click()
            cy.xpath ('//span[@class="krkn__multi-dropdown__option-text"]/span[text()="AH30"]').click( {force: true})   
            
            
           
    })
})