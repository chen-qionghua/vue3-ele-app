<template>
  <div class="text-group">
    <div class="input-group" :class="{ 'is-invalid': error }">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('update:value', $event.target.value)"
        @click="$emit('input', $event.target.value)"
      />
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">
        {{ btnTitle }}
      </button>
    </div>
  </div>
  <!-- 错误提醒 -->
  <div v-if="error" class="invalid-feedback">{{ error }}</div>
</template>


<script>
export default {
  name: "InputGroup",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: String,
    placeholder: String,
    btnTitle: String,
    disabled: Boolean,
    error: String,
  },
};
</script>


<style scoped>
/* 封装表单 */
.input-group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}
.input-group input {
  height: 100%;
  width: 60%;
  outline: none;
}
.input-group button {
  border: none;
  outline: none;
  background: #fff;
}
.input-group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  margin-bottom: 5px;
}
</style>