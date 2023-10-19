"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoute = void 0;
const express_1 = __importDefault(require("express"));
const feedback_controller_1 = require("./feedback.controller");
const router = express_1.default.Router();
// user routes
router.get('/', feedback_controller_1.FeedBackServiceController.getAllFeedbacks);
router.post('/create-feedback', feedback_controller_1.FeedBackServiceController.createFeedback);
router.patch('/:id', feedback_controller_1.FeedBackServiceController.updateFeedback);
router.delete('/:id', feedback_controller_1.FeedBackServiceController.deleteFeedback);
exports.FeedbackRoute = router;
