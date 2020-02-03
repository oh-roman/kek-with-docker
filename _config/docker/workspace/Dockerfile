FROM php:7.3-apache

RUN apt-get update && apt-get install -y \
        wget git unzip \
        libfreetype6-dev \
        nano \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
	    libmemcached-dev \
        libicu-dev \
        libzip-dev \
        libpq-dev \
        libxslt-dev \
        librabbitmq-dev \
        zlib1g-dev \
        libmagickwand-dev \
        libmagickcore-dev \
	    curl \
	    postgresql \
	    imagemagick \
    && pecl install xdebug \
    && pecl install redis \
    && pecl install apcu \
    && pecl install amqp \
    && pecl install imagick \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd \
    && docker-php-ext-install bcmath \
    && docker-php-ext-install mbstring \
    && docker-php-ext-install xml \
    && docker-php-ext-install pgsql \
    && docker-php-ext-install intl \
    && docker-php-ext-install zip \
    && docker-php-ext-install exif \
    && docker-php-ext-enable redis \
    && docker-php-ext-enable apcu \
    && docker-php-ext-install xsl \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql \
    && docker-php-ext-enable amqp

WORKDIR /var/www

RUN mv $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini
RUN chmod 777 /var/log

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y build-essential


RUN curl -sS https://getcomposer.org/installer | php -- \
        --filename=composer \
        --install-dir=/usr/local/bin && \
        echo "alias composer='composer'" >> /root/.bashrc && \
        composer


WORKDIR /var/www
