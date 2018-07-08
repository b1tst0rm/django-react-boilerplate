# django-react-boilerplate
A boilerplate to integrate the following technologies:
Django (backend)
React JS (frontend)

The goal for this boilerplate is to provide a simple template that encourages
rapid, pain-free development of a modern, single-page web application.

Feel free to open issues with problems, bugs, or questions. I will do my best
to address them.

## Setup
Using a virtualenv with Python 3 (`virtualenv venv --python=python3` then `source venv/bin/activate`), install pip dependencies: `pip install -r requirements.txt`

Install NPM (I recommend using NVM for beginners - https://github.com/creationix/nvm)

Install NPM dependencies by navigating to `frontend/` and running `npm install` (this will create a `node_modules` directory, do NOT check this into source control. It is already in `.gitignore` for you)

Create Django database initial migrations: `python manage.py migrate`

## Usage
### Development
Run the hot webpack development server in `frontend/` for live reloading: `npm run start`

Run the Django development server in top-level: `python manage.py runserver`

Now any changes made to frontend components will automatically be reloaded in the
browser at `127.0.0.1:8000`

### Production
Build the webpack JS-related files/bundles: `npm run build`

Collect static files: `python manage.py collectstatic --settings=project.production_settings`

Run Django with production settings: `python manage.py runserver --settings=project.production_settings`

## Explanation
The Django project, called `project`, has two django apps: `frontend` and `backend`. `backend` is intended to hold the models, serialziers, and API views for your SPA's APIs and database access methods. `frontend` contains the code for an ejected vanilla create-react-app project stuffed inside a django app. This app has one view, and it is to return the HTML page containing the React project root/hook.
