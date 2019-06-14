const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const user = await db.auth.check_user({ username })
        if (!user[0]) { return res.sendStatus(401) }
        const { password: hash } = user[0]
        const authUser = bcrypt.compareSync(password, hash)
        if (!authUser) {
            return res.sendStatus(401)
        }
        delete user[0].password
        req.session.user = user
        res.status(200).send(req.session.user)
    },

    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.auth.check_user({ username })
        if (user[0]) { return res.sendStatus(409) }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const authorized = await db.auth.register_user({ username, password: hash })
        delete authorized.password
        req.session.user = authorized
        res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy(() => res.sendStatus(200))
    },

    currentUser:(req,res)=>{
        res.send(req.session.user)
    }
}