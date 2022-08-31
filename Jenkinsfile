node {
    stage("checkout") {
        git credentialsId: 'git-personal', url: 'https://github.com/tanovikova22/ts-app-jenkins.git'

        echo "last commit:"
        sh "git log --name-status HEAD^..HEAD"
    }

    stage("installation") {
        sh "npm install"
    }
}
