node {
    nodejs('nodejs') {
        
        stage("checkout") {
            git credentialsId: 'git-personal', url: 'https://github.com/tanovikova22/ts-app-jenkins.git'

            echo "last commit:"
            sh "git log --name-status HEAD^..HEAD"
            echo BUILD_NUMBER
        }

        stage("installation") {
            sh "npm install"
        }

        stage("tests") {
            sh "npm test"
        }
    }

}
