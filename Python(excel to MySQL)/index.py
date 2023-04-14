import pandas as pd
import mysql.connector

# user input
# file_name = 'record.csv'

# dataframe = pd.read_csv(file_name)

# database connection:
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "Hello@123",
    database = "consumer"
)

# connection check
print(mydb)

# mysql command check
mycursor = mydb.cursor()

mycursor.execute("SHOW TABLES")

val = mycursor.fetchall()

print(val)

# make a list for tables
table_list = []

# add table name in above list 
for x in val:
    table_list += x

print(table_list)
# user given table name :
table_name = input('enter table name : ')

# check table name exist or not :
if(table_name in table_list):
    print('exist')

    # 1. if exist then fetch all table data

    # 2. make a dataframe
    
    # 3. check data match with excel fetch dataframe 

    # 4. if all data match then already updated

    # 5. else show rows which is not exist in datatables 

    # 6. make a boolean user choice to go for update or exit

    # 7. if choice is 'update' then go for update into specific table of database


else:
    print('not exist')

