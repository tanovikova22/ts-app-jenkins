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
        def to = emailextrecipients([
                [$class: 'CulpritsRecipientProvider'],
                [$class: 'DevelopersRecipientProvider'],
                [$class: 'RequesterRecipientProvider']
        ])

        String buildStatus = currentBuild.result
        String resultMessage = ''

        if (buildStatus == 'SUCCESS') {
            resultMessage = "<h3>Your build is succeed</h3>"
        } else {
            String log = currentBuild.rawBuild.getLog(40).join('\n')
            // resultMessage = '''
            //     <h3>Build is not succeed</h3>
            //     <pre>Last messages of logs ${log}</pre>
            // '''
            resultMessage = "Error"
        }

        if (to != null && !to.isEmpty()) {
            echo 'Sending email ...'
            emailext(body: resultMessage, mimeType: 'text/html', to: to, subject: "Status build # ${BUILD_NUMBER} - ${currentBuild.result}")    
        } else {
            echo 'There is no resepients'
        }

        echo "Email to ${to} sent"
    }
}
