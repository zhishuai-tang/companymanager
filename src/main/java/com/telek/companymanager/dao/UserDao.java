package com.telek.companymanager.dao;

import com.telek.companymanager.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    /**
     * 1、如果传入username!=null and username!=''添加username过滤
     * 2、如果传入telephone!=null and telephone!=''添加telephone过滤
     * 3、否则查询所有记录
     * @param username 员工姓名
     * @param telephone 员工手机号
     * @return 符合要求的记录集 List<User>
     */
    List<User> getUsers(@Param("username") String username, @Param("telephone") String telephone);
}
