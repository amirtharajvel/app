FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000  
# Expose port 3000 for the Node.js application

CMD [ "npm", "start" ]  # Run the application on startup
