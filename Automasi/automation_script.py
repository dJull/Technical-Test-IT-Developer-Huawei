from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
# Initialization for webdriver path
firefox_path = 'D:\webdriver\geckodriver-v0.34.0-win64\geckodriver.exe'
service = Service(firefox_path)
driver = webdriver.Firefox(service=service)
try:
    # Get web address
    driver.get("file:///D:/Rekruitasi/Frontend/index.html")

    driver.find_element(By.ID, "name").send_keys("Joel R Damanik")
    driver.find_element(By.ID, "email").send_keys("joelr@gmail.com")
    driver.find_element(By.ID, "phone").send_keys("08136525252")
    # Submit form
    submit_button = driver.find_element_by_id("btnSubmit")
    submit_button.click()

    # Wait for data saving until 5 seconds
    time.sleep(5)
finally:
    # Exit browser automatically
    driver.quit()
