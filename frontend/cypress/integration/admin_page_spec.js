
describe('The admin page', function(){

    it('Can login succesfully',function(){
        cy.visit('/admin')
        cy.get('[data-cy=username]').type('admin')
        cy.get('[data-cy=password]').type('password')
        cy.get('[data-cy=submit]').click()
        cy.contains('tere admin')


    })
})