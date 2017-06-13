import Backbone from 'backbone';
import $ from 'jquery';
import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    // Compile a template to be shared between the individual tasks
    this.template = params.template;
    // Keep track of the <ul> element
    this.listElement = this.$('#pet-list');

    // We'll keep track of a list of task models and a list
    // of task views.
    this.petViewList = [];

    this.model.forEach(function(pet) {
      this.addPet(pet);
    },this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    this.input = {
      title: this.$('.new-task input[name="title"]'),
      description: this.$('.new-task input[name="description"]')
    };

    // When a model is added to the collection, create
    // a card for that model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addPet);

    // When a model is removed from the collection, remove
    // the card for that task from our list of cards
    this.listenTo(this.model, 'remove', this.removePet);

    // When the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    console.log("HERE");
    // console.log(petViewList);
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.petViewList.forEach(function(pet) {
      // Cause the task to render
      pet.render();

      // Add that HTML to our task list
      this.listElement.append(pet.$el);
    }, this);

    return this; // enable chained calls
  },
  addPet: function(pet) {
    // Create a card for the new task
     pet = new PetView({
      model: pet,
      template: this.template
    });

    this.listenTo(pet, 'edit', this.editPet);

    // Add the card to our card list
    this.petViewList.push(pet);
  },
  });

export default PetListView;
