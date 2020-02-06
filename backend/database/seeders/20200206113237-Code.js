'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
     'Codes',
     [
       {
         title: 'koodi1',
         description: 'kuvaus1',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         title: 'koodi2',
         description: 'kuvaus2',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
