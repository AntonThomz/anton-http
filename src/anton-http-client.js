const axios = require('axios');
const fs = require('fs')
const FormData = require('form-data');

async function getXios(url, options = {}) {
    const {
        method = 'GET',
        headers = {},
        body = null,
    } = options;
    
    if (!headers['Content-Type']) {
        if (body instanceof URLSearchParams) {
            headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        } else if (body instanceof FormData) {
            headers['Content-Type'] = `multipart/form-data; boundary=${body.getBoundary()}`;
        } else if (typeof body === 'object') {
            headers['Content-Type'] = 'application/json;charset=UTF-8';
        } else if (typeof body === 'string') {
            headers['Content-Type'] = 'text/plain;charset=UTF-8';
        }
    }

    try {
        const response = await axios({
            url,
            method,
            headers,
            data: body instanceof FormData ? body : body instanceof URLSearchParams ? body.toString() : body,
        });
        return response
    } catch (axiosError) {
        console.error('Axios error details:', axiosError.response ? axiosError.response.data : axiosError.message);
}}

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw new Error('Gagal mengambil data JSON.');
    }
}


module.exports = { getData, getXios }