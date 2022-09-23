import express from 'express'
import multer from 'multer'
import path from 'path'

//funtion
import render_chat   from '../functions/RenderChat'

//Config
import upload from '../config'

const router = express.Router()

router.post('/', upload(), async (req, res) => {
  const { destination, originalname } = req.files?.archive[0]
  res.send(await render_chat(destination, originalname))
})

export default router;