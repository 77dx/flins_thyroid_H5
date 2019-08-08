package com.flins.zb;

import java.util.Random;

public class All_util {

	public static void main(String [] args) 
	{ 
		String ccxl=generateString(10); 
		System.out.print(ccxl); 
	} 
 
	public static final String allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	public static final String letterChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
	public static final String numberChar = "0123456789"; 
 
	public static String generateString(int length) //参数为返回随机数的长度 
	{ 
		StringBuffer sb = new StringBuffer(); 
		Random random = new Random(); 
		for (int i = 0; i < length; i++) 
		{ 
			sb.append(allChar.charAt(random.nextInt(allChar.length()))); 
		} 
		return sb.toString(); 
	} 

}
