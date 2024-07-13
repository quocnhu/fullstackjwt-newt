const testApi = (req, res) => {
    return res.status(200).json({
        message: 'ok',
        data:'test api quoc nhu'
    })
}
export {testApi}