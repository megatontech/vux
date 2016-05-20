/**
The XForm doesnot handle validating, it merely computes the valid status
*/
export default {
  ready () {
    // get parent XForm
    this.XForm = this.$parent.$options.name === 'x-form' ? this.$parent : this.$parent.$parent
    if (this.XForm.$options.name === 'x-form') {
      this.XForm.register({
        name: this.name || this.uuid,
        uuid: this.uuid,
        valid: this.valid
      })
    }
    this._updateStatus()
  },
  watch: {
    'required+valid+value' (val) {
      this._updateStatus()
    }
  },
  methods: {
    _updateStatus () {
      this.XForm.$options.name === 'x-form' && this.XForm.update(this.uuid, {
        valid: this.valid,
        value: this.value
      })
    }
  },
  beforeDestroy () {
    this.XForm.$options.name === 'x-form' && this.XForm.unregister(this.uuid)
    this.XForm = null
  }
}
