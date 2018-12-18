#!/bin/bash --login
# Cook site
rake prepare
# Prepare to login
shopt -q login_shell && echo 'Login shell' || echo 'Not login shell'
# Start the server
bundle exec jekyll serve
# Logoff
exit
