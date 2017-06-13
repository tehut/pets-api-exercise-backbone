import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  initialize: function(options) {
    // console.log(this.attributes);
  },
});

export default Pet;
