package com.flins.zb;
import com.alibaba.fastjson.JSONObject;

public class Test {

	public static void main(String[] args) {
		String response_data = "{\"code\":\"0000\",\"desc\":\"请求成功\",\"data\":[]}";
		JSONObject object = JSONObject.parseObject(response_data);
		Object data = object.getString("data");
		System.out.println(data);
		
		String result = "true";

		if(data.equals("[]")){
			result = "true";	
		}else{
			result = "false";	
		}
		System.out.println(result);

	}

}
