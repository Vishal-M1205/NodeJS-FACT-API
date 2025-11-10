# 🐾 Animal Facts API

A beginner-friendly Node.js project built using core `http` and `fs` modules.  
It serves fun animal facts and allows adding new ones via a REST API.

## 🚀 Features
- `GET /` → Welcome message with available animals  
- `GET /fact/:animal` → Fetch facts about a specific animal  
- `POST /fact/create` → Add a new animal fact (stored as a JSON file)  

## 🧠 Learnings
- Node.js core modules (`http`, `fs`)
- Basic routing and JSON handling
- File read/write with async/await
- Handling POST requests manually

## ▶️ Run Locally
```bash
# Clone the repo
git clone <your-repo-url>
cd animal-facts-api

# Run the server
node index.js
