define([], function () {
    'use strict';

    var SRC = 'https://raw.githubusercontent.com/Rania10970/Widget/main';
    var LIBS = 'https://github.com/Rania10970?tab=repositories';
    var RES = 'https://github.com/Rania10970/Widget';

    require.config({
        paths: {
            build: `${SRC}/main`,
            DSx: `${RES}/javascript/DSx`,
            jquery: `${LIBS}/jquery-2.1.1/jquery`,
        },
    });

    define('appDependencies', ['jquery']);

    require(['appDependencies', 'build']);
});
