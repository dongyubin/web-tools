const clogins={
  template: '#clogins',
  props:{
    cweblink:{
      type: String
    },
    cappname:{
      type: String
    },
    cwxname:{
      type: String
    },
    cpwd:{
      type: String
    }
  },
  methods:{
    linkText(webLink,appName,cwxname,cpwd){
      if(webLink&&cpwd){
        return '在IE11或谷歌浏览器地址栏中输入网址：'+webLink+'，敲回车键，进入系统登录页面，'+cpwd
      }else if(cwxname&&cpwd){
        return '微信中搜索小程序：'+cwxname+'，或者扫描下方二维码进行小程序,'+cpwd
      }else{
        return '安装【'+appName+'.exe】软件到电脑，双击打开软件，'+cpwd
      }
    }
  }
};
// const buttons = {
//   template: '#buttons',
//   props:{
//     cbtns:{
//       type: Array
//     }
//   }
// };

const cmenus = {
  template: '#menus',
  props: {
    name: {
      type: String
    },
    desc: {
      type: String
    },
    stext: {
      type: String
    }
  },
  methods: {
    lianText(name, desc, stext) {
      if (name && desc && stext) {
        return '【' + name + '】展示了' + desc + '的基本信息,还可以通过' + stext + '来搜索' + name
      } else if (name && stext) {
        return '【' + name + '】展示了' + name + '的基本信息,还可以通过' + stext + '来搜索' + name
      } else if (stext) {
        return '还可以通过' + stext + '来搜索' + name
      } else if (desc) {
        return '【' + name + '】展示了' + desc + '的基本信息'
      } else {
        return '【' + name + '】展示了' + name + '的基本信息'
      }
    }
  }
};

