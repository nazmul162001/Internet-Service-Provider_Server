"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
// user routes
router.get('/', blog_controller_1.BlogServiceController.getAllBlogs);
router.get('/:id', blog_controller_1.BlogServiceController.getSingleBlog);
router.post('/create-blog', blog_controller_1.BlogServiceController.createBlog);
router.patch('/:id', blog_controller_1.BlogServiceController.updateBlog);
router.delete('/:id', blog_controller_1.BlogServiceController.deleteBlog);
exports.BlogRoute = router;
