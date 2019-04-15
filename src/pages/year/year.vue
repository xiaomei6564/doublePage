<template>
  <div class="warp">
    <div>year</div>
      <div id="drop">Drop an XLSX / XLSM / XLSB / ODS / XLS / XML file here to see sheet data</div>
    <p><input type="file" @input="handleFile" name="xlfile" id="xlf" /> ... or click here to select a file</p>
    <hello></hello>
  </div>
</template>
<script>
// import main from '../../lib/main'
import Hello from '../../components/HelloWorld'
import store from '@/store'
import XLSX from 'XLSX'
export default {
  name: 'index',
  components: {
    'hello': Hello
  },
  data() {
    return {
      bannerHref: '',

    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addLis() {
        var xlf = document.getElementById('xlf');
        var drop = document.getElementById('drop');
        drop.addEventListener("dragenter", this.handleDragover, false);
        drop.addEventListener("dragover", this.handleDragover, false);
        drop.addEventListener("drop", this.onDropDown, false);
        // if(xlf.addEventListener) xlf.addEventListener('change', this.handleFile, false);
    },
    handleDragover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    },
    onDropDown(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        var f = files[0];
        readFile(f);
    },
    handleFile(e) {
        var files = e.target.files;
        var f = files[0];
        this.readFile(f);
    },
    readFile(file) {
        var name = file.name;
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var wb = XLSX.read(data, { type: "binary" });
            console.log(wb);
        };
        reader.readAsBinaryString(file);
    },
    loadData() {
      var rep = {
        bannerPosition: 'hasActive'
      };
      this.addLis();
      store.state.editShow=true;
    },
    
  }
}
</script>
<style scoped>
.warp {
  max-width: 750px;
  margin: 0 auto;
  background: #CCC;
}
</style>
