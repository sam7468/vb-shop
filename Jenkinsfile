node {   

      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }     

      stage('Test image') {           
            npm test
        }     
}
