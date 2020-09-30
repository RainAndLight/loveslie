<template>
    <div class="foo" v-loading="loading">
        <!-- <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="item in collapseOption" :key="item.id" :title="item.title" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
        </el-collapse> -->
        <h4 class="titleH4">全部列表</h4>
        <div class="header">
            <el-input placeholder="根据工具名检索" size="mini" style="width:200px;margin-left:10px"> </el-input>
            <el-button icon="el-icon-search" circle size="mini" style="margin-left:10px" @click="search"></el-button>
            <div class="flexEnd" style="flex:1;">
                <el-button type="primary" size="mini" @click="openDialog">新增</el-button>
            </div>
        </div>
        <el-table
            :data="tableData.list"
            highlight-current-row
            height="calc(70vh)"
            size="mini"
            style="width:100% ;marginTop:10px"
        >
            <!-- <el-table-column type="selection" width="50" align="center"> </el-table-column> -->
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-form-item label="工具名称">
                            <span>{{ scope.row.utilName }}</span>
                        </el-form-item>
                        <el-form-item label="工具类型">
                            <span>{{ scope.row.utilType }}</span>
                        </el-form-item>
                        <el-form-item label="使用终端">
                            <span>{{ scope.row.useTerminal }}</span>
                        </el-form-item>
                        <el-form-item label="官方网址">
                            <el-link :href="scope.row.masterAddress" type="primary" target="_blank">{{
                                scope.row.masterAddress
                            }}</el-link>
                        </el-form-item>
                        <el-form-item label="网盘">
                            <el-link :href="scope.row.panAddress" type="primary" target="_blank">{{
                                scope.row.panAddress
                            }}</el-link>
                        </el-form-item>
                        <el-form-item label="提取码">
                            <span>{{ scope.row.panPassword }}</span>
                        </el-form-item>
                        <el-form-item label="工具描述">
                            <span>{{ scope.row.utilDescription }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                v-for="(item, index) in tableData.columnList"
                :key="index"
                :align="item.center || 'center'"
                :width="item.width || ''"
                :label="item.title"
                :prop="item.prop"
            >
                <template slot-scope="scope">
                    <template>{{ $util.tableRowFormat(scope.row, item) }}</template>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="editUtil(scope.row)">编辑 </el-button>
                    <el-button type="danger" size="mini" @click="delUtil(scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="flexEnd">
            <el-pagination
                style="marginTop:10px"
                @size-change="handleSizeChange"
                :page-sizes="[5, 10, 20]"
                layout="total, sizes, prev, pager, next, jumper"
                :current-page="page.pageNum"
                :page-size="page.pageSize"
                :total="tableData.total"
                @current-change="changePage"
            >
            </el-pagination>
        </div>

        <el-dialog :close-on-click-modal="false" title="收货地址" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" size="small" label-width="100px" label-position="right">
                <el-form-item label="工具名称">
                    <el-input v-model="form.name" style="width:100%" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="工具类型">
                    <el-input v-model="form.name" style="width:100%" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="使用终端">
                    <el-select style="width:100%" v-model="form.region" placeholder="请选择使用终端">
                        <el-option label="桌面级软件" value="1"></el-option>
                        <el-option label="web网站" value="2"></el-option>
                        <el-option label="移动APP" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="官方网址">
                    <el-input v-model="form.masterAddress" style="width:100%" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="网盘">
                    <el-input v-model="form.panAddress" style="width:100%" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="提取码">
                    <el-input v-model="form.panPassword" style="width:100%" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="工具描述">
                    <el-input
                        type="textarea"
                        v-model="form.utilDescription"
                        style="width:100%"
                        placeholder="请输入"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'utils',
    props: {},
    data() {
        return {
            dialogFormVisible: false,
            loading: false,
            form: {},
            // activeName: '',
            // collapseOption: [
            //     {
            //         id: 1,
            //         title: 'v2ray 梯子'
            //     }
            // ]
            page: {
                pageNum: 1,
                pageSize: 10,
                sortList: [
                    {
                        sortKey: 'createdTime',
                        sortValue: 'desc'
                    }
                ]
            },
            selection: [],
            tableData: {
                pageNum: 1,
                pageSize: 10,
                total: 0,
                columnList: [
                    {
                        title: '工具名称',
                        prop: 'utilName'
                    },
                    {
                        title: '工具类型',
                        prop: 'utilType'
                        // type: 'format',
                        // format: {
                        //     '1': '桌面级软件',
                        //     '2': 'web网站',
                        //     '3': '移动APP'
                        // }
                    },
                    {
                        title: '上传时间',
                        prop: 'createdTime',
                        type: 'dateTime'
                    }
                ],
                list: [
                    {
                        utilName: 'v2ray',
                        utilType: '免费梯子',
                        createdTime: '2020-9-30 09:49',
                        masterAddress: 'https://v2ray.com/chapter_00/install.html',
                        panAddress: 'https://pan.baidu.com/s/1nd3rUag8flzd85hhSqPFvw',
                        panPassword: 'i4kb',
                        utilDescription: '翻墙软件',
                        useTerminal: 'PC'
                    }
                ]
            }
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        openDialog() {
            this.dialogFormVisible = true
        },
        search() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 1000)
        },
        editUtil(row) {},
        delUtil(row) {},
        getData() {
            // this.$axios({
            //     url: '/api/declaration/page',
            //     method: 'post',
            //     data: this.page
            // }).then(data => {
            //     if (data.returnCode === 200) {
            //         this.tableData.total = data.returnData.total
            //         this.tableData.pageNum = data.returnData.pageNum
            //         this.tableData.pageSize = data.returnData.pageSize
            //         this.tableData.list = data.returnData.list
            //     } else {
            //         this.$message({
            //             type: 'error',
            //             message: data.returnMsg
            //         })
            //     }
            // })
        },
        changePage(value) {
            this.page.pageNum = value
            this.getData()
        },
        handleSizeChange(value) {
            this.page.pageSize = value
            this.getData()
        },
        tableSelectionChange(value) {
            this.selection = value
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.foo {
    padding: 10px;
    .titleH4 {
        text-align: center;
        margin: 20px 0;
    }
    .header {
        display: flex;
        align-items: center;
    }
    & /deep/ .demo-table-expand {
        font-size: 0;
    }
    & /deep/ .demo-table-expand label {
        width: 100px;
        color: #99a9bf;
    }
    & /deep/ .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 5px;
        width: 100%;
    }
    .flexEnd {
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
    }
}
</style>
