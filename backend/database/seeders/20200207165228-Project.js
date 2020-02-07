'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Projects',
      [
        {
          title: 'java peli',
          language: 'Java',
          url:'github.com/NONE',
          description: 'peli mikä on tehty javalla',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'python laskin',
          language: 'Python',
          url:'github.com/MISSAAN',
          description:
            'Laskin tehty pythonilla. laskee asioita esimerkiksi plussa laskut miinus laskut',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
