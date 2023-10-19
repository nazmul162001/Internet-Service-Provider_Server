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
exports.FaqService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createFaq = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faq.create({
        //@ts-ignore
        data,
    });
    return result;
});
// update faq
const updateFaq = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.update({
        where: {
            id,
        },
        //@ts-ignore
        data,
    });
    return faq;
});
// delete faq
const deleteFaq = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.faq.delete({
        where: {
            id,
        },
    });
    return faq;
});
// get all faq
const getAllFaq = () => __awaiter(void 0, void 0, void 0, function* () {
    const faqs = yield prisma_1.default.faq.findMany();
    return faqs;
});
exports.FaqService = {
    createFaq,
    getAllFaq,
    deleteFaq,
    updateFaq,
};
