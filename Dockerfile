FROM node:11.13.0-alpine

# Setup env
ARG API_URL
ENV API_URL $API_URL
ENV APP_HOME /project
WORKDIR $APP_HOME

# Install Node packages
RUN cd $APP_HOME
COPY package* $APP_HOME/
RUN npm install

# Copy project files
COPY . $APP_HOME
RUN npm run build

# Allow Node to open Docker port
ENV NUXT_HOST=0.0.0.0
EXPOSE 3000

# Start webserver
CMD [ "npm", "start" ]
