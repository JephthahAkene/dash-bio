import dash
import dash_bio
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import dash_table as dt
import logging
import os
from config import DASH_APP_NAME
import base64

logging.getLogger("werkzeug").setLevel(logging.ERROR)

app = dash.Dash(__name__)
app.config["suppress_callback_exceptions"] = True

server = app.server

apps = {
    filename.replace(".py", "").replace("app_", ""): getattr(
        getattr(
            __import__(".".join(
                ["tests", "dash", filename.replace(".py", "")])), "dash"
        ),
        filename.replace(".py", ""),
    )
    for filename in os.listdir(os.path.join("tests", "dash"))
    if filename.startswith("app_") and filename.endswith(".py")
}

for key in apps:
    apps[key].callbacks(app)

app.layout = html.Div(
    id="index-waitfor",
    children=[
        dcc.Location(id="location"),
        html.Div(id='gallery-header', children=[
            html.Div(id='gallery-title', children=[
                'Dash Bio'
            ]),
            html.Div(id='gallery-subtitle', children=[
                'A suite of bioinformatics components \
                compatible with Plotly\'s Dash.'
            ]),
        ]),
        html.Div(id="container")
    ]
)


def demo_app_img_src(name):
    ''' Returns the base-64 encoded image corresponding
        to the specified app.'''
    pic_fname = './tests/dash/images/pic_{}.png'.format(
        name.replace('app_', '')
    )
    try:
        return 'data:image/png;base64,{}'.format(
            base64.b64encode(
                open(pic_fname, 'rb').read()).decode())
    except Exception:
        return 'data:image/png;base64,{}'.format(
            base64.b64encode(
                open('./assets/dashbio_logo.png', 'rb').read()).decode())


def demo_app_name(name):
    ''' Returns a capitalized title for the app, with "Dash"
        in front.'''
    return 'Dash ' + name.replace('app_', '').replace('_', ' ').title()


def demo_app_desc(name):
    ''' Returns the content of the description specified in the app. '''
    desc = ''
    try:
        desc = apps[name].description()
    except AttributeError:
        pass
    return desc


@app.callback(Output("container", "children"), [Input("location", "pathname")])
def display_app(pathname):
    if pathname == '/{}'.format(DASH_APP_NAME) \
       or pathname == '/{}/'.format(DASH_APP_NAME) \
       or pathname == '/' or pathname is None:
        return html.Div(
            id='gallery-apps',
            children=[
                html.Div(className='gallery-app', children=[
                    dcc.Link(
                        children=[
                            html.Img(className='gallery-app-img',
                                     src=demo_app_img_src(name)),
                            html.Div(className='gallery-app-info', children=[
                                html.Div(className='gallery-app-name', children=[
                                    demo_app_name(name)
                                ]),
                                html.Div(className='gallery-app-desc', children=[
                                    demo_app_desc(name)
                                ]),
                            ])
                        ],
                        href="/{}/{}".format(
                            DASH_APP_NAME,
                            name.replace("app_", "").replace("_", "-")
                        )
                    )
                ]) for name in apps
            ])

    app_name = \
        pathname.replace(
            '/{}/'.format(DASH_APP_NAME), '/').replace(
                "/", "").replace("-", "_")

    if app_name in apps:
        return html.Div(id="waitfor", children=apps[app_name].layout())
    else:
        return """
            App not found.
            You supplied "{}" and these are the apps that exist:
            {}
        """.format(
            app_name, list(apps.keys())
        )


@app.callback(
    Output('gallery-header', 'children'),
    [Input('location', 'pathname')]
)
def hide_header(pathname):
    if pathname != '/{}'.format(DASH_APP_NAME) \
       and pathname != '/{}/'.format(DASH_APP_NAME) \
       and pathname != '/' and pathname is not None:
        return []
    return [
        html.Div(id='gallery-title', children=[
            'Dash Bio'
        ]),
        html.Div(id='gallery-subtitle', children=[
            'A suite of bioinformatics components \
            compatible with Plotly\'s Dash.'
        ]),
    ]


app.css.config.serve_locally = True
app.scripts.config.serve_locally = True

if __name__ == "__main__":
    app.run_server(debug=False)
