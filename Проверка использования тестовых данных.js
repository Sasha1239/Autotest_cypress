describe('Try test', function () {
    it('Open start page', function () {
            cy.fixture('fixture')
                .then((fixture) => {
                this.fixture = fixture
                })
        cy.xpath('//div[text()="Цифровая база"]').click()
        cy.xpath('//div//span[@class="krkn__link krkn__nested-dropdown__option-text" and text()="Дороги"]').click()
        cy.xpath('//div/a[@href="/roads/32197941"]').click()
        cy.xpath('//div/span[text()="Редактировать"]').click()
        cy.xpath('//div[@class="krkn__multi-dropdown__placeholder-text" and text()="Международный маршрут"]').click()
        cy.xpath('//span[@class="krkn__multi-dropdown__option-text"]/span[text()="AH30"]').click({force: true})   
        cy.xpath('//button[@class="ui button krkn__btn" and text()="Применить (1)"]').click({force: true})
        cy.xpath('//button[text()="Сохранить"]').click()
    })
})    