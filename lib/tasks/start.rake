namespace :start do
  desc 'Start dev server'
  task :development do
    exec 'foreman start -f Profile.dev'
  end
  
  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end  
end
task :start => 'start:development'