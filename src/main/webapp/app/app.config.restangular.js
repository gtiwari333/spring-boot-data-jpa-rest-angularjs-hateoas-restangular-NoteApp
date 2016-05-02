(function () {
    'use strict';

    angular
        .module('noteApp')
        .config(config);

    config.$inject = ['RestangularProvider'];

    function config(RestangularProvider) {

        var BASE_URL = '/api/';

        RestangularProvider.setBaseUrl(BASE_URL);

        RestangularProvider.setRestangularFields(
            {selfLink: "self.link"}
        );

        RestangularProvider.setResponseExtractor(function (data, operation, what, url, response, deferred) {

            if (operation == 'getList' && '_embedded' in data) {
                var resp = data._embedded[what + 's'];

                if (resp == undefined) {
                    /* For case like : /api/person/44/blogs , 's' is already expected by restangular, so try without 's' */
                    resp = data._embedded[what];
                }

                resp._links = data._links;

                angular.forEach(resp, function (record) {
                    record.id = record._links.self.href.substr(record._links.self.href.lastIndexOf("/") + 1);
                });

                return resp;
            } else if (url.indexOf('/search/') > -1 && '_links' in data) {

                /* for case like: api/person/search/findTop3PosterBasedOnPostCount */

                var what_ = url.replace(what, '').replace(BASE_URL, '').replace('/', '');

                resp = data._embedded[what_ + 's'];

                resp._links = {};
                resp._links = data._links;

                angular.forEach(resp, function (record) {
                    record.id = record._links.self.href.substr(record._links.self.href.lastIndexOf("/") + 1);
                });

                return resp;
            } else if (data != undefined && data != "" && '_links' in data) {
                data.id = data._links.self.href.substr(data._links.self.href.lastIndexOf("/") + 1);
                return data;
            } else {
                return data;
            }
        });

    }

})();