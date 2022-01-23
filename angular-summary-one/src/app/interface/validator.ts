export enum validatorsStatus {
  VALID ="通过",
  INVALID = "未通过",
  PENDING = "正在进行校验",
  DISABLED = "禁用校验"
}

// 表单状态的解读：
// VALID: 通过了所有有效性检查。
// INVALID 至少有一个有效性检查失败了。
// PENDING：正在进行有效性检查，处于中间状态。
// DISABLED：被禁用，豁免了有效性检查。
// 这些状态值是互斥的。
