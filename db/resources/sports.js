const { Coach } = require('../../models');

module.exports = async () => {
  const coaches = await Coach.find();

  return [
    {
      name: 'Sah',
      manager_name: 'Georgescu Tiberiu',
      coaches: [coaches[0]['_id'], coaches[1]['_id']],
      foundation_date: new Date('2020-08-10'),
    },
    {
      name: 'Volei',
      manager_name: 'Ifrim Razvan',
      coaches: [coaches[2]['_id']],
      foundation_date: new Date('2020-12-05'),
    },
    {
      name: 'Fotbal',
      manager_name: 'Dulceata Victor',
      coaches: [coaches[1]['_id']],
      foundation_date: new Date('2021-02-04'),
    },
    {
      name: 'Baschet',
      manager_name: 'Beatu Andrei',
      coaches: [coaches[3]['_id']],
      foundation_date: new Date('2021-05-14'),
    },
    {
      name: 'ESports',
      manager_name: 'Iozu Rafael',
      coaches: [coaches[9]['_id']],
      foundation_date: new Date('2021-03-12'),
    },
    {
      name: 'Robotica',
      manager_name: 'Panea Ionut',
      coaches: [coaches[10]['_id']],
      foundation_date: new Date('2021-03-12'),
    },
  ];
};
