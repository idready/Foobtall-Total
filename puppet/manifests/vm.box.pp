###############
# Welcome !!! #
###############

###
# If you are creating a new machine for a new project, please make sure you've checked that:
# 1- the MySQL section is correctly filled,
# 2- the Apache configuration match the project's needs
###

#Defining default path
Exec { path => '/usr/bin:/bin:/usr/sbin:/sbin' }
#Adding puppet group non-available by default on lucid64 box
group { 'puppet':
    ensure => 'present',
}

#Defining apt-cacher proxy
#file {'/etc/apt/apt.conf.d/01proxy':
#    content => 'Acquire::http { Proxy "http://10.1.1.1:3142"; };',
#    notify => Exec['apt-get update']
#}

#Defining apt-get update
exec { 'apt-get update':
    command => '/usr/bin/apt-get update && touch /tmp/apt.update',
    onlyif => "/bin/sh -c '[ ! -f /tmp/apt.update ] || /usr/bin/find /etc/apt -cnewer /tmp/apt.update | /bin/grep . > /dev/null'",
}
#Regeneration of locale to avoid ubuntu completion bug
exec { 'locale-gen fr_FR.UTF-8': }
# Configure timezone of the server
exec { 'echo "export TZ=Europe/Paris" >> /etc/environment': }

package { ['apache2', 'libapache2-mod-php5', 'php5-mysql', 'php5-cli', 'php5-gd', 'php5-curl', 'php5-mcrypt', 'mysql-server']:
    ensure => installed,
    require => Exec['apt-get update'],
    notify => Exec['a2enmod rewrite']
}

exec {'a2enmod rewrite':}