"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["STUDENT"] = "student";
})(UserRole || (exports.UserRole = UserRole = {}));
class User {
    id;
    email;
    role;
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map