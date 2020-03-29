   module.exports = {
     apps: [
       {
         name: 'feathers',
         cwd: '/usr/src/app/',
         script: 'npm run dev',
         instances: 1,
		     instance_var: 'INSTANCE_ID',
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
