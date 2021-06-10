define([], function () {
    'use strict';

    var SRC = 'https://widgetfactorydev.extranet.3ds.com/resources/javascript/00test/GPT3/WFAPI';
    var LIBS = 'https://widgetrepository-thirdparty-cdn.3ds.com';
    var RES = 'https://widgetfactorydev.extranet.3ds.com/resources';

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