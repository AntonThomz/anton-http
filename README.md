# Anton HTTP

## Report Bug

<span style="color: red;">[Report bug](https://wa.me/6283198645688)</span>

Anton HTTP adalah sebuah library untuk melakukan permintaan HTTP dengan dukungan untuk berbagai metode seperti GET, POST, PUT, DELETE, dan HEAD. Library ini menggunakan modul bawaan Node.js untuk membuat permintaan HTTP dengan cara yang sederhana dan fleksibel.

## Fitur

- Mendukung semua metode HTTP: GET, POST, PUT, DELETE, HEAD, dll.
- Mendukung pengiriman data dalam format JSON dan `application/x-www-form-urlencoded`.
- Mudah digunakan dengan antarmuka yang sederhana.
- Menangani kesalahan dengan baik dan memberikan pesan yang informatif.
- Memudahkan untuk membangun URL dengan parameter kueri menggunakan fungsi utilitas.

## Instalasi

Untuk menginstal library ini, gunakan npm:

```bash
npm install anton-http
```

## Contoh Permintaan GET

```javascript
const { getData, getXios } = require('anton-http');

async function fetchData() {
    try {
        const data = await getData('https://api.example.com/data', {
            method: 'GET'
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();
```

## Contoh Permintaan POST

```javascript
const { getData, getXios } = require('anton-http');

async function postData() {
    try {
        const response = await getXios('https://api.example.com/data', {
            method: 'POST',
            body: { key: 'value' },
            contentType: 'application/json'
        });
        console.log(response);
    } catch (error) {
        console.error('Error posting data:', error.message);
    }
}

postData();
```

## Fungsi formatURL

```javascript
const { formatUrl } = require('anton-http');

const url = formatUrl('https://api.example.com/search', { query: 'test', page: 2 });
console.log(url); // Output: https://api.example.com/search?query=test&page=2
