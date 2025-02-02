const { Area, Coach, Sport } = require('../../models');
const Identity = require('../../models/identity');

module.exports = async () => {
  const players = await Identity.find({ role: 'player' });
  const coaches = await Coach.find();
  const areas = await Area.find();
  const sport = await Sport.find();

  return [
    {
      name: 'Lectie demo sah',
      coach: coaches[0]['_id'],
      players: [players[0]['_id'], players[1]['_id']],
      date: new Date('2025-06-01'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Prima lectie de sah',
    },
    {
      name: 'Lectie demo fotbal',
      coach: coaches[1]['_id'],
      players: [players[2]['_id'], players[3]['_id']],
      date: new Date('2025-06-02'),
      location: areas[3]['_id'],
      sport: sport[2]['_id'],
      description: 'Prima lectie de fotbal',
    },
    {
      name: 'Lectie demo volei',
      coach: coaches[2]['_id'],
      players: [players[4]['_id'], players[0]['_id'], players[3]['_id']],
      date: new Date('2025-06-05'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Prima lectie de volei',
    },
    {
      name: 'Lectie demo eSports',
      coach: coaches[3]['_id'],
      players: [players[5]['_id'], players[1]['_id']],
      date: new Date('2025-05-30'),
      location: areas[2]['_id'],
      sport: sport[4]['_id'],
      description: 'Prima lectie de eSports',
    },
    {
      name: 'Lectie introductiva sah',
      coach: coaches[1]['_id'],
      players: [players[0]['_id'], players[1]['_id'], players[2]['_id']],
      date: new Date('2025-03-04'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Reguli si principii de baza in jocul de sah',
    },
    {
      name: 'Lectie introductiva fotbal',
      coach: coaches[2]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-03-12'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Reguli si principii de baza in fotbal',
    },
    {
      name: 'Lectie introductiva baschet',
      coach: coaches[3]['_id'],
      players: [players[4]['_id'], players[5]['_id'], players[6]['_id']],
      date: new Date('2025-04-05'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Reguli si principii de baza in baschet',
    },
    {
      name: 'Lectie introductiva volei',
      coach: coaches[4]['_id'],
      players: [players[5]['_id'], players[7]['_id'], players[6]['_id']],
      date: new Date('2025-05-14'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Reguli si principii de baza in volei',
    },
    {
      name: 'Cum se da sah mat?',
      coach: coaches[1]['_id'],
      players: [players[2]['_id'], players[3]['_id'], players[4]['_id']],
      date: new Date('2025-03-25'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Ce inseamna sah mat si cum putem da sah mat?',
    },
    {
      name: 'Lectie atacul in fotbal',
      coach: coaches[2]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-05-24'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Cum atacam la fotbal',
    },
    {
      name: 'Apararea la fotbal',
      coach: coaches[7]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id'], players[6]['_id']],
      date: new Date('2025-05-28'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Cum ne aparam la fotbal?',
    },
    {
      name: 'Exercitii volei',
      coach: coaches[4]['_id'],
      players: [players[5]['_id'], players[7]['_id'], players[6]['_id'], players[4]['_id']],
      date: new Date('2025-04-18'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Exercitii simple cu pase peste fileu',
    },

    {
      name: 'Aruncari la cos',
      coach: coaches[3]['_id'],
      players: [players[4]['_id'], players[7]['_id'], players[8]['_id']],
      date: new Date('2025-05-20'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Aruncari la cos si diverse jocuri cu tema de baschet',
    },
    {
      name: 'Lectie introductiva eSports',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-04-02'),
      location: areas[3]['_id'],
      sport: sport[4]['_id'],
      description: 'Ce este eSports-ul? Despre disciplina in eSports',
    },
    {
      name: 'Lectie introductiva robotica',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-03-12'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description: 'Ce este robotica? Jocuri simple',
    },
    {
      name: 'Stabilirea rolurilor intr-o echipa de fotbal',
      coach: coaches[2]['_id'],
      players: [
        players[0]['_id'],
        players[1]['_id'],
        players[2]['_id'],
        players[3]['_id'],
        players[4]['_id'],
        players[5]['_id'],
      ],
      date: new Date('2025-05-29'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Construim o echipa cu cei prezenti pentru a vedea pe ce pozitii s-ar potrivi',
    },
    {
      name: 'Principii de baza in deschidere',
      coach: coaches[2]['_id'],
      players: [players[2]['_id'], players[10]['_id'], players[12]['_id']],
      date: new Date('2025-06-10'),
      location: areas[3]['_id'],
      sport: sport[0]['_id'],
      description: 'Ce trebuie sa facem la inceputul unei partide de sah',
    },
    {
      name: 'Jocuri cu tematica volei',
      coach: coaches[4]['_id'],
      players: [players[4]['_id'], players[8]['_id'], players[12]['_id']],
      date: new Date('2025-06-25'),
      location: areas[1]['_id'],
      sport: sport[1]['_id'],
      description: 'Diverse jocuri cu pase peste fileu',
    },
    {
      name: 'Lectie2 robotica',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-03-20'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description: 'Notiuni introductive de programare si componente hardware',
    },
    {
      name: 'Jocuri si strategii in eSports',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-06-05'),
      location: areas[3]['_id'],
      sport: sport[4]['_id'],
      description: 'Cele mai cunoscute jocuri si cum trebuie sa ne antrenam',
    },
    {
      name: 'Strategii in jocul de baschet',
      coach: coaches[4]['_id'],
      players: [players[11]['_id'], players[8]['_id'], players[9]['_id'], players[4]['_id']],
      date: new Date('2025-06-10'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Cum ne aranjam pe teren, ce rol are fiecare jucator etc',
    },
    {
      name: 'Sah-Sah Mat-Pat',
      coach: coaches[0]['_id'],
      players: [players[0]['_id'], players[1]['_id']],
      date: new Date('2025-07-01'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Despe sah, sah mat si pat',
    },
    {
      name: 'Suturi la poarta',
      coach: coaches[1]['_id'],
      players: [players[2]['_id'], players[3]['_id']],
      date: new Date('2025-07-02'),
      location: areas[3]['_id'],
      sport: sport[2]['_id'],
      description: 'Cum tragem corect la poarta',
    },
    {
      name: 'Rezistenta la volei',
      coach: coaches[2]['_id'],
      players: [players[4]['_id'], players[0]['_id'], players[3]['_id']],
      date: new Date('2025-07-05'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Cum ne antrenam rezistenta',
    },
    {
      name: 'FIFA2025',
      coach: coaches[3]['_id'],
      players: [players[5]['_id'], players[1]['_id']],
      date: new Date('2025-07-30'),
      location: areas[2]['_id'],
      sport: sport[5]['_id'],
      description: 'Despre FIFA 2025',
    },
    {
      name: 'Capcane in deschidere',
      coach: coaches[1]['_id'],
      players: [players[0]['_id'], players[1]['_id'], players[2]['_id']],
      date: new Date('2025-08-04'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Cele mai cunoscute capcane in deschidere si cum le evitam',
    },
    {
      name: 'Rezistenta la fotbal',
      coach: coaches[2]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-07-12'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Exercitii pentru dezvoltarea rezistentei pe teren',
    },
    {
      name: 'Rezistenta la baschet',
      coach: coaches[3]['_id'],
      players: [players[4]['_id'], players[5]['_id'], players[6]['_id']],
      date: new Date('2025-08-05'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Exercitii pentru dezvoltarea rezistentei pe teren',
    },
    {
      name: 'Imbunatatirea serviciului',
      coach: coaches[4]['_id'],
      players: [players[5]['_id'], players[7]['_id'], players[6]['_id']],
      date: new Date('2025-08-14'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Cum servim mai bine?',
    },
    {
      name: 'Principii strategice de baza',
      coach: coaches[1]['_id'],
      players: [players[2]['_id'], players[3]['_id'], players[4]['_id']],
      date: new Date('2025-07-25'),
      location: areas[0]['_id'],
      sport: sport[0]['_id'],
      description: 'Despre ce inseamna strategia in jocul de sah',
    },
    {
      name: 'Exercitii cu pase',
      coach: coaches[2]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-07-24'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Exercitii cu pase intre mai multi jucatori',
    },
    {
      name: 'Lovituri libere',
      coach: coaches[7]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id'], players[6]['_id']],
      date: new Date('2025-07-28'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Cum executam corect o lovitura libera?',
    },
    {
      name: 'Exercitii volei',
      coach: coaches[4]['_id'],
      players: [players[5]['_id'], players[7]['_id'], players[6]['_id'], players[4]['_id']],
      date: new Date('2025-08-18'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Exercitii simple cu pase peste fileu',
    },
    {
      name: 'Aruncari la cos',
      coach: coaches[3]['_id'],
      players: [players[4]['_id'], players[7]['_id'], players[8]['_id']],
      date: new Date('2025-07-20'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Aruncari la cos si diverse jocuri cu tema de baschet',
    },
    {
      name: 'League of Legends',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-08-02'),
      location: areas[3]['_id'],
      sport: sport[4]['_id'],
      description: 'Cele mai importante principii ale jocului League of Legends',
    },
    {
      name: 'Robotica- programarea unui robor',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-08-12'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description:
        'Notiuni mai avansate de programare si lucru cu blocuri de cod pentru a programa un robot',
    },
    {
      name: 'Penalty-uri',
      coach: coaches[2]['_id'],
      players: [
        players[0]['_id'],
        players[1]['_id'],
        players[2]['_id'],
        players[3]['_id'],
        players[4]['_id'],
        players[5]['_id'],
      ],
      date: new Date('2025-07-29'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Cum executam corect un penalty?',
    },
    {
      name: 'Apararea siciliana',
      coach: coaches[2]['_id'],
      players: [players[2]['_id'], players[10]['_id'], players[12]['_id']],
      date: new Date('2025-06-10'),
      location: areas[3]['_id'],
      sport: sport[0]['_id'],
      description: 'Deschiderea apararea siciliana pentru negru',
    },
    {
      name: 'Jocuri cu tematica volei',
      coach: coaches[4]['_id'],
      players: [players[4]['_id'], players[8]['_id'], players[12]['_id']],
      date: new Date('2025-07-25'),
      location: areas[1]['_id'],
      sport: sport[1]['_id'],
      description: 'Diverse jocuri cu pase peste fileu',
    },
    {
      name: 'Lectie3 robotica',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-07-20'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description: 'Exercitii cu blocuri de cod',
    },
    {
      name: 'Turneu amical de Valorant',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-06-05'),
      location: areas[3]['_id'],
      sport: sport[4]['_id'],
      description: 'Turneu amical de Valorant intre participantii al lectie',
    },
    {
      name: 'Strategii in jocul de baschet',
      coach: coaches[4]['_id'],
      players: [players[11]['_id'], players[8]['_id'], players[9]['_id'], players[4]['_id']],
      date: new Date('2025-07-10'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Cum ne aranjam pe teren, ce rol are fiecare jucator etc',
    },
    {
      name: 'Exercitii volei',
      coach: coaches[4]['_id'],
      players: [players[5]['_id'], players[7]['_id'], players[6]['_id'], players[4]['_id']],
      date: new Date('2025-08-18'),
      location: areas[2]['_id'],
      sport: sport[1]['_id'],
      description: 'Exercitii simple cu pase peste fileu',
    },
    {
      name: 'Aruncari la cos',
      coach: coaches[3]['_id'],
      players: [players[4]['_id'], players[7]['_id'], players[8]['_id']],
      date: new Date('2025-07-20'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description: 'Aruncari la cos si diverse jocuri cu tema de baschet',
    },
    {
      name: 'League of Legends',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-08-02'),
      location: areas[3]['_id'],
      sport: sport[4]['_id'],
      description: 'Cele mai importante principii ale jocului League of Legends',
    },
    {
      name: 'Robotica- programarea unui robot',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-08-12'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description:
        'Notiuni mai avansate de programare si lucru cu blocuri de cod pentru a programa un robot',
    },
    {
      name: 'Penalty-uri',
      coach: coaches[2]['_id'],
      players: [
        players[0]['_id'],
        players[1]['_id'],
        players[2]['_id'],
        players[3]['_id'],
        players[4]['_id'],
        players[5]['_id'],
      ],
      date: new Date('2025-07-29'),
      location: areas[1]['_id'],
      sport: sport[2]['_id'],
      description: 'Cum executam corect un penalty?',
    },
    {
      name: 'Apararea siciliana',
      coach: coaches[2]['_id'],
      players: [players[2]['_id'], players[10]['_id'], players[12]['_id']],
      date: new Date('2025-06-10'),
      location: areas[3]['_id'],
      sport: sport[0]['_id'],
      description: 'Deschiderea apararea siciliana pentru negru',
    },
    {
      name: 'Jocuri cu tematica volei',
      coach: coaches[4]['_id'],
      players: [players[4]['_id'], players[8]['_id'], players[12]['_id']],
      date: new Date('2025-07-25'),
      location: areas[1]['_id'],
      sport: sport[1]['_id'],
      description: 'Diverse jocuri cu pase peste fileu',
    },
    {
      name: 'Pregatire de concurs',
      coach: coaches[6]['_id'],
      players: [players[3]['_id'], players[4]['_id'], players[1]['_id']],
      date: new Date('2025-08-20'),
      location: areas[3]['_id'],
      sport: sport[2]['_id'],
      description: 'Regulile din timpul unei competitii, sfaturi de bune practici',
    },
    {
      name: 'Turneu amical de FIFA2025',
      coach: coaches[7]['_id'],
      players: [players[0]['_id'], players[2]['_id'], players[5]['_id'], players[4]['_id']],
      date: new Date('2025-05-05'),
      location: areas[3]['_id'],
      sport: sport[5]['_id'],
      description: 'Turneu amical de FIFA2025 intre participantii al lectie',
    },
    {
      name: 'Strategii in jocul de baschet',
      coach: coaches[4]['_id'],
      players: [players[11]['_id'], players[8]['_id'], players[9]['_id'], players[4]['_id']],
      date: new Date('2025-08-10'),
      location: areas[1]['_id'],
      sport: sport[3]['_id'],
      description:
        'Imbunatatirea abilitatilor fiecarui jucator in functie de pozitia pe care activeaza',
    },
  ];
};
