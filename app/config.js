/**
 * Created by user on 11-06-2016.
 */
angular.module('flickrApp').constant('FLICKR_APP_PARAMS', {
    baseUrl: 'https://api.flickr.com/services/rest/',
    method: 'flickr.people.getPublicPhotos',
    api_key: 'a5e95177da353f58113fd60296e1d250',
    user_id: '24662369@N07',
    format: 'json',
    nojsoncallback: '1',
    totalPicturesPerFrame : 12
});