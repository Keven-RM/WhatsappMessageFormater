import multer   from "multer"
import path     from "path"
import crypto   from "crypto"

// const dir = path.resolve(__dirname, "..", "..", "src", "upload");
const dir = path.resolve('/', 'tmp')

const Config = {
  dest: './tmp/',
    storage: multer.diskStorage({
    // destination: (req, file, cb) => {
    //   cb(null, './tmp/');
    // },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err, __filename);

        file.filename = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.filename);
      });
    }
  }),

};

const MulterConfig = () => {
  // if (!fs.existsSync(dir)){
  //     fs.mkdirSync(dir);
  //     return Config;
  // }else{
  //   return Config;
  // }

  return Config;
}

export default Config;