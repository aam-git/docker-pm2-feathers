   module.exports = {
     apps: [
       {
         name: 'feathers',
         cwd: '/usr/src/app/feathersApp/',
         script: 'npm run dev',
         instances: 1,
         autorestart: true,
         watch: false,
         max_memory_restart: '1G',
         env: {
           NODE_ENV: 'development',
         },
         env_production: {
           NODE_ENV: 'production',
         },
       },
     ],
   };
