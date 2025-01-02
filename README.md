This Assignment is a simple web application designed to collect basic user information, validate the data, and store it in a database. It includes the following features:

- A user-friendly frontend with a web form for data collection.
- Client-side validation for form fields using JavaScript.
- A backend API developed in Python to handle form submissions, sanitize input data, and interact with the database.
- A separate page to display all stored user data in a readable format.

  Demo Video - https://drive.google.com/file/d/1qxXIOvKKR-wXjLsiHqAx61X5AXE7-4WJ/view?usp=sharing

---

## Features

1. **Frontend:**
   - HTML form with fields for Name, Email, Phone Number, and Message.
   - Styled using CSS for a modern and responsive look.
   - JavaScript-enabled client-side validation.
   - Form submission without reloading the page.

2. **Backend:**
   - Python API to handle form submissions and data validation.
   - Input sanitization to ensure data integrity.
   - Connection to a SQL database for data storage.

3. **Database:**
   - A SQL table with the following schema:
     ```sql
     CREATE TABLE user_data (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         phone_number VARCHAR(15) NOT NULL,
         message TEXT NOT NULL
     );
     ```

4. **Display Page:**
   - Displays all stored user data in a tabular format.
![image](https://github.com/user-attachments/assets/fc99bd6d-2f7a-4dfa-8ecb-7046c30e9397)
![image](https://github.com/user-attachments/assets/b2514361-5393-4a08-a87b-6daaad88f5b9)
![image](https://github.com/user-attachments/assets/2fa227db-50a0-49e5-91e7-fa38020093c8)

## Usage
1. Fill in the user information form and submit the data.
2. If all validations pass, the data is sent to the backend and stored in the database.
3. Navigate to the `/admin` page to see the stored user data.


