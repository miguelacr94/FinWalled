import * as bcrypt from 'bcryptjs';
export class HashUtil {
    static SALT_ROUNDS = 10;
    static async hash(plainText) {
        const salt = await bcrypt.genSalt(this.SALT_ROUNDS);
        return bcrypt.hash(plainText, salt);
    }
    static async compare(plainText, hash) {
        return bcrypt.compare(plainText, hash);
    }
}
//# sourceMappingURL=hash.util.js.map