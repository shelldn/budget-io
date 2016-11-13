import Em from 'ember';

const ActiveCellInputComponent = Em.TextField.extend({

  attributeBindings: ['isDisabled:disabled'],

  classNames: ['active-cell__input'],

  keyDown(e) {
    switch (e.keyCode) {
      case 13:
        this.get('on-change')()
          .then(() => this.get('on-complete')());
    }
  },

  didInsertElement() {
    this.$().focus();
    this.$().select();
  }

});


ActiveCellInputComponent.reopenClass({

  positionalParams: ['isDisabled', 'value']

});

export default ActiveCellInputComponent;
