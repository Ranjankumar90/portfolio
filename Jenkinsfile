pipeline {
  agent {
    docker {
      image 'node:18'           // ✅ Node.js + npm preinstalled
      args '-u root'            // ✅ Run as root to allow Docker inside Docker (optional)
    }
  }

  environment {
    IMAGE_NAME = 'ranjan9kumar/my-frontend-app'
  }

  stages {
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
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push $IMAGE_NAME'
        }
      }
    }
  }
}
