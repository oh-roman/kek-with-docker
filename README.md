## Installation
* #### Open and configure .env file
```
cp .env.example .env
```

* #### Stop apache and mysql services
```
sudo service apache2 stop
sudo service mysql stop
```
* #### Docker install
- <a href="https://www.digitalocean.com/community/tutorials/docker-ubuntu-18-04-1-ru" target="_blank">Docker install</a>
- <a href="https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04" target="_blank">docker-compose install</a>

* #### Create a folder for the database specified in env
```
cd _config/docker/
mkdir db
```

* #### Open and configure docker .env file
```
cd _config/docker/
cp .env.example .env
```

* #### Build docker
```
docker-compose up --build
```

* #### Project settings
```
cd _config/docker/

docker-compose exec workspace bash
composer install
php artisan key:generate
npm insatll

# For run frontend watcher
npm run watch
```
