import express from 'express'
import path from 'path'
import fs from 'fs'

import render_chat from '../functions/RenderChat'
import upload from '../uploadConfig'

const router = express.Router()

router.post('/', upload(), async (req, res) => {
  const path = req.files?.arq[0].path;
  const name = req.files?.arq[0].filename;
  const originalname = req.files?.arq[0].originalname;
  console.log(req.files?.arq[0])
  res.send(await render_chat(path, name, originalname))
});

router.get('/get_image', (req, res) => {
  var filePath = path.resolve('src', 'data', '9a34c0a5-9339-4b8a-a869-003f24f9c0fe', 'spiderman_custom.jpg');
  var stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'image/jpg',
    'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(res);
});

// const directoryPath = path.resolve('src', 'data', '46c7cff2-f84a-4519-a758-f6100928dd60')
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });

export default router;