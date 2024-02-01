export function getAuthData() {
  const fs = require('fs');
  const filePath = "register-data.json";
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData.toString());
  
  return {
    username: jsonData.username as string,
    email: jsonData.email as string,
    password: jsonData.password as string,
    };
  }