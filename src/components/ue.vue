<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      id: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    watch: {
      defaultMsg: function (n,o) {
        // this.$emit('defaultMsg',n)
        this.editor.setContent(n)
        // console.log('参数更改' + n)
      },
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      },
      getUEContentTxt() {
    // 获取纯文本内容方法
    return this.editor.getContentTxt();
  }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
