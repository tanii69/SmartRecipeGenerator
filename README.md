🍳 Smart Recipe Generator



🚀 Live Demo



🌐 Frontend (Vercel):
https://smart-recipe-generator-lake-mu.vercel.app/



⚙️ Backend (Render API):
https://smartrecipegenerator-1-cod7.onrender.com
________________________________________




✨ About the Project




Smart Recipe Generator is a modern full-stack AI application that helps users discover recipes using the ingredients they already have.


Users can:

•	Enter ingredients manually

•	Upload food images to detect ingredients automatically

•	Filter recipes based on diet, cooking time, and difficulty

The system intelligently matches available ingredients with recipes stored in a structured JSON database to suggest the most relevant dishes.

The application is fully deployed using:

•	Vercel → Frontend

•	Render → Backend

________________________________________
🧩 Implementation Approach




The Smart Recipe Generator follows a modular full-stack architecture:




🔹 Frontend




Built using:

•	HTML

•	CSS

•	JavaScript



Users can:


•	Enter ingredients manually


•	Upload food images


•	Apply filters (diet, time, difficulty)


Frontend communicates with the deployed backend API hosted on Render.





🔹 Backend

Built using:

•	Node.js

•	Express.js

Handles:

•	Recipe matching logic

•	Filtering based on user preferences

•	Rating & Favorite functionality

•	Image-based ingredient detection (AI)

________________________________________




🔹 Data Storage

Recipes are stored in:

📂 backend/data/recipes.json

This allows:

•	Faster deployment

•	No database configuration

•	Lightweight storage

•	Easy scalability later

________________________________________




🔹 AI Integration

Uses:

•	Hugging Face Vision API

To:

•	Detect ingredients from uploaded food images

•	Convert detected ingredients into recipe matches

________________________________________




🔥 Features

🧠 AI Ingredient Detection

•	Upload food images

•	Automatically detect ingredients

•	Smart matching even with incomplete inputs

________________________________________

🍽️ Advanced Filtering

Filter recipes by:

•	Diet (Veg / Non Veg / Vegan etc.)

•	Difficulty

•	Cooking Time

________________________________________

❤️ Personalized Experience

•	⭐ Rate Recipes

•	❤️ Save Favorites

•	Real time matching

________________________________________

📊 Smart Matching System

•	Ingredient similarity scoring

•	Partial ingredient support

•	Ranked recipe suggestions

________________________________________
🛠️ Tech Stack

Layer	Technology

Frontend	                 HTML, CSS, JavaScript
Backend	                 Node.js, Express.js
Data Storage	           JSON Database
AI Integration         	  Hugging Face Vision API
Frontend Deployment	     Vercel
Backend Deployment	     Render

________________________________________

📂 Project Structure

SMART-RECIPE-GENERATOR
│
├── frontend

│   ├── index.html

│   ├── script.js

│   ├── style.css

│
├── backend

│   ├── routes

│   ├── data

│   │   └── recipes.json

│   ├── uploads

│   ├── .env

│   ├── server.js

│   └── package.json

│
├── package.json

└── README.md

________________________________________

⚙️ Getting Started (Local Setup)

1️⃣ Clone the Repository

git clone https://github.com/tanushree637/Smart-Recipe-Generator

cd Smart-Recipe-Generator

________________________________________

2️⃣ Install Backend Dependencies

cd backend

npm install

________________________________________

3️⃣ Configure Environment Variables

Create .env inside backend folder:

PORT=5000

HF_TOKEN=your_huggingface_api_key

________________________________________

4️⃣ Run Backend Server

npm start

Backend runs at:

http://localhost:5000

________________________________________

🌍 Deployment

🚀 Frontend (Vercel)

1.	Push project to GitHub
	
2.	Go to Vercel Dashboard
	
3.	Import GitHub Repository
	
4.	Deploy
	
________________________________________

🌐 Backend (Render)

Create a Web Service and set:

Build Command: npm install

Start Command: npm start

Add Environment Variable:

HF_TOKEN=your_huggingface_api_key

Deploy 🚀

________________________________________

🎯 Why This Project?

✔ Real-world AI Integration

✔ Full Stack Architecture

✔ No Database Required

✔ Lightweight Deployment

✔ Personalized Recipe Recommendation

________________________________________

💡 Future Enhancements

•	User Authentication

•	MongoDB / PostgreSQL Integration

•	Shopping List Generator

•	AI Cooking Instructions

•	Recipe Video Integration


