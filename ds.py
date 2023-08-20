import requests
from bs4 import BeautifulSoup

def scrape_website():
  """Scrapes the NHS UK website for health and medicine data."""

  # Set the URL to be scraped.
  url = "https://www.nhs.uk/conditions/"

  # Make a request to the URL.
  response = requests.get(url)

  # Parse the HTML response.
  soup = BeautifulSoup(response.content, "html.parser")

  # Loop through the HTML elements and extract data.
  for td in soup.find_all("td"):
    # Do something with the data, e.g. print it to the console.
    print(td.text)

if __name__ == "__main__":
  scrape_website()
