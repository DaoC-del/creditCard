import Gun from 'gun';

const gun = Gun({
  peers: ['https://congenial-invention-vrx7r59jp7rfp5jv-8765.app.github.dev/gun'], // 中继服务器地址
  radisk: true, // 使用内存缓存数据
  localStorage: false, // 禁用本地存储
  retry: 5, // 设置重试次数
  log:true,
});

export default gun;
