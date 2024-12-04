export interface Room {
  name: string;
  [key: string]: any; // 可扩展字段
}

export interface Message {
  text: string;
  timestamp: number;
}

export interface ClientStatus {
  id: string; // 客户端唯一标识符
  name: string; // 客户端名称（可选）
  status: string; // 当前状态（如"睡觉"、"工作"）
  timestamp: number; // 状态更新时间戳
}
export interface GunAck {
  err?: string; // 如果出错，Gun.js 会返回错误信息
  ok?: any; // 如果成功，Gun.js 会返回确认数据
}
