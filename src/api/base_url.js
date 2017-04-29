export default function getBaseUrl() {
   const dev = window.location.hostname === 'localhost';
   return dev ? 'http://localhost:3001/' : '/';
 }
