# visualization_final

To use this application, please follow these steps:
1,Install npm,express,ejs,mongodb,body-parser
2,Set up mongodb
3,Run mongodb
4,Cd to /importfile
5,Use commond below to import data to mongodb:
	mongoimport --db test --collection salebystylenew --type csv  --file train4.csv --headerline
	mongoimport --db test --collection mydata --type csv  --file train1.csv --headerline
	mongoimport --db test --collection scatterplot --type csv  --file train2.csv --headerline
6,Cd to /
7,Use commond "node app.js" to start the applicaition
8,Open your broswer, type "localhost:8081"