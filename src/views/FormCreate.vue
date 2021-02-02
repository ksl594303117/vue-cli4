<template>
  <div class="form-div">
    <form-create
      v-model="fApi"
      :rule="rule"
      :option="option"
      @on-submit="onSubmit"
      :resetBtn="true"
    ></form-create>
  </div>
</template>

<script>
const cascaderOptions = [
  {
    value: "beijing",
    label: "北京",
    children: [
      {
        value: "gugong",
        label: "故宫"
      },
      {
        value: "tiantan",
        label: "天坛"
      },
      {
        value: "wangfujing",
        label: "王府井"
      }
    ]
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
        children: [
          {
            value: "fuzimiao",
            label: "夫子庙"
          }
        ]
      },
      {
        value: "suzhou",
        label: "苏州",
        children: [
          {
            value: "zhuozhengyuan",
            label: "拙政园"
          },
          {
            value: "shizilin",
            label: "狮子林"
          }
        ]
      }
    ]
  }
];
export default {
  name: "formCreatePage",
  data() {
    return {
      fApi: {},
      option: {
        form: { layout: "horizontal" },
        // form: {
        //   layout: "inline",
        //   labelCol: { span: 12 },
        //   wrapperCol: { span: 12 }
        // },
        row: { align: "middle", justify: "start", gutter: 24 },
        submitBtn: { innerText: "确认", block: true },
        resetBtn: { innerText: "重置", show: true, icon: "" }
      },
      rule: [
        {
          type: "input",
          field: "goods_name",
          title: "商品名称",
          validate: [{ type: "string", required: true, message: "不能为空" }]
        },
        {
          type: "datePicker",
          field: "created_at",
          title: "创建时间"
        },
        {
          type: "select",
          field: "goods_type",
          title: "商品类型",
          value: [1],
          options: [
            { value: 1, label: "高效" },
            { value: 2, label: "简单" }
          ]
        },
        {
          type: "select",
          field: "cate_id",
          title: "产品分类",
          value: ["104"],
          options: [
            { value: "104", label: "生态蔬菜", disabled: false },
            { value: "105", label: "新鲜水果", disabled: false }
          ],
          props: {
            mode: "multiple"
          }
        },
        {
          type: "radio",
          title: "是否包邮",
          field: "is_postage",
          value: "0",
          options: [
            { value: "0", label: "不包邮", disabled: false },
            { value: "1", label: "包邮", disabled: true }
          ]
        },
        {
          type: "cascader",
          title: "所在区域",
          field: "address",
          value: ["陕西省", "西安市", "新城区"],
          props: {
            options: cascaderOptions
          }
        },
        {
          type: "rate",
          field: "rate",
          title: "推荐级别",
          value: 3.5,
          props: {
            count: 10
          },
          validate: [
            {
              required: true,
              type: "number",
              min: 3,
              message: "请大于3颗星",
              trigger: "change"
            }
          ]
        },
        {
          type: "FormTable",
          field: "FormTable",
          title: "列信息"
          //   props: {
          //     options: [{ index: 1, type: "string", default: "haha" }],
          //     column: [{ label: "索引号", prop: "index", type: "input" }]
          //   }
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.fApi.validate(res => {
        console.log(res, this.fApi.fields(), this.fApi.formData());
      });
    }
  }
};
</script>

<style lang="less" scoped>
.form-div {
  width: 500px;
}
</style>
