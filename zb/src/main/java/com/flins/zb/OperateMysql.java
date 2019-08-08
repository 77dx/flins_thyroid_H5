package com.flins.zb;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class OperateMysql {

	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://localhost:3306/cathy?serverTimezone=UTC";
    static final String USER = "root";
    static final String PASS = "123456";
    Connection  coon=null;
    public OperateMysql(){
    	try{
    		//  加载驱动程序
          Class.forName(JDBC_DRIVER);
          coon=(Connection)DriverManager.getConnection(DB_URL,USER,PASS);
          if(!coon.isClosed()){
        	  System.out.println("成功连接数据库！");
          } 
        }catch (Exception e){
                e.printStackTrace();
            }
    }
    
    public void close(){
        try{
             this.coon.close();
         }catch(Exception e){
            e.printStackTrace();
        }
   }
   
    //插入测评请求数据
    public void add(String serialNumber,String redirectUrl,String appId,String bzId){
    	//String sql="insert into usrInfo(username,gender,age) values(?,?,?)";　　//向usrInfo表中插入数据
    	String sql="insert into zb(serialNumber,redirectUrl,appId,bzId) values('"+serialNumber+"','"+redirectUrl+"','"+appId+"','"+bzId+"')";
        try{
             PreparedStatement preStmt=(PreparedStatement)this.coon.prepareStatement(sql);
             //preStmt.setString(1, name);
             //preStmt.setInt(3, age);
             //preStmt.setString(2, gender);　　//和上面的注释的一块组成另外一种插入方法
             preStmt.executeUpdate();
             System.out.println("插入数据成功！");
             preStmt.close();
        }catch(Exception e){
             e.printStackTrace();
         }
     }
    
  //插入测评请求数据
    public void addResult(String acr,String tiRads,String redirectUrl){
    	//String sql="insert into usrInfo(username,gender,age) values(?,?,?)";　　//向usrInfo表中插入数据
    	String sql="update zb set acr = '"+acr+"',tiRads = '"+tiRads+"' where redirectUrl = '"+redirectUrl+"'";
        try{
             PreparedStatement preStmt=(PreparedStatement)this.coon.prepareStatement(sql);
             //preStmt.setString(1, name);
             //preStmt.setInt(3, age);
             //preStmt.setString(2, gender);　　//和上面的注释的一块组成另外一种插入方法
             preStmt.executeUpdate();
             System.out.println("插入数据成功！");
             preStmt.close();
        }catch(Exception e){
             e.printStackTrace();
         }
     }
    
    //查询测评单号
    public String select(String redirectUrl) {
    	String sql="select serialNumber from zb where redirectUrl = '"+redirectUrl+"' ";
    	String serialNumber = null;
    	try {
			Statement stmt=(Statement)this.coon.createStatement();
			ResultSet rs=(ResultSet)stmt.executeQuery(sql);
			while(rs.next()){
				serialNumber = rs.getString("serialNumber");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return serialNumber;
    	
    }
    
    //保存测评数据
    public void saveData(String serialNumber,String redirectUrl,String appId,String bzId) {
    	Connection conn = null;
        Statement stmt = null;
        try{
            // 注册 JDBC 驱动
            Class.forName(JDBC_DRIVER);
        
            // 打开链接
            System.out.println("连接数据库...");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
        
            // 执行查询
            System.out.println(" 实例化Statement对象...");
            stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("insert into zb(serialNumber,redirectUrl,appId,bzId) values(?,?,?,?)");
            // 完成后关闭
            rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            // 处理 JDBC 错误
            se.printStackTrace();
        }catch(Exception e){
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 关闭资源
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }// 什么都不做
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
        System.out.println("Goodbye!");
	}
	public static void main(String[] args) {
		
		OperateMysql o = new OperateMysql();
		o.addResult("3", "3", "https://weixin.flins.com.cn/reinsurance/index.html?token=a6599b2feb904033b30db614723add78");
	}

}
