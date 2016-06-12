/**
 * Created by user on 11-06-2016.
 */
angular.module('flickrApp.displayPictures').controller('DisplayPicturesController', DisplayPicturesController);
/*Main Class starts*/
function DisplayPicturesController(DisplayPicturesService,FLICKR_APP_PARAMS) {
    /*Assigning variable the current Controller Object dependency*/
    var dpc = this;
    /*Class Properties*/
    dpc.getAllPictures = getAllPictures;
    dpc.loadMore = loadMore;
    dpc.allPictures = [];
    dpc.currentPictures = [];
    dpc.selectedPicture = {};
    dpc.isPictureLimitReached = false;
    dpc.searchText = "";
    /*Member Functions*/
    function getAllPictures() {
        return DisplayPicturesService.getAllPictures().then(function(filckrResponse)
            {
                dpc.allPictures = filckrResponse;
                angular.forEach(filckrResponse, function(picture, key) {
                    if(key<FLICKR_APP_PARAMS.totalPicturesPerFrame){
                        dpc.currentPictures.push(picture);
                    }else{
                        return true;
                    }
                });
            });
    };
    getAllPictures();

    /*Function to add elements to ng-repeat with scrolling*/
   function loadMore() {
       dpc.isPictureLimitReached = (dpc.currentPictures.length>0 && dpc.currentPictures.length == dpc.allPictures.length);
       angular.forEach(dpc.allPictures, function(picture, key) {
           if(key>dpc.currentPictures.length-1 && key<dpc.currentPictures.length+FLICKR_APP_PARAMS.totalPicturesPerFrame){
               dpc.currentPictures.push(picture);
           }
       });
    };
}/*Main Class ends*/
