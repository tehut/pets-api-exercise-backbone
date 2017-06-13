
import $ from 'jquery';
import _ from 'underscore';
import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

$(document).ready(function() {
  var petList = new PetList();
  petList.fetch();

  $('main').on('click', function(event) {
    // if ($("#pet").is(':hidden')) {
    //   console.log("pet is hidden");
    // } else {
    //   console.log("pet is visible");
    //   $("#pet").hide();
    // }
  });

  var petListView = new PetListView({
    el: $('main'),
    model: petList,
    template: _.template($("#pet-card-template").html()),
    infoTemplate: _.template($("#pet-info-template").html()),
  });

  petListView.render();
});
