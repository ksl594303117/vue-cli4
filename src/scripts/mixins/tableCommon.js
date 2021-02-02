export default {
  data() {
    return {
      selectedInnerRows: [],
      selectedInnerRowKeys: [],
      selectedOuterRowKeys: [],
      selectedOuterRows: []
    };
  },
  methods: {
    // todo: 最外侧表格的选择逻辑
    onSelectChange(selectedOuterRowKeys, selectedOuterRows) {
      this.selectedOuterRowKeys = selectedOuterRowKeys;
      this.selectedOuterRows = selectedOuterRows;
      // 如果取消勾选外侧表格的某行数据，需要将该行数据包含的内侧表格的数据均取消勾选。
      // 因此每次发生onSelectChange事件时，重置已选inner值。
      this.selectedInnerRowKeys = [];
      this.selectedInnerRows = [];
      // 由于外侧表格的数据行均隐藏，所以如果外侧表格有值就表示有外侧表格的全选操作，
      // 因此需要编辑所有内嵌表格的行，重置selectedInnerRowKeys/selectedInnerRows的值；否则重置为空。
      selectedOuterRows.length > 0
        ? selectedOuterRows.forEach(row =>
            row.innerData.forEach(data => {
              this.selectedInnerRowKeys.push(data.key);
              this.selectedInnerRows.push(data);
            })
          )
        : ((this.selectedInnerRowKeys = []), (this.selectedInnerRows = []));
    },
    // todo: 内嵌表格的选择逻辑
    onSelectInnerChange(selectedInnerRowKeys, selectedInnerRows, line) {
      const { key: lineKey, innerData } = line;
      this.selectedInnerRowKeys = selectedInnerRowKeys;
      this.selectedInnerRows = selectedInnerRows;
      if (selectedInnerRows.length === innerData.length) {
        // 如果内嵌表格是全选操作，则需要选择内嵌表格所属行
        this.selectedOuterRowKeys.push(lineKey);
      } else {
        // 如果不是全选，而且操作行所在的内嵌表格id已经被选择，则需要清楚已经全选的操作
        const index = this.selectedOuterRowKeys.indexOf(lineKey);
        index > -1 && this.selectedOuterRowKeys.splice(index, 1);
      }
    }
  }
};
