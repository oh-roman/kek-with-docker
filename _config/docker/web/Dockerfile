FROM php:7.3-apache

RUN deluser www-data
RUN adduser --disabled-password --no-create-home --uid 1000 --shell /bin/bash www-data
RUN usermod -u 1000 www-data

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

RUN ln -snf /usr/share/zoneinfo/"America/New_York" /etc/localtime && \
echo "America/New_York" > /etc/timezone

RUN mv $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini
RUN chmod 777 /var/log
COPY conf.ini $PHP_INI_DIR/conf.d/
COPY xdebug.ini $PHP_INI_DIR/conf.d/xdebug.ini
COPY apache.conf /etc/apache2/sites-available/000-default.conf

#RUN apt-get install ssl-cert
#RUN make-ssl-cert generate-default-snakeoil
#RUN usermod --append --groups ssl-cert root
#RUN ls -l /etc/ssl/certs/ssl-cert-snakeoil.pem /etc/ssl/private/ssl-cert-snakeoil.key
#RUN a2enmod ssl
RUN a2enmod rewrite
RUN service apache2 restart
