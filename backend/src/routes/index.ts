import express from 'express'
import multer from 'multer'
import path from 'path'

//funtion
import render_chat   from '../functions/RenderChat'

//Config
import Config from '../config'

const router = express.Router()

router.post('/', multer(Config).single('arq'), (req, res) => {
  res.redirect(`/get-chat/${req.file?.filename}`)
})

router.get('/get-chat/:file_name', async (req, res) => {
  res.send(await render_chat(req.params.file_name))
})

export default router;