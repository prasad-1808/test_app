# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the frontend
RUN npm run build

# Expose port for frontend
EXPOSE 5173

# Serve frontend using Vite
CMD ["npm", "run", "dev"]
