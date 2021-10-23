node {   

      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }     

      stage('Test image') {           
            bat 'npm test'
        }     
}
