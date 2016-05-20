<template>
  <div>
    <x-form :$valid.sync="valid">
      <group title="X-Form">
        <x-input title="Require input 1" placeholder="I'm placeholder" name="input001"></x-input>
        <x-input title="Require input 2" name="input002"></x-input>
        <x-input title="Require = false" :required="false"></x-input>
      </group>
      <group title="validate result">
        <cell title="valid value" :value="valid + ''"></cell>
      </group>
    </x-form>
  </div>
</template>

<script>
import { Group, XInput, XForm, Cell } from '../components'

export default {
  components: {
    Group,
    XInput,
    XForm,
    Cell
  },
  data () {
    return {
      valid: false
    }
  }
}
</script>