// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular
  .module("starter", ["ionic", "starter.controllers"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl",
      })

      .state("app.playlists", {
        url: "/playlists",
        views: {
          menuContent: {
            templateUrl: "templates/playlists.html",
            controller: "PlaylistsCtrl",
          },
        },
      })
      .state("app.2", {
        url: "/2",
        views: {
          menuContent: {
            templateUrl: "templates/2.html",
          },
        },
      })

      .state("app.3", {
        url: "/3",
        views: {
          menuContent: {
            templateUrl: "templates/3.html",
            controller: "The3Ctrl",
          },
        },
      })

      .state("app.modal", {
        url: "/modal",
        views: {
          menuContent: {
            templateUrl: "templates/modal.html",
            controller: "The3Ctrl",
          },
        },
      })

      .state("app.4", {
        url: "/4",
        views: {
          menuContent: {
            templateUrl: "templates/4.html",
            controller: "The4Ctrl",
          },
        },
      })

      .state("app.5", {
        url: "/5",
        views: {
          menuContent: {
            templateUrl: "templates/5.html",
            controller: "The5Ctrl",
          },
        },
      })

      .state("app.6", {
        url: "/6",
        views: {
          menuContent: {
            templateUrl: "templates/6.html",
            controller: "The6Ctrl",
          },
        },
      })
      .state("app.11", {
        url: "/11",
        views: {
          menuContent: {
            templateUrl: "templates/11.html",
            controller: "The11Ctrl",
          },
        },
      })

      .state("app.17", {
        url: "/17",
        views: {
          menuContent: {
            templateUrl: "templates/17.html",
            controller: "The17Ctrl",
          },
        },
      })

      .state("app.18", {
        url: "/18",
        views: {
          menuContent: {
            templateUrl: "templates/18.html",
          },
        },
      })
      .state("app.19", {
        url: "/19",
        views: {
          menuContent: {
            templateUrl: "templates/19.html",
          },
        },
      })
      .state("app.20", {
        url: "/20",
        views: {
          menuContent: {
            templateUrl: "templates/20.html",
          },
        },
      })

      .state("app.21", {
        url: "/21",
        views: {
          menuContent: {
            templateUrl: "templates/21.html",
          },
        },
      })

      .state("app.22", {
        url: "/22",
        views: {
          menuContent: {
            templateUrl: "templates/22.html",
          },
        },
      })

      .state("app.23", {
        url: "/23",
        views: {
          menuContent: {
            templateUrl: "templates/23.html",
          },
        },
      })

      .state("app.24", {
        url: "/24",
        views: {
          menuContent: {
            templateUrl: "templates/24.html",
          },
        },
      })

      .state("app.25", {
        url: "/25",
        views: {
          menuContent: {
            templateUrl: "templates/25.html",
          },
        },
      })

      .state("app.26", {
        url: "/26",
        views: {
          menuContent: {
            templateUrl: "templates/26.html",
          },
        },
      })

      .state("app.27", {
        url: "/27",
        views: {
          menuContent: {
            templateUrl: "templates/27.html",
          },
        },
      })

      .state("app.28", {
        url: "/28",
        views: {
          menuContent: {
            templateUrl: "templates/28.html",
          },
        },
      })

      .state("app.29", {
        url: "/29",
        views: {
          menuContent: {
            templateUrl: "templates/29.html",
          },
        },
      })
      .state("app.41", {
        url: "/41",
        views: {
          menuContent: {
            templateUrl: "templates/41.html",
          },
        },
      })
      .state("app.42", {
        url: "/42",
        views: {
          menuContent: {
            templateUrl: "templates/42.html",
          },
        },
      })
      .state("app.43", {
        url: "/43",
        views: {
          menuContent: {
            templateUrl: "templates/43.html",
          },
        },
      })
      .state("app.44", {
        url: "/44",
        views: {
          menuContent: {
            templateUrl: "templates/44.html",
          },
        },
      })
      .state("app.45", {
        url: "/45",
        views: {
          menuContent: {
            templateUrl: "templates/45.html",
          },
        },
      })
      .state("app.46", {
        url: "/46",
        views: {
          menuContent: {
            templateUrl: "templates/46.html",
          },
        },
      })
      .state("app.47", {
        url: "/47",
        views: {
          menuContent: {
            templateUrl: "templates/47.html",
          },
        },
      })
      .state("app.48", {
        url: "/48",
        views: {
          menuContent: {
            templateUrl: "templates/48.html",
          },
        },
      })
      .state("app.49", {
        url: "/49",
        views: {
          menuContent: {
            templateUrl: "templates/49.html",
          },
        },
      })
      .state("app.50", {
        url: "/50",
        views: {
          menuContent: {
            templateUrl: "templates/50.html",
          },
        },
      })
      .state("app.51", {
        url: "/51",
        views: {
          menuContent: {
            templateUrl: "templates/51.html",
          },
        },
      })
      .state("app.52", {
        url: "/52",
        views: {
          menuContent: {
            templateUrl: "templates/52.html",
          },
        },
      })
      .state("app.53", {
        url: "/53",
        views: {
          menuContent: {
            templateUrl: "templates/53.html",
          },
        },
      })
      .state("app.54", {
        url: "/54",
        views: {
          menuContent: {
            templateUrl: "templates/54.html",
          },
        },
      })
      .state("app.55", {
        url: "/55",
        views: {
          menuContent: {
            templateUrl: "templates/55.html",
          },
        },
      })
      .state("app.56", {
        url: "/56",
        views: {
          menuContent: {
            templateUrl: "templates/56.html",
          },
        },
      })
      .state("app.57", {
        url: "/57",
        views: {
          menuContent: {
            templateUrl: "templates/57.html",
          },
        },
      })
      .state("app.58", {
        url: "/58",
        views: {
          menuContent: {
            templateUrl: "templates/58.html",
          },
        },
      })
      .state("app.59", {
        url: "/59",
        views: {
          menuContent: {
            templateUrl: "templates/59.html",
          },
        },
      });
    $urlRouterProvider.otherwise("/app/playlists");
  });
