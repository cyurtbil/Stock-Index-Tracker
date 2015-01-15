var app = angular.module('StockIndexTracker', []);

app.controller('StockController', ['$http', '$scope', function($http, $scope){


  // America World Stock Indexes
  var americaIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quoteslist%20where%20symbol%20IN('%5ESPX'%2C%20'%5EINDU'%2C%20'%5ECCMP'%2C%20'%5ESPTSX'%2C%20'%5EMEXBOL'%2C%20'%5EIBOV')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  $http.get(americaIndexesUrl).success(function(response) {
    $scope.americaStockIndexes = response.query.results.quote;
    debugger
  });
  
  
  // Europe, Middle East, and Africa World Stock Indexes
  var europeMideastAfricaIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quoteslist%20where%20symbol%20IN('%5ESX5E'%2C%20'%5EUKX'%2C%20'%5ECAC'%2C%20'%5EDAX'%2C%20'%5EIBEX'%2C%20'%5EFTSEMIB'%2C%20'%5EAEX'%2C%20'%5EOMX%3AIND'%2C%20'%5ESMI')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  $http.get(europeMideastAfricaIndexesUrl).success(function(response) {
    $scope.europeMideastAfricaStockIndexes = response.query.results.quote;
  });
  
  
  // Asia and Pacific World Stock Indexes
  var asiaPacificIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quoteslist%20where%20symbol%20IN('%5ENKY'%2C%20'%5EHSI'%2C%20'%5EAS51')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  $http.get(asiaPacificIndexesUrl).success(function(response) {
    $scope.asiaPacificStockIndexes = response.query.results.quote;
  });

}]);



