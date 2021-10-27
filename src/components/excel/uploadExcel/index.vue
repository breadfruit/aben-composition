<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action
    accept=".xlsx, .xls"
    :auto-upload="false"
    type="file"
    @change="handleClick"
  >
    <template #trigger>
      <el-button size="small" type="primary">select file</el-button>
    </template>
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >upload to server</el-button
    >
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import XLSX from "xlsx";
export default defineComponent({
  props: {
    beforeUpload: {
      type: Function,
    },
    onSuccess: {
      type: Function,
    },
  },
  setup(props) {
    const excelData = reactive({
      header: null,
      results: null,
    });
    const submitUpload = (e) => {
      console.log(e);
    };

    const getHeaderRow = (sheet: { [key: string]: any }) => {
      const header: string[] = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      const R = range.s.r;
      for (let C = range.s.c; C < range.e.c; C++) {
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        let hdr = "";
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        if (hdr === "") {
          hdr = "UNKNOWN" + C;
        }
        header.push(hdr);
      }
      return header;
    };
    const generateData = (header: any, results: any) => {
      if (!props.onSuccess) return;
      excelData.header = header;
      excelData.results = results;
      props.onSuccess(excelData);
    };
    const isExcel = (file: File) => /\.(xlsx|xls|csv)$/.test(file.name);
    const handleClick = (files) => {
      if (!files) return;
      if (!isExcel(files)) return;

      if (files) {
        const rawFiles = files.raw;
        if (!props.beforeUpload){
          renderDate(rawFiles);
          return ;
        }
        const before = props.beforeUpload(rawFiles);
        if (before) {
          renderDate(rawFiles)
        }
      }
    };
    const renderDate = (rawFiles) => {
      const reader = new FileReader();
      //readAsArrayBuffer第一个参数读的是file对象
      reader.onload = (e) => {
        const data = (e.target as FileReader).result;

        const workbook = XLSX.read(data, { type: "array" });

        const firstSheetName = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[firstSheetName];

        const header = getHeaderRow(worksheet);

        const results = XLSX.utils.sheet_to_json(worksheet)

        generateData(header, results)
      };
      reader.readAsArrayBuffer(rawFiles);
    };
    return {
      submitUpload,
      handleClick,
    };
  },
});
</script>