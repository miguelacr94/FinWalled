import * as bcrypt from 'bcryptjs';

export class HashUtil {
  private static readonly SALT_ROUNDS = 10;

  static async hash(plainText: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.SALT_ROUNDS);
    return bcrypt.hash(plainText, salt);
  }

  static async compare(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
