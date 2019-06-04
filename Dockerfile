FROM node:10-slim AS build
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

# ARG space_id=default_value
# ENV VUE_APP_HEEP_FAMILY_SPACE_ID=space_id

# ARG access_token=default_value
# ENV VUE_APP_CONTENFUL_DELIVERY_TOKEN=access_token

RUN npm run build

# ---------------

FROM node:10-slim
RUN mkdir /app
WORKDIR /app
RUN npm init -y && \
	npm install http-server

COPY --from=build /app/dist /app
EXPOSE 8080
CMD ["./node_modules/.bin/http-server"]
