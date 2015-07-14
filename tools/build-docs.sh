#!/bin/sh
export PATH=vendor/bin:$PATH
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR && cd ../
composer install
phpunit
phploc --log-xml=./build/phploc.xml ./src
phpcs --standard=PSR1,PSR2 --report=checkstyle --report-file=build/phpcs.xml ./src/
phpdox 