# OR-conference-website

## Project Description

This project is modifed from the source code for the official website of **miduConf**, a Spanish language programming and web development conference.

 The website is developed using Next.js and aims to inform attendees and the community at large about the conference details, including speakers, schedule, and how to register for the event.

## Prerequisites

- Node.js
- npm

## Installation and Configuration

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.

## How to Test the Project

To test the project, follow these steps:

1. Run `npm run test` to run the unit tests (if any).
2. Open your browser and navigate to `http://localhost:3000`.

## index.js
- Next.js 預設會將 pages/index.js 作為網站的主頁面，也就是當你訪問根 URL (/) 時，這個頁面會被渲染

## 安裝 postgrel
參考文章: https://medium.com/pgsql-tw/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-postgresql-windows-%E5%AE%89%E8%A3%9D%E8%A8%98%E9%8C%84-d9cb3600a29a

1. 以 PostgreSQL 的超級用戶（通常是 postgres）身份登入 psql：
`sudo -u postgres psql`
2. 然後，創建 ncku_iim 用戶並設置密碼：
`CREATE USER ncku_iim WITH PASSWORD 'your_password';`
3. 請將 'your_password' 替換為你在 .env.local 文件中設置的密碼。
創建數據庫（如果還沒有的話）：
`CREATE DATABASE ncku_iim;`
4. 將數據庫的所有權限賦予 ncku_iim 用戶：
`GRANT ALL PRIVILEGES ON DATABASE ncku_iim TO ncku_iim;`
`ALTER DATABASE ncku_iim OWNER TO ncku_iim;`
## 結構:
_app.tsx 是 Next.js 應用程序的入口點。它用於初始化頁面，並在所有頁面之間共享通用功能。
## init
啟動你的 Next.js 伺服器，然後在瀏覽器中訪問 http://localhost:3000/api/init。這樣會調用 init.js，並在你的 PostgreSQL 資料庫中創建 Users 和 Documents 表格。
完成後，你可以刪除或禁用這個路由，以防止它再次被調用。


# TODO
.env 記得改 複雜的 secret

### 登入登出
- [X] logout
- [ ] 忘記密碼的 send email (api) 還沒確定
- [ ] 確定 session 有設時間 expired嗎
- [ ]  姓名分開
- [ ] (放棄):  此user還沒註冊，但有其他人幫他投稿 (paper)，那們這user 要確定他註冊成功，並且在 admin 能看見他的 paper

### admin
- [ ] admin，還需 新增刪除
- 管理頁面的功能:顯示document id、新增刪除 document、是否繳錢狀態、顯示目前該繳的總金額， 
### 投稿
- [ ] 多一個頁面，for 不投稿但想要參加，可繳錢
- [ ]  新增作者資訊、多一個欄位是否是通訊作者 (至少有一位)
- [ ] submit 部分，可以讓他投多篇

### 上傳區
- [ ] 關鍵字限制5個，也是給框框給他填 (至少填一個)
- [ ]  至少有一個 corresponding author

### auth
- [ ] google 認證，發送確認信

### 其他
- [ ] https!
- [ ] 串金流
- [ ] 推上 google drive
