The goal of this test is to see if I can integrate flask with npm modules using three.js as an example. I am mostly following [this article]( https://codeburst.io/creating-a-full-stack-web-application-with-python-npm-webpack-and-react-8925800503d9).

In order to build this project, you will need both python and node.js installed.

After cloning the repository, install the flasknpm python package in a virtual environment.
```console
>> cd flask-npm-test
>> python -m venv .venv\flasknpm_env
>> .venv\flasknpm_env\Scripts\activate
>> python -m pip install -e .
```

Then install the npm dependencies from the static directory.
```console
>> cd src\flasknpm\static
>> npm install
```

As long as the `flasknpm_env` virtual environment is activated you can launch the server from any directory by running 

```console
>> python -m flask --app flasknpm run
```



