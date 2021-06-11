define([], function () {
    'use strict';

    var SRC = 'https://raw.githubusercontent.com/Rania10970/Widget/main';
  

    require.config({
        paths: {
            build: `${SRC}/main`,
  
            jquery: `${LIBS}/jquery-2.1.1/jquery`,
        },
    });

    define('appDependencies', ['jquery']);

    require(['appDependencies', 'build']);
});
