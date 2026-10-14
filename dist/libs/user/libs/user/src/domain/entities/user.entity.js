export class User {
    id;
    email;
    name;
    password;
    constructor(id, email, name, password) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    static create(id, email, name, password) {
        if (!email.includes("@")) {
            throw new Error("Invalid email format");
        }
        return new User(id, email, name, password);
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
}
//# sourceMappingURL=user.entity.js.map