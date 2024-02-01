
export function getAuthData() {
const fs = require('fs');
const filePath = "login-data.json";
const rawData = fs.readFileSync(filePath);
const jsonData = JSON.parse(rawData.toString());

return {
  email: jsonData.email as string,
  password: jsonData.password as string,
  };
}