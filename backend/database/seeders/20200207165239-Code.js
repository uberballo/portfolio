'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Codes', [{
        projectId: 1,
        title: 'Java koodia',
        language: 'Java',
        description: 'tulostetaan asioita',
        code:'system.out.println(1+1);',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        projectId: 2,
        title: 'Python koodia', 
        language: 'Python',
        description: 'Tässä lasketaan yhteen',
        code:'console.log(1+1)',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        projectId: 2,
        title: 'Python koodia main', 
        language: 'Python',
        code:'Python def main()asd',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Codes', null, {});
  }
};
