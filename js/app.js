var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    	.state('home', {
    		url: '/home', 
    		controller: 'homeCtrl',
    		templateUrl: 'js/home/homeTmpl.html'
    	})
    	.state('teams', {
    		url: '/teams/:team',
    		controller: 'teamCtrl',
    		templateUrl: 'js/teams/teamTmpl.html',
    		resolve: {
    			teamData: function($stateParams, teamService) {
    				return teamService.getTeamData($stateParams.team);
    			}
    		}
    	});

});
