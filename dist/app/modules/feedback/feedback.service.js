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
exports.FeedbackService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createFeedback = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.feedBack.create({
        //@ts-ignore
        data,
    });
    return result;
});
// update feedback
const updateFeedback = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.default.feedBack.update({
        where: {
            id,
        },
        //@ts-ignore
        data,
    });
    return feedback;
});
// delete feedback
const deleteFeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedBack = yield prisma_1.default.feedBack.delete({
        where: {
            id,
        },
    });
    return feedBack;
});
// get all feedback
const getAllFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
    const feedBacks = yield prisma_1.default.feedBack.findMany();
    return feedBacks;
});
exports.FeedbackService = {
    createFeedback,
    updateFeedback,
    deleteFeedback,
    getAllFeedbacks,
};
