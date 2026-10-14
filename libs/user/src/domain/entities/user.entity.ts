export class User {
  private constructor(
    private readonly id: string,
    private readonly email: string,
    private readonly name: string,
    private readonly password: string,
  ) {}

  // Factory method to create a new User, here you can enforce business rules
  static create(
    id: string,
    email: string,
    name: string,
    password: string,
  ): User {
    if (!email.includes("@")) {
      throw new Error("Invalid email format"); // Domain exception
    }
    return new User(id, email, name, password);
  }

  // Getters
  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string {
    return this.name;
  }
  getPassword(): string {
    return this.password;
  }
}
