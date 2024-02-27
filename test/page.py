from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.common.exceptions import NoAlertPresentException

class BasePage(object):
    def __init__(self, driver):
        self.driver = driver

class LoginPage(BasePage):
    def is_login_successful(self, email, password):
        expected_message = "Clicked on Login Button "
        email_field = self.driver.find_element(By.CSS_SELECTOR, "input[type='email']")
        email_field.send_keys(email)

        password_field = self.driver.find_element(By.CSS_SELECTOR, "input[type='password']")
        password_field.send_keys(password)

        login_button = self.driver.find_element(By.CSS_SELECTOR, "button.login-button")
        login_button.click()

        try:
            # Switch to the alert
            alert = Alert(self.driver)
            
            # Get the text of the alert
            alert_text = alert.text
            print("Alert text:", alert_text)

            # Close the alert (accept or dismiss)
            alert.accept()  # To accept the alert
            # Or alert.dismiss()  # To dismiss the alert

        except NoAlertPresentException:
            print("No alert present")
            return False
        if alert_text == expected_message:
            return True
        return False
