var app = angular.module('StockIndexTracker', []);

app.controller('StockController', ['$http', '$scope', function($http, $scope){
  
var americaIndexesUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quoteslist%20where%20symbol%20IN('%5ESPX'%2C%20'%5EINDU'%2C%20'%5ECCMP'%2C%20'%5ESPTSX'%2C%20'%5EMEXBOL'%2C%20'%5EIBOV')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
$http.get(americaIndexesUrl).success(function(response) {
  $scope.americaStockIndexes = response.query.results.quote;
});

}]);

