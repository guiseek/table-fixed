angular
  .module('example', ['gumga.flextable'])
  .controller('ExampleCtrl', ['$scope', function($scope) {
    $scope.rows = [
      {
        equipe: '1º Palmeiras',
        j: 38, vit: 24, e: 8, der: 6, gp: 62, gc: 32, sg: 30, pts: 80
      },
      {
        equipe: '2º Santos',
        j: 38, vit: 22, e: 5, der: 11, gp: 59, gc: 35, sg: 24, pts: 71
      },
      {
        equipe: '3º Flamengo',
        j: 38, vit: 20, e: 11, der: 7, gp: 52, gc: 35, sg: 17, pts: 71
      },
      {
        equipe: '4º Atlético',
        j: 37, vit: 17, e: 11, der: 9, gp: 61, gc: 50, sg: 11, pts: 62
      },
      {
        equipe: '5º Botafogo',
        j: 38, vit: 17, e: 8, der: 13, gp: 43, gc: 39, sg: 4, pts: 59
      },
      {
        equipe: '6º Palmeiras',
        j: 38, vit: 24, e: 8, der: 6, gp: 62, gc: 32, sg: 30, pts: 80
      },
      {
        equipe: '7º Santos',
        j: 38, vit: 22, e: 5, der: 11, gp: 59, gc: 35, sg: 24, pts: 71
      },
      {
        equipe: '8º Flamengo',
        j: 38, vit: 20, e: 11, der: 7, gp: 52, gc: 35, sg: 17, pts: 71
      },
      {
        equipe: '9º Atĺetico',
        j: 37, vit: 17, e: 11, der: 9, gp: 61, gc: 50, sg: 11, pts: 62
      },
      {
        equipe: '10º Botafogo',
        j: 38, vit: 17, e: 8, der: 13, gp: 43, gc: 39, sg: 4, pts: 59
      }
    ];
  }])
