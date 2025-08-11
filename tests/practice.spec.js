import {test,expect} from "@playwright/test"

test('Login verification',async ({page})=>{
   await page.goto('https://freelance-learn-automation.vercel.app/signup')
   await page.getByPlaceholder('Name').fill('owais')
   await page.locator('#email').fill('babba@boba.com')
   await page.getByPlaceholder('Password').fill('nahimaalum')
   await page.locator("//div[@class='interests-div']/descendant::div[1]/div/input").check();
   await page.locator("//div[@class='interests-div']/descendant::div[3]/div/input").check();
   const radb=await page.locator('#gender1');
   const isSelected=await radb.isChecked();
   if(!isSelected)
   {
   await radb.click();
   }
   const state=await page.locator('#state')
   await state.selectOption({value:'Andhra Pradesh'})
  const hobdrop=await page.locator('#hobbies')
   await hobdrop.selectOption(['Singing','Dancing'])

   await page.locator("//button[text()='Sign up']").click()
  const alertText=await page.locator("//div[@class='Toastify__toast-body']").textContent();
  await expect(alertText).toContain('Signup successfully, Please login!')
})