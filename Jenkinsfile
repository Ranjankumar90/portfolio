pipeline {
  agent any

  environment {
    IMAGE_NAME = 'ranjan9kumar/my-frontend-app'  // ✅ Replace with your actual DockerHub repo
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/Ranjankumar90/your-repo-name.git'  // ✅ Replace with your GitHub repo
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
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push $IMAGE_NAME'
        }
      }
    }
  }
}
