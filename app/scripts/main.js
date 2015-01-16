var app = angular.module('StockIndexTracker', []);

app.controller('StockController', ['yahooFactory', '$scope', function(yahooFactory, $scope){


  var americaIndexesUrl, europeMideastAfricaIndexesUrl, asiaPacificIndexesUrl;
  // America World Stock Indexes
  americaIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN('INDU'%2C%20'%5EGSPC'%2C%20'%5EIXIC'%2C%20'%5EGSPTSE'%2C%20'%5EMXX'%2C%20'%5EBVSP')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  yahooFactory.fetchStockData(americaIndexesUrl).then(function(response) {
    $scope.americaStockIndexes = response.data.query.results.quote;
  });
  
  
  // Europe, Middle East, and Africa World Stock Indexes
  europeMideastAfricaIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN('%5ESTOXX50E'%2C%20'%5EFTSE'%2C%20'%5EFCHI'%2C%20'%5EGDAXI'%2C%20'%5EIBEX'%2C%20'FTSEMIB.MI'%2C%20'%5EAEX'%2C%20'%5EOMXS30'%2C%20'%5ESSMI')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  yahooFactory.fetchStockData(europeMideastAfricaIndexesUrl).then(function(response) {
    $scope.europeMideastAfricaStockIndexes = response.data.query.results.quote;
  });
  
  
  // Asia and Pacific World Stock Indexes
  asiaPacificIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN('%5EN225'%2C%20'%5EHSI'%2C%20'%5EAXJO')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
  yahooFactory.fetchStockData(asiaPacificIndexesUrl).then(function(response) {
    $scope.asiaPacificStockIndexes = response.data.query.results.quote;
  });

}]);

app.directive('stockTable', function() {
  return {
    restrict: 'E',
    templateUrl: 'stocktable.html',
    scope: {
      header: '@',
      collection: '='
    }
  };
});

app.factory('yahooFactory', ['$http', function($http){

  var fetchStockData = function(url) {
    return $http.get(url);
  };

  return {fetchStockData: fetchStockData};
}]);



