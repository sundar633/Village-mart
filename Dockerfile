# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Enable Apache modules
RUN a2enmod rewrite

# ✅ Install PostgreSQL PDO driver
RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_pgsql pgsql

# Optional: suppress ServerName warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Set working directory and copy code
WORKDIR /var/www/html
COPY . .

# Set file permissions
RUN chown -R www-data:www-data /var/www/html
