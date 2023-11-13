# Gunakan image Node.js
FROM node:20-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh proyek ke direktori kerja
COPY . .

# Jalankan perintah build
RUN npm run dev

# Ekspos port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
