﻿/*
 * Copyright HCL Technologies Ltd. 2001, 2020
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the 
 * specific language governing permissions and limitations under the License.
 */
'use strict';

angular.module('dashboardApp.navBar', [])
    .directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/nav-bar.html',
            controller: 'RouteCtrl'
        };
    })
    .controller('RouteCtrl', ['$scope', '$route', '$location', function ($scope, $route, $location) {
        $scope.$on("$routeChangeSuccess", function (event, current, previous) {
            $scope.controller = $route.current.controller;
        });
    }]);
