<template>
  <div class="edc-dynamic-form">
    <van-field
      v-if="itemList.fieldtype === 'string'"
      v-model="itemList.value"
      :disabled="disabled"
      maxlength="100"
      placeholder="请输入手机号"
      error-message="手机号格式错误"/>

    <template v-else-if="itemList.fieldtype === 'selectString'">
      <van-field
        v-model="itemList.value"
        style="display: none"
        disabled
        maxlength="100"/>
      <van-field
        v-model="itemList.showvalue"
        disabled
        maxlength="100"/>
    </template>

    <van-field
      v-if="itemList.fieldtype === 'clob'"
      v-model="itemList.value"
      rows="1"
      autosize
      :disabled="disabled"
      type="textarea"/>

    <template v-if="itemList.fieldtype === 'select'">
      <van-radio-group
        v-if="itemList.codelisttype === '1' || itemList.codelisttype === '2'"
        v-model="itemList.value"
        :disabled="disabled">
        <van-cell-group>
          <van-cell
            v-for="(radioItem, radioIndex) in itemList.selector"
            :key="radioIndex" :title="radioItem.codevalue"
            clickable
            :disabled="radioItem.disabled">
            <van-radio slot="right-icon" :name="radioItem.codevalue" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <template v-else>
        <van-field
          readonly
          clickable
          :label="itemList.fieldname"
          :value="value"
          @click="showPicker = true"/>

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"/>
        </van-popup>
      </template>
    </template>

    <van-checkbox-group
      v-if="itemList.fieldtype === 'mselect'"
      v-model="itemList.value"
      :disabled="disabled">
      <van-cell-group>
        <van-cell
          v-for="(checkboxItem, checkboxIndex) in itemList.selector"
          clickable
          :key="checkboxIndex"
          :title="checkboxItem.codedesp"
          @click="toggle(index)">
          <van-checkbox
            :name="checkboxItem.codevalue"
            ref="checkboxes"
            slot="right-icon"/>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

    <BioDatePicker
      v-model="itemList.value"
      v-if="itemList.fieldtype === 'datetime'"
      type="datetime"
      :class="setWidth"
      :style="setStyle"
      :item-list="itemList"
      :disabled="disabled"
      @selectChange="selectChange({itemList, index})"/>

    <BioDatePicker
      v-model="itemList.value"
      v-if="itemList.fieldtype === 'date'"
      type="date"
      :class="setWidth"
      :style="setStyle"
      :item-list="itemList"
      :disabled="disabled"
      @selectChange="selectChange({itemList, index})"/>

    <EdcPartialDate
      v-if="itemList.fieldtype === 'partialdate'"
      :class="setWidth"
      :style="setStyle"
      :itemList="itemList"
      :disabled="disabled"/>

    <el-time-picker
      v-if="itemList.fieldtype === 'time'"
      v-model="itemList.value"
      :class="setWidth"
      :style="setStyle"
      :editable="true"
      :value-format="itemList.format"
      :format="itemList.format"
      :disabled="disabled">
    </el-time-picker>

    <edc-partial-time
      v-if="itemList.fieldtype === 'partialtime'"
      :class="setWidth"
      :style="setStyle"
      :itemList="itemList"
      :disabled="disabled">
    </edc-partial-time>

    <template v-if="itemList.fieldtype === 'text'">
      {{ itemList.value }}
    </template>

    <template v-else-if="itemList.fieldtype === 'selecttext'">
      {{ itemList.selector[0].codedesp }}
    </template>
  </div>
</template>

<script>
import EdcPartialDate from '../EdcPartialDate/index'
import BioDatePicker from '../DatePick/Date'
import EdcRadio from '../EdcRadio/index'
import EdcPartialTime from '../EdcPartialTime/index'
import EdcNumInput from '../EdcNumInput/index'

export default {
  name: 'EdcDynamicForm',

  props: {
    itemList: {
      type: Object,
      required: true
    },

    index: {
      type: String,
    },

    itemRow: {
      type: Object,
    },

    disabled: {
      type: Boolean,
    },

    setWidth: {
      type: String,
    },

    setStyle: {
      type: Object,
    }
  },

  components: {
    EdcNumInput,
    EdcPartialDate,
    BioDatePicker,
    EdcRadio,
    EdcPartialTime,
  },

  methods: {
    selectChange ({itemList, index}) {
      this.$emit('selectChange', {itemList, index, row: this.itemRow})
    }
  }
}
</script>

<style scoped lang="scss">
  .edc-dynamic-form {
    display: inline-block;

    .isBlock {
      display: block;
    }
  }
</style>
