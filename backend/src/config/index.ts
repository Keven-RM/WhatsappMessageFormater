import multer   from "multer"
import path     from "path"
import crypto   from "crypto"
import fs       from "fs"

// const dir = path.resolve('src', 'data')

// const Config = {
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, dir);
//     },
//     filename: (req, file, cb) => {
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) return cb(err, __filename);

//         file.filename = `${hash.toString("hex")}-${file.originalname}`;

//         cb(null, file.filename);
//       });
//     }
//   })
// };

// const CheckFolder = () => {
//   if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
//     return Config;  
//   }else{
//     return Config;  
//   }
// }

// CheckFolder()

// export default Config;

const upload = () => {
  const folder = crypto.randomUUID()

  const storage = multer.diskStorage({
    destination(req, file, callback) {
      fs.mkdirSync(path.resolve('src', 'data', folder), { recursive: true })
      callback(null, path.resolve('src', 'data', folder))
    },
    filename(req, file, callback) {
      callback(null, file.originalname)
    },
  })

  return multer({ storage: storage })
    .fields([
      {
        name: 'archive',
        maxCount: 1
      }
    ])
}

export default upload;