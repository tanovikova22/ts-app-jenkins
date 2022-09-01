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

        stage("lint") {
            sh "npx eslint --ext .ts ."
        }
    }

    post {
        always {
            emailext body: currentBuild.result, recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Status build # ${BUILD_NUMBER} - ${currentBuild.result}'
        }
    }

}
