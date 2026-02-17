🍳 Smart Recipe Generator
Smart Recipe Generator is an AI-powered web application that suggests recipes based on the ingredients available to the user.
Users can:

✅ Enter available ingredients
✅ Detect ingredients using image upload
✅ Filter recipes by diet, difficulty & cooking time
✅ View calories & protein info
✅ Rate recipes ⭐
✅ Add recipes to favourites ❤️

🚀 Live Deployment
🌐 Frontend deployed on Vercel
⚙️ Backend deployed on Render

🛠️ Tech Stack
Frontend      Backend	      Database
HTML	        Node.js	      JSON File
CSS	          Express.js	  Local Storage
JavaScript	  REST API	


📂 Project Structure
SmartRecipeGenerator/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── data/
│   │   └── recipes.json
│
└── uploads/

⚙️ Installation (Local Setup)
1️⃣ Clone Repository
   git clone https://github.com/your-username/SmartRecipeGenerator.git
   cd SmartRecipeGenerator
2️⃣ Install Backend Dependencies
    npm install
3️⃣ Start Server
   npm start
Backend runs on:
http://localhost:5000

☁️ Deployment Guide
Backend (Render)
Create new Web Service
Connect GitHub Repo

Build Command:
npm install

Start Command:
node backend/server.js


Frontend (Vercel)
Import Project
Framework Preset: Other
Deploy
Update API URL in script.js:
const API_URL = "YOUR_RENDER_BACKEND_URL";

👩‍💻 Author
Tanisha Singh
