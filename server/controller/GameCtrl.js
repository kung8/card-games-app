module.exports={
    getCards:async(req,res)=>{
        const db = req.app.get('db')
        const cards = await db.games.get_cards()
        res.send(cards)
    }
}