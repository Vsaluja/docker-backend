## Deployment Workflow

This project uses a GitHub Actions and AWS EC2 based deployment workflow where the Docker image is built directly on the EC2 server.

### Deployment Process

1. Code is pushed to the `main` branch on GitHub.
2. GitHub Actions connects to the EC2 server via SSH.
3. The EC2 server:

   * Pulls the latest repository changes using `git pull`
   * Stops and removes the existing Docker container
   * Builds a fresh Docker image directly on the server
   * Starts a new container using the updated image

### EC2 Server Setup

The EC2 instance contains:

* Docker
* Git
* Full project repository
* Application source code
* Dockerfile
* Environment configuration files

### Initial Server Setup Requirement

For this deployment approach, the project repository must be cloned on the EC2 instance during the initial server setup. After the initial setup, all future deployments automatically pull the latest repository changes using `git pull`.

Example initial setup on EC2:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Deployment Commands Executed on EC2

```bash
git pull origin main

docker stop docker-container || true

docker rm docker-container || true

docker build --no-cache -t myapp .

docker run -d --name docker-container -p 5000:5000 myapp
```

### Benefits of This Approach

* Simple deployment workflow
* No Docker Hub or external image registry required
* Easy to understand and maintain
* Suitable for small to mid-sized applications and personal projects
