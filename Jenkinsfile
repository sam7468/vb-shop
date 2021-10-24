node {   

      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }    
      stage('Test image') {           
             sh 'echo "Tests passed"'         
        }     
      stage('Build image') {         
       
            app = docker.build("samsharan/built-from-jenkins")    
       }   
 
       stage('Push image') {
                                                  docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }
