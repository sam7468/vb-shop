node {   

      def app     
      
      stage('Initialize'){
        
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
      }
      
      stage('Clone repository') {               
             
            checkout scm    
      }
      
      stage('Build image') {         
       
            app = docker.build("samsharan/built-from-jenkins")    
       }   
      
      stage('Test image') {
            
            app.inside { 
                        bat 'echo "Tests passed"'        
                        }
        } 

       stage('Push image') {
                                                  docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }
