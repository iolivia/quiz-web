FROM node:8-alpine

WORKDIR /home/app

# Install npm dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application source
COPY . .

# Compile source
RUN npm run build

# Run tests
RUN npm run test-coverage