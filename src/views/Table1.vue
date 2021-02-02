<template>
  <!-- 嵌套表格，无展开收起，子表格表头自定义，父表格行隐藏 -->
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
        :pagination="false"
        :row-selection="{
          selectedRowKeys: selectedInnerRowKeys,
          onChange: (selectedRowKeys, selectedRows) =>
            onSelectInnerChange(selectedRowKeys, selectedRows, line)
        }"
        :defaultExpandAllRows="true"
        class="inner-table"
      >
        <a-table-column
          :key="column.dataIndex"
          :data-index="column.dataIndex"
          v-for="(column, i) in innerColumns"
        >
          <div
            slot="title"
            v-if="i === 0"
            style="position: absolute; width: 100px;white-space: nowrap;"
          >
            {{ line.title }}
          </div>
        </a-table-column>
      </a-table>
    </a-table>
  </div>
</template>

<script>
import tableCommon from "@/scripts/mixins/tableCommon";

export default {
  name: "table1",
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
.outer-table {
  /deep/ .ant-table-row {
    visibility: collapse;
  }
}
.inner-table {
  /deep/ .ant-table-row {
    visibility: initial;
    td {
      width: 300px;
      &:nth-child(1) {
        width: initial;
      }
    }
  }
}
</style>
