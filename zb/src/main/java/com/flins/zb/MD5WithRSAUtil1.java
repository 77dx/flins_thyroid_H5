package com.flins.zb;
import java.io.FileInputStream;
import sun.misc.BASE64Encoder;
import java.io.IOException;
import java.io.InputStream;
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
import sun.misc.BASE64Encoder;
import com.flins.zb.All_util;
public class MD5WithRSAUtil1 {
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
	
	
	//图片转成base64
	public static String base64(String image_url) {
		InputStream in = null;
		byte[] data = null;
		
		//读取图片字节数组
		try {
			in = new FileInputStream(image_url);
			data = new byte[in.available()];
			in.read(data);
			in.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//对字节数组Base64编码
		BASE64Encoder encoder = new BASE64Encoder();
		String base = encoder.encode(data);
		return base;				
	}
	
	//上传图片
	public static String type_2(String prikey,String pubkey,String imageUrl) throws Exception {
		String privatekey = prikey;
		String pubKey = pubkey;		
		String content = MD5WithRSAUtil1.base64(imageUrl);
		String sign = createMD5Sign(content,privatekey);
		System.out.println("sign:"+sign);
		System.out.println("verify sign result :" + verifyMD5Sign(content, sign, pubKey));
		return sign;
	}
	
	//上传文本
		public static String type_1(String privatekey,String pubkey,String data) throws Exception {
			String privateKey = privatekey;
			String pubKey = pubkey;		
			String content = data;
			System.out.println(content);
			content = JSON.toJSONString(JSON.parseObject(content,JSONObject.class), SerializerFeature.MapSortField);
			String sign = createMD5Sign(content,privateKey);
			System.out.println("sign:"+sign);
			System.out.println("verify sign result :" + verifyMD5Sign(content, sign, pubKey));
			return sign;
		}
		
	
	public static void main(String[] args) throws Exception {
		String bzId = All_util.generateString(10);
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
		String privateKey = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAirqcCMveqrIyJmkpa/2IEqJLZatLNC7rD5FXUNOhQR6mvUS8aG6Up3gszb/od5imwfoYqqJoqYer8xAvOXufWQIDAQABAkB3lRvjSTkLEse/7G5UNBsTVOqBHQKaXMcqiDIn7gTWR/rT61Ev0VQySfw47H2BTTRm5ZUsOnVdEedsmsj5H1bxAiEA0d3Ub6O4SrhbrMhJpzj3B5tCGkhsfeQqf1/cCWvnPtcCIQCpOYkcKDupydoAN3OUSr7jYPfaVwvf5a/Pd1VUf0o9TwIhAMvLh5SVvsvIdTW3FVbuyWw4h5twQvKJU/92/fykLN3nAiA/+4QOxFuCn9IwIMcve29fM0ujHyRbPFHT5G+76gDc2wIgW1Pwv4Q6WkfhlZnkG9eIHRmpiBKTcMArFn24wNA50Nw=";
		String pubKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIq6nAjL3qqyMiZpKWv9iBKiS2WrSzQu6w+RV1DToUEepr1EvGhulKd4LM2/6HeYpsH6GKqiaKmHq/MQLzl7n1kCAwEAAQ==";
		String sign = MD5WithRSAUtil1.type_1(privateKey,pubKey,data);
//		MD5WithRSAUtil1.type_2(privateKey,pubKey,"D:/images/TR6.jpg");
		
		
		
	}
	
}
