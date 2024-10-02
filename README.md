# OR-conference-website

## Project Description

This project is modifed from the source code for the official website of **miduConf**.

The website is developed using Next.js and aims to inform attendees and the community at large about the conference details, including speakers, schedule, and how to register for the event.

## Prerequisites

- docker, docker-compose

## how to start

1. Modify the file name of .env.local.example to .env.local
2. Modify the content of .env.local
3. Enter `sudo docker compose up --bulid` in the terminal
4. After the website is successfully built, enter `http://localhost:3000/api/init` to create two neccessary tables
5. The website is now functioning properly