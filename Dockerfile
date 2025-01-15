# Stage 1: Compile and Build angular codebase
# Use an official Node.js runtime as a parent image
FROM node:18.20-alpine as build

# Set the working directory to /app
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install dependencies
RUN npm install

# Build the application
RUN npm run build


# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/kitty-cash/browser /usr/share/nginx/html

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx configuration
COPY kitty-cash-app-nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
