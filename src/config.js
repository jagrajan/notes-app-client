export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'jag-notes-app-uploads',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ytbhavyfn9.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_JKS99YReX',
    APP_CLIENT_ID: '7mjp6qstnjjihti5hk4ostpm86',
    IDENTITY_POOL_ID: 'us-east-1:b00fa017-cc24-4369-9a92-481a455a26f5',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_51HMPexHkMx4moylCUWp6DfsrmmUESfupc5S3Fjctmozfsi4acJtFKsX8w9yQMJ5z1Iz6T0xeC9pbqqFB8Ho0GeRh001fkE8PIm',
}