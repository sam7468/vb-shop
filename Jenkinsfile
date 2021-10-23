node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com/', 'dockerHub') {

        def customImage = docker.build("samshatran/image-built-from-jenkins")

        customImage.push()
    }
}
