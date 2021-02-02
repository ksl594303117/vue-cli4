<template>
  <!-- 嵌套表格，可展开收起，子表格无表头 -->
  <div>
    <a-table
      :columns="outerColumns"
      :data-source="outerData"
      class="components-table-demo-nested outer-table"
      :row-selection="{
        selectedRowKeys: selectedOuterRowKeys,
        onChange: onSelectChange
      }"
      :defaultExpandAllRows="true"
    >
      <a-table
        slot="expandedRowRender"
        slot-scope="line"
        :data-source="line.innerData"
        :columns="innerColumns"
        :pagination="false"
        :row-selection="{
          selectedRowKeys: selectedInnerRowKeys,
          onChange: (selectedRowKeys, selectedRows) =>
            onSelectInnerChange(selectedRowKeys, selectedRows, line)
        }"
        :defaultExpandAllRows="true"
        class="inner-table"
      />
    </a-table>
  </div>
</template>

<script>
import tableCommon from "@/scripts/mixins/tableCommon";

export default {
  name: "table2",
  mixins: [tableCommon],
  props: {
    outerColumns: {
      type: Array,
      default: () => []
    },
    outerData: {
      type: Array,
      default: () => []
    },
    innerColumns: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="less" scoped>
.inner-table {
  /deep/ .ant-table-thead {
    display: none;
  }
}
</style>
