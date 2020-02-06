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
          language: 'Java',
          url: 'github.com',
         description: 'kuvaus1',
         code: 'for looppi',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         title: 'koodi2',
          language: 'c++',
          url: 'github.com',
         description: 'kuvaus2',
         code: 'while looppi',
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
