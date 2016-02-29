module.exports = function (app) {
  app.dataSources.postgresqlDs.automigrate('Customer', function (err) {
    if (err) throw err;

    app.models.Customer.create([], function (err, customers) {
      if (err) throw err;

      console.log('Models created: \n', customers);
    });
  });
};
