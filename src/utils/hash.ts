import bcrypt from 'bcrypt'

const createHash = (pass: string): string => {
    const newHash = bcrypt.hashSync(pass, Number(process.env.SALT_ROUNDS))
    return newHash
}

const validateHash = (pass: string, hash: string): boolean => {
    return bcrypt.compareSync(pass, hash)
}

export {
    createHash,
    validateHash
}