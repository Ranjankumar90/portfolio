pipeline {
  agent any

  environment {
    IMAGE_NAME = 'ranjan9kumar/portfolio-app'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git credentialsId: 'github-token', url: 'https://github.com/Ranjankumar90/portfolio.git', branch: 'main'
      }
    }

    stage('Install Node.js') {
      steps {
        sh '''
          curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
          sudo apt-get install -y nodejs
        '''
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

    stage('Push Docker Image') {
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
