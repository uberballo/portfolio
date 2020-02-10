describe('The hope page', function(){
    
    it('successfully loads', function(){
        cy.visit('/')
        cy.visit('/about')
    }),

    it('Project is found and can be chosen', function(){
        cy.visit('/')
        cy.contains('div','java peli').parent().within(($div) =>{
            cy.get('button').click()
        })
        cy.contains('Java koodia')
     })
    
})