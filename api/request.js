const BASE_URL = 'http://124.223.90.79' //本地开发基地址

const request = ({
	url,
	method,
	data
}) => {
	return new Promise((resolve, reject) => {
		return uni.request({
			url: BASE_URL + url,
			method: method || 'GET',
			data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
export default request
