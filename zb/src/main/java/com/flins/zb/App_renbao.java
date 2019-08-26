package com.flins.zb;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.alibaba.fastjson.JSONObject;

public class App_renbao {

	//操作前端页面上传图片
		public void operateHtml(String url,String imgUrl) throws Exception {
			System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe");
			System.out.println("start selenium");
			WebDriver driver=new ChromeDriver();
			driver.get(url);
			driver.findElement(By.id("file")).sendKeys(imgUrl);
			Thread.sleep(4000);
			driver.findElement(By.className("upload_but")).click();
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.titleIs("首页"));
			Thread.sleep(3000);
			driver.close();
		}
	
	public static void main(String[] args) {
		String data = "{\r\n" + 
				"\"hash\":\"Fm-y4UzhNDdSFJWNsOUAzmKusTdY\",\r\n" + 
				"\"key\":\"Fm-y4UzhNDdSFJWNsOUAzmKusTdY\"\r\n" + 
				"}";
		JSONObject object = JSONObject.parseObject(data);
		//JSONObject data = object.getJSONObject("key");
		String key = object.getString("key");
		System.out.println(key);

	}

}
