<template>
  <div class="home">
    <!-- <span class="red">{{ count }}</span> <br />
    <button @click="countAdd">{{ btnText }}</button> -->
    <h2>1.嵌套表格，无展开收起，子表格表头自定义，父表格行隐藏</h2>
    <Table1
      :outerColumns="outerColumns"
      :outerData="outerData"
      :innerColumns="innerColumns"
    />
    <h2>2.嵌套表格，可展开收起，子表格无表头</h2>
    <Table2
      :outerColumns="outerColumns"
      :outerData="outerData2"
      :innerColumns="innerColumns2"
    />
    <h2>3.树状表格内嵌组件</h2>
    <Table3 />
  </div>
</template>

<script>
// import { ref } from "@vue/composition-api";

import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const outerColumns = [
  { title: "物料", dataIndex: "date", key: "date", width: 300 },
  { title: "待处理量/总申请量", dataIndex: "name", key: "name", width: 300 },
  { title: "状态", dataIndex: "state", key: "state", width: 300 },
  { title: "查看", dataIndex: "upgradeNum", key: "upgradeNum", width: 300 },
  { title: "操作", dataIndex: "creator", key: "creator", width: 300 }
];

const outerData = [];
for (let i = 0; i < 2; ++i) {
  outerData.push({
    key: i,
    title: "title 姓名：汤圆； 性别：男； 年龄：三岁； 爱好：吃喝玩",
    innerData: [
      {
        key: 1 + "" + i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
        state: "Upgraded: 56",
        creator: "koushuling"
      },
      {
        key: 2 + "" + i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        state: "Upgraded: 56",
        upgradeNum: "Upgraded: 56",
        creator: "creator"
      }
    ]
  });
}

const innerColumns = [
  { title: "", dataIndex: "date", key: "date", width: 300 },
  { title: "", dataIndex: "name", key: "name", width: 300 },
  { title: "", dataIndex: "state", key: "state", width: 300 },
  { title: "", dataIndex: "upgradeNum", key: "upgradeNum", width: 300 },
  { title: "", dataIndex: "creator", key: "creator", width: 300 }
];

const outerData2 = [];
for (let i = 0; i < 2; ++i) {
  outerData2.push({
    key: i,
    date: "2014-12-24 23:12:00",
    name: "This is production name",
    upgradeNum: "Upgraded: 56",
    state: "Upgraded: 56",
    creator: "koushuling",
    innerData: [
      {
        key: 1 + "" + i,
        type: "This is type"
      },
      {
        key: 2 + "" + i,
        type: "This is type"
      }
    ]
  });
}

const innerColumns2 = [
  { title: "", dataIndex: "1", key: "1", width: 300 },
  { title: "", dataIndex: "2", key: "2", width: 300 },
  { title: "", dataIndex: "type", key: "type", width: 300 },
  { title: "", dataIndex: "3", key: "3", width: 300 },
  { title: "", dataIndex: "4", key: "4", width: 300 }
];

export default {
  name: "Home",

  data() {
    return {
      outerColumns, // 外层表格列名
      outerData, // 外层表格数据
      outerData2,
      innerColumns, // 内嵌表格列名
      innerColumns2 // 内嵌表格列名
    };
  },
  components: {
    Table1,
    Table2,
    Table3
  }
  // setup() {
  //   // 定义一个不需要改变的数据
  //   const btnText = "点这个按钮上面的数字会变";
  //   // 定义一个 count 的响应式数据，并赋值为 0
  //   const count = ref(0);
  //   // 定义一个函数，修改 count 的值。
  //   //
  //   const countAdd = () => {
  //     count.value++;
  //   };
  //   // 导出一些内容给上面的模板区域使用
  //   return {
  //     btnText,
  //     count,
  //     countAdd
  //   };
  // }
};
</script>

<style lang="less" scoped>
h2 {
  text-align: left;
  margin: 5px 10px;
  color: rebeccapurple;
}
</style>
