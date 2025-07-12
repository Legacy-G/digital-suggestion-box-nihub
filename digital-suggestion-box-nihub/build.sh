#!/usr/bin/env bash
# Exit if any command fails
set -o errexit

# Move into the Django project directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Apply DB migrations
python manage.py migrate
