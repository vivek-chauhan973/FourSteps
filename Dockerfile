# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production environment
FROM node:18-alpine AS runner
WORKDIR /app

ENV KEY=value

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Create uploads directory and set permissions
RUN mkdir -p ./public/uploads && chown -R node:node ./public/uploads

USER node

EXPOSE 3000
CMD ["npm", "start"]