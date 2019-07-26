---
category: Mybatis
tags:
  - Mybatis
  - Springboot
title: Springboot中mybatis报错：Invalid bound statement (not found)
date: '2019-07-26 08:55'

---

Invalid bound statement (not found)的解决方法

<!-- more -->
::: tip
这个报错的信息是找不到sql语句，那么我们就要到mapper.xml文件以及DAO接口层去看是否是配置和语法的错误。
:::
<TOC />
## 第一种 xml或者dao层语法错误  
在DAO层(或者也有人写作mapper层里)中的*.java文件中函数名是否与对应mapper.xml文件一致。  
如xml文件：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.kozart.demo.demo.mapper.UserMapper">

    <resultMap id="BaseResultMap" type="com.kozart.demo.demo.bean.User">
        <result column="id" jdbcType="INTEGER" property="id" />
        <result column="userName" jdbcType="VARCHAR" property="userName" />
        <result column="passWord" jdbcType="VARCHAR" property="passWord" />
        <result column="realName" jdbcType="VARCHAR" property="realName" />
        <result column="isAdmain" jdbcType="INTEGER" property="isAdmain" />
    </resultMap>

    <select id="queryUser" resultType="com.kozart.demo.demo.bean.User" parameterType="string">
        select * from user where userName=#{userName}
    </select>
</mapper>
```
DAO层函数:  
`   public User queryUser(String userName);`
>注意:
>1. 接口方法名如`queryUser`是否与xml中的id一致 
>2. xml文件分钟的namespace路径是否与接口文件路径一致
>3. parameterType与resultType是否与接口层函数里的参数一致

## 第二种 编译错误
看一下项目路径target\class\中的报错路径中是否含有xml文件  
<font color="red">我就是这个错误 </font>  
**解决方法**:  
1.在pom.xml中加入以下代码：  
```xml
<build>
    <resources>
         <resource>
             <directory>src/main/java</directory>
             <excludes>
                 <exclude>**/*.java</exclude>
             </excludes>
         </resource>
         <resource>
             <directory>src/main/resources</directory>
             <includes>
                 <include>**/*.*</include>
             </includes>
        </resource>
    </resources>
</build>

```
然后重新编译  
2.如果xml文件存在，则查看报错部分是否与源文件一致，若不一致则执行mvn clean install重新编译。
## 第三种：配置错误
在spring配置文件中要添加xml路径  
`mybatis.mapper-locations = classpath:mapping/*Mapper.xml
`
