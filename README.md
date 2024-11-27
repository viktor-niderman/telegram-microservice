# Telegram Microservice

This project is a microservice built using Node.js for sending messages to a Telegram chat via HTTP POST requests. The service is containerized using Docker and can be deployed using modern Docker Compose.

## Features

- Simple HTTP endpoint to send messages to a Telegram chat.
- Token-based authentication for secure communication.
- Docker containerization for easy deployment and scalability.

## Prerequisites

- [Docker](https://www.docker.com/get-started) (version 20.10 or later)
- Node.js (version 22 or later for local development)
- A Telegram bot token (obtained via [BotFather](https://t.me/botfather))

## Environment Variables

Create a `.env` file in the root by `cp .env.example .env` and fill in the following environment variables:

- **TELEGRAM_BOT_TOKEN**: The token of your Telegram bot.
- **TELEGRAM_CHAT_ID**: The chat ID where the messages should be sent.
- **SECRET_TOKEN**: A custom token for authenticating requests.

## Installation

### 1. Clone the Repository

```bash
git clone git@github.com:viktor-niderman/telegram-microservice.git
cd telegram-microservice
```

### 2. Install Dependencies

If you want to run the application locally (without Docker), install the required dependencies:

```bash
npm install
```

## Usage

### Running with Docker Compose

To run the microservice using Docker Compose, execute the following command:

```bash
docker compose up -d
```

This will build and start the service in detached mode.

### Sending a Message

You can send a message to your configured Telegram chat using a POST request. For example, with `curl`:

```bash
curl -X POST http://localhost:3000/telegram-message \
-H "Content-Type: application/json" \
-d '{"message": "Hello, Telegram!", "token": "your_secret_token"}'
```

### Stopping the Service

To stop the service, use:

```bash
docker compose down
```

## Endpoints

- **POST /telegram-message**
    - **Body Parameters**:
        - `message` (string, required): The message to be sent to the Telegram chat.
        - `token` (string, required): The secret token for authentication.

## Project Structure

- **index.js**: Main application logic.
- **Dockerfile**: Defines the Docker image for the microservice.
- **docker-compose.yml**: Configuration file for Docker Compose.
- **.env**: Environment variables for configuring the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests to help improve this project.

## Contact

For questions or suggestions, contact [viktor.niderman@gmail.com](mailto:viktor.niderman@gmail.com).

