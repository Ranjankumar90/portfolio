pipeline {
  agent any

  stages {
    stage('Install Node.js') {
      steps {
        sh '''
          curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
          apt-get install -y nodejs
          node -v
          npm -v
        '''
      }
    }

    stage('Install Deps') {
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
        sh 'docker build -t ranjan9kumar/my-frontend-app .'
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push ranjan9kumar/my-frontend-app'
        }
      }
    }
  }
}
