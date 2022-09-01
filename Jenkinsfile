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
        def to = [
                    [$class: 'CulpritsRecipientProvider'],
                    [$class: 'RequesterRecipientProvider'],
                    [$class: 'DevelopersRecipientProvider'],
                    [$class: 'FailingTestSuspectsRecipientProvider'             ], 
                    [$class: 'FirstFailingBuildSuspectsRecipientProvider']
                ]
                
        String buildStatus = currentBuild.result
        String resultMessage = ''

        if (buildStatus == 'SUCCESS') {
            resultMessage = '<h3>Your build is succeed</h3>'
        } else {
            String log = currentBuild.rawBuild.getLog(40).join('\n')
            resultMessage = '
                <h3>Build is not sucess</h3>
                <pre>Last messages of logs ${log}</pre>
            '
        }
        emailext body: resultMessage, recipientProviders: to,subject: 'Status build # ${BUILD_NUMBER} - ${currentBuild.result}'    
    }
}
