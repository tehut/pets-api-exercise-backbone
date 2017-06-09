import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet
});

export default PetList;
