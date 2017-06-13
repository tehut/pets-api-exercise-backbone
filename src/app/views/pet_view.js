import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({pet: this.model.toJSON()});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    "click .complete-button": "completeHandler",
    "click .delete-button": "deleteHandler",
    "dblclick": "editHandler"
  },

  completeHandler: function(event) {
    console.log("completeHandler called!");
    this.model.toggleComplete();
  },

  deleteHandler: function(event) {
    console.log("deleteHandler called!");
    if (window.confirm("Are you sure you want to delete this task?")) {
      console.log("going to delete it!");
      this.model.destroy();
    }
  },

  editHandler: function(event) {
    console.log("editHandler called");
    this.trigger('edit', this.model);
  }
});

export default PetView;
