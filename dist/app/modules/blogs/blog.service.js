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
exports.BlogService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.create({
        //@ts-ignore
        data,
    });
    return result;
});
// update blog
const updateBlog = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.update({
        where: {
            id,
        },
        //@ts-ignore
        data,
    });
    return blog;
});
// delete blog
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.delete({
        where: {
            id,
        },
    });
    return blog;
});
// get all blog
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield prisma_1.default.blog.findMany();
    return blogs;
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.findUnique({
        where: {
            id,
        },
    });
    return blog;
});
exports.BlogService = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
