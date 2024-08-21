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
- 使用了 getServerSideProps 來從 Supabase 獲取動態資料，並將這些資料傳遞給 Home 組件。
(Supabase 是使用PostgreSQL作為資料庫)


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

## init
啟動你的 Next.js 伺服器，然後在瀏覽器中訪問 http://localhost:3000/api/init。這樣會調用 init.js，並在你的 PostgreSQL 資料庫中創建 Users 和 Documents 表格。
完成後，你可以刪除或禁用這個路由，以防止它再次被調用。

## signup / login
`npm install jsonwebtoken`

.env 記得改 複雜的 secret
JWT_SECRET=your_secret_key_here

---

NextJs + formidable + Typescript. -> upload files
uuid -> 通用唯一辨識碼
### 原始專案
- [ ] TicketHome.jsx 中間一大段沒搞懂， sectoin\ tickect 可以變回 compoent\
- [ ] (目前 getServerSideProps in index.js 部分未知)
- [ ] rewrite() in next.conf.js
### 登入登出
- [X] logout

- [ ] 忘記密碼的 send email (api) 還沒確定
- [ ] session 有設時間 expired嗎?

要測: 
- [ ] 此user還沒註冊，但有其他人幫他投稿 (paper)，那們這user 要確定他註冊成功，並且在 admin 能看見他的 paper

### admins
- [ ] admin，還需 新增刪除

### 投稿
- [ ] 多一個頁面，for 不投稿但想要參加，可繳錢
- [ ]  新增作者資訊、多一個欄位是否是通訊作者 (至少有一位)
- [ ] submit 部分，可以讓他投多篇

### signup
中文英文名*
學校、單位*
職稱*
email*
password*
password* (double check)
聯絡手機 (台灣電話*、國際電話)
地址 *

### 其他
- [ ] https!

document 有 user (fk)嗎


### route 學習
我希望 跳轉前先彈跳視窗
 In Next.js, we can't directly show a popup from the middleware, but we can pass a message to the login page through URL parameters. The login page can then display this message as a warning.

## 規則
conference
一篇paper 一定要有一人交錢 (他有名牌) -> 管理部分也要
一篇可能被兩人繳錢? when 
不繳交摘要的人，也可以交錢

### 繳錢方式

- 需管理頁面、是否繳錢

給他們 document id ，不論 通訊作者或斜作者繳錢都可以!

有一个 /api/getUser/:id 端点来获取单个用户的信息。如果您的 API 结构不同，您可能需要调整相应的 fetch 调用。-> 请注意这种方法可能会导致大量的 API 调用，特别是当有很多文档和作者时。如果性能成为问题，您可能需要考虑在后端实现一个批量获取用户信息的 API，或者使用其他优化策略。

---
new
註冊不用錢了，上傳後就會顯示該繳總金額，
(paper 中的所有的作者 也要以上資訊)

### 上傳區

- [ ] 關鍵字限制5個，也是給框框給他填~ (至少填一個)

除了上傳 word
也讓它 (字數不限制 (如果超過2000字，再跳警告禁制它))


## formidable
https://medium.com/@martin87713/node-js-formidable-%E6%AA%94%E6%A1%88%E8%99%95%E7%90%86%E5%B0%88%E5%AE%B6-4e1c3e3ef306


## 結構:
_app.tsx 是 Next.js 應用程序的入口點。它用於初始化頁面，並在所有頁面之間共享通用功能。


## auth
- [ ] google 認證
- [ ] middleware 弄失敗 -> 改直接用 session 偵測。 

NextAuth Configuration:

- providers: This is where you define how users can log in. In this case, you're using the CredentialsProvider, which allows users to log in with an email and password.

- authorize: This function is part of the CredentialsProvider. It handles the logic for verifying user credentials. It checks if the user exists by calling findUserByEmailAndPassword. If a user is found, it returns the user object (with id, name, and email). Otherwise, it returns null.

- pages: Customizes the paths to the sign-in and error pages. You've specified that if a sign-in fails, it redirects to /login.

- session: By setting strategy: "jwt", you're using JSON Web Tokens (JWT) to manage sessions. This means session information is stored in a token on the client-side rather than in a server-side session.

- Callbacks: (Commented Out)
jwt: This callback is used to manage the JWT token. When a user logs in, you can attach custom properties (like id and role) to the token. This information will then be available in the session.


目前卡在 我希望