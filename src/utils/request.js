import axios from 'axios';
import BaseConfig from '@/baseconfig';
import Vue from 'vue';
import { Message } from 'element-ui';

Vue.prototype.$message = Message;
const BASE_URL = BaseConfig.reqURL;

export function ErrorMessage(message) {
  if (typeof message === 'string') {
    return message;
  }
  // let errorMsg = '';
  // if (typeof message === 'object') {
  //   for (const item in message) {
  //     if (Object.prototype.hasOwnProperty.call(message, item)) {
  //       const items = message[item];
  //       if (items instanceof Array) {
  //         for (let index = 0, len = items.length; index < len; index += 1) {
  //           errorMsg += `${items[index]}\n`;
  //         }
  //       } else {
  //         errorMsg += `${items}\n`;
  //       }
  //     }
  //   }
  // }
  // return errorMsg;
}

// 创建axios实例
const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  });
  return instance;
};

/**
 * axios 请求的中间件,可根据需求，修改header
 * @param {Object} instance axios实例
 */
const reqmiddleware = (instance) => {
  instance.interceptors.request.use((config) => {
    const Config = config;
    if (localStorage.getItem('token')) {
      Config.headers = {
        Authorization: `token ${localStorage.getItem('token')}`,
      };
    }
    return Config;
  }, (err) => {
    throw new Error(err);
  });
};

/**
 *
 * axios 请求成功后响应的中间件
 * @param {Object} instance axios实例
 */
const resMiddleware = (instance) => {
  instance.interceptors.response.use((res) => {
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
    return res;
  }, (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 500:
          Vue.prototype.$message.error({
            message: '服务器错误',
            type: 'error',
          });
          break;
        case 401:
          Vue.prototype.$message.error({
            message: '请先登录',
            type: 'error',
          });
          window.location.href = '#/';
          return true;
        case 404:
          throw new Error('请求路径不存在', err.response.data.msg);
        default:
          break;
      }
      return Promise.reject(err);
    }
    Vue.prototype.$message.error({
      message: '网络错误，请联系管理员',
      type: 'error',
    });
    return -1;
  });
};

const checkReq = async (params) => {
  const { url, method, param } = params;
  const instance = axiosInstance();
  reqmiddleware(instance);
  resMiddleware(instance);
  return instance({
    url,
    method: method || 'get',
    data: param || {},
  }).then((res) => {
    if (res) {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res;
    }
    return -1;
  });
};

// 请求实例
const publicReq = async (params) => {
  const { url, method, param } = params;
  const instance = axiosInstance();
  reqmiddleware(instance);
  resMiddleware(instance);
  return instance({
    url,
    method: method || 'get',
    data: param || {},
  }).then((res) => {
    if (res) {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      if (res.data.meta.code !== 0 && res.data.meta.code !== 10170) {
        Vue.prototype.$message.error({
          message: ErrorMessage(res.data.meta.message),
          type: 'error',
        });
        switch (res.data.meta.code) {
          case 10101: // 无效的token
            localStorage.clear();
            window.location.href = '#/';
            break;
          default:
            break;
        }
      } else {
        return res;
      }
    }
    return -1;
  }).catch((err) => {
    if (err.response) {
      switch (err.response.status) {
        case 500:
          Vue.prototype.$message.error({
            message: '服务器错误',
            type: 'error',
          });
          break;
        case 401:
          Vue.prototype.$message.error({
            message: '请先登录',
            type: 'error',
          });
          window.location.href = '#/';
          return true;
        case 404:
          throw new Error('请求路径不存在', err.response.data.msg);
        default:
          break;
      }
      return Promise.reject(err);
    }
    Vue.prototype.$message.error({
      message: '网络错误，请联系管理员',
      type: 'error',
    });
    return -1;
  });
};

// 请求超时函数
const timeoutfn = (delay) => {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve('请求超时');
    }, delay);
  });
  return data;
};

// 单个请求 存在请求超时
export async function req(params, delay = 10000) {
  try {
    const response = await Promise.race([timeoutfn(delay), publicReq(params)]);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// 表单检查请求封装
export async function reqCheck(params, delay = 10000) {
  try {
    const response = await Promise.race([timeoutfn(delay), checkReq(params)]);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// 多请求 async loop
// export async function multiRequest(reqArr) {
//   const res = [];
//   if (typeof reqArr !== 'object' && !(reqArr instanceof Array)) {
//     throw new Error(`please set ${reqArr} to Array`);
//   }
//   try {
//     const proms = reqArr.map(ele =>
//       publicReq(
//         {
//           url: ele.url,
//           method: ele.method || '',
//           param: ele.param || {},
//         },
//       ),
//     );
//     for (const promise of proms) {
//       const response = await promise;
//       if (response.status !== 200) {
//         throw new Error(response.statusText);
//       }

//       res.push(response);
//     }
//     return Promise.resolve(res);
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// 多请求 promise
export async function multiRequestWithPromise(reqArr) {
  if (typeof reqArr !== 'object' && !(reqArr instanceof Array)) {
    throw new Error(`please set ${reqArr} to Array`);
  }
  try {
    const proms = reqArr.map(ele =>
      publicReq(
        {
          url: ele.url,
          method: ele.method || '',
          param: ele.param || {},
        }),
    );
    const res = await Promise.all(proms);
    return res;
  } catch (error) {
    throw new Error(error);
  }
}


export const reqBaseUrl = BASE_URL;

