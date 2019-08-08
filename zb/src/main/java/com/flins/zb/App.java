package com.flins.zb;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.protocol.HTTP;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.alibaba.fastjson.JSONObject;
import com.flins.zb.MD5WithRSAUtil1;
 
public class App {
	
	//获取sign
	public static String getSign(String bzId) throws Exception {
		String data = "{\r\n" + 
				"		\"bzId\": \""+bzId+"\",\r\n" + 
				"		\"guId\": \"gu001\",\r\n" + 
				"		\"gender\":1,\r\n" + 
				"		\"channelCode\": \"test\",\r\n" + 
				"		\"channelName\": \"测试渠道\",\r\n" + 
				"		\"benefitCode\": \"测试benefit\",\r\n" + 
				"		\"productName\": \"test保险\",\r\n" + 
				"		\"cpCode\": \"001\",\r\n" + 
				"		\"cpName\": \"凤林保险\",\r\n" + 
				"		\"planCode\": \"001\",\r\n" + 
				"		\"successUrl\": \"https://www.flins.com.cn\",\r\n" + 
				"		\"failUrl\": \"https://www.baidu.com\"\r\n" + 
				"	}";
		String privateKey = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmQREzXAYmWcIjPyeNCV6SmVLX8XcrZWonh8i5XdSiqs/Pcj4Hxrh6DXbbOJzTVAkUXWbaWKcizydm7PAsNwauQIDAQABAkA9Cy/riTm3ERyfKjRu9ziXL1vnhEbqVRckpaVFR9n9CYA21m++U4I8MyGeNv0NV6GEeATmnsx4xhdnXzD6pfZRAiEAzUCuMD9vYtpXWQHNFDJkgMJKGB8r307CkgYvZ0azlg0CIQC+2Vlr3+mHsXP1qVKJZEChgwhyGXbzhlayLsS5qsr4XQIgVNbEaTr/PnwDmM3Ox+dgdXxZhgj0aHQ0pokZ9PVba80CICKf6DtMCmBV74XYTGMkzxz+Wt/ogs43xy7YkVRmCiD5AiEAxsurHTXqhpBy/2V7qUz6RKDzVM+1Qeu/KTfb3XX+fuw=";
		String pubKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJkERM1wGJlnCIz8njQlekplS1/F3K2VqJ4fIuV3UoqrPz3I+B8a4eg122zic01QJFF1m2linIs8nZuzwLDcGrkCAwEAAQ==";
		String sign = MD5WithRSAUtil1.type_1(privateKey,pubKey,data);
		return sign;
	}
	
	//发送测评请求
	public String post(JSONObject params) throws Exception {
		String url = "https://bus.flins.com.cn/business/api/dispatch";
		HttpClient client = new DefaultHttpClient();
		HttpPost post = new HttpPost(url);
		post.setHeader("Content-Type","application/json;charset=UTF-8");
		
		StringEntity s = new StringEntity(params.toString(),"utf-8");
		s.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE,"application/json"));
		post.setEntity(s);
		HttpResponse httpResponse = client.execute(post);
		
		InputStream inStream = httpResponse.getEntity().getContent();
		BufferedReader reader = new BufferedReader(new InputStreamReader(inStream, "utf-8"));
		StringBuilder strber = new StringBuilder();
		String line = null;
		while ((line = reader.readLine()) != null)strber.append(line + "\n");
		inStream.close();
		String response = strber.toString();
		return response;
	}
	
	//提取响应值
	public String stringToJson(String str) {
		JSONObject object = JSONObject.parseObject(str);
		JSONObject data = object.getJSONObject("data");
		String serialNumber = data.getString("serialNumber");
		String redirectUrl = data.getString("redirectUrl");
		String appId = data.getString("appId");
		String bzId = data.getString("bzId");
		OperateMysql jdbc = new OperateMysql();
		jdbc.add(serialNumber, redirectUrl, appId, bzId);
		jdbc.close();
		return redirectUrl;	
    }
	
	//获取上传图片的地址
	public ArrayList<String> filesName(String path){
		File file = new File(path);
		File[] fileList = file.listFiles();
		ArrayList<String> files = new ArrayList<String>();
		for (int i = 0; i < fileList.length; i++) {
			files.add(fileList[i].toString());
		}
		return files;
	}

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
	
	//调查结果的接口，并写入数据
	public void postResult(String redirectUrl) {
		//请求数据
		OperateMysql jdbc = new OperateMysql();
		String serialNumber = jdbc.select(redirectUrl);
		JSONObject data = new JSONObject();
		data.put("serialNumber", serialNumber);
		int len = redirectUrl.length();
		String token = redirectUrl.substring(len-32, len);
		
		//调用接口
		String url = "https://bus.flins.com.cn/business/zb/getresult";
		HttpClient client = new DefaultHttpClient();
		HttpPost post = new HttpPost(url);
		post.setHeader("Content-Type","application/json;charset=UTF-8");
		post.addHeader("token", token);
		StringEntity s = new StringEntity(data.toString(),"utf-8");
		s.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE,"application/json"));
		post.setEntity(s);
		HttpResponse httpResponse;
		try {
			httpResponse = client.execute(post);
			InputStream inStream = httpResponse.getEntity().getContent();
			BufferedReader reader = new BufferedReader(new InputStreamReader(inStream, "utf-8"));
			StringBuilder strber = new StringBuilder();
			String line = null;
			while ((line = reader.readLine()) != null)strber.append(line + "\n");
			inStream.close();
			String response = strber.toString();
			JSONObject object = JSONObject.parseObject(response);
			JSONObject datas = object.getJSONObject("data");
			String acr = datas.getString("acr");
			String tiRads = datas.getString("tiRads");
			jdbc.addResult(acr, tiRads, redirectUrl);
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	public static void main(String[] args) throws Exception{
		
		App a = new App();
		ArrayList<String> images= a.filesName("D:\\image");
		for (String imgUrl : images) {
			String bzId = All_util.generateString(10);
			JSONObject data = new JSONObject();
			data.put("bzId", bzId);
			data.put("guId", "gu001");
			data.put("gender", 1);
			data.put("channelCode", "test");
			data.put("channelName", "测试渠道");
			data.put("benefitCode", "测试benefit");
			data.put("productName", "test保险");
			data.put("cpCode", "001");
			data.put("cpName", "凤林保险");
			data.put("planCode", "001");
			data.put("successUrl", "https://www.flins.com.cn");
			data.put("failUrl", "https://www.baidu.com");
			
			String sign = getSign(bzId);
			JSONObject params = new JSONObject();
			params.put("appId", "8Ot8ygIByjRtYvFvXvaXmY9IqfE7QQJS");
			params.put("appKey", "key1");
			params.put("apiCode", "thyroidEvaluate");
			params.put("version", "1.0");
			params.put("data", data);
			params.put("sign", sign);
						
			String response = a.post(params);
			String url = a.stringToJson(response);

			a.operateHtml(url,imgUrl);
			a.postResult(url);

		}
	}
}