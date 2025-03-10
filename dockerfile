# Build stage
FROM node:20 AS nextjs-builder

WORKDIR /app/dashboard-ui
COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .
RUN npm run build

# Nginx stage
FROM nginx:alpine

# Copy the built Next.js files to the Nginx html directory
COPY --from=nextjs-builder /app/dashboard-ui/out /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx is running on
EXPOSE 4000

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]