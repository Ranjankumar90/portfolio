pipeline {
  agent any

  environment {
    IMAGE_NAME = 'ranjan9kumar/portfolio-app'
    NVM_DIR = "${HOME}/.nvm"
  }

  stages {
    stage('Checkout Code') {
      steps {
        git credentialsId: 'Token2025', url: 'https://github.com/Ranjankumar90/portfolio.git', branch: 'main'
      }
    }

    stage('Install Node.js') {
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
          . "$NVM_DIR/nvm.sh"
          nvm install 18
          nvm use 18
          node -v
          npm -v
        '''
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          . "$NVM_DIR/nvm.sh"
          nvm use 18
          npm install
        '''
      }
    }

    stage('Build App') {
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          . "$NVM_DIR/nvm.sh"
          nvm use 18
          npm run build
        '''
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
