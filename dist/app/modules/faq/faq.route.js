"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoute = void 0;
const express_1 = __importDefault(require("express"));
const faq_controller_1 = require("./faq.controller");
const router = express_1.default.Router();
// user routes
router.get('/', faq_controller_1.FaqServiceController.getAllFaq);
router.post('/create-faq', faq_controller_1.FaqServiceController.createFaq);
router.patch('/:id', faq_controller_1.FaqServiceController.updateFaq);
router.delete('/:id', faq_controller_1.FaqServiceController.deleteFaq);
exports.FaqRoute = router;
