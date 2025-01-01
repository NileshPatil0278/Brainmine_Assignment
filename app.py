import mysql.connector
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Database Configuration
db_config = {
    'user': 'root',
    'password': 'Nilesh@0278P',
    'host': 'localhost',  # Use your database server's IP if not localhost
    'database': 'user_data'  # Your MySQL database name
}

# Initialize MySQL Connection
def get_db_connection():
    connection = mysql.connector.connect(**db_config)
    return connection

# API to handle form submissions
@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    print("iiii, data")
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    if not (name and email and phone and message):
        return jsonify({"success": False, "message": "Invalid input"}), 400

    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute(
    "INSERT INTO user_info (`NAME`, `Email`, `Phone Number`, `Message`) VALUES (%s, %s, %s, %s)",
    (name, email, phone, message)
)
    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({"success": True, "message": "Form submitted successfully"})

# Display stored data
@app.route('/display', methods=['GET'])
def display():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM user_info")
    rows = cursor.fetchall()
    cursor.close()
    connection.close()

    return render_template('display.html', user_info=rows)

if __name__ == '__main__':
    app.run(debug=True)
