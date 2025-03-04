import CryptoJS from "crypto-js";
const KEY = "ADF-Exchange-Backend";

export const encryptRequestData = (data) => {
  const json = JSON.stringify(data);
  const hashedPass = CryptoJS.AES.encrypt(json, KEY).toString();

  return hashedPass;
};

export const decryptResponseData = async (text) => {
  try {
    var bytes = CryptoJS.AES.decrypt(text, KEY);
    let data = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};
