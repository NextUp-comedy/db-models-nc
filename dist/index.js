"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.settings = exports.roles = exports.ReportContentReportAssociation = exports.ContentReportWatchesAssociation = exports.Watches = exports.User = exports.UserRole = exports.Report = exports.ContentReport = exports.Content = exports.Settings = exports.sequelize = void 0;
var index_1 = require("./database/index");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return index_1.sequelize; } });
Object.defineProperty(exports, "Settings", { enumerable: true, get: function () { return index_1.Settings; } });
Object.defineProperty(exports, "Content", { enumerable: true, get: function () { return index_1.Content; } });
Object.defineProperty(exports, "ContentReport", { enumerable: true, get: function () { return index_1.ContentReport; } });
Object.defineProperty(exports, "Report", { enumerable: true, get: function () { return index_1.Report; } });
Object.defineProperty(exports, "UserRole", { enumerable: true, get: function () { return index_1.UserRole; } });
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return index_1.User; } });
Object.defineProperty(exports, "Watches", { enumerable: true, get: function () { return index_1.Watches; } });
Object.defineProperty(exports, "ContentReportWatchesAssociation", { enumerable: true, get: function () { return index_1.ContentReportWatchesAssociation; } });
Object.defineProperty(exports, "ReportContentReportAssociation", { enumerable: true, get: function () { return index_1.ReportContentReportAssociation; } });
var fakeData_1 = require("./database/fakeData");
Object.defineProperty(exports, "roles", { enumerable: true, get: function () { return fakeData_1.roles; } });
Object.defineProperty(exports, "settings", { enumerable: true, get: function () { return fakeData_1.settings; } });
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return fakeData_1.users; } });
//# sourceMappingURL=index.js.map