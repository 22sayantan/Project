import requests
from bs4 import BeautifulSoup

URL = 'https://www.javatpoint.com/machine-learning-interview-questions'
r = requests.get(URL)
print(r.text)

# soup = BeautifulSoup(r.content, 'html5lib')
# print(soup.prettify())