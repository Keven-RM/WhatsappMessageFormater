import multer from "multer"
import path from "path"
import crypto from "crypto"
import fs from "fs"

const upload = () => {
  const folder = crypto.randomUUID()

  const storage = multer.diskStorage({
    destination(req, file, callback) {
        fs.mkdirSync(path.resolve('src', 'data', folder), { recursive: true})
        callback(null, path.resolve('src', 'data', folder))
    },
    filename(req, file, callback) {
      callback(null, file.originalname)
    },
  })

  return multer({storage: storage})
  .fields([
    {
      name: 'arq',
      maxCount: 1
    }
    // ,{
    //   name: 'midia',
    //   maxCount: 8
    // }
  ])
}

export default upload;