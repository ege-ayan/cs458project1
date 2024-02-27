import unittest
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium import webdriver
import page


class PythonOrgSearch(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")

    def test_correct_credentials(self):
        email = "test@example.com"
        password = "psw123"
        login_page = page.LoginPage(self.driver)
        self.assertTrue(login_page.is_login_successful(email, password))
    
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()