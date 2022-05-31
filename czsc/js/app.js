// const btnLists = ['增加', '编辑', '修改']
const loginTypes = [
  { id: 1, name: '网站' },
  { id: 2, name: '客户端' },
  { id: 3, name: '小程序' },
]

const passwordTypes = [
  { id: 1, name: '账号、密码类型', value: '输入账号、密码，点击【登录】按钮，进入系统首页，' },
  { id: 2, name: 'UKEY类型', value: '插入带Key的U盘，即可登录成功，' }
]


const btnLists = [
  { text: "增加", value: "点击【增加】按钮，进入新增页面，填入信息，点击【保存】按钮，即可添加新的记录。" },
  { text: "编辑", value: "点击【编辑】按钮，进入编辑页面，修改信息，点击【保存】按钮，即可修改原信息。" },
  { text: "修改", value: "点击【修改】按钮，进入修改页面，修改信息，点击【保存】按钮，即可修改原信息。" },
  { text: "删除", value: "选择一条记录，点击【删除】按钮，弹出删除提示框，点击【确定】，即可删除记录，点击【取消】，即可取消删除操作。" },
  { text: "导入", value: "点击【导入】按钮，弹出导入提示框，选择文件，点击【导入】，即可导入记录。点击【取消】，即可导入删除操作。" },
  { text: "统计概览", value: "点击【统计概览】按钮，即可通过图表的方式来查看数据。" },
  { text: "导出", value: "点击【导出】按钮，即可导出xls文件。" }
]

const app = new Vue({
  el: '#app',
  data: {
    tabAction: '',
    menuname: '',
    descChecked: false,
    describe: '',
    selected: '',
    searchChecked: false,
    searchText: '',
    // btns: btnLists,
    checkList: [],
    btns: btnLists,
    logTypes: loginTypes,
    login: '',
    webLink: '',
    appName: '',
    wxName: '',
    pwdTypes: passwordTypes,
    pwd: ''
  },
  methods: {
    resetDesc(descChecked) {
      console.log(descChecked)
      if (!descChecked) {
        this.describe = '';
      }
    },
    resetSearch(searchChecked) {
      if (!searchChecked) {
        this.searchText = '';
      }
    },
    //重置login输入框
    resetLogin(val) {
      if (val == 1) {
        this.appName = ''
        this.wxName = ''
      } else if (val == 2) {
        this.webLink = ''
        this.wxName = ''
      } else {
        this.webLink = ''
        this.appName = ''
      }
    },
    resetPwd(val) {
      console.log(val)
    },
    clickCopyBtn(event) {
      const btnId = '#' + event.currentTarget.id;
      const clipboard = new ClipboardJS(btnId);

      clipboard.on("success", e => {
        this.$message({
          type: "success",
          message: "复制成功",
          duration: 3000,
          showClose: true,
        });
        //这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        this.$message({
          type: "error",
          message: "复制失败",
          duration: 300,
          showClose: true,
        });
        clipboard.destroy();
      });
    },
    // checkChange(val){
    //   this.checkList=val;
    //   console.log(this.checkList)
    // }
  },
  components: {
    cmenus, clogins
  }
});