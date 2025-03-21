pipeline {
    agent any

    stages {
        stage('Build image and run with docker compose') {
            steps {
                script {
                    sh "docker compose up -d --build"
                }
            }
        }
    }
}