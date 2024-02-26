from selenium import webdriver
from selenium.webdriver.common.by import By
import time


# Initialize WebDriver (assuming you've downloaded ChromeDriver and it's in your PATH)
driver = webdriver.Chrome()

# Open the login page
driver.get("http://localhost:3000")

# Find the email field and enter your credentials
email_field = driver.find_element(By.CSS_SELECTOR, "input[type='email']")
email_field.send_keys("test@example.com")

# Find the password field and enter your password
password_field = driver.find_element(By.CSS_SELECTOR, "input[type='password']")
password_field.send_keys("password123")

# Find the login button and click it
login_button = driver.find_element(By.CSS_SELECTOR, "button.login-button")
login_button.click()

time.sleep(5)
# Close the browser
driver.quit()
