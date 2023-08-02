"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var usersAPI_1 = __importDefault(require("./API/usersAPI"));
var app = (0, express_1.default)();
var corsOptions = {
    origin: "http://localhost:8080",
};
app.use((0, cors_1.default)(corsOptions));
app.use("/users", usersAPI_1.default);
var PORT = 8081;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map