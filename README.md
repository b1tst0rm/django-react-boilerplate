# django-react-boilerplate
A boilerplate to integrate the following technologies:
Django (backend)
React JS (frontend)
Redux (state management for React)

The goal for this boilerplate is to provide a simple template that encourages
rapid, pain-free development of a modern, single-page web application.

Feel free to open issues with problems, bugs, or questions. I will do my best
to address them.

## Setup
Using a virtualenv with Python 3, install pip dependencies: `pip install -r requirements.txt`

Install NPM and Node.

Install NPM dependencies by navigating to `frontend/` and running `npm install`

## Usage
### Development
Run the hot webpack development server for live reloading: `npm run start`

Run the Django development server: `python manage.py runserver`

Now any changes made to frontend components will automatically be reloaded in the
browser at `127.0.0.1:8000`

### Production
Build the webpack JS-related files/bundles: `npm run build`

Collect static files: `python manage.py collectstatic --settings=project.production_settings`

Run Django with production settings: `python manage.py runserver --settings=project.production_settings`

