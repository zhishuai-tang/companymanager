package com.telek.companymanager.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.telek.companymanager.dao.UserDao;
import com.telek.companymanager.entity.User;
import com.telek.companymanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public PageInfo<User> getUsers(int pageNum, int pageSize, String username, String telephone) {
        PageHelper.startPage(pageNum, pageSize);
        List<User> users = userDao.getUsers(username, telephone);
        PageInfo result = new PageInfo(users);
        return result;
    }

    @Override
    public int addUser(User user) {
        return 0;
    }
}
