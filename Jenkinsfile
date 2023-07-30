/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    stages {
        stage('Build Frontend') {
            steps {
                sh 'cd conscius && npm i --legacy-peer-deps && npm run build'
            }
                stage('Deploy Frontend') {
                    steps {
                        sh 'docker build -t conscius .'
                        sh 'docker run -p 5173:3000 conscius'
                    }
                }
        }
        stage('Build Backend') {
            steps {
                sh 'cd consciusServer && npm i --legacy-peer-deps'
            }
                stage('Deploy Backend') {
                    steps {
                        sh 'docker build -t consciusServer .'
                        sh 'docker run -p 5174:3000 consciusServer'
                    }
                }
        }
    }
}
