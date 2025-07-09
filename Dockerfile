# Base image with Node
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Install static file server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
