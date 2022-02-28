"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
// const dir = path.resolve(__dirname, "..", "..", "src", "upload");
const dir = path_1.default.resolve('/', 'tmp');
const Config = {
    dest: './tmp/',
    storage: multer_1.default.diskStorage({
        // destination: (req, file, cb) => {
        //   cb(null, './tmp/');
        // },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    return cb(err, __filename);
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
};
exports.default = Config;
