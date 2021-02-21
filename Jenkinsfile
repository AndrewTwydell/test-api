pipeline {
  agent {
    docker {
      image "node:12-alpine"
      args "-p 3000:3000 -u root:root"
    }
  }

  environment {
    CI = "true"
  }

  stages {
    stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
  }
}