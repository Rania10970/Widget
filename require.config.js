define([], function () {
    'use strict';

    var SRC = 'https://raw.githubusercontent.com/Rania10970/Widget/main';
   

    require.config({
        paths: {
            build: `${SRC}/main`,
            
        },
    });

    define('appDependencies');

    require(['appDependencies', 'build']);
});
