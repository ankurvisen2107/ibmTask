/**
 * Created by user on 11-06-2016.
 */
angular.module('flickrApp.displayPictures').factory('DisplayPicturesService', DisplayPicturesService);

DisplayPicturesService.$inject = ['$http','FLICKR_APP_PARAMS','$log'];
function DisplayPicturesService($http,FLICKR_APP_PARAMS,$log) {
    return {
        getAllPictures: getAllPictures
    };

    function getAllPictures() {
        return $http.get(FLICKR_APP_PARAMS.baseUrl+'?method='+FLICKR_APP_PARAMS.method+
            '&api_key='+FLICKR_APP_PARAMS.api_key+'&user_id='+FLICKR_APP_PARAMS.user_id+
            '&format='+FLICKR_APP_PARAMS.format+'&nojsoncallback='+FLICKR_APP_PARAMS.nojsoncallback)
            .then(getAllPicturesComplete)
            .catch(getAllPicturesFailed);

        function getAllPicturesComplete(response) {
            return response.data.photos.photo;
        }

        function getAllPicturesFailed(error) {
            $log.error('XHR Failed for getAllPicturesFailed.' + error.data);
        }
    }
}
