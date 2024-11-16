# GATE Exam Quiz Project

A simple web application for a GATE CSE exam quiz with a basic frontend using HTML, CSS, and JavaScript, and a backend built with PHP and MySQL.

## 💻 Setup Instructions

### Prerequisites

- [XAMPP](https://www.apachefriends.org/index.html) (or any PHP server setup)
- A web browser (Chrome, Firefox, etc.)

### Steps to Install

1. **Clone or Download** this repository to your local machine.
   
2. **Move the Project to `htdocs`**:
   - Copy the `gate_exam_project` folder to `C:\xampp\htdocs\`.

3. **Start Apache and MySQL**:
   - Open the XAMPP Control Panel.
   - Start **Apache** and **MySQL** services.

4. **Database Setup**:
   - Open [phpMyAdmin](http://localhost/phpmyadmin) in your web browser.
   - Create a new database named `gate_exam`.
   - Import the SQL file:
     - Select the `gate_exam` database.
     - Go to the **Import** tab.
     - Choose the file `gate_exam_project/backend/gate_exam.sql`.
     - Click **Go** to import the table.

### 🌐 Accessing the Application

- Open your web browser and navigate to:


### 📋 Accessing the Database

1. Open [phpMyAdmin](http://localhost/phpmyadmin).
2. Select the `gate_exam` database from the list.
3. Here you can view and manage the `questions` table.

## ✨ Features

- Displays one question at a time.
- User can select an answer or skip the question.
- Provides navigation with **Next**, **Previous**, and **Skip** buttons.
- Highlights selected answers.
- At the end of the quiz, shows the total score, number of correct answers, and incorrect answers.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL

## ⚠️ Troubleshooting

- If **Apache** or **MySQL** fails to start, make sure the ports `80` (for Apache) and `3306` (for MySQL) are not in use by another application.
- For CORS issues, ensure you are accessing the app through `http://localhost`.

## 📖 Further Customization

Feel free to customize the UI, add more questions, or implement additional features like a timer, different quiz categories, or an admin panel for managing questions.

**Happy Coding!** 🚀
