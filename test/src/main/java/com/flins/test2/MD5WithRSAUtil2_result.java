package com.flins.test2;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

import javax.crypto.Cipher;

import org.apache.commons.codec.binary.Base64;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.parser.Feature;
import com.alibaba.fastjson.serializer.SerializerFeature;
public class MD5WithRSAUtil2_result {
	//private static final Logger logger = LoggerFactory.getLogger(MD5withRSA.class);

   /**
    * 
    * @Title: createMD5Sign
    * @Description: 用md5生成内容摘要，再用RSA的私钥加密，进而生成数字签名
    * @param content
    * @param privateKeyStr
    * @return
    * @throws Exception    参数
    * @throws
    */
    public static String createMD5Sign(String content , String privateKeyStr) throws Exception {
    	PrivateKey privateKey = getPrivateKeyByStr(privateKeyStr);
    	byte[] contentBytes = content.getBytes("utf-8");
        Signature signature = Signature.getInstance("MD5withRSA");
        signature.initSign(privateKey);
        signature.update(contentBytes);
        byte[] signs = signature.sign();
        return Base64.encodeBase64String(signs);
    }

    /**
     * 
     * @Title: verifyMD5Sign
     * @Description: 对用md5和RSA私钥生成的数字签名进行验证
     * @param content
     * @param sign
     * @param publicKeyStr
     * @return
     * @throws Exception    参数
     * @throws
     */
    public static boolean verifyMD5Sign(String content, String sign, String publicKeyStr) throws Exception {
//    	System.out.println(String.format("content...%s   sign...%s  publicKey...%s", content, sign, publicKeyStr));
    	PublicKey publicKey = getPublicKeyByStr(publicKeyStr);
    	byte[] contentBytes = content.getBytes("utf-8");
        Signature signature = Signature.getInstance("MD5withRSA");
        signature.initVerify(publicKey);
        signature.update(contentBytes);
        return signature.verify(Base64.decodeBase64(sign));
    }

    /**
     * 
     * @Title: getPrivateKeyByStr
     * @Description: 字符串转PrivateKey
     * @param privateKey
     * @return
     * @throws Exception    参数
     * @throws
     */
    public static PrivateKey getPrivateKeyByStr(String privateKey) throws Exception {
        byte[] keyBytes;
        keyBytes = Base64.decodeBase64(privateKey);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePrivate(keySpec);
	}
	
    /**
     * 
     * @Title: getPublicKeyByStr
     * @Description: 字符串转PublicKey
     * @param publicKey
     * @return
     * @throws Exception    参数
     * @throws
     */
	public static PublicKey getPublicKeyByStr(String publicKey) throws Exception {
        byte[] keyBytes;
        keyBytes =Base64.decodeBase64(publicKey);
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePublic(keySpec);
	}
    
	/**
	 * 
	 * @Title: encryptRSA
	 * @Description: 公钥加密
	 * @param content
	 * @param publicKey
	 * @return
	 * @throws Exception    参数
	 * @throws
	 */
	public static String encryptRSA(String content, PublicKey publicKey) throws Exception{
		Cipher cipher = Cipher.getInstance("RSA");
		cipher.init(Cipher.ENCRYPT_MODE, publicKey);
		byte[] bytes = cipher.doFinal(content.getBytes("utf-8"));
		return Base64.encodeBase64String(bytes);
	}
	
	/**
	 * 
	 * @Title: decryptRSA
	 * @Description: 私钥解密
	 * @param content
	 * @param privateKey
	 * @return
	 * @throws Exception    参数
	 * @throws
	 */
	public static String decryptRSA(String content, PrivateKey privateKey) throws Exception{
		Cipher cipher = Cipher.getInstance("RSA");
		cipher.init(Cipher.DECRYPT_MODE, privateKey);
		byte[] bytes = cipher.doFinal(Base64.decodeBase64(content));
		return new String(bytes,"utf-8");
	}

   /**
    * 
    * @Title: createKeyPair
    * @Description: 生成密钥对
    * @return
    * @throws Exception    参数
    * @throws
    */
	public static KeyPair createKeyPair() throws Exception {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(512);
        KeyPair keyPair = keyGen.generateKeyPair();
        return keyPair;
    }
	
	
	public static String select(String id) throws Exception {
		String privateKey = "MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAUAwggE8AgEAAkEAkqWDTe+jStTb/I23EmKVDMjyes0D4NQ3e6oBbhAoBcVkwylssj5Nil4q2YeE57sj40kH1QzENSPcx/e6SkOIRwIDAQABAkAl7OIxZLlRYA1ommnvOkmb3dhABAdtvNSAie4Gvezr2MJQfS02pR0eJyoeK5qZ95yFVe7cQdCHR3ctq6nq4hnxAiEA+9Z4C6T2joJT0GI9EWU6EDTfuXHfIQQKs4XGZI+Tf28CIQCVEfpC1MktWRXAvwJsS+ZIRlJnxkvoziqRvzZHuC4YqQIhAMwanwJ4+Sa4s6sQ44OEshFOeP/4LSm5995VjlwUDSvbAiEAiPb+oR8PRMpAUVtu54AJMsjh+BVbM6kRtd4hCl5whBkCIQCyqD+pM/caore6N73YtRHF8P4d9MW5U1QLO9juTAy2Dw==";
		String pubKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJKlg03vo0rU2/yNtxJilQzI8nrNA+DUN3uqAW4QKAXFZMMpbLI+TYpeKtmHhOe7I+NJB9UMxDUj3Mf3ukpDiEcCAwEAAQ==";		
		String content = "{\r\n" + 
				"        \"serialNumber\":\""+id+"\" \r\n" + 
				"}";
		System.out.println(content);
		content = JSON.toJSONString(JSON.parseObject(content, JSONObject.class), SerializerFeature.MapSortField);
		
		String sign = createMD5Sign(content, privateKey);
		System.out.println("sign:"+sign);
		System.out.println("verify sign result :" + verifyMD5Sign(content, sign, pubKey));
		return sign;
	}
	
	public static void main(String[] args) throws Exception {
		String id = "PFC20190617000024";
		MD5WithRSAUtil2_result.select(id);
	}

}
