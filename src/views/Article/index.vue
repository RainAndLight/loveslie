<template>
    <div class="box">
        <el-form>
            <md-input v-model="form.title" icon="el-icon-search" name="title" placeholder="输入标题">
                标题
            </md-input>
            <div style="margin-top:10px;color:rgb(125,125,125)">编辑正文</div>
            <markdown-editor :height="650" style="margin-top:20px" ref="markdownEditor" v-model="form.content" />
            <div class="footerButton">
                <el-link>
                    markdown 富文本编辑器使用教程
                </el-link>
            </div>
            <div v-html="html" />
            <el-form-item label="上传封面图">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false"
                    list-type="picture-card"
                >
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload"
                        >上传到服务器</el-button
                    > -->
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    <!-- <i slot="default" class="el-icon-plus"></i> -->
                    <!-- <i slot="default" class="el-icon-plus"></i> -->
                    <div slot="file" slot-scope="{ file }">
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                        <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
            </el-form-item>
            <el-form-item label="选择频道">
                <el-select v-model="form.channel" clearable placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <div class="footer">
                <el-button round @click="look" type="info">保存本地草稿</el-button>
                <el-button round @click="look">预览</el-button>
                <el-button round @click="look" type="primary">提交</el-button>
            </div>
        </el-form>
        <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="true">
            <el-image :src="dialogImageUrl"></el-image>
        </el-dialog>
    </div>
</template>

<script>
import MdInput from '@/components/MDinput'
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
    name: 'editArticle',
    props: {},
    data() {
        return {
            content: '### 推荐使用warkdowm 来发表 技术文档',
            html: '',
            form: {
                title: '',
                content: '',
                channel: ''
            },
            fileList: [
                {
                    name: 'girl1.jpeg',
                    url: 'https://w.wallhaven.cc/full/g8/wallhaven-g8omme.png'
                },
                {
                    name: 'girl2.jpeg',
                    url: 'https://w.wallhaven.cc/full/5w/wallhaven-5w2689.jpg'
                }
            ],
            dialogImageUrl: '',
            dialogVisible: false,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ]
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        look() {
            this.html = this.$refs.markdownEditor.getHtml()
        },
        submitUpload() {
            this.$refs.upload.submit()
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePreview(file) {
            console.log(file)
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleDownload(file) {
            console.log(file)
        }
    },
    components: {
        MarkdownEditor,
        MdInput
    }
}
</script>

<style scoped lang="less">
.box {
    padding-bottom: 60px;
    position: relative;
    .footerButton {
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;
        padding-right: 10px;
        // color: red;
        // flex-direction: row-reverse;
    }
    .footer {
        // position: absolute;
        bottom: 0;
        padding: 10px;
        width: 900px;
        // height: 100px;
        background-color: rgb(249, 249, 249);
        // display: flex;
        // justify-content: flex-end;
        position: fixed;
        left: 0px;
        right: 0;
        bottom: 0px;
        width: 100%;
        height: 50px;
        background-color: #eee;
        z-index: 9999;
    }
}
</style>
