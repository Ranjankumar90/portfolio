pipeline {
  agent {
    docker {
      image 'node:18'
      args '-u root' // run as root to install packages and use Docker
    }
  }

  environment {
    // Your Docker Hub image name
    IMAGE_NAME = 'ranjan9kumar/my-frontend-app'
  }

  stages {

    stage('Checkout Code') {
      steps {
        git credentialsId: 'Token2025', url: 'https://github.com/Ranjankumar90/portfolio.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push $IMAGE_NAME
          '''
        }
      }
    }
  }
}
