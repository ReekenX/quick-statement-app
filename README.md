# Quick Statement App

Upload bank statement (CSV file) and it will be automatically matched/mapped to specific categories (food, kids stuff, clothes and etc.). And of course, once in a while - see generated reports where you spend most, what earns the most.

## Tech Stack

NuxtJS used to get server sider rendering. It's great framework for quickly building tools like this.

Lib Papa Parse was used for quick CSV files reading and filtering.

App can be localized, thanks to vue-18n.

Built with TailwindCSS so wrote just 2 lines of CSS. Mobile first APP.

## Screenshots

![Index Page](screenshots/v1.0/index.png)

![Statement Analysis Page](screenshots/v1.0/statement.png)

![Reports Index Page](screenshots/v1.0/reports_index.png)

![Reports Detail Page](screenshots/v1.0/reports_detail.png)

## Installing

In order to launch this project you will need Docker with Docker Compose.

Setup and launch API project:

    git clone https://github.com/ReekenX/quick-statement-api.git
    cd quick-statement-api
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

Setup and launch APP project:

    git clone https://github.com/ReekenX/quick-statement-app.git
    cd quick-statement-app
    docker-compose up --build

After a minute or two project will be up and running on `http://localhost:3000`.

