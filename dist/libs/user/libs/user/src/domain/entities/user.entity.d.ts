export declare class User {
    private readonly id;
    private readonly email;
    private readonly name;
    private readonly password;
    private constructor();
    static create(id: string, email: string, name: string, password: string): User;
    getId(): string;
    getEmail(): string;
    getName(): string;
    getPassword(): string;
}
