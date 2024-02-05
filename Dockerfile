FROM node:21-alpine3.18
RUN npm install
EXPOSE 8080
CMD ["npm"] ["start"]



