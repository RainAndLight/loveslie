let util = {}

util.tableRowFormat = function(row, item) {
    if (item.type === 'format') {
        return item.format[row[item.prop]]
    } else if (item.type === 'dateTime') {
        return row[item.prop] ? util.standardToDateTime(row[item.prop]) : '-'
    } else if (item.type === 'stampDateTime') {
        return row[item.prop] ? util.timestampToDateTime(row[item.prop]) : '-'
    } else if (item.type === 'listDateTime') {
        return row[item.prop] ? util.listDateTime(row[item.prop]) : '-'
    } else if (item.type === 'func') {
        return item.func(row, item.prop)
    } else {
        return row[item.prop]
    }
}
// 时间戳转化为格式化时间
util.timestampToDateTime = function(value) {
    if (!value) {
        return ''
    } else {
        var date = new Date(value)
        var YY = date.getFullYear() + '-'
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        return YY + MM + DD + ' ' + hh + mm + ss
    }
}
// 标准时间转化成格式化时间
util.standardToDateTime = function(value) {
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    if (!value) {
        return ''
    } else {
        var datetime = new Date(value)
        let y = datetime.getFullYear()
        let m = datetime.getMonth() + 1
        let d = datetime.getDate()
        let h = datetime.getHours()
        let mm = datetime.getMinutes()
        let s = datetime.getSeconds()
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
    }
}
util.listDateTime = function(value) {
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    if (!value) {
        return ''
    } else {
        var datetime = new Date(value[0])
        let y = datetime.getFullYear()
        let m = datetime.getMonth() + 1
        let d = datetime.getDate()
        let listOne = y + '-' + add0(m) + '-' + add0(d)
        var datetime1 = new Date(value[1])
        let y1 = datetime1.getFullYear()
        let m1 = datetime1.getMonth() + 1
        let d1 = datetime1.getDate()
        let listTwo = y1 + '-' + add0(m1) + '-' + add0(d1)
        return listOne + ' 至 ' + listTwo
    }
}

export default util
