"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSofa = exports.OpenAPI = void 0;
const router_1 = require("./router");
const sofa_1 = require("./sofa");
var open_api_1 = require("./open-api");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return open_api_1.OpenAPI; } });
function useSofa(config) {
    return (0, router_1.createRouter)((0, sofa_1.createSofa)(config));
}
exports.useSofa = useSofa;
