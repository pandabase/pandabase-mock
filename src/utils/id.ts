class Generator {
    randomString(length: number, prefix = ''): string {
        let result = prefix;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    snowflake(): string {
        const timestamp = Date.now();
        const randomSuffix = Math.floor(100000 + Math.random() * 900000).toString();
        return `${timestamp}${randomSuffix}`;
    }

    pin(): number {
        return Math.floor(100000 + Math.random() * 900000);
    }

    secret(): string {
        return this.randomString(32, 'pb_');
    }

    secretKey(): string {
        return this.randomString(64, 'pb_secret_');
    }

    randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const id = new Generator();

export default id;