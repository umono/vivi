<template>
    <n-upload :action="url" :headers="headers" @finish="handleFinish" :name="fileName" :show-file-list="false">
        <n-button strong secondary>上传文件</n-button>
    </n-upload>
</template>

<script lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import { FileUpload } from '@/api/http';
export default defineComponent({
    props: ['src', 'fileName'],
    emits: ['upSuccess'],
    setup(props, ctx) {
        const headers = ref({
            'authorization': "Basic "+import.meta.env.VV_FILE_AUTH_KEY,
        } as any);
        let fileName = props.fileName;
        if (!fileName) {
            fileName = 'file';
        }

        const handleFinish = ({
            file,
            event
        }: {
            file: UploadFileInfo
            event?: ProgressEvent
        }) => {
            const e: any = event?.target
            const res = JSON.parse(e.response);
            console.log(res);
            
            // if (res.code != 200) {
            //     return window.$message.error(res.msg || "上传失败:(")
            // }
            // ctx.emit('upSuccess', res.data.url);
            FileUpload(res.Hash,res.Name)
            return file
        }
        return {
            fileName,
            url: import.meta.env.VV_FILE_URL,
            headers,
            handleFinish,
        }
    },
    methods: {
        uploadFile() {

        },
    }
})
</script>