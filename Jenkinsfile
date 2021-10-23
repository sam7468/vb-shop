node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com/', 'samsharan') {

        def customImage = docker.build("samshatran/image-built-from-jenkins")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
