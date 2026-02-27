export declare enum UserRole {
    ADMIN = "admin",
    STUDENT = "student"
}
export declare class User {
    id: string;
    email: string;
    role: UserRole;
}
