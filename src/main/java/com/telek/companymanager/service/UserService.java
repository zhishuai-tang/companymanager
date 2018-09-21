package com.telek.companymanager.service;

import com.github.pagehelper.PageInfo;
import com.telek.companymanager.entity.User;

public interface UserService {
    /**
     * 分页查找用户
     * @param pageNum 当前页码
     * @param pageSize 每页条数
     * @param username 员工姓名
     * @param telephone 员工电话
     * @return 符合要求的分页后的记录 PageInfo<User>
     */
    PageInfo<User> getUsers(int pageNum, int pageSize, String username, String telephone);


    int addUser(User user);

}
