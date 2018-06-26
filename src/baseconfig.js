const HOST = window.location.host;
let newHost;
if (HOST === 'localhost:8000' || HOST === 'kingdom.fogcloud.io') {
  newHost = 'cnapitest.fogcloud.io';
} else {
  newHost = '';
}

export default {
  reqURL: `https://${newHost}/v3_1`, // 'https://cnapitest.fogcloud.io/v3_1', // 请求HOST路径
  uploadTokenURL: `https://${newHost}`, // 获得OSS TOKEN的路径
  uploadHost: 'https://mxchip-fog.oss-cn-beijing.aliyuncs.com', // 上传到OSS的HOSt
};

