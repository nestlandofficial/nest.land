import crypto from "crypto";

const ALPHABET = "23456789ACDEFGHKLMNQRSUVWXYZacdefhkmnpqrstuvwxyz";
export function generateToken() {
  return Array.from(crypto.randomBytes(36))
    .map((e) => ALPHABET[e % ALPHABET.length])
    .join("");
}