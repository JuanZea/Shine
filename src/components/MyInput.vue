<template>
  <div class="flex" :class="divClass">
    <label :for="id" :class="labClass">
      <slot name="label"/>
    </label>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :id="id" :name="name" :type="type" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
  </div>
</template>

<script>

export default {
  props: {modelValue: String, id: String, name: String, type: String, divClass: String, labClass: String},
  emits: ['update:modelValue'],
}
</script>