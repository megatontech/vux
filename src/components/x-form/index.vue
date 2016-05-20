<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-form',
  props: {
    $valid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
    register form element
    {
      name: form name,
      uuid: form uuid,
      valid: false
    }
    */
    register (option) {
      let _temp = {}
      _temp[option.uuid] = option
      this.list = Object.assign({}, this.list, _temp)
    },
    update (uuid, datas) {
      this.list[uuid] = Object.assign({}, this.list[uuid], datas)
      this._update()
    },
    _update () {
      let _valid = true
      for (let i in this.list) {
        _valid = _valid && this.list[i].valid
      }
      this.valid = this.$valid = _valid
    },
    // unregister a form element
    unregister (uuid) {
      delete this.list[uuid]
    }
  },
  computed: {
    invalid () {
      return !this.valid
    }
  },
  data () {
    return {
      valid: false,
      list: {}
    }
  }
}
</script>