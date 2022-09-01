node {
    try {
            
        stage("checkout") {
            git credentialsId: 'git-personal', url: 'https://github.com/tanovikova22/ts-app-jenkins.git'

            echo "last commit:"
            sh "git log --name-status HEAD^..HEAD"
            echo BUILD_NUMBER
        }

        stage("installation") {
            nodejs('nodejs') {
                sh "npm install"
            }
        }

        stage("tests") {
            nodejs('nodejs') { 
                sh "npm test"
            }
        }

        stage("lint") {
            nodejs('nodejs') { 
                sh "npx eslint --ext .ts ."
            }
        }
    }

    finally {
        emailext body: currentBuild.result, recipientProviders: [buildUser(), contributor(), upstreamDevelopers(), culprits(), developers()], subject: 'Status build # ${BUILD_NUMBER} - ${currentBuild.result}'    }
}
