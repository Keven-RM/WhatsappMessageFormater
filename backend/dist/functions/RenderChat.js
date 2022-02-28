"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
//functions
const FormatMessage_1 = __importDefault(require("./FormatMessage"));
const ExportList_1 = __importDefault(require("./ExportList"));
const render_chat = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const LinesData = yield fs_1.default.promises.readFile(path_1.default.join(os_1.default.tmpdir(), `${filename}`), 'utf-8');
        if (LinesData) {
            const chat_list = [];
            const lines = LinesData.split(/\r?\n/); // Converte a linha em string
            lines.forEach((line) => {
                let message = (0, FormatMessage_1.default)(line);
                chat_list.push(message);
            }); //Renderiza as linhas
            const rendered_chat = (0, ExportList_1.default)(chat_list);
            return { FileName: filename.slice(33), chat: rendered_chat };
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = render_chat;
