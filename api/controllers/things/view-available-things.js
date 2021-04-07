module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function () {

    let things = [
      { id: 1, label: 'Sweet Red Drill' },
      { id: 2, label: 'Red Mountain Bike' }
    ];
    return { things };

  }


};
