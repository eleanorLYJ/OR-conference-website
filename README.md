# OR-conference-website

## Project Description
This project is a modified version of the source code for the official website of **miduConf**.

The website is built with Next.js and serves to provide information to attendees and the community about the conference, including speakers, the schedule, and registration details.

## Prerequisites
- Docker  
- Docker Compose  

## How to Start
1. Rename `.env.local.example` to `.env.local`.  
2. Edit `.env.local` and update its values accordingly.  
3. Run the following command in the terminal:  
   ```sh
   sudo docker compose up --build
 ```
4. Once the website is successfully built, visit http://localhost:3000/api/init in your browser to create the required database tables.
The website should now be running properly.
