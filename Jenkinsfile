pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/TodoApp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Lint Code') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Archive Build Artifact') {
            steps {
                bat 'tar -czf build-artifact.tar.gz .'
                archiveArtifacts artifacts: 'build-artifact.tar.gz', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Build successful! Email sent to team@example.com'
        }
        failure {
            echo '❌ Build failed! Email sent to team@example.com'
        }
    }
}
