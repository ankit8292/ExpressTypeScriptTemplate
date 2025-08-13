import dotenv from 'dotenv';

type ServerConfig = {
  PORT: number;
};

function loadConfig() {
  const result =dotenv.config();
  if (result.error) {
    console.error('Error loading .env file:', result.error);
  } else {
    console.log('Loaded .env file successfully');
  }
}

loadConfig();


export const serverConfig: ServerConfig ={
  PORT : Number(process.env.PORT),
}