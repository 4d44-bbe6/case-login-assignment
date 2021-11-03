<template>
  <div class="form">
    <label class="form__label" :for="name">{{ label }}</label>
    <input
      class="form__input"
      :name="name"
      :value="value"
      :type="type"
      @input="$emit('update', $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: 'InputField',
  model: {
    event: 'update'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .form {
    &__label {
      display: block;
      margin-top: 10px;

      font-size: 1rem;
    }

    &__input {
      width: 100%;
      padding: 1rem;

      font-size: 1rem;
      line-height: 1;
      color: $color__primary;

      border: 1px solid #ccc;
      border-radius: 4px;

      &:focus {
        outline: 1px solid $color__primary;
      }
    }
  }
</style>
