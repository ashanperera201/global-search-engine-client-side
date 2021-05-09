# STAGE - 1

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run aot-build

# Get all the code needed to run the app
COPY . /app/
# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]

# # STAGE - 2
# FROM nginx:alpine
# COPY --from=node /app/dist/global-search-engine-client-side /usr/share/nginx/html

# CMD ["npm", "start"]