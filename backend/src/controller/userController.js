const axios = require('axios')

module.exports = {

    async createUser(req, res) {
        try {
            const response = await axios.get('https://api.github.com/users/vitor-js')
            const myUser = response.data
            return res.json(myUser)
        }catch {
            return res.json({
                status:'Error',
                mensagem:'algo deu errado'
            })
        }
    },

    async userData(req, res) {
        const { email, password } = req.body

        return res.json({
            email:email,
            password:password,
            mensagem:'Esses sao os dados'
        })
    },

    async userDataParams(req, res) {
        const {email} = req.params
        return res.json(
            {
                email:email
            }
        )
    }


}
