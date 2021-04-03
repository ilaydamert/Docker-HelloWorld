from flask import Flask
app=Flask(__name__)
@app.route('/staj',methods=['GET'])
def hello():
    return ('Hello World from Flask!')
@app.route('/flask',methods=['GET'])
def ok():
    return ('Hello World from Flask!')
if __name__=='__main__':
    app.run(debug=True)
