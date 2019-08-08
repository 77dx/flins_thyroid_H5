package com.flins.zb;

import java.io.File;
import java.util.ArrayList;

public class FileName {
	
	public static void main(String[] args) {
		File file = new File("D:\\images");
		File[] fileList = file.listFiles();
		ArrayList<String> files = new ArrayList<String>();
		for (int i = 0; i < fileList.length; i++) {
			files.add(fileList[i].toString());
		}
		
		
		
		for (String string : files) {
			System.out.println(string);
		}

	}
	
	
	public ArrayList<String> filesName(String path){
		File file = new File("D:\\images");
		File[] fileList = file.listFiles();
		ArrayList<String> files = new ArrayList<String>();
		for (int i = 0; i < fileList.length; i++) {
			files.add(fileList[i].toString());
		}
		return files;
	}

}
