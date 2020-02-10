describe('The home page', function(){
    
    it('successfully loads', function(){
        cy.visit('/')
        cy.contains('python laskin');
        cy.visit('/about')
    }),

    it('Project is found and can be chosen', function(){
        cy.visit('/')
        cy.contains('div','java peli').parent().within(($div) =>{
            cy.get('button').click()
        })
        cy.contains('div','Java koodia').parent().within(($div) =>{
            cy.get('button').click()
        })
     })
    
})