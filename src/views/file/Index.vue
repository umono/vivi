<template>
    <div class="pt-20 px-6">
        <h1>File仓库</h1>
        <n-data-table :columns="columns" :data="data" />
    </div>
</template>

<script lang="ts">
import { NButton } from 'naive-ui'
import { RowData } from 'naive-ui/es/data-table/src/interface';
export default defineComponent({
    name:"File",
    setup() {
        const loading = ref(true);
        const createColumns = (
            { Share, Open }: {
                Share: (rowData: RowData) => void;
                Open: (rowData: RowData) => void;
            }) => {
            return [
                {
                    title: 'File Name',
                    key: 'name'
                },
                {
                    title: 'File CID',
                    key: 'cid'
                },
                {
                    title: 'File Size',
                    key: 'size'
                },
                {
                    title: 'Status',
                    key: 'status'
                },
                {
                    title: 'Action',
                    key: 'actions',
                    render(row:any) {
                        return [h(
                            NButton,
                            {
                                strong: true,
                                tertiary: true,
                                size: 'small',
                                onClick: () => Share(row)
                            },
                            { default: () => 'Share' }
                        ),
                        h(
                            NButton,
                            {
                                strong: true,
                                tertiary: true,
                                size: 'small',
                                onClick: () => Open(row)
                            },
                            { default: () => 'Open' }
                        )
                        ]
                    }
                }
            ]
        }

        const createData = (): RowData[] => [
            {
                key: 0,
                name: 'user.jpg',
                cid: 'QmUU1CbDaTtLNUpNjPQEJo4b9Yj1ahF4i16p4DNM7cwPCp',
                size: '174 KB',
                status: 'Success',
            },
        ]
        return {
            loading,
            columns: createColumns({
                Share(rowData) {
                    console.log('share to ' + rowData.name, rowData);
                },
                Open(rowData) {
                    console.log("open link" + rowData.cid);
                }
            }),
            data: createData()
        }
    },
    mounted() {
        let that = this;
        setTimeout(() => {
            that.loading = false;
        }, 1500)
    }
})
</script>

<style lang="scss" scoped>

</style>