# Real-time Chat Application (Microservices Architecture)

A modern, real-time chat application built using a microservices architecture. This project uses React (Next.js) for the frontend and Node.js for the microservices, with RabbitMQ for messaging and MongoDB for data storage.

## 🚀 Features
- **Microservices-based**: Decoupled services for User Management, Chat messages, and Email notifications.
- **Real-time communication**: Uses Socket.io for instant messaging.
- **Dockerized**: Easy deployment using Docker Compose.
- **RabbitMQ Integration**: Efficient task queue for email and background jobs.

## 📂 Project Structure
```text
├── backend/
│   ├── user/        # Handles user registration, login, and profile (Port 5000)
│   ├── mail/        # Handles email sending using RabbitMQ (Port 5001)
│   └── chat/        # Handlers real-time chat and communication (Port 5002)
├── frontend/        # Next.js Application (Port 3000)
└── docker-deployment/ # Docker-Compose configurations
```

## 🛠 Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [Docker & Docker Compose](https://www.docker.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- [RabbitMQ](https://www.rabbitmq.com/) (started separately as a container)

## 🏗 Setup & Deployment

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Environment Variables:**
   Each service has its own `.env` file. Make sure to fill in the required details (MongoDB URI, JWT Secret, RabbitMQ Host, etc.) in:
   - `backend/user/.env`
   - `backend/mail/.env`
   - `backend/chat/.env`
   - `frontend/.env`

3. **Deploy using Docker Compose:**
   Navigate into the `docker-deployment` directory and run:
   ```bash
   cd docker-deployment
   ./all-deploy.sh
   # Or manually:
   docker-compose up --build -d
   ```

4. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - User Service API: `http://localhost:5000`
   - Chat Service API: `http://localhost:5002`

## 🐳 Running services individually
If you want to start only specific services:
```bash
docker-compose up --build -d <service-name>
# Options: user-service, mail-service, chat-service, frontend
```

## 📜 License
This project is licensed under the MIT License.
