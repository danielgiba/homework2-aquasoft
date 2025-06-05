#tasks 1-3

! transform data from csv in UTF-8 (initial UTF-16),separator: \t

#install all dependencies from package.json
npm install

#initialize sequelize project structure
npx sequelize-cli init

#create the database defined in config/config.js
npx sequelize-cli db:create

#generate the City model with CityName and Country columns
npx sequelize-cli model:generate --name City --attributes CityName:string,Country:string

#generate the Region model with PropertyStateProvinceName column
npx sequelize-cli model:generate --name Region --attributes PropertyStateProvinceName:string

#generate the Hotel model with multiple relevant attributes
npx sequelize-cli model:generate --name Hotel --attributes GlobalPropertyID:integer,GlobalPropertyName:string,... (from the tables)

#apply all migration files to the database
npx sequelize-cli db:migrate

#run the script to import and populate data from CSV
npx ts-node src/import-data.ts

#tasks 4-7
-> in "controllers" define the 5 api: get/post/put/delete hotels, get hotel by name
-> there are error codes for response( 400 errors for temp error, 500 errors for permanent)
-> the i created all routes for hotels using "hotelCtrl"
-> for JWT to respond the requests, i make "auth.ts"
-> in src-> "app.ts" & "index.ts" to parse&connect to postman & pg

! to run the app:
npm run dev
-> port = 3000
-> http://localhost:3000/hotels

exp: GET http://localhost:3000/hotels (all hotels)

-> for hotel_name : GET http://localhost:3000/hotels/Hotel%20Ski%20Plaza%20And%20Wellness (%20 = SPACE)

-> POST login (to take TOKEN): POST http://localhost:3000/login
or in git bash: curl -X POST curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "admin"}'

-> POST hotels: 
1. HEADERS
Authorization: Bearer $token
Content-Type: application/json
2. BODY : {new data hotel}
3. POST http://localhost:3000/hotels

-> PUT/update hotel:
1. HEADERS
Authorization: Bearer $token
Content-Type: application/json
2. BODY: {updated info hotel}
3. PUT http://localhost:3000/hotels/ID_HOTEL

-> DELETE hotel: DELETE http://localhost:3000/hotels/ID_HOTEL



