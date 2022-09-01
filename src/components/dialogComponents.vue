<template>
    <el-dialog title="我的笔记" :visible.sync="detailVisible" width="35%">
        <el-input
          placeholder="请书写您的笔记..."
          v-model="input"
          :autosize="{ minRows: 8}"
          type="textarea"
          maxlength="300"
          show-word-limit
          class="notes">
        </el-input>
        <div class="exit"><el-button @click="finish">完成</el-button></div>
    </el-dialog>
</template>

<script>
import { getNoteForQuestion, makeNoteForQuestion } from '@/api/query.js'
export default {
    data() {
        return {
            input: '',
            preinput: '',
            detailVisible: false,
            qid: -1
        }
    },
    methods: {
        init(data) {
            this.detailVisible = true;
            this.qid = data;
            getNoteForQuestion(this.$store.getters.user.user_id, this.qid).then((r) => {
                this.input = r.data ? r.data : '';
                this.preinput = this.input;
            });
        },
        finish() {
            if (this.input !== this.preinput) {
                makeNoteForQuestion(this.$store.getters.user.user_id, this.qid, { note: this.input }).then((r) => {
                    this.$message('笔记已更新！');
                })
            }
            this.detailVisible = false;
        }
    }
}
</script>

<style scoped lang="scss">
.exit {
    display: flex;
    justify-content: flex-end;
    .el-button {
        margin-top: 10px;
    }
}
</style>