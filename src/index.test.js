"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
describe('Test', () => {
    it('greets', () => {
        const name = 'Huey';
        const result = (0, _1.default)(name);
        expect(result).toBe('Hello, Huey!');
    });
});
