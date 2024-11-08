# Use the official Nginx image based on Alpine Linux
FROM nginx:alpine

# Set the working directory to /site
WORKDIR /site

# Copy the content of your site's files into the container's /site/static directory
COPY site ./static

# Copy your custom Nginx configuration to the container
COPY ./nginx/my.conf /etc/nginx/conf.d/mysite.conf

# Remove the default Nginx configuration to avoid conflicts
RUN rm /etc/nginx/conf.d/default.conf

# Copy your index.html file to the appropriate location for Nginx to serve it
COPY ./site/index.html /usr/share/nginx/html/index.html

# Expose port 80 to access the server from outside the container
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]
