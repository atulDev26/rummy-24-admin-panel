import axios from "axios";
import { APP_ID, ENCRYPTION_KEY } from "./data.pnp.js";
import { TOKEN } from "./localStorageKeys.js";
import { getDecryptData } from "./decryption.js";
const CryptoJS = require("crypto-js");

export const postApi = async (url, postData) => {
    try {
        let encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(postData),
            ENCRYPTION_KEY
        );
        let resp = await axios({
            url: url,
            method: "post",
            data: { data: encryptedData.toString() },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "app-id": APP_ID,
                "x-access-token": TOKEN(),
            },
        });
        
        if (resp.status === 200) {
            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                console.log(resp.headers["x-access-token"]);
                localStorage.setItem("rummy-24-token", resp.headers["x-access-token"]);
            }
            if (resp.data.data) {
                resp.data.data = getDecryptData(resp.data.data)
            }
            return resp.data;
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};


export const imageUploadApi = async (url, postData) => {
    try {
        let resp = await axios({
            url: url,
            method: "post",
            data: postData,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                "app-id": APP_ID,
                "x-access-token": TOKEN(),
            },
        });
        if (resp.status === 200) {
            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                localStorage.setItem("rummy-24-token", resp.headers["x-access-token"]);
            }
            if (resp.data.data) {
                resp.data.data = getDecryptData(resp.data.data)
            }
            return resp.data;
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};

export const getApi = async (url) => {
    try {
        let encrypted = CryptoJS.AES.encrypt(new URL(url).pathname + new URL(url).search, ENCRYPTION_KEY);
        let resp = await axios({
            url: url,
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "app-id": APP_ID,
                hash: encrypted,
                "x-access-token": TOKEN(),
            },
        });
        console.log(resp);
        
        if (resp.status === 200) {

            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                localStorage.setItem("rummy-24-token", resp.headers["x-access-token"]);
            }
            if (resp.data.data) {
                resp.data.data = getDecryptData(resp.data.data)
            }
            return resp.data;
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};

export const getApiForPayment = async (url) => {
    try {
        let resp = await axios({
            url: url,
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "app-id": APP_ID,
                "x-access-token": TOKEN(),
            },
        });
        if (resp.status === 200) {
            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                localStorage.setItem("rummy-24-token", resp.headers["x-access-token"]);
            }
            else {
                return resp.data;
            }
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};

export const patchApi = async (url, postData) => {
    try {
        let encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(postData),
            ENCRYPTION_KEY
        );
        let resp = await axios({
            url: url,
            method: "patch",
            data: { data: encryptedData.toString() },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "app-id": APP_ID,
                "x-access-token": TOKEN(),
            },
        });
        if (resp.status === 200) {
            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                localStorage.setItem("rummy-24-token", resp.headers["x-access-token"]);
            }
            if (resp.data.data) {
                resp.data.data = getDecryptData(resp.data.data)
            }
            return resp.data;
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};


export const deleteApi = async (url) => {

    try {
        let encrypted = CryptoJS.AES.encrypt(new URL(url).pathname + new URL(url).search, ENCRYPTION_KEY);

        let resp = await axios({
            url: url,
            method: "delete",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "app-id": APP_ID,
                hash: encrypted,
                "x-access-token": TOKEN(),
            },
        });
        if (resp.status === 200) {
            if (resp?.data?.responseCode === 501) {
                localStorage.setItem("rummy-24-token", "");
                window.location = "/";
            }
            if (resp.headers["x-access-token"] != null && resp.headers["x-access-token"] != "") {
                localStorage.setItem(" rummy-24-token", resp.headers["x-access-token"]);
            }
            else {
                if (resp.data.data) {
                    resp.data.data = getDecryptData(resp.data.data)
                }
                return resp.data;
            }
        } else {
            return {
                data: null,
                responseCode: 500,
                message: "Server Error",
                status: "Failed",
            };
        }
    } catch (error) {
        return {
            data: null,
            responseCode: 500,
            message: error.message,
            status: "Failed",
        };
    }
};
