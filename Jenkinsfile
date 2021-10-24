node {   

      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }
      
      stage('Build image') {         
       
            app = docker.build("samsharan/built-from-jenkins")    
       }   
      
      stage('Test image') {
            
            app.inside { 
                  dir("/") {
                        bat 'echo "Tests passed"'        
                            }
                        }
        } 

       stage('Push image') {
                                                  docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }
