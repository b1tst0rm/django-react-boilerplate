from project.settings import *


# Where collectstatic should look for static files

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),
]


# Webpack loader configuration (for production)

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
    }
}
