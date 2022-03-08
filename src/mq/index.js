// 消息状态的最大缓存时间
const MAX_INTERVALE = 30000


// 多个消息状态
// key 区分
// start -> 注册 -> end -> 触发 -> 销毁

// key
// 重复key会重置 -> 重置 start 绑定的时间

// execute
// option
// -- maxInterval: 清除超过时间间隔的 start 消息
function MessageTrigger(execute = (() => {}), option = {}) {
    const { maxInterval } = option
    this.execute = execute
    this.maxInterval = maxInterval || MAX_INTERVALE

    this.messages = new Map([])
}

MessageTrigger.prototype.off = function(key) {
    const time = this.messages.get(key)
    if (time) this.messages.delete(key)
}

// 注册消息时间
MessageTrigger.prototype.start = function(key) {
    if (this.messages.has(key)) this.messages.delete(key)
    this.messages.set(key, (new Date).valueOf())

    // 定时器清除
    setTimeout(() => this.off(key), this.maxInterval)
}

MessageTrigger.prototype.end = function(key) {
    const time = this.messages.get(key)
    if (time) {
        this.messages.delete(key)
        this.execute(key, (new Date).valueOf() - time)
    }
}

export default MessageTrigger