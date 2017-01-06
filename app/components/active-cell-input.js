import Em from 'ember';

const ActiveCellInputComponent = Em.TextField.extend({

  attributeBindings: ['disabled'],

  classNames: ['active-cell__input'],

  keyDown(e) {
    switch (e.keyCode) {
      case 13:
        this.get('on-change')()
          .then(() => this.get('on-complete')());
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.$().focus();
    this.$().select();
  }

});


ActiveCellInputComponent.reopenClass({

  positionalParams: ['disabled']

});

export default ActiveCellInputComponent;
