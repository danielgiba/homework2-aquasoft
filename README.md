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
npx sequelize-cli model:generate --name Hotel --attributes GlobalPropertyID:integer,GlobalPropertyName:string,...

#apply all migration files to the database
npx sequelize-cli db:migrate

#run the script to import and populate data from CSV
npx ts-node src/import-data.ts
