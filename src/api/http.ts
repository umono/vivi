import axios from 'axios'

const env = import.meta.env
const http = axios.create({
    timeout: 30000
})
http.interceptors.request.use((config: any) => {
    config.headers['Content-Type'] = "application/json";
    return config;
});


const FileUpload: any = (cid: string, name: string) => {
    const url = import.meta.env.VV_FILE_URL_PIN
    http.interceptors.request.use((config: any) => {
        config.headers['authorization'] = "Bearer " + import.meta.env.VV_FILE_AUTH_KEY;
        return config;
    })
    const param = { cid: cid, name: name };
    console.log(param)
    http.post(url, param).then(r => {
        console.log('ok', r);
    }).catch(r => {
        console.log("err", r);
    })
}

const NftTradeData: any = () => {
    const url = env.VV_NFT_TRADE_URL
    const data = env.VV_NFT_TRADE_DATA
    http.interceptors.request.use((config: any) => {
        config.headers['X-API-KEY'] = env.VV_NFT_TRADE_KEY
        return config;
    })
    return http.post(url, data).then(r => {
        return r.data;
    })
    // .catch(r => {
    // console.log("[nft err]:",r);
    // })
}

export {
    FileUpload,
    NftTradeData
}