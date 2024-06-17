FROM node:18-alpine as build
# Create app directory

WORKDIR /usr/src/build

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

RUN npx prisma generate

RUN npm run build

RUN npm install

FROM node:18-alpine as prod

WORKDIR /usr/src/app

COPY --from=build /usr/src/build/dist ./dist
COPY --from=build /usr/src/build/node_modules ./node_modules
COPY --from=build /usr/src/build/prisma ./prisma
COPY --from=build /usr/src/build/package*.json ./

CMD [ "npm", "run", "start:prod" ]
