/* 
   时间转换
 */
export const formatTime = (time) => {
	if (!time) return 'wrong time format'
	const newTime = new Date(time);
	const year = newTime.getFullYear()
	const month = newTime.getMonth() + 1 < 10 ? '0' + newTime.getMonth() : newTime.getMonth()
	const day = newTime.getDay() < 10 ? '0' + newTime.getDay() : newTime.getDay()
	const hour = newTime.getHours() < 10 ? '0' + newTime.getHours() : newTime.getHours()
	const minute = newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes()
	const second = newTime.getSeconds() < 10 ? '0' + newTime.getSeconds() : newTime.getSeconds()
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
