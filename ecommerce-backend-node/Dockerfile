# Use Node image
FROM node:18

# Create app directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
